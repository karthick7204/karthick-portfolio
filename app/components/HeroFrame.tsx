"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Plus, X, Minus } from "lucide-react";

export default function HeroFrame() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center pt-24 px-6 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[160px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl aspect-[5/4] md:aspect-[16/10] rounded-[2.5rem] border border-white/10 border-t-white/30 bg-[#080808]/80 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
      >
        {/* Glossy Reflection Layer */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02] relative z-10">
          <div className="flex gap-2 group cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] flex items-center justify-center transition-colors hover:brightness-110">
              <X className="w-2 h-2 text-black/80 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e] flex items-center justify-center transition-colors hover:brightness-110">
              <Minus className="w-2 h-2 text-black/80 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="w-3 h-3 rounded-full bg-[#28c840] flex items-center justify-center transition-colors hover:brightness-110">
              <Plus className="w-2 h-2 text-black/80 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <Plus className="w-5 h-5 text-white/10" />
        </div>

        {/* Content Area */}
        <div className="flex-1 relative flex flex-col items-start justify-center p-8 md:px-20 md:py-16 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[1.75rem] md:text-5xl lg:text-[3.5rem] font-medium text-white tracking-tight leading-[1.2] md:leading-[1.1] max-w-5xl"
          >
            I build products powered by AI, <br />
            automation & seamless user <span className="font-serif italic text-white/80">experiences.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 md:mt-16 max-w-xs md:max-w-sm"
          >
            <p className="text-[10px] md:text-lg text-white font-medium leading-tight">Fullstack Developer @ SRMIST.</p>
            <p className="text-[10px] md:text-lg text-white/70 leading-tight">Based in India. Focus on AI & Web.</p>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
