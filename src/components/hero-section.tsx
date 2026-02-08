type HeroSectionProps = {
  titleText: string;
  mottoText: string;
  sloganText: string;
};

export const HeroSection = ({
  titleText,
  mottoText,
  sloganText,
}: HeroSectionProps) => (
  <section id="beranda" className="py-16">
    <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
          Company Profile
        </p>
        <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
          {titleText}
        </h1>
        <p className="text-lg text-slate-600">{mottoText}</p>
        <p className="text-base text-slate-500">{sloganText}</p>
      </div>
      <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
        <div className="space-y-4 text-slate-700">
          <p className="text-sm font-semibold text-emerald-700">Penyelenggara</p>
          <p className="text-2xl font-semibold">CV. Pesona Prestasi Official</p>
          <p className="text-sm">Program pembinaan remaja Indonesia.</p>
        </div>
      </div>
    </div>
  </section>
);
