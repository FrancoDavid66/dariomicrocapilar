import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

export default function AnimatedVideoButton({ onClick }) {
  return (
    <div className="text-center space-y-3">
      {/* Subtítulo animado con SEO */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="italic text-sm text-gray-600"
      >
        Ver video del procedimiento de micropigmentación
      </motion.p>

      {/* Botón animado */}
      <motion.button
        onClick={onClick}
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{
          rest: {
            scale: 1,
            borderRadius: '2rem',
            width: 'auto',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            minWidth: '12rem',
          },
          hover: {
            scale: 1.05,
            borderRadius: '9999px',
            width: '3.5rem',
            paddingLeft: '0rem',
            paddingRight: '0rem',
            transition: { type: 'spring', stiffness: 300, damping: 15 },
          },
        }}
        className="relative inline-flex items-center justify-center gap-3 py-3 h-14 bg-black text-white font-semibold shadow-md overflow-hidden transition-all duration-300"
        aria-label="Ver video explicativo del tratamiento de micropigmentación capilar"
      >
        {/* Círculo animado */}
        <motion.span
          variants={{
            rest: { x: -20, opacity: 0 },
            hover: {
              x: 0,
              opacity: 1,
              transition: { type: 'spring', stiffness: 200, damping: 10 },
            },
          }}
          className="absolute left-3 w-2.5 h-2.5 rounded-full bg-white opacity-70"
        />

        {/* Ícono FaPlay centrado */}
        <motion.span
          className="z-10 text-lg"
          variants={{
            rest: { scale: 1, rotate: 0 },
            hover: {
              scale: 1.4,
              rotate: 360,
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 15,
              },
            },
          }}
        >
          <FaPlay />
        </motion.span>
      </motion.button>
    </div>
  );
}