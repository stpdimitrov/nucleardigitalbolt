import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export function TestimonialCard({ quote, author, role, company, image }: TestimonialCardProps) {
  return (
    <div className="bg-gray-dark rounded-xl p-8 flex flex-col h-full">
      <p className="text-body mb-6 flex-grow">"{quote}"</p>
      <div className="flex items-center gap-4">
        {image && (
          <div className="w-12 h-12 rounded-full bg-gray-medium overflow-hidden relative">
            <Image
              src={image}
              alt={author}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
        )}
        <div>
          <p className="text-body font-semibold">{author}</p>
          <p className="text-body text-gray-light">{role} at {company}</p>
        </div>
      </div>
    </div>
  );
}
