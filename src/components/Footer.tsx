import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold text-white">
              Blaque<span className="text-blue-500">Systems</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Building robust, scalable software solutions for businesses across Africa and beyond. Based in Nairobi, Kenya.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/services" className="hover:text-white transition-colors">SACCO Systems</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Point of Sale</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Ticketing & Bus Booking</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Integrations</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">USSD & Mobile Apps</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Nairobi, Kenya</li>
              <li>
                <a href="mailto:info@blaquesystems.com" className="hover:text-white transition-colors">
                  info@blaquesystems.com
                </a>
              </li>
              <li>
                <a href="tel:+254700000000" className="hover:text-white transition-colors">
                  +254 700 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} BlaqueSystems. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
