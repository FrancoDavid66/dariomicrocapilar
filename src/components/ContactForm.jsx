import { motion } from 'framer-motion';
import { useState } from 'react';
import ContactButton from './ContactButton';
import SuccessModal from './SuccessModal';
import emailjs from '@emailjs/browser';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: 'easeOut',
    },
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

    const adminParams = {
      name: nombre,
      email: correo,
      message: mensaje,
      time: fechaActual,
    };

    const clienteParams = {
      name: nombre,
      email: correo,
    };

    try {
      await emailjs.send(
        'service_nuub00n',
        'template_e0e4691',
        adminParams,
        'hoyMl4NpSh_Qxw_09'
      );

      await emailjs.send(
        'service_nuub00n',
        'template_y0ub2s4',
        clienteParams,
        'hoyMl4NpSh_Qxw_09'
      );

      setEnviado(true);
      setShowModal(true);
      setFormData({ nombre: '', correo: '', mensaje: '' });

      setTimeout(() => {
        setEnviado(false);
      }, 3000);
    } catch (error) {
      console.error('Error al enviar:', error);
      alert('Hubo un error al enviar el mensaje. Intentalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg space-y-6"
        aria-label="Formulario de contacto para micropigmentación capilar"
      >
        <motion.div custom={1} variants={fadeInUp}>
          <motion.label
            htmlFor="nombre"
            custom={1.1}
            variants={fadeInUp}
            className="block text-sm mb-1"
          >
            Nombre completo
          </motion.label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej: Juan Pérez"
            autoComplete="name"
            required
            className="w-full p-3 rounded-lg bg-[#0e0e0e] text-[#f0f0f0] border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#B8860B] transition-all duration-300"
          />
        </motion.div>

        <motion.div custom={2} variants={fadeInUp}>
          <motion.label
            htmlFor="correo"
            custom={2.1}
            variants={fadeInUp}
            className="block text-sm mb-1"
          >
            Correo electrónico
          </motion.label>
          <input
            id="correo"
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="tucorreo@ejemplo.com"
            autoComplete="email"
            required
            className="w-full p-3 rounded-lg bg-[#0e0e0e] text-[#f0f0f0] border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#B8860B] transition-all duration-300"
          />
        </motion.div>

        <motion.div custom={3} variants={fadeInUp}>
          <motion.label
            htmlFor="mensaje"
            custom={3.1}
            variants={fadeInUp}
            className="block text-sm mb-1"
          >
            Mensaje o consulta
          </motion.label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="5"
            placeholder="Escribí tu consulta sobre el tratamiento de micropigmentación capilar..."
            required
            className="w-full p-3 rounded-lg bg-[#0e0e0e] text-[#f0f0f0] border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#B8860B] transition-all duration-300"
          ></textarea>
        </motion.div>

        <motion.div custom={4} variants={fadeInUp}>
          <ContactButton loading={loading} enviado={enviado} />
        </motion.div>
      </motion.form>

      <SuccessModal visible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
