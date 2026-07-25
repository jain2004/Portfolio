"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function EngineeringMind() {
  const container = useRef<HTMLDivElement>(null);
  const step1 = useRef<HTMLSpanElement>(null);
  const step2 = useRef<HTMLSpanElement>(null);
  const step3 = useRef<HTMLSpanElement>(null);
  const step4 = useRef<HTMLSpanElement>(null);
  const noiseLayer = useRef<HTMLDivElement>(null);
  const gridLayer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Set initial states
    gsap.set([step1.current, step2.current, step3.current, step4.current], { 
      opacity: 0, 
      position: "absolute",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=4000",
        pin: true,
        scrub: 1,
      }
    });

    // --- ACT 1: "Start with the problem." ---
    tl.to(step1.current, { opacity: 1, duration: 1 });
    tl.to(step1.current, { opacity: 1, duration: 0.5 }); // hold
    tl.to(noiseLayer.current, { opacity: 0.12, scale: 1.5, duration: 1 }, "<");
    tl.to(step1.current, { opacity: 0, scale: 0.95, filter: "blur(4px)", duration: 0.6 });

    // --- ACT 2: "Not the technology." ---
    tl.to(gridLayer.current, { opacity: 0.08, duration: 0.5 });
    tl.to(step2.current, { opacity: 1, y: 0, duration: 1 });
    tl.to(step2.current, { opacity: 1, duration: 0.5 }); // hold
    tl.to([step2.current, gridLayer.current], { opacity: 0, duration: 0.6 });
    tl.to(noiseLayer.current, { opacity: 0, duration: 0.5 }, "<");

    // --- ACT 3: "Make it simple." ---
    tl.set(step3.current, { letterSpacing: "0.3em" });
    tl.to(step3.current, { opacity: 1, letterSpacing: "0em", duration: 1.2 });
    tl.to(step3.current, { opacity: 1, duration: 0.5 }); // hold
    tl.to(step3.current, { opacity: 0, y: -20, duration: 0.6 });

    // --- ACT 4: "Then make it fast." --- snaps in
    tl.set(step4.current, { x: "-60%", xPercent: 0 });
    tl.to(step4.current, { opacity: 1, x: "-50%", xPercent: 0, duration: 0.12, ease: "power4.out" });
    tl.to(step4.current, { opacity: 1, duration: 1 }); // hold
    tl.to(step4.current, { opacity: 0, duration: 0.5 });

  }, { scope: container });

  return (
    <div
      ref={container}
      className="relative h-screen w-full bg-[#0F0F0F] overflow-hidden"
      data-theme="dark"
    >
      {/* Noise Layer — represents chaos/complexity */}
      <div
        ref={noiseLayer}
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Grid Layer — represents technology */}
      <div
        ref={gridLayer}
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Text Steps — positioned absolutely, centered */}
      <span ref={step1} className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white whitespace-nowrap">
        Start with the problem.
      </span>
      <span ref={step2} className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white/60 whitespace-nowrap">
        Not the technology.
      </span>
      <span ref={step3} className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white whitespace-nowrap">
        Make it simple.
      </span>
      <span ref={step4} className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-[#E63946] whitespace-nowrap">
        Then make it fast.
      </span>

      {/* Corner label */}
      <div className="absolute bottom-12 right-4 md:right-12 lg:right-24 text-xs font-mono uppercase tracking-widest text-white/20">
        How I Think
      </div>
    </div>
  );
}
