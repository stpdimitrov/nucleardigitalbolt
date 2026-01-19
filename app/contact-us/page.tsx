import React from 'react';
import { Container } from '@/components/layout/Container';

export const metadata = {
  title: 'Contact us | Flixen™',
  description: 'Get in touch with our team to discuss your next video production project.',
};

export default function ContactPage() {
  return (
    <div className="bg-black text-white pt-32">
      {/* Hero Section */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="text-center mb-16">
            <span className="text-body text-gray-light mb-4 block">Contact us</span>
            <h1 className="text-hero mb-6 animate-fade-in">
              Let's work together
            </h1>
            <p className="text-subheading text-gray-light max-w-3xl mx-auto animate-slide-up">
              Ready to bring your vision to life? Get in touch with our team.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 desktop:py-32">
        <Container>
          <div className="max-w-3xl mx-auto bg-gray-dark rounded-xl p-8 desktop:p-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-menu text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-medium rounded-lg px-4 py-3 text-body text-white border border-gray-darker focus:border-primary-yellow focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-menu text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-medium rounded-lg px-4 py-3 text-body text-white border border-gray-darker focus:border-primary-yellow focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-menu text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full bg-gray-medium rounded-lg px-4 py-3 text-body text-white border border-gray-darker focus:border-primary-yellow focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-yellow text-black rounded-full px-8 py-4 text-body font-medium hover:scale-105 transition-transform"
              >
                Send message
              </button>
            </form>
          </div>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="py-24 desktop:py-32 bg-gray-dark/20">
        <Container>
          <div className="grid desktop:grid-cols-3 tablet:grid-cols-3 mobile:grid-cols-1 gap-8 text-center">
            <div>
              <h3 className="text-menu text-white mb-2">Email</h3>
              <p className="text-body text-gray-light">hello@flixen.com</p>
            </div>
            <div>
              <h3 className="text-menu text-white mb-2">Phone</h3>
              <p className="text-body text-gray-light">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-menu text-white mb-2">Location</h3>
              <p className="text-body text-gray-light">Los Angeles, CA</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
