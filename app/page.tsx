'use client';

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Hero } from '@/components/Hero';
import { Countdown } from '@/components/Countdown';
import { Calendar } from '@/components/Calendar';
import { OurStory } from '@/components/OurStory';
import { Moments } from '@/components/Moments';
import { Schedule } from '@/components/Schedule';
import { DressCode } from '@/components/DressCode';
import { Accommodations } from '@/components/Accommodations';
import { Information } from '@/components/Information';
import { RSVP } from '@/components/RSVP';
import { Location } from '@/components/Location';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Navigation } from '@/components/Navigation';
import { Envelope } from '@/components/Envelope';

export default function Home() {
  const [showEnvelope, setShowEnvelope] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showEnvelope && (
          <Envelope onOpenComplete={() => setShowEnvelope(false)} />
        )}
      </AnimatePresence>

      {!showEnvelope && (
        <main className="min-h-screen bg-bg-dark text-copper font-sans selection:bg-copper selection:text-bg-dark overflow-x-hidden">
          <Navigation />
          <Hero />
          <Countdown />
          <Calendar />
          <OurStory />
          <Moments />
          <Location />
          <Schedule />
          <DressCode />
          <RSVP />
          <Accommodations />
          <Information />
          
          {/* Footer */}
          <footer className="py-12 text-center border-t border-copper/20 relative">
            <ScrollToTop />
            <p className="font-outfit tracking-[0.5em] text-sm uppercase mb-4 mt-8">
              ANA & SANTIAGO
            </p>
            <p className="font-mono text-[10px] tracking-widest text-copper-light">
              12 . OCT . 2026
            </p>
          </footer>
        </main>
      )}
    </>
  );
}
