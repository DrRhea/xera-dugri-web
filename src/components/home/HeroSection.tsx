import { ArrowRight } from "lucide-react";
import Link from "next/link";
export const HeroSection = () => (
  <section id="beranda" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-b from-blue-950 via-[#003366] to-blue-900">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
    </div>
    <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center text-white">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">Suara Kita, Gerak Kita, & Berdampak Nyata</p>
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Duta Generasi Remaja Indonesia</h1>
      <p className="text-lg text-white/80">Remaja Berkarya, Generasi Berdampak</p>
      <p className="text-sm text-white/70">Wadah pengembangan generasi remaja yang cerdas, berdaya saing, dan berkarakter menuju Indonesia Emas 2045.</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="#kontak" className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold">Gabung Sekarang <ArrowRight className="h-4 w-4" /></Link>
        <Link href="#program" className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white">Pelajari Program</Link>
      </div>
    </div>
  </section>
);
