import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/lib/ThemeContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'VERMANICO™ - Premium Organic Vermicompost & Agricultural Products',
  description: 'VERMANICO produces premium organic vermicompost, eggshell powder, and fresh mushrooms from our in-house facilities. Available in 1kg, 5kg, 10kg packages, and bulk orders.',
  keywords: 'vermicompost, organic fertilizer, eggshell powder, mushrooms, agricultural products, organic farming, India',
  authors: [{ name: 'VERMANICO' }],
  openGraph: {
    title: 'VERMANICO™ - Premium Organic Vermicompost',
    description: 'Premium organic agricultural products from our in-house facilities',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
