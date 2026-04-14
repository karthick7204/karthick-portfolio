"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  Layers, 
  Wrench, 
  Database,
  Cpu,
  Globe,
  Layout,
  Palette,
  Sparkles
} from "lucide-react";

const categories = [
  {
    name: "Languages",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5/CSS3"],
    desc: "The core foundation of my development stack.",
    className: "md:col-span-2 md:row-span-1 bg-blue-500/5 border-blue-500/20",
    iconColor: "text-blue-400",
    glow: "bg-blue-500/20"
  },
  {
    name: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React 19", "Next.js 15", "Tailwind CSS", "Framer Motion", "Three.js"],
    desc: "Crafting immersive, high-performance user interfaces.",
    className: "md:col-span-1 md:row-span-2 bg-purple-500/5 border-purple-500/20",
    iconColor: "text-purple-400",
    glow: "bg-purple-500/20"
  },
  {
    name: "Backend",
    icon: <Database className="w-5 h-5" />,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma"],
    desc: "Building scalable and robust server environments.",
    className: "md:col-span-1 md:row-span-1 bg-emerald-500/5 border-emerald-500/20",
    iconColor: "text-emerald-400",
    glow: "bg-emerald-500/20"
  },
  {
    name: "Design",
    icon: <Palette className="w-5 h-5" />,
    skills: ["Figma", "UI/UX Principles", "Responsive Design", "Prototypes"],
    desc: "Bridging the gap between aesthetics and function.",
    className: "md:col-span-1 md:row-span-1 bg-orange-500/5 border-orange-500/20",
    iconColor: "text-orange-400",
    glow: "bg-orange-500/20"
  },
  {
    name: "Tools & DevOps",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "Docker", "Vercel", "Linux", "Postman"],
    desc: "Streamlining development and deployment pipelines.",
    className: "md:col-span-2 md:row-span-1 bg-pink-500/5 border-pink-500/20",
    iconColor: "text-pink-400",
    glow: "bg-pink-500/20"
  }
];

const SkillBadge = ({ name }: { name: string }) => (
  <span className="px-2 py-1 text-[10px] font-medium rounded-md bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all cursor-default">
    {name}
  </span>
);

export default function Skills() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 mx-auto max-w-5xl">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]"
          >
            <Sparkles className="w-3 h-3 text-white/40" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Technological Stack</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-center text-white tracking-tight"
          >
            Powering Digital <span className="text-white/30 italic font-serif">Experiences</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className={`group relative p-6 rounded-[2rem] border overflow-hidden transition-all duration-500 hover:scale-[1.02] ${cat.className}`}
            >
              {/* Glow Effect */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${cat.glow}`} />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className={`p-3 w-fit rounded-2xl bg-white/[0.03] border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-500 ${cat.iconColor}`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
                  <p className="text-sm text-white/40 mb-6 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 120, strokeWidth: 1 })}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Modern Footer Detail */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex flex-col items-center space-y-4"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <p className="text-[10px] text-white/20 tracking-[0.3em] uppercase">Continuously Evolving</p>
        </motion.div>
      </div>
    </section>
  );
}