import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import AgoriaHeader from "@/components/layout/AgoriaHeader";
import AgoriaFooter from "@/components/layout/AgoriaFooter";

export const metadata: Metadata = {
  title: "Agoria - Compliance Scan Demo",
  description: "Évaluez votre niveau de conformité en 5 minutes - Démo académique",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen bg-white">
        <AgoriaHeader />
        <main className="flex-grow">
          {children}
        </main>
        <AgoriaFooter />
      </body>
    </html>
  );
}
