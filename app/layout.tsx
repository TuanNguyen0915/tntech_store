import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from "react-hot-toast"

const  jetBrainMono= JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TnTech Store",
  description: "TnTech Ecommerce store",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${jetBrainMono.className} mx-auto min-h-screen max-w-[1920px] bg-white/60 py-2 px-4 no-scrollbar`}
          suppressHydrationWarning
        >
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
