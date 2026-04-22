"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i, duration: 0.6 } }),
};

const courses = [
  "Web Development - 3 months",
  "Python Full-Stack - 3 months",
  "Data Science - 5 months",
  "Python with ML - 3 months",
  "Java with DSA - 3 months",
  "Power BI - 1 month",
];

const services = [
  "Trainings", "Certifications", "Projects", "Workshops",
  "CRT (Campus Recruitment Training)",
  "Placements and Employability tests",
];

const strengths = [
  "Professional trainers with real-time project exposure",
  "Certification-aligned curriculum",
  "Structured placements and employability support",
  "Hands-on workshops and capstone projects",
  "Modern labs and learning infrastructure",
  "Transparent reporting and progress tracking",
];

export default function Institutes() {
  return (
    <div className="pt-24 md:pt-28 pb-12">
      <section className="w-full px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.header
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-6 md:p-10 shadow-xl"
          >
            <div className="absolute -top-28 -right-24 h-72 w-72 rounded-full blur-3xl opacity-25" style={{ background: "var(--vawe-bg-gradient)" }} />
            <p className="relative inline-flex rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600">
              Education Wing of VAWE
            </p>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.05}
              className="relative mt-4 text-3xl md:text-5xl font-bold font-(--font-orbitron)"
              style={{ background: "var(--vawe-bg-gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}
            >
              VAWE Institute of Technical Training
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.1}
              className="relative mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-slate-700"
            >
              Together For Success. VAWE Institutes delivers practical, industry-ready technical education through
              structured courses, live projects, workshops, and certification-focused training.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.15}
              className="relative mt-6 flex flex-wrap items-center gap-3"
            >
              <Link
                href="https://vaweinstitute.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--vawe-teal)" }}
              >
                Visit Official Site
              </Link>
              <span className="text-sm text-slate-600">https://vaweinstitute.com</span>
            </motion.div>
          </motion.header>

          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="lg:col-span-8 rounded-3xl border border-slate-200 bg-white p-5 md:p-7 shadow-lg"
            >
              <h2 className="text-xl md:text-2xl font-semibold font-(--font-orbitron)" style={{ color: "var(--vawe-navy)" }}>
                About VAWE Institute
              </h2>
              <div className="mt-4 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=1800&auto=format&fit=crop&q=88"
                  alt="VAWE Institute classroom"
                  className="h-56 md:h-72 w-full object-cover"
                  width={1800}
                  height={1000}
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  quality={95}
                />
              </div>
              <div className="mt-5 grid gap-3 text-sm md:text-base text-slate-700">
                <p><span className="font-semibold text-slate-900">Name:</span> VAWE Institute of Technical Training</p>
                <p><span className="font-semibold text-slate-900">Tagline:</span> Together For Success</p>
                <p>
                  <span className="font-semibold text-slate-900">Focus:</span> Training, certifications, projects, and workshops
                  designed to equip modern technical skills and improve employability outcomes.
                </p>
              </div>
            </motion.article>

            <motion.aside
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={0.05}
              className="lg:col-span-4 rounded-3xl border border-slate-200 bg-white p-5 md:p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold font-(--font-orbitron)" style={{ color: "var(--vawe-navy)" }}>
                Contact & Associates
              </h3>
              <ul className="mt-4 space-y-2 text-sm md:text-base text-slate-700">
                <li><span className="font-semibold text-slate-900">Phone:</span> +91 8885103333</li>
                <li className="leading-relaxed">
                  <span className="font-semibold text-slate-900">Associates:</span> Pearson VUE, AMCAT, NSDC, UTL, PMKVY, ESDM
                </li>
              </ul>
              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-500">Official Website</p>
                <Link href="https://vaweinstitute.com" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm font-semibold text-slate-900 underline decoration-2 underline-offset-4">
                  vaweinstitute.com
                </Link>
              </div>
            </motion.aside>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6 shadow-lg"
            >
              <h3 className="text-lg md:text-xl font-semibold font-(--font-orbitron)" style={{ color: "var(--vawe-navy)" }}>
                Services Offered
              </h3>
              <div className="mt-4 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?w=1800&auto=format&fit=crop&q=88"
                  alt="Technology workshop"
                  className="h-52 w-full object-cover"
                  width={1800}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={95}
                />
              </div>
              <ul className="mt-4 space-y-2 text-sm md:text-base text-slate-700">
                {services.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--vawe-teal)" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={0.05}
              className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6 shadow-lg"
            >
              <h3 className="text-lg md:text-xl font-semibold font-(--font-orbitron)" style={{ color: "var(--vawe-navy)" }}>
                Courses
              </h3>
              <div className="mt-4 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1800&auto=format&fit=crop&q=88"
                  alt="Computer lab certification"
                  className="h-52 w-full object-cover"
                  width={1800}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={95}
                />
              </div>
              <ul className="mt-4 grid gap-2 text-sm md:text-base text-slate-700">
                {courses.map((course) => (
                  <li key={course} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                    {course}
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
          >
            <div className="grid gap-6 lg:grid-cols-12">
              <article className="lg:col-span-8">
                <h3 className="text-lg md:text-2xl font-semibold font-(--font-orbitron)" style={{ color: "var(--vawe-navy)" }}>
                  Why Choose VAWE
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: "var(--vawe-teal)" }}>Group of VAWE</span>
                  <span className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: "var(--vawe-coral)" }}>ISO Certified</span>
                  <span className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: "var(--vawe-navy)" }}>MSME Registered</span>
                </div>
                <p className="mt-5 text-sm md:text-base leading-relaxed text-slate-700">
                  VAWE Institutes is the education and training arm of <span className="font-semibold text-slate-900">VAWE</span>,
                  delivering industry-ready skills through structured courses, certifications, and live projects. The institute
                  follows VAWE quality standards and supports learners with clear progression paths toward placements.
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2 text-sm md:text-base text-slate-700">
                  {strengths.map((item) => (
                    <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <aside className="lg:col-span-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h4 className="text-base md:text-lg font-semibold" style={{ color: "var(--vawe-navy)" }}>
                  Quick Link
                </h4>
                <p className="mt-2 text-sm text-slate-600">Explore programs, admissions, and training updates.</p>
                <Link
                  href="https://vaweinstitute.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  style={{ backgroundColor: "var(--vawe-coral)" }}
                >
                  Visit vaweinstitute.com
                </Link>
              </aside>
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  );
}


