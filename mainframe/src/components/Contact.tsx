import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { SheetTopic } from '../types/navigation';

interface ContactProps {
  onOpenSheet?: (topic: SheetTopic) => void;
}

export function Contact({ onOpenSheet }: ContactProps) {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 md:py-36 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden bg-[#FAF7F5] border-t border-black/[0.06]"
    >
      {/* Soft ambient background accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-gradient-to-t from-[#FCEEE9]/60 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-14 pb-5 border-b border-black/[0.08]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center text-xs font-mono tracking-widest text-black/60 bg-black/[0.04] px-3 py-1 rounded-full uppercase">
              07 / Connection
            </span>
            <span className="text-sm font-medium text-black/40">·</span>
            <span className="text-sm tracking-wide text-black/70 font-mono">
              Get in Touch
            </span>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Replies within 24h</span>
          </div>
        </div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20 max-w-4xl"
        >
          <h2 className="font-heading text-[clamp(34px,5.5vw,68px)] leading-[1.08] tracking-[-0.03em] text-[#181716] mb-4">
            Let&apos;s build something <span className="italic font-serif font-normal text-black/75">unforgettable</span> together.
          </h2>
          <p className="text-lg sm:text-xl text-black/65 font-normal max-w-2xl">
            Currently accepting select design engineering commissions, full-time product roles, and ambitious creative collaborations.
          </p>
        </motion.div>

        {/* Dual Layout: Direct Channels on Left, Interactive Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Left Column: Direct Inquiries & Links (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Primary Email Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
              <span className="text-xs font-mono uppercase tracking-widest text-black/50 mb-3 block">
                Direct Correspondence
              </span>

              <div className="flex items-center justify-between gap-3 mb-6 p-4 rounded-2xl bg-[#FAF7F5] border border-black/[0.06]">
                <div className="truncate">
                  <p className="text-xs font-mono text-black/50 mb-0.5">Primary Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-heading text-base sm:text-lg font-semibold text-black hover:underline truncate block"
                  >
                    {profile.email}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-black/10 text-black hover:bg-black hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Status info */}
              <div className="space-y-3 text-xs font-mono text-black/60 pt-2 border-t border-black/[0.06]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-black/40" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Studio inquiries also routed to {profile.secondaryEmail}</span>
                </div>
              </div>
            </div>

            {/* Social & Platform Channels Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.03)] space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-black/50 mb-4 block">
                Social & Network Nodes
              </span>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-black/[0.06] hover:border-black/20 hover:bg-[#FAF7F5] transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-black/70 group-hover:text-black" />
                  <div>
                    <span className="font-heading text-sm font-semibold text-black block">
                      GitHub
                    </span>
                    <span className="text-xs text-black/50 font-mono">
                      github.com/{profile.handle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-black/40 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-black/[0.06] hover:border-black/20 hover:bg-[#FAF7F5] transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                  <div>
                    <span className="font-heading text-sm font-semibold text-black block">
                      LinkedIn
                    </span>
                    <span className="text-xs text-black/50 font-mono">
                      linkedin.com/in/dev-vardhan
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-black/40 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Action sheet trigger */}
              {onOpenSheet && (
                <button
                  type="button"
                  onClick={() => onOpenSheet('pitch')}
                  className="w-full mt-2 flex items-center justify-between p-4 rounded-xl bg-[#FAF7F5] border border-black/[0.08] hover:bg-black hover:text-white transition-all group cursor-pointer text-left"
                >
                  <div>
                    <span className="font-heading text-sm font-semibold block group-hover:text-white">
                      Pitch an Idea via A.R.I.A.
                    </span>
                    <span className="text-xs text-black/50 font-mono group-hover:text-white/70">
                      Open Mainframe&apos;s interactive drawer
                    </span>
                  </div>
                  <Sparkles className="w-4 h-4 text-amber-500 group-hover:text-amber-300" />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-black/[0.08] shadow-[0_15px_45px_rgba(0,0,0,0.03)]">
            <div className="mb-8">
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-black tracking-tight mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm sm:text-base text-black/60 font-normal">
                Fill in the details below and I will respond to your inquiry promptly.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl bg-emerald-50/60 border border-emerald-200 p-8 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-emerald-900">
                  Message Dispatched Successfully
                </h4>
                <p className="text-sm text-emerald-800/80 max-w-md mx-auto leading-relaxed">
                  Thank you{name ? `, ${name}` : ''}. Your note has been received and Dev will get back to you at <span className="underline font-medium">{email}</span> within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-mono text-emerald-900 underline underline-offset-4 hover:opacity-75 cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-black/60 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Rivera"
                      className="w-full rounded-xl bg-[#FAF7F5] border border-black/10 px-4 py-3 text-sm text-black placeholder:text-black/35 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-black/60 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full rounded-xl bg-[#FAF7F5] border border-black/10 px-4 py-3 text-sm text-black placeholder:text-black/35 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-black/60 uppercase tracking-wider mb-2">
                    Inquiry Type / Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Full-time role / Freelance project / Technical chat"
                    className="w-full rounded-xl bg-[#FAF7F5] border border-black/10 px-4 py-3 text-sm text-black placeholder:text-black/35 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-black/60 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your vision, timeline, and how we might collaborate..."
                    className="w-full rounded-xl bg-[#FAF7F5] border border-black/10 px-4 py-3 text-sm text-black placeholder:text-black/35 focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs font-mono text-black/45">
                    Protected by client privacy standards
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-black text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-black/85 transition-all cursor-pointer shadow-sm group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
