"use client";
import React, { useEffect, useRef, useState } from "react";

const feats = [
  {
    platform: "LeetCode",
    num: 280,
    suffix: "+",
    desc: "problems solved",
    tag: "Easy · Medium · Hard",
    href: "https://leetcode.com/u/karthick7204/",
    color: "#FFA116",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.774 9.774a1.362 1.362 0 0 0-.001 1.927l9.774 9.774c.257.257.61.409.961.414H24v-2.738h-9.972l-8.423-8.423 8.423-8.423H24V0h-10.517zM0 10.428v2.336h7.525a1.363 1.363 0 0 0 1.927-.001l1.168-1.168-1.168-1.167a1.362 1.362 0 0 0-1.927 0H0z" />
      </svg>
    ),
  },
  {
    platform: "GeeksForGeeks",
    num: 180,
    suffix: "+",
    desc: "problems solved",
    tag: "Top 10% institute",
    href: "https://geeksforgeeks.org/user/yourname",
    color: "#2F8D46",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z" />
      </svg>
    ),
  },
  {
    platform: "GitHub",
    num: 40,
    suffix: "+",
    desc: "repositories",
    tag: "300+ contributions",
    href: "https://github.com/karthick7204",
    color: "#fafafa",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    platform: "CodeChef",
    num: 3,
    suffix: "★",
    desc: "star rating",
    tag: "Rating: 1600+",
    href: "https://codechef.com/users/karthick7204",
    color: "#3b82f6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
        <path d="M6 17h12" />
      </svg>
    ),
  },
];

interface Feat {
  platform: string;
  num: number;
  suffix: string;
  desc: string;
  tag: string;
  href: string;
  color: string;
  icon: React.ReactNode;
}

function FeatCard({ feat, delay }: { feat: Feat; delay: number }) {
  const [val, setVal] = useState(0);
  const [done, setDone] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const animRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const runCount = () => {
    setVal(0);
    setDone(false);

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
            runCount();
          } else {
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
      className="group relative p-1 rounded-2xl cursor-pointer block overflow-hidden transition-all duration-500 hover:scale-[1.02] h-full"
      style={{ textDecoration: "none" }}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ 
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${feat.color} 180deg, transparent 360deg)`,
          animation: 'rotate-gradient 4s linear infinite'
        }}
      />

      <div className="relative inset-[1px] bg-[#0a0a0a] rounded-[15px] p-6 overflow-hidden z-10 h-full flex flex-col">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px', color: feat.color }} />
        
        <div className="flex items-start justify-between mb-6">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ color: feat.color }}>
              {feat.platform}
            </span>
            <div className="h-0.5 w-8 rounded-full bg-white/10 group-hover:w-full transition-all duration-700" style={{ background: `${feat.color}44` }} />
          </div>
          
          <div 
            className="p-2.5 rounded-full border border-white/5 bg-white/[0.02] transition-all duration-500 group-hover:bg-white/[0.05]"
            style={{ color: feat.color }}
          >
            {feat.icon}
          </div>
        </div>

        <div className="mb-4 relative">
          <p className="text-4xl md:text-5xl font-black text-white tracking-tighter transition-transform duration-500 group-hover:translate-x-2">
            {val}<span className="text-xl opacity-20 group-hover:opacity-100" style={{ color: feat.color }}>{done ? feat.suffix : ""}</span>
          </p>
          <p className="text-[10px] font-medium text-white/40 mt-1 uppercase tracking-widest">{feat.desc}</p>
        </div>

        <div className="flex items-end justify-between mt-auto">
          <div className="flex flex-col gap-1.5">
            <span className="px-2 py-0.5 bg-white/5 rounded border border-white/5 text-[8px] text-white/40 group-hover:text-white/80 transition-all">
              {feat.tag}
            </span>
          </div>

          <div className="relative w-8 h-8 perspective-1000 group-hover:scale-125 transition-transform duration-500">
            <div className="absolute inset-0 border-2 rounded-sm opacity-20" 
                 style={{ borderColor: feat.color, animation: 'rotate-3d 6s linear infinite' }} />
            <div className="absolute inset-[15px] rounded-full shadow-[0_0_15px_currentColor]" 
                 style={{ color: feat.color, background: feat.color }} />
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Feats() {
  return (
    <section className="py-24 md:py-32 flex items-center justify-center">
      <div className="w-full max-w-5xl px-6">
        
        {/* MacBook Window Frame (No laptop chassis) */}
        <div className="relative rounded-3xl border border-white/10 bg-[#080808]/80 backdrop-blur-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Window Top Bar */}
          <div className="h-12 w-full border-b border-white/5 bg-white/[0.02] flex items-center justify-between px-6 relative z-50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10" />
              <div className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">achievements.log</span>
            </div>
            <div className="flex gap-3 opacity-20">
              <div className="w-4 h-4 rounded bg-white/10" />
              <div className="w-4 h-4 rounded bg-white/10" />
            </div>
          </div>

          {/* Window Content Area */}
          <div className="p-6 md:p-10 lg:p-12 min-h-[400px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {feats.map((f, i) => (
                <FeatCard key={f.platform} feat={f} delay={i * 150} />
              ))}
            </div>
          </div>

          {/* Glossy Reflection Overlay (Top) */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
        </div>

      </div>

      <style jsx>{`
        @keyframes rotate-gradient {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotate-3d {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
