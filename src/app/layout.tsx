import type { ReactNode } from "react";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { NavbarMolecule } from "@/components/molecules/Navbar.molecule";
import { Toaster } from "@/components/ui/sonner";
import { LanguageContextWrapper } from "@/context";

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
  children: ReactNode;
}>) => {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageContextWrapper>
          <Suspense>
            <div className="flex flex-col gap-y-12">
              <NavbarMolecule />
              <NuqsAdapter>{children}</NuqsAdapter>
              <Toaster />
            </div>
          </Suspense>
        </LanguageContextWrapper>
      </body>
    </html>
  );
};

// eslint-disable-next-line import/no-default-export
export default RootLayout;
