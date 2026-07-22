import { Link } from 'react-scroll';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navItems = [
  { to: 'inicio', label: 'Inicio' },
  { to: 'Sobre mí', label: 'Sobre mí' },
  { to: 'servicios', label: 'Servicios' },
  { to: 'galeria', label: 'Galería' },
  { to: 'procedimiento', label: 'Procedimiento' },
  { to: 'faq', label: 'Preguntas' },
  { to: 'contacto', label: 'Contacto' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-[#1a1a1a] text-[#f0f0f0] px-6 py-10 md:py-12 min-h-[200px]"
      aria-label="Pie de página con navegación y contacto"
    >
      <motion.div
        variants={containerVariants}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
      >
        {/* Marca y ubicación */}
        <motion.div
          variants={itemVariants}
          className="text-xl font-semibold tracking-wide"
        >
          drmicrocapilar<br />
          <span className="text-sm text-gray-400">Micropigmentación Capilar en González Catán</span>
        </motion.div>

        {/* Navegación */}
        <motion.nav
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 text-sm"
          aria-label="Navegación en el footer"
        >
          {navItems.map((item) => (
            <motion.div key={item.to} variants={itemVariants}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#B8860B] transition-colors"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Redes sociales */}
        <motion.div variants={itemVariants} className="flex gap-4 items-center">
          <motion.a
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            href="https://www.instagram.com/drmicrocapilar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-[#B8860B] transition-transform"
            aria-label="Instagram de drmicrocapilar"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            href="https://wa.me/5491153227308?text=Hola%20Dario%2C%20quiero%20consultar%20sobre%20micropigmentación"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-[#B8860B] transition-transform"
            aria-label="WhatsApp de drmicrocapilar"
          >
            <FaWhatsapp />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Derechos y ubicación local */}
      <motion.div
        variants={itemVariants}
        className="mt-8 text-center text-xs text-gray-400"
      >
        © 2025 drmicrocapilar · Todos los derechos reservados · González Catán, Buenos Aires, Argentina
      </motion.div>
    </motion.footer>
  );
}
