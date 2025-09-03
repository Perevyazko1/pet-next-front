import type { Metadata } from "next";
import "./globals.css";
import {ceraPro} from "@/shared/config/fonts";



export const metadata: Metadata = {
  title: "Лапки",
  description: "Лапки",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en">
      <body
        className={ceraPro.className}
      >
        {children}
      </body>
    </html>
  );
}
