'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlinePart1Ref = useRef<HTMLHeadingElement>(null);
  const headlinePart2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      if (badgeRef.current) {
        tl.from(badgeRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
        });
      }

      if (headlinePart1Ref.current) {
        tl.from(
          headlinePart1Ref.current,
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          '-=0.5'
        );
      }

      if (headlinePart2Ref.current) {
        tl.from(
          headlinePart2Ref.current,
          {
            y: 50,
            opacity: 0,
            duration: 1.2,
          },
          '-=0.7'
        );
      }

      if (descRef.current) {
        tl.from(
          descRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.9,
          },
          '-=0.8'
        );
      }

      if (ctaGroupRef.current) {
        tl.from(
          ctaGroupRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.9,
          },
          '-=0.7'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100dvh] min-h-[700px] flex items-end overflow-hidden pb-16 sm:pb-24 px-6 sm:px-12 md:px-20"
    >
      {/* Background Image - Cinematic Organic Skincare & Warm Botanical Sanctuary */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=2600&q=85')`,
        }}
      />

      {/* Heavy primary-to-black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#141A17] via-[#141A17]/75 to-[#2E4036]/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#141A17]/85 via-transparent to-transparent pointer-events-none" />

      {/* Content pushed to the bottom-left third */}
      <div className="relative z-10 max-w-4xl flex flex-col items-start gap-4 sm:gap-6 text-white">
        
        {/* Monospace Badge / Telemetry Label */}
        <div ref={badgeRef} className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs uppercase tracking-widest font-mono-data text-[#D49B4B]">
          <span className="w-2 h-2 rounded-full bg-[#CC5833] pulse-dot" />
          <span>BOTANICAL LUXE // CAMPUS SANCTUARY PROTOCOL</span>
        </div>

        {/* Hero Line Pattern: Bold Sans + Massive Drama Serif Italic */}
        <div>
          <h1
            ref={headlinePart1Ref}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F4F2EC] uppercase"
          >
            Campus sanctuary meets
          </h1>
          <span
            ref={headlinePart2Ref}
            className="font-drama text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#D49B4B] tracking-normal italic block -mt-1 sm:-mt-3"
          >
            Natural Radiance.
          </span>
        </div>

        {/* Brand Purpose & Descriptor */}
        <p
          ref={descRef}
          className="text-base sm:text-lg md:text-xl text-[#F4F2EC]/85 max-w-2xl font-light leading-relaxed tracking-wide"
        >
          Affordable, lab-certified natural skincare and ambient room decor designed specifically for university life. Transform your dorm into a restorative botanical sanctuary.
        </p>

        {/* CTA Group */}
        <div ref={ctaGroupRef} className="flex flex-wrap items-center gap-4 pt-2 sm:pt-4">
          <a
            href="#pricing"
            className="btn-magnetic px-8 py-4 bg-[#CC5833] text-white text-sm uppercase font-semibold tracking-wider shadow-2xl group"
          >
            <span className="btn-slide-bg bg-[#2E4036]" />
            <span className="btn-magnetic-content">
              Explore the collection
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </a>

          <a
            href="#protocol"
            className="btn-magnetic px-7 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm tracking-wider font-mono-data backdrop-blur-md transition-all"
          >
            <span className="btn-slide-bg bg-white/20" />
            <span className="btn-magnetic-content flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D49B4B]" />
              View Lab Certifications
            </span>
          </a>
        </div>

        {/* Bottom stats ticker */}
        <div className="flex items-center gap-6 sm:gap-10 pt-4 text-xs font-mono-data text-white/60 border-t border-white/10 w-full mt-2">
          <div>
            <span className="text-[#D49B4B] font-bold block text-sm sm:text-base">100% CLEAN</span>
            <span>Eco-Cert Botanicals</span>
          </div>
          <div className="w-[1px] h-6 bg-white/15" />
          <div>
            <span className="text-[#D49B4B] font-bold block text-sm sm:text-base">&lt; 45 MIN</span>
            <span>Direct Dorm Drops</span>
          </div>
          <div className="w-[1px] h-6 bg-white/15" />
          <div>
            <span className="text-[#D49B4B] font-bold block text-sm sm:text-base">ZERO-PARABEN</span>
            <span>Dermatologist Tested</span>
          </div>
        </div>

      </div>
    </section>
  );
}
