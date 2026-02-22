import { Navbar } from "@/components/layout/Navbar";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { SiteFooter } from "@/components/site-footer";
import { siteData } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi tim program Duta Generasi Remaja Indonesia (DUGRI) dan CV. Pesona Prestasi Official — email, WhatsApp, Instagram.",
  alternates: { canonical: "https://dutagenerasiremaja.com/kontak" },
  openGraph: {
    title: "Kontak | Duta Generasi Remaja Indonesia",
    description: "Hubungi tim DUGRI dan penyelenggara — email, WhatsApp, Instagram.",
    url: "https://dutagenerasiremaja.com/kontak",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontak | Duta Generasi Remaja Indonesia",
    description: "Hubungi tim DUGRI dan penyelenggara.",
  },
};

const PROGRAM_EMAIL = "dutagenerasiremajaindonesia@gmail.com";
const PROGRAM_PHONE = "+62 859-6101-5917";
const PROGRAM_PHONE_RAW = "6285961015917";
const PROGRAM_INSTAGRAM = "https://instagram.com/duta_dugri";

const ORGANIZER_EMAIL = "pesonaprestasiofficial@gmail.com";
const ORGANIZER_WEBSITE = "https://pesonaprestasi.com";
const ORGANIZER_PHONE = "+62 852 4948 5579";
const ORGANIZER_PHONE_RAW = "6285249485579";
const ORGANIZER_ADDRESS =
  "Jl. H. Rais. A. Rachman Gg. Bukit Sebedang No.21, Sungai Jawi, Kec. Pontianak Kota, Kalimantan Barat";

export default function KontakPage() {
  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />
      <main className="w-full">
        {/* Hero */}
        <section className="flex min-h-[40vh] w-full flex-col items-center justify-center bg-blue-950 px-6 py-14 md:px-12 md:py-16 lg:px-16">
          <h1 className="text-center text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Kontak
          </h1>
          <p className="mt-4 text-center text-slate-200 md:text-lg">
            Hubungi kami untuk informasi program dan pendaftaran.
          </p>
        </section>

        {/* Kontak Program */}
        <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-white py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Program
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
              Duta Generasi Remaja Indonesia
            </h2>
            <p className="mt-6 text-slate-600">
              Untuk pertanyaan seputar program, pendaftaran, dan kegiatan Duta Generasi Remaja Indonesia.
            </p>
          </div>
          <div className="flex flex-col justify-center bg-slate-50 py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <ul className="space-y-4 text-slate-700">
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email
                </span>
                <a
                  href={`mailto:${PROGRAM_EMAIL}`}
                  className="mt-1 block text-lg font-medium text-amber-600 transition hover:underline"
                >
                  {PROGRAM_EMAIL}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  WhatsApp
                </span>
                <a
                  href={`https://wa.me/${PROGRAM_PHONE_RAW}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-lg font-medium text-amber-600 transition hover:underline"
                >
                  {PROGRAM_PHONE}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Instagram
                </span>
                <a
                  href={PROGRAM_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-lg font-medium text-amber-600 transition hover:underline"
                >
                  @duta_dugri
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Kontak Penyelenggara */}
        <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-slate-50 py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Penyelenggara
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
              {siteData.organizer_name}
            </h2>
            <p className="mt-6 text-slate-600">
              Event Organizer dan Pengembangan Sumber Daya Remaja. Untuk kerja sama dan informasi umum.
            </p>
          </div>
          <div className="flex flex-col justify-center bg-white py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <ul className="space-y-4 text-slate-700">
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Alamat
                </span>
                <p className="mt-1 text-slate-800">{ORGANIZER_ADDRESS}</p>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email
                </span>
                <a
                  href={`mailto:${ORGANIZER_EMAIL}`}
                  className="mt-1 block font-medium text-amber-600 transition hover:underline"
                >
                  {ORGANIZER_EMAIL}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Website
                </span>
                <a
                  href={ORGANIZER_WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-medium text-amber-600 transition hover:underline"
                >
                  {ORGANIZER_WEBSITE.replace("https://", "")}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  WhatsApp
                </span>
                <a
                  href={`https://wa.me/${ORGANIZER_PHONE_RAW}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-medium text-amber-600 transition hover:underline"
                >
                  {ORGANIZER_PHONE}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Media Sosial
                </span>
                <p className="mt-1 text-slate-800">
                  Instagram @pesona_prestasi.official · TikTok @pesona_prestasi.official · YouTube @pesonaprestasiofficial
                </p>
              </li>
            </ul>
          </div>
        </section>

        <MarqueeTicker />
        <SiteFooter
          domainName={siteData.domain_name}
          organizerName={siteData.organizer_name}
        />
      </main>
    </div>
  );
}
