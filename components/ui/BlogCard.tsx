import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Blog } from '@/lib/data';

interface BlogCardProps {
  blog: Blog;
  priority?: boolean;
}

export function BlogCard({ blog, priority = false }: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group bg-gray-dark rounded-xl overflow-hidden hover:scale-105 transition-transform block"
    >
      <div className="aspect-video bg-gray-medium relative overflow-hidden">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 810px) 100vw, (max-width: 1240px) 50vw, 33vw"
          priority={priority}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-gray-medium text-white text-sm rounded-full">
            {blog.tag}
          </span>
          <span className="text-body text-gray-mid">{blog.readTime}</span>
        </div>
        <p className="text-body text-gray-mid mb-2">{blog.publishedDate}</p>
        <h3 className="text-body font-semibold group-hover:text-primary-yellow transition-colors line-clamp-2">
          {blog.title}
        </h3>
      </div>
    </Link>
  );
}
