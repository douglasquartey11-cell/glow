'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500">
      <nav
        className={`w-full max-w-5xl rounded-[2.5rem] px-6 py-3 transition-all duration-500 flex items-center justify-between ${
          scrolled
            ? 'bg-[#F4F2EC]/90 glass-nav border border-[#2E4036]/15 shadow-xl text-[#141A17]'
            : 'bg-[#141A17]/50 glass-nav border border-white/10 text-white shadow-lg'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#D49B4B]/40 shadow-sm shrink-0 bg-[#F4F2EC]">
            <Image
              src="/logo.jpg"
              alt="Glow Essential & Co Logo"
              width={88}
              height={88}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight leading-none">
              Glow Essential<span className="text-[#CC5833] font-serif italic ml-1">&amp; Co</span>
            </span>
            <span className={`text-[9px] font-mono-data tracking-wider uppercase transition-colors ${
              scrolled ? 'text-[#2E4036]/70' : 'text-[#D49B4B]'
            }`}>
              Botanical Skincare
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#products"
            className={`interactive-link transition-colors ${
              scrolled ? 'text-[#2E4036] hover:text-[#CC5833]' : 'text-white/80 hover:text-white'
            }`}
          >
            Collection
          </a>
          <a
            href="#features"
            className={`interactive-link transition-colors ${
              scrolled ? 'text-[#2E4036] hover:text-[#CC5833]' : 'text-white/80 hover:text-white'
            }`}
          >
            Artifacts
          </a>
          <a
            href="#philosophy"
            className={`interactive-link transition-colors ${
              scrolled ? 'text-[#2E4036] hover:text-[#CC5833]' : 'text-white/80 hover:text-white'
            }`}
          >
            Manifesto
          </a>
          <a
            href="#protocol"
            className={`interactive-link transition-colors ${
              scrolled ? 'text-[#2E4036] hover:text-[#CC5833]' : 'text-white/80 hover:text-white'
            }`}
          >
            Protocol
          </a>
          <a
            href="#pricing"
            className={`interactive-link transition-colors ${
              scrolled ? 'text-[#2E4036] hover:text-[#CC5833]' : 'text-white/80 hover:text-white'
            }`}
          >
            Sanctuary Kits
          </a>
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#products"
            className="btn-magnetic px-5 py-2.5 text-xs uppercase tracking-wider font-semibold bg-[#CC5833] text-white shadow-md group"
          >
            <span className="btn-slide-bg bg-[#2E4036]" />
            <span className="btn-magnetic-content">
              Explore Collection
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className={`w-5 h-5 ${scrolled ? 'text-[#141A17]' : 'text-white'}`} />
          ) : (
            <Menu className={`w-5 h-5 ${scrolled ? 'text-[#141A17]' : 'text-white'}`} />
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-24 left-4 right-4 bg-[#141A17] text-white rounded-[2rem] p-6 shadow-2xl border border-white/10 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium py-2 border-b border-white/10 text-[#D49B4B]"
          >
            Collection
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium py-2 border-b border-white/10"
          >
            Artifacts
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium py-2 border-b border-white/10"
          >
            Manifesto
          </a>
          <a
            href="#protocol"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium py-2 border-b border-white/10"
          >
            Protocol
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium py-2 border-b border-white/10"
          >
            Sanctuary Kits
          </a>
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-magnetic w-full py-3.5 mt-2 text-sm uppercase tracking-wider font-semibold bg-[#CC5833] text-white text-center rounded-full"
          >
            <span className="btn-slide-bg bg-[#2E4036]" />
            <span className="btn-magnetic-content justify-center">
              Explore Collection
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </span>
          </a>
        </div>
      )}
    </header>
  );
}
