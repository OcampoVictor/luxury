'use client';

import { motion } from 'motion/react';

const gifts = [
  { name: 'LIVERPOOL', text: 'Mesa de regalos', link: 'VER MESA', url: '#' },
  { name: 'AMAZON', text: 'Wishlist', link: 'VER MESA', url: '#' },
  { name: 'HONEYMOON', text: 'Fondo de viaje', link: 'CONTRIBUIR', url: '#' },
];

export function Information() {
  return (
    <section id="informacion" className="py-24 px-4 border-t border-copper/20 relative">
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
              Regalos y detalles para el evento
            </p>
            <div className="h-[1px] w-12 bg-copper" />
          </div>
          <h2 className="font-outfit text-4xl md:text-5xl font-light title-shimmer">
            INFORMACIÓN
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {gifts.map((gift, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center border border-copper/50 p-8 hover:bg-copper/5 transition-colors"
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="font-outfit text-xl mb-2 tracking-widest">{gift.name}</h3>
              <p className="font-mono text-[10px] tracking-widest uppercase text-copper-light mb-8">
                {gift.text}
              </p>
              <a 
                href={gift.url}
                className="bg-gradient-to-r from-copper-dark to-copper text-bg-dark font-mono text-[10px] tracking-widest uppercase py-3 px-8 hover:opacity-90 transition-opacity button-shimmer"
              >
                {gift.link}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
