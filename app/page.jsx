// // "use client";
// // import { useEffect, useRef, useState, useMemo } from "react";
// // import { AnimatePresence, motion } from "framer-motion";
// // import Image from "next/image";
// // import ServiceCard from "./components/ServiceCard";
// // import ScratchDeck from "./components/ScratchDeck";
// // import {
// //   ArrowRight,
// //   Rocket,
// //   Sparkles,
// //   Shield,
// //   Code2,
// //   Megaphone,
// // } from "lucide-react";
// // import Showcase from "./components/Showcase";

// // const HERO_IMAGES = [
// //   {
// //     src: "/heroimg1.jpg",
// //     title: "Successful Launch",
// //     meta: "March 20, 2024",
// //   },
// //   {
// //     src: "/heroimg2.jpg",
// //     title: "Omnichannel Experience",
// //     meta: "Deployed in 6 weeks",
// //   },
// //   {
// //     src: "/codingimg.jpeg",
// //     title: "AI-Assisted Delivery",
// //     meta: "Automation first",
// //   },
// // ];

// // const WORDS = [
// //   "Web Apps ",
// //   "Mobile Apps ",
// //   "Cloud Platforms ",
// //   "AI Solutions ",
// //   "E-Commerce ",
// // ];

// // const PROVIDES = [
// //     {
// //       title: "Software Development",
// //       subtitle:
// //         "Custom applications for scale and performance. We architect robust backends,  clean APIs, and deliver reliable frontends. Our process emphasizes code quality, reviews, and automated testing for long-term maintainability.",
// //       img: "/softwareimg.jpg",
// //     },
// //     {
// //       title: "Website Designing",
// //       subtitle:
// //         "Eye-catching designs tailored to your business needs. We design responsive layouts, readable typography, and clear information hierarchy. Every page is optimized for accessibility and conversion.",
// //       img: "/heroimg1.jpg",
// //     },
// //     {
// //       title: "Digital Marketing",
// //       subtitle:
// //         "Grow your reach with full-funnel campaigns and analytics. We combine SEO content, paid media, and email automation to acquire, engage, and retain customers across channels.",
// //       img: "/digitalmarketingimg.png",
// //     },
// //     {
// //       title: "SEO Optimization",
// //       subtitle:
// //         "Technical SEO and content strategies that rank. From site speed and schema to content clusters and internal links, we build sustainable organic growth.",
// //       img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
// //     },
// //     {
// //       title: "UI/UX Designing",
// //       subtitle:
// //         "Human-centered interfaces with elegant interactions. We prototype early, validate with users, and ship delightful micro-interactions that communicate state and reduce friction.",
// //       img: "/uiux img.png",
// //     },
// //     {
// //       title: "Website Hosting ",
// //       subtitle:
// //         "Reliable hosting, backups, security, and updates. We monitor uptime, patch vulnerabilities, and keep content fresh so your site stays fast and secure.",
// //       img: "/webhostingimg.jpg",
// //     },
// //   ];

// // export default function Home() {
// //   // Clone last and first cards for seamless loop
// //   const extendedProvides = useMemo(() => [
// //     PROVIDES[PROVIDES.length - 1],
// //     ...PROVIDES,
// //     PROVIDES[0],
// //   ], []);

// //   const [provideIdx, setProvideIdx] = useState(1);
// //   const [isTransitioning, setIsTransitioning] = useState(false);
// //   const [isMounted] = useState(true);
// //   const containerRef = useRef(null);

// //   const [charIndex, setCharIndex] = useState(0);
// //   const [typed, setTyped] = useState("");
// //   const [wordIndex, setWordIndex] = useState(0);
// //   const [isDeleting, setIsDeleting] = useState(false);
// //   const heroStats = [
// //     { value: "50+", label: "Projects Completed" },
// //     { value: "20+", label: "Expert Developers" },
// //     { value: "10", label: "Years of Experience" },
// //   ];
// //   // Ensure component is mounted and visible
// //   useEffect(() => {
// //     // Small delay to ensure transforms are applied correctly
// //     const timer = setTimeout(() => {
// //       setIsTransitioning(true);
// //     }, 50);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   // Looping transition fix
// //   useEffect(() => {
// //     if (!isMounted) return;
    
// //     const handleTransitionEnd = () => {
// //       if (provideIdx === extendedProvides.length - 1) {
// //         setIsTransitioning(false);
// //         // Use setTimeout to ensure smooth reset
// //         setTimeout(() => {
// //           setProvideIdx(1);
// //           setIsTransitioning(true);
// //         }, 10);
// //       } else if (provideIdx === 0) {
// //         setIsTransitioning(false);
// //         setTimeout(() => {
// //           setProvideIdx(extendedProvides.length - 2);
// //           setIsTransitioning(true);
// //         }, 10);
// //       }
// //     };

// //     const container = containerRef.current;
// //     if (!container) return;
    
// //     container.addEventListener("transitionend", handleTransitionEnd);
// //     return () =>
// //       container.removeEventListener("transitionend", handleTransitionEnd);
// //   }, [provideIdx, isMounted, extendedProvides.length]);

// //   // Ensure transitions are always enabled after initial mount
// //   useEffect(() => {
// //     if (!isMounted) return;
// //     if (!isTransitioning) {
// //       const t = setTimeout(() => {
// //         setIsTransitioning(true);
// //       }, 50);
// //       return () => clearTimeout(t);
// //     }
// //   }, [isTransitioning, isMounted]);

// //   // Auto-play every 5s (only after mounted)
// //   useEffect(() => {
// //     if (!isMounted) return;
// //     const interval = setInterval(() => {
// //       setProvideIdx((prev) => {
// //         // Prevent going beyond bounds
// //         if (prev >= extendedProvides.length - 1) {
// //           return 1; // Reset to first real item
// //         }
// //         return prev + 1;
// //       });
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, [isMounted, extendedProvides.length]);

// //   useEffect(() => {
// //     if (HERO_IMAGES.length <= 1) return undefined;
// //     const interval = setInterval(
// //       () => setHeroIdx((prev) => (prev + 1) % HERO_IMAGES.length),
// //       6000
// //     );
// //     return () => clearInterval(interval);
// //   }, []);

// //   // Typing animation

// //   // useEffect(() => {
// //   //   const current = WORDS[wordIndex];
// //   //   let delay = isDeleting ? 70 : 110;
// //   //   if (!isDeleting && charIndex === current.length) delay = 1200;

// //   //   const t = setTimeout(() => {
// //   //     if (!isDeleting) {
// //   //       if (charIndex < current.length) {
// //   //         setTyped(current.slice(0, charIndex + 1));
// //   //         setCharIndex(charIndex + 1);
// //   //       } else {
// //   //         setIsDeleting(true);
// //   //       }
// //   //     } else {
// //   //       if (charIndex > 0) {
// //   //         setTyped(current.slice(0, charIndex - 1));
// //   //         setCharIndex(charIndex - 1);
// //   //       } else {
// //   //         setIsDeleting(false);
// //   //         setWordIndex((wordIndex + 1) % WORDS.length);
// //   //       }
// //   //     }
// //   //   }, delay);

// //   //   return () => clearTimeout(t);
// //   //   // eslint-disable-next-line react-hooks/exhaustive-deps
// //   // }, [charIndex, isDeleting, wordIndex]);
// //   useEffect(() => {
// //     const current = WORDS[wordIndex];
// //     let delay = isDeleting ? 70 : 110;
// //     if (!isDeleting && charIndex === current.length) delay = 1200;

// //     const t = setTimeout(() => {
// //       if (!isDeleting) {
// //         if (charIndex < current.length) {
// //           setTyped(current.slice(0, charIndex + 1));
// //           setCharIndex(charIndex + 1);
// //         } else {
// //           setIsDeleting(true);
// //         }
// //       } else {
// //         if (charIndex > 0) {
// //           setTyped(current.slice(0, charIndex - 1));
// //           setCharIndex(charIndex - 1);
// //         } else {
// //           setIsDeleting(false);
// //           setWordIndex((wordIndex + 1) % WORDS.length);
// //         }
// //       }
// //     }, delay);

// //     return () => clearTimeout(t);
// //   }, [charIndex, isDeleting, wordIndex]);

// //   return (
// //     <div className="relative">
// //       {/* Hero Section */}
// //       <section className="relative overflow-hidden bg-[#000b1d] text-white">
// //         <div className="pointer-events-none absolute inset-0">
// //           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(101,239,242,0.16),transparent_58%)]" />
// //           <div
// //             className="absolute inset-0 opacity-45"
// //             style={{
// //               backgroundImage:
// //                 "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 120px)",
// //             }}
// //           />
// //           <div className="absolute -top-36 -left-24 h-[360px] w-[360px] rounded-full bg-[var(--vawe-coral)]/18 blur-3xl" />
// //           <div className="absolute bottom-[-220px] right-[-130px] h-[420px] w-[420px] rounded-full bg-[var(--vawe-teal)]/18 blur-[120px]" />
// //         </div>

// //         <div className="relative container mx-auto px-4 sm:px-6 pt-16 pb-10 md:py-28">
// //           <div className="grid items-center gap-10 lg:gap-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
// //             <div className="space-y-6 sm:space-y-8">
// //               <motion.span
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true, amount: 0.5 }}
// //                 transition={{ duration: 0.4 }}
// //                 className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[12px] uppercase tracking-[0.32em] text-white/70 mt-3"
// //               >
// //                 <span className="inline-block h-2 w-2 rounded-full bg-[var(--vawe-teal)] animate-ping" />
// //                 Vawe Global Tech
// //               </motion.span>

// //               <motion.h1
// //                 initial={{ opacity: 0, y: 28 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true, amount: 0.45 }}
// //                 transition={{ delay: 0.02, duration: 0.5 }}
// //                 className="font-(--font-orbitron) text-[clamp(32px,6vw,48px)] md:text-[clamp(32px,4.5vw,48px)] lg:text-[clamp(36px,4vw,50px)] leading-[1.08] font-extrabold"
// //               >
// //                 Building with digital Brilliance{" "}
// //                 <span className="text-[var(--vawe-teal)]">AI velocity</span>{" "}
// //                 for{" "}<br />
// //                 <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[var(--vawe-coral)]">
// //                   {typed}
// //                   <span className="inline-block h-[1.15em] w-[8px] translate-y-[4px] bg-white/80 align-middle animate-pulse" />
// //                 </span>
// //               </motion.h1>

// //               <motion.p
// //                 initial={{ opacity: 0, y: 24 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true, amount: 0.45 }}
// //                 transition={{ delay: 0.05, duration: 0.5 }}
// //                 className="max-w-xl text-sm sm:text-lg text-white/75 leading-relaxed"
// //               >
// //                 We combine design systems, autonomous infrastructure, and product
// //                 telemetry to create experiences that learn and adapt. Launch faster,
// //                 stay secure, and keep customers coming back.
// //               </motion.p>

// //               <motion.div
// //                 initial={{ opacity: 0, y: 24 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true, amount: 0.45 }}
// //                 transition={{ delay: 0.08, duration: 0.5 }}
// //                 className="hidden md:flex flex-wrap items-center gap-3 sm:gap-4"
// //               >
// //                 <a
// //                   href="/contact"
// //                   className="group inline-flex items-center gap-3 rounded-full bg-[var(--vawe-teal)] px-6 py-3 text-sm sm:text-base font-semibold text-black shadow-[0_18px_48px_rgba(101,239,242,0.32)] transition duration-300 hover:shadow-[0_20px_56px_rgba(101,239,242,0.4)]"
// //                 >
// //                   Launch a discovery sprint
// //                   <ArrowRight
// //                     size={20}
// //                     className="transition-transform duration-300 group-hover:translate-x-1"
// //                   />
// //                 </a>
// //                 <a
// //                   href="#services"
// //                   className="inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-sm sm:text-base font-semibold text-white/80 transition duration-300 hover:bg-white/10 hover:text-white"
// //                 >
// //                   Explore services
// //                 </a>
// //               </motion.div>

// //               <motion.div
// //                 initial={{ opacity: 0, y: 28 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true, amount: 0.45 }}
// //                 transition={{ delay: 0.1, duration: 0.5 }}
// //                 className="hidden w-full grid-cols-3 gap-6 pt-4 sm:pt-6 md:grid"
// //               >
// //                 {heroStats.map(({ value, label }) => (
// //                   <div key={label}>
// //                     <div className="text-3xl font-bold text-white sm:text-[36px]">
// //                       {value}
// //                     </div>
// //                     <div className="mt-1 text-[11px] uppercase tracking-[0.32em] text-white/55">
// //                       {label}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </motion.div>
// //             </div>

// //             <div className="relative mt-3 sm:mt-4 flex justify-center md:mt-0">
// //               <div className="absolute -inset-6 hidden rounded-[48px] bg-white/5 blur-3xl md:block" />

// //               <div className="relative w-full max-w-lg sm:max-w-xl">
// //                 <div className="pointer-events-none absolute inset-0 rounded-[44px] border border-white/10 bg-white/5 backdrop-blur"></div>
// //                 <div className="relative h-[320px] sm:h-[380px] md:h-[460px] overflow-hidden rounded-[44px]">
// //                   <div className="absolute inset-x-6 top-6 h-[180px] rounded-[32px] border border-white/10 bg-white/10 opacity-35 blur-xl"></div>
// //                   <div className="absolute inset-x-10 bottom-6 h-[180px] rounded-[32px] border border-white/10 bg-white/10 opacity-25 blur-xl"></div>

// //                   <AnimatePresence mode="wait">
// //                     <motion.div
// //                       key={currentHero.src}
// //                       initial={{ y: 80, opacity: 0 }}
// //                       animate={{ y: 0, opacity: 1 }}
// //                       exit={{ y: -80, opacity: 0 }}
// //                       transition={{ duration: 0.5, ease: "easeInOut" }}
// //                       className="relative h-full overflow-hidden rounded-[44px] border border-white/10 bg-black/40 shadow-[0_40px_90px_rgba(0,0,0,0.55)]"
// //                     >
// //                       <Image
// //                         src={currentHero.src}
// //                         alt={currentHero.title}
// //                         fill
// //                         className="object-cover"
// //                         priority
// //                         loading="eager"
// //                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
// //                       />
// //                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
// //                       <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 rounded-3xl border border-white/15 bg-white/12 px-6 py-4 backdrop-blur">
// //                         <div>
// //                           <div className="text-[11px] uppercase tracking-[0.28em] text-white/60">
// //                             Case study
// //                           </div>
// //                           <div className="mt-1 text-lg font-semibold text-white">
// //                             {currentHero.title}
// //                           </div>
// //                           <div className="text-xs text-white/60">
// //                             {currentHero.meta}
// //                           </div>
// //                         </div>
// //                         <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-[var(--vawe-teal)]">
// //                           <Sparkles size={20} />
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   </AnimatePresence>
// //                 </div>

// //                 <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 flex -translate-x-1/2 gap-2">
// //                   {HERO_IMAGES.map((item, idx) => (
// //                     <button
// //                       key={item.src}
// //                       onClick={() => setHeroIdx(idx)}
// //                       className={`h-2.5 rounded-full transition-all duration-300 ${
// //                         heroIdx === idx
// //                           ? "w-8 bg-[var(--vawe-teal)]"
// //                           : "w-4 bg-white/25 hover:bg-white/45"
// //                       }`}
// //                       aria-label={`Show hero showcase ${idx + 1}`}
// //                     />
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>

// //             <motion.div
// //               initial={{ opacity: 0, y: 18 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true, amount: 0.45 }}
// //                 transition={{ delay: 0.1, duration: 0.5 }}
// //               className="mt-6 space-y-4 md:hidden"
// //             >
// //               <div className="flex items-center justify-center gap-3">
// //                 <a
// //                   href="/contact"
// //                   className="inline-flex items-center gap-2 rounded-full bg-[var(--vawe-teal)] px-4 py-2 text-xs font-semibold text-black shadow-[0_12px_30px_rgba(101,239,242,0.28)] transition duration-300 hover:shadow-[0_16px_36px_rgba(101,239,242,0.34)]"
// //                 >
// //                   Launch a sprint
// //                   <ArrowRight size={16} />
// //                 </a>
// //                 <a
// //                   href="#services"
// //                   className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white/80 transition duration-300 hover:bg-white/10 hover:text-white"
// //                 >
// //                   Explore services
// //                 </a>
// //               </div>

// //               <div className="grid grid-cols-3 items-start gap-3 text-center">
// //                 {heroStats.map(({ value, label }) => (
// //                   <div key={label}>
// //                     <div className="text-lg font-bold text-white">{value}</div>
// //                     <div className="mt-1 text-[9px] uppercase tracking-[0.26em] text-white/60">
// //                       {label}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Services Slider */}
// //       <section id="services" className="relative z-10 py-4 md:py-0 bg-[#fef9f5]">
// //         <div className="w-full">
// //           {/* Fixed Title */}
// //           <div className="text-center py-4 md:py-6">
// //             <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-(--font-orbitron) text-[var(--vawe-navy)] mb-2 md:mb-3">
// //               What We Do
// //             </h2>
// //           </div>
          
// //           {/* Sliding Content Container */}
// //           <div
// //             ref={containerRef}
// //             className="relative w-full min-h-[550px] md:h-[55vh] overflow-hidden shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.1)]"
// //           >
// //             {extendedProvides.map((s, i) => {
// //               const isVisible = i === provideIdx;
// //               const translateX = (i - provideIdx) * 100;
// //               return (
// //               <div
// //                 key={`${s.title}-${i}`}
// //                 className={`absolute inset-0 ${
// //                   isMounted && isTransitioning
// //                     ? "transition-transform duration-500 ease-in-out  "
// //                     : ""
// //                 }`}
// //                 style={{
// //                   transform: `translateX(${translateX}%)`,
// //                   // marginTop: '-250px',
// //                   willChange: isMounted ? 'transform' : 'auto',
// //                   // marginBottom: '-200px',
// //                 }}
// //               >
// //                 <div className="absolute inset-0 flex flex-col items-center justify-center py-4 md:py-8">
// //                   <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 items-center flex-1">
// //                     {/* Image - shown first on mobile, right on desktop */}
// //                     <div className="order-1 md:order-2 md:col-span-3 w-full">
// //                       <div
// //                         className="relative w-full h-[220px] sm:h-[280px] md:h-[45vh] rounded-xl overflow-hidden border border-black/10 shadow-2xl mx-auto max-w-md md:max-w-none"
// //                         style={{
// //                           boxShadow:
// //                             "0 20px 50px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.1)",
// //                         }}
// //                       >
// //                         <Image
// //                           src={s.img}
// //                           alt={s.title}
// //                           fill
// //                           className="object-cover"
// //                           loading={provideIdx === i ? "eager" : "lazy"}
// //                           priority={provideIdx === i && i <= 2}
// //                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
// //                         />
// //                       </div>
// //                     </div>

// //                     {/* Left: content */}
// //                     <div className="order-2 md:order-1 text-neutral-900 md:col-span-2">
// //                       <div className="mt-2 md:mt-4">
// //                         <span
// //                           className="inline-block px-4 py-2 sm:px-6 sm:py-3 text-lg sm:text-xl md:text-2xl font-bold rounded-lg shadow-lg"
// //                           style={{
// //                             background:
// //                               "linear-gradient(135deg, #f56c53, #ff8c6e)",
// //                             color: "black",
// //                           }}
// //                         >
// //                           {s.title}
// //                         </span>
// //                       </div>
// //                       <p
// //                         className="mt-2 md:mt-3 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-black"
// //                       >
// //                         {s.subtitle}
// //                       </p>

// //                       <div className="mt-3 md:mt-4 mb-8 md:mb-12 flex gap-3">
// //                         <button
// //                           onClick={() => setProvideIdx((prev) => prev - 1)}
// //                           className="px-4 py-2 rounded-full border transition"
// //                           style={{
// //                             borderColor: "var(--vawe-coral)",
// //                             color: "var(--vawe-coral)",
// //                           }}
// //                           onMouseEnter={(e) => {
// //                             e.target.style.backgroundColor = "var(--vawe-coral)";
// //                             e.target.style.color = "white";
// //                           }}
// //                           onMouseLeave={(e) => {
// //                             e.target.style.backgroundColor = "transparent";
// //                             e.target.style.color = "var(--vawe-coral)";
// //                           }}
// //                         >
// //                           Prev
// //                         </button>

// //                         <button
// //                           onClick={() => setProvideIdx((prev) => prev + 1)}
// //                           className="px-4 py-2 rounded-full border border-[var(--vawe-teal)] text-[var(--vawe-teal)] hover:bg-[var(--vawe-teal)] hover:text-white transition"
// //                         >
// //                           Next
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //               );
// //             })}

// //             {/* Pagination dots */}
// //             <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
// //               {provides.map((_, i) => {
// //                 const isActive =
// //                   i + 1 === provideIdx ||
// //                   (provideIdx === provides.length + 1 && i === 0);
// //                 return (
// //                   <button
// //                     key={i}
// //                     onClick={() => setProvideIdx(i + 1)}
// //                     className={`h-2.5 w-2.5 rounded-full transition-all ${
// //                       isActive
// //                         ? "bg-[var(--vawe-navy)]"
// //                         : "bg-[var(--vawe-navy)]/40"
// //                     }`}
// //                   />
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="relative py-8 md:py-10">
// //         <div className="container mx-auto px-6">
// //           <div
// //             className="rounded-2xl px-6 py-6 md:px-8 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-white"
// //             style={{ background: "var(--vawe-bg-gradient)" }}
// //           >
// //             <div>
// //               <h3 className="text-2xl md:text-3xl font-bold font-(--font-orbitron)">
// //                 Ready to launch?
// //               </h3>
// //               <p className="text-white/90">
// //                 Partner with VAWE GlobalTech to accelerate your digital future.
// //               </p>
// //             </div>
// //             <a
// //               href="/contact"
// //               className="px-6 py-3 rounded-full font-semibold border border-white text-white hover:bg-white hover:text-black transition"
// //             >
// //               Start a Project
// //             </a>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Showcase */}
// //       <Showcase />

// //       {/* Why Choose Us */}
// //       <section className="py-8 md:py-10">
// //         <div className="w-full px-6">
// //           <div className="container mx-auto">
// //             <h3 className="text-2xl md:text-3xl font-bold font-(--font-orbitron)" style={{ background: 'var(--vawe-bg-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Why Choose VAWE GlobalTech</h3>
// //             <div className="mt-2 md:mt-3 h-1 w-24 rounded-full" style={{ background: 'var(--vawe-bg-gradient)' }} />
// //             <div className="relative mt-4 md:mt-6 overflow-hidden py-2">
// //             {/* single track with duplicated items for seamless loop (no gap) */}
// //             <div className="vawe-marquee flex whitespace-nowrap will-change-transform">
// //               {[...[
// //                 "All‑in‑one digital solutions",
// //                 "Expert team with years of experience",
// //                 "Fast turnaround",
// //                 "Dedicated support",
// //               ], ...[
// //                 "All‑in‑one digital solutions",
// //                 "Expert team with years of experience",
// //                 "Fast turnaround",
// //                 "Dedicated support",
// //               ], ...[
// //                 "All‑in‑one digital solutions",
// //                 "Expert team with years of experience",
// //                 "Fast turnaround",
// //                 "Dedicated support",
// //               ]].map((point, idx) => {
// //                 const colors = ['var(--vawe-coral)', 'var(--vawe-teal)', 'var(--vawe-navy)', 'var(--vawe-beige)'];
// //                 const colorIndex = idx % 4;
// //                 return (
// //                   <div key={point+idx} className="relative glass gradient-border rounded-xl px-4 py-3 pl-6 text-sm text-neutral-800 shrink-0 mr-4" style={{ borderColor: colors[colorIndex] }}>
// //                     <span className="absolute left-3 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full" style={{ backgroundColor: colors[colorIndex] }} />
// //                     {point}
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //           <style jsx global>{`
// //             @keyframes vawe-marquee { 
// //               from { transform: translateX(0); } 
// //               to { transform: translateX(-50%); } 
// //             }
// //             .vawe-marquee { 
// //               animation: vawe-marquee 20s linear infinite;
// //               will-change: transform;
// //             }
// //             .vawe-marquee:hover {
// //               animation-play-state: paused;
// //             }
// //           `}</style>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// "use client";
// import { useEffect, useRef, useState, useMemo } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
// import { ArrowRight, Sparkles } from "lucide-react";
// import Showcase from "./components/Showcase";

// const HERO_IMAGES = [
//   { src: "/heroimg1.jpg", title: "Successful Launch", meta: "March 20, 2024" },
//   { src: "/heroimg2.jpg", title: "Omnichannel Experience", meta: "Deployed in 6 weeks" },
//   { src: "/codingimg.jpeg", title: "AI-Assisted Delivery", meta: "Automation first" },
// ];

// const WORDS = ["Web Apps ", "Mobile Apps ", "Cloud Platforms ", "AI Solutions ", "E-Commerce "];

// const PROVIDES = [
//   {
//     title: "Software Development",
//     subtitle: "Custom applications for scale and performance. We architect robust backends, clean APIs, and deliver reliable frontends.",
//     img: "/softwareimg.jpg",
//   },
//   { title: "Website Designing", subtitle: "Eye-catching designs tailored to your business needs.", img: "/heroimg1.jpg" },
//   { title: "Digital Marketing", subtitle: "Grow your reach with full-funnel campaigns and analytics.", img: "/digitalmarketingimg.png" },
//   { title: "SEO Optimization", subtitle: "Technical SEO and content strategies that rank.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop" },
//   { title: "UI/UX Designing", subtitle: "Human-centered interfaces with elegant interactions.", img: "/uiux img.png" },
//   { title: "Website Hosting", subtitle: "Reliable hosting, backups, security, and updates.", img: "/webhostingimg.jpg" },
// ];

// const WHY_CHOOSE_US = [
//   "All‑in‑one digital solutions",
//   "Expert team with years of experience",
//   "Fast turnaround",
//   "Dedicated support",
// ];

// export default function Home() {
//   // Services slider
//   const extendedProvides = useMemo(() => [PROVIDES[PROVIDES.length - 1], ...PROVIDES, PROVIDES[0]], []);
//   const [provideIdx, setProvideIdx] = useState(1);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [isMounted] = useState(true);
//   const containerRef = useRef(null);

//   // Typing animation
//   const [charIndex, setCharIndex] = useState(0);
//   const [typed, setTyped] = useState("");
//   const [wordIndex, setWordIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   // Hero carousel
//   const [heroIdx, setHeroIdx] = useState(0);
//   const currentHero = HERO_IMAGES[heroIdx];

//   // Hero stats
//   const heroStats = [
//     { value: "50+", label: "Projects Completed" },
//     { value: "20+", label: "Expert Developers" },
//     { value: "10", label: "Years of Experience" },
//   ];

//   // Typing animation effect
//   useEffect(() => {
//     const current = WORDS[wordIndex];
//     let delay = isDeleting ? 70 : 110;
//     if (!isDeleting && charIndex === current.length) delay = 1200;

//     const t = setTimeout(() => {
//       if (!isDeleting) {
//         if (charIndex < current.length) {
//           setTyped(current.slice(0, charIndex + 1));
//           setCharIndex(charIndex + 1);
//         } else setIsDeleting(true);
//       } else {
//         if (charIndex > 0) {
//           setTyped(current.slice(0, charIndex - 1));
//           setCharIndex(charIndex - 1);
//         } else {
//           setIsDeleting(false);
//           setWordIndex((wordIndex + 1) % WORDS.length);
//         }
//       }
//     }, delay);

//     return () => clearTimeout(t);
//   }, [charIndex, isDeleting, wordIndex]);

//   // Hero autoplay
//   useEffect(() => {
//     if (HERO_IMAGES.length <= 1) return;
//     const interval = setInterval(() => setHeroIdx((prev) => (prev + 1) % HERO_IMAGES.length), 6000);
//     return () => clearInterval(interval);
//   }, []);

//   // Slider autoplay
//   useEffect(() => {
//     if (!isMounted) return;
//     const interval = setInterval(() => setProvideIdx((prev) => (prev >= extendedProvides.length - 1 ? 1 : prev + 1)), 5000);
//     return () => clearInterval(interval);
//   }, [isMounted, extendedProvides.length]);

//   // Handle transitions reset
//   useEffect(() => {
//     if (!isMounted) return;
//     const handleTransitionEnd = () => {
//       if (provideIdx === extendedProvides.length - 1) {
//         setIsTransitioning(false);
//         setTimeout(() => {
//           setProvideIdx(1);
//           setIsTransitioning(true);
//         }, 10);
//       } else if (provideIdx === 0) {
//         setIsTransitioning(false);
//         setTimeout(() => {
//           setProvideIdx(extendedProvides.length - 2);
//           setIsTransitioning(true);
//         }, 10);
//       }
//     };

//     const container = containerRef.current;
//     if (!container) return;
//     container.addEventListener("transitionend", handleTransitionEnd);
//     return () => container.removeEventListener("transitionend", handleTransitionEnd);
//   }, [provideIdx, extendedProvides.length, isMounted]);

//   // Initial transition enable
//   useEffect(() => {
//     const timer = setTimeout(() => setIsTransitioning(true), 50);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="relative">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-[#000b1d] text-white">
//         <div className="container mx-auto px-4 sm:px-6 pt-16 pb-10 md:py-28 relative">
//           <div className="grid items-center gap-10 lg:gap-16 md:grid-cols-[1.1fr_0.9fr]">
//             {/* Left text */}
//             <div className="space-y-6 sm:space-y-8">
//               <motion.h1 className="text-4xl font-extrabold">
//                 Building with digital Brilliance <span className="text-teal-400">AI velocity</span> for
//                 <br />
//                 <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 text-coral-400">
//                   {typed}
//                   <span className="inline-block h-[1.15em] w-8 bg-white animate-pulse" />
//                 </span>
//               </motion.h1>

//               <motion.div className="hidden md:grid grid-cols-3 gap-6 pt-4 sm:pt-6">
//                 {heroStats.map(({ value, label }) => (
//                   <div key={label}>
//                     <div className="text-3xl font-bold">{value}</div>
//                     <div className="mt-1 text-sm text-white/60">{label}</div>
//                   </div>
//                 ))}
//               </motion.div>
//             </div>

//             {/* Right hero image */}
//             <div className="relative mt-3 sm:mt-4 flex justify-center md:mt-0">
//               <div className="relative w-full max-w-lg sm:max-w-xl h-[460px] overflow-hidden rounded-[44px]">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={currentHero.src}
//                     initial={{ y: 80, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     exit={{ y: -80, opacity: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="relative h-full w-full"
//                   >
//                     <Image src={currentHero.src} alt={currentHero.title} fill className="object-cover" />
//                     <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-white/12 p-4 rounded-3xl">
//                       <div>
//                         <div className="text-xs uppercase text-white/60">Case study</div>
//                         <div className="mt-1 font-semibold">{currentHero.title}</div>
//                         <div className="text-xs text-white/60">{currentHero.meta}</div>
//                       </div>
//                       <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-teal-400">
//                         <Sparkles size={20} />
//                       </div>
//                     </div>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//               {/* Dots */}
//               <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 gap-2">
//                 {HERO_IMAGES.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setHeroIdx(idx)}
//                     className={`h-2.5 rounded-full transition-all duration-300 ${
//                       heroIdx === idx ? "w-8 bg-teal-400" : "w-4 bg-white/25"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Slider */}
//       <section id="services" className="py-4 md:py-0 bg-[#fef9f5]">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-6">What We Do</h2>
//           <div ref={containerRef} className="relative w-full min-h-[550px] overflow-hidden">
//             {extendedProvides.map((s, i) => {
//               const translateX = (i - provideIdx) * 100;
//               return (
//                 <div
//                   key={`${s.title}-${i}`}
//                   className={`absolute inset-0 transition-transform duration-500 ease-in-out`}
//                   style={{ transform: `translateX(${translateX}%)` }}
//                 >
//                   <div className="flex flex-col md:grid md:grid-cols-5 items-center gap-4 h-full">
//                     <div className="md:col-span-3 w-full h-[45vh] relative">
//                       <Image src={s.img} alt={s.title} fill className="object-cover rounded-xl" />
//                     </div>
//                     <div className="md:col-span-2">
//                       <h3 className="text-2xl font-bold">{s.title}</h3>
//                       <p className="mt-2">{s.subtitle}</p>
//                       <div className="flex gap-3 mt-4">
//                         <button onClick={() => setProvideIdx(provideIdx - 1)} className="px-4 py-2 border rounded-full">
//                           Prev
//                         </button>
//                         <button onClick={() => setProvideIdx(provideIdx + 1)} className="px-4 py-2 border rounded-full">
//                           Next
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative py-8 md:py-10 bg-gradient-to-r from-teal-400 via-coral-400 to-navy-400 text-white">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
//           <div>
//             <h3 className="text-2xl md:text-3xl font-bold">Ready to launch?</h3>
//             <p>Partner with VAWE GlobalTech to accelerate your digital future.</p>
//           </div>
//           <a href="/contact" className="px-6 py-3 rounded-full font-semibold border border-white text-white hover:bg-white hover:text-black transition">
//             Start a Project
//           </a>
//         </div>
//       </section>

//       {/* Showcase */}
//       <Showcase />

//       {/* Why Choose Us */}
//       <section className="py-8 md:py-10 bg-white">
//         <div className="container mx-auto px-6">
//           <h3 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-[var(--vawe-navy)]">
//             Why Choose VAWE GlobalTech
//           </h3>
//           <div className="mt-4 overflow-hidden relative">
//             <div className="flex animate-marquee whitespace-nowrap gap-4">
//               {[...WHY_CHOOSE_US, ...WHY_CHOOSE_US].map((item, idx) => {
//                 const colors = ["#f56c53", "#65eff2", "#001f3f", "#f5f5dc"];
//                 const color = colors[idx % colors.length];
//                 return (
//                   <div key={idx} className="relative px-6 py-3 rounded-xl border" style={{ borderColor: color }}>
//                     <span className="absolute left-2 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
//                     {item}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//         <style jsx>{`
//           @keyframes marquee {
//             from { transform: translateX(0); }
//             to { transform: translateX(-50%); }
//           }
//           .animate-marquee {
//             animation: marquee 20s linear infinite;
//           }
//           .animate-marquee:hover {
//             animation-play-state: paused;
//           }
//         `}</style>
//       </section>
//     </div>
//   );
// }






"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ServiceCard from "./components/ServiceCard";
import ScratchDeck from "./components/ScratchDeck";
import {
  ArrowRight,
  Rocket,
  Sparkles,
  Shield,
  Code2,
  Megaphone,
} from "lucide-react";
import Showcase from "./components/Showcase";

const HERO_IMAGES = [
  {
    src: "/heroimg1.jpg",
    title: "Successful Launch",
    meta: "March 20, 2024",
  },
  {
    src: "/heroimg2.jpg",
    title: "Omnichannel Experience",
    meta: "Deployed in 6 weeks",
  },
  {
    src: "/codingimg.jpeg",
    title: "AI-Assisted Delivery",
    meta: "Automation first",
  },
];

export default function Home() {
  const words = [
    "Web Apps ",
    "Mobile Apps ",
    "Cloud Platforms ",
    "AI Solutions ",
    "E-Commerce ",
  ];
  const [typed, setTyped] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  const currentHero = HERO_IMAGES[heroIdx];
  const heroStats = [
    { value: "120+", label: "Launches shipped" },
    { value: "35%", label: "Ops cost saved" },
    { value: "99.99%", label: "SLO uptime" },
  ];

  const provides = [
    {
      title: "Software Development",
      subtitle:
        "Custom applications for scale and performance. We architect robust backends,  clean APIs, and deliver reliable frontends. Our process emphasizes code quality, reviews, and automated testing for long-term maintainability.",
      img: "/softwareimg.jpg",
    },
    {
      title: "Website Designing",
      subtitle:
        "Eye-catching designs tailored to your business needs. We design responsive layouts, readable typography, and clear information hierarchy. Every page is optimized for accessibility and conversion.",
      img: "/heroimg1.jpg",
    },
    {
      title: "Digital Marketing",
      subtitle:
        "Grow your reach with full-funnel campaigns and analytics. We combine SEO content, paid media, and email automation to acquire, engage, and retain customers across channels.",
      img: "/digitalmarketingimg.png",
    },
    {
      title: "SEO Optimization",
      subtitle:
        "Technical SEO and content strategies that rank. From site speed and schema to content clusters and internal links, we build sustainable organic growth.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "UI/UX Designing",
      subtitle:
        "Human-centered interfaces with elegant interactions. We prototype early, validate with users, and ship delightful micro-interactions that communicate state and reduce friction.",
      img: "/uiux img.png",
    },
    {
      title: "Website Hosting ",
      subtitle:
        "Reliable hosting, backups, security, and updates. We monitor uptime, patch vulnerabilities, and keep content fresh so your site stays fast and secure.",
      img: "/webhostingimg.jpg",
    },
  ];

  // Clone last and first cards for seamless loop
  const extendedProvides = [
    provides[provides.length - 1],
    ...provides,
    provides[0],
  ];

  const [provideIdx, setProvideIdx] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);

  // Ensure component is mounted and visible
  useEffect(() => {
    setIsMounted(true);
    // Small delay to ensure transforms are applied correctly
    const timer = setTimeout(() => {
      setIsTransitioning(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Looping transition fix
  useEffect(() => {
    if (!isMounted) return;
    
    const handleTransitionEnd = () => {
      if (provideIdx === extendedProvides.length - 1) {
        setIsTransitioning(false);
        // Use setTimeout to ensure smooth reset
        setTimeout(() => {
          setProvideIdx(1);
          setIsTransitioning(true);
        }, 10);
      } else if (provideIdx === 0) {
        setIsTransitioning(false);
        setTimeout(() => {
          setProvideIdx(extendedProvides.length - 2);
          setIsTransitioning(true);
        }, 10);
      }
    };

    const container = containerRef.current;
    if (!container) return;
    
    container.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      container.removeEventListener("transitionend", handleTransitionEnd);
  }, [provideIdx, isMounted]);

  // Ensure transitions are always enabled after initial mount
  useEffect(() => {
    if (!isMounted) return;
    if (!isTransitioning) {
      const t = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(t);
    }
  }, [isTransitioning, isMounted]);

  // Auto-play every 5s (only after mounted)
  useEffect(() => {
    if (!isMounted) return;
    const interval = setInterval(() => {
      setProvideIdx((prev) => {
        // Prevent going beyond bounds
        if (prev >= extendedProvides.length - 1) {
          return 1; // Reset to first real item
        }
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isMounted]);

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return undefined;
    const interval = setInterval(
      () => setHeroIdx((prev) => (prev + 1) % HERO_IMAGES.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  // Typing animation
  useEffect(() => {
    const current = words[wordIndex];
    let delay = isDeleting ? 70 : 110;
    if (!isDeleting && charIndex === current.length) delay = 1200;

    const t = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setTyped(current.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setTyped(current.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(t);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#000b1d] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(101,239,242,0.16),transparent_58%)]" />
          <div
            className="absolute inset-0 opacity-45"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 120px)",
            }}
          />
          <div className="absolute -top-36 -left-24 h-[360px] w-[360px] rounded-full bg-[var(--vawe-coral)]/18 blur-3xl" />
          <div className="absolute bottom-[-220px] right-[-130px] h-[420px] w-[420px] rounded-full bg-[var(--vawe-teal)]/18 blur-[120px]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 pt-16 pb-10 md:py-28">
          <div className="grid items-center gap-10 lg:gap-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-6 sm:space-y-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[12px] uppercase tracking-[0.32em] text-white/70 mt-3"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-[var(--vawe-teal)] animate-ping" />
                Vawe Global Tech
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ delay: 0.02, duration: 0.5 }}
                className="font-(--font-orbitron) text-[clamp(32px,6vw,48px)] md:text-[clamp(32px,4.5vw,48px)] lg:text-[clamp(36px,4vw,50px)] leading-[1.08] font-extrabold"
              >
                Building with digital Brilliance{" "}
                <span className="text-[var(--vawe-teal)]">AI velocity</span>{" "}
                for{" "}<br />
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[var(--vawe-coral)]">
                  {typed}
                  <span className="inline-block h-[1.15em] w-[8px] translate-y-[4px] bg-white/80 align-middle animate-pulse" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ delay: 0.05, duration: 0.5 }}
                className="max-w-xl text-sm sm:text-lg text-white/75 leading-relaxed"
              >
                We combine design systems, autonomous infrastructure, and product
                telemetry to create experiences that learn and adapt. Launch faster,
                stay secure, and keep customers coming back.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ delay: 0.08, duration: 0.5 }}
                className="hidden md:flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--vawe-teal)] px-6 py-3 text-sm sm:text-base font-semibold text-black shadow-[0_18px_48px_rgba(101,239,242,0.32)] transition duration-300 hover:shadow-[0_20px_56px_rgba(101,239,242,0.4)]"
                >
                  Launch a discovery sprint
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-sm sm:text-base font-semibold text-white/80 transition duration-300 hover:bg-white/10 hover:text-white"
                >
                  Explore services
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="hidden w-full grid-cols-3 gap-6 pt-4 sm:pt-6 md:grid"
              >
                {heroStats.map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-3xl font-bold text-white sm:text-[36px]">
                      {value}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.32em] text-white/55">
                      {label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="relative mt-3 sm:mt-4 flex justify-center md:mt-0">
              <div className="absolute -inset-6 hidden rounded-[48px] bg-white/5 blur-3xl md:block" />

              <div className="relative w-full max-w-lg sm:max-w-xl">
                <div className="pointer-events-none absolute inset-0 rounded-[44px] border border-white/10 bg-white/5 backdrop-blur"></div>
                <div className="relative h-[320px] sm:h-[380px] md:h-[460px] overflow-hidden rounded-[44px]">
                  <div className="absolute inset-x-6 top-6 h-[180px] rounded-[32px] border border-white/10 bg-white/10 opacity-35 blur-xl"></div>
                  <div className="absolute inset-x-10 bottom-6 h-[180px] rounded-[32px] border border-white/10 bg-white/10 opacity-25 blur-xl"></div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentHero.src}
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -80, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="relative h-full overflow-hidden rounded-[44px] border border-white/10 bg-black/40 shadow-[0_40px_90px_rgba(0,0,0,0.55)]"
                    >
                      <Image
                        src={currentHero.src}
                        alt={currentHero.title}
                        fill
                        className="object-cover"
                        priority
                        loading="eager"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 rounded-3xl border border-white/15 bg-white/12 px-6 py-4 backdrop-blur">
                        <div>
                          <div className="text-[11px] uppercase tracking-[0.28em] text-white/60">
                            Case study
                          </div>
                          <div className="mt-1 text-lg font-semibold text-white">
                            {currentHero.title}
                          </div>
                          <div className="text-xs text-white/60">
                            {currentHero.meta}
                          </div>
                        </div>
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-[var(--vawe-teal)]">
                          <Sparkles size={20} />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 flex -translate-x-1/2 gap-2">
                  {HERO_IMAGES.map((item, idx) => (
                    <button
                      key={item.src}
                      onClick={() => setHeroIdx(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        heroIdx === idx
                          ? "w-8 bg-[var(--vawe-teal)]"
                          : "w-4 bg-white/25 hover:bg-white/45"
                      }`}
                      aria-label={`Show hero showcase ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-6 space-y-4 md:hidden"
            >
              <div className="flex items-center justify-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--vawe-teal)] px-4 py-2 text-xs font-semibold text-black shadow-[0_12px_30px_rgba(101,239,242,0.28)] transition duration-300 hover:shadow-[0_16px_36px_rgba(101,239,242,0.34)]"
                >
                  Launch a sprint
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white/80 transition duration-300 hover:bg-white/10 hover:text-white"
                >
                  Explore services
                </a>
              </div>

              <div className="grid grid-cols-3 items-start gap-3 text-center">
                {heroStats.map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-lg font-bold text-white">{value}</div>
                    <div className="mt-1 text-[9px] uppercase tracking-[0.26em] text-white/60">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Slider */}
      <section id="services" className="relative z-10 py-4 md:py-0 bg-[#fef9f5]">
        <div className="w-full">
          {/* Fixed Title */}
          <div className="text-center py-4 md:py-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-(--font-orbitron) text-[var(--vawe-navy)] mb-2 md:mb-3">
              What We Do
            </h2>
          </div>
          
          {/* Sliding Content Container */}
          <div
            ref={containerRef}
            className="relative w-full min-h-[550px] md:h-[55vh] overflow-hidden shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.1)]"
          >
            {extendedProvides.map((s, i) => {
              const isVisible = i === provideIdx;
              const translateX = (i - provideIdx) * 100;
              return (
              <div
                key={`${s.title}-${i}`}
                className={`absolute inset-0 ${
                  isMounted && isTransitioning
                    ? "transition-transform duration-500 ease-in-out  "
                    : ""
                }`}
                style={{
                  transform: `translateX(${translateX}%)`,
                  // marginTop: '-250px',
                  willChange: isMounted ? 'transform' : 'auto',
                  // marginBottom: '-200px',
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center py-4 md:py-8">
                  <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 items-center flex-1">
                    {/* Image - shown first on mobile, right on desktop */}
                    <div className="order-1 md:order-2 md:col-span-3 w-full">
                      <div
                        className="relative w-full h-[220px] sm:h-[280px] md:h-[45vh] rounded-xl overflow-hidden border border-black/10 shadow-2xl mx-auto max-w-md md:max-w-none"
                        style={{
                          boxShadow:
                            "0 20px 50px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.1)",
                        }}
                      >
                        <Image
                          src={s.img}
                          alt={s.title}
                          fill
                          className="object-cover"
                          loading={provideIdx === i ? "eager" : "lazy"}
                          priority={provideIdx === i && i <= 2}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                        />
                      </div>
                    </div>

                    {/* Left: content */}
                    <div className="order-2 md:order-1 text-neutral-900 md:col-span-2">
                      <div className="mt-2 md:mt-4">
                        <span
                          className="inline-block px-4 py-2 sm:px-6 sm:py-3 text-lg sm:text-xl md:text-2xl font-bold rounded-lg shadow-lg"
                          style={{
                            background:
                              "linear-gradient(135deg, #f56c53, #ff8c6e)",
                            color: "black",
                          }}
                        >
                          {s.title}
                        </span>
                      </div>
                      <p
                        className="mt-2 md:mt-3 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-black"
                      >
                        {s.subtitle}
                      </p>

                      <div className="mt-3 md:mt-4 mb-8 md:mb-12 flex gap-3">
                        <button
                          onClick={() => setProvideIdx((prev) => prev - 1)}
                          className="px-4 py-2 rounded-full border transition"
                          style={{
                            borderColor: "var(--vawe-coral)",
                            color: "var(--vawe-coral)",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "var(--vawe-coral)";
                            e.target.style.color = "white";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.color = "var(--vawe-coral)";
                          }}
                        >
                          Prev
                        </button>

                        <button
                          onClick={() => setProvideIdx((prev) => prev + 1)}
                          className="px-4 py-2 rounded-full border border-[var(--vawe-teal)] text-[var(--vawe-teal)] hover:bg-[var(--vawe-teal)] hover:text-white transition"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}

            {/* Pagination dots */}
            <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {provides.map((_, i) => {
                const isActive =
                  i + 1 === provideIdx ||
                  (provideIdx === provides.length + 1 && i === 0);
                return (
                  <button
                    key={i}
                    onClick={() => setProvideIdx(i + 1)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      isActive
                        ? "bg-[var(--vawe-navy)]"
                        : "bg-[var(--vawe-navy)]/40"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-8 md:py-10">
        <div className="container mx-auto px-6">
          <div
            className="rounded-2xl px-6 py-6 md:px-8 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-white"
            style={{ background: "var(--vawe-bg-gradient)" }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-(--font-orbitron)">
                Ready to launch?
              </h3>
              <p className="text-white/90">
                Partner with VAWE GlobalTech to accelerate your digital future.
              </p>
            </div>
            <a
              href="/contact"
              className="px-6 py-3 rounded-full font-semibold border border-white text-white hover:bg-white hover:text-black transition"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <Showcase />

      {/* Why Choose Us */}
      <section className="py-8 md:py-10">
        <div className="w-full px-6">
          <div className="container mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold font-(--font-orbitron)" style={{ background: 'var(--vawe-bg-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Why Choose VAWE GlobalTech</h3>
            <div className="mt-2 md:mt-3 h-1 w-24 rounded-full" style={{ background: 'var(--vawe-bg-gradient)' }} />
            <div className="relative mt-4 md:mt-6 overflow-hidden py-2">
            {/* single track with duplicated items for seamless loop (no gap) */}
            <div className="vawe-marquee flex whitespace-nowrap will-change-transform">
              {[...[
                "All‑in‑one digital solutions",
                "Expert team with years of experience",
                "Fast turnaround",
                "Dedicated support",
              ], ...[
                "All‑in‑one digital solutions",
                "Expert team with years of experience",
                "Fast turnaround",
                "Dedicated support",
              ], ...[
                "All‑in‑one digital solutions",
                "Expert team with years of experience",
                "Fast turnaround",
                "Dedicated support",
              ]].map((point, idx) => {
                const colors = ['var(--vawe-coral)', 'var(--vawe-teal)', 'var(--vawe-navy)', 'var(--vawe-beige)'];
                const colorIndex = idx % 4;
                return (
                  <div key={point+idx} className="relative glass gradient-border rounded-xl px-4 py-3 pl-6 text-sm text-neutral-800 shrink-0 mr-4" style={{ borderColor: colors[colorIndex] }}>
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full" style={{ backgroundColor: colors[colorIndex] }} />
                    {point}
                  </div>
                );
              })}
            </div>
          </div>
          <style jsx global>{`
            @keyframes vawe-marquee { 
              from { transform: translateX(0); } 
              to { transform: translateX(-50%); } 
            }
            .vawe-marquee { 
              animation: vawe-marquee 20s linear infinite;
              will-change: transform;
            }
            .vawe-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
          </div>
        </div>
      </section>
    </div>
  );
}