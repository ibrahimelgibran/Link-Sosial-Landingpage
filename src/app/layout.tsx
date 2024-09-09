import clsx from "clsx";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import Footer from "@/common/components/Footer";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Link Sosial - El Gibran",
  description: "My Personal Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://iegcode.com/asset/admin/dist/images/logo.png"
        />
      </head>
      <body className={clsx(sora.className)}>
        <div className="min-h-screen md:min-h-fit max-w-[480px] mx-auto bg-white md:shadow-xl md:rounded-lg md:my-3">
          {children}
        </div>
      </body>
    </html>
  );
}
