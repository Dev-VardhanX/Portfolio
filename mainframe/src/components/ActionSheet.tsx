import { useEffect, useState } from 'react';
import type { SheetTopic } from '../types/navigation';

interface ActionSheetProps {
  topic: SheetTopic | null;
  onClose: () => void;
}

interface TopicContent {
  title: string;
  lead: string;
  items?: Array<{ label: string; detail: string }>;
  formMode?: boolean;
  submitLabel?: string;
  placeholder?: string;
}

const TOPIC_CONTENT: Record<SheetTopic, TopicContent> = {
  labs: {
    title: 'Mainframe Labs',
    lead: 'Experimental interfaces, kinetic typography, and custom spatial systems built between client engagements.',
    items: [
      {
        label: 'A.R.I.A. Interface',
        detail: 'Adaptive response layer exploring conversational pacing and scrub-driven motion.',
      },
      {
        label: 'Frame-Scrub Engine',
        detail: 'Zero-latency horizontal pointer scrubbing for high-bitrate editorial video.',
      },
      {
        label: 'Optical Grid System',
        detail: 'Fluid typographic proportions engineered for cross-viewport legibility.',
      },
    ],
  },
  studio: {
    title: 'Studio',
    lead: 'An independent creative and technical agency partnering with founders, cultural institutions, and product teams.',
    items: [
      {
        label: 'Brand & Identity',
        detail: 'Visual language, custom wordmarks, motion systems, and art direction.',
      },
      {
        label: 'Interactive Web',
        detail: 'Flagship launches, WebGL scenes, and tactile marketing experiences.',
      },
      {
        label: 'Product Craft',
        detail: 'Zero-to-one interfaces shaped directly with engineering.',
      },
    ],
  },
  openings: {
    title: 'Openings',
    lead: 'We hire generalists with deep craft in design engineering, motion, and visual systems.',
    items: [
      {
        label: 'Senior Design Engineer',
        detail: 'Full-time · Remote or New York · React, shaders, interactive motion.',
      },
      {
        label: 'Brand & Motion Designer',
        detail: 'Full-time · New York · Typography, 3D direction, identity systems.',
      },
    ],
  },
  shop: {
    title: 'Mainframe Shop',
    lead: 'Limited-run physical editions, studio monographs, and display type tools.',
    items: [
      {
        label: 'Issue 04 Monograph',
        detail: '196-page offset-printed archive of recent studio prototypes.',
      },
      {
        label: 'Studio Desk Mat',
        detail: 'Heavyweight charcoal wool felt with debossed Mainframe® mark.',
      },
    ],
  },
  operate: {
    title: 'How we operate',
    lead: 'Small senior teams, short feedback loops, and direct collaboration from first sketch to production deploy.',
    items: [
      {
        label: '01. Alignment',
        detail: 'One-week intensive to define the visual thesis and technical scope.',
      },
      {
        label: '02. Prototyping in Browser',
        detail: 'We test typography, motion, and feel directly in code rather than static decks.',
      },
      {
        label: '03. Production Ship',
        detail: 'Hardened, accessible frontends delivered with full design system documentation.',
      },
    ],
  },
  pitch: {
    title: 'Pitch us an idea',
    lead: 'Tell us what you are building, your timeline, and where you want to push the craft.',
    formMode: true,
    submitLabel: 'Send pitch',
    placeholder: 'Brief overview of the project, goals, and target launch window...',
  },
  work: {
    title: 'Come work here',
    lead: 'Share a link to work you are proud of—code, motion reels, or live experiments.',
    formMode: true,
    submitLabel: 'Submit note',
    placeholder: 'Portfolio URL, GitHub, and what kind of work excites you...',
  },
  hello: {
    title: 'Send a brief hello',
    lead: 'No deck required. Drop a quick note and A.R.I.A. will route it straight to our studio partners.',
    formMode: true,
    submitLabel: 'Send note',
    placeholder: 'What is on your mind?',
  },
  contact: {
    title: 'Get in touch',
    lead: 'Start a conversation with Mainframe® or reach us directly at hello@mainframe.co.',
    formMode: true,
    submitLabel: 'Send inquiry',
    placeholder: 'Tell us about your team, timeline, and what we can build together...',
  },
};

export function ActionSheet({ topic, onClose }: ActionSheetProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
  }, [topic]);

  useEffect(() => {
    if (!topic) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [topic, onClose]);

  if (!topic) return null;

  const content = TOPIC_CONTENT[topic];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sheet-title"
      className="fixed inset-0 z-20 flex items-end sm:items-center justify-center bg-black/35 backdrop-blur-xs p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white text-black border border-black/10 rounded-2xl p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <h2
            id="sheet-title"
            className="font-heading text-[24px] sm:text-[28px] tracking-tight leading-tight text-black"
          >
            {content.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close panel"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-black/15 text-black hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shrink-0"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M2 2L10 10M10 2L2 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <p className="text-[15px] leading-relaxed text-black/75 mb-6">
          {content.lead}
        </p>

        {content.items && (
          <div className="divide-y divide-black/10 border-t border-b border-black/10">
            {content.items.map((item) => (
              <div key={item.label} className="py-3.5">
                <div className="text-[15px] font-medium text-black">
                  {item.label}
                </div>
                <div className="text-[14px] text-black/65 mt-0.5">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        )}

        {content.formMode && (
          <>
            {submitted ? (
              <div className="rounded-xl border border-black/10 bg-black/[0.03] p-5">
                <p className="text-[16px] font-medium text-black mb-1">
                  Received by A.R.I.A.
                </p>
                <p className="text-[14px] text-black/70">
                  Thanks{name ? `, ${name}` : ''}. Our partners will follow up at{' '}
                  <span className="underline">{email}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    aria-label="Your name"
                    className="w-full rounded-lg border border-black/15 px-3.5 py-2.5 text-[14px] text-black placeholder:text-black/40 focus:outline-none focus:border-black"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    aria-label="Email address"
                    className="w-full rounded-lg border border-black/15 px-3.5 py-2.5 text-[14px] text-black placeholder:text-black/40 focus:outline-none focus:border-black"
                  />
                </div>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={content.placeholder}
                  aria-label="Message"
                  className="w-full rounded-lg border border-black/15 px-3.5 py-2.5 text-[14px] text-black placeholder:text-black/40 focus:outline-none focus:border-black resize-none"
                />
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[13px] text-black/55">
                    hello@mainframe.co
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-black text-white text-[14px] px-5 py-2 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    {content.submitLabel}
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}
