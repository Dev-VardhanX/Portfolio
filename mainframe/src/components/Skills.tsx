import { useState } from 'react';
import { motion } from 'motion/react';
import { Layout, Server, Cpu, Palette, CheckCircle2, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Skills() {
  const { skillCategories } = PORTFOLIO_DATA;
  const [activeCategoryId, setActiveCategoryId] = useState<string>(skillCategories[0].id);
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; level: string; description: string }>(
    skillCategories[0].skills[0]
  );

  const activeCategory = skillCategories.find((c) => c.id === activeCategoryId) || skillCategories[0];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      case 'Palette':
        return <Palette className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative w-full py-28 md:py-36 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden bg-[#FAF7F5] border-t border-black/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-14 pb-5 border-b border-black/[0.08]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center text-xs font-mono tracking-widest text-black/60 bg-black/[0.04] px-3 py-1 rounded-full uppercase">
              04 / Capabilities
            </span>
            <span className="text-sm font-medium text-black/40">·</span>
            <span className="text-sm tracking-wide text-black/70 font-mono">
              Skills & Tooling
            </span>
          </div>

          <span className="text-xs font-mono text-black/50">
            ZERO GENERIC PROGRESS BARS
          </span>
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
            A deeply curated toolkit engineered for speed, polish & scale.
          </h2>
          <p className="text-lg text-black/65 font-normal">
            Synthesizing contemporary design sensibilities with rigorous, low-overhead software engineering standards.
          </p>
        </motion.div>

        {/* Main Grid: Category Selection & Interactive Skills Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Discipline Navigation (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {skillCategories.map((category) => {
              const isActive = category.id === activeCategoryId;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => {
                    setActiveCategoryId(category.id);
                    setSelectedSkill(category.skills[0]);
                  }}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? 'bg-white border-black/20 shadow-[0_8px_25px_rgba(0,0,0,0.05)] scale-[1.01]'
                      : 'bg-white/60 border-black/[0.06] hover:bg-white hover:border-black/15 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-black text-white'
                          : 'bg-[#FAF7F5] text-black/70 group-hover:bg-black group-hover:text-white'
                      }`}
                    >
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-black tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs text-black/50 font-mono mt-0.5">
                        {category.skills.length} core proficiencies
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Stylized 3D Claymorphic Accent Card */}
            <div className="mt-4 rounded-3xl bg-white p-5 border border-black/[0.08] shadow-xs flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#E8F4F0] shrink-0 border border-black/5">
                <img
                  src="/assets/images/avatar-mint.png"
                  alt="Claymorphic 3D Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-black/45 mb-1">
                  Craft Principle
                </p>
                <p className="text-sm font-medium text-black leading-snug">
                  &ldquo;Code is design made durable and accessible.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Skills Matrix & Live Detail Inspector (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Active Category Header */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
              <div className="mb-6 pb-6 border-b border-black/[0.08]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-black/50 bg-[#FAF7F5] px-3 py-1 rounded-full border border-black/[0.06]">
                    Discipline
                  </span>
                  <span className="text-xs font-mono text-black/40">·</span>
                  <span className="text-xs font-mono text-black/60">
                    Click any skill badge to inspect real-world implementation
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-black tracking-tight">
                  {activeCategory.title}
                </h3>
                <p className="text-base text-black/65 mt-1 font-normal">
                  {activeCategory.tagline}
                </p>
              </div>

              {/* Skills Interactive Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {activeCategory.skills.map((skill) => {
                  const isSelected = selectedSkill.name === skill.name;
                  return (
                    <button
                      key={skill.name}
                      type="button"
                      onClick={() => setSelectedSkill(skill)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#FAF7F5] border-black text-black shadow-xs ring-1 ring-black/10'
                          : 'bg-white border-black/[0.08] hover:border-black/25 text-black/80 hover:bg-[#FAF7F5]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-heading text-[15px] font-semibold tracking-tight">
                          {skill.name}
                        </span>
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                        )}
                      </div>
                      <span className="text-xs font-mono text-black/50">
                        {skill.level}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Skill Deep Dive Inspector Box */}
              <div className="rounded-2xl bg-[#FAF7F5] border border-black/[0.08] p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-black/60" />
                    <span className="text-xs font-mono uppercase tracking-widest text-black/50">
                      Implementation Context
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {selectedSkill.level}
                  </span>
                </div>

                <h4 className="font-heading text-lg font-semibold text-black mb-2">
                  {selectedSkill.name} in Production
                </h4>
                <p className="text-[15px] leading-relaxed text-black/75">
                  {selectedSkill.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
