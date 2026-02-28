import { Hero } from '@/components/Hero';
import { Countdown } from '@/components/Countdown';
import { OurStory } from '@/components/OurStory';
import { Moments } from '@/components/Moments';
import { Schedule } from '@/components/Schedule';
import { DressCode } from '@/components/DressCode';
import { Accommodations } from '@/components/Accommodations';
import { Information } from '@/components/Information';
import { RSVP } from '@/components/RSVP';
import { Location } from '@/components/Location';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-dark text-copper font-sans selection:bg-copper selection:text-bg-dark">
      <Hero />
      <Countdown />
      <OurStory />
      <Moments />
      <Location />
      <Schedule />
      <DressCode />
      <RSVP />
      <Accommodations />
      <Information />
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-copper/20">
        <p className="font-outfit tracking-[0.5em] text-sm uppercase mb-4">
          ANA & SANTIAGO
        </p>
        <p className="font-mono text-[10px] tracking-widest text-copper-light">
          12 . OCT . 2026
        </p>
      </footer>
    </main>
  );
}
