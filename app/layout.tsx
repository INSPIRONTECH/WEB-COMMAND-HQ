import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "INSPIRON TECH | Official Manager.io Partner Bangladesh",
    description: "We architect workflow logic in Manager.io. 14+ years IT infrastructure, 10+ industries, NBR/VAT-ready (Mushak 6.3), custom dashboards, zero-data-loss migrations. 20+ active clients, 100+ migrations. 0.1% error tolerance.",
    keywords: "Manager.io Bangladesh, cloud accounting, Manager.io partner, NBR VAT compliance, Mushak 6.3, Tally migration, financial architecture, INSPIRON TECH, Dhaka",
    openGraph: {
        title: "INSPIRON TECH | Official Manager.io Partner Bangladesh",
        description: "We architect workflow logic in Manager.io. 14+ years IT infrastructure, 10+ industries, NBR/VAT (Mushak 6.3), 20+ active clients, 100+ migrations.",
        type: "website",
        locale: "en_BD",
        siteName: "INSPIRON TECH",
        url: "https://www.inspiron.tech/",
        images: [
            {
                url: "https://www.inspiron.tech/og-image.png",
                width: 1200,
                height: 630,
                alt: "INSPIRON TECH | Official Manager.io Partner Bangladesh",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "INSPIRON TECH | Official Manager.io Partner Bangladesh",
        description: "We architect workflow logic in Manager.io. 14+ years IT infrastructure, 10+ industries, NBR/VAT (Mushak 6.3), 20+ active clients, 100+ migrations.",
        images: ["https://www.inspiron.tech/og-image.png"],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* Favicon is handled automatically by app/icon.png */}
                {/* Google Analytics */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-FWQ61RFPLX"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-FWQ61RFPLX');
                    `
                }} />
            </head>
            <body className="bg-deep-navy-black font-institutional text-institutional-white" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
