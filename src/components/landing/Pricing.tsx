'use client';

import { Check, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    {
      name: 'Campus Essential',
      price: '$24',
      period: '/month',
      descriptor: 'Daily botanical essentials formulated for fast, reliable campus skin balance.',
      features: [
        'Green Tea & Niacinamide Balancing Cleanser',
        'Soothing Chamomile Hydrosol Mist (100ml)',
        'Bi-weekly Quad mailroom or locker drop',
        'Student ID 15% ongoing replenishment perk',
      ],
      ctaText: 'Start Essential Care',
      popular: false,
    },
    {
      name: 'Dorm Sanctuary',
      price: '$48',
      period: '/month',
      descriptor: 'The complete botanical routine paired with ambient calming room decor elements.',
      features: [
        'Full 3-Step Bio-Assay Active Trio (Cleanser, Serum, Cream)',
        'Warm Amber Ceramic Stone Diffuser (2200K Glow)',
        'Custom Campus Botanical Essential Oil Blend',
        '24/7 Nice Student Concierge text support',
        'Priority same-day dorm dispatch guaranteed',
        'Free empty glass bottle collection & sterilization',
      ],
      ctaText: 'Explore Collection',
      popular: true,
    },
    {
      name: 'Collector Suite',
      price: '$89',
      period: '/quarter',
      descriptor: 'Seasonal holistic ritual featuring limited reserve botanicals and handcrafted decor.',
      features: [
        'Seasonal Apothecary Kit (4 Clinical Actives)',
        'Handmade Terracotta Vessel & Botanical Candle',
        'Custom Ambient Nightlight with Soundscape Integration',
        'Exclusive Semester Exam Survival Care Package',
        'Direct personal concierge dedicated channel',
      ],
      ctaText: 'Reserve Suite',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="w-full py-28 px-6 sm:px-12 md:px-20 bg-[#F4F2EC]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 font-mono-data text-xs uppercase text-[#CC5833] tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAMPUS SANCTUARY ACCESS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141A17] font-heading">
            Curated For Student Life &amp; Living Spaces
          </h2>
          <p className="text-sm sm:text-base text-[#141A17]/70 font-light leading-relaxed">
            Accessible, lab-certified formulas and ambient room decor designed to fit campus budgets and compact dorm room dimensions.
          </p>
        </div>

        {/* 3-Tier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? 'bg-[#2E4036] text-white shadow-2xl ring-2 ring-[#CC5833] lg:-translate-y-4'
                  : 'bg-[#FCFBF9] text-[#141A17] border border-[#2E4036]/15 shadow-md hover:shadow-lg'
              }`}
            >
              <div>
                {/* Popular Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`text-xs font-mono-data font-bold uppercase tracking-wider px-3.5 py-1 rounded-full ${
                      tier.popular
                        ? 'bg-[#CC5833] text-white'
                        : 'bg-[#2E4036]/10 text-[#2E4036]'
                    }`}
                  >
                    {tier.popular ? 'MOST POPULAR ON CAMPUS' : 'TIER ' + (idx + 1)}
                  </span>
                  {tier.popular && (
                    <span className="flex items-center gap-1 text-[11px] font-mono-data text-[#D49B4B]">
                      <Sparkles className="w-3 h-3" />
                      SANCTUARY CHOICE
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading mb-2">
                  {tier.name}
                </h3>
                <p
                  className={`text-xs sm:text-sm mb-6 leading-relaxed ${
                    tier.popular ? 'text-white/80' : 'text-[#141A17]/70'
                  }`}
                >
                  {tier.descriptor}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-white/10 border-black/10">
                  <span className="text-4xl sm:text-5xl font-black font-heading">
                    {tier.price}
                  </span>
                  <span
                    className={`text-xs font-mono-data ${
                      tier.popular ? 'text-white/60' : 'text-[#141A17]/60'
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-10 text-xs sm:text-sm">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          tier.popular
                            ? 'bg-[#CC5833]/30 text-[#D49B4B]'
                            : 'bg-[#2E4036]/10 text-[#2E4036]'
                        }`}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className={tier.popular ? 'text-white/90' : 'text-[#141A17]/80'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="#contact"
                  className={`btn-magnetic w-full py-4 text-xs sm:text-sm uppercase tracking-wider font-semibold rounded-full group ${
                    tier.popular
                      ? 'bg-[#CC5833] text-white shadow-xl'
                      : 'bg-[#2E4036] text-white hover:bg-[#CC5833]'
                  }`}
                >
                  <span
                    className={`btn-slide-bg ${
                      tier.popular ? 'bg-[#141A17]' : 'bg-[#CC5833]'
                    }`}
                  />
                  <span className="btn-magnetic-content justify-center">
                    {tier.ctaText}
                    <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>

                <div
                  className={`text-center text-[10px] font-mono-data mt-3 ${
                    tier.popular ? 'text-white/50' : 'text-[#141A17]/50'
                  }`}
                >
                  NO CONTRACT // PAUSE OR CANCEL WITH 1-CLICK
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
