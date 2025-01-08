import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './common/Logo';
import NavLinks from './navigation/NavLinks';
import SocialIcons from './navigation/SocialIcons';
import Button from './common/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo isScrolled={isScrolled} />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks isScrolled={isScrolled} />
          </nav>

          {/* Desktop Social Icons & Contact Button */}
          <div className="hidden md:flex items-center space-x-6">
            <SocialIcons isScrolled={isScrolled} />
            <Button href="#contact" variant="primary" size="sm">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled 
                ? 'hover:bg-gray-100 text-gray-700' 
                : 'hover:bg-white/10 text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}>
          <nav className="py-4 bg-white rounded-lg shadow-lg">
            <div className="px-4 space-y-4">
              <NavLinks mobile />
              <div className="pt-4 border-t border-gray-200">
                <SocialIcons className="justify-center" />
              </div>
              <div className="pt-4">
                <Button 
                  href="#contact" 
                  variant="primary" 
                  size="sm"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}