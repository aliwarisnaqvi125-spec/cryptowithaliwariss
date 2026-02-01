
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Ticker from '@/components/Ticker';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crypto With Aliwaris | Buy, Sell & Trade Bitcoin, Ethereum & More',
  description: 'The world\'s fastest growing crypto app. Join 100m+ users buying and selling 350+ cryptocurrencies at true cost.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Ticker />
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
