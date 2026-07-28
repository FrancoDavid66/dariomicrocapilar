import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsChatQuote, BsClockHistory, BsHeartPulse, BsPatchCheck } from 'react-icons/bs';
import fotoTrabajando from '../assets/images/imagen_3.webp';
import fotoDiseno from '../assets/images/imagen_4.webp';

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

const fotos = [
  {
    src: fotoDiseno,
    alt: 'Diseño de la línea capilar antes de la micropigmentación',
    paso: 'Paso 02',
    titulo: 'Diseño de la línea capilar',
  },
  {
    src: fotoTrabajando,
    alt: 'Dario realizando la micropigmentación capilar',
    paso: 'Paso 03',
    titulo: 'Manos a la obra',
  },
];

export default function Procedure() {
  const [pasoExpandido, setPasoExpandido] = useState(null);

  const togglePaso = (index) => {
    setPasoExpandido(pasoExpandido === index ? null : index);
  };

  return (
    <section
      id="procedimiento"
      className="relative bg-fondo text-ink py-24 px-6 overflow-hidden"
      aria-label="Pasos del procedimiento de micropigmentación capilar"
    >
      {/* Halos dorados de fondo */}
      <div className="pointer-events-none absolute -top-32 -left-24 w-[36rem] h-[36rem] gold-halo blur-[110px] opacity-40" />
      <div className="pointer-events-none absolute bottom-0 -right-32 w-[32rem] h-[32rem] gold-halo blur-[120px] opacity-30 animate-drift" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(212,163,74,0.06),transparent_60%)]" />

      <div className="relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-dorado mb-4">
            El procedimiento
          </p>
          <h2 className="text-3xl md:text-5xl font-heading mb-5 leading-tight">
            ¿Cómo es el proceso de{' '}
            <span className="text-gold-gradient">micropigmentación</span>?
          </h2>
          <p className="text-ink-soft text-lg">
            Te mostramos cada paso para que entiendas cómo trabajamos y te sientas seguro durante todo el tratamiento.
          </p>
        </motion.div>

        {/* Banda visual: Dario trabajando + diseño de línea */}
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-5 mb-20">
          {fotos.map((foto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden border border-line bg-surface"
            >
              <div className="absolute inset-0 z-20 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-dorado/40 transition-all duration-500" />
              <img
                src={foto.src}
                alt={foto.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-72 object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fondo via-fondo/40 to-transparent" />
              <div className="absolute inset-0 flex items-end p-6">
                <div className="translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block text-dorado text-[11px] font-semibold tracking-[0.18em] uppercase mb-1.5 px-2.5 py-1 rounded-full border border-dorado/30 bg-dorado/5">
                    {foto.paso}
                  </span>
                  <p className="text-ink font-heading text-lg font-semibold">{foto.titulo}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline vertical de pasos */}
        <div className="relative max-w-3xl mx-auto">
          {/* Línea base */}
          <div className="absolute left-[19px] md:left-[27px] top-4 bottom-4 w-px bg-line" aria-hidden="true" />
          {/* Línea dorada que crece con el scroll */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ originY: 0 }}
            className="absolute left-[19px] md:left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-gold-lite via-dorado to-gold-deep shadow-gold"
            aria-hidden="true"
          />

          <div className="space-y-4">
            {pasos.map((paso, index) => {
              const abierto = pasoExpandido === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="relative pl-16 md:pl-24"
                >
                  {/* Círculo con número */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.12 + 0.2, type: 'spring', stiffness: 260, damping: 18 }}
                    viewport={{ once: true }}
                    className="absolute left-0 top-3"
                  >
                    <span className="absolute inset-0 rounded-full bg-dorado/25 blur-md animate-pulse-gold" aria-hidden="true" />
                    <span className="relative flex items-center justify-center w-10 h-10 md:w-[3.4rem] md:h-[3.4rem] rounded-full bg-gradient-to-br from-gold-lite to-gold-deep text-fondo font-heading font-bold text-sm md:text-base shadow-gold ring-4 ring-fondo">
                      {paso.numero}
                    </span>
                  </motion.div>

                  {/* Tarjeta del paso */}
                  <div
                    className={`glass rounded-2xl border transition-all duration-500 ease-premium cursor-pointer ${
                      abierto
                        ? 'border-dorado/40 shadow-gold'
                        : 'border-line hover:border-dorado/30 hover:-translate-y-0.5'
                    }`}
                    onClick={() => togglePaso(index)}
                    aria-expanded={abierto}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && togglePaso(index)}
                  >
                    <div className="flex items-center justify-between gap-4 p-5 md:p-6">
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`grid place-items-center w-11 h-11 rounded-xl text-xl transition-all duration-500 ${
                            abierto
                              ? 'bg-dorado/15 text-gold-lite'
                              : 'bg-surface-2 text-dorado group-hover:text-gold-lite'
                          }`}
                          aria-hidden="true"
                        >
                          {paso.icono}
                        </span>
                        <h3 className="text-lg md:text-xl font-heading font-semibold text-ink">
                          {paso.titulo}
                        </h3>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePaso(index);
                        }}
                        className={`shrink-0 grid place-items-center w-9 h-9 rounded-full border transition-all duration-300 ${
                          abierto
                            ? 'border-dorado/50 bg-dorado/10 text-dorado rotate-180'
                            : 'border-line text-ink-soft hover:text-dorado hover:border-dorado/40'
                        }`}
                        aria-label={`Expandir paso ${paso.numero}`}
                      >
                        {abierto ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </button>
                    </div>

                    {/* Descripción animada */}
                    <AnimatePresence initial={false}>
                      {abierto && (
                        <motion.div
                          key="desc"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 md:px-6 pb-6 -mt-1">
                            <div className="h-px w-full bg-line mb-4" />
                            <p className="text-ink-soft leading-relaxed">{paso.descripcion}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}