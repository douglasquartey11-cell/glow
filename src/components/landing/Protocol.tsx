'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Protocol() {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

      // Stacking scroll effect
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          const nextCard = cards[i + 1];
          gsap.to(card, {
            scale: 0.9,
            filter: 'blur(12px)',
            opacity: 0.5,
            ease: 'none',
            scrollTrigger: {
              trigger: nextCard,
              start: 'top 85%',
              end: 'top 20%',
              scrub: true,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="protocol"
      ref={containerRef}
      className="relative w-full py-28 px-6 sm:px-12 md:px-20 bg-[#F4F2EC] flex flex-col gap-12"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2E4036]/15 pb-8">
        <div>
          <div className="flex items-center gap-2 font-mono-data text-xs uppercase text-[#CC5833] tracking-widest font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-[#CC5833]" />
            STACKING OPERATIONAL ARCHIVE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#141A17] font-heading">
            The Three-Stage Sanctuary Protocol
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#141A17]/70 max-w-md">
          Scroll to explore the closed-loop methodology uniting lab-grade botanical formulation, dormitory spatial acoustic harmony, and direct campus logistics.
        </p>
      </div>

      {/* Cards Container with Sticky Stacking */}
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-10">
        
        {/* CARD 01: ROTATING GEOMETRIC MOTIF */}
        <div
          ref={card1Ref}
          className="sticky top-28 w-full min-h-[520px] rounded-[3rem] bg-[#141A17] text-white p-8 sm:p-14 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden"
        >
          <div className="flex flex-col justify-between h-full max-w-lg z-10">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-white/10 text-[#D49B4B] text-xs font-mono-data font-semibold">
                PHASE 01 // EXTRACTION
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#F4F2EC] tracking-tight mt-6 mb-4 font-heading">
                Botanical Bio-Assay &amp; Certification
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
                Every batch of organic chamomile, green tea polyphenols, and plant-derived ceramides undergoes high-performance chromatography to guarantee zero irritants and peak cellular absorption.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 flex items-center gap-6 text-xs font-mono-data text-white/50">
              <div>
                <span className="text-[#CC5833] font-bold block text-sm">0.00 %</span>
                <span>Filler Threshold</span>
              </div>
              <div className="w-[1px] h-6 bg-white/15" />
              <div>
                <span className="text-[#D49B4B] font-bold block text-sm">ECO-CERT</span>
                <span>Verified Clean</span>
              </div>
            </div>
          </div>

          {/* Canvas/SVG Animation 1: Slowly rotating geometric motif (concentric circles & double helix) */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
            <svg
              className="w-full h-full animate-[spin_24s_linear_infinite]"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="90" stroke="#CC5833" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
              <circle cx="100" cy="100" r="70" stroke="#D49B4B" strokeWidth="1.5" strokeDasharray="12 6" opacity="0.6" />
              <circle cx="100" cy="100" r="50" stroke="#2E4036" strokeWidth="2" opacity="0.8" />
              <circle cx="100" cy="100" r="30" stroke="#F4F2EC" strokeWidth="1" strokeDasharray="2 4" />
              
              {/* Geometric orbital crosshairs */}
              <line x1="100" y1="10" x2="100" y2="190" stroke="#D49B4B" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
              <line x1="10" y1="100" x2="190" y2="100" stroke="#D49B4B" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
            </svg>

            {/* Inner counter-rotating core */}
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_12s_linear_infinite_reverse]">
              <div className="w-20 h-20 rounded-full border border-[#CC5833] flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#CC5833]/20 flex items-center justify-center text-[10px] font-mono-data text-[#D49B4B] font-bold">
                  99.4%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 02: SCANNING LASER-LINE */}
        <div
          ref={card2Ref}
          className="sticky top-32 w-full min-h-[520px] rounded-[3rem] bg-[#2E4036] text-white p-8 sm:p-14 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden"
        >
          <div className="flex flex-col justify-between h-full max-w-lg z-10">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-white/10 text-[#D49B4B] text-xs font-mono-data font-semibold">
                PHASE 02 // SANCTUARY
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#F4F2EC] tracking-tight mt-6 mb-4 font-heading">
                Atmospheric Room &amp; Dorm Decor Harmony
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                Ambient room fixtures crafted with warm ceramic textures, gentle amber nightlight wavelengths, and natural stone mist dispensers to cleanse exam stress from your living quarters.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 flex items-center gap-6 text-xs font-mono-data text-white/60">
              <div>
                <span className="text-[#D49B4B] font-bold block text-sm">2200 K</span>
                <span>Amber Light Temp</span>
              </div>
              <div className="w-[1px] h-6 bg-white/15" />
              <div>
                <span className="text-white font-bold block text-sm">&lt; 18 dB</span>
                <span>Whisper-Quiet Mist</span>
              </div>
            </div>
          </div>

          {/* Canvas/SVG Animation 2: Scanning horizontal laser-line moving across a grid of cells */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2rem] bg-[#141A17]/60 p-6 border border-white/10 flex items-center justify-center overflow-hidden">
            
            {/* Grid of matrix dots */}
            <div className="grid grid-cols-6 gap-4 w-full h-full p-2">
              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-white/20 transition-all duration-300"
                />
              ))}
            </div>

            {/* Horizontal laser scan beam */}
            <div className="absolute inset-x-0 h-[2px] bg-[#CC5833] shadow-[0_0_15px_#CC5833] animate-[scan_3.5s_ease-in-out_infinite]" />

            <div className="absolute bottom-3 left-4 right-4 flex justify-between text-[10px] font-mono-data text-[#D49B4B]">
              <span>OPTICAL SENSOR MATRIX</span>
              <span>CALIBRATED</span>
            </div>
          </div>
        </div>

        {/* CARD 03: PULSING WAVEFORM */}
        <div
          ref={card3Ref}
          className="sticky top-36 w-full min-h-[520px] rounded-[3rem] bg-[#141A17] text-white p-8 sm:p-14 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden"
        >
          <div className="flex flex-col justify-between h-full max-w-lg z-10">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-white/10 text-[#CC5833] text-xs font-mono-data font-semibold">
                PHASE 03 // DISPATCH
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#F4F2EC] tracking-tight mt-6 mb-4 font-heading">
                Direct-to-Dorm Replenishment
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
                Zero friction, student-friendly subscription rhythm. Automatic delivery to campus lockers or quad mailrooms before your serums run dry.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 flex items-center gap-6 text-xs font-mono-data text-white/50">
              <div>
                <span className="text-[#CC5833] font-bold block text-sm">45 MIN</span>
                <span>Campus Courier ETA</span>
              </div>
              <div className="w-[1px] h-6 bg-white/15" />
              <div>
                <span className="text-[#D49B4B] font-bold block text-sm">ZERO WASTE</span>
                <span>Glass Bottle Return</span>
              </div>
            </div>
          </div>

          {/* Canvas/SVG Animation 3: Pulsing waveform (EKG-style SVG path animation with stroke-dashoffset) */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2rem] bg-[#0D1210] p-6 border border-white/10 flex flex-col justify-center items-center overflow-hidden">
            
            <svg
              className="w-full h-32"
              viewBox="0 0 300 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background faint grid lines */}
              <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 3" />
              
              {/* Pulsing EKG path */}
              <path
                d="M0 50 H60 L80 15 L100 85 L120 40 L135 60 L150 50 H300"
                stroke="#CC5833"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-[pulseWave_2.4s_linear_infinite]"
                style={{
                  strokeDasharray: 320,
                  strokeDashoffset: 0,
                }}
              />
            </svg>

            <div className="mt-4 flex items-center justify-between w-full text-[11px] font-mono-data text-white/50">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
                TELEMETRY ACTIVE
              </span>
              <span className="text-[#D49B4B]">CADENCE: 14 DAYS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
