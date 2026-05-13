import React from "react";

export default function Resume() {
  return (
  
      <a
        href="https://drive.google.com/file/d/1cjAuGr1ktIdoJdZy5iTU9iAazcuKXNg7/view?usp=drivesdk"
        target="_blank"
        rel="noreferrer"
        className="absolute right-96 top-1/9 translate-y-96 group flex items-center gap-2"
      >
        <div className="w-10 h-10 border border-white rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-700 cursor-pointer">
          <span className="text-3xl font-bold leading-none">↗</span>
        </div>
        <span className="openSans.className font-bold max-w-0 whitespace-nowrap text-white group-hover:mr-2 transition-all duration-400">
          Resume
        </span>
      </a>

  
  );
}