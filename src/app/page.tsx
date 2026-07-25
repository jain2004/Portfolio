import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { TransitionBreath } from "@/components/sections/transition-breath";
import { HandshakeAI } from "@/components/sections/handshake-ai";
import { EngineeringMind } from "@/components/sections/engineering-mind";
import { KayoSection } from "@/components/sections/kayo-section";
import { Education } from "@/components/sections/education";
import { Exploring } from "@/components/sections/exploring";
import { MiniProjects } from "@/components/sections/mini-projects";
import { CareerThread } from "@/components/sections/career-thread";
import { TransitionPause } from "@/components/sections/transition-pause";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      {/* ACT 1: IDENTITY */}
      <Hero />

      {/* ACT 2: THE F5 STORY — pinned scroll animation (PRESERVED) */}
      <Experience />

      {/* ACT 3: CINEMATIC BREATH — single statement dissolve */}
      <TransitionBreath />

      {/* ACT 4: HANDSHAKE AI — horizontal scroll pipeline */}
      <HandshakeAI />

      {/* ACT 5: ENGINEERING MIND — philosophy demonstration */}
      <EngineeringMind />

      {/* ACT 6: KAYO.ONE — mini browser mockup */}
      <KayoSection />

      {/* ACT 7: EDUCATION — progression timeline */}
      <Education />

      {/* ACT 8: CURRENTLY EXPLORING — interactive concept list */}
      <Exploring />

      {/* ACT 9: MINI PROJECTS — compact supporting evidence */}
      <MiniProjects />

      {/* ACT 10: CAREER THREAD — SVG path recap */}
      <CareerThread />

      {/* ACT 11: QUIET PAUSE */}
      <TransitionPause />

      {/* ACT 12: LET'S TALK — final contact (PRESERVED) */}
      <Contact />
    </main>
  );
}
