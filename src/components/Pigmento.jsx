import { motion } from 'framer-motion';
import pigmento from '../assets/images/pigmentacion_tinta.webp';
import logo from '../assets/images/logo_horizontal_dorado.webp';

export default function Pigmento() {
  return (
    <section
      id="pigmento"
      className="relative bg-fondo text-ink py-20 px-6 overflow-hidden"
      aria-label="Pigmento profesional usado por Dariomicrocapilar"
    >
      <div className="relative max-w-3xl mx-auto">
        {/* Imagen del pigmento */}
        <img
          src={pigmento}
          alt="Pigmento profesional 5PM Shadow SMP para micropigmentación capilar"
          className="w-full h-auto rounded-2xl relative z-0"
          loading="lazy"
          decoding="async"
        />

        {/* Logo flotando ENCIMA de la imagen (z-index mayor) */}
        <motion.img
          src={logo}
          alt="Logo de Dariomicrocapilar"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-6 left-1/2 -translate-x-1/2 z-10 w-44 sm:w-56 object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)] animate-floaty"
        />
      </div>
    </section>
  );
}
