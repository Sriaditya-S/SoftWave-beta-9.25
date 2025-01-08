import React from 'react';
import { ChevronDown } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

const links: NavLink[] = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  {
    name: 'Services',
    href: '#services',
    subItems: [
      { name: 'Digital Marketing', href: '#digital-marketing' },
      { name: 'Web Development', href: '#web-development' },
      { name: 'AI Automation', href: '#ai-automation' },
      { name: 'Social Media Management', href: '#social-media' },
      { name: 'Cloud Solutions', href: '#cloud-solutions' },
      { name: 'Cybersecurity Services', href: '#cybersecurity' },
    ],
  },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Pricing', href: '#pricing' },
  //{ name: 'Contact', href: '#contact' },
];

interface NavLinksProps {
  mobile?: boolean;
  isScrolled?: boolean;
}

export default function NavLinks({ mobile = false, isScrolled = false }: NavLinksProps) {
  return (
    <>
      {links.map((link) => (
        <div key={link.name} className="relative group">
          <a
            href={link.href}
            className={`${
              mobile 
                ? 'block py-2 text-gray-700' 
                : `inline-flex items-center ${
                    isScrolled 
                      ? 'text-gray-700' 
                      : 'text-white hover:text-white/80'
                  }`
            } hover:text-[#E32726] transition-colors duration-300`}
          >
            {link.name}
            {link.subItems && (
              <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
            )}
          </a>
          
          {link.subItems && (
            <div className={`${
              mobile 
                ? 'pl-4 mt-2 space-y-2' 
                : 'absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300'
            }`}>
              {link.subItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E32726] hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}