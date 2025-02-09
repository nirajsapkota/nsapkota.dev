import "./globals.css";
import { Inter } from "next/font/google";
import type React from "react";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nsapkota.dev",
  description: "My personal digital ecosystem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
