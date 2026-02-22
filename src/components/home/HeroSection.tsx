import Image from "next/image";

export const HeroSection = () => (
  <section
    id="beranda"
    className="relative flex min-h-screen max-h-screen min-w-0 items-center justify-center overflow-hidden bg-blue-950"
  >
    {/* Background image — darkened */}
    <div className="absolute inset-0">
      <Image
        src="/winner/image2-2.png"
        alt=""
        fill
        className="object-cover object-center brightness-[0.35]"
        sizes="100vw"
        priority
      />
    </div>
    {/* Navy overlay */}
    <div
      className="absolute inset-0 bg-blue-950/70"
      aria-hidden
    />
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
    </div>
    <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 px-4 py-6 text-center text-white sm:gap-4 sm:px-5 md:gap-5 md:px-6 md:py-8 lg:gap-6">
      <h1 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl md:leading-tight lg:text-5xl xl:text-6xl 2xl:text-7xl">
        Duta Generasi Remaja Indonesia
      </h1>
      <p className="text-base text-slate-200 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        Remaja Berkarya, Generasi Berdampak
      </p>
      <p className="text-sm font-medium text-amber-400 sm:text-base md:text-lg">
        Suara Kita, Gerak Kita, & Berdampak Nyata
      </p>
      <p className="max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg lg:text-xl">
        Menjadi wadah pengembangan generasi remaja Indonesia yang cerdas, berdaya saing,
        berkarakter, dan siap menjadi inspirasi positif bagi bangsa.
      </p>
      <div className="mt-4 shrink-0 sm:mt-6 md:mt-8">
        <a
          href="/program"
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10 sm:px-5 sm:py-3 md:px-6 md:text-sm"
        >
          Lihat Tahapan Program
        </a>
      </div>
    </div>
  </section>
);
