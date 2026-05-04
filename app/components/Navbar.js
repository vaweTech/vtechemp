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
    {
      href: "/digital-marketing",
      label: "Digital Marketing",
      compactLabel: "Digital Marketing",
      description: "Campaigns",
      Icon: Megaphone,
    },
    { href: "/institutes", label: "Institutes", description: "Learning", Icon: GraduationCap },
    { href: "/contact", label: "Contact", description: "Connect", Icon: Mail },
  ];

  const NavLink = ({ href, label, compactLabel, Icon, light }) => {
    const active = pathname === href || (href === "/#services" && pathname === "/");
    return (
      <Link
        href={href}
        title={compactLabel ? label : undefined}
        className={`group relative inline-flex shrink-0 items-center gap-0.5 whitespace-nowrap px-1 py-1 text-[10px] font-semibold transition md:gap-1 md:px-1.5 md:py-1 md:text-[10px] lg:gap-1.5 lg:px-2 lg:py-1.5 lg:text-[11px] xl:gap-2 xl:px-2.5 xl:py-2 xl:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl ${
          light
            ? "text-[#ffffff]"
            : active
              ? "text-slate-900"
              : "text-slate-600 hover:text-slate-900"
        }`}
      >
        <Icon
          className={`h-3 w-3 shrink-0 transition md:h-3.5 md:w-3.5 lg:h-4 lg:w-4 xl:h-[var(--icon-nav)] xl:w-[var(--icon-nav)] ${
            light
              ? "text-[#ffffff]"
              : active
                ? "text-slate-900"
                : "text-slate-400 group-hover:text-slate-600"
          }`}
        />
        <span>
          {compactLabel ? (
            <>
              <span className="xl:hidden">{compactLabel}</span>
              <span className="hidden xl:inline">{label}</span>
            </>
          ) : (
            label
          )}
        </span>
        <span
          className={`absolute inset-x-1 bottom-0.5 h-[2px] rounded-full transition xl:inset-x-2 xl:bottom-1 ${
            light
              ? active
                ? "bg-[#ffffff]"
                : "bg-transparent group-hover:bg-[#ffffff]"
              : active
                ? "bg-slate-900"
                : "bg-transparent group-hover:bg-slate-300"
          }`}
        />
      </Link>
    );
  };

  const MenuButton = ({ href, label, Icon }) => {
    const active = pathname === href || (href === "/#services" && pathname === "/");
    return (
      <Link href={href} className="block">
        <button
          type="button"
          className={`relative flex w-full items-center justify-between gap-3 rounded-xl px-1 py-3 text-left text-base font-semibold transition 3xl:text-lg 4xl:text-xl ${
            active
              ? "text-slate-900"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <span className="flex items-center gap-3">
            <Icon
              className={`h-[var(--icon-ui)] w-[var(--icon-ui)] shrink-0 transition ${
                active ? "text-slate-900" : "text-slate-400 group-hover:text-slate-600"
              }`}
            />
            <span>{label}</span>
          </span>
          {active ? (
            <svg className="h-[var(--icon-ui)] w-[var(--icon-ui)] shrink-0 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="h-[var(--icon-ui)] w-[var(--icon-ui)] shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

  // Keep navbar in a fixed white style on all pages.
  const navIsLight = false;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white bg-white font-sans transition-colors duration-300">
      <div className="w-full px-4 py-1" style={{ background: "var(--vawe-bg-gradient)" }}>
        <p className="text-center text-[11px] font-semibold tracking-wide text-white sm:text-xs">
          VAWE Technologies
        </p>
      </div>
      <div className="container-vawe flex w-full max-w-none items-center justify-between gap-2 py-2.5 md:gap-3 md:py-3 xl:gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3 3xl:gap-4">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow sm:h-11 sm:w-11 md:h-12 md:w-12 3xl:h-14 3xl:w-14 4xl:h-16 4xl:w-16 ${
              navIsLight ? "border-[#ffffff]" : "border-slate-200"
            }`}
          >
            <Image src="/logo2.jpg" alt="VAWE logo" width={40} height={40} className="h-8 w-8 rounded-full object-cover sm:h-9 sm:w-9 md:h-10 md:w-10 3xl:h-12 3xl:w-12 4xl:h-14 4xl:w-14" />
          </div>
          <div className={`leading-tight transition-colors ${navIsLight ? "text-[#ffffff]" : "text-slate-900"}`}>
            <p className="text-sm font-bold tracking-wide sm:text-base md:text-lg 3xl:text-xl 4xl:text-2xl">VAWE</p>
            <p
              className={`text-[9px] font-semibold uppercase tracking-[0.28em] sm:text-[10px] sm:tracking-[0.3em] md:text-xs 3xl:text-sm 4xl:text-base ${
                navIsLight ? "text-[#ffffff]" : "text-slate-600"
              }`}
            >
              Global Tech
            </p>
          </div>
        </Link>

        <nav className="hidden min-w-0 flex-1 justify-center px-1 ml-30 lg:ml-10 lg:flex lg:px-2 xl:px-3">
          <div className="flex max-w-full flex-nowrap items-center justify-center gap-x-0.5 sm:gap-x-1 md:gap-x-0.5 xl:gap-x-1 2xl:gap-x-2 3xl:gap-x-3">
            {links.map(({ href, label, compactLabel, Icon }) => (
              <NavLink key={href} href={href} label={label} compactLabel={compactLabel} Icon={Icon} light={navIsLight} />
            ))}
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 md:gap-2">

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold shadow transition-colors lg:hidden 3xl:px-4 3xl:py-2.5 3xl:text-base ${
              navIsLight
                ? "border-2 border-[#ffffff] bg-transparent text-[#ffffff] hover:bg-[#ffffff] hover:text-slate-900"
                : "border-slate-300 bg-white/70 text-slate-700"
            }`}
          >
            {open ? <X className="h-[var(--icon-nav)] w-[var(--icon-nav)]" /> : <Menu className="h-[var(--icon-nav)] w-[var(--icon-nav)]" />}
            <span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-40" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />
          <div className="absolute top-[104px] right-0 w-full max-w-md px-6" ref={menuRef}>
            <div className="max-h-[calc(100vh-120px)] overflow-y-auto rounded-3xl border border-white/10 bg-white/95 p-6 shadow-2xl">
              <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white">
                    <Image src="/logo2.jpg" alt="VAWE logo" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
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
                  <X className="h-[var(--icon-ui)] w-[var(--icon-ui)]" />
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


