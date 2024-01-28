import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Домашняя страница",
  description: "Home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <AuthProvider>
            <div className="container">
              <NavBar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </body>
      </Providers>
    </html>
  );
}
