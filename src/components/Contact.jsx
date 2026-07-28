import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ContactForm from './ContactForm';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const contactItems = [
  {
    icon: FaMapMarkerAlt,
    label: 'Dirección',
    ariaLabel: 'Dirección del consultorio',
    content: (
      <p aria-label="Dirección del consultorio" className="text-ink-soft leading-relaxed">
        Dr. Enrique Simón Pérez 4655, González Catán, Buenos Aires
      </p>
    ),
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    ariaLabel: 'Número de WhatsApp de dariomicrocapilar',
    content: (
      <a
        href="https://wa.me/5491153227308?text=Hola%20Dario%2C%20quiero%20consultar%20por%20micropigmentación%20capilar"
        className="text-gold-lite hover:text-dorado transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Número de WhatsApp de dariomicrocapilar"
      >
        +54 11 5322-7308
      </a>
    ),
  },
  {
    icon: FaClock,
    label: 'Horario',
    ariaLabel: 'Horarios de atención',
    content: (
      <p aria-label="Horarios de atención" className="text-ink-soft">
        Lunes a Sábado, 10 a 18 hs
      </p>
    ),
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    ariaLabel: 'Instagram de dariomicrocapilar',
    content: (
      <a
        href="https://www.instagram.com/dariomicrocapilar"
        className="text-gold-lite hover:text-dorado transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram de dariomicrocapilar"
      >
        @dariomicrocapilar
      </a>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative min-h-screen bg-fondo text-ink px-6 py-24 overflow-hidden flex items-center"
      aria-label="Sección de contacto con Dario especialista en micropigmentación capilar en Buenos Aires"
    >
      {/* Halos dorados de fondo */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] gold-halo blur-[110px] opacity-40 animate-drift" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 h-[480px] w-[480px] gold-halo blur-[120px] opacity-30 animate-floaty" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,#0A0A0B_100%)]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-dorado mb-3">
            Contacto
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-tight">
            Contactá a <span className="text-gold-gradient">Dario</span>
            <br className="hidden md:block" /> Tratamiento Capilar en Buenos Aires
          </h2>
          <p className="text-ink-soft text-lg">
            ¿Tenés una consulta o querés reservar tu turno para tu tratamiento de micropigmentación capilar? Completá el formulario o conectá directo por WhatsApp.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Información de contacto */}
          <div className="flex flex-col">
            <div className="glass gold-halo rounded-2xl border border-line p-8 flex flex-col justify-between h-full relative overflow-hidden">
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 bg-dorado/10 blur-[70px] rounded-full" />

              <div className="relative space-y-3">
                {contactItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      custom={i + 1}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ x: 4 }}
                      className="group flex items-center gap-4 rounded-xl2 border border-transparent hover:border-line hover:bg-white/[0.02] p-3 -mx-3 transition-all duration-300 ease-premium"
                    >
                      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl2 bg-dorado/10 ring-1 ring-dorado/20 text-dorado group-hover:bg-dorado/20 group-hover:shadow-gold transition-all duration-300 ease-premium">
                        <Icon className="text-lg" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.12em] text-ink-muted mb-0.5">
                          {item.label}
                        </p>
                        {item.content}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Redes */}
              <motion.div
                custom={5}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative pt-8 mt-8 border-t border-line"
              >
                <p className="mb-4 text-xs uppercase tracking-[0.12em] text-ink-muted">
                  Seguinos en redes
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.instagram.com/dariomicrocapilar"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram de dariomicrocapilar"
                    whileHover={{ scale: 1.12, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl2 border border-line bg-surface text-ink-soft hover:text-dorado hover:border-dorado/40 hover:shadow-gold transition-colors duration-300 ease-premium"
                  >
                    <FaInstagram className="text-xl" />
                  </motion.a>
                  <motion.a
                    href="https://wa.me/5491153227308"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Enviar mensaje por WhatsApp a Dario"
                    whileHover={{ scale: 1.12, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl2 border border-line bg-surface text-ink-soft hover:text-dorado hover:border-dorado/40 hover:shadow-gold transition-colors duration-300 ease-premium"
                  >
                    <FaWhatsapp className="text-xl" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="h-full"
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Mapa */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="group relative mt-12 rounded-2xl overflow-hidden border border-line shadow-gold-lg"
          aria-label="Ubicación del consultorio de Dario en González Catán"
        >
          <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-dorado/10 group-hover:ring-dorado/30 transition-all duration-500 ease-premium" />
          <iframe
            title="Ubicación de dariomicrocapilar en González Catán"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.2744364181694!2d-58.6445308!3d-34.7738659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc5d5b97c6e77%3A0x94507af974c41e10!2sDrmicrocapilar!5e0!3m2!1sen!2sar!4v1750440338309!5m2!1sen!2sar"
            width="100%"
            height="400"
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="relative block grayscale-[0.35] contrast-[1.05] group-hover:grayscale-0 transition-all duration-700 ease-premium"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
