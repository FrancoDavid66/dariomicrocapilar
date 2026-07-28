import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, animate, useInView } from 'framer-motion';
import aboutImg from '../assets/images/dario1.webp';
import firmaDario from '../assets/images/dario1.webp';
import dario2 from '../assets/images/dario2.webp';
import dario3 from '../assets/images/dario3.webp';
import dario4 from '../assets/images/dario4.webp';
import { useState, useRef, useEffect } from 'react';
import AnimatedCTAButton from './AnimatedCTAButton';
import certificado from '../assets/images/about/certificado.webp';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

function AnimatedStat({ value, prefix = '+', label, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value, delay]);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="group relative glass rounded-xl2 px-3 py-5 text-center overflow-hidden transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-gold hover:border-dorado/40"
    >
      <span className="pointer-events-none absolute inset-x-0 -top-1/2 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-dorado/15 to-transparent blur-xl" />
      <h3 className="relative text-2xl md:text-3xl font-heading font-bold text-gold-gradient tabular-nums">
        {prefix}
        {display}
      </h3>
      <p className="relative mt-1 text-[11px] md:text-xs text-ink-soft leading-tight">{label}</p>
    </motion.div>
  );
}

export default function About() {
  const [mainImage, setMainImage] = useState(aboutImg);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });

  const handleTilt = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 12);
    rotateX.set(-py * 12);
  };
  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section
      id="Sobre mí"
      className="relative w-full bg-fondo text-texto py-24 px-6 overflow-hidden"
      aria-label="Sección sobre Dario especialista en micropigmentación"
    >
      {/* Halos dorados de fondo */}
      <div className="pointer-events-none absolute -left-32 top-10 w-[26rem] h-[26rem] gold-halo blur-[100px] opacity-40 animate-drift" />
      <div className="pointer-events-none absolute -right-24 bottom-0 w-[22rem] h-[22rem] gold-halo blur-[90px] opacity-30 animate-floaty" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14">
        {/* Texto */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-dorado mb-3"
            variants={fadeInUp}
          >
            <span className="h-px w-6 bg-dorado/60" />
            ¿Quién está detrás?
          </motion.p>

          <motion.h2
            className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-5"
            variants={fadeInUp}
          >
            Conocé a <span className="text-gold-gradient">Dario</span>
          </motion.h2>

          <motion.div variants={fadeInUp} className="mb-5">
            <motion.img
              src={certificado}
              alt="Certificación profesional"
              width={140}
              height={80}
              loading="lazy"
              decoding="async"
              whileHover={{ scale: 1.04, rotate: -1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 16 }}
              className="w-28 md:w-36 h-auto mx-auto md:mx-0 object-contain drop-shadow-[0_4px_18px_rgba(212,163,74,0.25)]"
            />
          </motion.div>

          <motion.p
            className="text-base md:text-lg mb-3 leading-relaxed text-ink-soft"
            variants={fadeInUp}
          >
            Soy <span className="text-ink font-medium">Dario</span>. Ayudo a recuperar tu imagen con
            micropigmentación capilar precisa, natural y segura.
          </motion.p>
          <motion.p
            className="text-base md:text-lg mb-3 leading-relaxed text-ink-soft"
            variants={fadeInUp}
          >
            Trabajo con técnica milimétrica, materiales de alta calidad y atención personalizada en
            Buenos Aires.
          </motion.p>

          <motion.div
            className="mt-8 grid grid-cols-3 gap-4"
            variants={container}
          >
            <AnimatedStat value={5} label="Años de experiencia" delay={0} />
            <AnimatedStat value={300} label="Clientes reales" delay={0.15} />
            <AnimatedStat value={1000} label="Horas aplicadas" delay={0.3} />
          </motion.div>

          <motion.div className="mt-8" variants={fadeInUp}>
            <AnimatedCTAButton text="Consultá por tu caso" href="https://wa.me/5491153227308" />
          </motion.div>
        </motion.div>

        {/* Imagen + mini galería */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative z-10 mb-6 w-72"
            style={{ perspective: 1000 }}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className="relative">
              {/* Marco dorado */}
              <div className="pointer-events-none absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-gold-lite/60 via-dorado/30 to-transparent opacity-70" />
              <div className="relative overflow-hidden rounded-2xl border border-line glass">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={mainImage}
                    src={mainImage}
                    alt="Dario especialista en micropigmentación"
                    width={288}
                    height={432}
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="w-72 h-auto object-cover"
                  />
                </AnimatePresence>
                {/* Brillo shimmer */}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
              </div>
            </motion.div>
            {/* Halo dorado detrás */}
            <div className="absolute -inset-5 z-[-1] rounded-2xl bg-dorado blur-2xl opacity-20 animate-pulse-gold" />
          </motion.div>

          <motion.div
            className="flex gap-3 mt-2 overflow-x-auto pb-2 px-1"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[aboutImg, dario2, dario3, dario4].map((img, index) => (
              <motion.button
                key={index}
                type="button"
                onClick={() => setMainImage(img)}
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                aria-label={`Ver miniatura ${index + 1}`}
                className={`relative shrink-0 rounded-lg overflow-hidden border-2 transition-colors duration-300 ${
                  mainImage === img
                    ? 'border-dorado shadow-gold'
                    : 'border-transparent hover:border-dorado/40'
                }`}
              >
                <img
                  src={img}
                  alt={`Miniatura ${index + 1}`}
                  width={72}
                  height={72}
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 object-cover"
                />
                {mainImage === img && (
                  <motion.span
                    layoutId="thumb-active"
                    className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-dorado"
                    transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
