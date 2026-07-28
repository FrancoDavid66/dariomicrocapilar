import { Suspense, lazy } from 'react';

// Componentes esenciales cargados al inicio
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import LazySection from './components/LazySection';

// Componentes diferidos (lazy — se cargan por scroll)
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
        {/* Hero carga de una (primera pantalla / LCP) */}
        <Suspense fallback={<div className="min-h-screen bg-fondo" />}>
          <Hero />
        </Suspense>

        {/* El resto monta solo cuando se acerca en el scroll */}
        <LazySection minHeight={520}>
          <About />
        </LazySection>

        <LazySection minHeight={600}>
          <BeforeAfter />
        </LazySection>

        <LazySection minHeight={600}>
          <Services />
        </LazySection>

        <LazySection minHeight={700}>
          <Pigmento />
        </LazySection>

        <LazySection minHeight={400}>
          <Gallery />
        </LazySection>

        <LazySection minHeight={400}>
          <RealClientGallery />
        </LazySection>

        <LazySection minHeight={600}>
          <VideoTrabajo />
        </LazySection>

        <LazySection minHeight={600}>
          <Procedure />
        </LazySection>

        <LazySection minHeight={500}>
          <FAQ />
        </LazySection>

        <LazySection minHeight={700}>
          <Contact />
        </LazySection>

        <Footer />
      </main>
    </>
  );
};

export default App;