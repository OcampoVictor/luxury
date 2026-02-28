'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    restrictions: '',
    song: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('¡Gracias por confirmar tu asistencia!');
  };

  return (
    <section id="rsvp" className="py-24 px-4 border-t border-copper/20 relative">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
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
              Esperamos contar con tu presencia
            </p>
            <div className="h-[1px] w-12 bg-copper" />
          </div>
          <h2 className="font-outfit text-4xl md:text-5xl font-light title-shimmer">
            CONFIRMAR ASISTENCIA
          </h2>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="w-full border border-copper/30 p-8 md:p-12 bg-bg-dark/50 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] tracking-widest uppercase text-copper-light">
                Nombre Completo
              </label>
              <input 
                type="text" 
                required
                placeholder="Tu nombre y apellido"
                className="bg-transparent border-b border-copper/50 p-2 text-sm font-sans focus:outline-none focus:border-copper transition-colors placeholder:text-copper/30"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] tracking-widest uppercase text-copper-light">
                No. Invitados
              </label>
              <select 
                className="bg-transparent border-b border-copper/50 p-2 text-sm font-sans focus:outline-none focus:border-copper transition-colors text-copper"
                value={formData.guests}
                onChange={e => setFormData({...formData, guests: e.target.value})}
              >
                <option value="1" className="bg-bg-dark">1</option>
                <option value="2" className="bg-bg-dark">2</option>
                <option value="3" className="bg-bg-dark">3</option>
                <option value="4" className="bg-bg-dark">4</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-8">
            <label className="font-mono text-[10px] tracking-widest uppercase text-copper-light">
              Restricciones Alimenticias
            </label>
            <select 
              className="bg-transparent border-b border-copper/50 p-2 text-sm font-sans focus:outline-none focus:border-copper transition-colors text-copper"
              value={formData.restrictions}
              onChange={e => setFormData({...formData, restrictions: e.target.value})}
            >
              <option value="" className="bg-bg-dark">Seleccione una opción</option>
              <option value="ninguna" className="bg-bg-dark">Ninguna</option>
              <option value="vegetariano" className="bg-bg-dark">Vegetariano</option>
              <option value="vegano" className="bg-bg-dark">Vegano</option>
              <option value="alergias" className="bg-bg-dark">Alergias (especificar al enviar)</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 mb-12">
            <label className="font-mono text-[10px] tracking-widest uppercase text-copper-light">
              Canción que no puede faltar
            </label>
            <input 
              type="text" 
              placeholder="Título - Artista"
              className="bg-transparent border-b border-copper/50 p-2 text-sm font-sans focus:outline-none focus:border-copper transition-colors placeholder:text-copper/30"
              value={formData.song}
              onChange={e => setFormData({...formData, song: e.target.value})}
            />
          </div>

          <div className="flex justify-center">
            <button 
              type="submit"
              className="bg-gradient-to-r from-copper-dark to-copper text-bg-dark font-mono text-xs tracking-widest uppercase py-4 px-12 hover:opacity-90 transition-opacity button-shimmer"
            >
              Confirmar Asistencia
            </button>
          </div>
        </motion.form>

      </div>
    </section>
  );
}
