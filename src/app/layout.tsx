import type { Metadata } from 'next';
import './globals.css';
import { ceraPro } from '@/shared/config/fonts';
import { Providers } from '@/app/providers';
import { texts } from '@/shared/constants/texts';

// export const metadata: Metadata = {
//   title: 'Лапки',
//   description: 'Лапки',
// };

export const metadata: Metadata = {
  title: texts.metaTitle,
  description: texts.metaDescription,
  metadataBase: new URL('https://paws-pets.ru/'),
  openGraph: {
    images: ['/mockup-site.png'],
    title: texts.metaTitle,
    description: texts.metaDescription,
  },
  keywords: texts.metaKeywords,
  robots: 'index, follow',

  alternates: {
    canonical: 'https://paws-pets.ru/',
  },
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
