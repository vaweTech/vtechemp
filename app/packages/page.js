"use client";
import { motion } from "framer-motion";
import Image from "next/image";  
import { useState } from "react";

const packages = [
  {
    name: "Basic Website",
    subtitle: "Polished brochure site",
    points: [
      "Up to 4 pages with clean layout",
      "Modern responsive UI design",
      "Mobile-friendly interface",
      "Contact form with validation",
      "Basic SEO optimization",
      "Fast loading times",
      "Deployed & analytics-ready",
      "Social media integration",
      "Email support setup",
      "Basic security features",
    ],
    color: "var(--vawe-coral)",
    icon: "globe.svg",
    variant: "cut",
  },
  {
    name: "Semi Dynamic",
    subtitle: "Content-managed essentials",
    points: [
      "Headless CMS integration",
      "Blog or updates module",
      "Content management system",
      "SEO foundations & optimization",
      "Performance optimized pages",
      "Image optimization & CDN",
      "Search functionality",
      "Category & tag system",
      "RSS feed support",
      "Admin dashboard access",
      "Multi-language support (basic)",
      "Form submissions handling",
    ],
    color: "var(--vawe-teal)",
    icon: "window.svg",
    variant: "ring",
  },
  {
    name: "Dynamic",
    subtitle: "Interactive product experiences",
    points: [
      "Custom interactive components",
      "Advanced API integrations",
      "User authentication system",
      "Real-time data updates",
      "Animations & micro‑interactions",
      "Shopping cart functionality",
      "Payment gateway integration",
      "User dashboard & profiles",
      "Advanced form builders",
      "Third-party service connections",
      "WebSocket/real-time features",
      "Advanced search & filtering",
      "Notification system",
      "Data visualization tools",
    ],
    color: "var(--vawe-navy)",
    icon: "file.svg",
    variant: "dots",
  },
  {
    name: "Customized",
    subtitle: "Tailored platform build",
    points: [
      "Discovery & strategy consultation",
      "Unique UX/UI design system",
      "Complex workflow automation",
      "Scalable cloud infrastructure",
      "Multi-tenant architecture",
      "Advanced security & compliance",
      "Custom AI/ML integrations",
      "Enterprise-grade features",
      "Advanced analytics & reporting",
      "API development & documentation",
      "Custom admin panels",
      "Integration with legacy systems",
      "Performance monitoring & optimization",
      "DevOps & CI/CD setup",
      "Training & documentation",
      "Ongoing support & maintenance",
    ],
    color: "var(--vawe-beige)",
    icon: "next.svg",
    variant: "diagonal",
  },
];

export default function Packages() {
  const [zoomedByName, setZoomedByName] = useState({});
  return (
    <div className="pt-28">
      <section className="w-full px-6">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              aria-label="VAWE"
              className="vawe-mask select-none"
            >
              VAWE
            </motion.div>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl pt-2 md:text-5xl font-bold font-(--font-orbitron)" style={{ background: 'var(--vawe-bg-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            Packages
          </motion.h1>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-neutral-700 max-w-3xl">Choose a package that fits your stage. Every option blends our glassy, futuristic look with strong foundations. No prices shown — we tailor scope to your needs.</p>

          <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {packages.map((p, i) => (
              <motion.div
                key={p.name}
                onClick={() => setZoomedByName((prev) => ({ ...prev, [p.name]: !prev[p.name] }))}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05 }}
                animate={{ scale: zoomedByName[p.name] ? 0.9 : 1 }}
                whileHover={{ scale: zoomedByName[p.name] ? 0.9 : 0.965 }}
                whileTap={{ scale: zoomedByName[p.name] ? 0.9 : 0.98 }}
                role="button"
                aria-pressed={!!zoomedByName[p.name]}
                tabIndex={0}
                className={`pkg-card pkg-${p.variant} gradient-border rounded-2xl overflow-hidden ${zoomedByName[p.name] ? "cursor-zoom-in" : "cursor-zoom-out"}`}
              >
                <div className="glass p-4 md:p-6 h-full flex flex-col">
                  <div className="pkg-top" style={{ backgroundColor: p.color }} />
                  <div className="flex items-center gap-2 md:gap-3 mt-2">
                    <div className="icon-badge" style={{ backgroundColor: p.color }}>
                      <Image src={`/${p.icon}`} alt="" className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]" width={22} height={22} loading="lazy" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>{p.name}</h3>
                  </div>
                  <p className="text-neutral-700 text-xs md:text-sm mt-2">{p.subtitle}</p>
                  <ul className="mt-3 md:mt-4 space-y-1.5 md:space-y-2 text-xs md:text-sm text-neutral-700">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 md:mt-6 md:pt-4">
                    <a href="/contact" className="btn-primary btn-ring px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:-translate-y-px transition" style={{ backgroundColor: p.color, color: '#fff' }}>Discuss Package</a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
        </div>
      </section>
    </div>
  );
}


