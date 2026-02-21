"use client";

import { useEffect, useRef, useState } from "react";

/**
 * IntroSection – Satu blok rata tengah (horizontal + vertikal), parallax, scroll-to-focus.
 * Teks dari abu (unfocus) ke hitam (focus) saat scroll; konten bergerak parallax.
 */
function useScrollFocus() {
  const ref = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFocused(true);
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, focused };
}

function FocusBlock({
  children,
  colorTransition = false,
}: {
  children: React.ReactNode;
  colorTransition?: boolean;
}) {
  const { ref, focused } = useScrollFocus();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        colorTransition
          ? focused
            ? "opacity-100 text-slate-900"
            : "opacity-50 text-slate-400"
          : focused
            ? "opacity-100"
            : "opacity-50"
      }`}
    >
      {children}
    </div>
  );
}

export function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const offset = (sectionCenter - viewportCenter) * 0.15;
      setParallaxY(offset);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tentang"
      className="flex w-full items-center justify-center bg-white py-20 md:py-24"
    >
      <div
        ref={contentRef}
        className="mx-auto max-w-4xl px-8 text-center md:px-12 lg:px-16"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <FocusBlock>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Tentang Duta Generasi Remaja Indonesia
          </p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-blue-950 md:text-5xl lg:text-6xl">
            Wadah Pengembangan Generasi Remaja Indonesia
          </h2>
          <p className="mt-6 text-xl text-slate-600 md:text-2xl">
            Program pembinaan remaja berskala nasional—SMP hingga mahasiswa, 14–21 tahun.
          </p>
        </FocusBlock>

        <FocusBlock colorTransition>
          <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed md:text-2xl">
            Program Duta Generasi Remaja Indonesia adalah program pembinaan remaja
            berskala nasional yang menyasar pelajar tingkat SMP, SMA, hingga mahasiswa
            (usia 14–21 tahun). Fokus utama kami: penguatan karakter, kepemimpinan,
            literasi, serta kepedulian sosial dan budaya.
          </p>
        </FocusBlock>

        <FocusBlock colorTransition>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed md:text-2xl">
            Duta Generasi Remaja Indonesia tidak hanya membekali pemahaman konseptual, tetapi mendorong peserta
            untuk mengimplementasikan pengetahuan melalui inisiatif nyata—proyek sosial,
            edukatif, atau kepemudaan—sehingga remaja siap menjadi agen perubahan di
            lingkungan masing-masing. Diselenggarakan oleh CV. Pesona Prestasi Official.
          </p>
        </FocusBlock>
      </div>
    </section>
  );
}
