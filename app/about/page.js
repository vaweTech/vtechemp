"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  Target,
  Eye,
  BookOpen,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
  Award,
  BadgeCheck,
  Medal,
  Users,
  Monitor,
  Network,
  Settings,
  Server,
  Mail,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

const team = [
  {
    name: "Bala Balaji N",
    role: "CEO & Managing Director",
    color: "grad-mc",
    photo: "/team/Balaji.jpeg",
  },
  {
    name: "Rupa Bhaskar Pydi",
    role: "Software Engineer & Systems Designer",
    roleTextColor: "var(--vawe-teal)",
    color: "grad-mc",
    photo: "/team/rupabhaskar.png",
  },
  {
    name: "Swapna Uggam",
    role: "Software Engineer & UI/UX Designer",
    color: "grad-mo",
    photo: "/team/swapna.png",
  },
  {
    name: "Surya Praneetha",
    role: "HR & Soft Skills Trainer",
    color: "grad-mc",
    photo:
      "/team/spraneethi.png",
  },
  {
    name: "K Vishnu Sai",
    role: "Digital Marketer",
    color: "grad-mc",
    photo: "/team/vishnu.jpeg",
  },
];

const ValueCard3D = ({ title, desc, icon: Icon, image }) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);
  const bgRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const targetRef = useRef({ tx: 0, ty: 0, px: 0, py: 0 });
  const currentRef = useRef({ tx: 0, ty: 0, px: 0, py: 0 });
  const hoveringRef = useRef(false);
  const rafRef = useRef(null);

  function runFrame() {
    rafRef.current = null;
    const cur = currentRef.current;
    const tgt = targetRef.current;
    const h = hoveringRef.current;
    const k = 0.42;
    cur.tx += (tgt.tx - cur.tx) * k;
    cur.ty += (tgt.ty - cur.ty) * k;
    cur.px += (tgt.px - cur.px) * k;
    cur.py += (tgt.py - cur.py) * k;

    const lift = h ? -12 : 0;
    const scale = h ? 1.035 : 1;
    const bgScale = h ? 1.14 : 1;
    if (cardRef.current) {
      cardRef.current.style.transform =
        `perspective(920px) rotateX(${cur.tx}deg) rotateY(${cur.ty}deg) translateZ(0) translateY(${lift}px) scale(${scale})`;
    }
    if (bgRef.current) {
      bgRef.current.style.transform =
        `translate3d(${cur.px}px, ${cur.py}px, 0) scale(${bgScale})`;
    }

    const eps = 0.02;
    const settled =
      Math.abs(tgt.tx - cur.tx) < eps &&
      Math.abs(tgt.ty - cur.ty) < eps &&
      Math.abs(tgt.px - cur.px) < eps &&
      Math.abs(tgt.py - cur.py) < eps;

    if (h || !settled) {
      rafRef.current = requestAnimationFrame(runFrame);
    }
  }

  const scheduleFrame = () => {
    if (rafRef.current == null) {
      rafRef.current = requestAnimationFrame(runFrame);
    }
  };

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const t = targetRef.current;
    t.tx = py * -14;
    t.ty = px * 16;
    t.px = px * -32;
    t.py = py * -32;
    scheduleFrame();
  };

  const handleMouseEnter = () => {
    hoveringRef.current = true;
    setHovered(true);
    scheduleFrame();
  };

  const handleMouseLeave = () => {
    hoveringRef.current = false;
    setHovered(false);
    const t = targetRef.current;
    t.tx = t.ty = t.px = t.py = 0;
    scheduleFrame();
  };

  return (
    <div
      ref={wrapRef}
      className={`cv-card-wrap cursor-pointer${hovered ? " cv-card-wrap--hover" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={cardRef} className="cv-card">
        <div
          ref={bgRef}
          className="cv-card-bg"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <div className="cv-card-bg-vignette" aria-hidden />
        <div className="cv-card-shine" aria-hidden />
        <div className="cv-card-info">
          <div className="flex items-center gap-1.5 md:gap-3 mb-1 md:mb-2">
            {Icon && <Icon className="w-3.5 h-3.5 md:w-6 md:h-6 cv-card-icon" />}
            <h3 className="text-sm md:text-2xl lg:text-3xl font-bold">{title}</h3>
          </div>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div className="pt-28 bg-gradient-to-b from-white to-neutral-50">
      {/* Hero */}
      <section className="relative w-full px-6 py-8 md:py-10 text-center" style={{ background: 'var(--vawe-bg-gradient)' }}>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative text-3xl md:text-4xl font-semibold text-white font-[var(--font-orbitron)]"
        >
          About Us
        </motion.h1>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="mt-2"
        >
          <span
            className="block text-5xl md:text-7xl font-extrabold leading-[0.95] font-[var(--font-orbitron)] text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #f56c53, #fdc377, #26ebe5)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            VAWE GlobalTech
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="mt-4 max-w-3xl mx-auto text-lg leading-relaxed"
          style={{ color: '#ffffff' }}
        >
          We are a next-gen IT company blending creativity and engineering to
          deliver futuristic, glassy interfaces and powerful scalable products.
        </motion.p>
      </section>

      {/* Company Overview - Redesigned */}
      <section className="w-full px-6 mt-8 md:mt-12">
        <div className="container mx-auto">
          {/* Mobile: Heading and title first */}
          <div className="lg:hidden space-y-4 mb-6">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: "var(--vawe-coral)" }}>
                Company Overview
              </span>
              <h2 className="text-2xl font-bold font-[var(--font-orbitron)] leading-tight mb-4" style={{ color: "var(--vawe-navy)" }}>
                Reinventing business with excellence, people, and values
              </h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Content Section - Redesigned */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1 space-y-5 order-2 lg:order-1"
            >
              {/* Desktop: Show all content normally */}
              <div className="hidden lg:block space-y-4">
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: "var(--vawe-coral)" }}>
                    Company Overview
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[var(--font-orbitron)] leading-tight mb-4" style={{ color: "var(--vawe-navy)" }}>
                    Reinventing business with excellence, people, and values
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: 'var(--vawe-teal)' }} />
                    <div className="pl-5">
                      <p className="text-base md:text-lg leading-relaxed font-medium text-neutral-800">
                        &quot;VAWE Technologies is a global IT company driven by technology pioneers committed to business transformation through excellence, people, and values.&quot;
                      </p>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-neutral-600 max-w-2xl">
                    Our technology center, powered by My Tutorings, is a premium training hub that nurtures talent and fuels our innovation engine. We empower teams to ship platforms that adapt, scale, and deliver meaningful outcomes.
                  </p>
                </div>
              </div>

              {/* Mobile: Show content after image */}
              <div className="space-y-4 lg:hidden">
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: 'var(--vawe-teal)' }} />
                  <div className="pl-5">
                    <p className="text-sm leading-relaxed font-medium text-neutral-800">
                      &quot;VAWE Technologies is a global IT company driven by technology pioneers committed to business transformation through excellence, people, and values.&quot;
                    </p>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-neutral-600">
                  Our technology center, powered by My Tutorings, is a premium training hub that nurtures talent and fuels our innovation engine. We empower teams to ship platforms that adapt, scale, and deliver meaningful outcomes.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <div className="flex flex-wrap gap-3">
                  {["Excellence", "People", "Values", "Innovation"].map((t, i) => {
                    const colors = ["var(--vawe-teal)", "var(--vawe-coral)", "var(--vawe-navy)", "var(--vawe-beige)"];
                    return (
                      <div
                        key={t}
                        className="group relative"
                      >
                        <div 
                          className="px-4 py-1.5 rounded-full text-xs font-bold text-white transition-transform hover:scale-105 shadow-sm hover:shadow-md"
                          style={{ backgroundColor: colors[i] }}
                        >
                          {t}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded-full bg-[var(--vawe-navy)] text-white font-semibold hover:bg-[var(--vawe-navy)]/90 transition-all hover:gap-3 shadow-md hover:shadow-lg text-sm"
                >
                  Discover More
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Circular Image Section - Mobile order: after heading */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex-shrink-0 order-1 lg:order-2 mx-auto lg:mx-0"
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                {/* Outer ring decoration */}
                <div className="absolute inset-0 rounded-full border-4" style={{ borderColor: 'var(--vawe-teal)', opacity: 0.2 }} />
                
                {/* Circular image with blended edges */}
                <div 
                  className="absolute inset-4 rounded-full overflow-hidden"
                  style={{
                    maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                  }}
                >
                  <Image
                    src="/img1.jpg"
                    alt="Company leadership"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    width={300}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#fef5ec]/40" />
                </div>
                
                {/* Decorative dots */}
                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--vawe-coral)] shadow-lg" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-[var(--vawe-teal)]/30 blur-md" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Story - redesigned */}
      <section className="w-full px-6 mt-8 md:mt-12 py-10 md:py-14" style={{ backgroundColor: "#fdf1e0" }}>
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center font-[var(--font-orbitron)]"
            style={{ color: "var(--vawe-navy)" }}
          >
            Our Fundamental Business
          </motion.h2>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3">
            {[
              {
                title: "Our Mission",
                text: "Empower brands with beautiful, high-performance software and design.",
                icon: Target,
                ring: "from-[var(--vawe-coral)] to-[var(--vawe-beige)]",
              },
              {
                title: "Our Vision",
                text: "A world where digital interactions feel fluid, elegant, and unmistakably human.",
                icon: Eye,
                ring: "from-[var(--vawe-teal)] to-[var(--vawe-navy)]",
              },
              {
                title: "Our Story",
                text: "Born in 2025, VAWE GlobalTech unites design excellence with engineering rigor.",
                icon: BookOpen,
                ring: "from-[var(--vawe-beige)] to-[var(--vawe-coral)]",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative rounded-2xl md:rounded-3xl bg-white shadow-[0_18px_45px_rgba(7,23,56,0.12)] border border-white/70 text-center px-4 py-6 md:px-6 md:py-10 overflow-hidden"
              >
                <div className={`absolute -top-20 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-gradient-to-br ${card.ring} blur-3xl opacity-40`} />
                <div className="relative mx-auto flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(7,23,56,0.14)]">
                  {card.icon && <card.icon size={24} className="md:w-[30px] md:h-[30px] text-[var(--vawe-navy)]" />}
                </div>
                <h3 className="relative mt-4 md:mt-6 text-base md:text-xl font-semibold" style={{ color: "var(--vawe-navy)" }}>
                  {card.title}
                </h3>
                <p className="relative mt-2 md:mt-3 text-xs md:text-base leading-relaxed text-neutral-700">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full px-6 mt-8 md:mt-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-[var(--font-orbitron)] text-center mb-3 md:mb-4" style={{ color: '#00448a' }}>Core Values</h2>
          <div className="mt-6 md:mt-8 grid grid-cols-2 md:flex md:flex-wrap justify-center gap-6 px-4">
          {[
            { title: "Innovation", desc: "Our innovations aim to create transformations that give businesses a competitive edge.", icon: Lightbulb, image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=600&fit=crop" },
            { title: "Insight", desc: "We foresee trends and meet needs through vision, skill, and collective intelligence.", icon: Eye, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop" },
            { title: "Integrity", desc: "We foster trust and uphold integrity in all our customer and partner relationships.", icon: ShieldCheck, image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=600&fit=crop" },
          ].map((v, i) => (
            <ValueCard3D key={v.title} title={v.title} desc={v.desc} icon={v.icon} image={v.image} />
          ))}
          </div>
        </div>
        <style jsx global>{`
          .cv-card-wrap {
            margin: 10px;
            transform-style: preserve-3d;
            perspective: 980px;
          }
          .cv-card {
            position: relative;
            flex: 0 0 140px;
            width: 140px;
            height: 190px;
            background-color: #1a1f2e;
            overflow: hidden;
            border-radius: 14px;
            transform-style: preserve-3d;
            will-change: transform;
            transition: box-shadow 0.45s cubic-bezier(0.23, 1, 0.32, 1);
            box-shadow:
              0 18px 40px rgba(0, 20, 40, 0.35),
              0 0 0 1px rgba(255, 255, 255, 0.08) inset;
          }
          @media (min-width: 768px) {
            .cv-card {
              flex: 0 0 240px;
              width: 240px;
              height: 320px;
              border-radius: 18px;
            }
          }
          .cv-card-wrap--hover .cv-card {
            box-shadow:
              0 28px 56px rgba(0, 30, 60, 0.45),
              0 0 0 1px rgba(101, 239, 242, 0.45),
              0 0 32px rgba(101, 239, 242, 0.2),
              0 0 0 1px rgba(255, 255, 255, 0.12) inset;
          }
          .cv-card-bg {
            position: absolute;
            top: -28px;
            left: -28px;
            width: calc(100% + 56px);
            height: calc(100% + 56px);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            opacity: 0.55;
            pointer-events: none;
            will-change: transform, opacity, filter;
            transition:
              opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1),
              filter 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          }
          .cv-card-wrap--hover .cv-card-bg {
            opacity: 0.95;
            filter: saturate(1.12) brightness(1.06) contrast(1.02);
          }
          .cv-card-bg-vignette {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: radial-gradient(
              ellipse 85% 75% at 50% 45%,
              transparent 30%,
              rgba(0, 12, 32, 0.55) 100%
            );
            opacity: 0.85;
            transition: opacity 0.45s ease;
          }
          .cv-card-wrap--hover .cv-card-bg-vignette {
            opacity: 0.35;
          }
          .cv-card-shine {
            position: absolute;
            inset: -40% -60%;
            pointer-events: none;
            background: linear-gradient(
              115deg,
              transparent 35%,
              rgba(255, 255, 255, 0.18) 48%,
              rgba(255, 255, 255, 0.32) 50%,
              rgba(255, 255, 255, 0.12) 52%,
              transparent 65%
            );
            transform: translateX(-100%) skewX(-12deg);
            opacity: 0;
            z-index: 2;
            animation: none;
          }
          .cv-card-wrap--hover .cv-card-shine {
            opacity: 1;
            animation: cv-shine-sweep 0.85s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          }
          @keyframes cv-shine-sweep {
            from {
              transform: translateX(-100%) skewX(-12deg);
            }
            to {
              transform: translateX(120%) skewX(-12deg);
            }
          }
          .cv-card-info {
            padding: 10px;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            color: #fff;
            z-index: 3;
            transform: translateY(38%);
            transition: transform 0.55s cubic-bezier(0.23, 1, 0.32, 1);
          }
          @media (min-width: 768px) {
            .cv-card-info {
              padding: 18px 20px 20px;
            }
          }
          .cv-card-wrap--hover .cv-card-info {
            transform: translateY(0);
          }
          .cv-card-info p {
            opacity: 0;
            max-height: 0;
            margin: 0;
            overflow: hidden;
            text-shadow: 0 2px 12px rgba(0, 0, 0, 0.85);
            transition:
              opacity 0.45s cubic-bezier(0.23, 1, 0.32, 1),
              max-height 0.55s cubic-bezier(0.23, 1, 0.32, 1),
              margin-top 0.45s ease;
            font-size: 10px;
            line-height: 1.4;
          }
          @media (min-width: 768px) {
            .cv-card-info p {
              font-size: 14px;
              line-height: 1.45;
            }
          }
          .cv-card-wrap--hover .cv-card-info p {
            opacity: 1;
            max-height: 120px;
            margin-top: 6px;
          }
          @media (min-width: 768px) {
            .cv-card-wrap--hover .cv-card-info p {
              max-height: 160px;
              margin-top: 8px;
            }
          }
          .cv-card-info > div,
          .cv-card-info p {
            position: relative;
            z-index: 1;
          }
          .cv-card-info::after {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 0;
            border-radius: 0 0 14px 14px;
            background: linear-gradient(
              to top,
              rgba(0, 20, 45, 0.92) 0%,
              rgba(0, 30, 55, 0.55) 55%,
              transparent 100%
            );
            opacity: 0.65;
            transform: translateY(12px);
            transition:
              opacity 0.45s cubic-bezier(0.23, 1, 0.32, 1),
              transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          }
          @media (min-width: 768px) {
            .cv-card-info::after {
              border-radius: 0 0 18px 18px;
            }
          }
          .cv-card-wrap--hover .cv-card-info::after {
            opacity: 1;
            transform: translateY(0);
          }
          .cv-card-info h3 {
            font-family: "Playfair Display", serif;
            font-size: 14px;
            font-weight: 700;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.65);
            color: #ffffff;
            transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
          }
          @media (min-width: 768px) {
            .cv-card-info h3 {
              font-size: 24px;
            }
          }
          .cv-card-wrap--hover .cv-card-info h3 {
            transform: translateY(-2px);
          }
          .cv-card-icon {
            filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
            transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.3s ease;
          }
          .cv-card-wrap--hover .cv-card-icon {
            transform: scale(1.08);
            color: var(--vawe-teal, #65eff2);
          }
        `}</style>
      </section>

      {/* Certifications and Clients */}
      <section className="w-full px-6 mt-8 md:mt-12 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff4e8] via-white to-[#fef5ec]" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--font-orbitron)] mb-4" style={{ color: "var(--vawe-navy)" }}>
              Our Prestigious Awards &amp; Certifications
            </h2>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-neutral-600 leading-relaxed">
              Certified by <span className="font-semibold text-[var(--vawe-coral)]">ISO</span>, <span className="font-semibold text-[var(--vawe-coral)]">MSME</span>, <span className="font-semibold text-[var(--vawe-coral)]">APSCHE</span>, and <span className="font-semibold text-[var(--vawe-coral)]">AICTE</span> as <span className="font-semibold text-[var(--vawe-coral)]">VAWE</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-3 md:gap-4 lg:gap-6 mb-12">
            {[
              { icon: Award, label: "ISO Certified", accent: "var(--vawe-teal)", desc: "Quality Management" },
              { icon: BadgeCheck, label: "MSME Registered", accent: "var(--vawe-navy)", desc: "Small Business" },
              { icon: ShieldCheck, label: "APSCHE", accent: "var(--vawe-coral)", desc: "Education Approved" },
              { icon: Medal, label: "AICTE", accent: "var(--vawe-beige)", desc: "Technical Excellence" },
              { icon: Monitor, label: "Microsoft", accent: "var(--vawe-teal)", desc: "Technology Partner" },
              { icon: Network, label: "Cisco", accent: "var(--vawe-navy)", desc: "Network Solutions" },
              { icon: Settings, label: "Bosch", accent: "var(--vawe-coral)", desc: "Innovation Partner" },
              { icon: Server, label: "IBM", accent: "var(--vawe-beige)", desc: "Enterprise Solutions" },
              { icon: Mail, label: "Postal Department", accent: "var(--vawe-teal)", desc: "Government Partner" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="grid h-8 w-8 md:h-10 md:w-10 lg:h-14 lg:w-14 place-items-center rounded-lg md:rounded-xl lg:rounded-2xl text-white mb-2 md:mb-3 lg:mb-4"
                  style={{ backgroundColor: item.accent }}
                >
                  <item.icon size={16} className="md:w-5 md:h-5 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-[10px] md:text-xs lg:text-sm font-bold mb-0.5 md:mb-1" style={{ color: "var(--vawe-navy)" }}>
                  {item.label}
                </h3>
                <p className="text-[8px] md:text-[9px] lg:text-[10px] text-neutral-600 leading-tight">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative rounded-2xl bg-gradient-to-r from-[var(--vawe-navy)]/5 to-[var(--vawe-coral)]/5 border border-[var(--vawe-navy)]/10 p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 mt-1">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--vawe-teal)]/20">
                  <Users size={24} className="text-[var(--vawe-teal)]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 font-[var(--font-orbitron)]" style={{ color: "var(--vawe-navy)" }}>
                  Trusted Partners
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  VAWE clients include <span className="font-semibold text-[var(--vawe-navy)]">Laila neuticals</span> and other leading organizations who trust us to deliver exceptional digital solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Milestones - Clean Simple Design */}
      <section className="relative w-full px-6 mt-6 md:mt-8 py-8 md:py-12 overflow-hidden">
        {/* Background Design Elements */}
        <div className="pointer-events-none absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[var(--vawe-navy)]/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[var(--vawe-beige)]/5 blur-3xl" />
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(var(--vawe-navy) 1px, transparent 1px), linear-gradient(90deg, var(--vawe-navy) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Decorative Lines */}
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--vawe-navy)]/10 to-transparent" />
          <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--vawe-beige)]/10 to-transparent" />
        </div>
        
        <div className="relative container mx-auto max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-[var(--font-orbitron)] text-center mb-8 md:mb-12" 
            style={{ color: 'var(--vawe-navy)' }}
          >
            Milestones
          </motion.h2>
          
          <div className="space-y-6 md:space-y-8">
            {[
              { year: "2016", title: "Founded", desc: "VAWE starts with a mission to unite design and engineering." },
              { year: "2018", title: "50+ Projects", desc: "First wave of production apps across multiple industries." },
              { year: "2021", title: "Cloud‑Native", desc: "Platform blueprint for secure, scalable deployments." },
              { year: "2023", title: "AI Practice", desc: "Expanded into ML solutions and intelligent automation." },
              { year: "2025", title: "Global Delivery", desc: "Serving clients across regions with a partner ecosystem." },
            ].map((m, i) => {
              // Use only two colors: navy blue and beige/biscuit, alternating
              const color = i % 2 === 0 ? 'var(--vawe-navy)' : 'var(--vawe-beige)';
              
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative flex justify-center"
                >
                  <div className="flex items-start gap-4 md:gap-6 w-full max-w-2xl">
                    {/* Year Badge */}
                    <div className="flex-shrink-0">
                      <div 
                        className="w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center font-bold text-white text-lg md:text-xl shadow-md"
                        style={{ backgroundColor: color }}
                      >
                        {m.year}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl md:text-2xl font-bold font-[var(--font-orbitron)] mb-2" style={{ color: 'var(--vawe-navy)' }}>
                        {m.title}
                      </h3>
                      <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Connecting Line (except last item) */}
                  {i < 4 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-16 md:top-20 w-0.5 h-6 md:h-8 opacity-20" style={{ backgroundColor: color }} />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full px-6 mt-8 md:mt-12 pb-8 md:pb-12">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[var(--font-orbitron)]" style={{ background: 'var(--vawe-bg-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              Meet the Team
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              The talented individuals driving innovation and excellence
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
            {team.map((m, i) => {
              const colors = ['var(--vawe-coral)', 'var(--vawe-teal)', 'var(--vawe-navy)', 'var(--vawe-beige)'];
              const color = colors[i % colors.length];
              
              return (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div 
                    className="relative h-full overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-2"
                    style={{ 
                      clipPath: 'polygon(50% 0%, 100% 15%, 100% 85%, 50% 100%, 0% 85%, 0% 15%)',
                      borderColor: `${color}30`
                    }}
                  >
                    {/* Gradient Accent Bar - Top */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-2 md:h-3"
                      style={{ 
                        background: `linear-gradient(90deg, ${color}, ${colors[(i + 1) % colors.length]})`,
                        clipPath: 'polygon(50% 0%, 100% 15%, 0% 15%)'
                      }}
                    />
                    {/* Gradient Accent Bar - Bottom */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-2 md:h-3"
                      style={{ 
                        background: `linear-gradient(90deg, ${colors[(i + 1) % colors.length]}, ${color})`,
                        clipPath: 'polygon(0% 85%, 100% 85%, 50% 100%)'
                      }}
                    />
                    
                    {/* Content */}
                    <div className="p-2.5 md:p-4 lg:p-5">
                      {/* Image Container - Full Section */}
                      <div className="relative mb-2 md:mb-4">
                        <div className="relative mx-auto w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28">
                          {/* Outer Glow */}
                          <div 
                            className="absolute -inset-1 md:-inset-1.5 rounded-full opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-300"
                            style={{ backgroundColor: color }}
                          />
                          
                          {/* Image Wrapper */}
                          <div className="relative w-full h-full rounded-full overflow-hidden ring-2 md:ring-3 ring-white shadow-xl">
                            <Image
                              width={100}
                              height={100}
                              src={m.photo}
                              alt={`${m.name} photo`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.style.display = "none";
                                const fallback = e.currentTarget.parentElement?.querySelector(
                                  "[data-fallback]"
                                );
                                if (fallback) fallback.removeAttribute("hidden");
                              }}
                            />
                            <div
                              data-fallback
                              hidden
                              className="absolute inset-0 grid place-items-center bg-gradient-to-br from-neutral-100 to-neutral-200 text-neutral-700 font-bold text-sm md:text-xl"
                            >
                              {m.name.split(" ").map((n) => n[0]).join("")}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Name & Role */}
                      <div className="text-center">
                        <h4 className="text-sm md:text-base lg:text-xl font-bold font-[var(--font-orbitron)] mb-1 md:mb-2" style={{ color: 'var(--vawe-navy)' }}>
                          {m.name}
                        </h4>
                        <div className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium"
                          style={{ 
                            backgroundColor: `${color}15`,
                            color: color
                          }}
                        >
                          <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full" style={{ backgroundColor: color }} />
                          <span style={m.roleTextColor ? { color: m.roleTextColor } : undefined}>{m.role}</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay Effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                      style={{ 
                        backgroundColor: color,
                        clipPath: 'polygon(50% 0%, 100% 15%, 100% 85%, 50% 100%, 0% 85%, 0% 15%)'
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}



