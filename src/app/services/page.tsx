import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "BlaqueSystems offers SACCO systems, POS, ticketing, bus booking, integrations, workflow automation, USSD, and mobile app development services.",
};

const services = [
  {
    title: "SACCO Systems (Apache Fineract)",
    description:
      "We build comprehensive SACCO management systems powered by Apache Fineract. Our solutions cover the complete lifecycle of cooperative financial services.",
    features: [
      "Member registration and management",
      "Savings and deposit accounts",
      "Loan origination, approval, and disbursement",
      "Dividend calculation and distribution",
      "Share management and transfers",
      "Financial reporting and compliance",
      "Mobile and USSD access for members",
      "Integration with M-Pesa and bank payments",
    ],
  },
  {
    title: "Point of Sale (POS)",
    description:
      "Modern, reliable POS systems designed for retail, hospitality, and service-based businesses. Cloud-synced and offline-capable.",
    features: [
      "Sales processing and receipt generation",
      "Inventory management and stock tracking",
      "Multi-branch and multi-terminal support",
      "Staff management and access control",
      "Sales analytics and reporting",
      "Barcode and QR code scanning",
      "M-Pesa and card payment integration",
      "Customer loyalty programs",
    ],
  },
  {
    title: "Ticketing Systems",
    description:
      "Event and transport ticketing platforms that handle high-volume transactions with reliability and speed.",
    features: [
      "Event ticket creation and management",
      "Online and offline ticket sales",
      "QR code and NFC-based validation",
      "Seat selection and reservation",
      "Real-time availability tracking",
      "Payment gateway integration",
      "Sales reports and analytics",
      "White-label solutions",
    ],
  },
  {
    title: "Bus Booking Systems",
    description:
      "End-to-end bus booking platforms for transport companies. From route management to passenger manifests and online payments.",
    features: [
      "Route and schedule management",
      "Online seat selection and booking",
      "Agent and counter booking portals",
      "Passenger manifest generation",
      "Fleet management integration",
      "M-Pesa, card, and bank payments",
      "SMS and email notifications",
      "Real-time booking dashboard",
    ],
  },
  {
    title: "System Integrations",
    description:
      "Connect your business systems seamlessly. We integrate with HR platforms, blockchain networks, payment processors, CRMs, and more.",
    features: [
      "HR system integrations (BambooHR, SAP, etc.)",
      "Blockchain and smart contract integrations",
      "Payment gateway integrations (M-Pesa, Stripe, PayPal)",
      "CRM integrations (Salesforce, HubSpot, Zoho)",
      "ERP system connectivity",
      "API development and management",
      "Data synchronization and migration",
      "Webhook and event-driven architectures",
    ],
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive business processes and reduce operational overhead. Custom workflows built for your specific needs.",
    features: [
      "Business process mapping and automation",
      "Approval workflows and chains",
      "Document generation and management",
      "Email and SMS notification workflows",
      "Task assignment and tracking",
      "Scheduled and event-triggered automation",
      "Integration with existing tools",
      "Audit trails and compliance logging",
    ],
  },
  {
    title: "USSD Applications",
    description:
      "Reach customers on any phone with USSD applications. No internet required — perfect for the African market.",
    features: [
      "USSD menu design and development",
      "Telco integration (Safaricom, Airtel, Telkom)",
      "Account balance and statement queries",
      "Payment and transfer initiation",
      "Customer registration and onboarding",
      "Survey and feedback collection",
      "Session management and security",
      "Real-time transaction processing",
    ],
  },
  {
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile applications for iOS and Android. From concept to deployment on app stores.",
    features: [
      "iOS and Android native development",
      "Cross-platform (React Native, Flutter)",
      "UI/UX design and prototyping",
      "Push notifications and real-time updates",
      "Offline-first architecture",
      "Biometric authentication",
      "App store deployment and management",
      "Performance optimization",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">Services</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            What We Build
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            From SACCO management to mobile apps, we deliver production-grade software systems that businesses rely on every day.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col gap-12 lg:flex-row lg:items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-1/2">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  >
                    Discuss this service &rarr;
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Key Features
                    </h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Need a Custom Solution?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            We tailor every project to your specific business requirements. Let&apos;s talk about what you need.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
