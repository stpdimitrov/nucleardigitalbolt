import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata = {
  title: 'About Us | Flixen™',
  description: 'Learn about our passion for cinematic storytelling and our team of creative professionals.',
};

const values = [
  {
    title: 'Cinematic Excellence',
    description: 'We obsess over every frame, every transition, every detail to create visuals that captivate.',
  },
  {
    title: 'Authentic Stories',
    description: 'We dig deep to uncover the real story behind your brand and tell it with honesty and heart.',
  },
  {
    title: 'Collaborative Spirit',
    description: 'Your vision is our mission. We work hand-in-hand to bring your ideas to life.',
  },
  {
    title: 'Innovation First',
    description: 'We stay ahead of trends, techniques, and technology to deliver cutting-edge content.',
  },
];

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & Creative Director',
    bio: '15 years crafting visual stories for global brands',
  },
  {
    name: 'Jordan Lee',
    role: 'Lead Cinematographer',
    bio: 'Award-winning DP with a passion for natural light',
  },
  {
    name: 'Sam Chen',
    role: 'Senior Editor',
    bio: 'Master of pacing, rhythm, and emotional resonance',
  },
  {
    name: 'Maya Patel',
    role: 'Producer',
    bio: 'Orchestrating seamless productions from concept to delivery',
  },
];

export default function AboutUsPage() {
  return (
    <div className="bg-black text-white pt-32">
      {/* Hero Section */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <span className="text-body text-gray-light mb-4 block">About Us</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-hero mb-6">
                We are storytellers with cameras
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-subheading text-gray-light">
                A collective of filmmakers, creatives, and dreamers united by one mission: to create cinematic content that moves people.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-24 desktop:py-32 bg-gray-dark/20">
        <Container>
          <div className="grid desktop:grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 gap-16 items-center">
            <FadeIn>
              <div className="aspect-[4/3] bg-gray-medium rounded-xl overflow-hidden relative">
                <Image
                  src="https://framerusercontent.com/images/PpANcKLCyaQLjJ5sSD3eMrs29o.png"
                  alt="Our team in action"
                  fill
                  className="object-cover"
                  sizes="(max-width: 810px) 100vw, 50vw"
                />
              </div>
            </FadeIn>

            <div>
              <FadeIn delay={0.1}>
                <span className="text-body text-gray-light mb-4 block">Our Story</span>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="text-heading mb-6">
                  Born from a love of film and storytelling
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="space-y-4 text-body">
                  <p>
                    Flixen was founded in 2015 by a group of filmmakers who believed that every brand has a story worth telling cinematically. We started in a small studio with one camera and a big dream.
                  </p>
                  <p>
                    Today, we've grown into a full-service production house, but our core mission remains the same: create visuals that captivate, stories that resonate, and content that drives real results for our clients.
                  </p>
                  <p>
                    We've worked with startups, Fortune 500 companies, and everything in between. Each project teaches us something new, and we bring those lessons to every frame we shoot.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-body text-gray-light mb-4 block">Our Values</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading">What drives us</h2>
            </FadeIn>
          </div>

          <div className="grid desktop:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1 gap-8">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={0.2 + (i * 0.1)}>
                <div className="bg-gray-dark rounded-xl p-8">
                  <h3 className="text-subheading mb-3">{value.title}</h3>
                  <p className="text-body text-gray-light">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-24 desktop:py-32 bg-gray-dark/20">
        <Container>
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-body text-gray-light mb-4 block">Team</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading">Meet the creators</h2>
            </FadeIn>
          </div>

          <div className="grid desktop:grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 gap-8">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={0.2 + (i * 0.1)}>
                <div className="text-center">
                  <div className="aspect-square bg-gray-medium rounded-xl mb-4 overflow-hidden relative">
                    <div className="w-full h-full flex items-center justify-center text-gray-light">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h3 className="text-body font-semibold mb-1">{member.name}</h3>
                  <p className="text-body text-primary-yellow mb-2">{member.role}</p>
                  <p className="text-body text-gray-light">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-heading mb-6">
                Let's create together
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-body mb-8">
                Ready to tell your story with cinematic excellence? Get in touch and let's start crafting something extraordinary.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Button href="/contact-us" size="large">
                Start a project
              </Button>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
