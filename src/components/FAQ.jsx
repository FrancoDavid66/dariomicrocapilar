import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';
import { BsQuestionCircle } from 'react-icons/bs';
import pigmentacion_tinta from '../assets/images/pigmentacion_tinta.webp';

const preguntas = [
  {
    pregunta: '¿La micropigmentación capilar duele?',
    respuesta:
      'Es un procedimiento mínimamente invasivo. Puede generar una leve molestia, pero se realiza con técnicas que minimizan cualquier incomodidad.',
  },
  {
    pregunta: '¿Cuánto dura el efecto de la micropigmentación?',
    respuesta:
      'El efecto puede durar entre 2 y 5 años, dependiendo del tipo de piel, exposición solar y cuidados posteriores.',
  },
  {
    pregunta: '¿Cuántas sesiones necesito?',
    respuesta:
      'Generalmente se requieren entre 2 y 3 sesiones para lograr el resultado deseado, con retoques posteriores si es necesario.',
  },
  {
    pregunta: '¿Puedo hacer vida normal después del procedimiento?',
    respuesta:
      'Sí, solo se recomienda evitar exposición solar directa, piscinas y gimnasio por algunos días para garantizar una buena cicatrización.',
  },
];

export default function FAQ() {
  const [preguntaAbierta, setPreguntaAbierta] = useState(null);

  const togglePregunta = (index) => {
    setPreguntaAbierta(preguntaAbierta === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-fondo text-ink py-24 px-6 overflow-hidden"
      aria-label="Preguntas frecuentes sobre micropigmentación capilar"
    >
      {/* Halos dorados de fondo */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] gold-halo blur-[100px] opacity-40 animate-drift" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 w-[380px] h-[380px] gold-halo blur-[110px] opacity-30 animate-floaty" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Encabezado */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-dorado mb-3">
            Dudas resueltas
          </p>
          <h2 className="text-3xl md:text-5xl font-heading mb-4">
            Preguntas <span className="text-gold-gradient">Frecuentes</span>
          </h2>
          <p className="text-ink-soft text-lg mb-8">
            Respondemos las dudas más comunes para que tengas toda la información que necesitás.
          </p>

          {/* Imagen con marco premium */}
          <motion.div
            className="relative mx-auto max-w-lg group"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-gold-deep/40 via-dorado/20 to-transparent blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            <motion.img
              src={pigmentacion_tinta}
              alt="Representación del proceso de pigmentación capilar"
              width={500}
              height={320}
              loading="lazy"
              className="relative mx-auto w-full rounded-2xl border border-line shadow-gold-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-dorado/20" />
          </motion.div>

          <p className="text-sm text-ink-muted mt-5 max-w-md mx-auto">
            Utilizamos pigmentos de alta calidad diseñados especialmente para micropigmentación capilar, garantizando resultados naturales y duraderos.
          </p>
        </motion.div>

        {/* Acordeón */}
        <div className="max-w-3xl mx-auto space-y-4" role="list">
          {preguntas.map((item, index) => {
            const isOpen = preguntaAbierta === index;
            const preguntaId = `pregunta-${index}`;
            const respuestaId = `respuesta-${index}`;

            return (
              <motion.div
                key={index}
                role="listitem"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className={`glass relative overflow-hidden rounded-2xl transition-all duration-500 ease-premium ${
                  isOpen
                    ? 'border border-dorado/60 shadow-gold'
                    : 'border border-line hover:border-dorado/30'
                }`}
              >
                {/* Barra dorada lateral al abrir */}
                <motion.span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-gold-lite via-dorado to-gold-deep"
                  initial={false}
                  animate={{ opacity: isOpen ? 1 : 0, scaleY: isOpen ? 1 : 0.3 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: 'top' }}
                />

                <button
                  onClick={() => togglePregunta(index)}
                  className="w-full flex justify-between items-center gap-4 text-left px-6 py-5 text-lg font-heading font-medium text-ink"
                  aria-expanded={isOpen}
                  aria-controls={respuestaId}
                  id={preguntaId}
                >
                  <span className="flex items-center gap-3">
                    <BsQuestionCircle
                      className={`text-xl shrink-0 transition-colors duration-300 ${
                        isOpen ? 'text-gold-lite' : 'text-dorado'
                      }`}
                      aria-hidden="true"
                    />
                    <span>{item.pregunta}</span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={`shrink-0 grid place-items-center w-8 h-8 rounded-full border transition-colors duration-300 ${
                      isOpen ? 'border-dorado/60 text-gold-lite bg-dorado/10' : 'border-line text-ink-soft'
                    }`}
                  >
                    <IoIosArrowDown className="text-lg" aria-hidden="true" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={respuestaId}
                      role="region"
                      aria-labelledby={preguntaId}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                        className="px-6 pb-5 pl-14 text-ink-soft text-sm leading-relaxed"
                      >
                        {item.respuesta}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
