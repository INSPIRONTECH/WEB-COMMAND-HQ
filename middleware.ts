import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const url = req.nextUrl;
    const hostname = req.headers.get('host') || '';

    // 1. Route brand.inspiron.tech to the Brand Manual
    if (hostname.includes('brand.')) {
        return NextResponse.rewrite(new URL(`/brand-manual${url.pathname}`, req.url));
    }

    // 2. Default logic: inspiron.tech routes to the (main) group
    return NextResponse.next();
}

// Ensure middleware runs only on relevant paths
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
