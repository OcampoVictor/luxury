'use client';

import { motion } from 'motion/react';
import { Church, Wine, Utensils, Music } from 'lucide-react';

const timeline = [
  { time: '17:00', event: 'CEREMONIA', icon: Church },
  { time: '18:30', event: 'CÓCTEL', icon: Wine },
  { time: '20:00', event: 'CENA', icon: Utensils },
  { time: '23:00', event: 'FIESTA', icon: Music },
];

export function Schedule() {
  return (
    <section className="py-24 px-4 border-t border-copper/20 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-copper" />
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper-light">
              Itinerario
            </p>
            <div className="h-[1px] w-12 bg-copper" />
          </div>
          <h2 className="font-outfit text-4xl md:text-5xl font-light title-shimmer">
            ITINERARIO
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-4xl mb-10"
        >
          <div className="flex flex-wrap justify-between items-center gap-8 relative">
            {/* Connecting line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="absolute top-8 left-0 w-full h-[1px] bg-copper/30 hidden md:block origin-left" 
            />
            
            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                  className="flex flex-col items-center relative z-10 bg-bg-dark px-4"
                >
                  <div className="w-16 h-16 border border-copper flex items-center justify-center mb-6 bg-bg-dark hover:bg-copper/10 transition-colors">
                    <IconComponent className="w-6 h-6 text-copper" strokeWidth={1.5} />
                  </div>
                  <p className="font-outfit text-xl mb-2">{item.time}</p>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-copper-light">
                    {item.event}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
