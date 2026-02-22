/**
 * MarqueeTicker – Teks bergerak horizontal seamless infinite loop (marquee/ticker).
 * Duplikat konten dipakai agar transisi tanpa putus.
 */
const TICKER_ITEMS = [
  "Duta Generasi Remaja Indonesia",
  "Remaja Berkarya, Generasi Berdampak",
  "Suara Kita, Gerak Kita, & Berdampak Nyata",
  "•",
  "Duta Generasi Remaja Indonesia 2026",
  "•",
  "Wadah Pengembangan Generasi Remaja",
  "•",
];

export function MarqueeTicker() {
  return (
    <div className="w-full overflow-hidden border-y border-slate-200 bg-white py-5 md:py-6">
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span
            key={i}
            className={`text-sm font-medium uppercase tracking-wider ${
              item === "•" ? "text-amber-400" : "text-slate-600"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
