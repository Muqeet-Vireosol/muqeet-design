import React, { useState } from 'react';
import { X, Check, Award, Building, Camera, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EventModal({ isOpen, onClose }) {
  const [eventType, setEventType] = useState('Corporate Tournament');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      colors: ['#9E1B1B', '#E6DCB8', '#FBF8F3'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[#FBF8F3] rounded-2xl shadow-2xl border border-terracotta/20 overflow-hidden text-oak">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#2C1A14] to-[#4A352B] text-white flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-amber-200">
              Hospitality & Buyouts
            </span>
            <h3 className="font-serif text-2xl font-bold uppercase tracking-wide mt-0.5">
              Host Your Event
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-red-100 text-[#9E1B1B] mx-auto flex items-center justify-center shadow-inner">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-3xl font-bold text-oak uppercase">
                Inquiry Received
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xs mx-auto leading-relaxed">
                Our Private Events Director will review your specifications and contact you within 24 hours with custom packages and court options.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-8 py-3 bg-[#9E1B1B] hover:bg-[#7F1515] text-white text-xs font-semibold uppercase tracking-widest rounded-sm shadow-md"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-3 gap-2 mb-2">
                {[
                  { label: 'Tournament', icon: Trophy },
                  { label: 'Brand Shoot', icon: Camera },
                  { label: 'Corporate Buyout', icon: Building },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = eventType === item.label;
                  return (
                    <button
                      type="button"
                      key={item.label}
                      onClick={() => setEventType(item.label)}
                      className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                        isSelected
                          ? 'border-[#9E1B1B] bg-red-50 text-terracotta'
                          : 'border-stone-200 hover:border-stone-400 bg-white text-stone-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-[10px] font-semibold uppercase tracking-tight">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-stone-600 block mb-1">
                  Organizer / Company Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Global or Private Party"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-xs bg-white focus:border-[#9E1B1B] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-stone-600 block mb-1">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="events@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-xs bg-white focus:border-[#9E1B1B] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-stone-600 block mb-1">
                    Estimated Guests
                  </label>
                  <input
                    type="number"
                    defaultValue={24}
                    min={6}
                    max={150}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-xs bg-white focus:border-[#9E1B1B] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-stone-600 block mb-1">
                  Event Vision & Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about catering, racket equipment, sound system, or custom court branding needs..."
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-300 text-xs bg-white focus:border-[#9E1B1B] focus:outline-none"
                />
              </div>

              <div className="pt-3 border-t border-stone-200 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#9E1B1B] hover:bg-[#7F1515] text-white text-xs font-semibold uppercase tracking-widest rounded-sm shadow-lg transition-transform active:scale-95"
                >
                  Send Proposal Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
