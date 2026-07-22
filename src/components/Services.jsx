import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import bg_logo from '../assets/images/logo.webp';
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

export default function Services() {
  const [servicioActivo, setServicioActivo] = useState(null);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      id="servicios"
      className="relative text-texto py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]"
      aria-label="Sección de servicios de micropigmentación capilar"
    >
      {/* Logo de fondo */}
      <motion.img
        src={bg_logo}
        alt="Logo de drmicrocapilar difuminado"
        className="absolute inset-0 mx-auto w-72 sm:w-[500px] opacity-5 z-0 pointer-events-none"
        style={{ top: '80px' }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        width={500}
        height={500}
        loading="lazy"
      />

      {/* Partículas doradas */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: 'transparent' },
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            color: { value: '#FFD700' },
            opacity: { value: 0.6 },
            move: { enable: true, speed: 0.4 },
            links: { enable: true, color: '#FFD700', opacity: 0.3 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Título */}
      <div className="max-w-3xl mx-auto text-center mb-14 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-heading text-dorado mb-4"
        >
          Tratamientos personalizados
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-gray-300"
        >
          Densidad, rapado y camuflaje de cicatrices para cada necesidad.
        </motion.p>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto relative z-10">
        {servicios.map((serv, index) => (
          <motion.div
            key={index}
            onClick={() => setServicioActivo(serv)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`group bg-[#161616] rounded shadow-md border border-transparent transition-all duration-300 flex flex-col cursor-pointer overflow-hidden ${
              servicioActivo?.title === serv.title
                ? 'scale-105 border-dorado shadow-[0_0_20px_#B8860B88] animate-pulse'
                : 'hover:border-dorado/70 hover:shadow-[0_0_15px_#B8860B55]'
            }`}
            role="button"
            tabIndex={0}
            aria-label={`Ver detalles del servicio ${serv.title}`}
          >
            <img
              src={serv.img}
              srcSet={`${serv.img}?w=320 320w, ${serv.img}?w=480 480w, ${serv.img}?w=640 640w`}
              sizes="(max-width: 768px) 100vw, 33vw"
              alt={`Servicio de micropigmentación: ${serv.title}`}
              width={serv.width}
              height={serv.height}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-dorado mb-2 group-hover:underline">
                {serv.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                {serv.description}
              </p>
              <span className="mt-5 self-start px-4 py-1.5 rounded border border-dorado text-dorado hover:bg-dorado hover:text-black transition-all duration-300 font-medium text-sm">
                Saber más
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal detalle mantenido igual por ahora */}
      <AnimatePresence>
        {servicioActivo && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Más información sobre ${servicioActivo.title}`}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-[#121212] text-texto rounded max-w-sm sm:max-w-lg w-full p-4 sm:p-6 relative border border-dorado"
            >
              <button
                onClick={() => setServicioActivo(null)}
                className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm border border-dorado/40 text-dorado hover:text-[#FFD700] hover:scale-105 transition-all duration-200 shadow-md"
                aria-label="Cerrar información del servicio"
              >
                <RxCross2 className="text-lg" />
              </button>

              <motion.img
                src={servicioActivo.img}
                alt={`Imagen del servicio ${servicioActivo.title}`}
                width={640}
                height={360}
                loading="lazy"
                initial={{ opacity: 0, y: -20, scale: 1.05 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-48 sm:h-60 object-cover rounded mb-4 sm:mb-6"
              />

              <motion.h3
                className="text-2xl font-bold text-dorado mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {servicioActivo.title}
              </motion.h3>

              <motion.p
                className="text-sm text-gray-300 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {servicioActivo.description}
              </motion.p>

              <motion.p
                className="text-xs text-gray-400 italic mb-4"
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
                transition={{ delay: 0.6 }}
                className="inline-flex items-center gap-2 bg-dorado text-black px-4 py-2 rounded-full font-semibold hover:shadow-[0_0_15px_#B8860B99] transition-all duration-300 animate-pulse text-sm"
              >
                <FaWhatsapp className="text-lg" />
                Consultar por WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
