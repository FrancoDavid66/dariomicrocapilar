import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import video from '../assets/videos/video_mostrando_trabajo.mp4';

export default function VideoTrabajo() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      id="video-trabajo"
      className="relative bg-fondo text-ink py-24 px-6 overflow-hidden"
      aria-label="Video mostrando el trabajo de micropigmentación capilar de Dario"
    >
      {/* halos dorados ambientales */}
      <div className="pointer-events-none absolute -top-32 -left-24 w-[480px] h-[480px] gold-halo blur-[110px] opacity-30 animate-floaty" />
      <div className="pointer-events-none absolute bottom-[-8rem] -right-24 w-[420px] h-[420px] gold-halo blur-[110px] opacity-25 animate-drift" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-dorado mb-3">
            En acción
          </p>
          <h2 className="text-3xl md:text-5xl font-heading text-ink mb-4">
            Mirá cómo <span className="text-gold-gradient">trabajo</span>
          </h2>
          <p className="text-ink-soft text-lg">
            Precisión, higiene y técnica milimétrica en cada sesión. Así se logra un resultado natural.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-line shadow-gold-lg group"
        >
          {/* marco dorado sutil en hover */}
          <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-dorado/40 transition-all duration-500" />

          <video
            ref={ref}
            src={video}
            className="w-full h-auto max-h-[80vh] object-contain bg-black mx-auto"
            playsInline
            loop
            muted
            preload="auto"
            onClick={toggle}
          />

          {/* Botón play/pause central */}
          <button
            onClick={toggle}
            aria-label={playing ? 'Pausar video' : 'Reproducir video'}
            className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 ${
              playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
            }`}
          >
            <span className="grid place-items-center h-20 w-20 rounded-full bg-gradient-to-br from-gold-lite via-dorado to-gold-deep text-fondo text-2xl shadow-gold transition-transform duration-300 hover:scale-110">
              {playing ? <FaPause /> : <FaPlay className="ml-1" />}
            </span>
            {!playing && (
              <span className="absolute h-20 w-20 rounded-full bg-dorado/40 animate-ping" />
            )}
          </button>

          {/* degradado inferior para dar profundidad */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-fondo/70 to-transparent z-[5]" />
        </motion.div>

        {/* CTA — ¿Tenés dudas? Hablá con Dario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-xl mx-auto"
        >
          <p className="text-ink-soft italic">
            En cada paso, estás acompañado. Tu tranquilidad es nuestra prioridad.
          </p>
          <a
            href="https://wa.me/5491153227308?text=Hola%20Dario,%20tengo%20algunas%20dudas%20sobre%20el%20procedimiento%20de%20micropigmentación"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex items-center gap-2.5 rounded-full border border-dorado/30 bg-dorado/5 px-6 py-3 text-dorado font-medium transition-all duration-300 hover:bg-dorado/10 hover:border-dorado/50 hover:shadow-gold hover:-translate-y-0.5"
            aria-label="Consultar por WhatsApp sobre el procedimiento"
          >
            <BsWhatsapp className="text-xl transition-transform duration-300 group-hover:scale-110" />
            ¿Tenés dudas? Hablá con Dario
          </a>
        </motion.div>
      </div>
    </section>
  );
}