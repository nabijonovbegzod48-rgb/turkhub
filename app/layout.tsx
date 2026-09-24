
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TurkHub — Turkiy dunyo yangiliklari",
  description:
    "Markaziy Osiyo va turkiy dunyo yangiliklari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
