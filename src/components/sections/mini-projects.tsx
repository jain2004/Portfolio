"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RESUME_DATA } from "@/data/resume";

export function MiniProjects() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".mini-p", {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      }
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative w-full py-24 md:py-32 px-4 md:px-12 lg:px-24 bg-[#F2F0EB] border-t border-black/5"
      data-theme="light"
    >
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-mono uppercase tracking-widest text-black/30 mb-12">
          Independent Projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {RESUME_DATA.projects.map((project, i) => (
            <div key={i} className="mini-p group">
              <h3 className="text-xl md:text-2xl font-medium tracking-tight text-black mb-2 group-hover:pl-1 transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-black/50 font-light mb-4 leading-relaxed">
                {project.challenge}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech, j) => (
                  <span key={j} className="text-[10px] font-mono text-black/35 uppercase tracking-widest">
                    {tech}{j < project.tech.length - 1 && <span className="mx-1 text-black/15">·</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
