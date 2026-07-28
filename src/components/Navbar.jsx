import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo_horizontal_dorado.webp';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { to: 'inicio', label: 'Inicio' },
    { to: 'Sobre mí', label: 'Sobre mí' },
    { to: 'servicios', label: 'Servicios' },
    { to: 'galeria', label: 'Galería' },
    { to: 'procedimiento', label: 'Procedimiento' },
    { to: 'faq', label: 'Preguntas frecuentes' },
    { to: 'contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      {/* Navbar superior */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full fixed top-0 left-0 z-50 text-ink transition-all duration-500 ease-premium ${
          scrolled
            ? 'glass border-b border-line shadow-gold py-2'
            : 'bg-transparent border-b border-transparent py-4'
        }`}
        role="navigation"
        aria-label="Barra de navegación principal"
      >
        {/* Línea dorada superior de progreso/acento */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-dorado/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            className="relative"
          >
            <img
              src={logo}
              alt="Logo de dariomicrocapilar"
              width={120}
              height={40}
              className={`w-auto object-contain transition-all duration-500 ease-premium ${
                scrolled ? 'h-9' : 'h-11'
              }`}
            />
            <span className="pointer-events-none absolute -inset-3 -z-10 gold-halo blur-xl opacity-40" />
          </motion.div>

          {/* Navegación escritorio */}
          <nav
            className="hidden md:flex items-center gap-7 font-sans text-sm"
            aria-label="Menú de navegación"
          >
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={500}
                className="group relative cursor-pointer text-ink-soft hover:text-ink transition-colors duration-300"
              >
                {label}
                <span className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold-deep via-dorado to-gold-lite transition-transform duration-500 ease-premium group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* CTA escritorio */}
            <Link
              to="contacto"
              smooth={true}
              duration={500}
              className="hidden md:inline-flex"
            >
              <motion.span
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl2 bg-gradient-to-br from-gold-lite via-dorado to-gold-deep px-5 py-2.5 text-sm font-semibold text-fondo shadow-gold cursor-pointer"
              >
                <span className="relative z-10">Reservar turno</span>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-premium group-hover:translate-x-full" />
              </motion.span>
            </Link>

            {/* Botón hamburguesa */}
            <motion.button
              className="md:hidden grid place-items-center h-11 w-11 rounded-xl2 glass border border-line text-dorado text-2xl"
              whileTap={{ scale: 0.85 }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar móvil */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-fondo/70 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />

            <motion.div
              key="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-xs glass border-l border-line text-ink p-6 z-50 md:hidden flex flex-col justify-between overflow-hidden"
              role="menu"
              aria-label="Menú de navegación móvil"
            >
              {/* Halo decorativo */}
              <span className="pointer-events-none absolute -top-16 -right-16 h-52 w-52 gold-halo blur-[80px] opacity-40" />

              <div className="relative z-10">
                <div className="flex items-center justify-end mb-8">
                  <motion.button
                    className="grid place-items-center h-10 w-10 rounded-xl2 border border-line text-dorado text-xl"
                    whileTap={{ scale: 0.85 }}
                    onClick={() => setMenuOpen(false)}
                    aria-label="Cerrar menú"
                  >
                    <FiX />
                  </motion.button>
                </div>

                <ul className="flex flex-col gap-1 font-heading text-lg">
                  {navItems.map(({ to, label }, i) => (
                    <motion.li
                      key={to}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 + i * 0.06,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        to={to}
                        smooth={true}
                        duration={500}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center gap-3 rounded-xl2 px-3 py-3 text-ink-soft hover:text-ink hover:bg-surface-2/60 transition-colors duration-300 cursor-pointer"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-dorado/40 transition-all duration-300 group-hover:bg-dorado group-hover:shadow-gold" />
                        {label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-8"
                >
                  <Link
                    to="contacto"
                    smooth={true}
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                    className="group relative flex items-center justify-center overflow-hidden rounded-xl2 bg-gradient-to-br from-gold-lite via-dorado to-gold-deep px-5 py-3 text-sm font-semibold text-fondo shadow-gold cursor-pointer"
                  >
                    <span className="relative z-10">Reservar turno</span>
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-premium group-hover:translate-x-full" />
                  </Link>
                </motion.div>
              </div>

              {/* Logo en menú móvil */}
              <div className="relative z-10 mt-10 flex flex-col items-center gap-3">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />
                <img
                  src={logo}
                  alt="Logo móvil de dariomicrocapilar"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain opacity-90"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
