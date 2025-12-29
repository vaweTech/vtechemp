import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 w-full bg-[#7ea9ad] text-slate-900">
      <div className="flex w-full flex-col items-start gap-10 px-4 py-10 sm:flex-row sm:flex-wrap sm:justify-between sm:px-6 lg:flex-nowrap lg:items-center lg:gap-20 lg:px-12 lg:py-14">
        <div className="flex w-full flex-col items-center gap-5 sm:w-[45%] lg:w-1/3">
          <Link href="/" className="flex flex-col items-center gap-4">
            <Image
              src="/logo2.jpg"
              width={100}
              height={100}
              alt="VAWE logo"
              className="h-28 w-28 rounded-full border-4 border-slate-900/30 object-cover shadow-lg shadow-slate-900/20"
            />
            <span className="text-2xl font-semibold tracking-wide text-slate-900">
              VAWE GlobalTech
            </span>
          </Link>
          <p className="text-center text-sm leading-relaxed text-slate-800/80">
            Building future-ready digital products, intelligent platforms, and memorable
            customer experiences for ambitious brands across the globe.
          </p>
        </div>

        <div className="flex w-full flex-col gap-8 sm:w-[50%] lg:w-2/3">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-800/70">
              Crafted For Forward Thinkers
            </p>
            <h3 className="text-3xl font-semibold text-slate-900">VAWE GlobalTech</h3>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            <div className="col-span-1 space-y-3">
              <h5 className="text-base font-semibold">Navigation</h5>
              <ul className="space-y-2 text-sm text-slate-800/80">
                <li>
                  <Link href="/" className="transition hover:text-slate-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="transition hover:text-slate-900">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="transition hover:text-slate-900">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition hover:text-slate-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1 space-y-3">
              <h5 className="text-base font-semibold">Support</h5>
              <ul className="space-y-2 text-sm text-slate-800/80">
                <li>
                  <span className="block">Help Center</span>
                </li>
                <li>
                  <span className="block">Refund Policy</span>
                </li>
                <li>
                  <span className="block">FAQ&#39;s</span>
                </li>
                <li>
                  <span className="block">Privacy Policy</span>
                </li>
              </ul>
            </div>

            <div className="col-span-1 space-y-3">
              <h5 className="text-base font-semibold">Social</h5>
              <ul className="space-y-3 text-sm text-slate-800/80">
                <li>
                  <Link
                    href="https://www.facebook.com"
                    className="flex items-center gap-3 transition hover:text-slate-900"
                  >
                    <Facebook className="h-4 w-4 text-[#1877F2]" />
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com"
                    className="flex items-center gap-3 transition hover:text-slate-900"
                  >
                    <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com"
                    className="flex items-center gap-3 transition hover:text-slate-900"
                  >
                    <Instagram className="h-4 w-4 text-[#DD2A7B]" />
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://wa.me/918885103333"
                    className="flex items-center gap-3 transition hover:text-slate-900"
                  >
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                    WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900/20 bg-[#779ea3]">
        <div className="flex w-full flex-col gap-4 px-4 py-6 text-xs text-slate-800/80 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-12">
          <p>Copyright © {year} VAWE GlobalTech</p>
          <div className="flex flex-wrap items-center gap-6">
            <span>Terms &amp; Conditions</span>
            <span>Privacy Policy</span>
            <Link href="#top" className="inline-flex items-center gap-1 transition hover:text-slate-900">
              Back to top
              <span aria-hidden="true">↑</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}







