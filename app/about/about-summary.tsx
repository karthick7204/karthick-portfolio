"use client";
import { motion } from "framer-motion";
import { User, Rocket, Target, Briefcase } from "lucide-react";

const infoItems = [
  { label: "Education", val: "CS @ SRMIST", icon: <User className="w-3.5 h-3.5" /> },
  { label: "Experience", val: "2+ Years", icon: <Briefcase className="w-3.5 h-3.5" /> },
  { label: "Philosophy", val: "Clean Code", icon: <Target className="w-3.5 h-3.5" /> },
  { label: "Availability", val: "Open to Work", icon: <Rocket className="w-3.5 h-3.5" /> },
];

export default function AboutSummary() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#010101] overflow-hidden py-32">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl px-8 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          {/* Left Column - Large Statement */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-12 bg-white/20" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">The Narrative</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-10">
                Crafting digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 italic">
                  architectures
                </span> <br />
                that breathe.
              </h2>

              <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed font-light">
                I build things that <span className="text-white/90 font-medium">actually work</span>.
                As a self-taught developer who started before the classroom caught up,
                I focus on the intersection of <span className="text-white/90">performance</span> and <span className="text-white/90">aesthetics</span>.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Info Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                >
                  <div className="p-2.5 w-fit rounded-lg bg-white/[0.03] border border-white/5 mb-4 group-hover:scale-110 transition-transform duration-300 text-white/60">
                    {item.icon}
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-white/70 font-medium tracking-tight">
                    {item.val}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Aesthetic Quote or Small Bio */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.03]"
            >
              <p className="text-xs italic text-white/30 leading-relaxed">
                "Solving complex problems with simple, elegant code is not just a job—it's an art form I've been practicing for over 2 years."
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}