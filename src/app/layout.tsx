import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import { CartProvider } from "./components/cartcontext";
import { WishlistProvider } from "./components/context";
import { ClerkProvider} from '@clerk/nextjs'


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
  title: "Furnisphere",
  description: "Ecommerce website for online furniture shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          
        <CartProvider>
            <WishlistProvider>
              
                 {children}
          </WishlistProvider>
                </CartProvider>
          
        <Footer/>
      </body>
      </html>
      </ClerkProvider>
  );
}
