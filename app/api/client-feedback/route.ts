import { NextResponse } from 'next/server';
import { saveToNotion, notifyWhatsApp } from '@/lib/notifications';

export async function POST(request: Request) {
    const DATABASE_ID = process.env.NOTION_CLIENT_FEEDBACK_DB_ID;
    if (!DATABASE_ID) {
        return NextResponse.json(
            { success: false, error: 'Notion DB not configured' },
            { status: 503 }
        );
    }

    try {
        const data = await request.json();

        // Build the properties object specific to this database's schema
        const properties: Record<string, unknown> = {
            'Business Name': {
                title: [{ text: { content: data.businessName || 'Unknown' } }],
            },
            'Contact Person': {
                rich_text: [{ text: { content: data.contactPerson || '' } }],
            },
            'Email': { email: data.email || null },
            'Phone': {
                phone_number: (() => {
                    const p = data.phone || '';
                    if (p.startsWith('01')) return '+88' + p;
                    return p || null;
                })()
            },
            'Received Support': {
                select: { name: data.receivedSupport === 'yes' ? 'Yes' : data.receivedSupport === 'no' ? 'No' : 'Minimal' },
            },
            'Customization Requirements': {
                rich_text: [{ text: { content: data.customizationRequirements || 'N/A' } }],
            },
            'Status': { select: { name: 'New' } },
            'Priority': { select: { name: data.customizationRequirements ? 'High' : 'Medium' } },
        };

        if (data.budget) {
            const budgetMap: Record<string, string> = {
                '5k-15k': '5k-15k', '15k-50k': '15k-50k',
                '50k-100k': '50k+', '100k+': '50k+', 'not-sure': 'Not sure',
            };
            properties['Budget Range'] = { select: { name: budgetMap[data.budget] || 'Not sure' } };
        }

        const notionPageId = await saveToNotion(properties, DATABASE_ID);

        const message = `
🔔 NEW CLIENT FEEDBACK

*Business:* ${data.businessName}
*Contact:* ${data.contactPerson} (${data.phone})
*Budget:* ${data.budget || 'Not specified'}

${data.customizationRequirements?.substring(0, 150) || ''}

📋 Notion: https://notion.so/${notionPageId.replace(/-/g, '')}
        `.trim();

        await notifyWhatsApp(message);

        return NextResponse.json({ success: true, notionPageId });

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error('Submission error:', error);
        return NextResponse.json({ success: false, error: message }, { status: 500 });
    }
}
