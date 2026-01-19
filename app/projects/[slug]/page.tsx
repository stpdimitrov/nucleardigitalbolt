import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { getProjectBySlug, projects } from '@/lib/data';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found | Flixen™',
    };
  }

  return {
    title: `${project.title} - ${project.client} | Flixen™`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-black text-white pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <Container className="relative z-10 pb-16">
          <div className="max-w-4xl">
            <span className="text-body text-gray-light mb-4 block">{project.client}</span>
            <h1 className="text-hero mb-6 animate-fade-in">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-body text-gray-light">
              <div>
                <span className="text-white font-medium">Service:</span> {project.serviceProvided}
              </div>
              <div>
                <span className="text-white font-medium">Date:</span> {project.date}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Project Overview */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="grid desktop:grid-cols-3 tablet:grid-cols-1 mobile:grid-cols-1 gap-12">
            <div>
              <h3 className="text-menu text-white mb-4">Overview</h3>
            </div>
            <div className="desktop:col-span-2">
              <p className="text-subheading mb-8">{project.description}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenge, Solution, Results */}
      {project.challenge && (
        <section className="py-24 desktop:py-32 bg-gray-dark/20">
          <Container>
            <div className="grid desktop:grid-cols-3 tablet:grid-cols-1 mobile:grid-cols-1 gap-12">
              {/* Challenge */}
              <div>
                <h3 className="text-subheading mb-4">The Challenge</h3>
                <p className="text-body">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-subheading mb-4">Our Solution</h3>
                <p className="text-body">{project.solution}</p>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-subheading mb-4">The Results</h3>
                <ul className="space-y-3">
                  {project.results?.map((result, i) => (
                    <li key={i} className="text-body flex items-start gap-3">
                      <span className="text-primary-yellow mt-1">•</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Video Section */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="aspect-video bg-gray-dark rounded-xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-body text-gray-light">Video Player Component</span>
            </div>
          </div>
        </Container>
      </section>

      {/* More Projects */}
      <section className="py-24 desktop:py-32 bg-gray-dark/20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-heading">More Projects</h2>
          </div>
          <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-8">
            {projects.filter(p => p.slug !== project.slug).slice(0, 3).map((p) => (
              <a
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group bg-gray-dark rounded-xl overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="aspect-video bg-gray-medium relative">
                  <Image
                    src={p.coverImage}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 810px) 100vw, (max-width: 1240px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-body font-semibold mb-2 group-hover:text-primary-yellow transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-body text-gray-light">{p.client}</p>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-heading mb-6">
              Ready to create your story?
            </h2>
            <p className="text-body mb-8">
              Let's discuss how we can bring your vision to life with cinematic storytelling.
            </p>
            <Button href="/contact-us" size="large">
              Get in touch
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
