import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "BlaqueSystems terms of use — the terms and conditions governing the use of our website and services.",
};

export default function TermsOfUsePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Terms of Use</h1>
          <p className="mt-4 text-slate-300">Last updated: February 21, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-li:leading-relaxed">
            <h2 className="text-2xl text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
            <p className="text-slate-600 dark:text-slate-400">
              By accessing and using the BlaqueSystems website and services, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website or services. These terms constitute a legally binding agreement between you and BlaqueSystems, a company registered and operating in Nairobi, Kenya.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">2. Services</h2>
            <p className="text-slate-600 dark:text-slate-400">
              BlaqueSystems provides software development services including but not limited to SACCO management systems, point of sale systems, ticketing platforms, bus booking systems, system integrations, workflow automation, USSD applications, and mobile application development. Specific service terms, deliverables, timelines, and fees are defined in separate service agreements or statements of work between BlaqueSystems and its clients.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">3. Intellectual Property</h2>
            <p className="text-slate-600 dark:text-slate-400">
              All content on this website, including text, graphics, logos, images, and software, is the property of BlaqueSystems or its content suppliers and is protected by Kenyan and international intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this website without our express written permission.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Intellectual property rights for custom software developed under a service agreement are governed by the terms of that specific agreement.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">4. User Conduct</h2>
            <p className="text-slate-600 dark:text-slate-400">When using our website, you agree not to:</p>
            <ul className="text-slate-600 dark:text-slate-400">
              <li>Use the website for any unlawful purpose or in violation of any applicable laws</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the website or servers</li>
              <li>Upload or transmit viruses, malware, or other harmful code</li>
              <li>Collect or harvest personal information of other users</li>
              <li>Impersonate any person or entity</li>
              <li>Use automated systems (bots, scrapers) to access the website without permission</li>
            </ul>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">5. Service Agreements</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Engagement for software development services requires a separate written agreement between BlaqueSystems and the client. These Terms of Use govern website usage and general interactions. In case of conflict between these Terms and a specific service agreement, the service agreement shall prevail.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">6. Confidentiality</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Any confidential information shared between BlaqueSystems and its clients during the course of a service engagement shall be treated in accordance with the confidentiality terms defined in the applicable service agreement. Information submitted through our website contact forms is treated as confidential and will not be shared with unauthorized third parties.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">7. Limitation of Liability</h2>
            <p className="text-slate-600 dark:text-slate-400">
              To the fullest extent permitted by Kenyan law, BlaqueSystems shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services. Our total liability for any claim arising from use of this website shall not exceed the amount you have paid to us, if any, in the preceding twelve (12) months.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">8. Disclaimer of Warranties</h2>
            <p className="text-slate-600 dark:text-slate-400">
              This website is provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, whether express or implied. BlaqueSystems does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. We make no warranties regarding the accuracy or completeness of the content on this website.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">9. Indemnification</h2>
            <p className="text-slate-600 dark:text-slate-400">
              You agree to indemnify and hold harmless BlaqueSystems, its directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of the website, violation of these Terms, or infringement of any third-party rights.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">10. Third-Party Links</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Our website may contain links to third-party websites or services. BlaqueSystems is not responsible for the content, privacy practices, or terms of use of any third-party sites. Accessing third-party links is at your own risk.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">11. Governing Law</h2>
            <p className="text-slate-600 dark:text-slate-400">
              These Terms of Use shall be governed by and construed in accordance with the laws of Kenya. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Nairobi, Kenya.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">12. Changes to Terms</h2>
            <p className="text-slate-600 dark:text-slate-400">
              BlaqueSystems reserves the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after any modifications constitutes your acceptance of the updated terms. We encourage you to review these terms periodically.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">13. Severability</h2>
            <p className="text-slate-600 dark:text-slate-400">
              If any provision of these Terms of Use is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>

            <h2 className="mt-10 text-2xl text-slate-900 dark:text-white">14. Contact Us</h2>
            <p className="text-slate-600 dark:text-slate-400">
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <p className="font-semibold">BlaqueSystems</p>
              <p>Nairobi, Kenya</p>
              <p>Email: <a href="mailto:legal@blaquesystems.com" className="text-blue-600 hover:underline dark:text-blue-400">legal@blaquesystems.com</a></p>
              <p>Phone: +254 700 000 000</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
