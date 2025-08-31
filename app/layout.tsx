import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/layouts/navbar";
import { ThemeProvider } from "@/layouts/theme-provider";
import { cn } from "@/lib/utils";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Optional: for CSS variables
});

export const metadata: Metadata = {
  title: "Mansour Qaderi | Senior Software Developer",
  description:
    "Senior Software Developer specializing in Next.js, React, React Native and Typescript. Helping businesses build modern, responsive, and high-performance websites.",
  openGraph: {
    title: "Mansour Qaderi | Senior Software Developer",
    description:
      "Senior Software Developer specializing in Next.js, React, React Native and Typescript. Helping businesses build modern, responsive, and high-performance websites.",
    url: "https://github.com/mansour-qaderi/portfolio",
    siteName: "Mansour Qaderi Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
