"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ServiceCard({ icon: Icon, title, description, color = "coral", variant = "solid", image }) {
  const [isMounted] = useState(true);
  
  const bgColors = {
    coral: 'var(--vawe-coral)',
    teal: 'var(--vawe-teal)',
    navy: 'var(--vawe-navy)',
    beige: 'var(--vawe-beige)'
  };
  const bgColor = bgColors[color] || bgColors.coral;
  return (
    <motion.div
      initial={false}
      animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="group relative rounded-2xl border-2"
      style={{ borderColor: bgColor }}
    >
      <div className="rounded-2xl p-6 h-full flex flex-col bg-white/90 shadow-lg">
        {image && (
          <div className="relative overflow-hidden rounded-xl mb-4">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            <Image src={image.src} alt={image.alt || title} className="w-full h-32 object-cover" />
          </div>
        )}
        {Icon && (
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-xl group-hover:scale-105 transition"
            style={{ backgroundColor: bgColor }}
          >
            <Icon className="text-white" size={22} />
          </div>
        )}
        <h3 className="mt-5 text-lg font-semibold" style={{ color: 'var(--vawe-navy)' }}>{title}</h3>
        <p className="mt-2 text-neutral-700 text-sm leading-relaxed">{description}</p>
        <div className="mt-5">
          <span className="text-xs font-semibold" style={{ color: bgColor }}>Learn more →</span>
        </div>
      </div>
    </motion.div>
  );
}


