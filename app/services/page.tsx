import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Services | Flixen™',
  description: 'Explore our comprehensive video production services, from creative direction to post-production.',
};

const services = [
  {
    title: 'Video Production',
    description: 'Full-service video production from pre-production planning to on-set execution, delivering cinematic quality content.',
  },
  {
    title: 'Creative Direction',
    description: 'Strategic creative guidance that aligns your brand vision with compelling visual storytelling.',
  },
  {
    title: 'Post-Production',
    description: 'Expert editing, color grading, and sound design to perfect every frame of your content.',
  },
  {
    title: 'Motion Graphics',
    description: 'Dynamic animations and visual effects that enhance your story and engage your audience.',
  },
  {
    title: 'Brand Films',
    description: 'Cinematic brand stories that connect emotionally and leave lasting impressions.',
  },
  {
    title: 'Commercial Production',
    description: 'High-impact commercials designed to capture attention and drive results.',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black text-white pt-32">
      {/* Hero Section */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="text-center mb-16">
            <span className="text-body text-gray-light mb-4 block">Services</span>
            <h1 className="text-hero mb-6 animate-fade-in">
              What we do
            </h1>
            <p className="text-subheading text-gray-light max-w-3xl mx-auto animate-slide-up">
              Comprehensive video production services tailored to bring your vision to life
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-24 desktop:py-32 bg-gray-dark/20">
        <Container>
          <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="bg-gray-dark rounded-xl p-8 hover:bg-gray-medium transition-all hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <h3 className="text-subheading mb-4">{service.title}</h3>
                <p className="text-body">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-heading mb-6">
              Let's create something together
            </h2>
            <p className="text-body mb-8">
              Ready to elevate your brand with cinematic storytelling? Get in touch to discuss your project.
            </p>
            <Button href="/contact-us" size="large">
              Contact us
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
