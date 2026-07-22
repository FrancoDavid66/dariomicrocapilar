import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ContactForm from './ContactForm';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Contact() {
  return (
    <section
      id="contacto"
      className="min-h-screen bg-[#0e0e0e] text-[#f0f0f0] px-6 py-20 flex flex-col items-center justify-center"
      aria-label="Sección de contacto con Dario especialista en micropigmentación capilar en Buenos Aires"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto space-y-12"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Contactá a Dario – Tratamiento Capilar en Buenos Aires
          </h2>
          <p className="text-center text-[#cccccc] mb-6">
            ¿Tenés una consulta o querés reservar tu turno para tu tratamiento de micropigmentación capilar? Completá el formulario o conectá directo por WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Información de contacto */}
          <div className="space-y-6">
            <div className="space-y-3 text-sm">
              <motion.div
                custom={1}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <FaMapMarkerAlt className="text-[#B8860B]" aria-hidden="true" />
                <p aria-label="Dirección del consultorio">
                  📍 Dr. Enrique Simón Pérez 4655, González Catán, Buenos Aires
                </p>
              </motion.div>

              <motion.div
                custom={2}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <FaWhatsapp className="text-[#B8860B]" aria-hidden="true" />
                <a
                  href="https://wa.me/5491153227308?text=Hola%20Dario%2C%20quiero%20consultar%20por%20micropigmentación%20capilar"
                  className="text-[#B8860B] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Número de WhatsApp de drmicrocapilar"
                >
                  +54 11 5322-7308
                </a>
              </motion.div>

              <motion.div
                custom={3}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <FaClock className="text-[#B8860B]" aria-hidden="true" />
                <p aria-label="Horarios de atención">Lunes a Sábado, 10 a 18 hs</p>
              </motion.div>

              <motion.div
                custom={4}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <FaInstagram className="text-[#B8860B]" aria-hidden="true" />
                <a
                  href="https://www.instagram.com/drmicrocapilar"
                  className="text-[#B8860B] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de drmicrocapilar"
                >
                  @drmicrocapilar
                </a>
              </motion.div>
            </div>

            <motion.div
              custom={5}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pt-4"
            >
              <p className="mb-2 font-semibold">Seguinos en redes:</p>
              <div className="flex gap-4 text-xl">
                <a
                  href="https://www.instagram.com/drmicrocapilar"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram de drmicrocapilar"
                >
                  <FaInstagram className="hover:text-[#B8860B]" />
                </a>
                <a
                  href="https://wa.me/5491153227308"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Enviar mensaje por WhatsApp a Dario"
                >
                  <FaWhatsapp className="hover:text-[#B8860B]" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Formulario de contacto */}
          <ContactForm />
        </div>

        {/* Mapa */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg"
          aria-label="Ubicación del consultorio de Dario en González Catán"
        >
          
         <iframe
  title="Ubicación de drmicrocapilar en González Catán"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.2744364181694!2d-58.6445308!3d-34.7738659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc5d5b97c6e77%3A0x94507af974c41e10!2sDrmicrocapilar!5e0!3m2!1sen!2sar!4v1750440338309!5m2!1sen!2sar"
  width="100%"
  height="400"
  loading="lazy"
  style={{ border: 0 }}
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
></iframe>

        </motion.div>
      </motion.div>
    </section>
  );
}
