"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "Project1",
    desc: "sample data coming from meta verse",
    stats: [{ val: "1.2M+", label: "visits/month" }, { val: "26K+", label: "users/month" }],
    tag: "#BackGround Agent",
    href: "#",
    bg: "#0a1a2e",  // deep navy
    img: "/image.png",
  },
  {
    name: "AI Assessment Engine",
    desc: "A modular, AI-driven learning platform for real-time skill tracking.",
    stats: [{ val: "15k+", label: "questions" }, { val: "200+", label: "modules" }],
    tag: "#AI #LEARNING",
    href: "#",
    bg: "#1a0a2e",  // deep purple
    img: "/project2.png",
  },
  {
    name: "Project Three",
    desc: "Another project you built from scratch.",
    stats: [{ val: "10K+", label: "requests/day" }, { val: "99%", label: "uptime" }],
    tag: "#NEXTJS",
    href: "#",
    bg: "#0a2e1a",  // deep forest green
    img: "/project1.png",
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "0px"]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, borderRadius, background: project.bg }}
      className="sticky top-0 w-full h-screen flex items-center justify-center px-12 py-20"
    >
<div className="flex flex-col px-12 pt-16 pb-8 gap-6">
  



</div>

      <div className="max-w-5xl w-full">
        <p className="text-[9px] tracking-[0.2em] text-white/20 uppercase mb-6">{project.tag}</p>

        <div className="relative w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl" style={{ height: "600px" }}>
          <Image src={project.img} alt={project.name} fill className="object-cover object-top hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/20 pointer-events-none z-10" />

          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)" }}
          />

          <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
            <div>
              <h2 className="text-5xl font-black text-white tracking-tight mb-2">{project.name}</h2>
              <p className="text-sm text-white/50">{project.desc}</p>
            </div>
            <div className="flex gap-12 items-end">
              {project.stats.map((s) => (
                <div key={s.label} className="text-right">
                  <p className="text-4xl font-black text-white tracking-tight">{s.val}</p>
                  <p className="text-xs text-white/30 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
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
  const sectionRadius = useTransform(scrollYProgress, [0, 1], ["32px", "0px"]);

  return (
    <div ref={sectionRef} style={{ minHeight: `${projects.length * 100}vh` }}>

      {/* Heading — sits above, animates on scroll */}
      <div className="flex flex-col items-center justify-center text-center px-12 py-32 gap-4 ">
        <motion.h2
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-6xl font-black tracking-tight text-white"
        >
          What i did so far?
        </motion.h2>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.15 }}
          className="text-sm text-white/30"
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
          background: "#0f0e0f",
        }}
        className="w-full overflow-hidden"
      >
        <div className="flex items-center gap-3 px-12 py-8">
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