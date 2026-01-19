import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'large';
  className?: string;
}

export function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'small',
  className = ''
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center gap-3 rounded-full font-apfel-grotezk font-medium transition-all hover:scale-105 group';

  const variantClasses = variant === 'primary'
    ? 'bg-primary-yellow text-black'
    : 'bg-gray-dark text-white';

  const sizeClasses = size === 'large'
    ? 'px-8 py-4 text-base'
    : 'px-6 py-3 text-sm';

  const classes = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

  const iconWrapper = (
    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black overflow-hidden relative">
      <span className="absolute inset-0 flex items-center justify-center transition-transform group-hover:translate-y-[-50%]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className="absolute inset-0 flex items-center justify-center transition-transform translate-y-[50%] group-hover:translate-y-0">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {iconWrapper}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {iconWrapper}
    </button>
  );
}
