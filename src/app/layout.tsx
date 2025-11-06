import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import AgoriaHeader from "@/components/layout/AgoriaHeader";
import AgoriaFooter from "@/components/layout/AgoriaFooter";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Agoria - Compliance Scan Demo",
  description: "Évaluez votre niveau de conformité en 5 minutes - Démo académique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${openSans.variable} font-sans antialiased flex flex-col min-h-screen bg-gray-50`}>
        <AgoriaHeader />
        <main className="flex-grow">
          {children}
        </main>
        <AgoriaFooter />
      </body>
    </html>
  );
}
