import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import videoHero from '../assets/videos/video_hero.mp4';
import HeroCTAButton from './HeroCTAButton';
import logo from '../assets/images/logo_vertical_dorado.webp';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-fondo text-ink flex items-center justify-center px-6 overflow-hidden"
      aria-label="Sección principal de micropigmentación capilar en Buenos Aires"
    >
      {/* 🎥 Video de fondo solo en desktop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0 hidden md:block"
      >
        <source src={videoHero} type="video/mp4" />
        Tu navegador no soporta video en HTML5.
      </video>

      {/* Capa de oscurecimiento + degradado premium sobre el video (más suave para que se vea el video) */}
      <div className="absolute inset-0 z-10 bg-fondo/25" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-fondo/50 via-transparent to-fondo" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-fondo via-transparent to-transparent" />

      {/* Halos dorados atmosféricos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] gold-halo blur-[120px] opacity-40 z-10 animate-pulse-gold"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10rem] -left-40 w-[520px] h-[520px] gold-halo blur-[110px] opacity-25 z-10 animate-floaty"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-32 w-[440px] h-[440px] gold-halo blur-[110px] opacity-20 z-10 animate-drift"
      />

      {/* Viñeta radial para foco central */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, transparent 0%, transparent 42%, rgba(10,10,11,0.65) 100%)',
        }}
      />

      {/* Grano/línea sutil superior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-px z-10 bg-gradient-to-r from-transparent via-dorado/40 to-transparent"
      />

      {/* Contenido */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-20 max-w-3xl text-center"
      >
        {/* Eyebrow dorado */}
        <motion.div variants={item} className="mb-6 flex justify-center">
          <span className="glass inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-dorado">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-dorado opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-dorado" />
            </span>
            Micropigmentación Capilar · Buenos Aires
          </span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          variants={item}
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-ink"
        >
          Recuperá tu densidad
          <span className="block mt-2">
            con{' '}
            <span className="text-gold-gradient relative inline-block">
              precisión
              <span
                aria-hidden="true"
                className="absolute -inset-x-4 -inset-y-2 -z-10 gold-halo blur-2xl opacity-50"
              />
            </span>{' '}
            capilar
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-xl text-base md:text-xl text-ink-soft leading-relaxed"
        >
          Resultados naturales, sin cirugías. Un tratamiento premium que redefine
          tu línea capilar en{' '}
          <span className="text-ink font-medium">Buenos Aires</span>.
        </motion.p>

        {/* CTA */}
        <motion.div variants={item} className="mt-10 flex justify-center">
          <HeroCTAButton />
        </motion.div>

        {/* Logo */}
        <motion.div variants={item}>
          <div className="relative mx-auto mt-12 mb-6 w-fit">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 gold-halo blur-2xl opacity-40"
            />
            <img
              src={logo}
              alt="Logo de dariomicrocapilar"
              width={320}
              height={128}
              loading="eager"
              decoding="async"
              className="mx-auto object-contain animate-floaty w-56 sm:w-72 md:w-80 h-auto"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <Link
          to="Sobre mí"
          smooth={true}
          duration={600}
          aria-label="Desplazarse a la sección Sobre mí"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
            className="flex cursor-pointer flex-col items-center gap-2"
          >
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-ink-muted">
              Explorar
            </span>
            <span className="flex h-10 w-6 items-start justify-center rounded-full border border-line p-1.5">
              <FiChevronDown className="text-xl text-dorado" />
            </span>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
