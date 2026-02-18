import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { GlobalHeader } from "@/components/Navigation/GlobalHeader";

export const metadata: Metadata = {
    title: "INSPIRON TECH | Official Manager.io Partner Bangladesh",
    description: "We architect workflow logic in Manager.io. 14+ years IT infrastructure, 10+ industries, NBR/VAT-ready (Mushak 6.3), custom dashboards, zero-data-loss migrations. 50+ transformations. 0.1% error tolerance.",
    keywords: "Manager.io Bangladesh, cloud accounting, Manager.io partner, NBR VAT compliance, Mushak 6.3, Tally migration, financial architecture, INSPIRON TECH, Dhaka",
    openGraph: {
        title: "INSPIRON TECH | Official Manager.io Partner Bangladesh",
        description: "We architect workflow logic in Manager.io. 14+ years IT infrastructure, 10+ industries, NBR/VAT (Mushak 6.3), 50+ transformations.",
        type: "website",
        locale: "en_BD",
        siteName: "INSPIRON TECH",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                {/* Google Analytics */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-XXXXXXXXXX');
                    `
                }} />
            </head>
            <body className="bg-deep-navy-black font-institutional text-institutional-white" suppressHydrationWarning>
                <GlobalHeader />
                {children}
            </body>
        </html>
    );
}
