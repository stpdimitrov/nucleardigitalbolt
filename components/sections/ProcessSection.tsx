'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/ui/FadeIn';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into your brand, goals, and target audience to craft the perfect creative strategy.',
  },
  {
    number: '02',
    title: 'Creative Development',
    description: 'Our team develops concepts, storyboards, and visual treatments that bring your story to life.',
  },
  {
    number: '03',
    title: 'Production',
    description: 'Lights, camera, action! We execute with precision, capturing stunning footage with cinematic quality.',
  },
  {
    number: '04',
    title: 'Post-Production',
    description: 'Edit, grade, sound design, and polish. We refine every frame until it\'s perfect.',
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 desktop:py-32 bg-gray-dark/20">
      <Container>
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-body text-gray-light mb-4 block">Process</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-heading">How we work</h2>
          </FadeIn>
        </div>

        <div className="grid desktop:grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={0.2 + (i * 0.1)}>
              <div className="relative">
                <span className="text-hero text-primary-yellow/20 absolute -top-4 -left-2">
                  {step.number}
                </span>
                <div className="relative pt-12">
                  <h3 className="text-subheading mb-3">{step.title}</h3>
                  <p className="text-body text-gray-light">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
