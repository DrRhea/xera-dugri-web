"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { label_text: "Beranda", href_url: "/" },
  { label_text: "Tentang", href_url: "/tentang" },
  { label_text: "Program", href_url: "/program" },
  { label_text: "Kontak", href_url: "/kontak" },
];

const LOGO_SRC = "/duta-generasi-remaja-indonesia-logo.png";

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute h-0.5 w-5 rotate-45 rounded-full bg-white" />
        <span className="absolute h-0.5 w-5 -rotate-45 rounded-full bg-white" />
      </span>
    );
  }
  return (
    <span className="flex h-6 w-6 flex-col items-center justify-center gap-1.5">
      <span className="h-0.5 w-5 rounded-full bg-white" />
      <span className="h-0.5 w-5 rounded-full bg-white" />
      <span className="h-0.5 w-5 rounded-full bg-white" />
    </span>
  );
}

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-blue-950/95 backdrop-blur-md">
      <div className="flex w-full items-center justify-between px-6 py-4 md:px-12 lg:px-16">
        <Link
          href="/"
          className="flex items-center transition opacity-90 hover:opacity-100"
        >
          <Image
            src={LOGO_SRC}
            alt="Duta Generasi Remaja Indonesia"
            width={44}
            height={44}
            className="h-10 w-10 object-contain md:h-11 md:w-11"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex md:gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href_url}
              href={item.href_url}
              className="transition hover:text-white"
            >
              {item.label_text}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`grid overflow-hidden transition-all duration-200 ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <nav className="border-t border-white/10 bg-blue-950 px-6 py-4">
            <ul className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <li key={item.href_url}>
                  <Link
                    href={item.href_url}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label_text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
