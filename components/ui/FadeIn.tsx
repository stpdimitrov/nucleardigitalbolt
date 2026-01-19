'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/lib/hooks/useScrollReveal';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = ''
}: FadeInProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const directionOffset = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
    none: {}
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0.001,
        ...directionOffset[direction]
      }}
      animate={isVisible ? {
        opacity: 1,
        x: 0,
        y: 0
      } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
