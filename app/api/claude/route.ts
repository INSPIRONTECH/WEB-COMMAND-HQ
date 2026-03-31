import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────────────────────
// CLAUDE API ROUTE — WEB-COMMAND-HQ
// Server-side only. API key never reaches the browser.
// Model: claude-haiku-4-5 (fastest + cheapest for lead qualification)
// Swappable via CLAUDE_MODEL env var (n-Law 03: Zero Vendor Lock-in)
// ─────────────────────────────────────────────────────────────────────────────

const MODEL = process.env.CLAUDE_MODEL ?? "claude-haiku-4-5-20251001";

const SYSTEM_PROMPT = `You are an expert ERP proposal assistant for INSPIRON TECH — 
Bangladesh's only officially listed Manager.io Advisor, based in Dhaka.

Your job: Analyze an incoming business inquiry and output a structured JSON proposal.

FIRM CONTEXT:
- Specialty: Manager.io ERP setup, chart of accounts design, zero-loss data migration, 
  financial reporting, BPMN process mapping
- Industries served: Real estate, manufacturing, agro/farm, trading, services
- Delivery protocol: Audit → Design → Migration → Training
- Error tolerance: 0.1% — precision-first, no guessing

OUTPUT FORMAT (strict JSON, no markdown wrapper):
{
  "score": <integer 1-10, 10 = perfect fit>,
  "tier": "hot" | "warm" | "cold",
  "industry_detected": "<detected industry>",
  "current_system_assessment": "<brief assessment of their current setup>",
  "recommended_service": "<Primary service recommendation>",
  "starter": { "title": "<tier name>", "price": "<USD amount>", "scope": "<1-line scope>" },
  "standard": { "title": "<tier name>", "price": "<USD amount>", "scope": "<1-line scope>" },
  "advanced": { "title": "<tier name>", "price": "<USD amount>", "scope": "<1-line scope>" },
  "next_step": "<What the prospect should do next in 1 sentence>",
  "one_liner": "<A 1-sentence hook that speaks to their exact problem>"
}

PRICING REFERENCE (adjust based on scope complexity):
- Basic setup: $150–$400
- Full migration: $400–$1,100  
- Multi-entity/complex: $800–$2,000
- BPMN mapping: $150–$900
- Financial dashboard: $300–$1,600

Be precise. No fluff. No disclaimers. JSON only.`;

export async function POST(req: NextRequest) {
    // Guard: require API key
    if (!process.env.ANTHROPIC_API_KEY) {
        return NextResponse.json(
            { error: "Claude API not configured. Add ANTHROPIC_API_KEY to environment." },
            { status: 503 }
        );
    }

    try {
        const body = await req.json();
        const { name, business, industry, currentSystem, message } = body;

        // Validate minimum required fields
        if (!message || message.trim().length < 10) {
            return NextResponse.json(
                { error: "Workflow challenge description is required (min 10 characters)." },
                { status: 400 }
            );
        }

        const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

        const userContent = `
Lead details:
- Name: ${name || "Not provided"}
- Business: ${business || "Not provided"}
- Industry (self-reported): ${industry || "Not specified"}
- Current system: ${currentSystem || "Not specified"}
- Their problem / message: ${message}
        `.trim();

        const response = await client.messages.create({
            model: MODEL,
            max_tokens: 1024,
            system: SYSTEM_PROMPT,
            messages: [{ role: "user", content: userContent }],
        });

        const rawText = response.content[0].type === "text" ? response.content[0].text : "";

        // Parse JSON defensively
        let proposal;
        try {
            // Strip any accidental ```json wrapper if model adds it
            const cleaned = rawText.replace(/^```json\s*/i, "").replace(/\s*```$/i, "").trim();
            proposal = JSON.parse(cleaned);
        } catch {
            console.error("[Claude Route] JSON parse failed:", rawText);
            return NextResponse.json(
                { error: "Proposal generation failed. Please try again." },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            proposal,
            usage: {
                input_tokens: response.usage.input_tokens,
                output_tokens: response.usage.output_tokens,
            },
        });

    } catch (error) {
        console.error("[Claude Route] Error:", error);
        return NextResponse.json(
            { error: "Internal server error. Please try again." },
            { status: 500 }
        );
    }
}
