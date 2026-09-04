import React, { useState } from 'react';
import { X, Check, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    court: initialData?.court || 'Court 01 — Sunset Terracotta',
    date: initialData?.date || 'Today, Sep 05',
    slot: initialData?.slot || '06:30 PM - 08:00 PM',
    players: '4 Players (Full Match)',
    rentals: false,
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#9E1B1B', '#E6DCB8', '#FBF8F3', '#C8523A'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[#FBF8F3] rounded-2xl shadow-2xl border border-terracotta/20 overflow-hidden text-oak">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#2C1A14] to-[#4A352B] text-white flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-amber-200">
              The Oak Padel House
            </span>
            <h3 className="font-serif text-2xl font-bold uppercase tracking-wide mt-0.5">
              Court Reservation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-red-100 text-[#9E1B1B] mx-auto flex items-center justify-center shadow-inner">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-3xl font-bold text-oak uppercase">
                Court Reserved !
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xs mx-auto leading-relaxed">
                Thank you, <strong>{formData.name || 'Padel Player'}</strong>. A confirmation concierge voucher has been sent to <strong>{formData.email || 'your email'}</strong>.
              </p>
              <div className="p-4 bg-stone-100 rounded-xl text-left text-xs space-y-1.5 border border-stone-200">
                <p><strong>Court:</strong> {formData.court}</p>
                <p><strong>Date & Time:</strong> {formData.date} • {formData.slot}</p>
                <p><strong>Players:</strong> {formData.players}</p>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-8 py-3 bg-[#9E1B1B] hover:bg-[#7F1515] text-white text-xs font-semibold uppercase tracking-widest rounded-sm shadow-md"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-stone-600 block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Leonardo Vance"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#9E1B1B] text-xs bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-stone-600 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@luxury.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#9E1B1B] text-xs bg-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-stone-600 block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-[#9E1B1B] text-xs bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-stone-600 block mb-1">
                    Selected Court
                  </label>
                  <select
                    value={formData.court}
                    onChange={(e) => setFormData({ ...formData, court: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-xs bg-white font-serif font-bold text-oak focus:border-[#9E1B1B]"
                  >
                    <option value="Court 01 — Sunset Terracotta">Court 01 — Sunset Terracotta</option>
                    <option value="Court 02 — The Oak Pavilion">Court 02 — The Oak Pavilion</option>
                    <option value="Court 03 — Center Court">Court 03 — Center Court</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-stone-600 block mb-1">
                    Match Time
                  </label>
                  <select
                    value={formData.slot}
                    onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-xs bg-white focus:border-[#9E1B1B]"
                  >
                    <option value="07:30 AM - 09:00 AM">07:30 AM - 09:00 AM</option>
                    <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM</option>
                    <option value="04:30 PM - 06:00 PM">04:30 PM - 06:00 PM (Golden Hour)</option>
                    <option value="06:30 PM - 08:00 PM">06:30 PM - 08:00 PM (Sunset Prime)</option>
                    <option value="08:30 PM - 10:00 PM">08:30 PM - 10:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-sans">
                  Total for 90-min session: <strong className="text-oak font-serif text-sm">$95 USD</strong>
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#9E1B1B] hover:bg-[#7F1515] text-white text-xs font-semibold uppercase tracking-widest rounded-sm shadow-lg transition-transform active:scale-95"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
