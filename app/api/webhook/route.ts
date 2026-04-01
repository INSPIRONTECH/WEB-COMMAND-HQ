import { NextRequest, NextResponse } from 'next/server';

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN!;
const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN!;
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID!; // 917810161405498

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('[WhatsApp Webhook] ✅ Verified – BSUID-safe (CORE-05)');
    return new NextResponse(challenge, { status: 200 });
  }
  return new NextResponse('Forbidden', { status: 403 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('[WhatsApp Webhook] 📥 Payload:', JSON.stringify(body, null, 2));

    const entry = body.entry?.[0];
    const change = entry?.changes?.[0]?.value;

    if (change?.event === 'phone_number_name_update') {
      console.log(`[Display Name/Username] Decision: ${change.decision}`);
    }

    if (change?.messages) {
      for (const msg of change.messages) {
        const from = msg.from;                    // BSUID or phone
        const userId = msg.user_id || from;       // BSUID primary
        const rawText = msg.text?.body || msg.interactive?.button_reply?.title || '';
        const text = rawText.toLowerCase();

        console.log(`[Message] BSUID/From: ${from} | UserID: ${userId} | Text: ${rawText}`);

        // Whale Detection (restored + expanded)
        const isWhale = text.includes("audit") || text.includes("crore") || 
                       text.includes("migrate") || text.includes("vat");

        if (isWhale) {
          console.log(`[WHALE DETECTED] Triggering handshake for ${userId}`);
          await sendTemplateResponse(userId, "Valued Client");           // welcome template
          await sendInternalWhaleAlert("8801719300849", userId, rawText);   // alert to you
        }

        // Manager.io CRM mapping stub (ready for upsert)
        // contact_bsuid: userId, contact_username: extracted if present
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('[WhatsApp Webhook] ❌ Error:', error);
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}

async function sendTemplateResponse(to: string, name: string) {
  const url = `https://graph.facebook.com/v21.0/${PHONE_NUMBER_ID}/messages`;
  await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: to,
      type: "template",
      template: {
        name: "welcome_message__english",
        language: { code: "en" },
        components: [{ type: "body", parameters: [{ type: "text", text: name }] }]
      }
    }),
  });
}

async function sendInternalWhaleAlert(to: string, clientId: string, text: string) {
  const url = `https://graph.facebook.com/v21.0/${PHONE_NUMBER_ID}/messages`;
  await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: to,
      type: "text",
      text: { body: `🚨 WHALE ALERT\nClient: ${clientId}\nQuery: "${text}"\nAction: Engage immediately.` }
    }),
  });
}
