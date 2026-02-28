'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * /upwork-assets has been merged into /social-assets under the "Upwork" platform group.
 * This page redirects automatically.
 */
export default function UpworkAssetsRedirect() {
    const router = useRouter();
    useEffect(() => {
        router.replace('/social-assets');
    }, [router]);
    return (
        <div className="min-h-screen bg-[#010409] text-white flex items-center justify-center font-mono">
            <div className="text-center space-y-4">
                <div className="text-[#00D2FF] text-xs uppercase tracking-[0.3em] mb-4">Asset Command Center Migration</div>
                <div className="text-gray-400 text-sm">Redirecting to <span className="text-[#00D2FF]">/social-assets</span> → Upwork Group</div>
            </div>
        </div>
    );
}
