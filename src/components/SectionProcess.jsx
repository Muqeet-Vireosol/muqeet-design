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
  const rightImagesRef = useRef([]);
  const rightCaptionsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;
    if (!container || !stage) return;

    const ctx = gsap.context(() => {
      // Set initial states for right column images and captions
      rightImagesRef.current.forEach((img, i) => {
        if (img) gsap.set(img, { opacity: i === 0 ? 1 : 0 });
      });

      rightCaptionsRef.current.forEach((cap, i) => {
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

      // Step 1 -> Step 2
      tl.to(rightImagesRef.current[1], { opacity: 1, duration: 0.25 }, 0.2)
        .to(rightCaptionsRef.current[0], { opacity: 0, y: -15, duration: 0.15 }, 0.18)
        .to(rightCaptionsRef.current[1], { opacity: 1, y: 0, duration: 0.25 }, 0.22);

      // Step 2 -> Step 3
      tl.to(rightImagesRef.current[2], { opacity: 1, duration: 0.25 }, 0.5)
        .to(rightCaptionsRef.current[1], { opacity: 0, y: -15, duration: 0.15 }, 0.48)
        .to(rightCaptionsRef.current[2], { opacity: 1, y: 0, duration: 0.25 }, 0.52);

      // Step 3 -> Step 4
      tl.to(rightImagesRef.current[3], { opacity: 1, duration: 0.25 }, 0.8)
        .to(rightCaptionsRef.current[2], { opacity: 0, y: -15, duration: 0.15 }, 0.78)
        .to(rightCaptionsRef.current[3], { opacity: 1, y: 0, duration: 0.25 }, 0.82);
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
        className="relative w-full h-screen flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden"
      >
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Pinned Large Image with "OUR PREMIUM COURTS" Heading Overlaid */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#E8B89A]/30 aspect-[4/3] md:aspect-[16/11] bg-[#1A1008]">
            <img
              src="/assets/section2/Start.png"
              alt="Our Premium Courts"
              className="w-full h-full object-cover object-center"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1008]/90 via-[#1A1008]/30 to-transparent pointer-events-none" />

            {/* Overlaid Headline */}
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 z-10 pointer-events-none">
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#E8B89A] block mb-2 font-sans">
                SANCTUARY ARCHITECTURE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-[#F5DEC8] leading-tight">
                OUR PREMIUM COURTS
              </h2>
            </div>
          </div>

          {/* Right Column: Scroll-Driven 4-Image Swap + Captions */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            {/* Right-Aligned "THE PROCESS" Section Title at the top */}
            <div className="w-full flex justify-end mb-4 md:mb-6">
              <span className="font-serif text-sm md:text-base font-bold uppercase tracking-[0.25em] text-[#E8B89A]">
                THE PROCESS
              </span>
            </div>

            {/* Swapping Image Frame */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden border border-[#E8B89A]/30 bg-[#1A1008] mb-6">
              {processSteps.map((step, i) => (
                <img
                  key={step.title}
                  ref={(el) => (rightImagesRef.current[i] = el)}
                  src={step.image}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1008]/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Swapping Captions Frame */}
            <div className="relative min-h-[90px] flex items-center">
              {processSteps.map((step, i) => (
                <div
                  key={step.title}
                  ref={(el) => (rightCaptionsRef.current[i] = el)}
                  className="absolute inset-0 flex flex-col justify-center pointer-events-none"
                >
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#F5DEC8] tracking-wide mb-1">
                    {step.num} {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F5DEC8]/80 leading-relaxed font-sans max-w-lg">
                    {step.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
