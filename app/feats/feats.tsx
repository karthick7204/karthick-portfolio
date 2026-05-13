"use client";
import { useEffect, useRef, useState } from "react";

const feats = [
  { platform: "LeetCode", num: 280, suffix: "+", desc: "problems solved", tag: "Easy · Medium · Hard", href: "https://leetcode.com/u/karthick7204/" },
  { platform: "GeeksForGeeks", num: 180, suffix: "+", desc: "problems solved", tag: "Top 10% institute", href: "https://geeksforgeeks.org/user/yourname" },
  { platform: "GitHub", num: 40, suffix: "+", desc: "repositories", tag: "300+ contributions", href: "https://github.com/karthick7204" },
  { platform: "Projects", num: 12, suffix: "", desc: "shipped projects", tag: "Real world apps", href: "#projects" },
];

interface Feat {
  platform: string;
  num: number;
  suffix: string;
  desc: string;
  tag: string;
  href: string;
}

function FeatCard({ feat, delay }: { feat: Feat; delay: number }) {
  const [val, setVal] = useState(0);
  const [done, setDone] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const animRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const runCount = () => {
    // reset first
    setVal(0);
    setDone(false);

    // cancel any running animation
    if (animRef.current) cancelAnimationFrame(animRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      const duration = 1800;
      const start = performance.now();
      const ease = (t: number) => 1 - Math.pow(1 - t, 3);

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setVal(Math.floor(ease(progress) * feat.num));
        if (progress < 1) {
          animRef.current = requestAnimationFrame(tick);
        } else {
          setDone(true);
        }
      };
      animRef.current = requestAnimationFrame(tick);
    }, delay);
  };

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCount(); // restart every time it enters view
          } else {
            // reset when out of view so next entry starts fresh
            setVal(0);
            setDone(false);
            if (animRef.current) cancelAnimationFrame(animRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (animRef.current) cancelAnimationFrame(animRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <a
      ref={cardRef}
      href={feat.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-6 md:p-8 rounded-lg cursor-pointer transition-all duration-300 block"
      style={{
        border: "0.5px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.02)",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
      }}
    >
      <span className="absolute top-5 right-5 text-xs text-white/10 group-hover:text-white/50 transition-colors duration-200">↗</span>

      <p className="text-[9px] tracking-[0.2em] text-white/20 uppercase mb-4">{feat.platform}</p>

      <p
        className="text-4xl md:text-5xl font-black text-white leading-none tracking-tight"
        style={{ textShadow: "0 0 40px rgba(255,255,255,0.15)" }}
      >
        {val}{done ? feat.suffix : ""}
      </p>

      <p className="text-xs text-white/30 mt-2.5">{feat.desc}</p>

      <span
        className="inline-block mt-4 text-[9px] px-2.5 py-1 rounded-md text-white/25 tracking-wider"
        style={{ border: "0.5px solid rgba(255,255,255,0.1)" }}
      >
        {feat.tag}
      </span>
    </a>
  );
}

export default function Feats() {
  return (
    <section className="py-20 md:py-24">
      <div className="relative w-full rounded-[2rem] md:rounded-[2.5rem] border border-white/10 bg-[#080808]/40 backdrop-blur-xl overflow-hidden shadow-2xl">
        {/* Window Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/30" />
          </div>
          <p className="text-[9px] tracking-[0.25em] text-white/20 uppercase">achievements.log</p>
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {feats.map((f, i) => (
              <FeatCard key={f.platform} feat={f} delay={i * 150} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}