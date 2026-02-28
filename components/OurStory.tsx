'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function OurStory() {
  return (
    <section className="py-24 px-4 border-t border-copper/20 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
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
              Todo comenzó con una taza de café en una tarde lluviosa de otoño. Lo que parecía ser un encuentro casual pronto se convirtió en horas de conversación sobre sueños, miedos y pasiones compartidas.
            </p>
            <p>
              Desde ese día, nuestras vidas se entrelazaron de la manera más hermosa. Hemos recorrido ciudades juntas, superado desafíos y celebrado cada pequeño triunfo como un equipo.
            </p>
            <p>
              Hoy, después de tres años de construir memorias inolvidables, estamos listos para dar el siguiente gran paso y prometernos amor eterno frente a las personas que más queremos.
            </p>
          </div>

          <div className="mt-12">
            <p className="font-outfit text-xl tracking-widest uppercase">
              ANA + SANTIAGO
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="relative w-full aspect-[3/4] max-w-md mx-auto border border-copper p-3">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="https://i.postimg.cc/Xv6kq5yT/nuestra-historia-tema-industrial.jpg"
                alt="Nuestras manos"
                fill
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
