
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ShoppingCart, Globe, Search, Megaphone, Server, Palette, ArrowRight } from "lucide-react";

function ServiceBlock({ title, copy, bullets = [], image, reverse = false }) {
  const [isMounted] = useState(true);
  
  return (
    <section className="relative py-8 md:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span className={`${reverse ? "-right-24" : "-left-24"} -top-16 absolute h-48 w-48 rounded-full bg-linear-to-br from-violet-400/25 to-fuchsia-400/25 blur-3xl`} />
        <span className={`${reverse ? "-left-24" : "-right-24"} -bottom-16 absolute h-40 w-40 rounded-full bg-linear-to-tr from-cyan-400/20 to-blue-400/20 blur-3xl`} />
      </div>
      <div className={`mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
        <motion.div 
          initial={false} 
          animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold gradient-text font-(--font-orbitron)">{title}</h3>
          <div className="mt-3 h-1 w-24 rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500" />
          <p className="mt-3 text-neutral-700">{copy}</p>
          {!!bullets.length && (
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-800 text-sm">
              {bullets.map((b) => (
                <li key={b} className="relative glass gradient-border rounded-xl px-3 py-2 flex items-center gap-2">
                  <span className="text-violet-600">◆</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
        <motion.div 
          initial={false} 
          animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
          className="group"
        >
          <div className="gradient-border rounded-3xl overflow-hidden">
            <div className="glass rounded-3xl">
              <div className="relative w-full h-64 md:h-80 overflow-hidden perspective-[1000px]">
                <image src={image.src} alt={image.alt || title} className="w-full h-full object-cover transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]" style={{ clipPath: "polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%)" }} loading="lazy" referrerPolicy="no-referrer" onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src = image.fallback || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop"; }} />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "12px 12px", opacity: 0.2, mixBlendMode: "overlay" }} />
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full px-3 py-1 text-sm font-semibold text-neutral-900 bg-linear-to-r from-amber-300 to-yellow-200 ring-2 ring-white/70 shadow-md">
                    {title}
                  </span>
                </div>
                <span className="absolute right-4 top-4 h-10 w-10 rotate-12 rounded-lg bg-linear-to-br from-violet-400/60 to-fuchsia-400/60 backdrop-blur-md" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Services() {
  const videos = [
    { title: "Static Website", localSrc: "/staticwebsite.mp4" },
    { title: "Semi Dynamic", localSrc: "/semidynamic.mp4" },
    { title: "Dynamic Website", localSrc: "/dynamicwebsite.mp4" },
    { title: "Customized Website", localSrc: "/customised.mp4" },
    { title: "E‑commerce Websites", localSrc: "/Ecommerce.mp4" },
    { title: "Domain based Websites", localSrc: "/texttiles.mp4" },
  ];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [activeService, setActiveService] = useState(null);
  const playerRef = useRef(null);
  const html5VideoRef = useRef(null);
  const [isMounted] = useState(true);

  const currentVideo = videos[currentIdx];
  
  const services = [
    {
      title: "E‑Commerce Development",
      img: "/E-commerce.jfif",
      icon: ShoppingCart,
      content: "Build powerful online stores with seamless shopping experiences. We create custom e-commerce platforms with secure payment gateways, inventory management, and mobile-responsive designs that drive sales and customer satisfaction.",
      color: 'var(--vawe-coral)',
    },
    {
      title: "Business & Corporate Websites",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
      icon: Globe,
      content: "Professional websites that represent your brand with excellence. We design and develop corporate websites with modern aesthetics, fast loading times, and intuitive navigation that builds trust and credibility.",
      color: 'var(--vawe-navy)',
    },
    {
      title: "SEO (Search Engine Optimization)",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      icon: Search,
      content: "Boost your online visibility and drive organic traffic. Our SEO strategies include keyword research, on-page optimization, technical SEO, and content marketing to help you rank higher on search engines.",
      color: 'var(--vawe-teal)',
    },
    {
      title: "Digital Marketing",
      img: "/digitalmarketingimg.png",
      icon: Megaphone,
      content: "Comprehensive digital marketing solutions to grow your business. We offer social media marketing, PPC campaigns, email marketing, and content strategies that engage audiences and convert leads into customers.",
      color: 'var(--vawe-coral)',
    },
    {
      title: "Web Hosting & Maintenance",
      img: "/webhostingimg.jpg",
      icon: Server,
      content: "Reliable hosting solutions with 24/7 monitoring and support. We provide secure hosting, regular backups, security updates, and maintenance services to keep your website running smoothly and securely.",
      color: 'var(--vawe-navy)',
    },
    {
      title: "UI/UX Design & Branding",
      img: "/uiux img.png",
      icon: Palette,
      content: "Create memorable brand experiences with stunning designs. Our UI/UX team crafts intuitive interfaces, engaging user experiences, and cohesive brand identities that resonate with your target audience.",
      color: 'var(--vawe-teal)',
    },
  ];

  function postToPlayer(func) {
    const iframe = playerRef.current;
    if (!iframe) return;
    iframe.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*"
    );
  }

  function handlePlay() {
    const v = videos[currentIdx];
    if (v.localSrc && html5VideoRef.current) {
      html5VideoRef.current.play();
      return;
    }
    postToPlayer("playVideo");
  }
  function handlePause() {
    const v = videos[currentIdx];
    if (v.localSrc && html5VideoRef.current) {
      html5VideoRef.current.pause();
      return;
    }
    postToPlayer("pauseVideo");
  }

  return (
    <div className="pt-28">
      

      {/* Intro / Overview */}
      <section className="w-full px-6 mt-[-10px] md:mt-4 pb-4 md:pb-6">
        <div className="container mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold font-(--font-orbitron)" style={{ background: 'var(--vawe-bg-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            Our Services
          </motion.h1>
          <div className="mt-2 md:mt-3 h-1 w-24 rounded-full" style={{ background: 'var(--vawe-bg-gradient)' }} />
          <p className="mt-3 md:mt-4 text-neutral-700 max-w-3xl">
            We&apos;re a full‑service digital agency helping businesses grow online — from website design and e‑commerce
            development to SEO, marketing, hosting, and branding. Whatever your digital need, we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Services - Card Design */}
      <section className="w-full px-6 mt-4 md:mt-8 pb-4 md:pb-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl">
          {services.map((s, idx) => {
            const isExpanded = activeService === idx;
            const IconComponent = s.icon;
            
            return (
              <motion.div
                key={s.title}
                initial={false}
                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: Math.min(idx * 0.05, 0.15), duration: 0.4 }}
                className="group relative"
              >
                <motion.div
                  animate={isExpanded ? { 
                    scale: 1.05,
                    y: -20,
                  } : { 
                    scale: 1,
                    y: 0,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`relative rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-lg border-2 transition-all duration-300 ${isExpanded ? 'z-50 shadow-2xl' : 'z-1'}`}
                  style={{ 
                    borderColor: isExpanded ? s.color : 'rgba(0, 0, 0, 0.1)',
                    borderStyle: 'solid'
                  }}
                >
                  {/* Card Content */}
                  <AnimatePresence mode="wait">
                    {!isExpanded ? (
                      <motion.div
                        key="content"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="p-6 md:p-8"
                      >
                        {/* Icon */}
                        <div className="mb-4">
                          <div 
                            className="inline-flex items-center justify-center w-14 h-14 rounded-xl"
                            style={{ backgroundColor: `${s.color}15` }}
                          >
                            <IconComponent 
                              size={28} 
                              style={{ color: s.color }}
                            />
                          </div>
                        </div>

                        {/* Heading */}
                        <h3 className="text-xl md:text-2xl font-bold font-[var(--font-orbitron)] mb-3" style={{ color: 'var(--vawe-navy)' }}>
                          {s.title}
                        </h3>

                        {/* Image below icon and heading */}
                        <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden mb-4 bg-neutral-100">
                          <Image
                            src={s.img}
                            alt={s.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            loading={idx < 3 ? "eager" : "lazy"}
                            priority={idx < 3}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Content */}
                        <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                          {s.content}
                        </p>

                        {/* Read More Button */}
                        <button
                          onClick={() => setActiveService(idx)}
                          className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                          style={{ color: s.color }}
                        >
                          Read more
                          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="relative"
                      >
                        {/* Expanded Image */}
                        <div className="relative w-full h-80 md:h-96 overflow-hidden">
                          <Image
                            src={s.img}
                            alt={s.title}
                            fill
                            className="object-cover"
                            loading="eager"
                            priority
                            sizes="(max-width: 768px) 100vw, 66vw"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          
                          {/* Close Button */}
                          <button
                            onClick={() => setActiveService(null)}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-neutral-700 hover:bg-white transition-colors duration-200 shadow-lg"
                            aria-label="Close"
                          >
                            <span className="text-2xl">×</span>
                          </button>

                          {/* Title Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <div className="flex items-center gap-3 mb-2">
                              <div 
                                className="inline-flex items-center justify-center w-10 h-10 rounded-lg"
                                style={{ backgroundColor: `${s.color}20` }}
                              >
                                <IconComponent 
                                  size={20} 
                                  style={{ color: s.color }}
                                />
                              </div>
                              <h3 className="text-xl md:text-2xl font-bold font-[var(--font-orbitron)] text-white">
                                {s.title}
                              </h3>
                            </div>
                            <p className="text-sm md:text-base text-white/90 leading-relaxed">
                              {s.content}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

              </motion.div>
            );
          })}
        </div>

        {/* Backdrop overlay when any card is expanded */}
        <AnimatePresence>
          {activeService !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setActiveService(null)}
            />
          )}
        </AnimatePresence>
      </section>

      {/* Services Video Showcase */}
      <section className="w-full px-6 mt-6 md:mt-8 pb-4 md:pb-6">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold font-(--font-orbitron)" style={{ background: 'var(--vawe-bg-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Service Demos</h3>
          <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Left: player and heading */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-neutral-900">{currentVideo.title}</h4>
            <div className="mt-3 aspect-video rounded-2xl overflow-hidden ring-1 ring-white/30 bg-black">
              {currentVideo.localSrc ? (
                <video
                  key={currentVideo.localSrc}
                  ref={html5VideoRef}
                  className="w-full h-full"
                  src={currentVideo.localSrc}
                  controls={false}
                  playsInline
                />
              ) : (
                <iframe
                  key={currentVideo.id}
                  ref={playerRef}
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${currentVideo.id}?enablejsapi=1&rel=0`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            <div className="mt-3 flex gap-2">
              <button onClick={handlePlay} className="px-4 py-2 rounded-full text-sm border border-black text-neutral-900 hover:bg-black hover:text-white transition">Play</button>
              <button onClick={handlePause} className="px-4 py-2 rounded-full text-sm border border-black text-neutral-900 hover:bg-black hover:text-white transition">Pause</button>
            </div>
          </div>

          {/* Right: list */}
          <div>
            <div className="border border-black/10 rounded-lg overflow-hidden divide-y divide-black/10">
              {videos.map((v, idx) => (
                <button
                  key={v.title}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-full flex items-center gap-3 p-3 text-left hover:bg-black/5 ${idx === currentIdx ? "bg-black/10" : ""}`}
                  aria-current={idx === currentIdx}
                >
                  {v.localSrc ? (
                    <video
                      className="h-14 w-24 object-cover rounded"
                      src={v.localSrc}
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <image
                      src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                      alt={`${v.title} thumbnail`}
                      className="h-14 w-24 object-cover rounded"
                      loading="lazy"
                    />
                  )}
                  <div className="flex-1">
                    <div className={`text-sm ${idx === currentIdx ? "font-semibold" : ""}`}>{v.title}</div>
                    <div className="text-xs text-neutral-600">{v.localSrc ? "Local • MP4" : "YouTube • Demo"}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-10">
        <div className="w-full px-6">
          <div className="container mx-auto">
            <div className="rounded-2xl px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4" style={{ backgroundColor: 'rgba(8,123,123,0.1)', border: '2px solid var(--vawe-teal)' }}>
              <p className="text-neutral-800 font-semibold">Ready to grow your business online? Let&apos;s discuss your project today.</p>
              <div className="flex gap-2">
                <a href="/contact" className="px-5 py-2 rounded-full font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition" style={{ backgroundColor: 'var(--vawe-teal)' }}>Get Free Consultation</a>
                <a href="/contact" className="px-5 py-2 rounded-full font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition" style={{ backgroundColor: 'var(--vawe-coral)' }}>Request a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Development Process - Modern Circular Design */}
      <section className="relative w-full px-6 mt-6 md:mt-8 pb-8 md:pb-12 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--vawe-teal) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[var(--vawe-teal)]/10 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[var(--vawe-coral)]/10 blur-3xl" />
        </div>

        <div className="relative container mx-auto max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 md:mb-12"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 md:px-5 md:py-2 rounded-full bg-gradient-to-r from-[var(--vawe-teal)]/10 to-[var(--vawe-coral)]/10 border border-[var(--vawe-teal)]/30 text-[var(--vawe-teal)] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6"
            >
              Our Workflow
            </motion.span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-[var(--font-orbitron)] mb-4 md:mb-6" style={{ color: 'var(--vawe-navy)' }}>
              Development Process
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed px-2">
              A streamlined journey from concept to deployment, ensuring excellence at every stage
            </p>
          </motion.div>

          {/* Process Steps - Horizontal Flow with Circular Progress */}
          <div className="relative">
            {/* Connecting Line - Desktop Only */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--vawe-coral)] via-[var(--vawe-teal)] via-[var(--vawe-navy)] via-[var(--vawe-beige)] to-[var(--vawe-coral)] opacity-20 rounded-full" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6 lg:gap-8 relative">
              {[
                { num: 1, title: "Discovery & Planning", desc: "Gather requirements, define scope, timelines, and success metrics.", color: 'var(--vawe-coral)', progress: 20 },
                { num: 2, title: "UX/UI Design", desc: "Wireframes, visual design system, and accessible component library.", color: 'var(--vawe-teal)', progress: 40 },
                { num: 3, title: "Development", desc: "Implement features with best practices, reviews, and CI checks.", color: 'var(--vawe-navy)', progress: 60 },
                { num: 4, title: "Testing & QA", desc: "Functional, performance, and security testing before sign‑off.", color: 'var(--vawe-beige)', progress: 80 },
                { num: 5, title: "Deployment & Support", desc: "Go‑live, monitoring, and ongoing enhancements.", color: 'var(--vawe-coral)', progress: 100 },
              ].map((item, idx) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative group flex flex-col h-full"
                >
                  {/* Circular Progress Indicator - Reduced Size */}
                  <div className="flex flex-col items-center mb-2 md:mb-4">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 md:mb-4">
                      {/* Outer Ring */}
                      <svg className="transform -rotate-90 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" viewBox="0 0 120 120">
                        <circle
                          cx="60"
                          cy="60"
                          r="54"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="8"
                          className="text-neutral-200"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="54"
                          fill="none"
                          stroke={item.color}
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 54}`}
                          strokeDashoffset={2 * Math.PI * 54 * (1 - item.progress / 100)}
                          opacity="0.6"
                        />
                      </svg>
                      
                      {/* Center Content - Reduced Size */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shadow-md transition-all duration-300"
                          style={{ 
                            backgroundColor: item.color,
                          }}
                        >
                          <span className="text-xs md:text-sm lg:text-xl font-bold text-white">{item.num}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Card - Equal Height */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-white/90 backdrop-blur-md rounded-xl md:rounded-2xl lg:rounded-3xl p-3 md:p-6 lg:p-8 border-2 transition-all duration-300 group-hover:shadow-lg flex flex-col flex-1"
                    style={{ 
                      borderColor: `${item.color}30`,
                      minHeight: '240px'
                    }}
                  >
                    {/* Corner Accent */}
                    <div 
                      className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                      style={{ backgroundColor: item.color }}
                    />

                    {/* Step Badge */}
                    <div className="mb-2 md:mb-3">
                      <span 
                        className="inline-block px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider"
                        style={{ 
                          color: item.color,
                          backgroundColor: `${item.color}15`
                        }}
                      >
                        Phase {item.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm md:text-base lg:text-lg xl:text-xl font-bold font-[var(--font-orbitron)] mb-2 md:mb-3" style={{ color: 'var(--vawe-navy)' }}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[10px] md:text-xs lg:text-sm xl:text-base text-neutral-600 leading-relaxed mb-3 md:mb-4 flex-grow">
                      {item.desc}
                    </p>

                    {/* Progress Indicator */}
                    <div className="mt-auto pt-3 md:pt-4 border-t border-neutral-200">
                      <div className="flex items-center justify-between mb-1.5 md:mb-2">
                        <span className="text-[9px] md:text-[10px] lg:text-xs font-semibold text-neutral-500 uppercase">Progress</span>
                        <span className="text-[10px] md:text-xs lg:text-sm font-bold" style={{ color: item.color }}>{item.progress}%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{ 
                            width: `${item.progress}%`,
                            backgroundColor: item.color,
                            opacity: 0.7
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



