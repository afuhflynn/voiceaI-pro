import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VoiceAI Pro - Advanced Voice Agent Platform",
  description:
    "Professional AI voice assistant with RAG technology, continuous learning, and domain expertise.",
  keywords:
    "AI, voice assistant, RAG, machine learning, voice recognition, chatbot",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Toaster
            className="bg-background w-auto"
            theme="system"
            richColors
            closeButton
          />
          <main className="min-h-screen bg-background flex flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
