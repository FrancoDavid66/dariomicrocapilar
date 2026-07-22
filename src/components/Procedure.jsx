import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsChatQuote, BsClockHistory, BsHeartPulse, BsPatchCheck, BsWhatsapp } from 'react-icons/bs';
import video from '../assets/videos/video_hero.mp4';
import AnimatedVideoButton from './AnimatedVideoButton';

const pasos = [
  {
    numero: '01',
    titulo: 'Consulta inicial',
    descripcion: 'Nos conocemos, evaluamos tu caso y resolvemos tus dudas para brindarte un plan personalizado.',
    icono: <BsChatQuote />,
  },
  {
    numero: '02',
    titulo: 'Diseño y planificación',
    descripcion: 'Diseñamos la línea capilar según tus facciones y preferencias, cuidando la naturalidad.',
    icono: <BsPatchCheck />,
  },
  {
    numero: '03',
    titulo: 'Primera sesión',
    descripcion: 'Comenzamos la micropigmentación en un entorno higiénico y profesional, paso a paso.',
    icono: <BsHeartPulse />,
  },
  {
    numero: '04',
    titulo: 'Seguimiento y retoques',
    descripcion: 'Acompañamos tu evolución y realizamos los ajustes necesarios para un resultado perfecto.',
    icono: <BsClockHistory />,
  },
];

export default function Procedure() {
  const [videoAbierto, setVideoAbierto] = useState(false);
  const [pasoExpandido, setPasoExpandido] = useState(null);

  const togglePaso = (index) => {
    setPasoExpandido(pasoExpandido === index ? null : index);
  };

  return (
    <section
      id="procedimiento"
      className="bg-[#2f2f2f] text-white py-24 px-6"
      aria-label="Pasos del procedimiento de micropigmentación capilar"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-heading text-dorado mb-4">
          ¿Cómo es el proceso de micropigmentación?
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Te mostramos cada paso para que entiendas cómo trabajamos y te sientas seguro durante todo el tratamiento.
        </p>
      </motion.div>

      {/* Lista de pasos */}
      <div className="relative max-w-4xl mx-auto pl-6 border-l-4 border-dorado">
        {pasos.map((paso, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 pl-6 relative cursor-pointer border-b border-white/10 pb-6"
            onClick={() => togglePaso(index)}
            aria-expanded={pasoExpandido === index}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && togglePaso(index)}
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.2 + 0.2, type: 'spring', stiffness: 300 }}
              className="absolute -left-6 top-0 w-10 h-10 bg-dorado text-black font-bold rounded-full flex items-center justify-center shadow-lg"
            >
              {paso.numero}
            </motion.span>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-dorado text-lg" aria-hidden="true">{paso.icono}</span>
                <h3 className="text-xl font-semibold mb-2 text-white">{paso.titulo}</h3>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePaso(index);
                }}
                className="text-dorado hover:text-white transition-colors"
                aria-label={`Expandir paso ${paso.numero}`}
              >
                {pasoExpandido === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>

            {/* Descripción animada */}
            <AnimatePresence>
              {pasoExpandido === index && (
                <motion.p
                  className="text-gray-400 mt-2 min-h-[40px]"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {paso.descripcion}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Botón para ver video */}
      <div className="text-center mt-20">
        <AnimatedVideoButton onClick={() => setVideoAbierto(true)} />
      </div>

      {/* Modal con video */}
      <AnimatePresence>
        {videoAbierto && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Video explicativo del procedimiento"
          >
            <motion.div
              className="relative bg-black rounded-lg overflow-hidden shadow-xl w-full max-w-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <video
                src={video}
                className="w-full h-auto max-h-[80vh]"
                controls
                autoPlay
                muted
                playsInline
                loading="lazy"
                width={960}
                height={540}
              />
              <button
                onClick={() => setVideoAbierto(false)}
                className="absolute top-3 right-3 bg-white text-black rounded-full p-2 shadow hover:bg-dorado hover:text-black"
                aria-label="Cerrar video del procedimiento"
              >
                <FaTimes />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA final */}
      <motion.div
        className="mt-16 text-center max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-300 italic">
          En cada paso, estás acompañado. Tu tranquilidad es nuestra prioridad.
        </p>
        <a
          href="https://wa.me/541153227308?text=Hola%20Dario,%20tengo%20algunas%20dudas%20sobre%20el%20procedimiento%20de%20micropigmentación"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-dorado hover:text-white transition-colors"
          aria-label="Consultar por WhatsApp sobre el procedimiento"
        >
          <BsWhatsapp className="text-xl" /> ¿Tenés dudas? Hablá con Dario
        </a>
      </motion.div>
    </section>
  );
}
