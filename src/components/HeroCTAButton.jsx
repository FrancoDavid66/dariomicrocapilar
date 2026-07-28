import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function HeroCTAButton() {
  return (
    <motion.a
      href="https://wa.me/5491153227308?text=Hola%20Dario%2C%20quiero%20reservar%20mi%20turno"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      aria-label="Reservar turno para micropigmentación capilar por WhatsApp"
      className="group relative inline-flex items-center gap-2.5 px-8 py-4 text-lg font-heading font-semibold rounded-full text-fondo bg-dorado shadow-gold transition-shadow duration-500 ease-premium hover:shadow-gold-lg overflow-hidden isolate"
    >
      {/* Capa de gradiente dorado base */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-gold-lite via-dorado to-gold-deep"
      />

      {/* Brillo diagonal que barre en hover (shimmer) */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-premium bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.55)_50%,transparent_75%)] bg-[length:220%_100%] bg-[position:120%_0] group-hover:animate-shimmer"
      />

      {/* Halo dorado pulsante detrás */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 -z-20 rounded-full bg-dorado/40 blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 ease-premium animate-pulse-gold"
      />

      <span className="relative z-10 tracking-wide transition-transform duration-500 ease-premium group-hover:translate-x-0.5">
        Reservá tu turno
      </span>

      <span className="relative z-10 flex items-center justify-center transition-transform duration-500 ease-premium group-hover:translate-x-1.5">
        <FiArrowRight size={20} strokeWidth={2.5} />
      </span>
    </motion.a>
  );
}
