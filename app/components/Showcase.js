  "use client";
  import Image from "next/image";
  import { motion } from "framer-motion";
  import { useState } from "react";

  const defaults = [
    {
      src: "/heroimg1.jpg",
      hoverSrc: "/transformimg1.jpg",
      alt: "Strategic workshop",
      label: "Innovation",
      title: "Idea development",
      caption: "Map value opportunities with stakeholder co-creation.",
    },
    {
      src: "/heroimg2.jpg",
      hoverSrc: "/transformimg2.jpg",
      alt: "Design sprint",
      label: "Technology",
      title: "Product creation",
      caption: "Prototype, test, and validate interfaces in days, not weeks.",
    },
    {
      src: "/heroimg3.png",
      hoverSrc: "/transformimg3.jpg",
      alt: "Cloud platform launch",
      label: "Growth",
      title: "Digital transformation",
      caption: "Deploy secure, scalable infrastructure with automation.",
    },
    {
      src: "/codingimg.jpeg",
      hoverSrc: "/transformimg4.jpg",
      alt: "AI implementation",
      label: "Excellence",
      title: "Execution & launch",
      caption: "Embed intelligence and insight into every workflow.",
    },
  ];

  export default function Showcase({ items = defaults }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const highlights = [
      "Strategy That Turns Ideas Into Roadmaps.",
      "UI/UX That Gives Life to Your Vision.",
      "Full-Stack Development That Powers Your Product.",
      "AI-Enabled Solutions to Accelerate Growth",
      "Branding & Digital Identity That Speaks for You",
      "Continuous Support & Evolution",
    ];

    const stats = [
      { value: "120+", label: "Digital launches" },
      { value: "35%", label: "Efficiency lift" },
      { value: "6x", label: "Engagement gain" },
    ];

    return (
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-neutral-50 py-16 md:py-24 lg:py-32">
        {/* Tech-inspired background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[var(--vawe-teal)]/8 blur-[100px] -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--vawe-coral)]/6 blur-[120px] translate-y-1/2" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,68,138,0.02)_50%,transparent_100%)]" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,68,138,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,68,138,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section - Modern Tech Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16 md:mb-20"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--vawe-teal)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--vawe-teal)] px-4 py-1.5 rounded-full bg-[var(--vawe-teal)]/10 border border-[var(--vawe-teal)]/20">
                Digital Solutions
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--vawe-teal)]" />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-[var(--font-orbitron)] leading-[1.1] mb-6"
            >
              <span className="bg-gradient-to-r from-[var(--vawe-navy)] via-[var(--vawe-teal)] to-[var(--vawe-navy)] bg-clip-text text-transparent">
                Transform Your Business
              </span>
              <br />
              <span className="text-[var(--vawe-navy)]">with Digital Power</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-10"
            >
              Every idea has potential — we amplify it. Our team transforms your vision into powerful digital experiences through strategic thinking, user-focused design, and intelligent engineering.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto mb-12"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-[var(--font-orbitron)] bg-gradient-to-br from-[var(--vawe-navy)] to-[var(--vawe-teal)] bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-neutral-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="/services"
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[var(--vawe-navy)] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,68,138,0.3)] hover:-translate-y-0.5"
              >
                <span className="relative z-10">Explore Services</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--vawe-navy)] to-[var(--vawe-teal)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--vawe-navy)]/30 text-[var(--vawe-navy)] font-semibold rounded-lg transition-all duration-300 hover:bg-[var(--vawe-navy)] hover:text-white hover:border-[var(--vawe-navy)]"
              >
                Start a Project
              </a>
            </motion.div>
          </motion.div>

          {/* Cards Grid - Modern Tech Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8"
          >
            {items.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex flex-col overflow-hidden rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-sm border border-neutral-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,68,138,0.15)] transition-all duration-500"
              >
                {/* Gradient accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-[var(--vawe-teal)] via-[var(--vawe-coral)] to-[var(--vawe-teal)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--vawe-teal)]/20 via-[var(--vawe-coral)]/20 to-[var(--vawe-teal)]/20 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

                {/* Image Container */}
                <div className="relative h-32 md:h-48 lg:h-64 w-full overflow-hidden bg-neutral-100">
                  {/* Default Image - Transform Image */}
                  <Image
                    src={card.hoverSrc}
                    alt={card.alt}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      hoveredIndex === index ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                    }`}
                  />
                  {/* Hover Image - Original Image */}
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className={`object-cover transition-all duration-700 absolute inset-0 ${
                      hoveredIndex === index ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
                    }`}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Label badge */}
                  <div className="absolute top-2 left-2 md:top-4 md:left-4">
                    <span className="inline-flex items-center px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-[var(--vawe-navy)] border border-white/50 shadow-sm">
                      {card.label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-col gap-1.5 md:gap-3 p-3 md:p-6 bg-white/50 backdrop-blur-sm">
                  <h3 className="text-sm md:text-base lg:text-xl font-bold font-[var(--font-orbitron)] text-[var(--vawe-navy)] group-hover:text-[var(--vawe-teal)] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-[10px] md:text-xs lg:text-sm text-neutral-600 leading-relaxed line-clamp-2">
                    {card.caption}
                  </p>
                  
                  {/* Arrow indicator */}
                  <div className="flex items-center gap-1 md:gap-2 mt-1 md:mt-2 text-[var(--vawe-teal)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] md:text-xs lg:text-sm font-semibold">Learn more</span>
                    <span className="text-sm md:text-base lg:text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Highlights Section - Tech Company Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 md:mt-24"
          >
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold font-[var(--font-orbitron)] text-center text-[var(--vawe-navy)] mb-10">
                What We Deliver
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {highlights.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-neutral-200/50 hover:border-[var(--vawe-teal)]/30 hover:bg-white/80 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[var(--vawe-teal)] group-hover:scale-150 transition-transform duration-300" />
                    </div>
                    <span className="text-sm md:text-base text-neutral-700 font-medium leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
