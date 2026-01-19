import React from 'react';
import { Container } from '@/components/layout/Container';

export const metadata = {
  title: 'Blogs | Flixen™',
  description: 'Insights, tips, and stories about video production and creative storytelling.',
};

const blogs = [
  { slug: 'why-cinematic-storytelling-matters-in-modern-video-production', title: 'Why Cinematic Storytelling Matters in Modern Video Production', date: '2024-01-15' },
  { slug: 'how-visual-storytelling-transforms-brands-through-creative-direction', title: 'How Visual Storytelling Transforms Brands Through Creative Direction', date: '2024-01-10' },
  { slug: 'behind-the-scenes-of-crafting-cinematic-visual-experiences', title: 'Behind the Scenes of Crafting Cinematic Visual Experiences', date: '2024-01-05' },
];

export default function BlogsPage() {
  return (
    <div className="bg-black text-white pt-32">
      {/* Hero Section */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="text-center mb-16">
            <span className="text-body text-gray-light mb-4 block">Blogs</span>
            <h1 className="text-hero mb-6 animate-fade-in">
              Insights & Stories
            </h1>
            <p className="text-subheading text-gray-light max-w-3xl mx-auto animate-slide-up">
              Tips, insights, and behind-the-scenes looks at our creative process
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-8">
            {blogs.map((blog, i) => (
              <a
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group bg-gray-dark rounded-xl overflow-hidden hover:scale-105 transition-transform animate-slide-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="aspect-video bg-gray-medium" />
                <div className="p-6">
                  <p className="text-body text-gray-mid mb-2">{blog.date}</p>
                  <h3 className="text-body font-semibold group-hover:text-primary-yellow transition-colors">
                    {blog.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
