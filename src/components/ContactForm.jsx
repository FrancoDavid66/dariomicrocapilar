import { motion } from 'framer-motion';
import { useState } from 'react';
import ContactButton from './ContactButton';
import SuccessModal from './SuccessModal';
import emailjs from '@emailjs/browser';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ContactForm() {
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, correo, mensaje } = formData;

    if (!nombre || !correo || !mensaje) {
      alert('Por favor completá todos los campos del formulario');
      return;
    }

    setLoading(true);
    const fechaActual = new Date().toLocaleString('es-AR');
    const adminParams = { name: nombre, email: correo, message: mensaje, time: fechaActual };
    const clienteParams = { name: nombre, email: correo };

    try {
      await emailjs.send('service_nuub00n', 'template_e0e4691', adminParams, 'hoyMl4NpSh_Qxw_09');
      await emailjs.send('service_nuub00n', 'template_y0ub2s4', clienteParams, 'hoyMl4NpSh_Qxw_09');

      setEnviado(true);
      setShowModal(true);
      setFormData({ nombre: '', correo: '', mensaje: '' });
      setTimeout(() => setEnviado(false), 3000);
    } catch (error) {
      console.error('Error al enviar:', error);
      alert('Hubo un error al enviar el mensaje. Intentalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  // Input oscuro con focus dorado. El autofill blanco se anula con la clase 'form-input' (ver index.css)
  const fieldClass =
    'form-input w-full rounded-xl2 bg-surface-2 text-ink placeholder:text-ink-muted border border-line px-4 py-3.5 focus:outline-none focus:border-dorado focus:ring-2 focus:ring-dorado/40 transition-all duration-300 ease-premium';

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="relative glass p-7 md:p-8 rounded-2xl border border-line shadow-gold-lg overflow-hidden"
        aria-label="Formulario de contacto para micropigmentación capilar"
      >
        {/* Halo dorado de fondo */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 gold-halo blur-[90px] opacity-40" />
        {/* Línea dorada superior */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-transparent via-dorado to-transparent"
        />

        <div className="relative z-10 space-y-5">
          {/* Nombre */}
          <motion.div custom={1} variants={fadeInUp}>
            <label
              htmlFor="nombre"
              className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft mb-2"
            >
              Nombre completo
            </label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej: Juan Pérez"
              autoComplete="name"
              required
              className={fieldClass}
            />
          </motion.div>

          {/* Correo */}
          <motion.div custom={2} variants={fadeInUp}>
            <label
              htmlFor="correo"
              className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft mb-2"
            >
              Correo electrónico
            </label>
            <input
              id="correo"
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="tucorreo@ejemplo.com"
              autoComplete="email"
              required
              className={fieldClass}
            />
          </motion.div>

          {/* Mensaje */}
          <motion.div custom={3} variants={fadeInUp}>
            <label
              htmlFor="mensaje"
              className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft mb-2"
            >
              Mensaje o consulta
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="5"
              placeholder="Escribí tu consulta sobre el tratamiento de micropigmentación capilar..."
              required
              className={`${fieldClass} resize-none`}
            ></textarea>
          </motion.div>

          <motion.div custom={4} variants={fadeInUp} className="pt-1 flex justify-center">
            <ContactButton loading={loading} enviado={enviado} />
          </motion.div>
        </div>
      </motion.form>

      <SuccessModal visible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}