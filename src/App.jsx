import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SectionHero from './components/SectionHero';
import SectionProcess from './components/SectionProcess';
import SectionMemories from './components/SectionMemories';
import BookingModal from './components/BookingModal';
import EventModal from './components/EventModal';
import LightboxModal from './components/LightboxModal';
import { initSilkCursor } from './utils/silkCursor';
import { siteContent } from './data/content';

export default function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [bookingPrefill, setBookingPrefill] = useState(null);

  const images = siteContent.section3.images;

  useEffect(() => {
    const cleanupCursor = initSilkCursor();
    return () => {
      if (cleanupCursor) cleanupCursor();
    };
  }, []);

  const handleLoadingProgress = (pct) => {
    setLoadingProgress(pct);
    if (pct >= 100) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    }
  };

  const handleOpenBooking = (data) => {
    if (data) setBookingPrefill(data);
    setIsBookingOpen(true);
  };

  const handleNextLightbox = () => {
    if (!lightboxImage) return;
    const currentIndex = images.findIndex((img) => img.id === lightboxImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setLightboxImage(images[nextIndex]);
  };

  const handlePrevLightbox = () => {
    if (!lightboxImage) return;
    const currentIndex = images.findIndex((img) => img.id === lightboxImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setLightboxImage(images[prevIndex]);
  };

  return (
    <>
      {/* 1. LOADING SCREEN (MATCHING SITE1.1) */}
      {!isLoaded && (
        <div id="loader" className={loadingProgress >= 100 ? 'gone' : ''}>
          <div className="load-mark">
            The Oak
            <small>PADEL HOUSE • NEO-CLASSICAL SANCTUARY</small>
          </div>
          <div className="load-bar">
            <i id="loadFill" style={{ width: `${loadingProgress}%` }} />
          </div>
          <div className="load-status" id="loadStatus">
            {loadingProgress < 40
              ? 'Preparing the courts'
              : loadingProgress < 75
              ? 'Crafting acoustic oak batten vaults'
              : loadingProgress < 100
              ? 'Polishing clay courts & brass fixtures'
              : 'Ready'}… {loadingProgress}%
          </div>
        </div>
      )}

      {/* 2. HEADER NAVBAR */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenEvent={() => setIsEventOpen(true)}
      />

      <a id="top" />

      {/* 3. MAIN SECTIONS 1, 2, AND 3 */}
      <main>
        {/* Section 1: Hero Frame Scroll Scrub */}
        <SectionHero
          onOpenBooking={() => handleOpenBooking()}
          onLoadingProgress={handleLoadingProgress}
        />

        {/* Section 2: The Oak Padel House Way & 4-Step Process */}
        <SectionProcess
          onOpenBooking={(data) => handleOpenBooking(data)}
        />

        {/* Section 3: Style Selector / Picture Buffer (Light Beige Background) */}
        <SectionMemories
          onOpenBooking={() => handleOpenBooking()}
          onOpenEvent={() => setIsEventOpen(true)}
          onSelectImage={(img) => setLightboxImage(img)}
        />
      </main>

      {/* 4. FOOTER */}
      <footer className="block py-16 bg-[#100608] border-t border-white/10 text-white">
        <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start leading-none">
            <span className="font-serif text-2xl font-bold text-[#ea9b76] tracking-wider">
              The Oak
            </span>
            <small className="text-[10px] tracking-[0.3em] uppercase text-white/70 mt-1 font-sans">
              PADEL HOUSE • EST. 2024
            </small>
          </div>
          <div className="text-xs text-stone-400 font-sans text-center sm:text-right">
            <p>© {new Date().getFullYear()} The Oak Padel House. All Rights Reserved.</p>
            <p className="text-[11px] text-stone-500 mt-1">
              Crafted in light brown, terracotta, black &amp; cream neo-classical architectural aesthetic.
            </p>
          </div>
        </div>
      </footer>

      {/* 5. MODALS */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={bookingPrefill}
      />

      <EventModal
        isOpen={isEventOpen}
        onClose={() => setIsEventOpen(false)}
      />

      <LightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
      />
    </>
  );
}
