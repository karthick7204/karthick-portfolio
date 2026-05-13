"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 text-white bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
      {/* Left: Name & Title */}
      <div className="flex flex-col">
        <span className="font-bold text-lg tracking-tight">Karthick Raja</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Fullstack Developer</span>
      </div>



      {/* Right: Links */}
      <div className="flex items-center gap-8">
        <a href="https://github.com/karthick7204" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-medium text-white/60 hover:text-white transition-all">
          GitHub <ArrowUpRight className="w-3 h-3" />
        </a>
        <a href="https://www.linkedin.com/in/a-karthick-raja/" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-medium text-white/60 hover:text-white transition-all">
          LinkedIn <ArrowUpRight className="w-3 h-3" />
        </a>
        <a href="https://drive.google.com/file/d/1cjAuGr1ktIdoJdZy5iTU9iAazcuKXNg7/view?usp=drivesdk" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-medium text-white/60 hover:text-white transition-all">
          Resume <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </nav>
  );
}
