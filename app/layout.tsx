import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Icons from '@/components/Icons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
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
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Icons />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
