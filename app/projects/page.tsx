import React from 'react';
import { Container } from '@/components/layout/Container';

export const metadata = {
  title: 'Projects | Flixen™',
  description: 'Explore our portfolio of cinematic video projects and brand stories.',
};

const projects = [
  { slug: 'auralis', title: 'Auralis', client: 'Auralis Inc.' },
  { slug: 'echo-frames', title: 'Echo Frames', client: 'Echo Corp.' },
  { slug: 'lumen-brew', title: 'Lumen Brew', client: 'Lumen Coffee' },
  { slug: 'noir-threads', title: 'Noir Threads', client: 'Noir Fashion' },
  { slug: 'pulse-drive', title: 'Pulse Drive', client: 'Pulse Auto' },
  { slug: 'terra-glow', title: 'Terra Glow', client: 'Terra Beauty' },
  { slug: 'waveline', title: 'Waveline', client: 'Waveline Tech' },
];

export default function ProjectsPage() {
  return (
    <div className="bg-black text-white pt-32">
      {/* Hero Section */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="text-center mb-16">
            <span className="text-body text-gray-light mb-4 block">Projects</span>
            <h1 className="text-hero mb-6 animate-fade-in">
              Our work
            </h1>
            <p className="text-subheading text-gray-light max-w-3xl mx-auto animate-slide-up">
              A showcase of our finest cinematic creations
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="grid desktop:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1 gap-8">
            {projects.map((project, i) => (
              <a
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group bg-gray-dark rounded-xl overflow-hidden hover:scale-105 transition-transform animate-slide-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="aspect-video bg-gray-medium" />
                <div className="p-8">
                  <h3 className="text-subheading mb-2 group-hover:text-primary-yellow transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-body text-gray-light">{project.client}</p>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
