import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Duta Generasi Remaja Indonesia",
  description:
    "Profil resmi Duta Generasi Remaja Indonesia - Remaja Berkarya, Generasi Berdampak.",
  metadataBase: new URL("https://dutagenerasiremaja.com"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Duta Generasi Remaja Indonesia",
    description:
      "Profil resmi Duta Generasi Remaja Indonesia - Remaja Berkarya, Generasi Berdampak.",
    url: "https://dutagenerasiremaja.com",
    siteName: "Duta Generasi Remaja Indonesia",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Logo Duta Generasi Remaja Indonesia" }],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duta Generasi Remaja Indonesia",
    description:
      "Profil resmi Duta Generasi Remaja Indonesia - Remaja Berkarya, Generasi Berdampak.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
