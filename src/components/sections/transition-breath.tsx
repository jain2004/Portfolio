"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function TransitionBreath() {
  const container = useRef<HTMLDivElement>(null);
  const line1 = useRef<HTMLSpanElement>(null);
  const line2 = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=1500",
        pin: true,
        scrub: 1,
      }
    });

    // Line 1 fades in from nothing
    tl.fromTo(line1.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Hold line 1 visible
    tl.to(line1.current, { opacity: 1, duration: 0.5 });

    // Line 1 fades up and away, line 2 rises in
    tl.to(line1.current, { opacity: 0, y: -40, duration: 0.8 })
      .fromTo(line2.current,
        { opacity: 0, y: 30 },
        { opacity: 0.6, y: 0, duration: 1 },
        "<0.3"
      );

    // Hold, then everything fades
    tl.to(line2.current, { opacity: 0.6, duration: 0.5 });
    tl.to(line2.current, { opacity: 0, duration: 0.5 });

  }, { scope: container });

  return (
    <div
      ref={container}
      className="relative h-screen w-full bg-[#0A0A0A] flex items-center justify-center overflow-hidden"
      data-theme="dark"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,57,70,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span
          ref={line1}
          className="block text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-snug text-white/90 opacity-0"
        >
          That experience changed how I think about software.
        </span>
        <span
          ref={line2}
          className="block text-lg md:text-xl font-light tracking-wide text-white/40 mt-8 opacity-0"
        >
          I kept going.
        </span>
      </div>
    </div>
  );
}
