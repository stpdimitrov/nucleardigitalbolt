import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group bg-gray-dark rounded-xl overflow-hidden hover:scale-105 transition-transform block"
    >
      <div className="aspect-video bg-gray-medium relative overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 810px) 100vw, (max-width: 1240px) 50vw, 33vw"
          priority={priority}
        />
      </div>
      <div className="p-8">
        <h3 className="text-subheading mb-2 group-hover:text-primary-yellow transition-colors">
          {project.title}
        </h3>
        <p className="text-body text-gray-light mb-4">{project.client}</p>
        <p className="text-body text-gray-mid">{project.serviceProvided}</p>
      </div>
    </Link>
  );
}
