'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageRevealProps extends ImageProps {
  revealDirection?: 'up' | 'down' | 'left' | 'right';
  wrapperClassName?: string;
}

export function ImageReveal({
  revealDirection = 'up',
  wrapperClassName = '',
  ...props
}: ImageRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const getTransformClass = () => {
    if (!isVisible || !isLoaded) {
      switch (revealDirection) {
        case 'up':
          return 'translate-y-8';
        case 'down':
          return '-translate-y-8';
        case 'left':
          return 'translate-x-8';
        case 'right':
          return '-translate-x-8';
        default:
          return 'translate-y-8';
      }
    }
    return 'translate-y-0 translate-x-0';
  };

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${wrapperClassName}`}
    >
      <div
        className={`transition-all duration-1000 ease-out ${getTransformClass()} ${
          isVisible && isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          {...props}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}
