"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Home,
  Info,
  Layers,
  Box,
  Package,
  Megaphone,
  GraduationCap,
  Mail,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";


export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { href: "/", label: "Home", description: "Overview", Icon: Home },
    { href: "/about", label: "About", description: "Our Story", Icon: Info },
    { href: "/services", label: "Services", description: "What We Do", Icon: Layers },
    { href: "/products", label: "Products", description: "Solutions", Icon: Box },
    { href: "/packages", label: "Packages", description: "Plans", Icon: Package },
    { href: "/digital-marketing", label: "Digital Marketing", description: "Campaigns", Icon: Megaphone },
    { href: "/institutes", label: "Institutes", description: "Learning", Icon: GraduationCap },
    { href: "/contact", label: "Contact", description: "Connect", Icon: Mail },
  ];

  const NavLink = ({ href, label, Icon }) => {
    const active = pathname === href || (href === "/#services" && pathname === "/");
    return (
      <Link
        href={href}
        className={`group relative inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold transition ${
          active ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
        }`}
      >
        <Icon
          className={`h-4 w-4 transition ${
            active ? "text-slate-900" : "text-slate-400 group-hover:text-slate-600"
          }`}
        />
        <span>{label}</span>
        <span
          className={`absolute inset-x-2 bottom-1 h-[2px] rounded-full transition ${
            active ? "bg-slate-900" : "bg-transparent group-hover:bg-slate-300"
          }`}
        />
      </Link>
    );
  };

  const MenuButton = ({ href, label, Icon }) => {
    const active = pathname === href || (href === "/#services" && pathname === "/");
    return (
      <Link href={href} className="block" style={{ fontFamily: "Times New Roman, serif" }}>
        <button
          type="button"
          className={`relative flex w-full items-center justify-between gap-3 rounded-xl px-1 py-3 text-left text-base font-semibold transition ${
            active
              ? "text-slate-900"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <span className="flex items-center gap-3">
            <Icon
              className={`h-5 w-5 transition ${
                active ? "text-slate-900" : "text-slate-400 group-hover:text-slate-600"
              }`}
            />
            <span>{label}</span>
          </span>
          {active ? (
            <svg className="h-5 w-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </Link>
    );
  };

  // Close on escape key
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close on route change (legitimate side effect of external route change)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (!open) return;
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white/80 via-white/60 to-transparent backdrop-blur"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="mx-auto flex w-full max-w-none items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow">
            <Image src="/logo2.jpg" alt="VAWE logo" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
          </div>
          <div className="leading-tight text-slate-900">
            <p className="text-lg font-bold tracking-wide">VAWE</p>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">Global Tech</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 px-3 py-2 md:flex">
          {links.map(({ href, label, Icon }) => (
            <NavLink key={href} href={href} label={label} Icon={Icon} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+918885103333"
            aria-label="Call VAWE Global Tech"
            className="hidden items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:shadow-xl md:flex"
          >
            <Phone className="h-4 w-4" />
            <span>Call Us</span>
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-700 shadow"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-40" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />
          <div className="absolute top-[80px] right-0 w-full max-w-md px-6" ref={menuRef}>
            <div className="max-h-[calc(100vh-120px)] overflow-y-auto rounded-3xl border border-white/10 bg-white/95 p-6 shadow-2xl">
              <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white">
                    <Image src="/logo2.jpg" alt="VAWE logo" className="h-8 w-8 rounded-full object-cover" />
                  </div>
                  <div className="text-slate-900">
                    <p className="text-base font-bold">VAWE</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                      GlobalTech
                    </p>
                  </div>
                </Link>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-3">
                {links.map(({ href, label, Icon }) => (
                  <MenuButton key={href} href={href} label={label} Icon={Icon} />
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


