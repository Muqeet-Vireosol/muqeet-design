import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 181;
const HERO_LERP = 0.12;

function clamp(x, a, b) {
  return x < a ? a : x > b ? b : x;
}

function win(p, a, b, f = 0.04) {
  if (p < a - f || p > b + f) return 0;
  if (p < a) return (p - (a - f)) / f;
  if (p > b) return 1 - ((p - b) / f);
  return 1;
}

export default function SectionHero({ onOpenBooking, onLoadingProgress }) {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const scrollcueRef = useRef(null);
  const capsRef = useRef([]);

  const framesRef = useRef([]);
  const loadedCountRef = useRef(0);
  const heroCurrentFrameRef = useRef(0);
  const heroTargetFrameRef = useRef(0);
  const lastDrawnIdxRef = useRef(-1);
  const isPrimedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const hero = heroRef.current;

    const resizeCanvas = () => {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      const idx = Math.round(heroCurrentFrameRef.current);
      if (framesRef.current[idx] && framesRef.current[idx].complete) {
        drawFrame(idx);
      }
    };

    const drawFrame = (idx) => {
      if (!canvas || !ctx) return;
      if (idx === lastDrawnIdxRef.current) return;
      const img = framesRef.current[idx];
      if (!img || !img.complete || !img.naturalWidth) return;
      lastDrawnIdxRef.current = idx;

      const cw = canvas.width / (window.devicePixelRatio || 1);
      const ch = canvas.height / (window.devicePixelRatio || 1);
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = cw / ch;
      let sw, sh, sx, sy;

      if (imgRatio > canvasRatio) {
        sh = img.naturalHeight;
        sw = sh * canvasRatio;
        sx = (img.naturalWidth - sw) / 2;
        sy = 0;
      } else {
        sw = img.naturalWidth;
        sh = sw / canvasRatio;
        sx = 0;
        sy = (img.naturalHeight - sh) / 2;
      }
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
    };

    const updateCaptions = (p) => {
      capsRef.current.forEach((c) => {
        if (!c) return;
        const a = parseFloat(c.dataset.a);
        const b = parseFloat(c.dataset.b);
        const o = win(p, a, b);
        c.style.opacity = o;
        c.style.transform = `translateY(${(1 - o) * 16}px)`;
        c.style.pointerEvents = o > 0.6 ? 'auto' : 'none';
      });
    };

    const computeHeroTarget = () => {
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const total = hero.offsetHeight - window.innerHeight;
      const p = clamp(-rect.top / total, 0, 1);
      heroTargetFrameRef.current = p * (TOTAL_FRAMES - 1);
      updateCaptions(p);

      const header = document.getElementById('header');
      if (header) {
        header.classList.toggle('solid', p > 0.98 || -rect.top >= total);
      }
      if (scrollcueRef.current) {
        scrollcueRef.current.style.opacity = p < 0.04 ? '1' : '0';
      }
    };

    let rafId = null;
    const tick = () => {
      heroCurrentFrameRef.current += (heroTargetFrameRef.current - heroCurrentFrameRef.current) * HERO_LERP;
      const idx = clamp(Math.round(heroCurrentFrameRef.current), 0, TOTAL_FRAMES - 1);
      drawFrame(idx);
      rafId = requestAnimationFrame(tick);
    };

    // Preload frames
    const onFrameLoaded = () => {
      loadedCountRef.current++;
      const pct = Math.min(100, Math.round((loadedCountRef.current / TOTAL_FRAMES) * 100));
      if (onLoadingProgress) onLoadingProgress(pct);

      if (loadedCountRef.current >= TOTAL_FRAMES && !isPrimedRef.current) {
        isPrimedRef.current = true;
        resizeCanvas();
        drawFrame(0);
        computeHeroTarget();
        rafId = requestAnimationFrame(tick);
      }
    };

    framesRef.current = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames/frame_${String(i).padStart(4, '0')}.webp`;
      img.onload = onFrameLoaded;
      img.onerror = onFrameLoaded;
      framesRef.current.push(img);
    }

    window.addEventListener('scroll', computeHeroTarget, { passive: true });
    window.addEventListener('resize', () => {
      resizeCanvas();
      computeHeroTarget();
    });

    resizeCanvas();
    computeHeroTarget();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', computeHeroTarget);
    };
  }, [onLoadingProgress]);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="stage">
        <div className="canvas-wrap">
          <canvas id="heroCanvas" ref={canvasRef} />
        </div>
        <div className="scrim" />
        <div className="caps">
          {/* Intro Slide */}
          <div
            className="cap intro"
            data-a="0.00"
            data-b="0.12"
            ref={(el) => (capsRef.current[0] = el)}
          >
            <div className="inner">
              <div className="eyebrow est hero-tag">EXPERIENCE A REFRESHING</div>
              <div className="mark hero-title">GAME OF PADEL</div>
              <div className="sub hero-sub">In Our Tranquil Nature Inspired Court</div>
            </div>
          </div>

          {/* Stage 1 */}
          <div
            className="cap stage-cap"
            data-a="0.18"
            data-b="0.38"
            ref={(el) => (capsRef.current[1] = el)}
          >
            <div className="inner">
              <div className="cap-num">01 — BOOK YOUR</div>
              <h2>PRIVATE COURT</h2>
              <p>Enjoy Time With Your Family In Our Private Court , Filled With Laughter , Friends And Thrill Of Padel !</p>
            </div>
          </div>

          {/* Stage 2 */}
          <div
            className="cap stage-cap"
            data-a="0.42"
            data-b="0.62"
            ref={(el) => (capsRef.current[2] = el)}
          >
            <div className="inner">
              <div className="cap-num">02 — HOST YOUR</div>
              <h2>PADEL TOURNAMENT</h2>
              <p>Our Multi Court Indoor / Outddor Facilities Allow You To Host A Grand Tournament For Marketing Branding , Or Corporate Purposes .</p>
            </div>
          </div>

          {/* Stage 3 */}
          <div
            className="cap stage-cap"
            data-a="0.65"
            data-b="0.85"
            ref={(el) => (capsRef.current[3] = el)}
          >
            <div className="inner">
              <div className="cap-num">03 — SHOOT YOUR</div>
              <h2>MARKETING CAMPAIGN</h2>
              <p>Our Oak Interior Blended With Terracot Court Serves As The Perfect Backdrop That Your Brand Needs .</p>
            </div>
          </div>

          {/* Stage 4 / CTA */}
          <div
            className="cap stage-cap right"
            data-a="0.88"
            data-b="1.00"
            ref={(el) => (capsRef.current[4] = el)}
          >
            <div className="inner">
              <div className="cap-num">YOUR COURT IS READY</div>
              <h2>LETS PLAY !</h2>
              <button className="cta" onClick={() => onOpenBooking()}>
                BOOK A COURT →
              </button>
            </div>
          </div>
        </div>

        <div className="scrollcue" id="scrollcue" ref={scrollcueRef}>
          <span>Scroll</span>
          <i />
        </div>
      </div>
    </section>
  );
}
