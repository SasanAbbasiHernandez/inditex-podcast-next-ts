import type { Metadata } from "next";

import { Header } from "../components/Header";
import { AppProvider } from '@/context/AppProvider';

import "./globals.css";

export const metadata: Metadata = {
  title: "Podcasts",
  description: "Podcasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Header/>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
