import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-[1240px] mx-auto px-6 desktop:px-6 tablet:px-6 mobile:px-5 ${className}`}>
      {children}
    </div>
  );
}
