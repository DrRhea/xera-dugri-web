/**
 * CtaSection – Ajakan daftar, info tahapan. ID #daftar dipakai untuk anchor.
 * Full viewport height, centered content.
 */
export function CtaSection() {
  return (
    <section
      id="daftar"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-blue-950"
    >
      <div className="px-8 text-center md:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          Siap Jadi Duta Generasi Remaja Indonesia?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
          Pendaftaran terbuka bagi pelajar se-Indonesia (usia 14–21 tahun). Ikuti
          seluruh tahapan program.
        </p>
        <div className="mt-10">
          <a
            href="/program"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Lihat Tahapan
          </a>
        </div>
        <p className="mt-8 text-sm text-slate-400">
          Poster, twibbon, dan caption resmi tersedia di bio Instagram{" "}
          <span className="font-medium text-white">@duta_dugri</span>.
        </p>
      </div>
    </section>
  );
}
