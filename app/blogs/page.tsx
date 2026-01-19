import React from 'react';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/ui/FadeIn';
import { BlogCard } from '@/components/ui/BlogCard';
import { blogs } from '@/lib/data';

export const metadata = {
  title: 'Blogs | Flixen™',
  description: 'Insights, tips, and stories about video production and creative storytelling.',
};

export default function BlogsPage() {
  return (
    <div className="bg-black text-white pt-32">
      {/* Hero Section */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-body text-gray-light mb-4 block">Blogs</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-hero mb-6">
                Insights & Stories
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-subheading text-gray-light max-w-3xl mx-auto">
                Tips, insights, and behind-the-scenes looks at our creative process
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-8">
            {blogs.map((blog, i) => (
              <FadeIn key={blog.slug} delay={i * 0.05}>
                <BlogCard blog={blog} priority={i < 3} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
