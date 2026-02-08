"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
const menuItems = [{ label_text: "Beranda", href_url: "#beranda" }, { label_text: "Tentang", href_url: "#tentang" }, { label_text: "Program", href_url: "#program" }, { label_text: "Kontak", href_url: "#kontak" }];
export const Navbar = () => {
  const [isSolid, setIsSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsSolid(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${isSolid ? "bg-blue-950/95" : "bg-white/5"} backdrop-blur-md`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#beranda" className="font-serif text-lg font-bold text-white">DUGRI</Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          {menuItems.map((item) => (
            <Link key={item.href_url} href={item.href_url}>{item.label_text}</Link>
          ))}
        </nav>
        <Link href="#kontak" className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-blue-950">
          Daftar Sekarang <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      </div>
    </header>
  );
};
