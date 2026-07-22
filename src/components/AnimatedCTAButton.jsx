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
      initial="rest"
      animate="rest"
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.02 },
      }}
      className="relative inline-flex items-center justify-center gap-3 pl-7 pr-5 py-3 rounded-full bg-dorado text-black font-semibold shadow-md overflow-hidden transition-all duration-300"
      aria-label="Botón para contactar por WhatsApp a drmicrocapilar"
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
        className="absolute left-3 w-2.5 h-2.5 rounded-full bg-black opacity-70"
      />

      {/* Letras animadas individualmente */}
      <motion.span
        className="z-10 text-sm md:text-base flex gap-[1px]"
        initial="rest"
        whileHover="hover"
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={{
              rest: { y: 0 },
              hover: {
                y: [-1.5, -4, 0],
                transition: {
                  duration: 0.4,
                  delay: index * 0.025,
                  ease: 'easeOut',
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
        variants={{
          rest: { x: 0 },
          hover: {
            x: 5,
            transition: { type: 'spring', stiffness: 200, damping: 10 },
          },
        }}
        className="z-10 text-lg"
      >
        <FaArrowRight />
      </motion.span>
    </motion.a>
  );
}