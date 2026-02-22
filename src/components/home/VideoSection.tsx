/**
 * VideoSection – Winner DUGRI batch 1, min/max h-screen.
 * Mobile: no margin/padding, satu kolom. Desktop: 2 kolom (kiri judul+deskripsi, kanan video).
 */
export function VideoSection() {
  return (
    <section
      className="flex min-h-screen max-h-screen w-full flex-col overflow-y-auto bg-slate-900 p-0 m-0 md:grid md:grid-cols-2 md:grid-rows-1"
      aria-label="Video Winner Duta Generasi Remaja Indonesia"
    >
      {/* Kiri: judul + deskripsi — desktop kolom 1, mobile di atas video */}
      <div className="flex flex-col justify-center p-0 m-0 md:px-16 md:py-20 lg:px-24 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500 md:px-0">
          Video
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
          Winner Dugri batch 1
        </h2>
        <p className="mt-4 max-w-lg text-slate-300 md:mt-6 md:text-lg">
          Simak momen pemenang Duta Generasi Remaja Indonesia batch pertama.
          Program pembinaan remaja berskala nasional yang menyiapkan generasi
          berkarakter, berdaya saing, dan siap berdampak.
        </p>
      </div>

      {/* Kanan: video — desktop kolom 2, mobile full bleed, no padding */}
      <div className="relative flex min-h-[50vh] flex-1 items-center justify-center p-0 m-0 md:min-h-0">
        <video
          className="h-full w-full rounded-none object-contain"
          src="/winner/winner-dugri.webm"
          controls
          playsInline
          preload="metadata"
        >
          <track kind="captions" />
          Browser Anda tidak mendukung pemutaran video.
        </video>
      </div>
    </section>
  );
}
