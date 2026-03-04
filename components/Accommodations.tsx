'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const accommodations = [
  {
    name: 'Hotel Boutique Los Laureles',
    distance: 'A 5 min del evento',
    description: 'Opción de lujo con tarifa preferencial usando el código BODA26.',
    image: 'https://picsum.photos/600/400?grayscale&random=20',
    link: 'https://maps.google.com/?q=Hotel+Boutique+Los+Laureles'
  },
  {
    name: 'Grand Hotel Centro',
    distance: 'A 15 min del evento',
    description: 'Excelente ubicación en el centro histórico, ideal para turistear.',
    image: 'https://picsum.photos/600/400?grayscale&random=21',
    link: 'https://maps.google.com/?q=Grand+Hotel+Centro'
  },
  {
    name: 'Suites La Fábrica',
    distance: 'A 2 min del evento',
    description: 'Comodidad y cercanía ideal para el fin de semana.',
    image: 'https://picsum.photos/600/400?grayscale&random=22',
    link: 'https://maps.google.com/?q=Suites+La+Fabrica'
  }
];

export function Accommodations() {
  return (
    <section id="hospedaje" className="py-24 px-4 border-t border-copper/20 relative">
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
              Donde descansar
            </p>
            <div className="h-[1px] w-12 bg-copper" />
          </div>
          <h2 className="font-outfit text-4xl md:text-5xl font-light title-shimmer">
            HOSPEDAJE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {accommodations.map((hotel, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center border border-copper/50 hover:bg-copper/5 transition-colors overflow-hidden"
            >
              <div className="relative w-full aspect-[4/3] mb-6 border-b border-copper/50 overflow-hidden p-2">
                <div className="relative w-full h-full overflow-hidden">
                  <Image 
                    src={hotel.image} 
                    alt={hotel.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
              </div>
              <div className="p-6 pt-0 flex flex-col items-center flex-1 w-full">
                <h3 className="font-outfit text-xl mb-2 tracking-widest">{hotel.name}</h3>
                <p className="font-mono text-[10px] tracking-widest uppercase text-copper mb-4">
                  {hotel.distance}
                </p>
                <p className="font-mono text-xs text-copper-light leading-relaxed mb-8">
                  {hotel.description}
                </p>
                <a 
                  href={hotel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-gradient-to-r from-copper-dark to-copper text-bg-dark font-mono text-[10px] tracking-widest uppercase py-3 px-8 hover:opacity-90 transition-opacity button-shimmer"
                >
                  Ver Mapa
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
