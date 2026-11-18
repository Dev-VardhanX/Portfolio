import { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Experience() {
  const { experiences } = PORTFOLIO_DATA;
  const [selectedId, setSelectedId] = useState<string>(experiences[0].id);

  const activeExp = experiences.find((e) => e.id === selectedId) || experiences[0];

  return (
    <section
      id="experience"
      className="relative w-full py-28 md:py-36 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden bg-[#FAF7F5] border-t border-black/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-14 pb-5 border-b border-black/[0.08]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center text-xs font-mono tracking-widest text-black/60 bg-black/[0.04] px-3 py-1 rounded-full uppercase">
              02 / Trajectory
            </span>
            <span className="text-sm font-medium text-black/40">·</span>
            <span className="text-sm tracking-wide text-black/70 font-mono">
              Professional Experience
            </span>
          </div>

          <div className="text-xs font-mono text-black/50">
            2021 — PRESENT
          </div>
        </div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20 max-w-3xl"
        >
          <h2 className="font-heading text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.03em] text-[#181716] mb-4">
            Forged through relentless shipping and high-fidelity craft.
          </h2>
          <p className="text-lg text-black/65 font-normal">
            A history of zero-to-one product initiatives, design engineering leadership, and high-impact front-end architecture.
          </p>
        </motion.div>

        {/* Desktop Split View: Timeline Selector on Left, Deep Dive on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Role Selector (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {experiences.map((exp, index) => {
              const isSelected = exp.id === selectedId;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedId(exp.id)}
                    className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative group ${
                      isSelected
                        ? 'bg-white border-black/20 shadow-[0_10px_30px_rgba(0,0,0,0.06)] scale-[1.01]'
                        : 'bg-white/60 border-black/[0.06] hover:bg-white hover:border-black/15 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-medium text-black/50 tracking-wider">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-black tracking-tight mb-1 group-hover:text-black">
                      {exp.role}
                    </h3>

                    <div className="flex items-center justify-between text-sm text-black/60">
                      <span>{exp.company}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isSelected ? 'rotate-90 lg:rotate-0 translate-x-1 text-black' : 'text-black/30'
                        }`}
                      />
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Detailed Experience Card (7 cols) */}
          <motion.div
            key={activeExp.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-black/[0.09] shadow-[0_15px_40px_rgba(0,0,0,0.04)]"
          >
            {/* Header info */}
            <div className="border-b border-black/[0.08] pb-6 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span className="inline-flex items-center gap-2 text-xs font-mono text-black/60 bg-[#FAF7F5] px-3 py-1 rounded-full border border-black/[0.06]">
                  <Briefcase className="w-3.5 h-3.5 text-black/60" />
                  {activeExp.type}
                </span>

                <div className="flex items-center gap-4 text-xs font-mono text-black/60">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {activeExp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {activeExp.location}
                  </span>
                </div>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-black tracking-tight mb-1">
                {activeExp.role}
              </h3>
              <p className="text-base text-black/70 font-medium">
                {activeExp.company}
              </p>
            </div>

            {/* Role Summary */}
            <p className="text-[16px] sm:text-[17px] leading-relaxed text-black/80 mb-8 font-normal">
              {activeExp.summary}
            </p>

            {/* Key Deliverables & Achievements */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-widest text-black/50 mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-black/50" />
                Key Responsibilities & Measurable Impact
              </h4>
              <ul className="space-y-3.5">
                {activeExp.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[15px] leading-relaxed text-black/75">
                    <CheckCircle2 className="w-4 h-4 text-black/40 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="pt-6 border-t border-black/[0.06]">
              <h4 className="text-xs font-mono uppercase tracking-widest text-black/50 mb-3">
                Applied Technologies & Methodologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeExp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono bg-[#FAF7F5] text-black/80 px-3 py-1.5 rounded-lg border border-black/[0.07] hover:border-black/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
