import { motion } from 'motion/react';
import { Trophy, Star, Users, Award, HeartHandshake, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Achievements() {
  const { achievements } = PORTFOLIO_DATA;

  const getAchievementIcon = (category: string) => {
    switch (category) {
      case 'Competitive Hackathon':
        return <Trophy className="w-4 h-4 text-amber-600" />;
      case 'Open Source':
        return <Star className="w-4 h-4 text-amber-500" />;
      case 'Leadership':
        return <Users className="w-4 h-4 text-sky-600" />;
      case 'Fellowship':
        return <Award className="w-4 h-4 text-purple-600" />;
      case 'Community Mentorship':
        return <HeartHandshake className="w-4 h-4 text-rose-500" />;
      default:
        return <BookOpen className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <section
      id="achievements"
      className="relative w-full py-28 md:py-36 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden bg-[#FAF7F5] border-t border-black/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-14 pb-5 border-b border-black/[0.08]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center text-xs font-mono tracking-widest text-black/60 bg-black/[0.04] px-3 py-1 rounded-full uppercase">
              06 / Recognition
            </span>
            <span className="text-sm font-medium text-black/40">·</span>
            <span className="text-sm tracking-wide text-black/70 font-mono">
              Achievements & Extracurriculars
            </span>
          </div>

          <span className="text-xs font-mono text-black/50">
            COMPETITIONS & CONTRIBUTIONS
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
            Proven impact across hackathons, open source & engineering leadership.
          </h2>
          <p className="text-lg text-black/65 font-normal">
            Beyond commercial software: competitive wins, open-source repositories, developer workshops, and community mentorship.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((item, index) => {
            const isWide = index === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between ${
                  isWide ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-[#FDF8F5]' : ''
                }`}
              >
                <div>
                  {/* Top card bar */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-black/60 bg-[#FAF7F5] px-3 py-1 rounded-full border border-black/[0.06]">
                      {getAchievementIcon(item.category)}
                      {item.category}
                    </span>

                    {item.metric && (
                      <span className="text-xs font-mono font-medium text-black/80 bg-black/[0.04] px-2.5 py-1 rounded-md">
                        {item.metric}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className={`font-heading font-semibold text-black tracking-tight mb-2 ${
                    isWide ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-black/50 uppercase tracking-wider mb-4">
                    {item.subtitle} · {item.date}
                  </p>

                  {/* Description */}
                  <p className="text-[15px] leading-relaxed text-black/70 mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom badge */}
                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-black/50">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-black/40">
                    Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
