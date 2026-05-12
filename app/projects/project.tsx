"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "PatchPilot",
    desc: "An automated AI code patching and vulnerability remediation system.",
    stats: [{ val: "98%", label: "accuracy" }, { val: "500+", label: "vulns fixed" }],
    tag: "#NEXTJS #AI",
    href: "https://github.com/karthick7204/patchpilot",
    bg: "#080808",
    img: "/project3.png",
  },
  {
    name: "AI Assessment Engine",
    desc: "A modular, AI-driven learning platform for real-time skill tracking.",
    stats: [{ val: "15k+", label: "questions" }, { val: "200+", label: "modules" }],
    tag: "#AI #LEARNING",
    href: "https://github.com/karthick7204/ai-assessment",
    bg: "#080808",
    img: "/project2.png",
  },
  {
    name: "Project1",
    desc: "sample data coming from meta verse",
    stats: [{ val: "1.2M+", label: "visits/month" }, { val: "26K+", label: "users/month" }],
    tag: "#BackGround Agent",
    href: "https://github.com/karthick/project1",
    bg: "#080808",
    img: "/image.png",
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "0px"]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, borderRadius, background: project.bg }}
      className="sticky top-0 w-full min-h-screen md:h-screen flex items-center justify-center px-4 md:px-12 py-10 md:py-20"
    >
      <div className="flex flex-col px-4 md:px-12 pt-10 md:pt-16 pb-8 gap-6 w-full max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 md:mb-8 gap-4 md:gap-6">
          <div>
            <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight mb-1 md:mb-2">{project.name}</h2>
          </div>
          <div className="flex gap-6 md:gap-12">
            {project.stats.map((s) => (
              <div key={s.label}>
                <p className="text-xl md:text-4xl font-black text-white tracking-tight">{s.val}</p>
                <p className="text-[8px] md:text-[10px] text-white/20 mt-1 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#080808] h-[300px] sm:h-[400px] md:h-[550px]">
          <Image src={project.img} alt={project.name} fill className="object-cover object-top hover:scale-105 transition-transform duration-1000" />

          {/* Bottom Overlay with Explanation and Link */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 flex flex-col sm:flex-row sm:items-end justify-between z-20 bg-gradient-to-t from-black via-black/80 to-transparent gap-4">
            <div className="max-w-md">
              <p className="text-[8px] md:text-[10px] tracking-[0.2em] text-white/60 uppercase mb-1">{project.tag}</p>
              <p className="text-xs md:text-sm text-white leading-relaxed italic font-medium">{project.desc}</p>
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-[8px] md:text-[10px] text-white font-bold tracking-widest uppercase transition-all"
            >
              View Project ↗
            </a>
          </div>

          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none z-10" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectList() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });

  const sectionY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const sectionRadius = useTransform(scrollYProgress, [0, 1], ["0px", "0px"]);

  return (
    <div ref={sectionRef} style={{ minHeight: `${projects.length * 100}vh`, background: "#020202" }}>

      {/* Heading — sits above, animates on scroll */}
      <div className="flex flex-col items-center justify-center text-center px-6 md:px-12 py-20 md:py-32 gap-4 ">
        <motion.h2
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-4xl md:text-6xl font-black tracking-tight text-white"
        >
          What i did so far?
        </motion.h2>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.15 }}
          className="text-xs md:text-sm text-white/30"
        >
          You gotta see what my 2 years of experience got me so far.
        </motion.p>
      </div>

      {/* Projects section slides up over the heading */}
      <motion.section
        style={{
          y: sectionY,
          borderRadius: sectionRadius,
          position: "sticky",
          top: 0,
          background: "#020202",
        }}
        className="w-full overflow-hidden"
      >
        <div className="flex items-center gap-3 px-6 md:px-12 py-6 md:py-8">
          <span className="text-[9px] tracking-[0.25em] text-white/20 uppercase">projects</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="flex flex-col" style={{ minHeight: `${projects.length * 100}vh` }}>
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </motion.section>

    </div>
  );
}