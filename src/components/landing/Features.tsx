'use client';

import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ShieldCheck, Zap, Radio, BellRing, Sparkles, Calendar, MousePointer, RefreshCw } from 'lucide-react';

export default function Features() {
  /* -------------------------------------------------------------
     CARD 1: DIAGNOSTIC SHUFFLER
     Cycles 3 overlapping cards vertically every 3s with spring bounce
  ------------------------------------------------------------- */
  const initialCards = [
    {
      id: 1,
      badge: 'VERIFIED ASSAY',
      code: 'BIO-CERT #994',
      title: 'Active Niacinamide + Green Tea',
      metric: '99.4% Purity Index',
      status: 'Clean Lab Certified',
      accent: '#2E4036',
    },
    {
      id: 2,
      badge: 'DERMA-SAFE',
      code: 'CLINICAL-00',
      title: 'Ceramide Barrier Hydration',
      metric: '0.00 Sensitivity Delta',
      status: 'Hypoallergenic Pass',
      accent: '#CC5833',
    },
    {
      id: 3,
      badge: 'ECO-SUSTAINABLE',
      code: 'CAMPUS-ECO-084',
      title: 'Botanical Cold-Pressed Serum',
      metric: '100% Recycled Post-Consumer',
      status: 'Zero-Synthetics Certified',
      accent: '#D49B4B',
    },
  ];

  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    const timer = setInterval(() => {
      setCards((prev) => {
        const next = [...prev];
        const last = next.pop();
        if (last) next.unshift(last);
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  /* -------------------------------------------------------------
     CARD 2: TELEMETRY TYPEWRITER
     Monospace live-feed typing out service & delivery dispatches
  ------------------------------------------------------------- */
  const telemetryMessages = [
    'DORM DISPATCH: Quad Hallway #4 batch delivered (14 mins ago)',
    'CONCIERGE LIVE: "Hey Maya! Your lavender mist refill is downstairs."',
    'CAMPUS LOCKER: Unit #209 unlocked with student one-tap code',
    'SUPPORT ACTIVE: Student care concierge response time: 28 seconds',
    'SUSTAINABILITY: Compostable botanical glass bottles collected & sterilized',
  ];

  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = telemetryMessages[currentMsgIndex];
    let speed = isDeleting ? 25 : 45;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentMsgIndex((prev) => (prev + 1) % telemetryMessages.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentMsgIndex]);

  /* -------------------------------------------------------------
     CARD 3: CURSOR PROTOCOL SCHEDULER
     Animated SVG cursor simulates picking schedule days & saving
  ------------------------------------------------------------- */
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [activeDays, setActiveDays] = useState<number[]>([1, 3, 5]); // Mon, Wed, Fri
  const [cursorPos, setCursorPos] = useState({ x: 20, y: 140, click: false, saveActive: false });

  useEffect(() => {
    // 6-step scheduler cycle
    const sequence = [
      // 1. Move to Tuesday (index 2)
      { x: 120, y: 75, click: false, saveActive: false, toggleDay: null, delay: 1000 },
      // 2. Click Tuesday
      { x: 120, y: 75, click: true, saveActive: false, toggleDay: 2, delay: 500 },
      // 3. Move to Thursday (index 4)
      { x: 195, y: 75, click: false, saveActive: false, toggleDay: null, delay: 900 },
      // 4. Click Thursday
      { x: 195, y: 75, click: true, saveActive: false, toggleDay: 4, delay: 500 },
      // 5. Move to Confirm Schedule Button
      { x: 180, y: 155, click: false, saveActive: false, toggleDay: null, delay: 900 },
      // 6. Press Confirm Button
      { x: 180, y: 155, click: true, saveActive: true, toggleDay: null, delay: 1200 },
    ];

    let currentStep = 0;
    let timerId: NodeJS.Timeout;

    const runStep = () => {
      const step = sequence[currentStep];
      setCursorPos({ x: step.x, y: step.y, click: step.click, saveActive: step.saveActive });
      
      if (step.toggleDay !== null) {
        setActiveDays((prev) =>
          prev.includes(step.toggleDay as number)
            ? prev.filter((d) => d !== step.toggleDay)
            : [...prev, step.toggleDay as number]
        );
      }

      currentStep = (currentStep + 1) % sequence.length;
      timerId = setTimeout(runStep, step.delay);
    };

    timerId = setTimeout(runStep, 800);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <section id="features" className="w-full py-28 px-6 sm:px-12 md:px-20 bg-[#F4F2EC]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2E4036]/15 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono-data text-xs uppercase text-[#CC5833] tracking-widest font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-[#CC5833]" />
              FUNCTIONAL MICRO-ARTIFACTS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#141A17] font-heading">
              Software-Weighted Routine Instruments
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#141A17]/70 max-w-md">
            Three interactive operational protocols governing lab certification, reliable student concierge, and autonomous campus replenishment.
          </p>
        </div>

        {/* 3 Interactive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CARD 1 — DIAGNOSTIC SHUFFLER */}
          <div className="relative bg-[#FCFBF9] rounded-[2.5rem] border border-[#2E4036]/10 p-8 shadow-sm flex flex-col justify-between overflow-hidden min-h-[460px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#2E4036]/10 text-[#2E4036] text-xs font-mono-data font-semibold">
                  PROTOCOL 01
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono-data text-[#141A17]/60">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Auto-assay 3s
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#141A17] mb-2 font-heading">
                Diagnostic Shuffler
              </h3>
              <p className="text-xs text-[#141A17]/70 leading-relaxed mb-6">
                Certified clean products tested under rigid spectrophotometric purity thresholds. Zero synthetic fillers.
              </p>
            </div>

            {/* Overlapping Cards Container */}
            <div className="relative h-56 w-full flex items-center justify-center">
              {cards.map((item, index) => {
                // calculate offset and depth
                const translateY = index * 18;
                const scale = 1 - index * 0.05;
                const opacity = 1 - index * 0.2;
                const zIndex = 30 - index * 10;

                return (
                  <div
                    key={item.id}
                    style={{
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      opacity,
                      zIndex,
                      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                    className="absolute top-0 w-full p-5 rounded-[1.8rem] bg-white border border-[#2E4036]/15 shadow-md flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono-data px-2.5 py-0.5 rounded-full bg-[#2E4036]/10 text-[#2E4036] font-bold">
                        {item.badge}
                      </span>
                      <span className="text-[11px] font-mono-data text-[#141A17]/60">
                        {item.code}
                      </span>
                    </div>

                    <div className="my-2">
                      <div className="text-sm font-bold text-[#141A17]">
                        {item.title}
                      </div>
                      <div className="text-xs font-mono-data text-[#CC5833] font-semibold mt-0.5">
                        {item.metric}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-[#2E4036] font-medium pt-2 border-t border-gray-100">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2E4036]" />
                      <span>{item.status}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center justify-between text-xs font-mono-data text-[#141A17]/50 border-t border-[#2E4036]/10">
              <span>BIO-ASSAY PASS 100%</span>
              <span className="text-[#2E4036] font-bold">CERTIFIED LAB</span>
            </div>
          </div>

          {/* CARD 2 — TELEMETRY TYPEWRITER */}
          <div className="relative bg-[#141A17] text-white rounded-[2.5rem] border border-white/10 p-8 shadow-sm flex flex-col justify-between overflow-hidden min-h-[460px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#CC5833]/20 text-[#D49B4B] text-xs font-mono-data font-semibold">
                  PROTOCOL 02
                </span>
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-data text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
                  <span>LIVE FEED</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2 font-heading">
                Telemetry Typewriter
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                Reliable campus customer concierge with instant dorm drops, doorstep replenishment, and real-time student updates.
              </p>
            </div>

            {/* Terminal Window with Typewriter Effect */}
            <div className="bg-[#0D1210] rounded-[1.8rem] border border-white/10 p-6 font-mono-data flex flex-col justify-between h-56 shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] text-white/50">
                <span className="flex items-center gap-1.5">
                  <Radio className="w-3 h-3 text-[#CC5833] animate-pulse" />
                  DISPATCH CHANNEL // QUAD-NORTH
                </span>
                <span>PING: 14ms</span>
              </div>

              {/* Streaming Output */}
              <div className="my-auto text-sm sm:text-base text-[#F4F2EC] leading-relaxed">
                <span className="text-[#D49B4B] font-bold mr-2">&gt;</span>
                <span>{displayedText}</span>
                <span className="inline-block w-2.5 h-4 ml-1 bg-[#CC5833] animate-pulse" />
              </div>

              <div className="flex items-center justify-between text-[10px] text-white/40 pt-2 border-t border-white/10">
                <span>CONCIERGE AGENT #09</span>
                <span className="text-emerald-400">ENCRYPTED TELEMETRY</span>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs font-mono-data text-white/50 border-t border-white/10">
              <span>RESPONSE TIME &lt; 45s</span>
              <span className="text-[#D49B4B] font-bold">NICE CAMPUS CARE</span>
            </div>
          </div>

          {/* CARD 3 — CURSOR PROTOCOL SCHEDULER */}
          <div className="relative bg-[#FCFBF9] rounded-[2.5rem] border border-[#2E4036]/10 p-8 shadow-sm flex flex-col justify-between overflow-hidden min-h-[460px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#2E4036]/10 text-[#2E4036] text-xs font-mono-data font-semibold">
                  PROTOCOL 03
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono-data text-[#141A17]/60">
                  <Calendar className="w-3.5 h-3.5 text-[#CC5833]" />
                  WEEKLY CADENCE
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#141A17] mb-2 font-heading">
                Protocol Scheduler
              </h3>
              <p className="text-xs text-[#141A17]/70 leading-relaxed mb-6">
                Automate your botanical skincare rhythm and room sanctuary aroma refills aligned with exam weeks and semester flow.
              </p>
            </div>

            {/* Interactive Scheduler UI with Animated SVG Cursor */}
            <div className="relative bg-white rounded-[1.8rem] border border-[#2E4036]/15 p-5 shadow-sm h-56 flex flex-col justify-between">
              
              <div className="flex items-center justify-between text-xs font-mono-data text-[#141A17]/60">
                <span>CADENCE: BI-WEEKLY RITUAL</span>
                <span className="text-[#CC5833] font-bold">AUTOMATED</span>
              </div>

              {/* Day cells (S M T W T F S) */}
              <div className="grid grid-cols-7 gap-1.5 my-2">
                {days.map((day, idx) => {
                  const isSelected = activeDays.includes(idx);
                  return (
                    <div
                      key={idx}
                      className={`h-11 rounded-xl flex flex-col items-center justify-center text-xs font-bold transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#CC5833] text-white shadow-md scale-105'
                          : 'bg-[#F4F2EC] text-[#141A17]/70 hover:bg-[#2E4036]/10'
                      }`}
                    >
                      <span className="text-[10px] font-mono-data font-normal opacity-70">DAY</span>
                      <span>{day}</span>
                    </div>
                  );
                })}
              </div>

              {/* Save Button */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-[11px] font-mono-data text-[#141A17]/50">
                  {activeDays.length} DAYS ACTIVE
                </span>
                <button
                  className={`px-4 py-2 rounded-full text-xs font-semibold font-mono-data transition-all duration-300 ${
                    cursorPos.saveActive
                      ? 'bg-[#2E4036] text-white scale-95 shadow-inner'
                      : 'bg-[#2E4036] text-white hover:bg-[#CC5833]'
                  }`}
                >
                  {cursorPos.saveActive ? 'SAVED ✓' : 'CONFIRM CADENCE'}
                </button>
              </div>

              {/* Animated SVG Cursor */}
              <div
                className="absolute pointer-events-none z-40 transition-all duration-500 ease-out"
                style={{
                  left: `${cursorPos.x}px`,
                  top: `${cursorPos.y}px`,
                  transform: cursorPos.click ? 'scale(0.85)' : 'scale(1)',
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-lg"
                >
                  <path
                    d="M3 3L10.5 21L13.5 13.5L21 10.5L3 3Z"
                    fill="#141A17"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

            </div>

            <div className="pt-4 flex items-center justify-between text-xs font-mono-data text-[#141A17]/50 border-t border-[#2E4036]/10">
              <span>ZERO DRIFT // DISPATCH RELIABILITY</span>
              <span className="text-[#CC5833] font-bold">100% RELIABLE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
