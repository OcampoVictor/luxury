'use client';

import { motion } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
      <motion.button
        onClick={scrollToTop}
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="w-12 h-12 bg-bg-dark border border-copper rounded-full flex items-center justify-center text-copper hover:bg-copper hover:text-bg-dark transition-colors"
        aria-label="Volver arriba"
      >
        <ChevronUp className="w-6 h-6" strokeWidth={1.5} />
      </motion.button>
    </div>
  );
}
