import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { getBlogBySlug, blogs } from '@/lib/data';

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: 'Blog Not Found | Flixen™',
    };
  }

  return {
    title: `${blog.title} | Flixen™`,
    description: blog.description,
  };
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-black text-white pt-32">
      {/* Hero Section */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-primary-yellow text-black text-menu rounded-full">
                {blog.tag}
              </span>
              <span className="text-body text-gray-light">{blog.readTime}</span>
            </div>

            <h1 className="text-hero mb-6 animate-fade-in">
              {blog.title}
            </h1>

            <div className="flex items-center gap-4 text-body text-gray-light mb-12">
              <span>{blog.publishedDate}</span>
            </div>

            <div className="aspect-video bg-gray-dark rounded-xl overflow-hidden mb-12 relative">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1240px) 100vw, 1240px"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 desktop:py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="text-body leading-relaxed whitespace-pre-wrap">
                {blog.content}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* More Articles */}
      <section className="py-24 desktop:py-32 bg-gray-dark/20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-heading">More Articles</h2>
          </div>
          <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-8">
            {blogs.filter(b => b.slug !== blog.slug).slice(0, 3).map((b) => (
              <a
                key={b.slug}
                href={`/blogs/${b.slug}`}
                className="group bg-gray-dark rounded-xl overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="aspect-video bg-gray-medium relative">
                  <Image
                    src={b.coverImage}
                    alt={b.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 810px) 100vw, (max-width: 1240px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-body text-gray-mid mb-2">{b.publishedDate}</p>
                  <h3 className="text-body font-semibold group-hover:text-primary-yellow transition-colors">
                    {b.title}
                  </h3>
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
              Ready to elevate your brand?
            </h2>
            <p className="text-body mb-8">
              Let's create cinematic content that tells your story and captivates your audience.
            </p>
            <Button href="/contact-us" size="large">
              Start your project
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
