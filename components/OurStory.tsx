'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function OurStory() {
  return (
    <section id="historia" className="py-24 px-4 border-t border-copper/20 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-8 bg-copper" />
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-copper-light">
              Nuestra Historia
            </p>
          </div>
          
          <h2 className="font-outfit text-4xl md:text-5xl font-light mb-8 title-shimmer">
            NUESTRA<br />HISTORIA
          </h2>

          <div className="space-y-6 text-sm md:text-base text-copper-light/80 font-mono leading-relaxed max-w-lg">
            <p>
              Nos conocimos en un concierto de nuestra banda favorita, rodeados de música y luces. Un cruce de miradas entre la multitud fue suficiente para saber que algo especial estaba a punto de comenzar.
            </p>
            <p>
              Lo que empezó como una amistad llena de risas y aventuras espontáneas, poco a poco se transformó en un amor profundo y sincero. Juntos hemos aprendido a disfrutar de las cosas simples, desde cocinar los domingos hasta perdernos en viajes sin rumbo fijo.
            </p>
            <p>
              Cinco años después de aquel primer encuentro, hemos decidido escribir el capítulo más importante de nuestras vidas. Nos emociona infinitamente compartir este momento mágico con todos ustedes.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative w-full mt-12 md:mt-0"
        >
          <div className="relative w-full aspect-[3/4] max-w-md mx-auto border border-copper p-3">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="https://i.postimg.cc/Xv6kq5yT/nuestra-historia-tema-industrial.jpg"
                alt="Nuestras manos"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative lines */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-copper" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-copper" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
