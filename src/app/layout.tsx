import type { Metadata } from 'next';
import './globals.css';
import { ceraPro } from '@/shared/config/fonts';
import { Providers } from '@/app/providers';

export const metadata: Metadata = {
  title: 'Лапки',
  description: 'Лапки',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ceraPro.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
