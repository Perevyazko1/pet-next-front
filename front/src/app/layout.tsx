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
  title: {
    default: texts.metaTitle,
    template: `%s | Приют Лапки`,
  },
  description: texts.metaDescription,
  metadataBase: new URL('https://paws-pets.ru'),
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://paws-pets.ru',
    siteName: 'Приют Лапки',
    images: [{ url: '/mockup-site.png', width: 1200, height: 630, alt: texts.metaTitle }],
    title: texts.metaTitle,
    description: texts.metaDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: texts.metaTitle,
    description: texts.metaDescription,
    images: ['/mockup-site.png'],
  },
  keywords: texts.metaKeywords,
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://paws-pets.ru',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={ceraPro.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
