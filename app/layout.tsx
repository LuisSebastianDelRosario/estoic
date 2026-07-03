import type { Metadata } from "next";
import { Inter, Noto_Serif, Libertinus_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  style: ["normal", "italic"],
});

const libertinusSerif = Libertinus_Serif({
  subsets: ["latin"],
  variable: "--font-libertinus-serif",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "eStoic",
  description: "Open source wisdom, built on stoicism",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${notoSerif.variable} ${libertinusSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}