import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

// Local Font (Roca) using .ttf files
const roca = localFont({
  src: [
    {
      path: "../../public/fonts/Roca Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roca Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roca Two Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Roca Bold Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-roca",
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
    <html
      lang="en"
      className={`${openSans.className} ${roca.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
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
