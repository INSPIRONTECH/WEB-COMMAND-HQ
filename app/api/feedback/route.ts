import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log('Received feedback submission:', data);

        const NOTION_API_KEY = process.env.NOTION_API_KEY;
        const NOTION_DB_ID = process.env.NOTION_CLIENT_FEEDBACK_DB_ID;
        const WHATSAPP_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
        const WHATSAPP_PHONE_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
        const WHATSAPP_RECIPIENT = process.env.WHATSAPP_RECIPIENT;

        const results = {
            notion: 'skipped',
            whatsapp: 'skipped'
        };

        // 1. Save to Notion
        if (NOTION_API_KEY && NOTION_DB_ID) {
            try {
                const notionResponse = await fetch('https://api.notion.com/v1/pages', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${NOTION_API_KEY}`,
                        'Content-Type': 'application/json',
                        'Notion-Version': '2022-06-28'
                    },
                    body: JSON.stringify({
                        parent: { database_id: NOTION_DB_ID },
                        properties: {
                            'Business Name': {
                                title: [{ text: { content: data.businessName || 'Unknown Business' } }]
                            },
                            'Contact Person': {
                                rich_text: [{ text: { content: data.contactPerson || '' } }]
                            },
                            'Email': {
                                email: data.email || null
                            },
                            'Phone': {
                                phone_number: data.phone || null
                            },
                            'Received Support': {
                                select: { name: data.receivedSupport || 'No' }
                            },
                            'Support Details': {
                                rich_text: [{ text: { content: data.supportDetails || '' } }]
                            },
                            'Missing Support': {
                                rich_text: [{ text: { content: data.whatWasNotProvided || '' } }]
                            },
                            'Current Needs': {
                                rich_text: [{ text: { content: data.whatYouNeed || '' } }]
                            },
                            'Suggestions': {
                                rich_text: [{ text: { content: data.improvementSuggestions || '' } }]
                            },
                            'Customization Requirements': {
                                rich_text: [{ text: { content: data.customizationRequirements || '' } }]
                            },
                            'Budget': {
                                select: { name: data.budget || 'Not sure yet' }
                            },
                            'Submission Date': {
                                date: { start: new Date().toISOString() }
                            }
                        }
                    })
                });

                if (notionResponse.ok) {
                    results.notion = 'success';
                } else {
                    const errorText = await notionResponse.text();
                    console.error('Notion API Error:', errorText);
                    results.notion = 'failed';
                }
            } catch (error) {
                console.error('Notion submission failed:', error);
                results.notion = 'error';
            }
        }

        // 2. Send WhatsApp Notification
        if (WHATSAPP_TOKEN && WHATSAPP_PHONE_ID && WHATSAPP_RECIPIENT && WHATSAPP_TOKEN !== 'your_access_token_here') {
            try {
                const messageBody = `*New Client Feedback*\n\n` +
                    `*Business:* ${data.businessName}\n` +
                    `*Contact:* ${data.contactPerson}\n` +
                    `*Phone:* ${data.phone}\n` +
                    `*Budget:* ${data.budget}\n` +
                    `*Needs:* ${data.whatYouNeed?.substring(0, 100)}${data.whatYouNeed?.length > 100 ? '...' : ''}`;

                const whatsappResponse = await fetch(`https://graph.facebook.com/v17.0/${WHATSAPP_PHONE_ID}/messages`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        messaging_product: 'whatsapp',
                        to: WHATSAPP_RECIPIENT,
                        type: 'text',
                        text: { body: messageBody }
                    })
                });

                if (whatsappResponse.ok) {
                    results.whatsapp = 'success';
                } else {
                    const errorText = await whatsappResponse.text();
                    console.error('WhatsApp API Error:', errorText);
                    results.whatsapp = 'failed';
                }
            } catch (error) {
                console.error('WhatsApp notification failed:', error);
                results.whatsapp = 'error';
            }
        } else {
            console.warn('WhatsApp skipped: Creds missing or token is placeholder');
        }

        return NextResponse.json({ success: true, results });
    } catch (error) {
        console.error('Feedback API Error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
