import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react";
export default function Footer() {
  const year = new Date().getFullYear();
  const navLinkClass =
    "group inline-flex items-center gap-2 rounded-md px-1 py-0.5 transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-900 hover:drop-shadow-[0_4px_10px_rgba(2,6,23,0.12)]";
  const socialLinkClass =
    "group inline-flex items-center gap-3 rounded-lg px-2 py-1 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/45 hover:text-slate-900 hover:shadow-[0_8px_20px_rgba(2,6,23,0.14)]";

  return (
    <footer className="mt-[var(--site-section-y)] w-full bg-[#7ea9ad] text-slate-900">
      <div className="container-vawe flex w-full max-w-none flex-col gap-10 py-10 md:gap-12 md:py-12 lg:flex-row lg:items-start lg:justify-between lg:gap-14 lg:py-14 3xl:py-16 4xl:py-20">
        <div className="flex w-full flex-col items-center gap-5 text-center lg:w-[32%] lg:items-start lg:text-left">
          <Link href="/" className="flex flex-col items-center gap-4 lg:items-start">
            <Image
              src="/logo2.jpg"
              width={100}
              height={100}
              alt="VAWE logo"
              className="h-24 w-24 scale-[0.9] rounded-full border-4 border-slate-900/30 bg-white object-contain p-1 shadow-lg shadow-slate-900/20 sm:h-28 sm:w-28 3xl:h-32 3xl:w-32 4xl:h-36 4xl:w-36"
            />
            <span className="text-xl font-semibold tracking-wide text-slate-900 sm:text-2xl 3xl:text-3xl 4xl:text-4xl">
              VAWE GlobalTech
            </span>
          </Link>
          <p className="text-center text-sm leading-relaxed text-slate-800/80 3xl:text-base 4xl:text-lg">
            Building future-ready digital products, intelligent platforms, and memorable
            customer experiences for ambitious brands across the globe.
          </p>
        </div>

        <div className="flex w-full flex-col gap-8 lg:w-[68%]">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-800/70 3xl:text-base 4xl:text-lg">
              Crafted For Forward Thinkers
            </p>
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl 3xl:text-4xl 4xl:text-5xl">VAWE GlobalTech</h3>
          </div>

          <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 sm:gap-6 3xl:gap-8">
            <div className="space-y-3 text-center sm:text-left">
              <h5 className="text-base font-semibold 3xl:text-lg 4xl:text-xl">Navigation</h5>
              <ul className="space-y-2 text-sm text-slate-800/80 3xl:text-base">
                <li>
                  <Link href="/" className={navLinkClass}>
                    <span>Home</span>
                    <span className="h-[2px] w-0 rounded-full bg-[var(--vawe-navy)] transition-all duration-300 group-hover:w-4" />
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className={navLinkClass}>
                    <span>Services</span>
                    <span className="h-[2px] w-0 rounded-full bg-[var(--vawe-coral)] transition-all duration-300 group-hover:w-4" />
                  </Link>
                </li>
                <li>
                  <Link href="/products" className={navLinkClass}>
                    <span>Products</span>
                    <span className="h-[2px] w-0 rounded-full bg-[var(--vawe-teal)] transition-all duration-300 group-hover:w-4" />
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={navLinkClass}>
                    <span>Contact</span>
                    <span className="h-[2px] w-0 rounded-full bg-[var(--vawe-navy)] transition-all duration-300 group-hover:w-4" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <h5 className="text-base font-semibold 3xl:text-lg 4xl:text-xl">Support</h5>
              <ul className="space-y-2 text-sm text-slate-800/80 3xl:text-base">
                <li>
                  <span className="group inline-flex items-center gap-2 rounded-md px-1 py-0.5 transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-900">
                    Help Center
                    <span className="h-[2px] w-0 rounded-full bg-[var(--vawe-teal)] transition-all duration-300 group-hover:w-4" />
                  </span>
                </li>
                <li>
                  <span className="group inline-flex items-center gap-2 rounded-md px-1 py-0.5 transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-900">
                    Refund Policy
                    <span className="h-[2px] w-0 rounded-full bg-[var(--vawe-coral)] transition-all duration-300 group-hover:w-4" />
                  </span>
                </li>
                <li>
                  <span className="group inline-flex items-center gap-2 rounded-md px-1 py-0.5 transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-900">
                    FAQ&#39;s
                    <span className="h-[2px] w-0 rounded-full bg-[var(--vawe-navy)] transition-all duration-300 group-hover:w-4" />
                  </span>
                </li>
                <li>
                  <span className="group inline-flex items-center gap-2 rounded-md px-1 py-0.5 transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-900">
                    Privacy Policy
                    <span className="h-[2px] w-0 rounded-full bg-[var(--vawe-teal)] transition-all duration-300 group-hover:w-4" />
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <h5 className="text-base font-semibold 3xl:text-lg 4xl:text-xl">Social</h5>
              <ul className="space-y-3 text-sm text-slate-800/80 3xl:text-base">
                <li>
                  <Link
                    href="https://www.facebook.com"
                    className={socialLinkClass}
                  >
                    <Facebook className="h-[var(--icon-nav)] w-[var(--icon-nav)] shrink-0 text-[#1877F2] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com"
                    className={socialLinkClass}
                  >
                    <Linkedin className="h-[var(--icon-nav)] w-[var(--icon-nav)] shrink-0 text-[#0A66C2] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com"
                    className={socialLinkClass}
                  >
                    <Instagram className="h-[var(--icon-nav)] w-[var(--icon-nav)] shrink-0 text-[#DD2A7B] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://wa.me/918885103333"
                    className={socialLinkClass}
                  >
                    <MessageCircle className="h-[var(--icon-nav)] w-[var(--icon-nav)] shrink-0 text-[#25D366] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                    WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900/20 bg-[#779ea3]">
        <div className="container-vawe flex w-full max-w-none flex-col items-center gap-3 py-5 text-center text-xs text-slate-800/80 sm:py-6 md:flex-row md:items-center md:justify-between md:text-left 3xl:text-sm 4xl:text-base">
          <p>Copyright © {year} VAWE GlobalTech</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:justify-end">
            <span>Terms &amp; Conditions</span>
            <span>Privacy Policy</span>
            <Link href="#top" className="group inline-flex items-center gap-1 rounded-full border border-transparent px-2 py-1 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-900/25 hover:bg-white/35 hover:text-slate-900">
              Back to top
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↑</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}







