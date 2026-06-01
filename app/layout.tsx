import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mouldy Eye | Mycelium Awakening',
  description: 'Discover the hidden network beneath our feet. Education, art, and rituals of the mycelial web.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
