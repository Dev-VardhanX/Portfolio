import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, Sparkles, X, Check } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

export function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Interactive & Motion', 'Full-Stack & AI', 'Design Systems'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative w-full py-28 md:py-36 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden bg-[#FAF7F5] border-t border-black/[0.06]"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#FCEEE9]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-14 pb-5 border-b border-black/[0.08]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center text-xs font-mono tracking-widest text-black/60 bg-black/[0.04] px-3 py-1 rounded-full uppercase">
              03 / Selected Works
            </span>
            <span className="text-sm font-medium text-black/40">·</span>
            <span className="text-sm tracking-wide text-black/70 font-mono">
              Engineering & Systems
            </span>
          </div>

          <span className="text-xs font-mono text-black/50">
            {projects.length} CURATED PROJECTS
          </span>
        </div>

        {/* Section Heading & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="font-heading text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.03em] text-[#181716] mb-4">
              Crafted with obsessive attention to latency, typography & motion.
            </h2>
            <p className="text-lg text-black/65 font-normal">
              Flagship interfaces, design system architectures, and intelligent agent tooling built for real-world production.
            </p>
          </motion.div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-white border border-black/10 rounded-2xl shadow-2xs w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-black text-white shadow-xs'
                    : 'text-black/60 hover:text-black hover:bg-black/[0.03]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: Editorial Magazine / Asymmetrical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {filteredProjects.map((project, index) => {
            const isWide = index === 0 && selectedCategory === 'All';
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.07)] transition-all duration-500 flex flex-col justify-between ${
                  isWide ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Top card metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-medium text-black/50 bg-[#FAF7F5] px-3 py-1 rounded-full border border-black/[0.06]">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-700 bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 rounded-full">
                          <Sparkles className="w-3 h-3 text-amber-600" />
                          Featured
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-mono text-black/60 bg-[#FAF7F5] px-3 py-1 rounded-full border border-black/[0.06]">
                      {project.stats}
                    </span>
                  </div>

                  {/* Card Media Preview */}
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#F2EDE8] mb-6 cursor-pointer group/media border border-black/[0.05]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/media:scale-[1.04]"
                    />

                    {/* Hover overlay hint */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white/95 backdrop-blur-xs text-black font-medium text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                        <span>Explore Deep Dive</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    onClick={() => setActiveModalProject(project)}
                    className="font-heading text-2xl sm:text-3xl font-semibold text-black tracking-tight mb-2 cursor-pointer hover:text-black/75 transition-colors"
                  >
                    {project.title}
                  </h3>

                  <p className="text-[15px] sm:text-[16px] text-black/65 font-normal leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.slice(0, 3).map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-black/75">
                        <Check className="w-3.5 h-3.5 text-black/40 mt-1 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer: Tech Pills & Links */}
                <div className="pt-6 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono bg-[#FAF7F5] text-black/75 px-2.5 py-1 rounded-md border border-black/[0.05]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-mono text-black/40 px-2 py-1">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action links */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium bg-[#FAF7F5] hover:bg-black hover:text-white text-black px-3.5 py-2 rounded-full border border-black/10 transition-colors cursor-pointer"
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub Repository"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-black/10 text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Live Project"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-black/10 text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 sm:p-6"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 border border-black/10 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Modal close button */}
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close project modal"
                className="absolute top-6 right-6 inline-flex items-center justify-center w-9 h-9 rounded-full border border-black/10 text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal content */}
              <div className="mb-4">
                <span className="text-xs font-mono font-medium text-black/50 bg-[#FAF7F5] px-3 py-1 rounded-full border border-black/[0.06]">
                  {activeModalProject.category}
                </span>
              </div>

              <h3 className="font-heading text-3xl font-semibold text-black tracking-tight mb-2 pr-10">
                {activeModalProject.title}
              </h3>
              <p className="text-base text-black/60 font-medium mb-6">
                {activeModalProject.tagline}
              </p>

              {/* Media image */}
              <div className="rounded-2xl overflow-hidden aspect-video bg-[#F4EBE6] mb-6 border border-black/[0.06]">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Full Description */}
              <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-black/80 mb-6">
                <p>{activeModalProject.description}</p>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-black/50 mb-3">
                  Architectural & Technical Highlights
                </h4>
                <div className="space-y-2.5">
                  {activeModalProject.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-black/75">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-black/50 mb-3">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono bg-[#FAF7F5] text-black px-3 py-1.5 rounded-lg border border-black/[0.07]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-black/[0.08]">
                <div className="text-xs font-mono text-black/50">
                  Performance: {activeModalProject.stats}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium bg-white text-black border border-black/20 px-5 py-2.5 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>

                  {activeModalProject.liveUrl && (
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium bg-black text-white px-5 py-2.5 rounded-full hover:bg-black/85 transition-colors cursor-pointer"
                    >
                      <span>Live Deployment</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
