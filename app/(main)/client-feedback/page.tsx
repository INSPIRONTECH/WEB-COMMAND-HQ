'use client';

import { useState } from 'react';

export default function ClientFeedbackForm() {
    const [formData, setFormData] = useState({
        businessName: '',
        contactPerson: '',
        email: '',
        phone: '',
        receivedSupport: '',
        supportDetails: '',
        whatWasNotProvided: '',
        whatYouNeed: '',
        improvementSuggestions: '',
        customizationRequirements: '',
        budget: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/client-feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                console.log('Feedback submitted:', result);
                setSubmitted(true);
                // Reset form after 3 seconds
                setTimeout(() => {
                    setFormData({
                        businessName: '',
                        contactPerson: '',
                        email: '',
                        phone: '',
                        receivedSupport: '',
                        supportDetails: '',
                        whatWasNotProvided: '',
                        whatYouNeed: '',
                        improvementSuggestions: '',
                        customizationRequirements: '',
                        budget: '',
                    });
                    setSubmitted(false);
                }, 3000);
            } else {
                console.error('Submission failed:', result.error);
                alert('Submission failed. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please check your connection.');
        }
    };

    return (
        <>
            <main className="min-h-screen bg-[#010409] text-white py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FFD700] to-[#FFF4CC] bg-clip-text text-transparent">
                            Client Feedback & Service Request
                        </h1>
                        <p className="text-lg text-gray-300">
                            Help us serve you better—share your experience and customization needs
                        </p>
                    </div>

                    {/* Success Message */}
                    {submitted && (
                        <div className="mb-8 p-6 bg-green-900/20 border border-green-500 rounded-lg text-center">
                            <p className="text-green-400 font-semibold">
                                ✓ Thank you! Your feedback has been submitted. We'll contact you within 24 hours.
                            </p>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 p-8 rounded-2xl border border-gray-800">

                        {/* Business Information */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#00D2FF] mb-4">Your Business Information</h2>

                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">
                                    Business Name <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="businessName"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#00D2FF] text-white"
                                    placeholder="Your company name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">
                                    Contact Person <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="contactPerson"
                                    value={formData.contactPerson}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#00D2FF] text-white"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                                        Email <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#00D2FF] text-white"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                                        Phone/WhatsApp <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#00D2FF] text-white"
                                        placeholder="+880 1XXX-XXXXXX"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Feedback Section */}
                        <div className="space-y-4 pt-6 border-t border-gray-800">
                            <h2 className="text-2xl font-bold text-[#00D2FF] mb-4">Your Feedback on Last Year's Support</h2>

                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">
                                    Did you receive support from INSPIRON TECH last year? <span className="text-red-400">*</span>
                                </label>
                                <select
                                    name="receivedSupport"
                                    value={formData.receivedSupport}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#00D2FF] text-white"
                                >
                                    <option value="">-- Select --</option>
                                    <option value="yes">Yes, I received support</option>
                                    <option value="no">No, I didn't receive support</option>
                                    <option value="minimal">I received minimal support</option>
                                </select>
                            </div>

                            {formData.receivedSupport === 'yes' && (
                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                                        When and for what issues did you receive support?
                                    </label>
                                    <textarea
                                        name="supportDetails"
                                        value={formData.supportDetails}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#00D2FF] text-white"
                                        placeholder="E.g., 'March 2025 — help with VAT reports setup, October 2025 — chart of accounts restructure'"
                                    />
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">
                                    What support did you need but didn't receive?
                                </label>
                                <textarea
                                    name="whatWasNotProvided"
                                    value={formData.whatWasNotProvided}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#00D2FF] text-white"
                                    placeholder="E.g., 'Custom dashboard for inventory tracking, training for new staff members'"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">
                                    What do you need help with now?
                                </label>
                                <textarea
                                    name="whatYouNeed"
                                    value={formData.whatYouNeed}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#00D2FF] text-white"
                                    placeholder="E.g., 'Better production tracking, automated Mushak 6.3 reports, multi-branch setup'"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">
                                    How can I improve my service?
                                </label>
                                <textarea
                                    name="improvementSuggestions"
                                    value={formData.improvementSuggestions}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#00D2FF] text-white"
                                    placeholder="E.g., 'Faster response time, more training videos, monthly check-ins'"
                                />
                            </div>
                        </div>

                        {/* Customization Requirements */}
                        <div className="space-y-4 pt-6 border-t border-gray-800">
                            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Customization Service Request</h2>

                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">
                                    Describe your customization requirements
                                </label>
                                <textarea
                                    name="customizationRequirements"
                                    value={formData.customizationRequirements}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#FFD700] text-white"
                                    placeholder="E.g., 'Need a custom dashboard showing real-time sales by salesperson, automated bank reconciliation, production cost tracking per product'"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">
                                    Your budget range (optional)
                                </label>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#FFD700] text-white"
                                >
                                    <option value="">-- Select --</option>
                                    <option value="5k-15k">BDT 5,000 - 15,000</option>
                                    <option value="15k-50k">BDT 15,000 - 50,000</option>
                                    <option value="50k-100k">BDT 50,000 - 100,000</option>
                                    <option value="100k+">BDT 100,000+</option>
                                    <option value="not-sure">Not sure yet</option>
                                </select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-[#FFD700] to-[#FFC700] text-[#010409] font-bold text-lg rounded-lg hover:from-[#FFC700] hover:to-[#FFD700] transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            Submit Feedback & Request
                        </button>
                    </form>

                    {/* Footer Note */}
                    <p className="text-center text-sm text-gray-500 mt-8">
                        Your information is confidential. We'll respond within 24 hours with a custom proposal.
                    </p>
                </div>
            </main>
        </>
    );
}
