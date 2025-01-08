import React from 'react';
import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const socialLinks = [
  { Icon: Linkedin, href: 'https://www.linkedin.com/company/soft-wavesolutions/', label: 'LinkedIn' },
  { Icon: Twitter, href: 'https://x.com/softwave_135?s=11', label: 'Twitter' },
  { Icon: Instagram, href: 'https://www.instagram.com/softwave_co?igsh=MXcyMWswZWVnNjR3dA==', label: 'Instagram' },
  
];

const contactInfo = [
  { Icon: Phone, text: '+91 6382083873' },
  { Icon: Mail, text: 'softwavesolutions135@gmail.com' },
  { Icon: MapPin, text: 'TT004 Technology Tower, VIT Vellore Campus' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1B1E] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">About SoftWave</h3>
            <p className="text-gray-400 mb-6">
              Transforming businesses through innovative digital solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              {contactInfo.map(({ Icon, text }, index) => (
                <div key={index} className="flex items-center text-gray-400">
                  <Icon className="h-5 w-5 mr-3 text-[#E32726]" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors duration-300">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SoftWave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}