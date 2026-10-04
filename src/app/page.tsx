'use client';

import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Products from '@/components/landing/Products';
import Philosophy from '@/components/landing/Philosophy';
import Protocol from '@/components/landing/Protocol';
import Pricing from '@/components/landing/Pricing';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#F4F2EC] text-[#141A17] selection:bg-[#CC5833] selection:text-white overflow-x-hidden">
      {/* Floating Island Navbar */}
      <Navbar />

      {/* Hero: The Opening Shot */}
      <main className="flex-1 flex flex-col w-full">
        <Hero />

        {/* Features: Interactive Functional Artifacts */}
        <Features />

        {/* Products: Curated Collection & Add Product Studio */}
        <Products />

        {/* Philosophy: The Manifesto */}
        <Philosophy />

        {/* Protocol: Sticky Stacking Archive */}
        <Protocol />

        {/* Membership & Sanctuary Pricing */}
        <Pricing />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
