import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenBooking, onOpenEvent }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY > 40) {
          header.classList.add('solid');
        } else {
          // If in hero section, SectionHero manages .solid based on progress
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header">
      <div className="wrap">
        <a className="brand" href="#top">
          <b>The Oak</b>
          <span>PADEL HOUSE</span>
        </a>

        <button
          className={`menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          id="menuBtn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={mobileMenuOpen ? 'open' : ''}>
          <a
            className="lnk"
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
          >
            LETS PADEL
          </a>
          <a
            className="lnk"
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
          >
            THE OAK WAY
          </a>
          <a
            className="lnk"
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
          >
            PROCESS
          </a>
          <a
            className="lnk"
            href="#buffer"
            onClick={() => setMobileMenuOpen(false)}
          >
            MEMORIES
          </a>
          <button
            className="nav-cta"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
          >
            BOOK YOUR COURT
          </button>
        </nav>
      </div>
    </header>
  );
}
