/**
 * INSPIRON TECH - Institutional Privacy Governance
 * Required for Meta App Review approval.
 */

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#010409] text-gray-300 py-20 px-6 font-sans">
            <div className="max-w-3xl mx-auto border border-white/10 p-10 rounded-2xl bg-[#0d1117] shadow-2xl">
                <h1 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">
                    Privacy <span className="text-aqua">Governance</span>
                </h1>
                <p className="mb-8 text-aqua font-bold uppercase text-xs tracking-widest">
                    INSPIRON TECH // Institutional Standard v1.0
                </p>
                <div className="space-y-6 text-sm leading-relaxed">

                    {/* WHATSAPP DATA PROTOCOL NODE */}
                    <section className="mb-8 p-6 bg-aqua/5 border border-aqua/20 rounded-xl">
                        <h2 className="text-aqua font-bold uppercase tracking-widest mb-2 text-xs">WhatsApp Data Protocol</h2>
                        <p className="text-gray-400">
                            INSPIRON TECH utilizes the WhatsApp Business API specifically to facilitate institutional handshakes.
                            We process phone numbers and message metadata solely to trigger technical audits.
                            We do not store personal chat histories beyond the scope of active consultancy missions.
                        </p>
                    </section>

                    <p>We process contact information exclusively through the WhatsApp Business API to categorize business automation needs for Manager.io implementations.</p>
                    <p>Users may request permanent data deletion at any time by messaging <strong>"DELETE"</strong> to our verified business number: <span className="text-white">+880 1601-618030</span>.</p>

                    <section id="data-deletion" className="mt-16 pt-8 border-t border-white/10">
                        <h2 className="text-aqua font-bold uppercase tracking-widest mb-4">Data Deletion Instructions (Meta Compliance)</h2>
                        <ul className="list-decimal list-inside text-gray-400 text-sm space-y-2 font-mono">
                            <li>Send an email to <span className="text-white">privacy@inspiron.tech</span> with the subject "DATA DELETION REQUEST".</li>
                            <li>Include your WhatsApp Phone ID used for the Technical Audit.</li>
                            <li>Lead records are purged within 24 hours of a verified request.</li>
                        </ul>
                    </section>

                    <p className="pt-6 border-t border-white/5 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                        Controller: MD ABU HASAN | Verified Jan 14, 2026
                    </p>
                </div>
            </div>
        </main>
    );
}
