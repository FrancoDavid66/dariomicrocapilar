import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
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
      className="bg-[#1a1a1a] text-white py-24 px-6"
      aria-label="Preguntas frecuentes sobre micropigmentación capilar"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-heading text-dorado mb-4">
          Preguntas Frecuentes
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Respondemos las dudas más comunes para que tengas toda la información que necesitás.
        </p>

        <motion.img
          src={pigmentacion_tinta}
          alt="Representación del proceso de pigmentación capilar"
          width={500}
          height={320}
          loading="lazy"
          className="mx-auto rounded-xl shadow-lg mb-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
        <p className="text-sm text-gray-400 mt-2 max-w-md mx-auto text-center">
          Utilizamos pigmentos de alta calidad diseñados especialmente para micropigmentación capilar, garantizando resultados naturales y duraderos.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-6" role="list">
        {preguntas.map((item, index) => {
          const isOpen = preguntaAbierta === index;
          const preguntaId = `pregunta-${index}`;
          const respuestaId = `respuesta-${index}`;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-lg p-5 bg-[#2a2a2a]"
            >
              <button
                onClick={() => togglePregunta(index)}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-dorado"
                aria-expanded={isOpen}
                aria-controls={respuestaId}
                id={preguntaId}
              >
                <div className="flex items-center gap-2">
                  <BsQuestionCircle className="text-xl" aria-hidden="true" />
                  {item.pregunta}
                </div>
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    id={respuestaId}
                    role="region"
                    aria-labelledby={preguntaId}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 mt-3 text-sm leading-relaxed min-h-[48px]"
                  >
                    {item.respuesta}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
