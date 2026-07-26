"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Experience() {
  const container = useRef<HTMLElement>(null);
  const f5Section = useRef<HTMLDivElement>(null);
  const timeContainer = useRef<HTMLDivElement>(null);
  const hourText = useRef<HTMLDivElement>(null);
  const secText = useRef<HTMLDivElement>(null);
  const accuracyText = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // F5 Pinned Animation Sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: f5Section.current,
        start: "top top",
        end: "+=3000", // Long scroll for dramatic effect
        pin: true,
        scrub: 1,
      }
    });

    // 1. Fade in the "3 HOURS" text
    tl.fromTo(hourText.current, 
      { opacity: 0, scale: 0.8, filter: "blur(10px)" }, 
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1 }
    );
    
    // 2. Crossfade 3 HOURS to < 30 SECONDS
    tl.to(hourText.current, { opacity: 0, scale: 1.5, filter: "blur(20px)", duration: 1 })
      .fromTo(secText.current, 
        { opacity: 0, scale: 0.8, filter: "blur(10px)", display: "none" }, 
        { opacity: 1, scale: 1, filter: "blur(0px)", display: "block", duration: 1 },
        "<" // play at same time
      );

    // 3. Fade out time, bring in "80% Accuracy" and context
    tl.to(secText.current, { opacity: 0, y: -50, duration: 1 })
      .fromTo(accuracyText.current, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1 }
      );

  }, { scope: container });

  return (
    <section ref={container} className="relative w-full">
      
      {/* --------------------
          SCENE: F5 (DARK)
          -------------------- */}
      <div 
        ref={f5Section} 
        className="relative h-screen w-full bg-[#0A0A0A] text-[#F7F7F2] flex flex-col justify-center overflow-hidden"
        data-theme="dark"
      >
        <div className="absolute top-12 left-4 md:left-12 lg:left-24 text-xs font-mono uppercase tracking-widest text-white/40">
          Professional Experience — 01
        </div>
        
        {/* Massive Animated Text Container */}
        <div ref={timeContainer} className="relative w-full h-[50vh] flex items-center justify-center">
          
          <div ref={hourText} className="absolute flex flex-col items-center">
            <span className="text-xl md:text-3xl font-light text-white/50 tracking-widest uppercase mb-4">From</span>
            <span className="text-[15vw] md:text-[12rem] font-medium tracking-tighter leading-none text-white whitespace-nowrap">
              3 HOURS
            </span>
          </div>
          
          <div ref={secText} className="absolute flex flex-col items-center hidden">
            <span className="text-xl md:text-3xl font-light text-[#E63946]/70 tracking-widest uppercase mb-4">Down To</span>
            <span className="text-[10vw] md:text-[9rem] font-medium tracking-tighter leading-none text-[#E63946] whitespace-nowrap">
              &lt; 30 SECONDS
            </span>
          </div>

          <div ref={accuracyText} className="absolute flex flex-col items-center text-center px-4">
            <span className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6">
              80%+ ACCURACY
            </span>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed">
              Led the engineering of an AI-powered pipeline at <strong className="text-white">F5</strong> that drastically reduced heuristic creation time using only 5% of traditional context.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {['Python', 'Flask', 'React.js', 'LLMs', 'Azure DevOps'].map(tech => (
                <span key={tech} className="px-4 py-2 border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest text-white/60">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
