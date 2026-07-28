import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import antes from '../assets/images/imagen_7_antes.webp';
import despues from '../assets/images/imagen_8_despues.webp';

export default function BeforeAfter() {
  const ref = useRef(null);
  const [pos, setPos] = useState(50); // % visible del "después"
  const dragging = useRef(false);

  const setFromX = useCallback((clientX) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    let p = ((clientX - r.left) / r.width) * 100;
    p = Math.max(0, Math.min(100, p));
    setPos(p);
  }, []);

  const onDown = (e) => {
    dragging.current = true;
    setFromX(e.clientX ?? e.touches[0].clientX);
  };
  const onMove = (e) => {
    if (!dragging.current) return;
    setFromX(e.clientX ?? e.touches[0].clientX);
  };
  const stop = () => (dragging.current = false);

  return (
    <section
      id="antes-despues"
      className="relative bg-[#0A0A0B] text-[#F5F3EE] py-24 px-6 overflow-hidden"
      aria-label="Comparación antes y después de micropigmentación capilar"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[300px] blur-[100px] opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(212,163,74,0.18), transparent 65%)' }} />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-[#D4A34A] mb-3">
            Antes y después
          </p>
          <h2 className="text-3xl md:text-5xl font-heading mb-4">Mirá la transformación</h2>
          <p className="text-[#B0ABA1] text-lg">
            Arrastrá el control para comparar. Resultado real de un cliente de Dario.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          ref={ref}
          onMouseDown={onDown}
          onMouseMove={onMove}
          onMouseUp={stop}
          onMouseLeave={stop}
          onTouchStart={onDown}
          onTouchMove={onMove}
          onTouchEnd={stop}
          className="relative aspect-[3/4] sm:aspect-[4/5] max-w-md sm:max-w-lg mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl select-none cursor-ew-resize"
          style={{ touchAction: 'none' }}
        >
          {/* DESPUÉS (fondo completo) */}
          <img src={despues} alt="Después del tratamiento"
            className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none" draggable="false" />
          {/* ANTES (recortado por el slider) */}
          <img src={antes} alt="Antes del tratamiento"
            className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
            draggable="false" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />

          {/* etiquetas */}
          <span className="absolute top-3 left-3 bg-[#0A0A0B]/70 backdrop-blur-sm text-[#B0ABA1] text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
            Antes
          </span>
          <span className="absolute top-3 right-3 bg-[#0A0A0B]/70 backdrop-blur-sm text-[#D4A34A] text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
            Después
          </span>

          {/* manija */}
          <div className="absolute top-0 bottom-0 w-[3px] bg-[#D4A34A] shadow-[0_0_18px_rgba(212,163,74,0.5)] z-20"
            style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#D4A34A] text-[#0A0A0B] font-bold flex items-center justify-center shadow-lg">
              ⇄
            </div>
          </div>
        </motion.div>
        <p className="text-center text-[#6E6A62] text-sm mt-4">← Arrastrá para comparar →</p>
      </div>
    </section>
  );
}
