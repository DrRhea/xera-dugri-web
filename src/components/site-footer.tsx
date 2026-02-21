import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";
import { siteData } from "@/lib/site-data";

type SiteFooterProps = {
  domainName: string;
  organizerName: string;
};

const EMAIL = "dutagenerasiremajaindonesia@gmail.com";
const PHONE = "+62 859-6101-5917";
const INSTAGRAM = "https://instagram.com/duta_dugri";
const CURRENT_YEAR = new Date().getFullYear();

const footerLinks = [
  ...siteData.navigation_items,
  { label_text: "Daftar", href_url: "/#daftar" },
];

export const SiteFooter = ({
  domainName,
  organizerName,
}: SiteFooterProps) => (
  <footer id="kontak" className="w-full border-t border-slate-200 bg-slate-50">
    <div className="w-full px-8 py-14 md:px-12 lg:px-16">
      <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
        <div className="space-y-4">
          <Link
            href="/"
            className="flex items-center gap-3 transition opacity-90 hover:opacity-100"
          >
            <Image
              src="/duta-generasi-remaja-indonesia-logo.png"
              alt="Duta Generasi Remaja Indonesia"
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 object-contain"
            />
            <span className="text-lg font-bold tracking-tight text-blue-950 md:text-xl">
              Duta Generasi Remaja Indonesia
            </span>
          </Link>
          <p className="text-sm italic text-slate-600">
            Remaja Berkarya, Generasi Berdampak
          </p>
          <p className="text-xs text-slate-500">
            Suara Kita, Gerak Kita, & Berdampak Nyata
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Tautan
          </p>
          <ul className="space-y-2">
            {footerLinks.map((item) => (
              <li key={item.href_url}>
                <Link
                  href={item.href_url}
                  className="text-sm text-slate-700 transition hover:text-amber-600 hover:underline"
                >
                  {item.label_text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Informasi
          </p>
          <p className="text-sm text-slate-700">
            <span className="text-slate-500">Penyelenggara</span>
            <br />
            {organizerName}
          </p>
          <p className="text-sm text-slate-700">
            <span className="text-slate-500">Situs resmi</span>
            <br />
            {domainName}
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Kontak
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 text-sm text-slate-700 transition hover:text-amber-600 hover:underline"
          >
            <Mail className="h-4 w-4 shrink-0 text-slate-500" aria-hidden />
            {EMAIL}
          </a>
          <a
            href={`https://wa.me/${PHONE.replace(/\s/g, "").replace(/^\+/, "")}`}
            className="flex items-center gap-3 text-sm text-slate-700 transition hover:text-amber-600 hover:underline"
          >
            <Phone className="h-4 w-4 shrink-0 text-slate-500" aria-hidden />
            {PHONE}
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-slate-700 transition hover:text-amber-600 hover:underline"
          >
            <Instagram className="h-4 w-4 shrink-0 text-slate-500" aria-hidden />
            Instagram @duta_dugri
          </a>
        </div>
      </div>
      <div className="mt-14 flex w-full flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row md:items-center">
        <p className="text-center text-xs text-slate-500 md:text-left">
          © {CURRENT_YEAR} Duta Generasi Remaja Indonesia. All rights reserved.
        </p>
        <p className="text-center text-xs text-slate-500 md:text-right">
          Diselenggarakan oleh {organizerName}
        </p>
      </div>
    </div>
  </footer>
);
