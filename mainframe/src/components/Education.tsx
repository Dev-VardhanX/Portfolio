import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section
      id="education"
      className="relative w-full py-28 md:py-36 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden bg-[#FAF7F5] border-t border-black/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-14 pb-5 border-b border-black/[0.08]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center text-xs font-mono tracking-widest text-black/60 bg-black/[0.04] px-3 py-1 rounded-full uppercase">
              05 / Foundations
            </span>
            <span className="text-sm font-medium text-black/40">·</span>
            <span className="text-sm tracking-wide text-black/70 font-mono">
              Academic Background
            </span>
          </div>

          <span className="text-xs font-mono text-black/50">
            COMPUTER SCIENCE & SYSTEMS
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
            Grounding creative intuition in rigorous computer science theory.
          </h2>
          <p className="text-lg text-black/65 font-normal">
            Formal engineering foundations spanning algorithms, distributed architectures, human-computer interaction, and computational graphics.
          </p>
        </motion.div>

        {/* Education Timeline / Editorial Cards */}
        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-black/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.03)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left side: Degree, Institution & Key Grade (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full border-b lg:border-b-0 lg:border-r border-black/[0.08] pb-6 lg:pb-0 lg:pr-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-black/60 bg-[#FAF7F5] px-3 py-1 rounded-full border border-black/[0.06]">
                        <GraduationCap className="w-3.5 h-3.5" />
                        {item.degree}
                      </span>
                      <span className="text-xs font-mono font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {item.grade}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-black tracking-tight mb-1">
                      {item.field}
                    </h3>
                    <p className="text-base text-black/70 font-medium mb-4">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-black/55 pt-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Right side: Honors & Core Disciplines (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  {/* Academic Honors */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-black/50 mb-3 flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      Academic Distinctions & Honors
                    </h4>
                    <div className="space-y-2">
                      {item.honors.map((honor, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-[15px] text-black/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2 shrink-0" />
                          <span>{honor}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Coursework */}
                  <div className="pt-4 border-t border-black/[0.06]">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-black/50 mb-3 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-black/50" />
                      Core Coursework & Specialized Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course) => (
                        <span
                          key={course}
                          className="text-xs font-mono bg-[#FAF7F5] text-black/75 px-3 py-1 rounded-md border border-black/[0.06]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
