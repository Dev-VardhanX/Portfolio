import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, MapPin, Compass, Terminal, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutProps {
  onContactClick?: () => void;
}

export function About({ onContactClick }: AboutProps) {
  const { profile } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'philosophy' | 'focus' | 'stack'>('philosophy');

  return (
    <section
      id="about"
      className="relative w-full py-28 md:py-36 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden bg-[#FAF7F5] border-t border-black/[0.06]"
    >
      {/* Subtle decorative ambient backdrop */}
      <div
        aria-hidden="true"
        className="absolute top-10 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FCEEE9]/60 to-[#F7E5E0]/20 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#E8F4F0]/40 to-[#FAF7F5]/10 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Index & Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-14 pb-5 border-b border-black/[0.08]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center text-xs font-mono tracking-widest text-black/60 bg-black/[0.04] px-3 py-1 rounded-full uppercase">
              01 / Introduction
            </span>
            <span className="text-sm font-medium text-black/40">·</span>
            <span className="text-sm tracking-wide text-black/70 font-mono">
              About & Direction
            </span>
          </div>

          <div className="inline-flex items-center gap-2.5 bg-white border border-black/10 px-4 py-1.5 rounded-full shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-black/80 tracking-tight">
              {profile.status}
            </span>
          </div>
        </div>

        {/* Large Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-5xl"
        >
          <h2 className="font-heading text-[clamp(32px,5.5vw,68px)] leading-[1.08] tracking-[-0.03em] text-[#181716]">
            Architecting <span className="italic font-normal font-serif text-black/75">tactile</span> digital
            instruments where visual precision meets <span className="underline decoration-black/20 underline-offset-8">high-velocity code</span>.
          </h2>
        </motion.div>

        {/* Main Grid: Asymmetrical Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Left Column: Portrait & Identity Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Visual Portrait Card */}
            <div className="group relative rounded-3xl overflow-hidden bg-white p-3.5 border border-black/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#F4EBE6]">
                <img
                  src={profile.avatarPeach}
                  alt={profile.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                
                {/* Floating overlay tag */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/10 flex items-center gap-2 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-black/70" />
                  <span className="text-xs font-mono font-medium text-black/80">
                    Design Engineer
                  </span>
                </div>

                {/* Bottom pill tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-black/10 shadow-sm flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-black tracking-tight leading-none mb-1">
                      {profile.name}
                    </h3>
                    <p className="text-xs text-black/60 font-mono">
                      {profile.handle} · Creative Tech
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-black/70 bg-black/[0.04] px-3 py-1.5 rounded-lg">
                    <MapPin className="w-3 h-3 text-black/60" />
                    <span>India ⇄ Global</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Interactive Pillars Card */}
            <div className="rounded-2xl bg-white/80 backdrop-blur-xs p-6 border border-black/[0.07] shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-black/50">
                  Core Foundations
                </span>
                <span className="text-xs font-mono text-black/40">01 / 03</span>
              </div>
              <p className="text-[15px] leading-relaxed text-black/80 font-normal italic mb-4">
                &ldquo;{profile.leadQuote}&rdquo;
              </p>
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-black/[0.06]">
                <div className="flex items-center gap-2 text-xs text-black/70">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero-Shift Layouts</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-black/70">
                  <Terminal className="w-4 h-4 text-black/60 shrink-0" />
                  <span>Strict TypeScript</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-black/70">
                  <Compass className="w-4 h-4 text-black/60 shrink-0" />
                  <span>Spatial Ergonomics</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-black/70">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Kinetic Typography</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Tabs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Bio Narrative */}
            <div className="space-y-6 text-[17px] sm:text-[19px] leading-[1.65] text-black/80 font-normal">
              {profile.bio.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? 'text-black font-medium text-[19px] sm:text-[21px]' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Interactive Tabbed Detail Card */}
            <div className="rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
              {/* Tab Switcher */}
              <div className="flex items-center gap-2 p-1.5 bg-[#FAF7F5] rounded-xl mb-6 w-fit border border-black/[0.05]">
                <button
                  type="button"
                  onClick={() => setActiveTab('philosophy')}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === 'philosophy'
                      ? 'bg-white text-black shadow-xs'
                      : 'text-black/60 hover:text-black'
                  }`}
                >
                  Design Philosophy
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('focus')}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === 'focus'
                      ? 'bg-white text-black shadow-xs'
                      : 'text-black/60 hover:text-black'
                  }`}
                >
                  Current Research
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('stack')}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === 'stack'
                      ? 'bg-white text-black shadow-xs'
                      : 'text-black/60 hover:text-black'
                  }`}
                >
                  Engineering Stack
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'philosophy' && (
                <div className="space-y-4">
                  <h4 className="font-heading text-xl text-black">
                    The intersection of form, latency & emotional resonance.
                  </h4>
                  <p className="text-[15px] leading-relaxed text-black/70">
                    A great interface shouldn't feel like navigating a computer program. It should respond with organic continuity—like sliding your fingers across physical paper or turning a precision knob. Every micro-interaction is an opportunity to communicate state, build confidence, and delight the human behind the screen.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Zero-Latency Scrubbing', 'Perceptual Pacing', 'Fluid Grids', 'Micro-haptics'].map((tag) => (
                      <span key={tag} className="text-xs font-mono bg-[#FAF7F5] px-3 py-1 rounded-md text-black/70 border border-black/[0.06]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'focus' && (
                <div className="space-y-4">
                  <h4 className="font-heading text-xl text-black">
                    Conversational agent surfaces & spatial motion pipelines.
                  </h4>
                  <p className="text-[15px] leading-relaxed text-black/70">
                    Currently pushing the frontiers of how AI interfaces communicate. Moving beyond dull chat bubbles into spatial canvases, pointer-driven scrubbing, and adaptive response layers (such as Mainframe&apos;s A.R.I.A.) that blend generative intelligence into editorial workflows.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Google Gemini SDK', 'Multimodal Synthesis', 'Canvas 2D Graphs', 'State Sync'].map((tag) => (
                      <span key={tag} className="text-xs font-mono bg-[#FAF7F5] px-3 py-1 rounded-md text-black/70 border border-black/[0.06]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'stack' && (
                <div className="space-y-4">
                  <h4 className="font-heading text-xl text-black">
                    Battle-tested modern toolchain built for speed and longevity.
                  </h4>
                  <p className="text-[15px] leading-relaxed text-black/70">
                    Built natively on React 19, strict TypeScript, Tailwind CSS v4, Motion (Framer), Vite, Node.js, and WebGL. Every tool is selected to maximize runtime performance, developer happiness, and long-term codebase hygiene.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['React 19', 'TypeScript', 'Tailwind v4', 'Motion', 'Node.js', 'Vite', 'PostgreSQL'].map((tag) => (
                      <span key={tag} className="text-xs font-mono bg-black text-white px-3 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Metrics & Stat Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white p-5 border border-black/[0.07] shadow-xs flex flex-col justify-between"
                >
                  <span className="font-heading text-3xl sm:text-4xl text-black tracking-tight font-semibold">
                    {stat.value}
                  </span>
                  <span className="text-xs text-black/55 font-mono mt-2 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA action bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-black/85 transition-all duration-200 cursor-pointer shadow-sm group"
              >
                <span>Explore Selected Works</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 bg-white text-black border border-black/15 px-6 py-3.5 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-200 cursor-pointer"
              >
                <span>Start a Conversation</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
