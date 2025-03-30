import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { NavbarMolecule } from "@/components/molecules/Navbar.molecule";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Study Tracker",
  description: "Dein Studium im Überblick",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarMolecule />
        {children}
      </body>
    </html>
  );
};

// eslint-disable-next-line import/no-default-export
export default RootLayout;
