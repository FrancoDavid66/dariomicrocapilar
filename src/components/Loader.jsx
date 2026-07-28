import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Oculta el loader cuando la página terminó de cargar (o tras un mínimo elegante)
    const min = new Promise((r) => setTimeout(r, 1800));
    const load = new Promise((r) => {
      if (document.readyState === 'complete') r();
      else window.addEventListener('load', r, { once: true });
    });
    Promise.all([min, load]).then(() => setVisible(false));
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-fondo"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Cargando"
          role="status"
        >
          {/* Halo dorado que respira detrás de la D */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute w-[340px] h-[340px] gold-halo blur-[90px]"
            animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Monograma D — se traza solo (draw) */}
          <svg
            width="120"
            height="132"
            viewBox="0 0 72 90"
            fill="none"
            className="relative"
          >
            <defs>
              <linearGradient id="loaderGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#EBCB86" />
                <stop offset="1" stopColor="#B8860B" />
              </linearGradient>
            </defs>

            {/* Contorno de la D */}
            <motion.path
              d="M6 4 h20 c24 0 40 16 40 38 s-16 38 -40 38 h-20 z"
              stroke="url(#loaderGold)"
              strokeWidth="3.2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Marcas de "folículo" que aparecen después */}
            {[
              'M22 26 v14',
              'M33 22 v22',
              'M44 26 v14',
            ].map((d, i) => (
              <motion.path
                key={i}
                d={d}
                stroke="url(#loaderGold)"
                strokeWidth="2.8"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.1 + i * 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            ))}
          </svg>

          {/* Lockup de marca IDÉNTICO al logo (Poppins "Dario" + Inter "MICROCAPILAR") */}
          <motion.div
            className="mt-6 flex flex-col items-center leading-none"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <span
              className="text-gold-gradient"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '30px',
                letterSpacing: '-1.5px',
              }}
            >
              Dario
            </span>
            <span
              className="text-dorado"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '6px',
                marginTop: '5px',
                paddingLeft: '6px',
              }}
            >
              MICROCAPILAR
            </span>
          </motion.div>

          {/* Barra de progreso mínima */}
          <div className="mt-6 h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-lite via-dorado to-gold-deep"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}