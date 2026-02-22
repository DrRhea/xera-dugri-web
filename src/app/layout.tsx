import { JsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://dutagenerasiremaja.com";
const DEFAULT_TITLE = "Duta Generasi Remaja Indonesia (DUGRI)";
const DEFAULT_DESC =
  "Program pembinaan remaja berskala nasional untuk pelajar SMP–mahasiswa (14–21 tahun). Penguatan karakter, kepemimpinan, literasi, dan kepedulian sosial. Remaja Berkarya, Generasi Berdampak.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Duta Generasi Remaja Indonesia",
  },
  description: DEFAULT_DESC,
  keywords: [
    "Duta Generasi Remaja Indonesia",
    "DUGRI",
    "program remaja Indonesia",
    "pembinaan remaja",
    "remaja berkarya",
    "generasi berdampak",
    "pesona prestasi",
    "remaja nasional",
  ],
  authors: [{ name: "Duta Generasi Remaja Indonesia", url: SITE_URL }],
  creator: "CV. Pesona Prestasi Official",
  publisher: "CV. Pesona Prestasi Official",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Duta Generasi Remaja Indonesia",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Duta Generasi Remaja Indonesia - Remaja Berkarya, Generasi Berdampak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: ["/og-image.png"],
  },
  verification: {
    // Uncomment dan isi bila pakai Google Search Console / Bing
    // google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
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
        <JsonLd />
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
