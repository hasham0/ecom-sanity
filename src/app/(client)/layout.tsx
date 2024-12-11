import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/customComp/header";
import Footer from "@/components/customComp/footer";
import { Toaster } from "react-hot-toast";

const poppins = localFont({
  src: "../../fonts/poppinsFont.woff2",
  variable: "--font-poppins",
  weight: "400",
  preload: true,
});

export const metadata: Metadata = {
  title: "Ecommerce Website",
  description: "Web Application for Education purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en2" suppressHydrationWarning>
        <body className={`${poppins.variable} antialiased`}>
          <Header />
          <main className="mx-auto min-h-screen max-w-screen-2xl">
            {children}
          </main>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#000000",
                color: "#FFFFFF",
              },
            }}
          />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
