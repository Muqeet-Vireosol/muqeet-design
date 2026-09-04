import React, { useEffect, useRef } from 'react';
import { Maximize2, Calendar, Award } from 'lucide-react';
import { siteContent } from '../data/content';

const MAX_TRAIL_ITEMS = 5; // Strict cap of 5 images active as in site1.1

const TRAIL_IMAGES = [
  '/assets/section3/1.png',
  '/assets/section3/2.png',
  '/assets/section3/3.png',
  '/assets/section3/4.png',
  '/assets/section3/5.png',
  '/assets/section3/6.png',
  '/assets/section3/7.png',
  '/assets/section3/8.png',
  '/assets/section3/9.png',
];

export default function SectionMemories({ onOpenBooking, onOpenEvent, onSelectImage }) {
  const stageRef = useRef(null);
  const trailContainerRef = useRef(null);
  const activeTrailRef = useRef([]);
  const trailIndexRef = useRef(0);
  const lastCursorRef = useRef({ x: 0, y: 0 });
  const isThrottledRef = useRef(false);

  const images = siteContent.section3.images;

  useEffect(() => {
    const stage = stageRef.current;
    const trailContainer = trailContainerRef.current;
    if (!stage || !trailContainer) return;

    // Preload trail images
    TRAIL_IMAGES.forEach((src) => {
      const im = new Image();
      im.src = src;
    });

    const removeTrailItem = (el) => {
      if (!el) return;
      el.classList.remove('is-active');
      el.classList.add('is-fading');
      setTimeout(() => {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      }, 700);
    };

    const spawnTrailItem = (x, y) => {
      const rect = stage.getBoundingClientRect();
      const relX = x - rect.left;
      const relY = y - rect.top;

      // Random slight tilt (-8 to +8 deg) matching site1.1
      const rot = (Math.random() * 16 - 8).toFixed(1);

      const item = document.createElement('div');
      item.className = 'cursor-buffer__trail-item';
      item.style.left = `${relX}px`;
      item.style.top = `${relY}px`;
      item.style.setProperty('--rot', `${rot}deg`);

      const img = document.createElement('img');
      img.src = TRAIL_IMAGES[trailIndexRef.current % TRAIL_IMAGES.length];
      img.alt = 'The Oak Padel House Atmosphere';
      item.appendChild(img);

      trailContainer.appendChild(item);
      activeTrailRef.current.push(item);
      trailIndexRef.current++;

      // Trigger active animation on next frame
      requestAnimationFrame(() => {
        item.classList.add('is-active');
      });

      // Strict limit: if more than 5 images are in activeTrail, remove oldest immediately
      while (activeTrailRef.current.length > MAX_TRAIL_ITEMS) {
        const oldest = activeTrailRef.current.shift();
        removeTrailItem(oldest);
      }

      // Automatically fade out after 2.2 seconds
      setTimeout(() => {
        const idx = activeTrailRef.current.indexOf(item);
        if (idx !== -1) {
          activeTrailRef.current.splice(idx, 1);
          removeTrailItem(item);
        }
      }, 2200);
    };

    const handleMouseMove = (e) => {
      const dist = Math.hypot(e.clientX - lastCursorRef.current.x, e.clientY - lastCursorRef.current.y);
      if (dist > 75 && !isThrottledRef.current) {
        lastCursorRef.current = { x: e.clientX, y: e.clientY };
        spawnTrailItem(e.clientX, e.clientY);
        isThrottledRef.current = true;
        setTimeout(() => {
          isThrottledRef.current = false;
        }, 60);
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const t = e.touches[0];
        const dist = Math.hypot(t.clientX - lastCursorRef.current.x, t.clientY - lastCursorRef.current.y);
        if (dist > 65 && !isThrottledRef.current) {
          lastCursorRef.current = { x: t.clientX, y: t.clientY };
          spawnTrailItem(t.clientX, t.clientY);
          isThrottledRef.current = true;
          setTimeout(() => {
            isThrottledRef.current = false;
          }, 80);
        }
      }
    };

    stage.addEventListener('mousemove', handleMouseMove);
    stage.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      stage.removeEventListener('mousemove', handleMouseMove);
      stage.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div id="memories" className="w-full">
      {/* SECTION 3: Style Selector / Picture Buffer (Light Beige Background - EXACT SITE1.1 SPEC) */}
      <section className="cursor-buffer" id="buffer">
        <div className="cursor-buffer__stage" id="bufferStage" ref={stageRef}>
          {/* Dynamic trail container (Strictly max 5 images active) */}
          <div className="cursor-buffer__trail" id="bufferTrail" ref={trailContainerRef} />

          {/* Centered Interactive Content */}
          <div className="cursor-buffer__content">
            <span className="cursor-buffer__hint">Move your cursor</span>
            <h2 className="cursor-buffer__title">
              LETS CREATE SOME MEMORIES !
            </h2>
            <div className="cursor-buffer__buttons">
              <button
                onClick={() => onOpenBooking()}
                className="cursor-buffer__btn cursor-buffer__btn--primary"
              >
                Book Your Court
              </button>
              <button
                onClick={onOpenEvent}
                className="cursor-buffer__btn cursor-buffer__btn--secondary"
              >
                Host Event
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Atmospheric Gallery Grid (9 Photos) */}
      <section className="block py-20 bg-[#14080A]">
        <div className="wrap">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <div className="eyebrow">Curated Moments</div>
              <h3 className="font-serif text-3xl font-bold text-white uppercase mt-1">
                The Oak Atmosphere
              </h3>
            </div>
            <span className="text-xs text-stone-400 font-sans hidden sm:block">
              Click any photograph to expand in high resolution
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img) => (
              <div
                key={img.id}
                onClick={() => onSelectImage(img)}
                className="group relative rounded-2xl overflow-hidden bg-black/40 border border-white/15 shadow-xl cursor-pointer aspect-[4/3] transform transition-all duration-500 hover:-translate-y-1.5 hover:border-white/40"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-mono tracking-wider">
                    {img.tag}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-amber-200 uppercase tracking-widest block mb-0.5">
                      Moment 0{img.id}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white tracking-wide">
                      {img.title}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#9E1B1B] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
