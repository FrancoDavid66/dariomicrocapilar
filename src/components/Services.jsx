import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import bg_logo from '../assets/images/icono_dorado.webp';
import { RxCross2 } from 'react-icons/rx';

import cicatrices from '../assets/images/cicatrices.webp';
import densidad from '../assets/images/densidad.webp';
import rapado from '../assets/images/rapado.webp';

const servicios = [
  {
    img: rapado,
    width: 640,
    height: 360,
    title: 'Efecto rapado',
    description:
      'Simula un look rapado de 3 a 5 mm. Ideal para alopecia avanzada. Estilo natural y práctico.',
    extra:
      'No requiere mantenimiento diario. Apariencia masculina y prolija.',
  },
  {
    img: densidad,
    width: 640,
    height: 360,
    title: 'Efecto densidad',
    description:
      'Aumenta el volumen visual en zonas de poco cabello como entradas o coronilla.',
    extra:
      'Rejuvenece el aspecto y da una apariencia más llena.',
  },
  {
    img: cicatrices,
    width: 640,
    height: 360,
    title: 'Camuflaje de cicatrices',
    description:
      'Disimula cicatrices por injertos, cirugías o accidentes adaptándose al tono capilar.',
    extra:
      'Resultado natural e imperceptible. Apto para FUE, FUT y más.',
  },
];

function ServiceCard({ serv, index, activo, onSelect }) {
  const cardRef = useRef(null);
  const [spot, setSpot] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const numero = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      ref={cardRef}
      onClick={() => onSelect(serv)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -10 }}
      className={`group relative flex flex-col cursor-pointer overflow-hidden rounded-2xl bg-surface border transition-colors duration-500 ease-premium ${
        activo
          ? 'border-dorado shadow-gold-lg'
          : 'border-line hover:border-dorado/60 hover:shadow-gold-lg'
      }`}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalles del servicio ${serv.title}`}
    >
      {/* Spotlight dorado que sigue el mouse */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(360px circle at ${spot.x}% ${spot.y}%, rgba(212,163,74,0.18), transparent 60%)`,
        }}
      />

      {/* Borde dorado animado en hover */}
      <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl ring-1 ring-inset ring-dorado/0 group-hover:ring-dorado/40 transition-all duration-500" />

      {/* Número */}
      <span className="absolute top-4 right-5 z-20 font-heading text-5xl leading-none text-gold-gradient opacity-15 transition-all duration-500 ease-premium group-hover:opacity-90 group-hover:-translate-y-1">
        {numero}
      </span>

      {/* Imagen */}
      <div className="relative overflow-hidden">
        <img
          src={serv.img}
          srcSet={`${serv.img}?w=320 320w, ${serv.img}?w=480 480w, ${serv.img}?w=640 640w`}
          sizes="(max-width: 768px) 100vw, 33vw"
          alt={`Servicio de micropigmentación: ${serv.title}`}
          width={serv.width}
          height={serv.height}
          className="w-full h-52 object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
        {/* Ícono dorado que escala */}
        <motion.img
          src={bg_logo}
          alt=""
          aria-hidden="true"
          className="absolute bottom-3 left-5 w-11 h-11 object-contain drop-shadow-[0_0_10px_rgba(212,163,74,0.5)] transition-transform duration-500 ease-premium group-hover:scale-125 group-hover:-rotate-6"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 p-6 flex flex-col flex-1">
        <h3 className="text-xl font-heading font-semibold text-ink mb-2 transition-colors duration-300 group-hover:text-dorado">
          {serv.title}
        </h3>
        <p className="text-ink-soft text-sm leading-relaxed flex-1">
          {serv.description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold tracking-wide text-dorado">
          Saber más
          <span className="inline-block transition-transform duration-300 ease-premium group-hover:translate-x-1.5">
            →
          </span>
        </span>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [servicioActivo, setServicioActivo] = useState(null);

  return (
    <section
      id="servicios"
      className="relative bg-fondo text-ink py-24 px-4 sm:px-6 overflow-hidden"
      aria-label="Sección de servicios de micropigmentación capilar"
    >
      {/* Halos dorados de fondo */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] gold-halo blur-[90px] opacity-40 z-0" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 w-[480px] h-[480px] gold-halo blur-[100px] opacity-30 z-0" />

      {/* Logo de fondo difuminado */}
      <motion.img
        src={bg_logo}
        alt="Logo de dariomicrocapilar difuminado"
        className="absolute inset-0 mx-auto w-72 sm:w-[500px] opacity-5 z-0 pointer-events-none animate-floaty"
        style={{ top: '80px' }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        width={500}
        height={500}
        loading="lazy"
      />

      {/* Fondo dorado ambiental (CSS liviano, reemplaza tsparticles) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Patrón de puntos dorados sutil */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(#D4A34A 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Blobs dorados que respiran */}
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] gold-halo blur-[100px] opacity-30 animate-floaty" />
        <div className="absolute bottom-[-8rem] right-[-6rem] w-[380px] h-[380px] gold-halo blur-[100px] opacity-25 animate-drift" />
      </div>

      {/* Título */}
      <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-[0.14em] uppercase text-dorado mb-3"
        >
          Nuestros servicios
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-heading mb-4"
        >
          Tratamientos <span className="text-gold-gradient">personalizados</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-ink-soft"
        >
          Densidad, rapado y camuflaje de cicatrices para cada necesidad.
        </motion.p>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto relative z-10">
        {servicios.map((serv, index) => (
          <ServiceCard
            key={index}
            serv={serv}
            index={index}
            activo={servicioActivo?.title === serv.title}
            onSelect={setServicioActivo}
          />
        ))}
      </div>

      {/* Modal detalle */}
      <AnimatePresence>
        {servicioActivo && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setServicioActivo(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Más información sobre ${servicioActivo.title}`}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 24 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass text-ink rounded-2xl max-w-sm sm:max-w-lg w-full p-4 sm:p-6 relative border border-dorado/40 shadow-gold-lg overflow-hidden"
            >
              <div className="pointer-events-none absolute -top-20 -right-16 w-56 h-56 gold-halo blur-[70px] opacity-40" />

              <button
                onClick={() => setServicioActivo(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm border border-dorado/40 text-dorado hover:text-gold-lite hover:scale-110 transition-all duration-200 shadow-gold"
                aria-label="Cerrar información del servicio"
              >
                <RxCross2 className="text-lg" />
              </button>

              <div className="relative z-10">
                <motion.div
                  className="relative overflow-hidden rounded-xl mb-5 sm:mb-6"
                  initial={{ opacity: 0, y: -20, scale: 1.05 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={servicioActivo.img}
                    alt={`Imagen del servicio ${servicioActivo.title}`}
                    width={640}
                    height={360}
                    loading="lazy"
                    className="w-full h-48 sm:h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>

                <motion.h3
                  className="text-2xl font-heading font-bold text-gold-gradient mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {servicioActivo.title}
                </motion.h3>

                <motion.p
                  className="text-sm text-ink-soft mb-2 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {servicioActivo.description}
                </motion.p>

                <motion.p
                  className="text-xs text-ink-muted italic mb-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {servicioActivo.extra}
                </motion.p>

                <motion.a
                  href={`https://wa.me/5491153227308?text=Hola%20Dario,%20me%20interesa%20saber%20más%20sobre%20el%20servicio%20de%20${encodeURIComponent(servicioActivo.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.55 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-dorado text-black px-5 py-2.5 rounded-full font-semibold hover:shadow-gold-lg transition-all duration-300 text-sm"
                >
                  <FaWhatsapp className="text-lg" />
                  Consultar por WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}