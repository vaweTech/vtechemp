"use client";
import { useMemo } from "react";

export default function Particles({ count = 26 }) {
  // Use a deterministic pseudo-random generator (Math.sin-based) so we avoid
  // calling impure Math.random() during render but still get varied positions.
  const dots = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const seed = i + 1 + count * 0.1;
      const rnd = Math.abs(Math.sin(seed * 12.9898) * 43758.5453);
      const frac = rnd - Math.floor(rnd);
      const rnd2 = Math.abs(Math.sin((seed + 1) * 78.233) * 12741.135);
      const frac2 = rnd2 - Math.floor(rnd2);
      const size = 3 + frac * 6;
      const top = frac * 100;
      const left = frac2 * 100;
      const delay = frac * 6;
      const duration = 6 + frac2 * 6;
      const colors = ["var(--magenta)", "var(--cyan)", "var(--orange)"];
      const color = colors[i % colors.length];
      return { id: i, size, top, left, delay, duration, color };
    });
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full blur-sm opacity-70 will-change-transform"
          style={{
            width: d.size,
            height: d.size,
            top: `${d.top}%`,
            left: `${d.left}%`,
            background: d.color,
            filter: "drop-shadow(0 0 8px rgba(255,255,255,0.35))",
            animation: `float ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}


