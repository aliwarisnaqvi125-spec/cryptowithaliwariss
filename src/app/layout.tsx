
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Ticker from '@/components/Ticker';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crypto With Aliwaris | Buy, Sell & Trade Bitcoin, Ethereum & More',
  description: 'The world\'s fastest growing crypto app. Join 100m+ users buying and selling 350+ cryptocurrencies at true cost.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: '#061121', color: '#ffffff', margin: 0 }}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9660479171050292"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

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
