import React from 'react';
import { Globe } from 'lucide-react';

interface LogoProps {
  isScrolled?: boolean;
}

export default function Logo({ isScrolled = false }: LogoProps) {
  return (
    <div className="flex items-center group">
      <div className="relative">
        <Globe className={`h-8 w-8 ${
          isScrolled ? 'text-[#E32726]' : 'text-white'
        } transform transition-all duration-700 group-hover:rotate-180`} />
        <div className="absolute inset-0 bg-[#E32726] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700 -z-10"></div>
      </div>
      <span className={`ml-2 text-2xl font-bold ${
        isScrolled ? 'text-[#1A1B1E]' : 'text-white'
      } group-hover:text-[#E32726] transition-colors duration-300`}>
        SoftWave
      </span>
    </div>
  );
}