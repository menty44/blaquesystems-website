import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about BlaqueSystems — a software development company based in Nairobi, Kenya, building robust systems for African businesses.",
};

const values = [
  {
    title: "Engineering Excellence",
    description:
      "We write clean, tested, maintainable code. We choose the right tool for each job and build systems that scale.",
  },
  {
    title: "Reliability First",
    description:
      "Our systems handle real money and real transactions. Uptime, data integrity, and security are non-negotiable.",
  },
  {
    title: "Local Understanding",
    description:
      "Based in Nairobi, we understand the African market — M-Pesa, USSD, intermittent connectivity, and regulatory requirements.",
  },
  {
    title: "Partnership Approach",
    description:
      "We don't just deliver code. We work alongside your team to understand your business and build long-term solutions.",
  },
];

const techCategories = [
  {
    category: "Backend",
    technologies: [
      "Elixir (Phoenix)",
      "Go (Fiber)",
      "Node.js (NestJS / Express)",
      "Java (Quarkus / Spring Boot)",
      "Laravel (PHP)",
      "C",
    ],
  },
  {
    category: "Frontend",
    technologies: ["React", "Vue", "Angular"],
  },
  {
    category: "Data & Messaging",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Kafka"],
  },
  {
    category: "Cloud & Infrastructure",
    technologies: ["Firebase", "Docker", "Kubernetes", "CI/CD Pipelines"],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">About Us</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Building Software That Works
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            BlaqueSystems is a software development company based in Nairobi, Kenya. We specialize in building production-grade systems that businesses depend on daily.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Who We Are
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                BlaqueSystems was founded with a clear mission: build software that solves real problems for businesses in Africa and beyond. Based in Nairobi, Kenya, we combine deep technical expertise with an understanding of local markets.
              </p>
              <p>
                We specialize in financial technology — SACCO management systems powered by Apache Fineract, point of sale systems, ticketing platforms, and bus booking solutions. Beyond fintech, we build integrations that connect business systems, automate workflows, and develop USSD and mobile applications.
              </p>
              <p>
                Our team works across a diverse tech stack because we believe in using the right tool for each job. Whether it&apos;s Elixir for real-time systems, Go for high-performance services, Java for enterprise platforms, or React for modern interfaces — we choose based on your project&apos;s needs, not trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Our Values
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Detail */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Technology Stack
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              We work across a wide range of technologies to deliver the best solution for your project.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {techCategories.map((cat) => (
              <div
                key={cat.category}
                className="rounded-xl border border-slate-200 p-6 dark:border-slate-800"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  {cat.category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {cat.technologies.map((tech) => (
                    <li key={tech} className="text-sm text-slate-700 dark:text-slate-300">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Whether you&apos;re building from scratch or need to enhance existing systems, we&apos;re here to help.
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
