"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MILESTONES = [
  { year: "2022", label: "Seattle University", sub: "Began studying Computer Science" },
  { year: "2024", label: "F5", sub: "Built AI-powered developer tooling" },
  { year: "2025", label: "Graduation", sub: "B.S. Computer Science" },
  { year: "2025", label: "Kayo.one", sub: "Shipped production software" },
  { year: "2026", label: "Handshake AI", sub: "Trained proprietary LLMs" },
  { year: "2026–", label: "Georgia Tech", sub: "M.S. Computer Science" },
  { year: "→", label: "What's Next", sub: "" },
];

export function CareerThread() {
  const container = useRef<HTMLDivElement>(null);
  const threadLine = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Grow the thread line from 0 to 100% height
    gsap.fromTo(threadLine.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
          end: "bottom 50%",
          scrub: 1,
        }
      }
    );

    // Stagger each milestone in sequence
    MILESTONES.forEach((_, i) => {
      gsap.fromTo(`.ct-milestone-${i}`,
        { opacity: 0, y: 25 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `.ct-milestone-${i}`,
            start: "top 75%",
          }
        }
      );
    });

  }, { scope: container });

  return (
    <div
      ref={container}
      className="relative w-full py-32 md:py-48 px-4 md:px-12 lg:px-24 bg-[#0F0F0F] overflow-hidden"
      data-theme="dark"
    >
      {/* Vertical thread line */}
      <div className="absolute left-1/2 top-32 bottom-32 w-[1px] -translate-x-1/2 overflow-hidden">
        <div
          ref={threadLine}
          className="w-full h-full origin-top bg-gradient-to-b from-white/30 via-white/15 to-white/5"
          style={{ transform: "scaleY(0)" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        <div className="text-center mb-20 md:mb-28">
          <p className="text-xs font-mono uppercase tracking-widest text-white/25">The Journey So Far</p>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {MILESTONES.map((m, i) => {
            const isLeft = i % 2 === 0;
            const isLast = i === MILESTONES.length - 1;
            return (
              <div
                key={i}
                className={`ct-milestone-${i} relative flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={`w-[45%] ${isLeft ? "text-right pr-8 md:pr-16" : "text-left pl-8 md:pl-16"}`}>
                  <span className="text-xs font-mono text-white/20 tracking-widest uppercase block mb-3">
                    {m.year}
                  </span>
                  <h3 className={`${isLast ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"} font-medium tracking-tight text-white mb-1`}>
                    {m.label}
                  </h3>
                  {m.sub && (
                    <p className="text-sm md:text-base text-white/35 font-light">{m.sub}</p>
                  )}
                </div>

                {/* Center node */}
                <div className="w-[10%] flex items-center justify-center relative">
                  <div className={`w-2.5 h-2.5 rounded-full ${isLast ? "bg-[#E63946]" : "bg-white/25"} relative z-10`} />
                  {isLast && (
                    <div className="absolute w-5 h-5 rounded-full bg-[#E63946]/20 animate-ping" />
                  )}
                </div>

                {/* Spacer */}
                <div className="w-[45%]" />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
