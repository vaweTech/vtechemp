"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "LMS",
    desc: "Learning Management System for courses, quizzes, progress tracking, and certifications.",
    color: "#f56c53",
    img: "/Lms.png",
    slug: "lms",
    features: [ 
      "Course builder with modules and quizzes",
      "Student progress tracking and certificates",
      "Instructor dashboards and analytics",
    ],
    icon: "/window.svg",
  },
  {
    title: "Smart Attendance",
    desc: "Smart attendance with biometrics/QR, shift scheduling, leave, and real-time reports.",
    color: "#00448a",
    img: "/Smartattendance.png",
    slug: "smart-attendance",
    features: [
      "QR/Biometric check‑in and shifts",
      "Leave management and approvals",
      "Monthly timesheets and payroll exports",
    ],
    icon: "/file.svg",
  },
  {
    title: "Vehicle Tracking System",
    desc: "GPS-based fleet tracking with live maps, geofencing, and route optimization.",
    color: "#f56c53",
    img: "/Vehicletracking.png",
    slug: "vehicle-tracking-system",
    features: [
      "Live map with trip history",
      "Geofencing alerts and notifications",
      "Route optimization and utilization",
    ],
    icon: "/globe.svg",
  },
  {
    title: "E‑commerce Website",
    desc: "Modern storefront with product catalogs, checkout, payments, and analytics.",
    color: "#00448a",
    img: "/E commerce.png",
    slug: "e-commerce-website",
    features: [
      "Catalog, variants, and inventory",
      "Cart, checkout, and payments",
      "Orders, refunds, and sales analytics",
    ],
    icon: "/window.svg",
  },
];

export default function Products() {
  return (
    <div className="pt-28">
      <section className="w-full px-6 mt-2 md:mt-4">
        <div className="container mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold font-(--font-orbitron)" style={{ background: 'var(--vawe-bg-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            Products
          </motion.h1>
          <p className="mt-3 md:mt-5 text-neutral-700 max-w-3xl">Carefully designed offerings to match your stage and goals. Mix gradients and glass to deliver modern, luxurious interfaces.</p>
          <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden border-2"
                style={{ borderColor: p.color }}
              >
                <div className="h-full flex flex-col overflow-hidden rounded-2xl bg-white/90 shadow-lg">
                  <div className="relative w-full h-48 md:h-56 overflow-hidden">
                    <Image
                      src={p.img}
                      alt={`${p.title} technology image`}
                      title={`${p.title} image`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority={false}
                      unoptimized
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2" style={{ color: 'var(--vawe-navy)' }}>
                      {p.icon && (
                        <Image src={p.icon} alt={`${p.title} icon`} width={20} height={20} className="w-5 h-5" priority={false} style={{ filter: 'invert(1)' }} />
                      )}
                      {p.title}
                    </h3>
                    <p className="mt-2 text-neutral-700 text-sm">{p.desc}</p>
                    {p.features && (
                      <ul className="mt-3 list-disc pl-5 text-neutral-700 text-sm space-y-1">
                        {p.features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-5">
                      {p.slug && (
                        <Link href={`/products/${p.slug}`} className="px-4 py-2 rounded-full text-sm hover:-translate-y-px transition text-white font-semibold inline-block" style={{ backgroundColor: p.color }}>
                          Learn More
                        </Link>
                      )}
                    </div>
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


