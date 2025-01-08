import React from 'react';

interface SkeletonLoaderProps {
  variant?: 'text' | 'circle' | 'rectangle';
  width?: string;
  height?: string;
  className?: string;
}

export default function SkeletonLoader({
  variant = 'text',
  width = '100%',
  height = '1rem',
  className = '',
}: SkeletonLoaderProps) {
  const baseClasses = 'animate-pulse bg-gray-200';
  
  const variantClasses = {
    text: 'rounded',
    circle: 'rounded-full',
    rectangle: 'rounded-md',
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
    />
  );
}