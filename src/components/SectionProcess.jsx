import React, { useState } from 'react';
import { Calendar, Clock, Check, ChevronRight } from 'lucide-react';
import { siteContent } from '../data/content';

export default function SectionProcess({ onOpenBooking }) {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedCourt, setSelectedCourt] = useState('Court 01 — Sunset Terracotta');
  const [selectedDate, setSelectedDate] = useState('Today, Sep 05');
  const [selectedSlot, setSelectedSlot] = useState('06:30 PM - 08:00 PM');

  const daysList = [
    { label: 'Today', date: 'Sep 05', day: 'Fri', available: true },
    { label: 'Tomorrow', date: 'Sep 06', day: 'Sat', available: true },
    { label: 'Sun', date: 'Sep 07', day: 'Sun', available: true },
    { label: 'Mon', date: 'Sep 08', day: 'Mon', available: true },
    { label: 'Tue', date: 'Sep 09', day: 'Tue', available: false },
    { label: 'Wed', date: 'Sep 10', day: 'Wed', available: true },
    { label: 'Thu', date: 'Sep 11', day: 'Thu', available: true },
  ];

  const courtOptions = [
    { name: 'Court 01 — Sunset Terracotta', type: 'Outdoor Clay', badge: 'Natural Breeze', desc: 'Panoramic sunset view with red clay composite' },
    { name: 'Court 02 — The Oak Pavilion', type: 'Indoor Vault', badge: 'Climate Controlled', desc: 'Acoustic oak batten ceiling with chandelier' },
    { name: 'Court 03 — Center Court', type: 'Tournament Grade', badge: 'Spectator Terrace', desc: 'Pro broadcast LED lighting and grandstand' },
  ];

  const slotsList = [
    { time: '07:30 AM - 09:00 AM', tag: 'Morning Light', popular: false },
    { time: '10:00 AM - 11:30 AM', tag: 'Midday Session', popular: false },
    { time: '04:30 PM - 06:00 PM', tag: 'Golden Hour', popular: true },
    { time: '06:30 PM - 08:00 PM', tag: 'Sunset Prime', popular: true },
    { time: '08:30 PM - 10:00 PM', tag: 'Night Lights', popular: false },
  ];

  const handleStepProceed = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    } else {
      onOpenBooking({
        court: selectedCourt,
        date: selectedDate,
        slot: selectedSlot,
      });
    }
  };

  return (
    <>
      {/* SECTION 2: The Oak Padel House Way (About / Stats / Video) */}
      <section className="block about glowfield" id="about">
        <div className="wrap">
          <div className="glass lead-card rv in">
            <div className="eyebrow about-eyebrow">The Oak Padel House way</div>
            <p className="lead about-lead">
              A court is where passion meets prestige — <span className="hl">crafted once</span>, played for generations.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-media rv in">
              <video
                className="about-video"
                src="/assets/section2/ANIMATION.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
            </div>
            <div className="glass copy-card rv in">
              <p>
                We craft world-class padel environments with acoustic oak battens, precision-engineered red clay composite courts, and private lounge sanctuaries designed for quiet luxury and uncompromising sport.
              </p>
            </div>
            <div className="glass stat-card rv lift in">
              <b className="stat-num">3<span className="stat-suffix">+</span></b>
              <span className="stat-label">Championship Courts</span>
            </div>
            <div className="glass stat-card rv lift in">
              <b className="stat-num">100<span className="stat-suffix">%</span></b>
              <span className="stat-label">Acoustic Oak Slats</span>
            </div>
            <div className="glass stat-card rv lift in">
              <b className="stat-num">14<span className="stat-suffix">-days</span></b>
              <span className="stat-label">Advance Booking</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2.5: The Process (Interactive 4-Step Booking) */}
      <section className="block process-sec glowfield" id="process">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <div className="eyebrow">What we do</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-bold mt-2">
                The Process
              </h2>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-300 mt-2 md:mt-0 font-sans">
              How your game lands — Four seamless steps
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="process-steps">
            {[
              { num: '01', title: 'Select Court', desc: 'Choose between outdoor terracotta or indoor oak pavilion.' },
              { num: '02', title: 'Select Day', desc: 'Pick your preferred day of play up to 14 days in advance.' },
              { num: '03', title: 'Select Slot', desc: 'Reserve 90-minute championship blocks curated for peak light.' },
              { num: '04', title: 'And Lets Play !', desc: 'Your private court and chilled refreshments are ready.' },
            ].map((step, idx) => (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`glass process-step lift ${activeStep === idx ? 'active' : ''}`}
              >
                <div className="n">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Active Step Panel */}
          <div className="mt-8 glass p-6 sm:p-10 rounded-2xl border border-white/20">
            <div className="max-w-3xl mx-auto">
              {activeStep === 0 && (
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brass">
                    Step 01 — Choose Your Court
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    {courtOptions.map((c) => (
                      <div
                        key={c.name}
                        onClick={() => setSelectedCourt(c.name)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          selectedCourt === c.name
                            ? 'border-brass bg-[#9E1B1B]/40 shadow-lg'
                            : 'border-white/10 hover:border-white/30 bg-black/20'
                        }`}
                      >
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white font-medium">
                          {c.badge}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-white mt-2">{c.name}</h4>
                        <p className="text-xs text-stone-300 mt-1">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brass">
                    Step 02 — Choose Your Day
                  </span>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2.5 pt-2">
                    {daysList.map((d) => {
                      const str = `${d.label}, ${d.date}`;
                      const isSel = selectedDate === str;
                      return (
                        <button
                          key={d.date}
                          disabled={!d.available}
                          onClick={() => setSelectedDate(str)}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            !d.available
                              ? 'opacity-30 cursor-not-allowed bg-black/40 border-transparent'
                              : isSel
                              ? 'border-brass bg-[#9E1B1B] text-white shadow-lg'
                              : 'border-white/10 hover:border-white/30 bg-black/20 text-stone-200'
                          }`}
                        >
                          <span className="text-[10px] uppercase font-mono block opacity-80">{d.day}</span>
                          <span className="font-serif text-lg font-bold my-0.5 block">{d.date.split(' ')[1]}</span>
                          <span className="text-[9px] uppercase tracking-tight block">{d.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brass">
                    Step 03 — Choose Time Slot
                  </span>
                  <div className="space-y-2.5 pt-2">
                    {slotsList.map((s) => (
                      <div
                        key={s.time}
                        onClick={() => setSelectedSlot(s.time)}
                        className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          selectedSlot === s.time
                            ? 'border-brass bg-[#9E1B1B]/40 text-white'
                            : 'border-white/10 hover:border-white/30 bg-black/20 text-stone-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-brass" />
                          <span className="font-semibold text-sm">{s.time}</span>
                          {s.popular && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-200 font-medium">
                              Prime Slot
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-stone-400">{s.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brass">
                    Step 04 — Review & Confirm
                  </span>
                  <div className="p-5 rounded-xl bg-black/30 border border-white/15 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                      <div>
                        <span className="text-stone-400 uppercase tracking-widest text-[10px] block">Court</span>
                        <strong className="text-white text-sm font-serif">{selectedCourt}</strong>
                      </div>
                      <div>
                        <span className="text-stone-400 uppercase tracking-widest text-[10px] block">Day</span>
                        <strong className="text-white text-sm font-serif">{selectedDate}</strong>
                      </div>
                      <div>
                        <span className="text-stone-400 uppercase tracking-widest text-[10px] block">Time Slot</span>
                        <strong className="text-white text-sm font-serif">{selectedSlot}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                {activeStep > 0 ? (
                  <button
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="text-xs uppercase tracking-widest text-stone-400 hover:text-white"
                  >
                    ← Back
                  </button>
                ) : <div />}

                <button
                  onClick={handleStepProceed}
                  className="cta"
                >
                  {activeStep === 3 ? 'Confirm & Book Court →' : 'Continue Step →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
