import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { LanguageProvider } from "./language";
import "./globals.css";

const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Tiffany Wang — Interaction Designer",
  description: "Interaction designer shaping AI-powered experiences for complex, real-world workflows.",
  icons: { icon: `${basePath}/favicon.svg`, shortcut: `${basePath}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geistMono.variable}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
