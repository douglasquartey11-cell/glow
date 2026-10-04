'use client';

import Image from 'next/image';
import { ArrowUpRight, Heart, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#141A17] text-[#F4F2EC] rounded-t-[4rem] pt-20 pb-12 px-6 sm:px-12 md:px-20 border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Top Operational Status Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 pulse-dot" />
            <span className="font-mono-data text-xs sm:text-sm uppercase tracking-widest text-emerald-400 font-bold">
              SYSTEM OPERATIONAL // ALL CAMPUS DISPATCH NETWORKS ONLINE
            </span>
          </div>

          <div className="font-mono-data text-xs text-white/50">
            LATENCY: 18ms &bull; SSL 256-BIT ENCRYPTED
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 sm:gap-8">
          
          {/* Brand & Purpose (Col 1 & 2) */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D49B4B]/50 shadow-md shrink-0 bg-[#F4F2EC]">
                <Image
                  src="/logo.jpg"
                  alt="Glow Essential & Co Logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl text-white tracking-tight leading-tight">
                  Glow Essential<span className="text-[#CC5833] font-serif italic ml-1">&amp; Co</span>
                </span>
                <span className="text-[10px] font-mono-data tracking-widest text-[#D49B4B] uppercase">
                  Botanical Skincare &amp; Wellness
                </span>
              </div>
            </div>
            
            <p className="text-sm text-white/70 font-light leading-relaxed max-w-sm">
              Affordable, certified natural skincare and warm ambient room decor tailored for university life. Engineered to cultivate restorative campus sanctuaries.
            </p>

            {/* Newsletter email capture */}
            <div className="pt-2">
              <span className="text-xs font-mono-data text-[#D49B4B] block mb-2 uppercase tracking-wider">
                JOIN THE CAMPUS SANCTUARY JOURNAL
              </span>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your student or personal email"
                  className="bg-white/5 border border-white/15 rounded-full px-5 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#CC5833] w-full font-mono-data"
                />
                <button
                  type="submit"
                  className="btn-magnetic px-5 py-3 bg-[#CC5833] text-white rounded-full text-xs font-semibold uppercase tracking-wider shrink-0"
                >
                  <span className="btn-slide-bg bg-[#2E4036]" />
                  <span className="btn-magnetic-content">Join</span>
                </button>
              </form>
            </div>
          </div>

          {/* Nav Col 1: Artifacts */}
          <div className="flex flex-col gap-3">
            <span className="font-mono-data text-xs text-[#D49B4B] uppercase tracking-wider font-semibold">
              COLLECTIONS
            </span>
            <a href="#pricing" className="interactive-link text-sm text-white/70 hover:text-white">
              Balancing Botanical Cleanser
            </a>
            <a href="#pricing" className="interactive-link text-sm text-white/70 hover:text-white">
              Chamomile Sleep Mist
            </a>
            <a href="#pricing" className="interactive-link text-sm text-white/70 hover:text-white">
              Ceramic Ambient Diffusers
            </a>
            <a href="#pricing" className="interactive-link text-sm text-white/70 hover:text-white">
              Campus Sanctuary Kits
            </a>
          </div>

          {/* Nav Col 2: Protocols */}
          <div className="flex flex-col gap-3">
            <span className="font-mono-data text-xs text-[#D49B4B] uppercase tracking-wider font-semibold">
              METHODOLOGY
            </span>
            <a href="#protocol" className="interactive-link text-sm text-white/70 hover:text-white">
              Bio-Assay Certifications
            </a>
            <a href="#protocol" className="interactive-link text-sm text-white/70 hover:text-white">
              Room Acoustic &amp; Light Balance
            </a>
            <a href="#features" className="interactive-link text-sm text-white/70 hover:text-white">
              Campus Concierge Telemetry
            </a>
            <a href="#features" className="interactive-link text-sm text-white/70 hover:text-white">
              Automated Cadence Scheduler
            </a>
          </div>

          {/* Nav Col 3: Student Care */}
          <div className="flex flex-col gap-3">
            <span className="font-mono-data text-xs text-[#D49B4B] uppercase tracking-wider font-semibold">
              CARE &amp; COMMUNITY
            </span>
            <a href="#contact" className="interactive-link text-sm text-white/70 hover:text-white">
              24/7 Nice Student Support
            </a>
            <a href="#contact" className="interactive-link text-sm text-white/70 hover:text-white">
              Quad Delivery FAQ
            </a>
            <a href="#contact" className="interactive-link text-sm text-white/70 hover:text-white">
              Bottle Return Recycling
            </a>
            <a href="#contact" className="interactive-link text-sm text-white/70 hover:text-white">
              Campus Rep Program
            </a>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono-data text-white/40">
          <div>
            &copy; {new Date().getFullYear()} Glow Essentials &amp; Co. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition-colors">Lab Assay Disclosures</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Campus Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
