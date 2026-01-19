'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { AnimatedText } from '@/components/ui/AnimatedText';

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://framerusercontent.com/images/PpANcKLCyaQLjJ5sSD3eMrs29o.png"
            alt="Silhouette of a person with a camera walking towards vibrant orange light under dim blue streetlights on a misty road at night"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Hero Content */}
        <Container className="relative z-10 py-32">
          <div className="flex flex-col items-center justify-center text-center">
            <AnimatedText
              text="Create cinematic visuals that captivate every audience"
              className="text-hero mb-12"
            />

            {/* Scroll Down Indicator */}
            <FadeIn delay={1.5}>
              <div className="flex flex-col items-center gap-2 mt-16">
                <p className="text-body">Scroll down</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
                  <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-12">
            {/* Section Tag */}
            <FadeIn>
              <div>
                <span className="text-body text-gray-light">Introduction</span>
              </div>
            </FadeIn>

            {/* Text Content */}
            <div className="desktop:col-span-2 tablet:col-span-1 flex flex-col gap-8">
              <FadeIn delay={0.1}>
                <h4 className="text-subheading">
                  We craft cinematic visuals that inspire audiences, elevate storytelling, and empower brands to create meaningful, lasting impressions through seamless video production experiences.
                </h4>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Button href="/contact-us" size="large">
                  Contact us
                </Button>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Client Logos Section */}
      <section className="py-24 desktop:py-32 bg-gray-dark/20">
        <Container>
          <div className="grid desktop:grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-gray-dark rounded-lg p-12 flex items-center justify-center hover:bg-gray-medium transition-colors">
                  <div className="text-gray-light text-center">Client Logo {i}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-body text-gray-light mb-4 block">Services</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading">What we do best</h2>
            </FadeIn>
          </div>

          <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-8">
            {['Video Production', 'Creative Direction', 'Post-Production'].map((service, i) => (
              <FadeIn key={service} delay={0.2 + (i * 0.1)}>
                <div className="bg-gray-dark rounded-xl p-8 hover:bg-gray-medium transition-all hover:scale-105">
                  <h3 className="text-subheading mb-4">{service}</h3>
                  <p className="text-body">
                    Professional video services that bring your vision to life with cinematic quality and attention to detail.
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6}>
            <div className="text-center mt-12">
              <Button href="/services">
                View all services
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 desktop:py-32 bg-primary-yellow text-black">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-heading text-black mb-6">
                Ready to create something amazing?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-body text-black/80 mb-8">
                Let's discuss your next project and bring your vision to life with our expert video production services.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Button href="/contact-us" variant="secondary" size="large">
                Get in touch
              </Button>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
