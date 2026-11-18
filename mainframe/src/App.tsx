import { useState } from 'react';
import { ActionSheet } from './components/ActionSheet';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ScrubVideo } from './components/ScrubVideo';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import type { SheetTopic } from './types/navigation';

export default function App() {
  const [activeTopic, setActiveTopic] = useState<SheetTopic | null>(null);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden selection:bg-black selection:text-white">
      {/* LOCKED HERO SECTION & FIXED VIDEO BACKGROUND - DO NOT MODIFY */}
      <ScrubVideo />
      <Navbar onSelectTopic={setActiveTopic} />
      <Hero onSelectTopic={setActiveTopic} />

      {/* PORTFOLIO SECTIONS BELOW HERO */}
      <div className="relative z-[2] bg-[#FAF7F5] shadow-[0_-25px_60px_rgba(0,0,0,0.06)]">
        <About onContactClick={() => setActiveTopic('contact')} />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact onOpenSheet={setActiveTopic} />
        <Footer />
      </div>

      {/* ACTION SHEET DIALOG */}
      <ActionSheet
        topic={activeTopic}
        onClose={() => setActiveTopic(null)}
      />
    </div>
  );
}
