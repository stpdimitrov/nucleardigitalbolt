import React from 'react';

interface LoadingSkeletonProps {
  type?: 'card' | 'text' | 'image' | 'project' | 'blog';
}

export function LoadingSkeleton({ type = 'card' }: LoadingSkeletonProps) {
  if (type === 'project' || type === 'card') {
    return (
      <div className="bg-gray-dark rounded-xl overflow-hidden animate-pulse">
        <div className="aspect-video bg-gray-medium" />
        <div className="p-6 space-y-3">
          <div className="h-4 bg-gray-medium rounded w-1/4" />
          <div className="h-6 bg-gray-medium rounded w-3/4" />
          <div className="h-4 bg-gray-medium rounded w-full" />
          <div className="h-4 bg-gray-medium rounded w-5/6" />
        </div>
      </div>
    );
  }

  if (type === 'blog') {
    return (
      <div className="bg-gray-dark rounded-xl overflow-hidden animate-pulse">
        <div className="aspect-[3/2] bg-gray-medium" />
        <div className="p-6 space-y-3">
          <div className="h-4 bg-gray-medium rounded w-1/3" />
          <div className="h-6 bg-gray-medium rounded w-full" />
          <div className="h-4 bg-gray-medium rounded w-2/3" />
        </div>
      </div>
    );
  }

  if (type === 'image') {
    return <div className="w-full h-full bg-gray-medium animate-pulse rounded-xl" />;
  }

  if (type === 'text') {
    return (
      <div className="space-y-2 animate-pulse">
        <div className="h-4 bg-gray-medium rounded w-full" />
        <div className="h-4 bg-gray-medium rounded w-5/6" />
        <div className="h-4 bg-gray-medium rounded w-4/6" />
      </div>
    );
  }

  return <div className="w-full h-full bg-gray-medium animate-pulse rounded" />;
}
