"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PIPELINE_STEPS = [
  { label: "INPUT", detail: "Real-world pull requests and algorithmic challenges", icon: "→" },
  { label: "PROMPT", detail: "Designed high-fidelity coding prompts for complex SE tasks", icon: "⟨⟩" },
  { label: "REASON", detail: "Evaluated model reasoning on debugging & API integration", icon: "◇" },
  { label: "TEST", detail: "Built fail-to-pass test suites against production code", icon: "⊡" },
  { label: "EVALUATE", detail: "Measured strict constraint adherence and accuracy", icon: "≡" },
  { label: "IMPROVE", detail: "Iterated to improve model performance on SE workloads", icon: "↑" },
];

export function HandshakeAI() {
  const container = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!track.current || !container.current) return;

    const totalWidth = track.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth;

    gsap.to(track.current, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: () => `+=${scrollDistance + viewportWidth}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      }
    });
  }, { scope: container });

  return (
    <div ref={container} className="relative h-screen w-full overflow-hidden bg-[#F2F0EB]" data-theme="light">
      
      {/* Horizontal Track */}
      <div ref={track} className="flex items-stretch h-screen will-change-transform">
        
        {/* ===== PANEL 1: Opening ===== */}
        <div className="flex-shrink-0 w-screen h-full flex flex-col justify-center px-6 md:px-16 lg:px-32">
          <p className="text-xs font-mono uppercase tracking-widest text-black/30 mb-6">
            Professional Experience — 02
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-medium tracking-tighter leading-[0.85] text-black mb-10">
            Handshake<br />AI.
          </h2>
          <p className="text-lg md:text-xl text-black/60 font-light max-w-lg leading-relaxed mb-2">
            AI Training Contractor
          </p>
          <p className="text-sm font-mono text-black/30">Jan 2026 – May 2026</p>
          
          <div className="mt-16 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-black/20" />
            <span className="text-xs font-mono uppercase tracking-widest text-black/30">keep scrolling →</span>
          </div>
        </div>

        {/* ===== PANEL 2: The Story ===== */}
        <div className="flex-shrink-0 w-screen h-full flex items-center px-6 md:px-16 lg:px-32">
          <p className="text-3xl md:text-5xl font-light tracking-tight text-black/80 max-w-3xl leading-snug">
            Evaluated and trained proprietary Large Language Models on complex software engineering workloads within highly secure, confidential environments.
          </p>
        </div>

        {/* ===== PANELS 3-8: Pipeline Steps ===== */}
        {PIPELINE_STEPS.map((step, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[70vw] md:w-[55vw] lg:w-[40vw] h-full flex items-center px-8 md:px-16 relative"
          >
            {/* Vertical separator */}
            <div className="absolute left-0 top-[20%] bottom-[20%] w-[1px] bg-black/5" />
            
            <div className="relative w-full">
              {/* Large step number */}
              <span className="text-[7rem] md:text-[10rem] font-bold tracking-tighter text-black/[0.03] absolute -top-16 -left-2 select-none pointer-events-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <span className="text-2xl md:text-3xl text-black/20 mb-6 block font-mono">
                {step.icon}
              </span>

              {/* Content */}
              <h3 className="text-3xl md:text-5xl font-medium tracking-tighter text-black mb-4">
                {step.label}
              </h3>
              <div className="w-12 h-[2px] bg-black/10 mb-6" />
              <p className="text-base md:text-lg text-black/50 font-light max-w-sm leading-relaxed">
                {step.detail}
              </p>
            </div>
          </div>
        ))}

        {/* ===== PANEL 9: Closing ===== */}
        <div className="flex-shrink-0 w-screen h-full flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 text-center">
          <p className="text-3xl md:text-5xl font-light tracking-tight text-black/80 max-w-2xl leading-snug">
            A natural continuation of my interest in building systems.
          </p>
        </div>

      </div>
    </div>
  );
}
