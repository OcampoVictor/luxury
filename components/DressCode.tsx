'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shirt } from 'lucide-react';

const DressIcon = ({ className, strokeWidth = 1 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9.5 2h5l3 6-2.5 2v12h-6V10L6.5 8l3-6Z"/>
    <path d="M9.5 6h5"/>
  </svg>
);

export function DressCode() {
  const [activeTab, setActiveTab] = useState<'mujeres' | 'hombres'>('mujeres');

  return (
    <section className="py-24 px-4 border-t border-copper/20 relative">
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
          <div className="w-full relative min-h-[250px] flex justify-center">
            <AnimatePresence mode="wait">
              {activeTab === 'mujeres' ? (
                <motion.div
                  key="mujeres"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center text-center max-w-md absolute"
                >
                  <DressIcon className="w-12 h-12 text-copper mb-6" strokeWidth={1} />
                  <h3 className="font-outfit text-2xl tracking-widest mb-4">VESTIDO LARGO</h3>
                  <p className="font-mono text-sm text-copper-light leading-relaxed mb-8">
                    Sugerimos vestidos largos o midi elegantes. Por favor, reserva el color blanco y tonos similares exclusivamente para la novia.
                  </p>
                  
                  <div className="flex flex-col items-center gap-3">
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
                </motion.div>
              ) : (
                <motion.div
                  key="hombres"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center text-center max-w-md absolute"
                >
                  <Shirt className="w-12 h-12 text-copper mb-6" strokeWidth={1} />
                  <h3 className="font-outfit text-2xl tracking-widest mb-4">TRAJE OSCURO</h3>
                  <p className="font-mono text-sm text-copper-light leading-relaxed mb-8">
                    Sugerimos traje formal en tonos oscuros con corbata o moño. Zapatos de vestir obligatorios.
                  </p>
                  
                  <div className="flex flex-col items-center gap-3">
                    <p className="font-mono text-[10px] tracking-widest uppercase text-copper/60">
                      Colores sugeridos
                    </p>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#111111] border border-copper/30" title="Negro" />
                      <div className="w-8 h-8 rounded-full bg-[#1a2b3c] border border-copper/30" title="Azul Marino" />
                      <div className="w-8 h-8 rounded-full bg-[#2a2a2a] border border-copper/30" title="Gris Oscuro" />
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
