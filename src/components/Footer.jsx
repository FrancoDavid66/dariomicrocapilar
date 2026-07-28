import { Link } from 'react-scroll';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo_horizontal_dorado.webp';

const navItems = [
  { to: 'inicio', label: 'Inicio' },
  { to: 'Sobre mí', label: 'Sobre mí' },
  { to: 'servicios', label: 'Servicios' },
  { to: 'galeria', label: 'Galería' },
  { to: 'procedimiento', label: 'Procedimiento' },
  { to: 'faq', label: 'Preguntas' },
  { to: 'contacto', label: 'Contacto' },
];

const socials = [
  {
    href: 'https://www.instagram.com/dariomicrocapilar',
    label: 'Instagram de dariomicrocapilar',
    Icon: FaInstagram,
  },
  {
    href: 'https://wa.me/5491153227308?text=Hola%20Dario%2C%20quiero%20consultar%20sobre%20micropigmentación',
    label: 'WhatsApp de dariomicrocapilar',
    Icon: FaWhatsapp,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      className="relative overflow-hidden bg-fondo text-ink px-6 pt-20 pb-10"
      aria-label="Pie de página con navegación y contacto"
    >
      {/* Borde dorado sutil superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-dorado/60 to-transparent" />
      {/* Halo ambiental */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 h-56 w-[46rem] -translate-x-1/2 gold-halo blur-[100px] opacity-25"
        animate={{ opacity: [0.16, 0.3, 0.16] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Grid principal */}
        <div className="grid gap-12 grid-cols-1 md:grid-cols-3 text-center md:text-left">
          {/* Columna 1 — Marca */}
          <motion.div variants={item} className="flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="Logo de Dariomicrocapilar"
              className="w-48 object-contain mb-4"
              loading="lazy"
            />
            <p className="text-sm text-ink-soft leading-relaxed max-w-xs">
              Micropigmentación capilar profesional en González Catán, Buenos Aires.
              Resultados naturales, sin cirugías.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group flex h-11 w-11 items-center justify-center rounded-full border border-line text-lg text-ink-soft transition-colors duration-300 hover:border-dorado/50 hover:text-dorado hover:shadow-gold"
                  aria-label={label}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Columna 2 — Navegación */}
          <motion.nav variants={item} aria-label="Navegación en el footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-dorado mb-4">
              Navegación
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm items-center md:items-start">
              {navItems.map((it) => (
                <li key={it.to}>
                  <Link
                    to={it.to}
                    smooth={true}
                    duration={500}
                    className="group relative inline-flex cursor-pointer text-ink-soft transition-colors duration-300 hover:text-dorado"
                  >
                    {it.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-dorado transition-all duration-300 ease-premium group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Columna 3 — Contacto */}
          <motion.div variants={item}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-dorado mb-4">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm text-ink-soft">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <FaMapMarkerAlt className="mt-0.5 text-dorado shrink-0" aria-hidden="true" />
                <span>Dr. Enrique Simón Pérez 4655, González Catán, Buenos Aires</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaWhatsapp className="text-dorado shrink-0" aria-hidden="true" />
                <a
                  href="https://wa.me/5491153227308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-dorado"
                >
                  +54 11 5322-7308
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaClock className="text-dorado shrink-0" aria-hidden="true" />
                <span>Lunes a Sábado, 10 a 18 hs</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Separador */}
        <motion.div
          variants={item}
          className="mt-14 h-px bg-gradient-to-r from-transparent via-line to-transparent"
        />

        {/* Fila inferior */}
        <motion.div
          variants={item}
          className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted"
        >
          <p className="text-center sm:text-left">
            © 2025 <span className="text-ink-soft">Dariomicrocapilar</span> · Todos los derechos reservados
          </p>
          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 text-ink-soft transition-colors hover:text-dorado"
            aria-label="Volver arriba"
          >
            Volver arriba
            <span className="glass flex h-8 w-8 items-center justify-center rounded-full border border-line transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-dorado/50">
              <FaArrowUp className="text-xs" />
            </span>
          </button>
        </motion.div>
      </div>
    </motion.footer>
  );
}