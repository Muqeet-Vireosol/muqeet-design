import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  {
    src: '/assets/section1/1.png',
    alt: 'The Oak Padel House - Nature Court',
  },
  {
    src: '/assets/section1/2.png',
    alt: 'Private Court Experience',
  },
  {
    src: '/assets/section1/3.png',
    alt: 'Host Padel Tournament',
  },
  {
    src: '/assets/section1/4.png',
    alt: 'Marketing Campaign & Brand Backdrop',
  },
  {
    src: '/assets/section1/5.png',
    alt: 'Court Ready To Play',
  },
];

export default function SectionHero({ onOpenBooking }) {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const imagesRef = useRef([]);
  const captionsRef = useRef([]);
  const letsPlayRef = useRef(null);
  const downScrollRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;
    if (!container || !stage) return;

    const ctx = gsap.context(() => {
      // 1. Initial states: First image visible, others opacity 0
      imagesRef.current.forEach((img, i) => {
        if (img) {
          gsap.set(img, { opacity: i === 0 ? 1 : 0 });
        }
      });

      // Captions initial states: First caption visible, others opacity 0
      captionsRef.current.forEach((cap, i) => {
        if (cap) {
          gsap.set(cap, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 20 });
        }
      });

      // 2. Main ScrollTrigger timeline with scrub: 1.5
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
          pin: stage,
          anticipatePin: 1,
        },
      });

      // "LET'S PLAY" overlay fades out early in the scroll
      if (letsPlayRef.current) {
        tl.to(letsPlayRef.current, { opacity: 0, y: -20, duration: 0.15 }, 0);
      }

      // "DOWN SCROLL" indicator fades out early
      if (downScrollRef.current) {
        tl.to(downScrollRef.current, { opacity: 0, duration: 0.15 }, 0);
      }

      // Fade out initial hero title (caption 0)
      if (captionsRef.current[0]) {
        tl.to(captionsRef.current[0], { opacity: 0, y: -20, duration: 0.2 }, 0.1);
      }

      // Swap through images 1 -> 2 -> 3 -> 4 -> 5 and corresponding captions
      // Step 1: Image 1 -> Image 2 (01 - BOOK YOUR PRIVATE COURT)
      tl.to(imagesRef.current[1], { opacity: 1, duration: 0.25 }, 0.2)
        .to(captionsRef.current[1], { opacity: 1, y: 0, duration: 0.25 }, 0.22)
        .to(captionsRef.current[1], { opacity: 0, y: -20, duration: 0.2 }, 0.42);

      // Step 2: Image 2 -> Image 3 (02 - HOST YOUR PADEL TOURNAMENT)
      tl.to(imagesRef.current[2], { opacity: 1, duration: 0.25 }, 0.45)
        .to(captionsRef.current[2], { opacity: 1, y: 0, duration: 0.25 }, 0.47)
        .to(captionsRef.current[2], { opacity: 0, y: -20, duration: 0.2 }, 0.67);

      // Step 3: Image 3 -> Image 4 (03 - SHOOT YOUR MARKETING CAMPAIGN)
      tl.to(imagesRef.current[3], { opacity: 1, duration: 0.25 }, 0.7)
        .to(captionsRef.current[3], { opacity: 1, y: 0, duration: 0.25 }, 0.72)
        .to(captionsRef.current[3], { opacity: 0, y: -20, duration: 0.2 }, 0.88);

      // Step 4: Image 4 -> Image 5 (04 - YOUR COURT IS READY / LET'S PLAY)
      tl.to(imagesRef.current[4], { opacity: 1, duration: 0.25 }, 0.9)
        .to(captionsRef.current[4], { opacity: 1, y: 0, duration: 0.25 }, 0.92);
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative w-full h-[500vh] bg-[#1A1008]">
      {/* Pinned Stage Viewport */}
      <div
        ref={stageRef}
        className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      >
        {/* Swapping Background Images */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, i) => (
            <img
              key={img.src}
              ref={(el) => (imagesRef.current[i] = el)}
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none will-change-transform"
            />
          ))}
          {/* Subtle Neo-Classical Scrim Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1008]/90 via-[#1A1008]/40 to-[#1A1008]/60 pointer-events-none" />
        </div>

        {/* Floating "LET'S PLAY" Overlay on Hero */}
        <div
          ref={letsPlayRef}
          className="absolute top-28 md:top-32 left-6 md:left-12 z-20 pointer-events-none"
        >
          <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.3em] text-[#E8B89A] px-3.5 py-1.5 rounded-full border border-[#E8B89A]/40 bg-[#1A1008]/60 backdrop-blur-sm">
            LET'S PLAY
          </span>
        </div>

        {/* Animated "DOWN SCROLL" Vertical Indicator */}
        <div
          ref={downScrollRef}
          className="absolute right-6 md:right-12 bottom-12 z-20 flex flex-col items-center gap-3 pointer-events-none"
        >
          <span className="vertical-lr text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-[#E8B89A] animate-down-scroll">
            DOWN SCROLL
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#E8B89A] to-transparent animate-down-scroll" />
        </div>

        {/* Captions Overlay Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex flex-col justify-end pb-20 md:pb-24 pointer-events-none">
          {/* Caption 0: Intro Hero */}
          <div
            ref={(el) => (captionsRef.current[0] = el)}
            className="absolute bottom-20 md:bottom-24 left-6 md:left-12 max-w-3xl"
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold text-[#E8B89A] block mb-3 font-sans">
              EXPERIENCE A REFRESHING
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5DEC8] uppercase leading-[0.95] mb-4">
              GAME OF PADEL
            </h1>
            <p className="font-serif text-lg md:text-2xl italic tracking-wide text-[#F5DEC8]/90 font-normal">
              In Our Tranquil Nature Inspired Court
            </p>
          </div>

          {/* Caption 1: 01 - BOOK YOUR PRIVATE COURT */}
          <div
            ref={(el) => (captionsRef.current[1] = el)}
            className="absolute bottom-20 md:bottom-24 left-6 md:left-12 max-w-2xl"
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.25em] font-semibold text-[#E8B89A] block mb-2 font-sans">
              01 — BOOK YOUR
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5DEC8] uppercase mb-4">
              PRIVATE COURT
            </h2>
            <p className="text-sm md:text-base text-[#F5DEC8]/90 leading-relaxed max-w-lg font-sans">
              Enjoy Time With Your Family In Our Private Court , Filled With Laughter , Friends And Thrill Of Padel !
            </p>
          </div>

          {/* Caption 2: 02 - HOST YOUR PADEL TOURNAMENT */}
          <div
            ref={(el) => (captionsRef.current[2] = el)}
            className="absolute bottom-20 md:bottom-24 left-6 md:left-12 max-w-2xl"
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.25em] font-semibold text-[#E8B89A] block mb-2 font-sans">
              02 — HOST YOUR
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5DEC8] uppercase mb-4">
              PADEL TOURNAMENT
            </h2>
            <p className="text-sm md:text-base text-[#F5DEC8]/90 leading-relaxed max-w-lg font-sans">
              Our Multi Court Indoor / Outddor Facilities Allow You To Host A Grand Tournament For Marketing Branding , Or Corporate Purposes .
            </p>
          </div>

          {/* Caption 3: 03 - SHOOT YOUR MARKETING CAMPAIGN */}
          <div
            ref={(el) => (captionsRef.current[3] = el)}
            className="absolute bottom-20 md:bottom-24 left-6 md:left-12 max-w-2xl"
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.25em] font-semibold text-[#E8B89A] block mb-2 font-sans">
              03 — SHOOT YOUR
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5DEC8] uppercase mb-4">
              MARKETING CAMPAIGN
            </h2>
            <p className="text-sm md:text-base text-[#F5DEC8]/90 leading-relaxed max-w-lg font-sans">
              Our Oak Interior Blended With Terracot Court Serves As The Perfect Backdrop That Your Brand Needs .
            </p>
          </div>

          {/* Caption 4: 04 - YOUR COURT IS READY / LET'S PLAY ! */}
          <div
            ref={(el) => (captionsRef.current[4] = el)}
            className="absolute bottom-20 md:bottom-24 left-6 md:left-12 max-w-2xl pointer-events-auto"
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.25em] font-semibold text-[#E8B89A] block mb-2 font-sans">
              YOUR COURT IS READY
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5DEC8] uppercase mb-6">
              LETS PLAY !
            </h2>
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 bg-[#C4622D] hover:bg-[#a84e20] text-[#F5DEC8] text-xs font-semibold uppercase tracking-[0.18em] rounded-full transition-all duration-300 active:scale-95 border border-[#C4622D]"
            >
              BOOK A COURT →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
