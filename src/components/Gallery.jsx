import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import AnimatedCTAButton from './AnimatedCTAButton';

// Simulaciones importadas
import cicatriz_1 from '../assets/images/gallery/cicatrices/cicatriz1.webp';
import cicatriz_2 from '../assets/images/gallery/cicatrices/cicatriz2.webp';
import cicatriz_3 from '../assets/images/gallery/cicatrices/cicatriz3.webp';
import cicatriz_4 from '../assets/images/gallery/cicatrices/cicatriz4.webp';

import densidad_1 from '../assets/images/gallery/densidad/densidad1.webp';
import densidad_2 from '../assets/images/gallery/densidad/densidad2.webp';
import densidad_3 from '../assets/images/gallery/densidad/densidad3.webp';
import densidad_5 from '../assets/images/gallery/densidad/densidad5.webp';

import rapado_1 from '../assets/images/gallery/rapado/rapado1.webp';
import rapado_2 from '../assets/images/gallery/rapado/rapado2.webp';
import rapado_3 from '../assets/images/gallery/rapado/rapado3.webp';

const imagenes = [
  { url: cicatriz_1, categoria: 'Cicatriz', width: 640, height: 480 },
  { url: cicatriz_2, categoria: 'Cicatriz', width: 640, height: 480 },
  { url: cicatriz_3, categoria: 'Cicatriz', width: 640, height: 480 },
  { url: cicatriz_4, categoria: 'Cicatriz', width: 640, height: 480 },
  { url: densidad_1, categoria: 'Densidad', width: 640, height: 480 },
  { url: densidad_2, categoria: 'Densidad', width: 640, height: 480 },
  { url: densidad_3, categoria: 'Densidad', width: 640, height: 480 },
  { url: densidad_5, categoria: 'Densidad', width: 640, height: 480 },
  { url: rapado_1, categoria: 'Rapado', width: 640, height: 480 },
  { url: rapado_2, categoria: 'Rapado', width: 640, height: 480 },
  { url: rapado_3, categoria: 'Rapado', width: 640, height: 480 },
];

export default function Gallery() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
  const [imagenActiva, setImagenActiva] = useState(null);
  const [indiceActivo, setIndiceActivo] = useState(0);
  const [abierto, setAbierto] = useState(false);

  const imagenesFiltradas =
    categoriaActiva === 'Todas'
      ? imagenes
      : imagenes.filter((img) => img.categoria === categoriaActiva);

  const abrirImagen = (index) => {
    setIndiceActivo(index);
    setImagenActiva(imagenesFiltradas[index]);
  };

  const siguienteImagen = () => {
    const siguiente = (indiceActivo + 1) % imagenesFiltradas.length;
    setIndiceActivo(siguiente);
    setImagenActiva(imagenesFiltradas[siguiente]);
  };

  const anteriorImagen = () => {
    const anterior = (indiceActivo - 1 + imagenesFiltradas.length) % imagenesFiltradas.length;
    setIndiceActivo(anterior);
    setImagenActiva(imagenesFiltradas[anterior]);
  };

  return (
    <section id="galeria" className="bg-[#1e1e1e] text-texto py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-heading text-dorado mb-4">
          Simulaciones de Resultados
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          Estas imágenes son simulaciones ilustrativas del servicio de micropigmentación capilar.
        </p>

        <button
          onClick={() => setAbierto(!abierto)}
          className="flex items-center justify-center gap-2 text-dorado font-semibold hover:underline text-lg mx-auto"
          aria-label="Botón para mostrar u ocultar galería"
        >
          {abierto ? "Ocultar simulaciones" : "Ver simulaciones"}
        </button>
      </div>

      <AnimatePresence>
        {abierto && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            {/* FILTROS */}
            <div className="flex justify-center gap-4 my-10 flex-wrap">
              {["Todas", "Rapado", "Densidad", "Cicatriz"].map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setCategoriaActiva(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                    categoriaActiva === cat
                      ? "bg-dorado text-black border-dorado shadow-[0_0_10px_#B8860B88]"
                      : "border-gray-600 text-gray-300 hover:text-dorado hover:border-dorado"
                  }`}
                  aria-pressed={categoriaActiva === cat}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            {/* GRID */}
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 max-w-6xl mx-auto space-y-4 pb-10">
              {imagenesFiltradas.map((img, index) => (
                <div
                  key={index}
                  className="relative break-inside-avoid cursor-pointer group overflow-hidden rounded-xl shadow-md"
                  onClick={() => abrirImagen(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Abrir imagen categoría ${img.categoria}`}
                >
                  <span className="absolute top-2 left-2 bg-dorado text-black text-xs px-2 py-1 rounded-full shadow">
                    {img.categoria}
                  </span>
                  <img
                    src={img.url}
                    alt={`Simulación de micropigmentación capilar – categoría ${img.categoria}`}
                    title={`Resultado de micropigmentación categoría ${img.categoria}`}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_#B8860B66] rounded-xl"
                  />
                </div>
              ))}
            </div>

            {/* MODAL */}
            <AnimatePresence>
              {imagenActiva && (
                <motion.div
                  className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  aria-modal="true"
                  role="dialog"
                >
                  <div className="relative w-full max-w-3xl mx-auto">
                    <motion.img
                      key={imagenActiva.url}
                      src={imagenActiva.url}
                      alt={`Detalle ampliado de simulación capilar en categoría ${imagenActiva.categoria}`}
                      title={`Resultado ampliado de la categoría ${imagenActiva.categoria}`}
                      width={imagenActiva.width}
                      height={imagenActiva.height}
                      loading="lazy"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-xl w-full max-h-[80vh] object-contain shadow-2xl"
                    />
                    <button
                      className="absolute top-3 right-4 text-3xl text-gray-300 hover:text-dorado"
                      onClick={() => setImagenActiva(null)}
                      aria-label="Cerrar imagen ampliada"
                    >
                      ×
                    </button>
                    <div className="absolute top-1/2 left-2 -translate-y-1/2">
                      <button onClick={anteriorImagen} className="text-2xl text-dorado hover:scale-125" aria-label="Imagen anterior">
                        <FaArrowLeft />
                      </button>
                    </div>
                    <div className="absolute top-1/2 right-2 -translate-y-1/2">
                      <button onClick={siguienteImagen} className="text-2xl text-dorado hover:scale-125" aria-label="Imagen siguiente">
                        <FaArrowRight />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-300">
                      {indiceActivo + 1} de {imagenesFiltradas.length}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA */}
            <div className="w-full flex justify-center mb-8">
              <AnimatedCTAButton
                text="Quiero verme así"
                href="https://wa.me/5491153227308?text=Hola%20Dario,%20quiero%20consultar%20sobre%20los%20resultados%20simulados%20que%20vi%20en%20la%20galería"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
