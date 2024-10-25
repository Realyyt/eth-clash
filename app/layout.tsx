import type { Metadata } from "next";
import "./globals.css";
import { DarkModeProvider } from '@/components/DarkModeContext';


export const metadata: Metadata = {
  title: "social point",
  description: "eth clash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:bg-gray-900 dark:text-white">
      <body className="transition-colors duration-300">
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
