import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'JMW CLEANING SERVICE - Professioneel Schoonmaakbedrijf',
  description: 'Jong en dynamisch schoonmaakbedrijf dat werkt met projecten.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <a
          href="https://siev.nl/"
          target="_blank"
          rel="noopener noreferrer"
          className="siev-badge"
          aria-label="SIEV keurmerk - opent in nieuw venster"
        >
          <img src="/siev-badge.jpeg" alt="SIEV keurmerk" />
        </a>
      </body>
    </html>
  );
}
