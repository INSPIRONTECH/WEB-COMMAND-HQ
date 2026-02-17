import { NextResponse } from 'next/server';

// Using standard fetch to avoid @notionhq/client dependency issues
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const DATABASE_ID = process.env.NOTION_CLIENT_FEEDBACK_DB_ID!;

const WHATSAPP_API_URL = `https://graph.facebook.com/v18.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;
const WHATSAPP_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN!;
const YOUR_PHONE = process.env.WHATSAPP_RECIPIENT!;

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // 1. Save to Notion using standard fetch
        const notionResponse = await fetch('https://api.notion.com/v1/pages', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${NOTION_API_KEY}`,
                'Content-Type': 'application/json',
                'Notion-Version': '2022-06-28'
            },
            body: JSON.stringify({
                parent: { database_id: DATABASE_ID },
                properties: {
                    'Business Name': {
                        title: [{ text: { content: data.businessName || 'Unknown' } }],
                    },
                    'Contact Person': {
                        rich_text: [{ text: { content: data.contactPerson || '' } }],
                    },
                    'Email': { email: data.email || null },
                    'Phone': {
                        phone_number: (() => {
                            let p = data.phone || '';
                            // Robust BD mobile validation: 01 followed by 3-9, plus 8 digits (total 11)
                            if (p.match(/^01[3-9]\d{8}$/)) {
                                return '+88' + p;
                            }
                            // Fallback: if starts with 01 but doesn't match strict regex, still try adding +88
                            if (p.startsWith('01')) {
                                return '+88' + p;
                            }
                            return p || null;
                        })()
                    },
                    'Received Support': {
                        select: { name: data.receivedSupport === 'yes' ? 'Yes' : data.receivedSupport === 'no' ? 'No' : 'Minimal' },
                    },
                    'Customization Requirements': {
                        rich_text: [{ text: { content: data.customizationRequirements || 'N/A' } }],
                    },
                    'Budget Range': data.budget ? {
                        select: {
                            name: (() => {
                                switch (data.budget) {
                                    case '5k-15k': return '5k-15k';
                                    case '15k-50k': return '15k-50k';
                                    case '50k-100k': return '50k+';
                                    case '100k+': return '50k+';
                                    case 'not-sure': return 'Not sure';
                                    default: return 'Not sure';
                                }
                            })()
                        }
                    } : null,
                    'Status': { select: { name: 'New' } },
                    'Priority': { select: { name: data.customizationRequirements ? 'High' : 'Medium' } },
                },
            })
        });

        if (!notionResponse.ok) {
            const errorText = await notionResponse.text();
            throw new Error(`Notion API Error: ${errorText}`);
        }

        const notionData = await notionResponse.json();

        // 2. WhatsApp Notification
        const message = `
🔔 NEW CLIENT FEEDBACK

*Business:* ${data.businessName}
*Contact:* ${data.contactPerson} (${data.phone})
*Budget:* ${data.budget || 'Not specified'}

${data.customizationRequirements?.substring(0, 150) || ''}

📋 Notion: https://notion.so/${notionData.id.replace(/-/g, '')}
    `.trim();

        if (WHATSAPP_TOKEN && WHATSAPP_TOKEN !== 'your_access_token_here') {
            try {
                const whatsappRes = await fetch(WHATSAPP_API_URL, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        messaging_product: 'whatsapp',
                        to: YOUR_PHONE,
                        type: 'text',
                        text: { body: message },
                    }),
                });

                if (!whatsappRes.ok) {
                    console.error('WhatsApp notification failed:', await whatsappRes.text());
                }
            } catch (whatsappError) {
                console.error('WhatsApp notification error:', whatsappError);
                // Don't fail the whole request if just WhatsApp fails
            }
        }

        return NextResponse.json({ success: true, notionPageId: notionData.id });

    } catch (error: any) {
        console.error('Submission error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
