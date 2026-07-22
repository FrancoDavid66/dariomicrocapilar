import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function HeroCTAButton() {
  return (
    <motion.a
      href="https://wa.me/5491153227308?text=Hola%20Dario%2C%20quiero%20reservar%20mi%20turno"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
      className="group relative inline-flex items-center gap-2 px-6 py-3 text-lg rounded-full border-2 border-[#B8860B] text-[#B8860B] font-medium overflow-hidden transition-colors duration-300 hover:bg-[#B8860B] hover:text-[#0e0e0e] before:absolute before:inset-0 before:rounded-full before:bg-[#B8860B] before:opacity-0 hover:before:opacity-10 before:transition-opacity before:duration-300"
      aria-label="Reservar turno para micropigmentación capilar por WhatsApp"
    >
      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
        Reservá tu turno
      </span>
      <FiArrowRight
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
        size={20}
      />
    </motion.a>
  );
}
