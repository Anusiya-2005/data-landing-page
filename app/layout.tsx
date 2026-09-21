import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import Icons from '@/components/Icons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  title: 'PI-BI Technologies | Data services for AI',
  description: 'Data services for the AI models you are building',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Icons />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
