import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { Video, Palette, Sparkles, Film, Layers, Zap } from 'lucide-react';

export const metadata = {
  title: 'Services | Flixen™',
  description: 'Comprehensive video production services from concept to delivery.',
};

const services = [
  {
    icon: Video,
    title: 'Video Production',
    description: 'Full-service video production from pre-production planning through final delivery. We handle every aspect of bringing your vision to life.',
    features: ['Concept Development', 'Scriptwriting', 'Location Scouting', 'Talent Casting'],
  },
  {
    icon: Palette,
    title: 'Creative Direction',
    description: 'Strategic creative leadership that ensures every visual decision aligns with your brand and resonates with your audience.',
    features: ['Brand Strategy', 'Visual Identity', 'Art Direction', 'Mood Boarding'],
  },
  {
    icon: Film,
    title: 'Cinematography',
    description: 'Stunning cinematography that captures attention and tells your story with cinematic quality and visual excellence.',
    features: ['Camera Operation', 'Lighting Design', 'Shot Composition', 'Equipment Rental'],
  },
  {
    icon: Layers,
    title: 'Post-Production',
    description: 'Expert editing, color grading, and finishing that polishes your content to perfection and delivers maximum impact.',
    features: ['Video Editing', 'Color Grading', 'Sound Design', 'Motion Graphics'],
  },
  {
    icon: Sparkles,
    title: 'Animation & VFX',
    description: 'Motion graphics, visual effects, and animation that add that extra layer of polish and professionalism to your content.',
    features: ['2D/3D Animation', 'Visual Effects', 'Motion Graphics', 'Title Design'],
  },
  {
    icon: Zap,
    title: 'Brand Films',
    description: 'Cinematic brand stories that connect emotionally with your audience and elevate your brand perception.',
    features: ['Brand Storytelling', 'Documentary Style', 'Testimonials', 'Product Launches'],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black text-white pt-32">
      {/* Hero Section */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-body text-gray-light mb-4 block">Services</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-hero mb-6">
                Complete video production solutions
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-subheading text-gray-light max-w-3xl mx-auto">
                From initial concept to final delivery, we provide end-to-end video production services that bring your vision to life with cinematic excellence.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="grid desktop:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1 gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <div className="bg-gray-dark rounded-xl p-8 hover:bg-gray-medium transition-all hover:scale-105 group">
                  <div className="w-12 h-12 rounded-full bg-primary-yellow/10 flex items-center justify-center mb-6 group-hover:bg-primary-yellow/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary-yellow" />
                  </div>
                  <h3 className="text-subheading mb-4">{service.title}</h3>
                  <p className="text-body mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-body text-gray-light flex items-center gap-2">
                        <span className="text-primary-yellow">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-24 desktop:py-32 bg-gray-dark/20">
        <Container>
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-body text-gray-light mb-4 block">How It Works</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading">Our streamlined process</h2>
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Discovery Call',
                  description: 'We start with a conversation to understand your goals, audience, and vision.',
                },
                {
                  step: '02',
                  title: 'Creative Proposal',
                  description: 'We develop a tailored creative strategy and detailed production proposal.',
                },
                {
                  step: '03',
                  title: 'Pre-Production',
                  description: 'Planning, scripting, storyboarding, and logistics are locked in.',
                },
                {
                  step: '04',
                  title: 'Production',
                  description: 'Lights, camera, action! We bring your story to life on set or on location.',
                },
                {
                  step: '05',
                  title: 'Post-Production',
                  description: 'Editing, grading, sound design, and final touches make it perfect.',
                },
                {
                  step: '06',
                  title: 'Delivery',
                  description: 'Your final content, optimized and ready to captivate your audience.',
                },
              ].map((item, i) => (
                <FadeIn key={item.step} delay={i * 0.1}>
                  <div className="flex gap-6 items-start">
                    <span className="text-subheading text-primary-yellow min-w-[60px]">{item.step}</span>
                    <div>
                      <h3 className="text-subheading mb-2">{item.title}</h3>
                      <p className="text-body text-gray-light">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-heading mb-6">
                Ready to get started?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-body mb-8">
                Let's discuss your project and explore how our services can help you achieve your goals.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Button href="/contact-us" size="large">
                Contact us
              </Button>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
