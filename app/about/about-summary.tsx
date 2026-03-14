"use client";

export default function AboutSummary() {
  return (
    <div className="bg-[#000000] text-white w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10 w-1/2">
          <span className="text-[9px] tracking-[0.25em] text-white/20 uppercase">about me</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* Content */}
        <div className="w-1/2 flex gap-10 items-start">

          {/* Left — big statement */}
          <div className="flex-1">
            <p
              className="text-4xl font-extrabold leading-[1.2] tracking-tight"
              style={{ color: "rgba(255,255,255,0.07)" }}
            >
              I build things that{" "}
              <span style={{ color: "rgba(255,255,255,0.8)" }}>actually work.</span>{" "}
              A self-taught{" "}
              <span style={{ color: "rgba(255,255,255,0.8)" }}>developer</span>{" "}
              who started before the classroom caught up.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="w-px self-stretch bg-white/5" />

          {/* Right — detail rows */}
          <div className="w-40 flex flex-col gap-5 pt-1">
            {[
              { label: "currently",  val: "CS @ SRMIST" },
              { label: "experience", val: "2 years" },
              { label: "focus",      val: "Clean code, real outcomes" },
              { label: "status",     val: "Open to work" },
            ].map((item) => (
              <div
                key={item.label}
                className="pt-3"
                style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)" }}
              >
                <p className="text-[9px] tracking-[0.15em] text-white/20 uppercase mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-white/45">{item.val}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );    
}