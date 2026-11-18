import { Fragment, useEffect, useState } from 'react';
import type { SheetTopic } from '../types/navigation';

interface NavbarProps {
  onSelectTopic: (topic: SheetTopic) => void;
}

const NAV_LINKS: Array<{ label: string; topic: SheetTopic }> = [
  { label: 'Labs', topic: 'labs' },
  { label: 'Studio', topic: 'studio' },
  { label: 'Openings', topic: 'openings' },
  { label: 'Shop', topic: 'shop' },
];

export function Navbar({ onSelectTopic }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    topic: SheetTopic
  ) => {
    event.preventDefault();
    setMenuOpen(false);
    onSelectTopic(topic);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 w-full px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center">
        {/* Logo (left) */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
          }}
          className="flex flex-row items-center gap-3 text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          <span className="font-heading text-[21px] sm:text-[26px] tracking-tight text-black whitespace-nowrap">
            Mainframe®
          </span>
          <span
            aria-hidden="true"
            className="text-[25px] sm:text-[30px] text-black select-none tracking-[-0.02em] leading-none"
          >
            ✳︎
          </span>
        </a>

        {/* Desktop nav links (center, hidden below md) */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex flex-row items-center text-[23px] text-black"
        >
          {NAV_LINKS.map((item, idx) => (
            <Fragment key={item.topic}>
              <a
                href={`#${item.topic}`}
                onClick={(e) => handleNavClick(e, item.topic)}
                className="hover:opacity-60 transition-opacity whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                {item.label}
              </a>
              {idx < NAV_LINKS.length - 1 && (
                <span aria-hidden="true" className="select-none whitespace-pre">{', '}</span>
              )}
            </Fragment>
          ))}
        </nav>

        {/* Desktop CTA (right, hidden below md) */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          className="hidden md:inline-block text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          Get in touch
        </a>

        {/* Mobile hamburger (visible below md) */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2 -mr-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <span
            className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile overlay (z-index: 9) */}
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[9] bg-white/95 backdrop-blur-sm flex flex-col justify-center items-start px-8 gap-8 md:hidden transition-opacity duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col items-start gap-8"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.topic}
              href={`#${item.topic}`}
              tabIndex={menuOpen ? 0 : -1}
              onClick={(e) => handleNavClick(e, item.topic)}
              className="text-[32px] font-medium text-black hover:opacity-60 transition-opacity"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={(e) => handleNavClick(e, 'contact')}
            className="text-[32px] font-medium text-black underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </>
  );
}
