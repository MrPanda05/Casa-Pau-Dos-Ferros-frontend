import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/common/Footer";
import { CartProvider } from "@/components/CartRelated/CartContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Casa Pau dos Ferros",
  description: "Página oficial da Casa Pau dos Ferros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <main className=" flex-1 flex flex-col mx-2 my-2"> {/*bg-yellow-200*/}
          <CartProvider>
            {children}
          </CartProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
