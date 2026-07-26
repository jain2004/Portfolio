"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Education() {
  const container = useRef<HTMLDivElement>(null);
  const progressLine = useRef<HTMLDivElement>(null);
  const undergrad = useRef<HTMLDivElement>(null);
  const arrow = useRef<HTMLDivElement>(null);
  const grad = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Start with undergrad visible immediately
    gsap.set(undergrad.current, { opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: 1,
      }
    });

    // Line starts growing, undergrad is already visible
    tl.fromTo(progressLine.current,
      { scaleY: 0 },
      { scaleY: 0.4, duration: 1 }
    );

    // Hold undergrad visible for a beat
    tl.to({}, { duration: 0.5 });

    // Arrow appears
    tl.fromTo(arrow.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

    // Line continues growing
    tl.to(progressLine.current, { scaleY: 0.7, duration: 0.5 });

    // Graduate appears on the right
    tl.fromTo(grad.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 1 }
    );

    // Line reaches full
    tl.to(progressLine.current, { scaleY: 1, duration: 0.5 }, "<0.3");

    // Undergrad fades to show progression
    tl.to(undergrad.current, { opacity: 0.35, duration: 0.5 }, "<0.3");

    // Hold everything visible
    tl.to({}, { duration: 1 });

  }, { scope: container });

  return (
    <div
      ref={container}
      className="relative h-screen w-full bg-[#0F0F0F] flex items-center justify-center overflow-hidden"
      data-theme="dark"
    >
      {/* Vertical Progress Line */}
      <div className="absolute left-1/2 top-[10%] bottom-[10%] w-[1px] -translate-x-1/2">
        <div
          ref={progressLine}
          className="w-full h-full bg-gradient-to-b from-white/40 via-white/20 to-white/5 origin-top"
          style={{ transform: "scaleY(0)" }}
        />
      </div>

      {/* Undergrad — Left Side — starts visible */}
      <div
        ref={undergrad}
        className="absolute left-[8%] md:left-[15%] top-1/2 -translate-y-1/2"
      >
        <p className="text-xs font-mono uppercase tracking-widest text-white/30 mb-4">2022 – 2025</p>
        <h3 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-3">
          Seattle University
        </h3>
        <p className="text-lg md:text-xl text-white/60 font-light">
          B.S. Computer Science
        </p>
        <p className="text-sm text-white/30 mt-2 italic">GPA: 3.5 — Dean's List, President's List</p>
      </div>

      {/* Arrow / Transition */}
      <div
        ref={arrow}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 text-center"
      >
        <span className="text-xl md:text-2xl font-light text-white/40 tracking-wider">
          still learning →
        </span>
      </div>

      {/* Graduate — Right Side */}
      <div
        ref={grad}
        className="absolute right-[8%] md:right-[15%] top-1/2 -translate-y-1/2 text-right opacity-0"
      >
        <p className="text-xs font-mono uppercase tracking-widest text-white/30 mb-4">2026 – December 2027</p>
        <h3 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-3">
          Georgia Tech
        </h3>
        <p className="text-lg md:text-xl text-white/60 font-light">
          M.S. Computer Science
        </p>
        <p className="text-sm text-white/30 mt-2">AI Specialization</p>
      </div>

      {/* Corner label */}
      <div className="absolute bottom-12 left-4 md:left-12 lg:left-24 text-xs font-mono uppercase tracking-widest text-white/20">
        Academic Progression
      </div>
    </div>
  );
}
