import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'light';
}

export default function LoadingSpinner({ size = 'md', variant = 'primary' }: LoadingSpinnerProps) {
  const sizes = {
    sm: 'h-5 w-5 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-3',
  };

  const variants = {
    primary: 'border-t-[#E32726] border-b-[#E32726]',
    light: 'border-t-white border-b-white',
  };

  return (
    <div className="flex justify-center items-center">
      <div 
        className={`
          animate-spin rounded-full
          ${sizes[size]}
          ${variants[variant]}
          border-transparent
        `}
      />
    </div>
  );
}