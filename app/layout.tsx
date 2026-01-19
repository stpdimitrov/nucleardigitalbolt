import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

export const metadata: Metadata = {
  title: 'Flixen™ | Video Production Agency',
  description: 'A modern video production agency built for filmmakers, studios, and creators. Flixen™ helps showcase projects, present services, and build strong client connections effortlessly.',
  icons: {
    icon: 'https://framerusercontent.com/images/pA0vWj700T24Z9NAPMM9UZPHTic.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
