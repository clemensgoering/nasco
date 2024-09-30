
import { Inter } from "next/font/google";
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`dark:bg-black ${inter.className}`}>
        {children}
        </body>
    </html>
  )
}
