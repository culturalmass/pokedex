import type { Metadata } from "next";
import { Advent_Pro } from "next/font/google";
import { ThemeProvider } from "./components/theme/theme-provider";

import "./globals.css";
import AuthContext from "./context/AuthContext";
import { Navbar } from "./components/navbar";

const advent = Advent_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex",
  description: "A Pokedex with a twist!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
            <div className="flex h-full pt-20">{children}</div>
          </ThemeProvider>
        </AuthContext>
      </body>
    </html>
  );
}
