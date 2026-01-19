'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

interface Stat {
  number: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { number: 200, suffix: '+', label: 'Projects Completed' },
  { number: 50, suffix: '+', label: 'Happy Clients' },
  { number: 15, suffix: '+', label: 'Awards Won' },
  { number: 100, suffix: 'M+', label: 'Views Generated' },
];

export function StatsSection() {
  return (
    <section className="py-24 desktop:py-32 bg-gray-dark/20">
      <Container>
        <div className="grid desktop:grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-2 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center group cursor-default">
                <h3 className="text-heading text-primary-yellow mb-2 transition-transform duration-300 group-hover:scale-110">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </h3>
                <p className="text-body text-gray-light">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
