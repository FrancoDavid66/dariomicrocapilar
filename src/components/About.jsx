import { motion, AnimatePresence } from 'framer-motion';
import aboutImg from '../assets/images/dario1.webp';
import firmaDario from '../assets/images/dario1.webp';
import dario2 from '../assets/images/dario2.webp';
import dario3 from '../assets/images/dario3.webp';
import dario4 from '../assets/images/dario4.webp';
import { useState } from 'react';
import AnimatedCTAButton from './AnimatedCTAButton';
import certificado from '../assets/images/about/certificado.webp';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function About() {
  const [mainImage, setMainImage] = useState(aboutImg);

  return (
    <section
      id="Sobre mí"
      className="w-full bg-fondo text-texto py-16 px-6"
      aria-label="Sección sobre Dario especialista en micropigmentación"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texto */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p className="text-sm uppercase tracking-widest text-dorado mb-2" variants={fadeInUp} custom={0}>
            ¿Quién está detrás?
          </motion.p>
          <motion.h2 className="text-3xl md:text-4xl font-heading text-dorado mb-4" variants={fadeInUp} custom={1}>
            Conocé a Dario
          </motion.h2>
          <motion.img
            src={certificado}
            alt="Certificación profesional"
            width={140}
            height={80}
            loading="lazy"
            decoding="async"
            className="w-28 md:w-36 h-auto mb-4 mx-auto md:mx-0 object-contain"
            variants={fadeInUp}
            custom={2}
          />
          <motion.p className="text-base md:text-lg mb-3 leading-relaxed" variants={fadeInUp} custom={3}>
            Soy Dario. Ayudo a recuperar tu imagen con micropigmentación capilar precisa, natural y segura.
          </motion.p>
          <motion.p className="text-base md:text-lg mb-3 leading-relaxed" variants={fadeInUp} custom={4}>
            Trabajo con técnica milimétrica, materiales de alta calidad y atención personalizada en Buenos Aires.
          </motion.p>

          <motion.div
            className="mt-6 grid grid-cols-3 gap-4 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-dorado">+5</h3>
              <p className="text-xs">Años de experiencia</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-dorado">+300</h3>
              <p className="text-xs">Clientes reales</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-dorado">+1000</h3>
              <p className="text-xs">Horas aplicadas</p>
            </div>
          </motion.div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AnimatedCTAButton
              text="Consultá por tu caso"
              href="https://wa.me/5491153227308"
            />
          </motion.div>
        </motion.div>

        {/* Imagen + mini galería */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 mb-4 w-72">
            <AnimatePresence mode="wait">
              <motion.img
                key={mainImage}
                src={mainImage}
                alt="Dario especialista en micropigmentación"
                width={288}
                height={432}
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-72 h-auto object-cover rounded-2xl shadow-2xl"
              />
            </AnimatePresence>
            <div className="absolute -inset-4 z-[-1] rounded-2xl bg-[#B8860B] blur-2xl opacity-20" />
          </div>

          <motion.div
            className="flex gap-3 mt-2 overflow-x-auto pb-2 px-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[aboutImg, dario2, dario3, dario4].map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Miniatura ${index + 1}`}
                onClick={() => setMainImage(img)}
                width={72}
                height={72}
                loading="lazy"
                decoding="async"
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition duration-300 ${
                  mainImage === img ? 'border-[#B8860B]' : 'border-transparent'
                }`}
                variants={fadeInUp}
                custom={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
