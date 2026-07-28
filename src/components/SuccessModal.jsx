import { motion, AnimatePresence } from 'framer-motion';

export default function SuccessModal({ visible, onClose }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Mensaje enviado con éxito"
        >
          <motion.div
            className="glass relative w-full max-w-sm overflow-hidden rounded-2xl border border-line px-8 py-10 text-center text-ink shadow-gold-lg"
            initial={{ scale: 0.85, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 16 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Halo dorado de fondo */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-56 gold-halo blur-[70px] opacity-60" />

            {/* Botón cerrar (X) */}
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink-muted transition-all duration-300 ease-premium hover:border-dorado/50 hover:text-dorado hover:scale-110"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>

            {/* Ícono check dorado animado */}
            <motion.div
              className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 18 }}
            >
              {/* Anillos pulsantes */}
              <motion.span
                className="absolute inset-0 rounded-full border border-dorado/40"
                initial={{ scale: 0.6, opacity: 0.8 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ delay: 0.4, duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
              />
              <motion.span
                className="absolute inset-0 rounded-full border border-dorado/30"
                initial={{ scale: 0.6, opacity: 0.6 }}
                animate={{ scale: 1.9, opacity: 0 }}
                transition={{ delay: 0.7, duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
              />
              {/* Disco dorado */}
              <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-gold-lite via-dorado to-gold-deep shadow-gold">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0A0A0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <motion.path
                    d="M4 12.5l5 5L20 6.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.45, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>
              </div>
            </motion.div>

            {/* Textos */}
            <motion.h2
              className="relative z-10 mb-3 font-heading text-2xl text-gold-gradient"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              ¡Mensaje Enviado!
            </motion.h2>
            <motion.p
              className="relative z-10 mb-7 text-sm leading-relaxed text-ink-soft"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Gracias por contactarme. Te respondere a la brevedad.
            </motion.p>

            {/* Botón cerrar */}
            <motion.button
              onClick={onClose}
              className="group relative z-10 inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-gold-lite via-dorado to-gold-deep px-8 py-3 text-sm font-semibold text-fondo shadow-gold transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-gold-lg"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-700 ease-premium group-hover:translate-x-full" />
              <span className="relative">Cerrar</span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
