"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HeroBackground } from "@/components/3d/hero-background";

export function Hero() {
  const container = useRef<HTMLElement>(null);
  const title1 = useRef<HTMLHeadingElement>(null);
  const title2 = useRef<HTMLHeadingElement>(null);
  const title3 = useRef<HTMLHeadingElement>(null);
  const subtext = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Initial Reveal
    tl.from([title1.current, title2.current, title3.current], {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.2
    })
    .from(subtext.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.8");

  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative min-h-screen w-full flex flex-col justify-center px-4 md:px-12 lg:px-24 overflow-hidden"
      data-theme="light"
    >
      <HeroBackground />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto pointer-events-none">
        
        <div className="mb-24 md:mb-32">
          <h1 className="text-[12vw] sm:text-[10vw] md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-[0.85] uppercase text-black">
            <div className="split-line"><div ref={title1}>Building</div></div>
            <div className="split-line text-black/50 ml-[5vw]"><div ref={title2}>Software</div></div>
            <div className="split-line ml-[10vw]"><div ref={title3}>With Intent.</div></div>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="w-full md:w-1/3">
             {/* Decorative element */}
             <div className="h-[1px] w-full bg-black/20 mb-4" />
             <p className="text-sm font-medium uppercase tracking-widest text-black/80">Ishaan Jain — Seattle, WA</p>
          </div>
          <p ref={subtext} className="text-lg md:text-2xl text-black/80 font-light max-w-md leading-relaxed text-right">
            Software engineer focused on building intelligent, scalable systems. Currently pursuing my M.S. in Computer Science at Georgia Tech.
          </p>
        </div>

      </div>
    </section>
  );
}
