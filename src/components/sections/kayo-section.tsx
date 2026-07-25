"use client";

import { useRef } from "react";
import Image from "next/image";
import kayoImg from "../../../public/images/kayo.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function KayoSection() {
  const container = useRef<HTMLElement>(null);
  const browserRef = useRef<HTMLAnchorElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // The browser mockup scales up elegantly as it enters view
    gsap.fromTo(browserRef.current,
      { opacity: 0, y: 80, scale: 0.9 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 65%",
        }
      }
    );
  }, { scope: container });

  const handleMouseEnter = () => {
    gsap.to(browserRef.current, { scale: 1.02, duration: 0.6, ease: "power3.out" });
    gsap.to(imageContainer.current, { scale: 1.05, duration: 0.8, ease: "power2.out" });
    gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(browserRef.current, { scale: 1, duration: 0.6, ease: "power3.out" });
    gsap.to(imageContainer.current, { scale: 1, duration: 0.8, ease: "power2.out" });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });
  };

  return (
    <section
      ref={container}
      className="relative w-full py-32 md:py-48 px-4 md:px-12 lg:px-24 bg-[#F7F7F2]"
      data-theme="light"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-black/30 mb-4">
              Professional Experience — 03
            </p>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-black">
              Kayo.one
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-black/60 font-light text-lg">Software Developer</p>
            <p className="text-xs font-mono text-black/30 mt-1">Oct 2025 – Dec 2025</p>
          </div>
        </div>

        {/* Interactive Mini Browser Mockup */}
        <a
          ref={browserRef}
          href="https://kayo.one"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full rounded-2xl overflow-hidden border border-black/[0.08] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] cursor-none group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          
          {/* Browser Chrome */}
          <div className="relative z-20 flex items-center gap-2 px-5 py-3.5 bg-[#EEEEE9] border-b border-black/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 mx-6">
              <div className="bg-white rounded-lg px-4 py-1.5 text-xs font-mono text-black/40 text-center max-w-xs mx-auto border border-black/5">
                kayo.one
              </div>
            </div>
          </div>

          {/* Actual Screenshot Content */}
          <div className="relative w-full overflow-hidden bg-white">
            <div ref={imageContainer} className="relative w-full origin-top">
              <Image
                src={kayoImg}
                alt="Kayo.one website screenshot"
                className="w-full h-auto block object-cover object-top"
                priority
              />
            </div>
            
            {/* Hover Overlay */}
            <div
              ref={overlayRef}
              className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 z-10 pointer-events-none"
            >
              <div className="bg-white text-black px-6 py-3 rounded-full font-mono text-sm tracking-widest uppercase flex items-center gap-2 shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                Visit Site <FiArrowUpRight className="text-lg" />
              </div>
            </div>
          </div>
        </a>

        {/* Description */}
        <div className="mt-14 md:mt-20 max-w-2xl">
          <p className="text-xl md:text-2xl text-black/80 font-light leading-relaxed">
            Shipped a production web application to drive customer acquisition. Built responsive components, owned deployment, and iterated closely with stakeholders.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {['React.js', 'JavaScript', 'HTML/CSS', 'Deployment', 'Responsive UI'].map(tech => (
              <span key={tech} className="text-xs font-mono text-black/40 uppercase tracking-widest bg-black/[0.03] px-3 py-1.5 rounded-lg border border-black/[0.04]">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
