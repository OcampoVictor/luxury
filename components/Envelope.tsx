'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

interface EnvelopeProps {
  onOpenComplete: () => void;
}

export function Envelope({ onOpenComplete }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isVibrating, setIsVibrating] = useState(false);

  const handleOpen = () => {
    if (isOpening || isOpened) return;
    
    setIsVibrating(true); // Usaremos isVibrating para el shimmer
    
    // Shimmer por 600ms, luego empezar a abrir
    setTimeout(() => {
      setIsVibrating(false);
      setIsOpening(true);
      
      // Esperar a que la solapa se abra (1s), luego mostrar el texto
      setTimeout(() => {
        setIsOpened(true);
        
        // Esperar a que el texto se lea (2.5s), luego hacer la transición final
        setTimeout(() => {
          onOpenComplete();
        }, 2500);
      }, 1000);
    }, 600);
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fdfbf7] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`
      }}
    >
      <div className="relative w-[90vw] max-w-md aspect-[3/4] flex items-center justify-center">
        
        {/* Cuerpo del sobre (Base/Interior) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Image 
            src="https://i.postimg.cc/J47F6mmM/luxury-cuerpo.webp"
            alt="Cuerpo del sobre"
            fill
            className="object-contain"
            style={{ filter: 'drop-shadow(0px 0px 1px rgba(0,0,0,0.4)) drop-shadow(0px 10px 15px rgba(0,0,0,0.2))' }}
            priority
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Solapa del sobre */}
        <motion.div 
          className={`absolute inset-0 z-20 flex items-center justify-center origin-top cursor-pointer ${isVibrating ? 'brightness-125 contrast-125' : ''}`}
          animate={{ y: isOpening ? -70 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onClick={handleOpen}
        >
          <Image 
            src="https://i.postimg.cc/T3FH3Dbw/luxury-solapa.webp"
            alt="Solapa del sobre"
            fill
            className="object-contain"
            style={{ filter: 'drop-shadow(0px 0px 1px rgba(0,0,0,0.4)) drop-shadow(0px 4px 6px rgba(0,0,0,0.3))' }}
            priority
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Texto que aparece después de abrir */}
        <AnimatePresence>
          {isOpened && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute z-30 flex flex-col items-center justify-center text-center w-full px-6"
            >
              <p className="font-outfit text-xl md:text-2xl text-[#111111] tracking-widest uppercase bg-[#fdfbf7]/90 p-6 rounded-lg shadow-xl backdrop-blur-sm border border-[#111111]/10">
                Esta invitación es exclusiva para ti
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
      
      {!isOpening && !isOpened && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 font-mono text-xs tracking-widest text-[#111111]/60 uppercase"
        >
          Toca el sello para abrir
        </motion.p>
      )}
    </motion.div>
  );
}
