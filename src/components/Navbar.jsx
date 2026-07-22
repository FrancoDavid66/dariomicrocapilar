import { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.webp';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: 'inicio', label: 'Inicio' },
    { to: 'Sobre mí', label: 'Sobre mí' },
    { to: 'servicios', label: 'Servicios' },
    { to: 'galeria', label: 'Galería' },
    { to: 'procedimiento', label: 'Procedimiento' },
    { to: 'faq', label: 'Preguntas frecuentes' },
    { to: 'contacto', label: 'Contacto' },
  ];

  return (
    <>
      {/* Navbar superior */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full fixed top-0 left-0 z-50 bg-fondo text-texto shadow-md"
        role="navigation"
        aria-label="Barra de navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <img
            src={logo}
            alt="Logo de drmicrocapilarr"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />

          {/* Navegación escritorio */}
          <nav className="hidden md:flex gap-6 font-sans text-sm" aria-label="Menú de navegación">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-dorado transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Botón hamburguesa */}
          <motion.button
            className="md:hidden text-dorado text-2xl"
            whileTap={{ scale: 0.85 }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Sidebar móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-2/3 bg-primario text-texto p-6 z-40 md:hidden shadow-lg flex flex-col justify-between"
            role="menu"
            aria-label="Menú de navegación móvil"
          >
            <div>
              <ul className="flex flex-col gap-6 mt-12 font-sans text-lg">
                {navItems.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      smooth={true}
                      duration={500}
                      onClick={() => setMenuOpen(false)}
                      className="cursor-pointer hover:text-dorado"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo en menú móvil */}
            <div className="mt-10 flex justify-center">
              <img
                src={logo}
                alt="Logo móvil de drmicrocapilarr"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
