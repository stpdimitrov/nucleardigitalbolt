'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { TestimonialCard } from '@/components/ui/TestimonialCard';

const testimonials = [
  {
    quote: 'Flixen transformed our brand story into a cinematic masterpiece. The attention to detail and creative vision exceeded all expectations.',
    author: 'Sarah Chen',
    role: 'Marketing Director',
    company: 'TechVision Inc.',
  },
  {
    quote: 'Working with Flixen was seamless. They captured the essence of our product in a way that resonated with our audience and drove real results.',
    author: 'Michael Torres',
    role: 'CEO',
    company: 'Innovate Labs',
  },
  {
    quote: 'The team at Flixen brought our vision to life with stunning visuals and compelling storytelling. Truly world-class production quality.',
    author: 'Emily Watson',
    role: 'Brand Manager',
    company: 'Luxe Collective',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 desktop:py-32">
      <Container>
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-body text-gray-light mb-4 block">Testimonials</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-heading">What our clients say</h2>
          </FadeIn>
        </div>

        <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-8">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={testimonial.author} delay={0.2 + (i * 0.1)}>
              <TestimonialCard {...testimonial} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
