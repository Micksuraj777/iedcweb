import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/utils/font";

export const metadata: Metadata = {
  title: "IEDC CCEIJK - Beyond Boundaries",
  description: "IEDC CCEIJK - Beyond Boundaries, website for the IEDC CCEIJK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/logo.webp" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
