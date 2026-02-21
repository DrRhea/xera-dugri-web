import { Navbar } from "@/components/layout/Navbar";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { SiteFooter } from "@/components/site-footer";
import { siteData } from "@/lib/site-data";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Duta Generasi Remaja Indonesia",
  description:
    "Sejarah, filosofi nama dan logo, visi, misi, nilai-nilai, serta identitas program Duta Generasi Remaja Indonesia.",
};

export default function TentangPage() {
  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />
      <main className="w-full">
        {/* Hero / Judul halaman */}
        <section className="flex min-h-[40vh] w-full items-center justify-center bg-blue-950 px-6 py-14 md:px-12 md:py-16 lg:px-16">
          <h1 className="text-center text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Tentang Duta Generasi Remaja Indonesia
          </h1>
        </section>

        {/* 1. Sejarah singkat */}
        <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-white py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Bab 2.1
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
              Sejarah Singkat Duta Generasi Remaja Indonesia
            </h2>
          </div>
          <div className="flex flex-col justify-center bg-slate-50 py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <p className="text-lg leading-relaxed text-slate-700">
              Duta Generasi Remaja Indonesia lahir sebagai respons atas kebutuhan
              pembinaan generasi muda Indonesia di tengah dinamika sosial, budaya, dan
              perkembangan teknologi yang semakin pesat. Remaja dan pelajar dipandang
              sebagai aset strategis bangsa yang berada pada fase penting pembentukan
              karakter, nilai, serta kapasitas kepemimpinan yang akan menentukan peran
              mereka di masa depan.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              Atas dasar kebutuhan tersebut, Duta Generasi Remaja Indonesia secara resmi
              mulai dilaksanakan pada tahun 2025 sebagai program pembinaan remaja berskala
              nasional yang diinisiasi oleh CV. Pesona Prestasi Official. Program ini
              dirancang sebagai wadah pengembangan potensi remaja Indonesia secara
              holistik, mencakup penguatan karakter, kepemimpinan, komunikasi, serta
              kepedulian sosial.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              Sejak awal pelaksanaannya, program ini berfokus pada pembinaan soft skills dan
              pembentukan figur remaja inspiratif yang mampu menjadi teladan dan agen
              perubahan di lingkungan sekolah maupun masyarakat. Seiring perkembangannya,
              program ini mengalami perluasan cakupan wilayah dan sasaran peserta,
              melibatkan pelajar tingkat SMP, SMA, hingga mahasiswa dari berbagai daerah
              di Indonesia. Seluruh perkembangan tersebut tetap berpijak pada visi dan
              nilai dasar program.
            </p>
          </div>
        </section>

        {/* 2. Filosofi nama */}
        <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-slate-50 py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Filosofi
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
              Filosofi Nama &quot;Duta Generasi Remaja Indonesia&quot;
            </h2>
            <p className="mt-6 text-slate-600">
              Nama ini mengandung makna konseptual yang mencerminkan tujuan program dalam
              membentuk figur remaja yang berkarakter, berdaya saing, dan memiliki
              kesadaran sosial.
            </p>
          </div>
          <div className="flex flex-col justify-center bg-white py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <ul className="space-y-6 text-slate-700">
              <li>
                <strong className="text-blue-950">Duta</strong> — Menggambarkan peran
                peserta sebagai representasi dan penyampai nilai-nilai positif di
                lingkungan sekolah, komunitas, dan masyarakat. Sebagai duta, peserta
                diharapkan mampu menjadi teladan, penggerak, serta agen perubahan yang
                berkontribusi secara aktif dalam menjawab isu kepemudaan, pendidikan, dan
                sosial.
              </li>
              <li>
                <strong className="text-blue-950">Generasi Remaja</strong> — Menunjukkan
                fokus program pada kelompok usia remaja hingga awal dewasa sebagai fase
                strategis dalam pembentukan karakter, penguatan kepemimpinan, serta
                pengembangan potensi diri. Program diarahkan untuk membina pelajar
                tingkat SMP, SMA, hingga mahasiswa sebagai generasi penerus bangsa.
              </li>
              <li>
                <strong className="text-blue-950">Indonesia</strong> — Mencerminkan
                identitas kebangsaan, semangat persatuan, serta komitmen peserta untuk
                berperan aktif dalam pembangunan nasional. Nilai nasionalisme,
                keberagaman, dan tanggung jawab sosial menjadi landasan utama dalam
                setiap aktivitas dan pembinaan program.
              </li>
            </ul>
          </div>
        </section>

        {/* 3. Filosofi logo + gambar logo */}
        <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-white py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Identitas Visual
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
              Filosofi Logo Duta Generasi Remaja Indonesia
            </h2>
            <div className="mt-8 flex justify-start">
              <Image
                src="/duta-generasi-remaja-indonesia-logo.png"
                alt="Logo Duta Generasi Remaja Indonesia"
                width={200}
                height={200}
                className="h-40 w-40 object-contain md:h-48 md:w-48"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center bg-slate-50 py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <ul className="space-y-5 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>
                <strong className="text-blue-950">Lingkaran</strong> — Kesatuan,
                kebersamaan, dan kesinambungan. Proses pembinaan generasi remaja
                merupakan upaya berkelanjutan yang melibatkan kolaborasi peserta,
                penyelenggara, dan masyarakat.
              </li>
              <li>
                <strong className="text-blue-950">Tulisan &quot;Duta Generasi Remaja Indonesia&quot;</strong>{" "}
                — Menegaskan identitas program sebagai wadah resmi pembinaan remaja
                berskala nasional.
              </li>
              <li>
                <strong className="text-blue-950">Slogan &quot;Suara Kita, Gerak Kita, Berdampak Nyata&quot;</strong>{" "}
                — Suara Kita: hak dan keberanian remaja menyampaikan gagasan; Gerak Kita:
                aksi nyata dan peran sebagai pelaku perubahan; Berdampak Nyata:
                kontribusi yang memberi manfaat konkret bagi masyarakat.
              </li>
              <li>
                <strong className="text-blue-950">Figur manusia</strong> — Posisi dinamis
                dengan tangan terangkat, melambangkan semangat, kepercayaan diri, dan
                kesiapan remaja mengambil peran kepemimpinan.
              </li>
              <li>
                <strong className="text-blue-950">Api/obor</strong> — Semangat juang,
                cita-cita, dan cahaya pengetahuan; motivasi untuk terus belajar dan
                menjunjung nilai moral serta integritas.
              </li>
              <li>
                <strong className="text-blue-950">Padi dan kapas</strong> —
                Kesejahteraan, kemakmuran, dan hasil pembinaan berkelanjutan; nilai
                kebangsaan dan tanggung jawab sosial.
              </li>
              <li>
                <strong className="text-blue-950">Warna biru, emas, merah, hitam</strong>{" "}
                — Biru: kepercayaan dan wawasan; emas: kualitas unggul dan harapan; merah:
                semangat dan keberanian; hitam: keteguhan, kedewasaan, dan integritas.
              </li>
            </ul>
          </div>
        </section>

        {/* 4. Visi, misi, nilai-nilai dasar (6 nilai) */}
        <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-slate-50 py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Arah strategis
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-blue-950 md:text-3xl">
              Visi
            </h2>
            <p className="mt-4 text-lg italic text-slate-700">
              &quot;Menjadi wadah pengembangan generasi remaja Indonesia yang cerdas, berdaya
              saing, berkarakter, dan siap menjadi inspirasi positif bagi bangsa.&quot;
            </p>
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-blue-950 md:text-3xl">
              Misi
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-slate-700">
              <li>Mendorong remaja Indonesia menjadi pribadi yang aktif, kreatif, dan bertanggung jawab</li>
              <li>Mewadahi potensi remaja dalam kepemimpinan, komunikasi, seni, dan sosial kemasyarakatan</li>
              <li>Membangun karakter yang menjunjung nilai moral, nasionalisme, dan budaya Indonesia</li>
              <li>Menjadi jembatan informasi antara remaja dan masyarakat</li>
              <li>Menciptakan role model remaja yang menginspirasi dan menggerakkan perubahan positif</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center bg-white py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <h2 className="text-2xl font-bold tracking-tight text-blue-950 md:text-3xl">
              Nilai-Nilai Dasar (6)
            </h2>
            <ul className="mt-6 space-y-5 text-slate-700">
              <li>
                <strong className="text-blue-950">1. Representasi Suara Remaja</strong> — Perwujudan suara,
                aspirasi, dan kepentingan remaja Indonesia; duta sebagai penyambung
                aspirasi secara santun dan bertanggung jawab.
              </li>
              <li>
                <strong className="text-blue-950">2. Kepemimpinan Partisipatif</strong> — Kemampuan mengajak,
                melibatkan, dan memberdayakan remaja lain; kepemimpinan kolaboratif dan
                inklusif.
              </li>
              <li>
                <strong className="text-blue-950">3. Aksi Sosial Berdampak</strong> — Berpikir kritis, kreatif,
                dan melahirkan ide yang bermanfaat bagi lingkungan sosial.
              </li>
              <li>
                <strong className="text-blue-950">4. Kolaborasi dan Kepedulian Sosial</strong> — Solidaritas,
                kerja sama, empati terhadap isu remaja (kesehatan mental, literasi,
                perundungan, lingkungan).
              </li>
              <li>
                <strong className="text-blue-950">5. Integritas dan Keteladanan</strong> — Kejujuran, etika,
                tanggung jawab; duta sebagai teladan di dunia nyata maupun digital.
              </li>
              <li>
                <strong className="text-blue-950">6. Nasionalisme dan Identitas Bangsa</strong> — Cinta tanah
                air, kebanggaan sebagai remaja Indonesia, komitmen menuju Indonesia Emas
                2045.
              </li>
            </ul>
          </div>
        </section>

        {/* 5. Motto & slogan */}
        <section className="flex min-h-screen w-full flex-col items-center justify-center bg-blue-950 px-6 py-14 md:px-12 md:py-16 lg:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Identitas
          </p>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Motto & Slogan
          </h2>
          <p className="mt-8 text-center text-2xl font-semibold text-amber-400 md:text-3xl">
            Remaja Berkarya, Generasi Berdampak
          </p>
          <p className="mt-4 text-center text-lg italic text-slate-200">
            Suara Kita, Gerak Kita, & Berdampak Nyata
          </p>
          <p className="mt-8 max-w-2xl text-center text-sm text-slate-300">
            Motto ini menegaskan bahwa setiap remaja memiliki potensi untuk berkarya
            secara aktif dan produktif, serta diarahkan untuk menghasilkan dampak positif
            yang nyata bagi masyarakat dan bangsa.
          </p>
        </section>

        {/* 6. Identitas penyelenggara + identitas program */}
        <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-white py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Penyelenggara
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-blue-950 md:text-3xl">
              CV. Pesona Prestasi Official
            </h2>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li><span className="text-slate-500">Bentuk</span> Commanditaire Vennootschap (CV)</li>
              <li><span className="text-slate-500">Bidang</span> Event Organizer dan Pengembangan Sumber Daya Remaja</li>
              <li><span className="text-slate-500">Nomor AHU</span> AHU-0028774-AH.01.14 Tahun 2025</li>
              <li><span className="text-slate-500">Alamat</span> Jl. H. Rais. A. Rachman Gg. Bukit Sebedang No.21, Sungai Jawi, Kec. Pontianak Kota, Kalimantan Barat</li>
              <li><a href="mailto:pesonaprestasiofficial@gmail.com" className="text-amber-600 hover:underline">pesonaprestasiofficial@gmail.com</a></li>
              <li><a href="https://pesonaprestasi.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">pesonaprestasi.com</a></li>
              <li><a href="https://wa.me/6285249485579" className="text-amber-600 hover:underline">+62 852 4948 5579</a></li>
              <li>Instagram @pesona_prestasi.official · TikTok @pesona_prestasi.official · YouTube @pesonaprestasiofficial</li>
            </ul>
            <div className="mt-8 flex flex-col items-start gap-2">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500">Legalitas Perusahaan</span>
              <div className="relative h-32 w-32 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                <Image
                  src="/company-legality-qr.webp"
                  alt="QR kode verifikasi legalitas CV. Pesona Prestasi Official"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-slate-50 py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Program
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-blue-950 md:text-3xl">
              Identitas Program Duta Generasi Remaja Indonesia
            </h2>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li><span className="text-slate-500">Nama Program</span> Duta Generasi Remaja Indonesia</li>
              <li><a href="mailto:dutagenerasiremajaindonesia@gmail.com" className="text-amber-600 hover:underline">dutagenerasiremajaindonesia@gmail.com</a></li>
              <li><a href="https://wa.me/6285961015917" className="text-amber-600 hover:underline">+62 859-6101-5917</a></li>
              <li>Instagram <a href="https://instagram.com/duta_dugri" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">@duta_dugri</a></li>
            </ul>
          </div>
        </section>

        <MarqueeTicker />
        <SiteFooter
          domainName={siteData.domain_name}
          organizerName={siteData.organizer_name}
        />
      </main>
    </div>
  );
}
