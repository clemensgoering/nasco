
import { Inter } from "next/font/google";
import "@/app/globals.css"
import { ThemeProvider } from "next-themes";
import HeaderElement from "./test/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light" >
          {children}
          <HeaderElement/>
        </ThemeProvider>
      </body>
    </html>
  )
}
