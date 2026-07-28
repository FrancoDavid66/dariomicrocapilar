import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function AnimatedCTAButton({ text = 'Quiero un resultado así', href }) {
  const letters = text.split('');

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      initial="rest"
      animate="rest"
      variants={{
        rest: { scale: 1, y: 0 },
        hover: {
          scale: 1.03,
          y: -2,
          transition: { type: 'spring', stiffness: 260, damping: 18 },
        },
      }}
      className="group relative inline-flex items-center justify-center gap-3 pl-7 pr-5 py-3.5 rounded-full font-heading font-semibold text-black overflow-hidden shadow-gold hover:shadow-gold-lg transition-shadow duration-500 ease-premium"
      aria-label="Botón para contactar por WhatsApp a dariomicrocapilar"
    >
      {/* Base dorada con gradiente */}
      <span className="absolute inset-0 bg-gradient-to-r from-gold-deep via-dorado to-gold-lite" />

      {/* Brillo shimmer que cruza en hover */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent"
        variants={{
          rest: { x: '-150%', opacity: 0 },
          hover: {
            x: '150%',
            opacity: 1,
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
          },
        }}
      />

      {/* Halo dorado pulsante detrás */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-full bg-dorado/40 blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-premium"
      />

      {/* Ring dorado que respira */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/40"
        variants={{
          rest: { opacity: 0.3, scale: 1 },
          hover: {
            opacity: [0.6, 0, 0.6],
            scale: [1, 1.06, 1],
            transition: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' },
          },
        }}
      />

      {/* Círculo animado que entra por la izquierda */}
      <motion.span
        aria-hidden="true"
        variants={{
          rest: { x: -20, opacity: 0, scale: 0.4 },
          hover: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', stiffness: 220, damping: 12 },
          },
        }}
        className="absolute left-3.5 w-2.5 h-2.5 rounded-full bg-black/80"
      />

      {/* Letras animadas individualmente */}
      <motion.span
        className="relative z-10 text-sm md:text-base flex gap-[0.5px] tracking-tight"
        initial="rest"
        variants={{ rest: {}, hover: {} }}
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              rest: { y: 0 },
              hover: {
                y: [0, -5, 0],
                transition: {
                  duration: 0.45,
                  delay: index * 0.028,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>

      {/* Ícono con desplazamiento */}
      <motion.span
        aria-hidden="true"
        variants={{
          rest: { x: 0, rotate: 0 },
          hover: {
            x: 6,
            rotate: -8,
            transition: { type: 'spring', stiffness: 240, damping: 12 },
          },
        }}
        className="relative z-10 text-lg"
      >
        <FaArrowRight />
      </motion.span>
    </motion.a>
  );
}
