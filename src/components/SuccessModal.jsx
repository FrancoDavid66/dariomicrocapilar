import { motion, AnimatePresence } from 'framer-motion';

export default function SuccessModal({ visible, onClose }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#1a1a1a] text-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <h2 className="text-xl font-bold mb-2">¡Mensaje Enviado!</h2>
            <p className="text-sm text-gray-300 mb-4">
              Gracias por contactarme. Te respondere a la brevedad.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-4 py-2 bg-[#B8860B] text-black rounded-full hover:scale-105 transition"
            >
              Cerrar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
