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
        className="relative w-full h-screen flex flex-col justify-center py-16 px-6 md:px-12 overflow-hidden"
      >
        <div className="max-w-7xl w-full mx-auto flex flex-col">
          {/* Top Right Label: THE PROCESS */}
          <div className="w-full flex justify-end mb-4 md:mb-6">
            <span className="font-serif text-sm md:text-base font-bold uppercase tracking-[0.25em] text-[#E8B89A]">
              THE PROCESS
            </span>
          </div>

          {/* Unified Split Card (Left: OUR PREMIUM COURTS, Right: Scroll Image Swap) */}
          <div className="relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden border border-[#E8B89A]/30 bg-[#1A1008] grid grid-cols-1 md:grid-cols-2 aspect-[4/3] md:aspect-[16/9] shadow-2xl mb-8">
            {/* Left Column: Pinned "OUR PREMIUM COURTS" Image */}
            <div className="relative h-full w-full overflow-hidden border-b md:border-b-0 md:border-r border-[#E8B89A]/20 flex items-center justify-center">
              <img
                src="/assets/section2/Start.png"
                alt="Our Premium Courts"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#1A1008]/25 flex items-center justify-center p-6 text-center">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-[#F5DEC8] drop-shadow-md">
                  OUR PREMIUM COURTS
                </h2>
              </div>
            </div>

            {/* Right Column: Scroll-Driven Image Swap */}
            <div className="relative h-full w-full overflow-hidden bg-[#1A1008]">
              {processSteps.map((step, i) => (
                <img
                  key={step.title}
                  ref={(el) => (rightImagesRef.current[i] = el)}
                  src={step.image}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
                />
              ))}
            </div>
          </div>

          {/* Bottom Dynamic Captions (Swapping on Scroll) */}
          <div className="relative w-full min-h-[90px]">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                ref={(el) => (rightCaptionsRef.current[i] = el)}
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
