import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  weight: ["400", "300", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yohan's Private Tutoring",
  description: "Yohan Jeon's private tutoring website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.png" />
      </Head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
