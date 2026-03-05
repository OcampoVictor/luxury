'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export function DressCode() {
  const [activeTab, setActiveTab] = useState<'mujeres' | 'hombres'>('mujeres');

  return (
    <section id="vestimenta" className="py-24 px-4 border-t border-copper/20 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
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
              Formal / Etiqueta
            </p>
            <div className="h-[1px] w-12 bg-copper" />
          </div>
          <h2 className="font-outfit text-4xl md:text-5xl font-light title-shimmer">
            CÓDIGO DE VESTIMENTA
          </h2>
        </motion.div>

        <div className="w-full flex flex-col items-center">
          
          {/* Tabs */}
          <div className="flex gap-8 mb-12 border-b border-copper/30">
            <button
              onClick={() => setActiveTab('mujeres')}
              className={`pb-4 font-mono text-xs tracking-widest uppercase transition-colors relative ${
                activeTab === 'mujeres' ? 'text-copper' : 'text-copper/50 hover:text-copper/80'
              }`}
            >
              Mujeres
              {activeTab === 'mujeres' && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-copper"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('hombres')}
              className={`pb-4 font-mono text-xs tracking-widest uppercase transition-colors relative ${
                activeTab === 'hombres' ? 'text-copper' : 'text-copper/50 hover:text-copper/80'
              }`}
            >
              Hombres
              {activeTab === 'hombres' && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-copper"
                />
              )}
            </button>
          </div>

          {/* Content */}
          <div className="w-full relative min-h-[550px] md:min-h-[350px] flex justify-center">
            <AnimatePresence mode="wait">
              {activeTab === 'mujeres' ? (
                <motion.div
                  key="mujeres"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col md:flex-row items-center gap-8 max-w-2xl absolute w-full"
                >
                  <div className="relative w-48 h-72 border border-copper p-2 shrink-0">
                    <div className="relative w-full h-full overflow-hidden">
                      <Image 
                        src="https://i.postimg.cc/W1nCSCR9/tema-luxury-codigo-vestimenta-mujer.jpg" 
                        alt="Ejemplo Vestido" 
                        fill 
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover" 
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="font-outfit text-2xl tracking-widest mb-4">VESTIDO LARGO</h3>
                    <p className="font-mono text-sm text-copper-light leading-relaxed mb-8">
                      Sugerimos vestidos largos o midi elegantes. Por favor, reserva el color blanco y tonos similares exclusivamente para la novia.
                    </p>
                    
                    <div className="flex flex-col items-center md:items-start gap-3">
                      <p className="font-mono text-[10px] tracking-widest uppercase text-copper/60">
                        Colores sugeridos
                      </p>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#1a2b3c] border border-copper/30" title="Azul Marino" />
                        <div className="w-8 h-8 rounded-full bg-[#3d2b1f] border border-copper/30" title="Café Oscuro" />
                        <div className="w-8 h-8 rounded-full bg-[#2c3e2d] border border-copper/30" title="Verde Bosque" />
                        <div className="w-8 h-8 rounded-full bg-[#4a1c1c] border border-copper/30" title="Vino" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="hombres"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col md:flex-row items-center gap-8 max-w-2xl absolute w-full"
                >
                  <div className="relative w-48 h-72 border border-copper p-2 shrink-0">
                    <div className="relative w-full h-full overflow-hidden">
                      <Image 
                        src="https://i.postimg.cc/15DLV4Jb/tema-luxury-codigo-vestimenta-hombre.jpg" 
                        alt="Ejemplo Traje" 
                        fill 
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover" 
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="font-outfit text-2xl tracking-widest mb-4">TRAJE OSCURO</h3>
                    <p className="font-mono text-sm text-copper-light leading-relaxed mb-8">
                      Sugerimos traje formal en tonos oscuros con corbata o moño. Zapatos de vestir obligatorios.
                    </p>
                    
                    <div className="flex flex-col items-center md:items-start gap-3">
                      <p className="font-mono text-[10px] tracking-widest uppercase text-copper/60">
                        Colores sugeridos
                      </p>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#111111] border border-copper/30" title="Negro" />
                        <div className="w-8 h-8 rounded-full bg-[#1a2b3c] border border-copper/30" title="Azul Marino" />
                        <div className="w-8 h-8 rounded-full bg-[#2a2a2a] border border-copper/30" title="Gris Oscuro" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
