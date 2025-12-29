"use client";
import { motion } from "framer-motion";
import { Image } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i, duration: 0.6 } }),
};

export default function Institutes() {
  return (
    <div className="pt-28">
      <section className="w-full px-6">
        <div className="container mx-auto">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold font-(--font-orbitron)"
            style={{ background: 'var(--vawe-bg-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}
          >
            VAWE Institutes
          </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.05}
          className="mt-3 text-sm md:text-base text-neutral-800 max-w-3xl"
        >
         VAWE INSTITUTES is the group of VAWE . VAWE Institute of Technical Training — Together For Success.
        </motion.p>

          {/* Prominent link */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.1} className="mt-5">
            <Link
              href="https://vaweinstitute.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2 rounded-md border font-semibold text-sm md:text-base text-black transition"
              style={{ borderColor: 'var(--vawe-teal)', backgroundColor: 'var(--vawe-teal)' }}
            >
              Visit Official Site
              <span className="text-xs opacity-80">https://vaweinstitute.com</span>
            </Link>
          </motion.div>

          {/* Newspaper-style layout */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {/* Lead story with image */}
            <article className="md:col-span-2">
              <h2 className="text-xl md:text-2xl font-semibold font-(--font-orbitron)" style={{ color: 'var(--vawe-navy)', borderBottom: '2px solid var(--vawe-teal)', paddingBottom: '8px' }}>About VAWE Institute</h2>
              <div className="mt-3 rounded-lg overflow-hidden" style={{ border: '2px solid var(--vawe-teal)' }}>
                <Image src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&auto=format&fit=crop&q=80" alt="VAWE Institute classroom" className="w-full h-56 object-cover" loading="lazy" />
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm md:text-base text-neutral-700 space-y-1">
                <li>Name: VAWE Institute of Technical Training.</li>
                <li>Tagline: &quot;Together For Success..&quot;</li>
                <li>Focus: Training, certifications, projects, and workshops to equip modern technical skills.</li>
              </ul>
            </article>

            {/* Sidebar quick facts */}
            <aside>
              <h3 className="text-base md:text-lg font-semibold font-(--font-orbitron)" style={{ color: 'var(--vawe-navy)', borderBottom: '2px solid var(--vawe-coral)', paddingBottom: '8px' }}>Contact & Associates</h3>
            <ul className="mt-3 list-disc pl-5 text-sm md:text-base text-neutral-800 space-y-1">
              <li>Phone: +91 8885103333</li>
              <li>Pearson VUE, AMCAT, NSDC, UTL, PMKVY, ESDM</li>
            </ul>
            <div className="mt-4">
              <Link href="https://vaweinstitute.com" target="_blank" rel="noopener noreferrer" className="underline text-sm md:text-base text-neutral-900">
                vaweinstitute.com
              </Link>
            </div>
          </aside>
        </div>

          {/* Two-column articles */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <article>
              <h3 className="text-lg md:text-xl font-semibold font-(--font-orbitron)" style={{ color: 'var(--vawe-navy)', borderBottom: '2px solid var(--vawe-teal)', paddingBottom: '8px' }}>Services Offered</h3>
              <div className="mt-3 rounded-lg overflow-hidden" style={{ border: '2px solid var(--vawe-teal)' }}>
                <Image src="https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&auto=format&fit=crop&q=80" alt="Technology workshop" className="w-full h-48 object-cover" loading="lazy" />
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm md:text-base text-neutral-700 space-y-1">
                <li>Trainings • Certifications • Projects • Workshops</li>
                <li>CRT (Campus Recruitment Training)</li>
                <li>Placements & Employability tests</li>
              </ul>
            </article>
            <article>
              <h3 className="text-lg md:text-xl font-semibold font-(--font-orbitron)" style={{ color: 'var(--vawe-navy)', borderBottom: '2px solid var(--vawe-coral)', paddingBottom: '8px' }}>Courses</h3>
              <div className="mt-3 rounded-lg overflow-hidden" style={{ border: '2px solid var(--vawe-coral)' }}>
                <Image src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&auto=format&fit=crop&q=80" alt="Computer lab certification" className="w-full h-48 object-cover" loading="lazy" />
              </div>
              <ul className="mt-3 grid grid-cols-1 gap-2 text-sm md:text-base text-neutral-700">
                <li>Web Development — 3 months</li>
                <li>Python Full‑Stack — 3 months</li>
                <li>Data Science — 5 months</li>
                <li>Python with ML — 3 months</li>
                <li>Java with DSA — 3 months</li>
                <li>Power BI — 1 month</li>
              </ul>
            </article>
          </div>

          {/* Bottom strip */}
          <div className="mt-8 border-t pt-6 grid md:grid-cols-3 gap-6" style={{ borderColor: 'var(--vawe-teal)' }}>
            <article className="md:col-span-2">
              <h3 className="text-lg md:text-xl font-semibold font-(--font-orbitron)" style={{ color: 'var(--vawe-navy)', borderBottom: '2px solid var(--vawe-teal)', paddingBottom: '8px' }}>Why Choose VAWE</h3>
              <div className="mt-4 rounded-lg p-5" style={{ border: '2px solid var(--vawe-teal)', backgroundColor: 'rgba(101,239,242,0.05)' }}>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide">
                  <span className="px-2 py-1 rounded text-white" style={{ backgroundColor: 'var(--vawe-teal)' }}>Group of VAWE</span>
                  <span className="px-2 py-1 rounded text-white" style={{ backgroundColor: 'var(--vawe-coral)' }}>ISO Certified</span>
                  <span className="px-2 py-1 rounded text-white" style={{ backgroundColor: 'var(--vawe-navy)' }}>MSME Registered</span>
                </div>
              <p className="mt-4 text-sm md:text-base text-neutral-800">
                VAWE Institutes is the education and training arm of <span className="font-semibold">VAWE</span>, delivering
                industry‑ready skills through structured courses, certifications and live projects.
                The institute operates under VAWE standards and is <span className="font-semibold">ISO certified</span> and
                <span className="font-semibold"> MSME registered</span> via VAWE.
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <ul className="list-disc pl-5 text-sm md:text-base text-neutral-800 space-y-1">
                  <li>Professional trainers with real‑time project exposure</li>
                  <li>Certification‑aligned curriculum</li>
                  <li>Structured placements and employability support</li>
                </ul>
                <ul className="list-disc pl-5 text-sm md:text-base text-neutral-800 space-y-1">
                  <li>Hands‑on workshops and capstone projects</li>
                  <li>Modern labs and learning infrastructure</li>
                  <li>Transparent reporting and progress tracking</li>
                </ul>
              </div>
            </div>
          </article>
          <article>
            <h3 className="text-lg md:text-xl font-semibold font-(--font-orbitron)" style={{ color: 'var(--vawe-navy)', borderBottom: '2px solid var(--vawe-coral)', paddingBottom: '8px' }}>Quick Link</h3>
            <Link
              href="https://vaweinstitute.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block px-3 py-2 border font-semibold text-sm md:text-base text-white transition"
              style={{ borderColor: 'var(--vawe-coral)', backgroundColor: 'var(--vawe-coral)' }}
            >
              Visit vaweinstitute.com
            </Link>
          </article>
        </div>
        </div>
      </section>
    </div>
  );
}


