"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function TransitionPause() {
  const container = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.fromTo(text.current,
      { opacity: 0 },
      {
        opacity: 0.5,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        }
      }
    );
  }, { scope: container });

  return (
    <div
      ref={container}
      className="relative w-full h-[50vh] bg-[#0F0F0F] flex items-center justify-center"
      data-theme="dark"
    >
      <p
        ref={text}
        className="text-lg md:text-xl font-light tracking-wide text-white/0 text-center px-6"
      >
        I'm just getting started.
      </p>
    </div>
  );
}
