import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import AnimatedCTAButton from './AnimatedCTAButton';

// 📸 Fotos reales de trabajos de Dario
import trabajo_1 from '../assets/images/imagen_1.webp';
import trabajo_2 from '../assets/images/imagen_2.webp';
import trabajo_3 from '../assets/images/imagen_5.webp';
import trabajo_4 from '../assets/images/imagen_6.webp';
import trabajo_5 from '../assets/images/imagen_8_despues.webp';
import trabajo_6 from '../assets/images/imagen_7_antes.webp';

const trabajos = [
  { url: trabajo_1 },
  { url: trabajo_2 },
  { url: trabajo_5 },
  { url: trabajo_4 },
  { url: trabajo_3 },
  { url: trabajo_6 },
];

export default function RealClientGallery() {
  const [activa, setActiva] = useState(null);
  const [indice, setIndice] = useState(0);
  const [abierto, setAbierto] = useState(false);

  const abrir = (i) => {
    setIndice(i);
    setActiva(trabajos[i]);
  };
  const cerrar = () => setActiva(null);
  const siguiente = () => {
    const n = (indice + 1) % trabajos.length;
    setIndice(n);
    setActiva(trabajos[n]);
  };
  const anterior = () => {
    const p = (indice - 1 + trabajos.length) % trabajos.length;
    setIndice(p);
    setActiva(trabajos[p]);
  };

  return (
    <section
      id="galeria"
      className="relative bg-fondo text-ink py-24 px-6 overflow-hidden"
      aria-label="Trabajos reales de Dariomicrocapilar"
    >
      {/* halo ambiental */}
      <div className="pointer-events-none absolute -top-32 right-0 w-[460px] h-[460px] gold-halo blur-[90px] opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-dorado mb-3">
            Trabajos reales
          </p>
          <h2 className="text-3xl md:text-5xl font-heading text-ink mb-4">
            Trabajos reales, sin filtros
          </h2>
          <p className="text-ink-soft text-lg">
            Cada foto es de un trabajo real de Dario. Resultados naturales de micropigmentación capilar.
          </p>
        </motion.div>

        {/* Botón desplegable */}
        <div className="flex justify-center mb-8">
          <motion.button
            onClick={() => setAbierto((v) => !v)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2.5 rounded-full border border-dorado/40 bg-dorado/5 px-6 py-3 text-dorado font-medium transition-all duration-300 hover:bg-dorado/10 hover:border-dorado/60 hover:shadow-gold"
            aria-expanded={abierto}
            aria-controls="grid-trabajos"
          >
            {abierto ? 'Ocultar trabajos' : 'Ver trabajos reales'}
            <IoIosArrowDown
              className={`text-lg transition-transform duration-300 ${abierto ? 'rotate-180' : ''}`}
            />
          </motion.button>
        </div>

        {/* GRID masonry (plegable) */}
        <AnimatePresence initial={false}>
          {abierto && (
            <motion.div
              id="grid-trabajos"
              key="grid"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance] pt-2">
                {trabajos.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                    onClick={() => abrir(i)}
                    className="relative mb-4 break-inside-avoid cursor-pointer group overflow-hidden rounded-2xl border border-line"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && abrir(i)}
                    aria-label="Ampliar trabajo real"
                  >
                    <img
                      src={t.url}
                      alt="Trabajo real de micropigmentación capilar de Dario"
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-fondo/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LIGHTBOX */}
        <AnimatePresence>
          {activa && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={cerrar}
              aria-modal="true"
              role="dialog"
            >
              <div className="relative w-full max-w-2xl mx-auto" onClick={(e) => e.stopPropagation()}>
                <motion.img
                  key={activa.url}
                  src={activa.url}
                  alt="Trabajo real de micropigmentación capilar"
                  initial={{ scale: 0.94, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.94, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-2xl w-full max-h-[80vh] object-contain shadow-2xl"
                />
                <button
                  onClick={cerrar}
                  className="absolute -top-2 right-0 md:-right-2 w-11 h-11 rounded-full bg-surface border border-line text-ink flex items-center justify-center hover:text-dorado"
                  aria-label="Cerrar"
                >
                  <FaTimes />
                </button>
                <button onClick={anterior}
                  className="absolute top-1/2 -left-2 md:-left-14 -translate-y-1/2 w-11 h-11 rounded-full bg-surface border border-line text-dorado flex items-center justify-center hover:scale-110 transition"
                  aria-label="Anterior">
                  <FaArrowLeft />
                </button>
                <button onClick={siguiente}
                  className="absolute top-1/2 -right-2 md:-right-14 -translate-y-1/2 w-11 h-11 rounded-full bg-surface border border-line text-dorado flex items-center justify-center hover:scale-110 transition"
                  aria-label="Siguiente">
                  <FaArrowRight />
                </button>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-ink-muted">
                  {indice + 1} / {trabajos.length}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="w-full mt-14 flex justify-center">
          <AnimatedCTAButton
            text="Quiero resultados así"
            href="https://wa.me/5491153227308?text=Hola%20Dario,%20vi%20tus%20trabajos%20reales%20y%20me%20gustaría%20saber%20más"
          />
        </div>
      </div>
    </section>
  );
}