'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/lib/data';

export function FeaturedProjectsSection() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-24 desktop:py-32">
      <Container>
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-body text-gray-light mb-4 block">Portfolio</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-heading">Featured work</h2>
          </FadeIn>
        </div>

        <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-8 mb-12">
          {featuredProjects.map((project, i) => (
            <FadeIn key={project.slug} delay={0.2 + (i * 0.1)}>
              <ProjectCard project={project} priority={i === 0} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="text-center">
            <Button href="/projects" size="large">
              View all projects
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
