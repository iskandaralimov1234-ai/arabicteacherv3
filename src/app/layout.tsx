import type { Metadata } from "next";
import { Outfit, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const notofont = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LingaQuest - Learn Arabic",
  description: "Gamified Madina Arabic Curriculum Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${notofont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
