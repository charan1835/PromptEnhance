import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Prompt Enhancer",
  description: "Built by Charan using the Gemini API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-900 text-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-800 border-t border-gray-700 p-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Charan. Powered by Gemini API 🚀
        </footer>
      </body>
    </html>
  );
}
