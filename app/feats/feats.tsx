"use client";
import { useEffect, useRef, useState } from "react";

const feats = [
  { platform: "LeetCode",      num: 280, suffix: "+", desc: "problems solved",  tag: "Easy · Medium · Hard", href: "https://leetcode.com/u/yourname" },
  { platform: "GeeksForGeeks", num: 180, suffix: "+", desc: "problems solved",  tag: "Top 10% institute",     href: "https://geeksforgeeks.org/user/yourname" },
  { platform: "GitHub",        num: 40,  suffix: "+", desc: "repositories",     tag: "300+ contributions",    href: "https://github.com/yourname" },
  { platform: "Projects",      num: 12,  suffix: "",  desc: "shipped projects", tag: "Real world apps",       href: "#projects" },
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
      className="group relative p-7 rounded-xl cursor-pointer transition-all duration-300 block"
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
        className="text-6xl font-black text-white leading-none tracking-tight"
        style={{ textShadow: "0 0 40px rgba(255,255,255,0.15)" }}
      >
        {val}{done ? feat.suffix : ""}
      </p>

      <p className="text-xs text-white/30 mt-2.5">{feat.desc}</p>

      <span
        className="inline-block mt-4 text-[9px] px-2.5 py-1 rounded-full text-white/25 tracking-wider"
        style={{ border: "0.5px solid rgba(255,255,255,0.1)" }}
      >
        {feat.tag}
      </span>
    </a>
  );
}

export default function Feats() {
  return (
    <section className="py-20 max-w-3xl mx-auto px-6">
      <p className="text-[9px] tracking-[0.25em] text-white/20 uppercase mb-7">feats</p>
      <div className="grid grid-cols-2 gap-2.5">
        {feats.map((f, i) => (
          <FeatCard key={f.platform} feat={f} delay={i * 150} />
        ))}
      </div>
    </section>
  );
}