'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to October 12, 2026
    const targetDate = new Date('2026-10-12T17:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 border-t border-copper/20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <p className="font-mono text-xs tracking-[0.3em] uppercase mb-12 text-copper-light">
          Cuenta Regresiva
        </p>

        <div className="flex items-center justify-center gap-4 md:gap-12 w-full">
          <div className="flex flex-col items-center w-16 md:w-24">
            <span className="font-outfit text-4xl md:text-7xl font-light">{timeLeft.days}</span>
            <span className="font-mono text-[10px] tracking-widest uppercase mt-2">Días</span>
          </div>
          <div className="h-12 md:h-16 w-[1px] bg-copper/30 rotate-12" />
          <div className="flex flex-col items-center w-16 md:w-24">
            <span className="font-outfit text-4xl md:text-7xl font-light">{timeLeft.hours}</span>
            <span className="font-mono text-[10px] tracking-widest uppercase mt-2">Horas</span>
          </div>
          <div className="h-12 md:h-16 w-[1px] bg-copper/30 rotate-12" />
          <div className="flex flex-col items-center w-16 md:w-24">
            <span className="font-outfit text-4xl md:text-7xl font-light">{timeLeft.minutes}</span>
            <span className="font-mono text-[10px] tracking-widest uppercase mt-2">Min</span>
          </div>
          <div className="h-12 md:h-16 w-[1px] bg-copper/30 rotate-12" />
          <div className="flex flex-col items-center w-16 md:w-24">
            <span className="font-outfit text-4xl md:text-7xl font-light">{timeLeft.seconds}</span>
            <span className="font-mono text-[10px] tracking-widest uppercase mt-2">Seg</span>
          </div>
        </div>
      </div>
    </section>
  );
}
