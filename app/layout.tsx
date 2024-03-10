import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Web3ModalProvider } from "@/context/Web3Modal";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlackRockGraduate 🎓",
  description:
    "A app to learn and get financially educated about Web3 and crytpo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <Web3ModalProvider>
          <body className={inter.className}>
            <Navbar />
            {/* <Sidebar /> */}
            {children}
          </body>
        </Web3ModalProvider>
      </ThemeProvider>
    </html>
  );
}
