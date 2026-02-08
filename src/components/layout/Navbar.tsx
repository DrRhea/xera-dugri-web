import Link from "next/link";
const menuItems = [{ label_text: "Beranda", href_url: "#beranda" }, { label_text: "Tentang", href_url: "#tentang" }, { label_text: "Program", href_url: "#program" }, { label_text: "Kontak", href_url: "#kontak" }];
export const Navbar = () => (
  <header className="absolute inset-x-0 top-0 z-50">
    <div className="mx-auto max-w-6xl px-6 pt-6">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/10 px-6 py-3 backdrop-blur-md">
        <Link href="#beranda" className="text-sm font-bold text-white">DUGRI</Link>
        <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex">
          {menuItems.map((item) => (
            <Link key={item.href_url} href={item.href_url} className="transition hover:text-white">{item.label_text}</Link>
          ))}
        </nav>
        <span className="rounded-full bg-amber-400 px-4 py-1 text-xs font-semibold text-blue-950">Daftar Sekarang</span>
      </div>
    </div>
  </header>
);
