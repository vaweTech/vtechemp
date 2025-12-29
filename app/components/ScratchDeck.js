"use client";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Simple stacked scratch-card deck with canvas erase overlay
export default function ScratchDeck({ images = [], width = 360, height = 480, className = "" }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null); // legacy (not used for scratch anymore)
  const fxCanvasRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScratching, setIsScratching] = useState(false);
  const [cleared, setCleared] = useState(0); // 0..1
  const [resetKey, setResetKey] = useState(0);

  const normalizedImages = useMemo(() => images.filter(Boolean), [images]);
  const active = normalizedImages[currentIndex % (normalizedImages.length || 1)] || {};
  const side = Math.min(width, height); // enforce square for diamond

  // Draw initial cover on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    // Cover paint: light paper with subtle noise
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "#f4f4f6");
    gradient.addColorStop(1, "#e6e7ea");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add speckled noise
    const noiseDensity = 0.08;
    const noise = ctx.createImageData(width, height);
    for (let i = 0; i < noise.data.length; i += 4) {
      const v = Math.random() < noiseDensity ? 180 + Math.random() * 40 : 0;
      noise.data[i] = v;
      noise.data[i + 1] = v;
      noise.data[i + 2] = v;
      noise.data[i + 3] = v === 0 ? 0 : 18;
    }
    ctx.putImageData(noise, 0, 0);

    // Reset cleared state when canvas dimensions or index change
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCleared(0);
  }, [width, height, currentIndex, resetKey]);

  // Setup FX canvas (sparks)
  useEffect(() => {
    const canvas = fxCanvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
  }, [width, height]);

  // Particle system
  const particlesRef = useRef([]);
  const lastBurstRef = useRef(0);
  
  function drawStar(ctx, x, y, spikes, outerRadius, innerRadius, color) {
    let rot = Math.PI / 2 * 3;
    let cx = x, cy = y;
    let step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      let xx = cx + Math.cos(rot) * outerRadius;
      let yy = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(xx, yy);
      rot += step;

      xx = cx + Math.cos(rot) * innerRadius;
      yy = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(xx, yy);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    const grad = ctx.createRadialGradient(x, y, 0, x, y, outerRadius);
    grad.addColorStop(0, "rgba(255,255,230,0.75)");
    grad.addColorStop(0.3, color);
    grad.addColorStop(1, "rgba(254,241,96,0.12)");
    ctx.fillStyle = grad;
    ctx.shadowColor = "rgba(254,241,96,0.5)";
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;
  }
  useEffect(() => {
    let raf;
    const canvas = fxCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const tick = () => {
      const particles = particlesRef.current;
      ctx.clearRect(0, 0, width, height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.vx *= 0.985;
        p.vy = p.vy * 0.985 + 0.08; // slight gravity
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.globalCompositeOperation = "lighter";
        const a = Math.max(0, p.life);
        if (p.kind === "star") {
          drawStar(ctx, p.x, p.y, p.spikes, p.outer, p.inner, `rgba(${p.r},${p.g},${p.b},${0.7 * a})`);
          // white glint core
          ctx.fillStyle = `rgba(255,255,255,${Math.min(0.6, 0.6 * a)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(1, p.inner * 0.5), 0, Math.PI * 2);
          ctx.fill();
        } else {
          const radius = p.size * 3.2;
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
          grad.addColorStop(0, `rgba(${p.r},${p.g},${p.b},${Math.min(0.7, 0.6 * a + 0.2)})`);
          grad.addColorStop(0.5, `rgba(${p.r},${p.g},${p.b},${0.4 * a})`);
          grad.addColorStop(1, `rgba(${p.r},${p.g},${p.b},0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [width, height]);

  const burstAt = (clientX, clientY, strong = false) => {
    const canvas = fxCanvasRef.current;
    if (!canvas) return;
    const r = canvas.getBoundingClientRect();
    const x = clientX - r.left;
    const y = clientY - r.top;
    const particles = particlesRef.current;
    const count = strong ? 40 : 18;
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = (strong ? 2.4 : 1.8) + Math.random() * (strong ? 1.4 : 1.0);
      // Candy Corn color (254, 241, 96)
      const col = [254, 241, 96];
      // 1 in 6 is a star sparkle
      const isStar = Math.random() < (strong ? 0.35 : 0.2);
      if (isStar) {
        particles.push({
          kind: "star",
          x,
          y,
          vx: Math.cos(a) * (s * 0.6),
          vy: Math.sin(a) * (s * 0.6),
          spikes: 6 + Math.floor(Math.random() * 3),
          outer: 9 + Math.random() * 6,
          inner: 3.5 + Math.random() * 2.5,
          life: 1.0,
          r: col[0],
          g: col[1],
          b: col[2],
        });
      } else {
        particles.push({
          kind: "dust",
          x,
          y,
          vx: Math.cos(a) * s,
          vy: Math.sin(a) * s,
          size: 2.2 + Math.random() * 2.0,
          life: 0.95,
          r: col[0],
          g: col[1],
          b: col[2],
        });
      }
    }
  };

  function hslToRgb(h, s, l) {
    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  function drawStar(ctx, x, y, spikes, outerRadius, innerRadius, color) {
    let rot = Math.PI / 2 * 3;
    let cx = x, cy = y;
    let step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      let xx = cx + Math.cos(rot) * outerRadius;
      let yy = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(xx, yy);
      rot += step;

      xx = cx + Math.cos(rot) * innerRadius;
      yy = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(xx, yy);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    const grad = ctx.createRadialGradient(x, y, 0, x, y, outerRadius);
    grad.addColorStop(0, "rgba(255,255,230,0.75)");
    grad.addColorStop(0.3, color);
    grad.addColorStop(1, "rgba(254,241,96,0.12)");
    ctx.fillStyle = grad;
    ctx.shadowColor = "rgba(254,241,96,0.5)";
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  
  // Pointer sparkle only (no scratch / no blast)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const pt = e.touches?.[0] || e;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${pt.clientX - r.left}px`);
      el.style.setProperty("--my", `${pt.clientY - r.top}px`);
      const now = performance.now();
      if (now - lastBurstRef.current > 90) {
        // small sparkle only (no dust)
        const canvas = fxCanvasRef.current;
        if (canvas) {
          burstAt(pt.clientX, pt.clientY, false);
          lastBurstRef.current = now;
        }
      }
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("touchmove", onMove, { passive: true });
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("touchmove", onMove);
    };
  }, []);

  // Auto-advance with shatter transition
  const [shards, setShards] = useState([]);
  const makeShards = useCallback((src) => {
    const rows = 6, cols = 5;
    const w = width, h = height;
    const cw = w / cols, ch = h / rows;
    const items = [];
    let id = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        items.push({
          id: id++,
          x: c * cw,
          y: r * ch,
          w: cw,
          h: ch,
          bx: -c * cw,
          by: -r * ch,
          src
        });
      }
    }
    return items;
  }, [width, height]);

  const triggerShatterNext = useCallback(() => {
    const img = normalizedImages[currentIndex % (normalizedImages.length || 1)];
    if (!img) return;
    setShards(makeShards(img.src));
    setTimeout(() => {
      setCurrentIndex((i) => (i + 1) % (normalizedImages.length || 1));
      setShards([]);
    }, 650);
  }, [normalizedImages, currentIndex, makeShards]);

  useEffect(() => {
    if (!normalizedImages.length) return;
    const t = setInterval(() => triggerShatterNext(), 4500);
    return () => clearInterval(t);
  }, [normalizedImages.length, triggerShatterNext]);

  // When cleared enough, animate out and advance deck
  useEffect(() => {
    if (cleared >= 0.55) {
      const t = setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % (normalizedImages.length || 1));
        setResetKey((k) => k + 1);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [cleared, normalizedImages.length]);

  const stack = useMemo(() => {
    const arr = [];
    for (let i = 0; i < Math.min(3, normalizedImages.length); i++) {
      arr.push(normalizedImages[(currentIndex + i) % normalizedImages.length]);
    }
    return arr;
  }, [normalizedImages, currentIndex]);

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ width: side, height: side }}>
      {/* Rotated diamond container */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotate(45deg)', borderRadius: 24, overflow: 'hidden', background: '#fff' }}>
        <image
          src={active?.src}
          alt={active?.alt || 'slide'}
          className="block"
          loading="lazy"
          referrerPolicy="no-referrer"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transform: 'rotate(-45deg)' }}
        />
      </div>
    </div>
  );
}


