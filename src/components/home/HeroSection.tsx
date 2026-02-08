export const HeroSection = () => (
  <section id="beranda" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-blue-950">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
    </div>
    <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 px-6 text-center text-white">
      <span className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">Company Profile</span>
      <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl lg:text-8xl">Duta Generasi Remaja Indonesia</h1>
      <p className="text-xl text-slate-200 md:text-3xl">Remaja Berkarya, Generasi Berdampak</p>
      <p className="text-lg font-medium text-amber-400">Suara Kita, Gerak Kita, & Berdampak Nyata</p>
      <p className="max-w-3xl text-lg text-slate-200 md:text-xl">Menjadi wadah pengembangan generasi remaja Indonesia yang cerdas, berdaya saing, berkarakter, dan siap menjadi inspirasi positif bagi bangsa.</p>
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
        <span className="flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-xs font-semibold text-blue-950">Gabung Sekarang</span>
        <span className="flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-xs font-semibold text-white">Pelajari Program</span>
      </div>
    </div>
  </section>
);
