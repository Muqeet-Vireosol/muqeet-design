import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    num: '1.',
    title: 'BOOK YOUR COURT',
    subtitle: 'Choose between our outdoor terracotta courts or indoor acoustic oak pavilions.',
    image: '/assets/section2/1.png',
  },
  {
    num: '2.',
    title: 'MEET YOUR PRO',
    subtitle: 'Connect with certified master coaches for private clinics, drills, and tactical gameplay.',
    image: '/assets/section2/2.png',
  },
  {
    num: '3.',
    title: "LET'S STAY A WHILE",
    subtitle: 'Relax in our members lounge with artisan espresso, recovery refreshments, and curated vinyl.',
    image: '/assets/section2/3.png',
  },
  {
    num: '4.',
    title: "AND LET'S PLAY",
    subtitle: 'Step onto championship-grade surfaces with premium rackets and custom ball sets.',
    image: '/assets/section2/4.png',
  },
];

export default function SectionProcess({ onOpenBooking }) {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const cardImagesRef = useRef([]);
  const captionsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;
    if (!container || !stage) return;

    const ctx = gsap.context(() => {
      // Set initial states: First card image visible (Start or 1.png), others opacity 0
      cardImagesRef.current.forEach((img, i) => {
        if (img) gsap.set(img, { opacity: i === 0 ? 1 : 0 });
      });

      captionsRef.current.forEach((cap, i) => {
        if (cap) gsap.set(cap, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 15 });
      });

      // ScrollTrigger timeline for Section 2 with scrub: 1.5
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

      // Step 1: Start/Card 1 -> Card 2
      tl.to(cardImagesRef.current[1], { opacity: 1, duration: 0.25 }, 0.22)
        .to(captionsRef.current[0], { opacity: 0, y: -15, duration: 0.15 }, 0.2)
        .to(captionsRef.current[1], { opacity: 1, y: 0, duration: 0.25 }, 0.25);

      // Step 2: Card 2 -> Card 3
      tl.to(cardImagesRef.current[2], { opacity: 1, duration: 0.25 }, 0.52)
        .to(captionsRef.current[1], { opacity: 0, y: -15, duration: 0.15 }, 0.5)
        .to(captionsRef.current[2], { opacity: 1, y: 0, duration: 0.25 }, 0.55);

      // Step 3: Card 3 -> Card 4
      tl.to(cardImagesRef.current[3], { opacity: 1, duration: 0.25 }, 0.82)
        .to(captionsRef.current[2], { opacity: 0, y: -15, duration: 0.15 }, 0.8)
        .to(captionsRef.current[3], { opacity: 1, y: 0, duration: 0.25 }, 0.85);
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full h-[400vh] bg-[#1A1008] border-t border-[#E8B89A]"
    >
      {/* Pinned Stage for Section 2 */}
      <div
        ref={stageRef}
        className="relative w-full h-screen flex flex-col justify-center py-16 px-6 md:px-12 overflow-hidden"
      >
        <div className="max-w-6xl w-full mx-auto flex flex-col">
          {/* Top Right Label: THE PROCESS */}
          <div className="w-full flex justify-end mb-3 md:mb-5">
            <span className="font-serif text-sm md:text-base font-bold uppercase tracking-[0.25em] text-[#E8B89A]">
              THE PROCESS
            </span>
          </div>

          {/* Unified Composite Card (Single widescreen 2:1 container) */}
          <div className="relative w-full rounded-[20px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden border border-[#E8B89A]/30 bg-white aspect-[2/1] shadow-2xl mb-8">
            {processSteps.map((step, i) => (
              <img
                key={step.title}
                ref={(el) => (cardImagesRef.current[i] = el)}
                src={step.image}
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
              />
            ))}
          </div>

          {/* Bottom Dynamic Captions (Swapping on Scroll) */}
          <div className="relative w-full min-h-[90px]">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                ref={(el) => (captionsRef.current[i] = el)}
                className="absolute inset-0 flex flex-col justify-start pointer-events-none will-change-transform"
              >
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-[#F5DEC8] tracking-wide mb-2">
                  {step.num} {step.title}
                </h3>
                <p className="text-sm sm:text-base text-[#F5DEC8]/80 leading-relaxed font-sans max-w-2xl">
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
