'use client';

import { motion } from 'motion/react';

export function Calendar() {
  const googleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+de+Ana+y+Santiago&dates=20261012T170000Z/20261013T020000Z&details=¡Acompáñanos+a+celebrar+nuestra+boda!&location=Parroquia+de+San+Miguel";
  
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:https://boda-ana-santiago.com
DTSTART:20261012T170000Z
DTEND:20261013T020000Z
SUMMARY:Boda de Ana y Santiago
DESCRIPTION:¡Acompáñanos a celebrar nuestra boda!
LOCATION:Parroquia de San Miguel
END:VEVENT
END:VCALENDAR`;
  const appleCalendarUrl = `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;

  return (
    <section className="py-16 px-4 border-t border-copper/20 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center w-full"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-copper" />
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper-light">
              Agrégalo a tu calendario
            </p>
            <div className="h-[1px] w-12 bg-copper" />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-copper text-copper bg-transparent text-[10px] font-mono tracking-widest uppercase py-3 px-8 hover:bg-copper hover:text-bg-dark transition-colors button-shimmer"
            >
              Google Calendar
            </a>
            <a 
              href={appleCalendarUrl}
              download="boda-ana-santiago.ics"
              className="inline-block border border-copper text-copper bg-transparent text-[10px] font-mono tracking-widest uppercase py-3 px-8 hover:bg-copper hover:text-bg-dark transition-colors button-shimmer"
            >
              Apple Calendar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
