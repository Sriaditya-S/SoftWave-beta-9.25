import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  icon = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-[#E32726] text-white hover:bg-[#c71f1f] shadow-lg hover:shadow-xl",
    secondary: "bg-[#1A1B1E] text-white hover:bg-[#2A2B2E]",
    outline: "border-2 border-[#E32726] text-[#E32726] hover:bg-[#E32726] hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const className = `${baseStyles} ${variants[variant]} ${sizes[size]}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
}