import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';

export const metadata = {
  title: 'About us | Flixen™',
  description: 'Discover Flixen\'s mission, vision, and the passionate team driving our commitment to cinematic storytelling and client-focused creativity.',
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-dark" />

        <Container className="relative z-10">
          <div className="text-center">
            <span className="text-body text-gray-light mb-4 block">About us</span>
            <h1 className="text-hero animate-fade-in">
              Crafting stories that inspire
            </h1>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="text-subheading mb-8 animate-slide-up">
              We're a team of passionate filmmakers, creators, and storytellers dedicated to bringing your vision to life through the power of video.
            </p>
            <p className="text-body mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
              Founded with a mission to elevate brand storytelling, Flixen™ combines technical expertise with creative vision to produce cinematic content that captivates and converts.
            </p>
            <p className="text-body animate-slide-up" style={{ animationDelay: '200ms' }}>
              From concept to final cut, we work closely with our clients to ensure every frame tells their unique story with authenticity and impact.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
