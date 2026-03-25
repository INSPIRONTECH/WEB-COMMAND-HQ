import React from 'react';

export const metadata = {
  title: 'Terms of Service | INSPIRON TECH',
  description: 'Terms of Service for INSPIRON TECH digital services and automation solutions.',
};

export default function TermsOfService() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px', fontFamily: 'sans-serif', lineHeight: '1.7', color: '#1a1a1a' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '8px' }}>Terms of Service</h1>
      <p style={{ color: '#666', marginBottom: '32px' }}>
        <strong>INSPIRON TECH</strong> — Last updated: March 25, 2026
      </p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using any services provided by INSPIRON TECH ("we", "our", or "the Company"),
          you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
          INSPIRON TECH is a technology consulting and digital automation company registered and operating in
          Dhaka, Bangladesh.
        </p>
      </section>

      <section>
        <h2>2. Services Provided</h2>
        <p>INSPIRON TECH provides the following services to businesses and individuals:</p>
        <ul>
          <li>WhatsApp Business automation and messaging integration via Meta Cloud API</li>
          <li>Facebook and Instagram Page management and content automation</li>
          <li>ERP implementation and consulting using Manager.io cloud accounting software</li>
          <li>Custom web application development (Next.js, React)</li>
          <li>Business process automation and API integrations</li>
          <li>IT consulting for small and medium-sized businesses (SMEs) in Bangladesh</li>
        </ul>
      </section>

      <section>
        <h2>3. Use of Meta Platform Data</h2>
        <p>
          In the course of providing WhatsApp Business and Facebook/Instagram services, INSPIRON TECH may access
          Meta Platform Data on behalf of our clients. This data is used exclusively to:
        </p>
        <ul>
          <li>Send automated business messages (e.g., invoices, order confirmations, service updates) to end customers on behalf of our clients</li>
          <li>Manage and publish content to client Facebook Pages and Instagram accounts</li>
          <li>Retrieve engagement metrics for internal reporting purposes</li>
          <li>Route customer inquiries from social platforms to client CRM or support systems</li>
        </ul>
        <p>
          Meta Platform Data is never sold, transferred, or shared with third parties outside the scope of
          delivering the services described above. All data handling complies with Meta's Platform Terms and
          Developer Policies.
        </p>
      </section>

      <section>
        <h2>4. Client Responsibilities</h2>
        <p>Clients engaging INSPIRON TECH services agree to:</p>
        <ul>
          <li>Provide accurate business information and necessary account access credentials</li>
          <li>Ensure their business complies with all applicable Meta, WhatsApp, and platform policies</li>
          <li>Not use INSPIRON TECH services for spam, harassment, or any unlawful purpose</li>
          <li>Maintain the confidentiality of API tokens and access credentials shared for service delivery</li>
        </ul>
      </section>

      <section>
        <h2>5. Intellectual Property</h2>
        <p>
          All custom code, tools, dashboards, and automation workflows developed by INSPIRON TECH remain
          the intellectual property of INSPIRON TECH unless explicitly transferred to the client under a
          separate written agreement. Clients are granted a non-exclusive license to use deliverables for
          their intended business purpose.
        </p>
      </section>

      <section>
        <h2>6. Data Privacy</h2>
        <p>
          INSPIRON TECH is committed to protecting personal data. Our data collection and processing practices
          are described in our{' '}
          <a href="/privacy" style={{ color: '#0066cc' }}>Privacy Policy</a>.
          We comply with applicable data protection laws in Bangladesh and respect the privacy rights of
          end users whose data we process on behalf of clients.
        </p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>
          INSPIRON TECH shall not be liable for any indirect, incidental, or consequential damages arising
          from the use of our services. Our total liability to any client shall not exceed the amount paid
          for the specific service giving rise to the claim in the preceding 30 days.
        </p>
      </section>

      <section>
        <h2>8. Service Termination</h2>
        <p>
          Either party may terminate a service engagement with 7 days written notice. INSPIRON TECH reserves
          the right to immediately suspend services if a client violates these Terms, applicable platform
          policies, or engages in unlawful activity.
        </p>
      </section>

      <section>
        <h2>9. Changes to Terms</h2>
        <p>
          INSPIRON TECH may update these Terms of Service from time to time. Continued use of our services
          after changes are posted constitutes acceptance of the revised terms. We will notify active clients
          of material changes via email or WhatsApp.
        </p>
      </section>

      <section>
        <h2>10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the People's Republic of Bangladesh. Any disputes arising
          from these Terms shall be subject to the jurisdiction of the courts of Dhaka, Bangladesh.
        </p>
      </section>

      <section>
        <h2>11. Contact Us</h2>
        <p>For questions about these Terms of Service, contact us at:</p>
        <ul>
          <li><strong>Email:</strong> admin@inspiron.tech</li>
          <li><strong>Website:</strong> <a href="https://www.inspiron.tech" style={{ color: '#0066cc' }}>www.inspiron.tech</a></li>
          <li><strong>Address:</strong> Dhaka, Bangladesh</li>
        </ul>
      </section>

      <hr style={{ margin: '40px 0', borderColor: '#eee' }} />
      <p style={{ color: '#999', fontSize: '0.875rem' }}>
        © 2026 INSPIRON TECH. All rights reserved.
      </p>
    </main>
  );
}
