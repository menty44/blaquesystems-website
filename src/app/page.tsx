import Link from "next/link";

const services = [
  {
    title: "SACCO Systems",
    description: "Comprehensive SACCO management powered by Apache Fineract. Member management, loans, savings, dividends, and reporting.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Point of Sale",
    description: "Modern POS systems for retail, hospitality, and service businesses. Inventory, sales tracking, and analytics.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Ticketing & Bus Booking",
    description: "End-to-end ticketing and bus booking platforms. Seat selection, route management, and real-time availability.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
  },
  {
    title: "Integrations",
    description: "Seamless integrations with HR systems, blockchain, payment gateways, CRMs, and third-party APIs.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Workflow Automation",
    description: "Automate business processes to reduce manual work. Custom workflows, approvals, notifications, and task management.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "USSD & Mobile Apps",
    description: "USSD applications and native/cross-platform mobile apps for feature phones and smartphones alike.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const techStack = [
  { name: "Elixir / Phoenix", category: "Backend" },
  { name: "Go / Fiber", category: "Backend" },
  { name: "Node.js / NestJS / Express", category: "Backend" },
  { name: "Java / Quarkus / Spring Boot", category: "Backend" },
  { name: "Laravel (PHP)", category: "Backend" },
  { name: "C", category: "Systems" },
  { name: "React", category: "Frontend" },
  { name: "Vue", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "PostgreSQL", category: "Data" },
  { name: "MySQL", category: "Data" },
  { name: "MongoDB", category: "Data" },
  { name: "Redis", category: "Data" },
  { name: "Kafka", category: "Messaging" },
  { name: "Firebase", category: "Cloud" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-32 text-white lg:py-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Software Development &middot; Nairobi, Kenya
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Engineering Software That{" "}
              <span className="text-blue-400">Powers Business</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              We build robust, scalable systems for SACCOs, point of sale, ticketing, bus booking, integrations, workflow automation, USSD, and mobile platforms.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-8 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-400 hover:text-white"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">What We Do</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              From financial systems to mobile apps, we deliver end-to-end software solutions tailored to your business.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-900"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Technology</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Our Tech Stack
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              We use the right tools for the job — from high-performance backends to modern frontend frameworks.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Build Something Great?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Let&apos;s discuss your project. We&apos;ll help you choose the right architecture and technology for your needs.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
