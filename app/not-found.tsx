import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-32">
      <Container>
        <div className="text-center">
          <h1 className="text-hero mb-6">404</h1>
          <h2 className="text-heading mb-4">Page not found</h2>
          <p className="text-body mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Button href="/">
            Back to home
          </Button>
        </div>
      </Container>
    </div>
  );
}
