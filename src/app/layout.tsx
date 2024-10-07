import React from "react";

import { Inter } from "next/font/google";
import "@/styles/main.css"
import { ThemeProvider } from "next-themes";
import HeaderElement from "./test/header";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/components/BackToTop/Backtotop";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html  lang="en">
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light" >
          {children}
          <HeaderElement/>
          <BackToTop />
          <Footer leftMenu={{
            title: "Nasco",
            description: "Lorem Ipsum amd Lorem Ipsum meridian pulvinar element",
            contact: "mail@nasco.com"
          }}
          midMenu={{ title: "News", links : [{ href : '/home', text : "Home"}, { href : '/social', text : "Social"}, { href : '/faw', text : "FAQ"}, ]}}
          rightMenu={{ title: "Socials", links : [{ href : '...', text : "Social1"}, { href : '...', text : "Social2"}, { href : '...', text : "Social3"}, ]}}
          bottomLinks={{ links:  [{ href : '...', text : "Contact"}, { href : '...', text : "Map"}, { href : '...', text : "Impressum"} ]}}/>
        </ThemeProvider>
      </body>
    </html>
  )
}
