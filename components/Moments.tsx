'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const photos = [
  { src: 'https://picsum.photos/800/600?grayscale&random=1', alt: 'Momento 1', aspect: 'aspect-square' },
  { src: 'https://picsum.photos/600/800?grayscale&random=2', alt: 'Momento 2', aspect: 'aspect-[3/4]' },
  { src: 'https://picsum.photos/800/800?grayscale&random=3', alt: 'Momento 3', aspect: 'aspect-square' },
  { src: 'https://picsum.photos/800/500?grayscale&random=4', alt: 'Momento 4', aspect: 'aspect-[4/3]' },
  { src: 'https://picsum.photos/500/800?grayscale&random=5', alt: 'Momento 5', aspect: 'aspect-[3/4]' },
  { src: 'https://picsum.photos/800/600?grayscale&random=6', alt: 'Momento 6', aspect: 'aspect-square' },
];

export function Moments() {
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
              Nuestros recuerdos
            </p>
            <div className="h-[1px] w-12 bg-copper" />
          </div>
          <h2 className="font-outfit text-4xl md:text-5xl font-light title-shimmer">
            MOMENTOS
          </h2>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 w-full">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative w-full overflow-hidden break-inside-avoid border border-copper/30 group ${photo.aspect}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 border-[1px] border-copper m-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
