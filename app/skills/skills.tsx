"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Layout, 
  Database, 
  Palette, 
  Wrench,
  Hash,
  X
} from "lucide-react";

const categories = [
  {
    id: "languages",
    name: "languages.json",
    icon: <Terminal className="w-4 h-4 text-blue-400" />,
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3", "C++"],
    desc: "// The core foundations of my stack"
  },
  {
    id: "frontend",
    name: "frontend.ts",
    icon: <Layout className="w-4 h-4 text-purple-400" />,
    skills: ["React 19", "Next.js 15", "Tailwind CSS", "Framer Motion", "Three.js"],
    desc: "// Crafting immersive user experiences"
  },
  {
    id: "backend",
    name: "backend.py",
    icon: <Database className="w-4 h-4 text-emerald-400" />,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma"],
    desc: "// Building scalable server architectures"
  },
  {
    id: "design",
    name: "design.fig",
    icon: <Palette className="w-4 h-4 text-orange-400" />,
    skills: ["Figma", "UI/UX Design", "Prototyping", "Motion Graphics"],
    desc: "// Bridging aesthetics and function"
  },
  {
    id: "tools",
    name: "devops.yml",
    icon: <Wrench className="w-4 h-4 text-pink-400" />,
    skills: ["Git", "Docker", "Vercel", "Linux", "Postman", "CI/CD"],
    desc: "// Streamlining the shipping process"
  }
];

export default function Skills() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section className="py-20 md:py-32 relative bg-[#010101]">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
           <p className="text-[10px] tracking-[0.4em] text-white/20 uppercase mb-4">Technical Environment</p>
           <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Skillset Console</h2>
        </div>

        {/* IDE Container */}
        <div className="w-full rounded-xl border border-white/10 bg-[#080808] overflow-hidden shadow-2xl flex flex-row h-[550px] md:h-[600px]">
          
          {/* Sidebar - Always on the left */}
          <div className="w-[110px] sm:w-48 md:w-64 border-r border-white/5 bg-[#050505] flex flex-col flex-none">
            {/* Window Controls - Now on all screens */}
            <div className="flex items-center gap-1.5 md:gap-2 p-3 md:p-4 pb-2 opacity-40">
              <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-red-500/50" />
              <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-yellow-500/50" />
              <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-green-500/50" />
            </div>
            
            <div className="hidden sm:block px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-white/20 mb-2">Explorer</div>

            {/* Navigation - Vertical list */}
            <div className="flex flex-col overflow-y-auto no-scrollbar p-2 md:p-3 gap-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat)}
                  className={`w-full flex items-center gap-2 md:gap-3 px-2 md:px-3 py-2 rounded-md text-[10px] md:text-xs font-mono transition-all text-left ${
                    active.id === cat.id 
                    ? "bg-white/10 text-white shadow-sm" 
                    : "text-white/30 hover:bg-white/5 hover:text-white/60"
                  }`}
                >
                  <span className="flex-none">{cat.icon}</span>
                  <span className="truncate">{cat.name}</span>
                </button>
              ))}
            </div>

            <div className="mt-auto p-4 opacity-20 hidden md:block">
               <div className="h-px bg-white/10 mb-4" />
               <p className="text-[9px] font-mono">v2.0.4 - STABLE</p>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col bg-[#080808] overflow-hidden">
            {/* Tab Bar - Visible on all screens for that IDE look */}
            <div className="flex h-10 bg-[#050505] items-center px-2 md:px-4 gap-2 border-b border-white/5 overflow-x-auto no-scrollbar">
               <div className="flex items-center gap-2 bg-[#080808] border-x border-t border-white/10 px-3 md:px-4 py-2 rounded-t-md text-[9px] md:text-[10px] font-mono text-white/80 -mb-[1px] whitespace-nowrap">
                  {active.icon}
                  {active.name}
                  <X className="w-3 h-3 ml-2 opacity-30 hover:opacity-100 cursor-pointer" />
               </div>
            </div>

            {/* Editor Content */}
            <div className="flex-1 p-4 md:p-10 font-mono overflow-y-auto custom-scrollbar">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -5 }}
                  transition={{ duration: 0.15 }}
                >
                  <p className="text-white/30 text-[9px] md:text-xs mb-6 md:mb-8 italic">
                    {active.desc}
                  </p>
                  
                  <div className="space-y-3 md:space-y-3">
                    {active.skills.map((skill, i) => (
                      <div key={skill} className="flex items-center gap-3 md:gap-4 group">
                        <span className="text-white/10 text-[8px] md:text-[10px] w-4 md:w-8 flex-none text-right">{i + 1}</span>
                        <div className="flex items-center gap-2">
                           <Hash className="w-3 h-3 text-white/20 group-hover:text-blue-500/50 transition-colors flex-none" />
                           <span className="text-[11px] md:text-base text-white/70 group-hover:text-white transition-colors tracking-tight line-clamp-1">
                              {skill}
                           </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="mt-10 md:mt-16 h-px w-full bg-gradient-to-r from-white/10 to-transparent" 
                  />
                  
                  <div className="mt-6 md:mt-8 flex flex-wrap gap-4 md:gap-8">
                     <div>
                        <p className="text-[7px] md:text-[9px] uppercase tracking-widest text-white/20 mb-1">Status</p>
                        <p className="text-[8px] md:text-[10px] text-green-500/70 uppercase font-bold tracking-widest">Mastered</p>
                     </div>
                     <div>
                        <p className="text-[7px] md:text-[9px] uppercase tracking-widest text-white/20 mb-1">Coverage</p>
                        <p className="text-[8px] md:text-[10px] text-white/50 uppercase font-bold tracking-widest">95%</p>
                     </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}