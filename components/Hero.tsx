'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute -top-20 -left-20 w-96 h-96 border-[1px] border-copper rounded-full" />
        <div className="absolute top-10 left-10 w-64 h-64 border-[1px] border-copper rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] border-[1px] border-copper rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border-[1px] border-copper rounded-full" />
        
        {/* Grid lines */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #c48b71 1px, transparent 1px), linear-gradient(to bottom, #c48b71 1px, transparent 1px)', backgroundSize: '100px 100px', opacity: 0.2 }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 flex flex-col items-center"
      >
        <p className="font-mono text-xs tracking-[0.3em] uppercase mb-8 text-copper-light">
          Te invitamos a nuestra boda
        </p>
        
        <h1 className="font-outfit text-6xl md:text-8xl font-light tracking-widest mb-6 title-shimmer">
          ANA &<br />SANTIAGO
        </h1>

        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-copper" />
          <p className="font-mono text-sm tracking-[0.2em]">12 . OCT . 2026</p>
          <div className="h-[1px] w-12 bg-copper" />
        </div>

        <motion.div 
          className="relative w-72 h-[28rem] md:w-[32rem] md:h-[40rem] border border-copper p-3 mb-12"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="https://i.postimg.cc/g0qZrZGK/industrial-hero-tema.jpg"
              alt="Ana y Santiago"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <button 
          onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-copper-dark to-copper text-bg-dark font-mono text-xs tracking-widest uppercase py-3 px-8 hover:opacity-90 transition-opacity button-shimmer"
        >
          Confirmar Asistencia
        </button>
      </motion.div>
    </section>
  );
}
