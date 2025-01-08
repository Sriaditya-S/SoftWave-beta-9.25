import React from 'react';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const socialLinks = [
  { Icon: Linkedin, href: 'https://www.linkedin.com/company/soft-wavesolutions/', label: 'LinkedIn' },
  { Icon: Twitter, href: 'https://x.com/softwave_135?s=11', label: 'Twitter' },
  { Icon: Instagram, href: 'https://www.instagram.com/softwave_co?igsh=MXcyMWswZWVnNjR3dA==', label: 'Instagram' },
  
];

interface SocialIconsProps {
  className?: string;
  isScrolled?: boolean;
}

export default function SocialIcons({ className = '', isScrolled = false }: SocialIconsProps) {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className={`${
            isScrolled 
              ? 'text-gray-600 hover:text-[#E32726]' 
              : 'text-white hover:text-white/80'
          } transition-colors duration-300`}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}