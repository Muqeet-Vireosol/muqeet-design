import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenBooking, onOpenEvents }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1A1008] border-b border-[#E8B89A]/30 py-4'
          : 'bg-transparent py-6 text-[#F5DEC8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex flex-col items-start leading-none group">
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-[#F5DEC8] group-hover:text-[#C4622D] transition-colors">
            The Oak
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#E8B89A] font-sans font-medium mt-0.5">
            PADEL HOUSE
          </span>
        </a>

        {/* Exact Desktop Navigation Links: Lazy Padel | Events | Go Kart | BOOK YOUR COURT */}
        <nav className="hidden md:flex items-center space-x-10 text-xs uppercase tracking-[0.2em] font-medium font-sans">
          <a
            href="#hero"
            className="text-[#F5DEC8]/90 hover:text-[#C4622D] transition-colors"
          >
            Lazy Padel
          </a>
          <button
            onClick={onOpenEvents}
            className="text-[#F5DEC8]/90 hover:text-[#C4622D] transition-colors uppercase tracking-[0.2em]"
          >
            Events
          </button>
          <a
            href="#process"
            className="text-[#F5DEC8]/90 hover:text-[#C4622D] transition-colors"
          >
            Go Kart
          </a>
        </nav>

        {/* BOOK YOUR COURT - Red Pill-Shaped CTA Button */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenBooking}
            className="px-7 py-3 bg-[#C4622D] hover:bg-[#a84e20] text-[#F5DEC8] text-xs font-semibold uppercase tracking-[0.16em] rounded-full transition-all duration-300 active:scale-95 border border-[#C4622D]"
          >
            BOOK YOUR COURT
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[#F5DEC8] focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-[#F5DEC8] transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-[#F5DEC8] transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-[#F5DEC8] transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1A1008] border-b border-[#E8B89A]/30 px-6 py-8 mt-4 text-[#F5DEC8] space-y-6 text-sm uppercase tracking-widest font-sans font-medium">
          <a
            href="#hero"
            onClick={() => setMobileOpen(false)}
            className="block hover:text-[#C4622D]"
          >
            Lazy Padel
          </a>
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenEvents();
            }}
            className="block text-left uppercase tracking-widest hover:text-[#C4622D]"
          >
            Events
          </button>
          <a
            href="#process"
            onClick={() => setMobileOpen(false)}
            className="block hover:text-[#C4622D]"
          >
            Go Kart
          </a>
          <div className="pt-4 border-t border-[#E8B89A]/20">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#C4622D] text-[#F5DEC8] text-xs font-semibold uppercase tracking-widest rounded-full text-center"
            >
              BOOK YOUR COURT
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
