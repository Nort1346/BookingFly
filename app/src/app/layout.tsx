import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../style/globals.css";
import { connect } from "@lib/mongodb";
import { AuthProvider } from "@/context/AuthContext";
import LoadingCircle from "@/components/LoadingCircle";
import { Suspense } from "react";

connect();
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BookingFly",
  description: "An application for booking flights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scrollbar-dark dark`} data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black text-white`}
      >
        <Suspense fallback={<LoadingCircle visible={true} />}>
          <AuthProvider>{children}</AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
