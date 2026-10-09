import type { Metadata } from "next";
import { Inter, Poppins, Figtree, Noto_Sans, Exo_2, Lexend } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import siteData from "@/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const figtree = Figtree({ subsets: ["latin"], variable: "--ff-figtree" });
const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--ff-noto" });
const lexend = Lexend({ subsets: ["latin"], variable: "--ff-lexend" });
const exo2 = Exo_2({ subsets: ["latin"], variable: "--ff-exo" });

export const metadata: Metadata = {
  title: `${siteData.company.name} | ${siteData.company.tagline}`,
  description: siteData.company.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${figtree.variable} ${notoSans.variable} ${exo2.variable} ${lexend.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-gray-800 bg-white flex flex-col min-h-screen">
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
