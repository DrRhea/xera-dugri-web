/**
 * HighlightsSection – Visi, misi, dan motto DUGRI.
 * Layout: 2 kolom full-bleed, no cards. Kiri: Visi + Motto; kanan: Misi.
 * Sumber: Buku Pedoman DUGRI 2026 Bab 2.3 dan 2.5.
 */
export function HighlightsSection() {
  return (
    <section
      className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2"
    >
      <div className="flex flex-col justify-center bg-slate-50 pl-8 pr-8 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
          Nilai & Arah
        </p>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-blue-950 md:text-3xl lg:text-4xl">
          Visi
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-700">
          Menjadi wadah pengembangan generasi remaja Indonesia yang cerdas, berdaya
          saing, berkarakter, dan siap menjadi inspirasi positif bagi bangsa.
        </p>
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Motto & Slogan
          </p>
          <p className="mt-2 text-xl font-semibold text-blue-950">
            Remaja Berkarya, Generasi Berdampak
          </p>
          <p className="mt-1 text-lg italic text-slate-600">
            Suara Kita, Gerak Kita, & Berdampak Nyata
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-white pl-8 pr-8 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
        <h2 className="text-2xl font-bold tracking-tight text-blue-950 md:text-3xl lg:text-4xl">
          Misi
        </h2>
        <ul className="mt-8 space-y-4 text-lg leading-relaxed text-slate-700">
          <li>Mendorong remaja aktif, kreatif, dan bertanggung jawab</li>
          <li>Mewadahi potensi kepemimpinan, komunikasi, seni, dan sosial</li>
          <li>Membangun karakter yang menjunjung moral dan nasionalisme</li>
          <li>Menjadi jembatan aspirasi remaja dan masyarakat</li>
          <li>Menciptakan role model yang menginspirasi perubahan positif</li>
        </ul>
      </div>
    </section>
  );
}
