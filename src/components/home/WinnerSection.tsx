"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";

/**
 * WinnerSection – Carousel 2 kolom (kiri & kanan) dengan min-h-screen.
 * Slide 1: image1-1 (kiri), image1-2 (kanan).
 * Slide 2: image2-1 (kiri), image2-2 (kanan).
 */
const SLIDES = [
  { left: "/winner/image1-1.png", right: "/winner/image1-2.png" },
  { left: "/winner/image2-1.png", right: "/winner/image2-2.png" },
] as const;

export function WinnerSection() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];

  const goPrev = useCallback(() => {
    setIndex((i) => (i === 0 ? SLIDES.length - 1 : i - 1));
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => (i === SLIDES.length - 1 ? 0 : i + 1));
  }, []);

  return (
    <section
      id="winner"
      className="relative min-h-screen w-full overflow-hidden bg-slate-100 p-0 m-0"
    >
      {/* Judul absolute, tidak makan space */}
      <div className="absolute left-0 right-0 top-6 z-10 text-center md:top-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
          Pemenang
        </p>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-blue-950 md:text-2xl">
          Duta Generasi Remaja Indonesia
        </h2>
      </div>
      <div className="grid min-h-screen w-full grid-cols-1 gap-0 md:grid-cols-2">
        <div className="relative min-h-[50vh] md:min-h-screen">
          <Image
            key={slide.left}
            src={slide.left}
            alt="Pemenang Duta Generasi Remaja Indonesia"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        </div>
        <div className="relative min-h-[50vh] md:min-h-screen">
          <Image
            key={slide.right}
            src={slide.right}
            alt="Pemenang Duta Generasi Remaja Indonesia"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        </div>
      </div>

      {/* Overlay gradient: navy bawah → transparan ke atas */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1/2 bg-gradient-to-t from-blue-950/80 to-transparent"
        aria-hidden
      />

      {/* Carousel controls — minimal, terpisah arrow & dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-5">
        {/* Dots — jarak lega, tidak nempel */}
        <div className="flex items-center gap-4">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent ${
                i === index
                  ? "h-2 w-2 bg-white shadow-sm md:h-2.5 md:w-2.5"
                  : "h-1.5 w-1.5 bg-white/50 hover:bg-white/70 md:h-2 md:w-2"
              }`}
              aria-label={`Ke slide ${i + 1}`}
            />
          ))}
        </div>
        {/* Prev / Next — satu bar tipis, elegan */}
        <div className="flex items-center gap-6 rounded-full bg-white/10 px-5 py-2.5 backdrop-blur-md">
          <button
            type="button"
            onClick={goPrev}
            className="rounded-full p-1.5 text-white/90 transition hover:bg-white/15 hover:text-white"
            aria-label="Slide sebelumnya"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <span className="min-w-8 text-center text-xs font-medium tabular-nums text-white/80">
            {index + 1}/{SLIDES.length}
          </span>
          <button
            type="button"
            onClick={goNext}
            className="rounded-full p-1.5 text-white/90 transition hover:bg-white/15 hover:text-white"
            aria-label="Slide berikutnya"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
