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

  const handleOpen = () => {
    if (isOpening || isOpened) return;

    setIsOpening(true);

    // Esperar a que la solapa se abra y luego mostrar la invitación
    setTimeout(() => {
      setIsOpened(true);
      onOpenComplete();
    }, 1200);
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
      {/* Contenedor responsive: full en móvil, fijo en desktop. Sin overflow-hidden para que la solapa se vea saliendo. */}
      <div className="relative w-full h-[100dvh] md:w-[90vw] md:max-w-md md:h-auto md:aspect-[3/4] flex items-center justify-center">

        {/* Cuerpo del sobre (Base/Interior) */}
        <div className="absolute inset-0 w-full h-full z-10 flex items-center justify-center">
          <Image
            src="https://i.postimg.cc/J47F6mmM/luxury-cuerpo.webp"
            alt="Cuerpo del sobre"
            fill
            className="md:object-contain object-cover"
            style={{ filter: 'drop-shadow(0px 0px 1px rgba(0,0,0,0.4)) drop-shadow(0px 10px 15px rgba(0,0,0,0.2))' }}
            priority
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Solapa del sobre */}
        <motion.div
          className="absolute inset-0 w-full h-full z-20 flex items-center justify-center origin-top cursor-pointer"
          animate={{ y: isOpening ? "-100px" : "0px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onClick={handleOpen}
        >
          <Image
            src="https://i.postimg.cc/T3FH3Dbw/luxury-solapa.webp"
            alt="Solapa del sobre"
            fill
            className="md:object-contain object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Texto 'Toca el sello para abrir' alineado debajo de 'exclusiva para ti' */}
        {!isOpening && !isOpened && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: 1,
              y: [0, -5, 0]
            }}
            transition={{
              opacity: { delay: 1, duration: 1 },
              y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
            }}
            className="absolute z-50 flex items-center justify-center w-full pointer-events-none"
            style={{ top: '78%' }} // Posicionado más abajo para quedar bajo "exclusiva para ti"
          >
            <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#111111]/80 uppercase">
              Toca el sello para abrir
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
