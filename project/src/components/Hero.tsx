import React, { useEffect, useRef } from 'react';
import Button from './common/Button';

export default function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / innerWidth * 20;
      const moveY = (clientY - innerHeight / 2) / innerHeight * 20;
      
      backgroundRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-[#1A1B1E] to-[#2A2B2E] relative overflow-hidden">
      {/* Animated background elements */}
      <div ref={backgroundRef} className="absolute inset-0 overflow-hidden transition-transform duration-300 ease-out">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: Math.random() * 300 + 50 + 'px',
              height: Math.random() * 300 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 20}s linear infinite`,
              animationDelay: `-${Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
              Transform Your Business with{' '}
              <span className="text-[#E32726]">Digital Innovation</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 animate-fade-in-delay">
              Empowering businesses with cutting-edge digital solutions that drive growth,
              efficiency, and success in the modern world.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-2">
              <Button href="#contact" variant="primary" size="lg" icon>
                Get Started
              </Button>
              <Button href="#services" variant="outline" size="lg">
                Our Services
              </Button>
            </div>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-[#E32726] rounded-lg blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
              alt="Digital Business Solutions"
              className="relative rounded-lg shadow-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}