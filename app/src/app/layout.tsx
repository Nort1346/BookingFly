import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../style/globals.css";
import { connect } from "@lib/mongodb";
import { AuthProvider } from "@/context/AuthContext";
import LoadingCircle from "@/components/LoadingCircle";
import { Suspense } from "react";
import { LoginModalProvider } from "@/context/LoginModalContext";
import { MessageModalProvider } from "@/context/MessageModalContext";
import { RegisterModalProvider } from "@/context/RegisterModalContext";

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
  icons: ["/icons/icon-128.png", "/icons/icon-256.png", "/icons/icon-512.png"],
  manifest: "/manifest.json",
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
          <AuthProvider>
            <MessageModalProvider>
              <RegisterModalProvider>
                <LoginModalProvider>{children}</LoginModalProvider>
              </RegisterModalProvider>
            </MessageModalProvider>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
