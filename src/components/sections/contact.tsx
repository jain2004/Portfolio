"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RESUME_DATA } from "@/data/resume";
import { FiArrowUpRight } from "react-icons/fi";

export function Contact() {
  const container = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 60%",
      }
    });
  }, { scope: container });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 40;
      const yPos = (clientY / innerHeight - 0.5) * 40;

      gsap.to(textRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <footer id="contact" ref={container} className="relative w-full py-40 px-4 md:px-12 lg:px-24 bg-[#0F0F0F] text-[#F7F7F2] flex flex-col items-center justify-center text-center overflow-hidden" data-theme="dark">
      
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center">
        <span className="text-white/40 text-xs font-mono tracking-widest uppercase mb-12 block">
          End of Journey
        </span>
        
        <a 
          href={`mailto:${RESUME_DATA.contact.email}`}
          className="group inline-block mb-32"
        >
          <h2 ref={textRef} className="text-[12vw] md:text-[10rem] font-medium tracking-tighter leading-none text-white transition-opacity duration-300 group-hover:opacity-70">
            Let's Talk.
          </h2>
        </a>

        <div className="flex flex-col md:flex-row items-center justify-between w-full border-t border-white/10 pt-12 gap-8">
          
          <div className="flex items-center gap-8">
            {Object.entries(RESUME_DATA.contact).map(([platform, link]) => {
              if (platform === 'phone') return null;

              if (platform === 'email') {
                return (
                  <button 
                    key={platform}
                    onClick={() => {
                      navigator.clipboard.writeText("ishaanj42@gmail.com");
                      const el = document.getElementById("footer-copy-toast");
                      if (el) {
                        el.style.opacity = "1";
                        el.style.transform = "translate(-50%, -150%) scale(1)";
                        setTimeout(() => {
                          el.style.opacity = "0";
                          el.style.transform = "translate(-50%, -150%) scale(0.9)";
                        }, 2000);
                      }
                    }}
                    className="relative flex items-center gap-1 text-sm md:text-base text-white/60 hover:text-white transition-colors uppercase tracking-widest font-mono group"
                  >
                    {platform}
                    <FiArrowUpRight className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    
                    <div 
                      id="footer-copy-toast"
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[150%] bg-white text-black px-3 py-1.5 rounded-full font-mono text-[10px] tracking-widest uppercase shadow-xl opacity-0 scale-90 transition-all duration-300 pointer-events-none z-20 whitespace-nowrap"
                    >
                      Copied!
                    </div>
                  </button>
                );
              }

              return (
                <a 
                  key={platform}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm md:text-base text-white/60 hover:text-white transition-colors uppercase tracking-widest font-mono group"
                >
                  {platform}
                  <FiArrowUpRight className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </a>
              );
            })}
          </div>
          
          <div className="text-xs font-mono text-white/40 uppercase tracking-widest text-center md:text-right">
            <span>© {new Date().getFullYear()} {RESUME_DATA.name}</span>
            <br />
            <span>Built with Intention</span>
          </div>

        </div>
      </div>

    </footer>
  );
}
