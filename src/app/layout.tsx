import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import AppNavbar from '@/components/AppNavbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Wildline Detailing - Myjnia, Detailing Samochodów Rzeszów',
  description:
    'Oferujemy kompleksowe usługi mycia, polerowania i zabezpieczania lakieru, dbając o każdy detal Twojego pojazdu. Sprawdź, jak możemy przywrócić blask i ochronić Twój samochód. Zaufaj ekspertom w dziedzinie detailingu samochodowego!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="dark scroll-smooth">
      <body className="overflow-x-hidden w-screen block">
        <Providers>
          <AppNavbar></AppNavbar>
          {children}
          <Footer></Footer>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
