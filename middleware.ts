import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const hostname = req.headers.get('host') || '';

    // 1. Guard /audit-vault with a cookie-based token check
    //    (browser GETs never carry custom headers — cookie is the only reliable mechanism)
    if (pathname.startsWith('/audit-vault')) {
        const token = req.cookies.get('audit_token')?.value;
        if (!token || !process.env.AUDIT_TOKEN || token !== process.env.AUDIT_TOKEN) {
            return NextResponse.redirect(new URL('/401', req.url));
        }
    }

    // 2. Route brand.inspiron.tech to the Brand Manual
    if (hostname.includes('brand.')) {
        return NextResponse.rewrite(new URL(`/brand-manual${pathname}`, req.url));
    }

    // 3. Default: pass through
    return NextResponse.next();
}

// Run on all non-static paths (same as before, plus audit-vault explicitly)
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
