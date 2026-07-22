import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AnimatedCTAButton from './AnimatedCTAButton';

// Imágenes reales de clientes
import client_1 from '../assets/images/gallery/realclients/micro_caso_1_1.webp';
import client_2 from '../assets/images/gallery/realclients/micro_caso_1_2.webp';
import client_3 from '../assets/images/gallery/realclients/micro_caso_1_3.webp';
import client_4 from '../assets/images/gallery/realclients/micro_caso_1_4.webp';
import client_5 from '../assets/images/gallery/realclients/micro_caso_1_4.webp';
import client_6 from '../assets/images/gallery/realclients/micro_caso_2.webp';
import client_7 from '../assets/images/gallery/realclients/micro_caso_2_2.jpg';
import client_8 from '../assets/images/gallery/realclients/micro_caso_3.jpg';
import client_9 from '../assets/images/gallery/realclients/micro_caso_3_2.jpg';
import client_10 from '../assets/images/gallery/realclients/micro_caso_4.webp';
import client_11 from '../assets/images/gallery/realclients/micro_caso_4_2.webp';

const clientImages = [
  { url: client_1, category: 'Cliente 1' },
  { url: client_2, category: 'Cliente 1' },
  { url: client_3, category: 'Cliente 1' },
  { url: client_4, category: 'Cliente 1' },
  { url: client_5, category: 'Cliente 1' },
  { url: client_6, category: 'Cliente 2' },
  { url: client_7, category: 'Cliente 2' },
  { url: client_8, category: 'Cliente 3' },
  { url: client_9, category: 'Cliente 3' },
  { url: client_10, category: 'Cliente 4' },
  { url: client_11, category: 'Cliente 4' },
];

const RealClientGallery = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openGroups, setOpenGroups] = useState({});

  const openImage = (index) => {
    setActiveIndex(index);
    setActiveImage(clientImages[index]);
  };

  const nextImage = () => {
    const next = (activeIndex + 1) % clientImages.length;
    setActiveIndex(next);
    setActiveImage(clientImages[next]);
  };

  const prevImage = () => {
    const prev = (activeIndex - 1 + clientImages.length) % clientImages.length;
    setActiveIndex(prev);
    setActiveImage(clientImages[prev]);
  };

  const toggleGroup = (category) => {
    setOpenGroups((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const groupedCategories = [...new Set(clientImages.map((img) => img.category))];

  return (
    <section id="real-clients" className="bg-[#111111] text-texto py-24 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-heading text-dorado mb-2">
          Resultados reales de nuestros clientes
        </h2>
        <p className="text-gray-400 text-sm">
          Transformaciones auténticas sin filtros. Confianza, precisión y resultados visibles.
        </p>
      </div>

      {groupedCategories.map((category) => {
        const isOpen = openGroups[category];
        return (
          <div key={category} className="mb-6 border border-gray-700 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleGroup(category)}
              className="w-full flex justify-between items-center bg-[#1a1a1a] px-4 py-3 text-left text-sm font-medium text-dorado hover:bg-[#222]"
            >
              <span>{category}</span>
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden px-4 pt-3 pb-4"
                >
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {clientImages
                      .filter((img) => img.category === category)
                      .map((img, index) => (
                        <div
                          key={index}
                          className="relative overflow-hidden rounded-md border border-gray-700 cursor-pointer"
                          onClick={() => openImage(clientImages.indexOf(img))}
                        >
                          <img
                            src={img.url}
                            alt={`Resultado real – ${img.category}`}
                            loading="lazy"
                            width={160}
                            height={120}
                            decoding="async"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      <AnimatePresence>
        {activeImage && (
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
                key={activeImage.url}
                src={activeImage.url}
                alt={`Zoom – ${activeImage.category}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-xl w-full max-h-[80vh] object-contain shadow-2xl"
              />
              <button
                className="absolute top-3 right-4 text-2xl text-gray-300 hover:text-dorado"
                onClick={() => setActiveImage(null)}
                aria-label="Cerrar imagen"
              >
                ×
              </button>
              <div className="absolute top-1/2 left-2 -translate-y-1/2">
                <button onClick={prevImage} className="text-xl text-dorado" aria-label="Anterior">
                  <FaArrowLeft />
                </button>
              </div>
              <div className="absolute top-1/2 right-2 -translate-y-1/2">
                <button onClick={nextImage} className="text-xl text-dorado" aria-label="Siguiente">
                  <FaArrowRight />
                </button>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-300">
                {activeIndex + 1} de {clientImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full mt-10 flex justify-center">
        <AnimatedCTAButton
          text="Quiero resultados así"
          href="https://wa.me/5491153227308?text=Hola%20Dario,%20vi%20los%20resultados%20reales%20de%20tus%20clientes%20y%20me%20gustaría%20saber%20más"
        />
      </div>
    </section>
  );
};

export default RealClientGallery;