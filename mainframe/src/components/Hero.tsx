import { useEffect, useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import type { SheetTopic } from '../types/navigation';

interface HeroProps {
  onSelectTopic: (topic: SheetTopic) => void;
}

const TYPEWRITER_COPY =
  'Glad you stopped in. Good taste tends to find us. Now, what are we building?';

const ACTION_PILLS: Array<{ label: string; topic: SheetTopic }> = [
  { label: 'Pitch us an idea', topic: 'pitch' },
  { label: 'Come work here', topic: 'work' },
  { label: 'Send a brief hello', topic: 'hello' },
  { label: 'See how we operate', topic: 'operate' },
];

export function Hero({ onSelectTopic }: HeroProps) {
  const { displayed, done } = useTypewriter(TYPEWRITER_COPY, 38, 600);
  const [pillsVisible, setPillsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPillsVisible(true);
    }, 400);
    return () => window.clearTimeout(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@mainframe.co');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback if clipboard permissions are restricted
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <main className="relative z-[1] h-screen flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden">
      <div className="max-w-xl relative z-10">
        {/* 1. Blurred intro label */}
        <p
          className="pointer-events-none select-none mb-5 sm:mb-6 text-[clamp(18px,4vw,26px)] leading-[1.3] font-normal text-black blur-[4px]"
          aria-label="Hey there, meet A.R.I.A, Mainframe's Adaptive Response Interface Agent"
        >
          Hey there, meet A.R.I.A,
          <br />
          Mainframe&apos;s Adaptive Response Interface Agent
        </p>

        {/* 2. Typewriter text */}
        <p className="text-black mb-5 sm:mb-6 text-[clamp(18px,4vw,26px)] leading-[1.35] font-normal min-h-[54px]">
          {displayed}
          {!done && (
            <span
              aria-hidden="true"
              className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink"
            />
          )}
        </p>

        {/* 3. Action pill buttons */}
        <div
          className={`flex flex-wrap gap-y-1 transition-[opacity,transform] duration-[400ms] ease-[ease] ${
            pillsVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2'
          }`}
        >
          {ACTION_PILLS.map((pill) => (
            <button
              key={pill.topic}
              type="button"
              onClick={() => onSelectTopic(pill.topic)}
              className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {pill.label}
            </button>
          ))}

          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label={
              copied
                ? 'Copied hello@mainframe.co to clipboard'
                : 'Copy hello@mainframe.co to clipboard'
            }
            className="inline-flex items-center justify-center gap-2 sm:gap-3 text-white bg-transparent border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span>
              Reach us:{' '}
              <span className="underline underline-offset-1">
                hello@mainframe.co
              </span>
            </span>
            {copied ? (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <path
                  d="M2.25 6.5L4.75 9L9.75 3.25"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <rect
                  x="4"
                  y="4"
                  width="6.5"
                  height="6.5"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M8 2.5V2C8 1.44772 7.55228 1 7 1H2C1.44772 1 1 1.44772 1 2V7C1 7.55228 1.44772 8 2 8H2.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
