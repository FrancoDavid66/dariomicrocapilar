import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-scroll';
import videoHero from '../assets/videos/video_hero.mp4';
import HeroCTAButton from './HeroCTAButton';
import logo from '../assets/images/logo_recortado.webp';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-black text-texto flex items-center justify-center px-6 overflow-hidden"
      aria-label="Sección principal de micropigmentación capilar en Buenos Aires"
    >
      {/* 🎥 Video de fondo solo en desktop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 hidden md:block"
      >
        <source src={videoHero} type="video/mp4" />
        Tu navegador no soporta video en HTML5.
      </video>

      {/* Capa oscura encima del video */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Contenido */}
      <div className="relative z-20 max-w-3xl text-center">
        <h1 className="text-3xl md:text-5xl font-heading mb-6 text-dorado leading-tight">
          Micropigmentación Capilar
        </h1>

        <p className="text-base md:text-lg text-gray-300 mb-8">
          Resultados naturales. Sin cirugías. En Buenos Aires.
        </p>

        <HeroCTAButton />

        <img
          src={logo}
          alt="Logo de drmicrocapilar"
          width={160}
          height={64}
          loading="eager"
          decoding="async"
          className="mx-auto mt-8 mb-6 object-contain"
          style={{ width: '160px', height: '64px' }}
        />

        <Link
          to="Sobre mí"
          smooth={true}
          duration={600}
          aria-label="Desplazarse a la sección Sobre mí"
        >
          <div className="mt-2 flex justify-center cursor-pointer">
            <FiChevronDown className="text-dorado text-3xl" />
          </div>
        </Link>
      </div>
    </section>
  );
}
