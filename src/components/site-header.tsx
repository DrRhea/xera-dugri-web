import Link from "next/link";
import { siteData } from "@/lib/site-data";

export const SiteHeader = () => (
  <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <Link href="#beranda" className="text-lg font-semibold text-slate-900">
        {siteData.organization_name}
      </Link>
      <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
        {siteData.navigation_items.map((item) => (
          <Link key={item.href_url} href={item.href_url}>
            {item.label_text}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);
