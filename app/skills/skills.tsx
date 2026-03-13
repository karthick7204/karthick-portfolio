"use client";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "JavaScript", level: "advanced",   pct: 90 },
      { name: "TypeScript", level: "proficient",  pct: 80 },
      { name: "HTML / CSS", level: "advanced",   pct: 95 },
      { name: "Python",     level: "familiar",   pct: 55 },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    skills: [
      { name: "React",         level: "advanced",   pct: 90 },
      { name: "Next.js",       level: "proficient", pct: 85 },
      { name: "Tailwind CSS",  level: "advanced",   pct: 88 },
      { name: "Framer Motion", level: "proficient", pct: 70 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js",   level: "proficient", pct: 75 },
      { name: "Express",   level: "proficient", pct: 70 },
      { name: "MongoDB",   level: "familiar",   pct: 65 },
      { name: "REST APIs", level: "proficient", pct: 80 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git / GitHub", level: "advanced",   pct: 85 },
      { name: "VS Code",      level: "advanced",   pct: 95 },
      { name: "Vercel",       level: "proficient", pct: 78 },
    ],
  },
  {
    id: "design",
    label: "Design",
    skills: [
      { name: "Figma",   level: "familiar", pct: 68 },
      { name: "UI / UX", level: "familiar", pct: 60 },
    ],
  },
];

export default function Skills() {
  const rightRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("languages");

  useEffect(() => {
    const el = rightRef.current;
    if (!el) return;

  const handleScroll = () => {
  let current = categories[0].id;
  categories.forEach(({ id }) => {
    const section = el.querySelector(`#${id}`) as HTMLElement;
    if (section && section.offsetTop <= el.scrollTop + 100) current = id;
  });
  setActive(current);
};

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = rightRef.current;
    const section = el?.querySelector(`#${id}`) as HTMLElement;
    if (el && section) el.scrollTo({ top: section.offsetTop - 32, behavior: "smooth" });
    setActive(id);
  };

  return (
    <div
      className="flex h-[460px] overflow-hidden rounded-2xl max-w-3xl mx-auto"
      style={{ background: "#00000" }}
    >
      {/* Left — category nav */}
      <div className="w-[180px] min-w-[180px] flex flex-col gap-1 p-8">
        <p className="text-[9px] tracking-[0.25em] text-white/20 uppercase mb-6 pl-3">
          stack
        </p>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollTo(cat.id)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs tracking-wide transition-all duration-200 text-left"
            style={{
              color: active === cat.id ? "white" : "rgba(255,255,255,0.28)",
              background: active === cat.id ? "rgba(255,255,255,0.06)" : "transparent",
            }}
          >
            <span
              className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-200"
              style={{
                background: active === cat.id ? "white" : "rgba(255,255,255,0.15)",
                boxShadow: active === cat.id
                  ? "0 0 6px 2px rgba(255,255,255,0.5)"
                  : "none",
              }}
            />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="w-px" style={{ background: "rgba(255,255,255,0.06)" }} />

      {/* Right — scrollable skills */}
     <div
  ref={rightRef}
  id="skills-right"
  className="flex-1 overflow-y-scroll p-8"
  style={{ scrollbarWidth: "none" }}
>
        <style>{`#skills-right::-webkit-scrollbar { display: none; }`}</style>

        {categories.map((cat) => (
          <div key={cat.id} id={cat.id} className="mb-11">

            {/* Section header */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[9px] tracking-[0.22em] text-white/20 uppercase whitespace-nowrap">
                {cat.label}
              </span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-2">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group p-4 rounded-xl cursor-default transition-all duration-200"
                  style={{
                    border: "0.5px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  <p className="text-sm text-white/60 mb-2 font-medium group-hover:text-white transition-colors duration-200">
                    {skill.name}
                  </p>
                  <div
                    className="h-0.5 rounded-full"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${skill.pct}%`,
                        background:
                          "linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0.5))",
                      }}
                    />
                  </div>
                  <p className="text-[9px] text-white/20 uppercase tracking-widest mt-1.5">
                    {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}