import React, { Suspense, lazy } from 'react';

// Componentes esenciales cargados al inicio
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Componentes diferidos (lazy)
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Gallery = lazy(() => import('./components/Gallery'));
const RealClientGallery = lazy(() => import('./components/RealClientGallery'));
const Procedure = lazy(() => import('./components/Procedure'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="bg-fondo text-texto font-sans">
        <Suspense fallback={<div className="min-h-[60vh] flex justify-center items-center">Cargando inicio...</div>}>
          <Hero />
        </Suspense>

        <Suspense fallback={<div className="min-h-[40vh] flex justify-center items-center">Cargando sobre mí...</div>}>
          <About />
        </Suspense>

        <Suspense fallback={<div className="min-h-[40vh] flex justify-center items-center">Cargando servicios...</div>}>
          <Services />
        </Suspense>

        <Suspense fallback={<div className="min-h-[40vh] flex justify-center items-center">Cargando galería...</div>}>
          <Gallery />
        </Suspense>

        <Suspense fallback={<div className="min-h-[40vh] flex justify-center items-center">Cargando resultados reales...</div>}>
          <RealClientGallery />
        </Suspense>

        <Suspense fallback={<div className="min-h-[40vh] flex justify-center items-center">Cargando procedimiento...</div>}>
          <Procedure />
        </Suspense>

        <Suspense fallback={<div className="min-h-[40vh] flex justify-center items-center">Cargando preguntas frecuentes...</div>}>
          <FAQ />
        </Suspense>

        <Suspense fallback={<div className="min-h-[40vh] flex justify-center items-center">Cargando contacto...</div>}>
          <Contact />
        </Suspense>

        <Footer />
      </main>
    </>
  );
};

export default App;
