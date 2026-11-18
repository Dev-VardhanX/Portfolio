import { useEffect, useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Footer() {
  const { profile } = PORTFOLIO_DATA;
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in IST (Indian Standard Time, UTC+5:30)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Trajectory', href: '#experience' },
    { label: 'Selected Works', href: '#projects' },
    { label: 'Capabilities', href: '#skills' },
    { label: 'Foundations', href: '#education' },
    { label: 'Recognition', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative w-full bg-[#181716] text-[#FAF7F5] pt-20 pb-12 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid: Brand & Global Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 pb-16 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Mainframe®
                </span>
                <span className="text-2xl text-white/50 select-none">✳︎</span>
                <span className="font-heading text-xl sm:text-2xl text-white/80 font-normal">
                  {profile.name}
                </span>
              </div>
              <p className="text-sm text-white/60 max-w-sm leading-relaxed mb-6 font-normal">
                Engineering fluid, tactile digital systems where editorial typography, responsive physics, and generative AI converge.
              </p>
            </div>

            {/* Time & Location Widget */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/50 bg-white/[0.04] p-3.5 rounded-2xl border border-white/[0.06] w-fit">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>IST (UTC+5:30)</span>
              </div>
              <span className="text-white/20">|</span>
              <span className="text-white/90 font-medium">{currentTime || '12:00:00 PM'}</span>
            </div>
          </div>

          {/* Navigation Column (4 cols) */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4 block">
              Site Architecture
            </span>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Connect Column (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4 block">
                Connect & Source
              </span>
              <div className="flex flex-col gap-2.5 text-sm text-white/70">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-white/60" />
                  <span>GitHub ({profile.handle})</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn (dev-vardhan)</span>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-white/60" />
                  <span>{profile.email}</span>
                </a>
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-6 md:pt-0">
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="inline-flex items-center gap-2 text-xs font-mono text-white/70 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 px-4 py-2.5 rounded-full transition-colors cursor-pointer group"
              >
                <span>Back to surface</span>
                <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Craft Statement */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © {new Date().getFullYear()} {profile.name} · All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Engineered with React 19, Motion & Vite</span>
            <span>·</span>
            <span>Zero Layout Shift</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
