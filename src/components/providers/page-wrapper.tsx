"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Force scroll to top and remove hash on reload
    window.history.scrollRestoration = 'manual';
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo(0, 0);

    // Find all sections that declare a theme
    const sections = gsap.utils.toArray<HTMLElement>("[data-theme]");
    
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          const theme = section.getAttribute("data-theme");
          if (theme === "dark") {
            document.body.classList.add("dark-mode");
          } else {
            document.body.classList.remove("dark-mode");
          }
        },
        onEnterBack: () => {
          const theme = section.getAttribute("data-theme");
          if (theme === "dark") {
            document.body.classList.add("dark-mode");
          } else {
            document.body.classList.remove("dark-mode");
          }
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.2, smoothWheel: true }}>
      <div ref={containerRef}>
        {children}
        
        {/* Floating Contact Button */}
        <a 
          href="#contact"
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-32 h-32 rounded-full border border-black/10 dark:border-white/10 mix-blend-difference hover:scale-105 transition-transform duration-300 pointer-events-auto"
        >
          <span className="text-white text-xs font-mono uppercase tracking-widest text-center rotate-[-15deg]">
            Contact<br/>Me
          </span>
        </a>
      </div>
    </ReactLenis>
  );
}
