import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PaperPlaneIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
    <path fill="black" d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
    <path
      d="M8 12L11 15L16 9"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ContactButton({ loading, enviado }) {
  return (
    <motion.button
      type="submit"
      disabled={loading}
      whileHover={{
        scale: !loading ? 1.05 : 1,
        boxShadow: !loading ? '0 0 20px #FFD700, 0 0 40px #FFD700' : 'none',
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
      className={`relative w-48 h-14 font-semibold rounded-full overflow-hidden flex items-center justify-center ${
        loading || enviado ? 'bg-green-500 text-white' : 'bg-[#B8860B] text-black'
      }`}
      aria-label="Enviar consulta de micropigmentación capilar"
    >
      {/* Glow animado de fondo */}
      <motion.span
        className="absolute inset-0 rounded-full"
        initial={{ opacity: 0.6 }}
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle, #FFD70055, #FFD70022)',
          zIndex: 0,
        }}
      />

      {/* Contenido dinámico */}
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="relative z-10"
          >
            Enviando...
          </motion.div>
        ) : enviado ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex items-center gap-2 relative z-10"
          >
            <CheckIcon />
            <span>Enviado</span>
          </motion.div>
        ) : (
          <motion.div
            key="send"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 relative z-10"
          >
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, 4, -2, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <PaperPlaneIcon />
            </motion.div>
            <span>Enviar</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
