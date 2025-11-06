import type { Metadata } from "next";
import "./globals.css";
import AgoriaHeader from "@/components/layout/AgoriaHeader";
import AgoriaFooter from "@/components/layout/AgoriaFooter";

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
      <body className="font-sans antialiased flex flex-col min-h-screen bg-gray-50">
        <AgoriaHeader />
        <main className="flex-grow">
          {children}
        </main>
        <AgoriaFooter />
      </body>
    </html>
  );
}
