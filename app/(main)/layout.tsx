import { GlobalHeader } from '@/components/Navigation/GlobalHeader';
import { GlobalFooter } from '@/components/Footer/GlobalFooter';
import React from 'react';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <GlobalHeader />
            {/* TerminalDatapad removed — lives inside its own component */}
            <main className="pt-24">
                {children}
            </main>
            <GlobalFooter />
        </>
    );
}
