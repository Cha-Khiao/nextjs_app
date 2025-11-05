import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextApp",
  description: "แพลตฟอร์มที่ทรงพลังสำหรับการพัฒนาเว็บแอปพลิเคชันสมัยใหม่ ด้วย Next.js และ TypeScript",
  keywords: ["Next.js", "TypeScript", "Web Development", "React"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}