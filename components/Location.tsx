'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Church, Wine } from 'lucide-react';

export function Location() {
  return (
    <section id="ubicacion" className="py-24 px-4 border-t border-copper/20 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-24">
        
        {/* Ceremonia */}
        <div className="w-full flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative w-full aspect-[4/3] border border-copper p-2"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="https://picsum.photos/800/600?grayscale&random=10" 
                alt="La Ceremonia" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <Church className="w-10 h-10 text-copper mb-6" strokeWidth={1.5} />
            <h3 className="font-outfit text-3xl tracking-widest mb-4 title-shimmer">LA CEREMONIA</h3>
            <p className="font-mono text-sm text-copper-light leading-relaxed mb-6">
              Parroquia de San Miguel<br />
              Avenida Principal 1234<br />
              Centro Histórico, Ciudad
            </p>
            <p className="font-mono text-xs text-copper-light mb-8">
              17:00 hrs
            </p>
            <div className="flex gap-4">
              <a 
                href="https://maps.google.com/?q=Parroquia+de+San+Miguel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-copper-dark to-copper text-bg-dark text-[10px] font-mono tracking-widest uppercase py-3 px-8 hover:opacity-90 transition-opacity button-shimmer"
              >
                Google Maps
              </a>
              <a 
                href="https://waze.com/ul?q=Parroquia+de+San+Miguel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border border-copper text-copper bg-transparent text-[10px] font-mono tracking-widest uppercase py-3 px-8 hover:bg-copper hover:text-bg-dark transition-colors button-shimmer"
              >
                Waze
              </a>
            </div>
          </motion.div>
        </div>

        {/* Recepción */}
        <div className="w-full flex flex-col md:flex-row-reverse items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative w-full aspect-[4/3] border border-copper p-2"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="https://picsum.photos/800/600?grayscale&random=11" 
                alt="La Recepción" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center md:items-end text-center md:text-right"
          >
            <Wine className="w-10 h-10 text-copper mb-6" strokeWidth={1.5} />
            <h3 className="font-outfit text-3xl tracking-widest mb-4 title-shimmer">LA RECEPCIÓN</h3>
            <p className="font-mono text-sm text-copper-light leading-relaxed mb-6">
              Centro de Eventos La Fábrica<br />
              Distrito de Arte 567<br />
              Zona Industrial, Ciudad
            </p>
            <p className="font-mono text-xs text-copper-light mb-8">
              18:30 hrs
            </p>
            <div className="flex gap-4 justify-center md:justify-end">
              <a 
                href="https://maps.google.com/?q=Centro+de+Eventos+La+Fabrica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-copper-dark to-copper text-bg-dark text-[10px] font-mono tracking-widest uppercase py-3 px-8 hover:opacity-90 transition-opacity button-shimmer"
              >
                Google Maps
              </a>
              <a 
                href="https://waze.com/ul?q=Centro+de+Eventos+La+Fabrica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border border-copper text-copper bg-transparent text-[10px] font-mono tracking-widest uppercase py-3 px-8 hover:bg-copper hover:text-bg-dark transition-colors button-shimmer"
              >
                Waze
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
