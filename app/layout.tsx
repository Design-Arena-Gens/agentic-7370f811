import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ODIGO-RCS | Sistema de Certificación Digital",
  description:
    "Plataforma ODIGO-RCS para certificación, preservación digital y monitoreo en tiempo real.",
  metadataBase: new URL("https://agentic-7370f811.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
