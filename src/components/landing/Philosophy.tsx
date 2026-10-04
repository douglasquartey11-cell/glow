'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgTextureRef = useRef<HTMLDivElement>(null);
  const statement1Ref = useRef<HTMLParagraphElement>(null);
  const statement2Ref = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on organic texture
      gsap.to(bgTextureRef.current, {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Reveal animation for statements
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from(dividerRef.current, {
        scaleX: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
        .from(
          statement1Ref.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .from(
          statement2Ref.current,
          {
            y: 50,
            opacity: 0,
            duration: 1.1,
            ease: 'power3.out',
          },
          '-=0.6'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative w-full py-32 sm:py-40 px-6 sm:px-12 md:px-20 bg-[#141A17] text-[#F4F2EC] overflow-hidden"
    >
      {/* Parallaxing Organic Texture Image */}
      <div
        ref={bgTextureRef}
        className="absolute inset-0 -top-24 -bottom-24 bg-cover bg-center opacity-15 pointer-events-none filter saturate-150 contrast-125"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=2400&q=80')`,
        }}
      />

      {/* Subtle vignette gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#141A17] via-transparent to-[#141A17] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-start gap-12 sm:gap-16">
        
        {/* Monospace Badge */}
        <div className="flex items-center gap-2 font-mono-data text-xs uppercase text-[#D49B4B] tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#CC5833]" />
          <span>THE CAMPUS SANCTUARY MANIFESTO</span>
        </div>

        <div ref={dividerRef} className="w-24 h-[2px] bg-[#CC5833] origin-left" />

        {/* Contrasting Statements */}
        <div className="flex flex-col gap-10 sm:gap-12">
          
          {/* Statement 1: Industry / Common approach */}
          <p
            ref={statement1Ref}
            className="text-lg sm:text-xl md:text-2xl text-[#F4F2EC]/60 font-light tracking-wide max-w-3xl leading-relaxed"
          >
            Most campus skincare &amp; room decor focuses on:{' '}
            <span className="text-[#F4F2EC]/90 font-normal">
              synthetic quick-fixes, artificial fragrances, disposable clutter, and overpriced prestige packaging.
            </span>
          </p>

          {/* Statement 2: Differentiated approach (Massive drama serif italic) */}
          <h2
            ref={statement2Ref}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.15] tracking-tight font-heading"
          >
            We focus on:{' '}
            <span className="font-drama text-4xl sm:text-6xl md:text-7xl lg:text-8xl italic text-[#F4F2EC] block mt-3">
              certified botanical actives and{' '}
              <span className="text-[#CC5833] underline decoration-1 underline-offset-8">
                intentional sanctuary spaces.
              </span>
            </span>
          </h2>

        </div>

        {/* Footnote / Verification metadata */}
        <div className="pt-8 border-t border-white/10 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono-data text-white/40">
          <span>CODEX IDENTIFIER: GLOW-MANIFESTO-2026</span>
          <span className="text-[#D49B4B]">CERTIFIED CLEAN // AFFORDABLE REVOLUTION</span>
        </div>

      </div>
    </section>
  );
}
