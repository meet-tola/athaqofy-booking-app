import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "./globals.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Athaqofy",
  description: "Hajj & Umrah Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Toaster />
        <main className="font-normal">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
