"use client";
import { useEffect, useRef } from "react";

export default function GlowScrollbar() {
  const dotRightRef = useRef<HTMLDivElement>(null);
  const trailRightRef = useRef<HTMLDivElement>(null);
  const trackRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      const track = trackRightRef.current;
      const dot = dotRightRef.current;
      const trail = trailRightRef.current;

      if (!track || !dot || !trail) return;
      const dotY = ratio * (track.clientHeight - 6);
      dot.style.top = `${dotY}px`;
      trail.style.height = `${dotY + 6}px`;
    };

    window.addEventListener("scroll", update);
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const Track = ({
    trackRef,
    dotRef,
    trailRef,
    side,
  }: {
    trackRef: any;
    dotRef: any;
    trailRef: any;
    side: "left" | "right";
  }) => (
    <div
      ref={trackRef}
      className={`fixed top-4 bottom-4 w-[2px] z-50 ${
        side === "left" ? "left-4" : "right-4"
      }`}
      style={{ background: "transparent" }} // ← no track line
    >
      {/* Trail — faded glow only, no solid line */}
      <div
        ref={trailRef}
        className="absolute top-0 left-0 w-full"
        style={{
          height: 0,
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.25) 90%, transparent 100%)",
        }}
      />

      {/* Glowing dot only */}
      <div
        ref={dotRef}
        className="absolute left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-white"
        style={{
          top: 0,
          boxShadow:
            "0 0 4px 2px rgba(255,255,255,1), 0 0 12px 5px rgba(255,255,255,0.7), 0 0 28px 10px rgba(255,255,255,0.3)",
        }}
      />
    </div>
  );

  return (
    <>
      <style>{`
        html { scrollbar-width: none; }
        html::-webkit-scrollbar { display: none; }
      `}</style>

      <Track trackRef={trackRightRef} dotRef={dotRightRef} trailRef={trailRightRef} side="right" />
    </>
  );
}