import type { Metadata } from "next"
import { Advent_Pro } from "next/font/google"
import AuthContext from "./context/AuthContext"
import { ThemeProvider } from "./components/theme/theme-provider"
import { Navbar } from "./components/navbar"
import { Toaster } from "sonner"
import "./globals.css"

const advent = Advent_Pro({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pokedex",
  description: "A Pokedex with a twist!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={advent.className}>
        <AuthContext>
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            storageKey="streamingApp-theme"
          >
            <Navbar />
            <Toaster theme="light" position="top-right" />
            <div className="flex h-full pt-20">{children}</div>
          </ThemeProvider>
        </AuthContext>
      </body>
    </html>
  )
}
