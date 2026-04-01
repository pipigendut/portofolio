import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://pipigendut.space'),
  title: 'Akbar Maulana | Fullstack Developer',
  description: 'Fullstack Developer with 7+ years of experience specializing in scalable web systems, backend services, and API-driven architectures. Expert in Ruby on Rails, Golang, React, and modern web technologies.',
  keywords: ['Fullstack Developer', 'Ruby on Rails', 'Golang', 'React', 'Next.js', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Akbar Maulana' }],
  openGraph: {
    title: 'Akbar Maulana | Fullstack Developer',
    description: 'Fullstack Developer with 7+ years of experience in scalable web systems and modern technologies.',
    url: 'https://pipigendut.space',
    siteName: 'Akbar Maulana Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akbar Maulana | Fullstack Developer',
    description: 'Fullstack Developer with 7+ years of experience in scalable web systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
