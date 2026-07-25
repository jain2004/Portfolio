"use client";

import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const INTERESTS = [
  { label: "Artificial Intelligence", size: "text-5xl md:text-6xl" },
  { label: "LLMs", size: "text-4xl md:text-5xl" },
  { label: "Full-Stack Engineering", size: "text-4xl md:text-5xl" },
  { label: "Backend Systems", size: "text-3xl md:text-4xl" },
  { label: "Developer Tools", size: "text-3xl md:text-4xl" },
  { label: "Distributed Systems", size: "text-2xl md:text-3xl" },
  { label: "System Design", size: "text-2xl md:text-3xl" },
];

export function Exploring() {
  const container = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useGSAP(() => {
    gsap.from(".explore-item", {
      opacity: 0,
      x: (i: number) => (i % 2 === 0 ? -40 : 40),
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 60%",
      }
    });
  }, { scope: container });

  const handleMouseEnter = useCallback((index: number) => {
    setActiveIndex(index);
    // Magnetically scale the hovered item
    gsap.to(`.explore-item-${index}`, {
      scale: 1.05,
      duration: 0.4,
      ease: "power2.out"
    });
    // Dim all others
    INTERESTS.forEach((_, i) => {
      if (i !== index) {
        gsap.to(`.explore-item-${i}`, { opacity: 0.15, duration: 0.3 });
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveIndex(null);
    INTERESTS.forEach((_, i) => {
      gsap.to(`.explore-item-${i}`, { opacity: 1, scale: 1, duration: 0.4 });
    });
  }, []);

  return (
    <section
      ref={container}
      className="relative w-full py-32 md:py-48 px-4 md:px-12 lg:px-24 bg-[#F2F0EB]"
      data-theme="light"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 md:mb-24">
          <p className="text-xs font-mono uppercase tracking-widest text-black/30 mb-4">Currently Exploring</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black">
            What excites me right now.
          </h2>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          {INTERESTS.map((interest, i) => (
            <div
              key={i}
              className={`explore-item explore-item-${i} group cursor-default py-4 md:py-6 border-b border-black/5 flex items-baseline justify-between transition-colors duration-300`}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <span className={`${interest.size} font-medium tracking-tighter text-black transition-all duration-300 ${activeIndex === i ? "pl-4" : "pl-0"}`}>
                {interest.label}
              </span>
              <span className={`text-xs font-mono uppercase tracking-widest transition-opacity duration-300 ${activeIndex === i ? "opacity-100 text-black/40" : "opacity-0"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
