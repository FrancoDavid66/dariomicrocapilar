import React, { Suspense, lazy } from 'react';

// Componentes esenciales cargados al inicio
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

// Componentes diferidos (lazy)
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Pigmento = lazy(() => import('./components/Pigmento'));
const Gallery = lazy(() => import('./components/Gallery'));
const RealClientGallery = lazy(() => import('./components/RealClientGallery'));
const BeforeAfter = lazy(() => import('./components/BeforeAfter'));
const VideoTrabajo = lazy(() => import('./components/VideoTrabajo'));
const Procedure = lazy(() => import('./components/Procedure'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
  return (
    <>
      <Loader />

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

        <Suspense fallback={<div className="min-h-[40vh] flex justify-center items-center">Cargando antes y después...</div>}>
          <BeforeAfter />
        </Suspense>

        <Suspense fallback={<div className="min-h-[40vh] flex justify-center items-center">Cargando servicios...</div>}>
          <Services />
        </Suspense>

        <Suspense fallback={<div className="min-h-[40vh] flex justify-center items-center">Cargando pigmento...</div>}>
          <Pigmento />
        </Suspense>

        <Suspense fallback={<div className="min-h-[40vh] flex justify-center items-center">Cargando galería...</div>}>
          <Gallery />
        </Suspense>

        <Suspense fallback={<div className="min-h-[40vh] flex justify-center items-center">Cargando resultados reales...</div>}>
          <RealClientGallery />
        </Suspense>

        <Suspense fallback={<div className="min-h-[40vh] flex justify-center items-center">Cargando video...</div>}>
          <VideoTrabajo />
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