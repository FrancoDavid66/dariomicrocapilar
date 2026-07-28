import { Suspense, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * LazySection — monta su contenido (children) solo cuando la sección
 * está por entrar en viewport. Reserva un alto mínimo mientras tanto
 * para que el scroll no salte, y hace un fade-in suave al aparecer.
 *
 * Uso:
 *   <LazySection minHeight={600}>
 *     <MiSeccion />
 *   </LazySection>
 */
export default function LazySection({ children, minHeight = 480, rootMargin = '300px' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin } // empieza a cargar 300px antes de que se vea → sin saltos
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: visible ? undefined : minHeight }}>
      {visible && (
        <Suspense fallback={<div style={{ minHeight }} aria-hidden="true" />}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        </Suspense>
      )}
    </div>
  );
}