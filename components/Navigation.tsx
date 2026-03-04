'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Music4, Menu, X } from 'lucide-react';

const sections = [
  { id: 'historia', label: 'Historia' },
  { id: 'ubicacion', label: 'Ubicación' },
  { id: 'itinerario', label: 'Itinerario' },
  { id: 'vestimenta', label: 'Vestimenta' },
  { id: 'rsvp', label: 'RSVP' },
  { id: 'hospedaje', label: 'Hospedaje' },
  { id: 'informacion', label: 'Información' },
];

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Placeholder romantic song
    audioRef.current.loop = true;

    // Try to play immediately (might be blocked by browser)
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPlaying(true);
      }).catch(error => {
        // Auto-play was prevented
        console.log("Autoplay prevented");
      });
    }

    const handleScroll = () => {
      // Show nav after scrolling past hero (approx 500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-4 right-4 z-50 flex justify-center"
        >
          <div className="w-full max-w-4xl bg-gradient-to-r from-copper-dark to-copper text-bg-dark rounded-full shadow-lg shadow-black/50 flex items-center justify-between px-4 py-2 relative">
            
            {/* Shimmer Background */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div className="w-full h-full button-shimmer"></div>
            </div>

            {/* Music Toggle */}
            <button 
              onClick={toggleMusic}
              className="w-10 h-10 rounded-full border border-bg-dark/30 flex items-center justify-center hover:bg-bg-dark/10 transition-colors z-10"
              aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
            >
              {isPlaying ? <Music className="w-5 h-5" /> : <Music4 className="w-5 h-5 opacity-50" />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 z-10">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="font-mono text-[10px] tracking-widest uppercase hover:text-white transition-colors"
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-bg-dark/10 transition-colors z-10"
              aria-label="Menú"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Menu Dropdown (Drop-up) */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-[calc(100%+1rem)] right-0 bg-gradient-to-b from-copper-dark to-copper rounded-2xl p-4 shadow-xl flex flex-col gap-4 min-w-[200px] z-10 border border-copper-light/20"
                >
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="font-mono text-xs tracking-widest uppercase text-bg-dark text-right hover:text-white transition-colors py-2 border-b border-bg-dark/10 last:border-0"
                    >
                      {section.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
