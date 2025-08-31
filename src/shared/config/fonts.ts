
import localFont from "next/font/local";

export const ceraPro = localFont({
  src: [
    {
      path: "./fonts/CeraPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CeraPro-Bold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/CeraPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cera-pro",
});
export const airfool = localFont({
  src: [
    {
      path: "./fonts/Airfool.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Airfool.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Airfool.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-airfool",
});