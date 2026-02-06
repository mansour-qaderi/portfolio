import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/layouts/navbar";
import { ThemeProvider } from "@/layouts/theme-provider";
import { cn } from "@/lib/utils";
import Script from "next/script";

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
      <Script id="livechat-init" strategy="afterInteractive">
        {`
    window.__lc = window.__lc || {};
    window.__lc.license = 19293281;
    window.__lc.integration_name = "manual_onboarding";
    window.__lc.product_name = "livechat";
    (function(n,t,c){
      function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}
      var e={
        _q:[],_h:null,_v:"2.0",
        on:function(){i(["on",c.call(arguments)])},
        once:function(){i(["once",c.call(arguments)])},
        off:function(){i(["off",c.call(arguments)])},
        get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},
        call:function(){i(["call",c.call(arguments)])},
        init:function(){
          var n=t.createElement("script");
          n.async=!0;
          n.type="text/javascript";
          n.src="https://cdn.livechatinc.com/tracking.js";
          t.head.appendChild(n)
        }
      };
      !n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e
    }(window,document,[].slice));
  `}
      </Script>
      <div
        dangerouslySetInnerHTML={{
          __html: `<noscript><a href="https://www.livechat.com/chat-with/19293281/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a></noscript>`,
        }}
      />
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="w-full h-screen overflow-y-auto py-10 sm:py-20 md:py-32 -mt-[58px]">
            <div className="w-full h-full lg:max-w-screen-xl mx-auto">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
