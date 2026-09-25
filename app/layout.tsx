import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TurkHub",
  description:
    "Markaziy Osiyo va turkiy dunyo yangiliklari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}