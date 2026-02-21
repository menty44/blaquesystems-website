import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "BlaqueSystems privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-slate-300">Last updated: February 21, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-li:leading-relaxed">
            <h2 className="text-2xl text-slate-900 dark:text-white">1. Introduction</h2>
            <p className="text-slate-600 dark:text-slate-400">
              BlaqueSystems (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. BlaqueSystems is based in Nairobi, Kenya, and operates in compliance with the Kenya Data Protection Act, 2019.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">2. Information We Collect</h2>
            <h3 className="mt-6 text-xl text-slate-900 dark:text-white">Personal Information</h3>
            <p className="text-slate-600 dark:text-slate-400">We may collect personal information that you voluntarily provide when you:</p>
            <ul className="text-slate-600 dark:text-slate-400">
              <li>Fill out a contact form on our website</li>
              <li>Request a quote or consultation</li>
              <li>Subscribe to our newsletter</li>
              <li>Engage us for software development services</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400">This information may include your name, email address, phone number, company name, and project details.</p>

            <h3 className="mt-6 text-xl text-slate-900 dark:text-white">Automatically Collected Information</h3>
            <p className="text-slate-600 dark:text-slate-400">
              When you visit our website, we may automatically collect certain information including your IP address, browser type, operating system, referring URLs, and pages visited. This information is used to analyze trends, administer the site, and improve our services.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">3. How We Use Your Information</h2>
            <p className="text-slate-600 dark:text-slate-400">We use the information we collect to:</p>
            <ul className="text-slate-600 dark:text-slate-400">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Process and manage project engagements</li>
              <li>Send you project updates, invoices, and service-related communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">4. Information Sharing</h2>
            <p className="text-slate-600 dark:text-slate-400">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="text-slate-600 dark:text-slate-400">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business (e.g., hosting, analytics, email services), subject to confidentiality agreements.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law, regulation, or legal process.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
            </ul>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">5. Data Security</h2>
            <p className="text-slate-600 dark:text-slate-400">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">6. Data Retention</h2>
            <p className="text-slate-600 dark:text-slate-400">
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">7. Your Rights</h2>
            <p className="text-slate-600 dark:text-slate-400">Under the Kenya Data Protection Act, 2019, you have the right to:</p>
            <ul className="text-slate-600 dark:text-slate-400">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to the processing of your personal data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:privacy@blaquesystems.com" className="text-blue-600 hover:underline dark:text-blue-400">
                privacy@blaquesystems.com
              </a>.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">8. Cookies</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences. Disabling cookies may affect some features of the website.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">9. Third-Party Links</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">10. Children&apos;s Privacy</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we learn that we have collected information from a child, we will take steps to delete it promptly.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">11. Changes to This Policy</h2>
            <p className="text-slate-600 dark:text-slate-400">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">12. Contact Us</h2>
            <p className="text-slate-600 dark:text-slate-400">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <p className="font-semibold">BlaqueSystems</p>
              <p>Nairobi, Kenya</p>
              <p>Email: <a href="mailto:privacy@blaquesystems.com" className="text-blue-600 hover:underline dark:text-blue-400">privacy@blaquesystems.com</a></p>
              <p>Phone: +254 700 000 000</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
