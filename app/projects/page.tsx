import React from 'react';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/lib/data';

export const metadata = {
  title: 'Projects | Flixen™',
  description: 'Explore our portfolio of cinematic video projects and brand stories.',
};

export default function ProjectsPage() {
  return (
    <div className="bg-black text-white pt-32">
      {/* Hero Section */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-body text-gray-light mb-4 block">Projects</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-hero mb-6">
                Our work
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-subheading text-gray-light max-w-3xl mx-auto">
                A showcase of our finest cinematic creations
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="grid desktop:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1 gap-8">
            {projects.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.05}>
                <ProjectCard project={project} priority={i < 2} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
