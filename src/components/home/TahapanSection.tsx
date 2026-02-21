/**
 * TahapanSection – Timeline tahapan program DUGRI.
 * Layout: 2 kolom full-bleed; kiri: judul + intro, kanan: list (no cards).
 * Sumber: Buku Pedoman DUGRI 2026 Bab 4 (Roadmap dan Tahapan).
 */
const TAHAPAN = [
  { step: 1, label: "Sosialisasi & Pendaftaran", short: "Sosialisasi daring/luring, pendaftaran digital terbuka." },
  { step: 2, label: "Seleksi Administrasi", short: "Verifikasi kelengkapan dokumen dan kesesuaian persyaratan." },
  { step: 3, label: "Penilaian Pemahaman & Komitmen", short: "Esai, studi kasus, dan pertanyaan reflektif (tanpa wawancara tatap muka)." },
  { step: 4, label: "Pembinaan & Karantina", short: "Pembekalan kepemimpinan, komunikasi, etika, literasi digital, karakter." },
  { step: 5, label: "Grand Final & Pengukuhan", short: "Presentasi gagasan, penampilan bakat, pengukuhan resmi Duta Generasi Remaja Indonesia." },
  { step: 6, label: "Masa Penugasan & Aksi Nyata", short: "Kegiatan edukatif, kampanye sosial, advokasi isu remaja." },
  { step: 7, label: "Monitoring & Evaluasi", short: "Evaluasi berkala: keaktifan, capaian program kerja, dampak sosial." },
  { step: 8, label: "Keberlanjutan & Alumni", short: "Jejaring alumni sebagai mentor dan penggerak kegiatan." },
] as const;

export function TahapanSection() {
  return (
    <section
      id="program"
      className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2"
    >
      <div className="flex flex-col justify-center bg-slate-100 py-12 pl-8 pr-8 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
          Program
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl lg:text-5xl">
          Tahapan Pelaksanaan
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Alur program dari pendaftaran hingga masa penugasan dan keberlanjutan.
        </p>
      </div>
      <div className="flex flex-col justify-center bg-white py-12 pl-8 pr-8 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
        <ul className="space-y-8">
          {TAHAPAN.map(({ step, label, short }) => (
            <li key={step} className="flex gap-6">
              <span className="text-3xl font-bold tabular-nums text-amber-500 md:text-4xl">
                {String(step).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-blue-950 md:text-xl">
                  {label}
                </h3>
                <p className="mt-1 text-slate-600">{short}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
