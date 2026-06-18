import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/layouts/navbar";
import { ThemeProvider } from "@/layouts/theme-provider";
import { HashScrollHandler } from "@/shared/hash-scroll-handler";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Mansour Qaderi | Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer specializing in Next.js, React, React Native and Typescript. Helping businesses build modern, responsive, and high-performance websites.",
  openGraph: {
    title: "Mansour Qaderi | Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer specializing in Next.js, React, React Native and Typescript. Helping businesses build modern, responsive, and high-performance websites.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans",
          inter.variable,
          jetbrainsMono.variable,
          inter.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <HashScrollHandler />
          <Navbar />
          <main className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
