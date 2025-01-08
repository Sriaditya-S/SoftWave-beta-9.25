import React, { Suspense, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoadingSpinner from './components/common/LoadingSpinner';
import ScrollToTop from './components/common/ScrollToTop';
import WelcomePopup from './components/WelcomePopup';
import { isFirstVisit } from './utils/storage';

// Lazy load components for better performance
const Services = React.lazy(() => import('./components/Services'));
const WhyUs = React.lazy(() => import('./components/WhyUs'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const About = React.lazy(() => import('./components/About'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const Contact = React.lazy(() => import('./components/Contact'));
const TrustedClients = React.lazy(() => import('./components/TrustedClients'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  const [showWelcome, setShowWelcome] = useState(isFirstVisit());

  return (
    <div className="min-h-screen bg-white">
      <WelcomePopup isOpen={showWelcome} onClose={() => setShowWelcome(false)} />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="py-20"><LoadingSpinner /></div>}>
          <Services />
          <WhyUs />
          <TrustedClients />
          <Portfolio />
          <About />
          <Pricing />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  );
}

export default App;