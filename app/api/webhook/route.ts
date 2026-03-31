/**
 * INSPIRON TECH - WhatsApp Hub Webhook
 * Feature: Whale Detection & Institutional Handshake
 * Status: Mission-Critical Final Polish
 */

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const mode = searchParams.get('hub.mode');
    const token = searchParams.get('hub.verify_token');
    const challenge = searchParams.get('hub.challenge');

    const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'INSPIRON_TECH_STRIKE_2026';

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        return new NextResponse(challenge, { status: 200 });
    } else {
        return new NextResponse('Forbidden', { status: 403 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const payload = await req.json();

        const value = payload.entry?.[0]?.changes?.[0]?.value || payload.value;
        const message = value?.messages?.[0];
        const contact = value?.contacts?.[0];

        if (message) {
            const leadPhone = message.from || contact?.wa_id;
            const leadBsuid = message.from_user_id; // BSUID Rollout March 31
            const leadIdentifier = leadBsuid || leadPhone; // Fallback logic
            const leadName = contact?.profile?.name || 'Valued Client';
            const leadText = message.text?.body?.toLowerCase() || "";

            console.log(`[INSPIRON SENTRY] Lead Identified: ${leadName} (ID: ${leadIdentifier})`);

            // Whale Detection Logic
            const isWhale = leadText.includes("audit") || leadText.includes("crore");

            if (isWhale) {
                console.log(`[WHALE DETECTED] Triggering Handshake for ${leadName}`);
                await sendTemplateResponse(leadIdentifier, leadName);

                // PHASE 4: TRIGGER INTERNAL ALERT TO MD ABU HASAN
                const MY_PERSONAL_NUMBER = "8801719300849";
                console.log(`[ALERT] Sending Whale Alert to ${MY_PERSONAL_NUMBER}`);
                await sendInternalWhaleAlert(MY_PERSONAL_NUMBER, leadName, leadIdentifier, leadText);
            }
        }

        return new NextResponse("EVENT_RECEIVED", { status: 200 });
    } catch (error) {
        console.error('WEBHOOK_ERROR:', error);
        return new NextResponse("INTERNAL_ERROR", { status: 500 });
    }
}

async function sendTemplateResponse(to: string, name: string) {
    const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    if (!phoneId) {
        console.error('[WEBHOOK] PHONE_NUMBER_ID env var is not set — cannot send template response');
        return;
    }
    const url = `https://graph.facebook.com/v21.0/${phoneId}/messages`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            messaging_product: "whatsapp",
            to: to,
            type: "template",
            template: {
                name: "welcome_message__english",
                language: { code: "en" },
                components: [{
                    type: "body",
                    parameters: [
                        {
                            type: "text",
                            parameter_name: "customer_name",
                            text: name
                        }
                    ]
                }]
            }
        }),
    });

    const data = await response.json();
    console.log(`[HANDSHAKE_STATUS] Result for ${to}:`, JSON.stringify(data));
    return data;
}

async function sendInternalWhaleAlert(to: string, clientName: string, clientPhone: string, text: string) {
    const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    if (!phoneId) {
        console.error('[WEBHOOK] PHONE_NUMBER_ID env var is not set — cannot send whale alert');
        return;
    }
    const url = `https://graph.facebook.com/v21.0/${phoneId}/messages`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            messaging_product: "whatsapp",
            to: to,
            type: "text",
            text: {
                body: `🚨 INSPIRON WHALE ALERT\n\nClient: ${clientName}\nPhone: ${clientPhone}\nQuery: "${text}"\n\nAction: Engage immediately for BDT 9M Mission.`
            }
        }),
    });

    const data = await response.json();
    console.log(`[INTERNAL_ALERT_STATUS] Result for MD Abu Hasan:`, JSON.stringify(data));
    return data;
}
