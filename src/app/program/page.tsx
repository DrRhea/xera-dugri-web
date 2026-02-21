import { Navbar } from "@/components/layout/Navbar";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { SiteFooter } from "@/components/site-footer";
import { siteData } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program | Duta Generasi Remaja Indonesia",
  description:
    "Tahapan pelaksanaan, persyaratan peserta, mekanisme seleksi, sistem penilaian, dan grand final program Duta Generasi Remaja Indonesia.",
};

const TAHAPAN = [
  {
    step: 1,
    label: "Sosialisasi dan Pendaftaran",
    desc: "Sosialisasi daring dan luring melalui media sosial, sekolah, komunitas remaja, serta mitra strategis. Pendaftaran dibuka secara terbuka dan inklusif, proses dilakukan secara digital.",
  },
  {
    step: 2,
    label: "Seleksi Administrasi",
    desc: "Verifikasi kelengkapan dan kesesuaian dokumen peserta dengan persyaratan program sebagai penilaian awal terhadap komitmen dan kesiapan calon peserta.",
  },
  {
    step: 3,
    label: "Penilaian Pemahaman dan Komitmen",
    desc: "Tanpa wawancara tatap muka. Peserta menjawab soal esai, studi kasus, dan pertanyaan reflektif untuk menggali pemahaman peran dan nilai program, pola pikir kepemimpinan, kepekaan isu remaja, serta komitmen.",
  },
  {
    step: 4,
    label: "Pembinaan dan Karantina",
    desc: "Pembekalan intensif: kepemimpinan, komunikasi publik, etika dan kepribadian, literasi digital, kreativitas, penguatan karakter. Termasuk simulasi, diskusi kelompok, proyek mini, dan evaluasi sikap.",
  },
  {
    step: 5,
    label: "Grand Final dan Pengukuhan",
    desc: "Peserta menunjukkan kompetensi melalui presentasi gagasan, penampilan bakat, sesi tanya jawab, dan pemaparan rencana kontribusi sosial. Peserta terpilih dikukuhkan secara resmi sebagai Duta Generasi Remaja Indonesia.",
  },
  {
    step: 6,
    label: "Masa Penugasan dan Aksi Nyata",
    desc: "Duta menjalankan peran sebagai agen perubahan melalui kegiatan edukatif, kampanye sosial, advokasi isu remaja, serta kolaborasi dengan sekolah dan komunitas.",
  },
  {
    step: 7,
    label: "Monitoring, Evaluasi, dan Pelaporan",
    desc: "Sistem monitoring dan evaluasi berkala selama masa penugasan: keaktifan duta, capaian program kerja, dampak sosial, kepatuhan nilai dan etika. Hasil dituangkan dalam laporan periodik.",
  },
  {
    step: 8,
    label: "Keberlanjutan Program dan Peran Alumni",
    desc: "Jejaring alumni sebagai mitra strategis. Alumni berkontribusi sebagai mentor, narasumber, dan penggerak kegiatan sosial serta edukatif.",
  },
];

export default function ProgramPage() {
  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />
      <main className="w-full">
        {/* Hero */}
        <section className="flex min-h-[40vh] w-full items-center justify-center bg-blue-950 px-6 py-14 md:px-12 md:py-16 lg:px-16">
          <h1 className="text-center text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Program
          </h1>
        </section>

        {/* Roadmap intro */}
        <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-white py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Bab 4
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
              Roadmap Program
            </h2>
            <p className="mt-6 text-slate-600">
              Roadmap dirancang sebagai acuan pelaksanaan, pengembangan, dan keberlanjutan program. Setiap fase memperkuat kapasitas personal, kepemimpinan, serta kemampuan peserta dalam menyuarakan isu dan menggerakkan aksi nyata.
            </p>
          </div>
          <div className="flex flex-col justify-center bg-slate-50 py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <p className="text-lg leading-relaxed text-slate-700">
              Pelaksanaan program dilaksanakan melalui tahapan utama yang saling terintegrasi dan berkesinambungan—dari sosialisasi dan pendaftaran hingga masa penugasan, monitoring, dan peran alumni.
            </p>
          </div>
        </section>

        {/* Tahapan Pelaksanaan */}
        <section className="bg-white py-12 pl-6 pr-6 md:py-20 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
            Tahapan
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
            Tahapan Pelaksanaan Program
          </h2>
          <ul className="mt-10 space-y-10 md:mt-14">
            {TAHAPAN.map(({ step, label, desc }) => (
              <li key={step} className="flex gap-6">
                <span className="text-3xl font-bold tabular-nums text-amber-500 md:text-4xl">
                  {String(step).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-950 md:text-2xl">
                    {label}
                  </h3>
                  <p className="mt-2 text-slate-600">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Persyaratan Peserta */}
        <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-slate-50 py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Bab 5.1
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
              Persyaratan Peserta
            </h2>
            <p className="mt-6 text-slate-600">
              Peserta wajib memenuhi persyaratan umum berikut.
            </p>
          </div>
          <div className="flex flex-col justify-center bg-white py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <ol className="list-inside space-y-3 text-slate-700 md:list-decimal">
              <li>Pendaftaran terbuka bagi pelajar se-Indonesia.</li>
              <li>Terbuka untuk pelajar dari seluruh wilayah Indonesia tanpa membedakan latar belakang daerah, sekolah, maupun sosial.</li>
              <li>Tidak sedang menjabat sebagai duta pada program sejenis lainnya selama masa seleksi dan penugasan.</li>
              <li>Laki-laki atau perempuan berusia 14–21 tahun pada tahun pelaksanaan program.</li>
              <li>Sehat jasmani dan rohani, berpenampilan rapi, sopan, dan mencerminkan etika pelajar.</li>
              <li>Memiliki kemampuan public speaking dan/atau pembuatan konten kreatif menjadi nilai tambah.</li>
              <li>Memiliki kepedulian terhadap isu pendidikan, keremajaan sosial, pengetahuan umum, serta peningkatan literasi.</li>
              <li>Bersedia mengemban amanah dan melaksanakan tugas serta kewajiban sebagai Duta Generasi Remaja Indonesia.</li>
              <li>Bersedia berperan aktif mempromosikan dan mendukung program secara konsisten.</li>
              <li>Mengisi formulir pendaftaran resmi dan mengikuti akun media sosial resmi program.</li>
            </ol>
          </div>
        </section>

        {/* Ketentuan Pendaftaran */}
        <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-white py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Bab 5.2
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
              Ketentuan Pendaftaran dan Partisipasi
            </h2>
          </div>
          <div className="flex flex-col justify-center bg-slate-50 py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <ul className="space-y-3 text-slate-700">
              <li>Membaca dan memahami seluruh informasi pendaftaran dengan seksama.</li>
              <li>Membagikan poster dan caption resmi ke minimal 5 grup WhatsApp, Telegram, atau media sejenis.</li>
              <li>Mengikuti akun media sosial resmi program.</li>
              <li>Mengunggah twibbon dan caption resmi di feed Instagram pribadi serta mention minimal 10 teman.</li>
              <li>Screenshot bukti berbagi poster dan unggah twibbon diunggah saat pengisian formulir.</li>
              <li>Poster, caption, dan twibbon resmi dapat diunduh melalui tautan di bio Instagram resmi program.</li>
              <li>Formulir pendaftaran diisi secara daring melalui tautan resmi di media publikasi.</li>
              <li>Finalis diwajibkan membayar Biaya Pembinaan Program (Commitment Fee) sebagai bentuk keseriusan mengikuti seluruh rangkaian program.</li>
            </ul>
          </div>
        </section>

        {/* Mekanisme Seleksi */}
        <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-slate-50 py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Bab 5.3
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
              Mekanisme Seleksi
            </h2>
            <p className="mt-6 text-slate-600">
              Seleksi dilaksanakan secara bertahap dan berjenjang dengan prinsip keterbukaan, keadilan, dan objektivitas.
            </p>
          </div>
          <div className="flex flex-col justify-center bg-white py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <ol className="list-inside space-y-4 text-slate-700 md:list-decimal">
              <li><strong className="text-blue-950">Pendaftaran</strong> — Mengisi formulir dan mengunggah dokumen persyaratan secara daring.</li>
              <li><strong className="text-blue-950">Seleksi Administrasi</strong> — Verifikasi kelengkapan dan keabsahan dokumen. Peserta yang memenuhi lolos ke tahap berikutnya.</li>
              <li><strong className="text-blue-950">Seleksi Penilaian Pemahaman dan Komitmen</strong> — Soal esai, studi kasus, dan pertanyaan reflektif untuk menilai pemahaman peran dan nilai program, pola pikir kepemimpinan, kepekaan isu remaja, kemampuan merumuskan solusi, serta komitmen.</li>
              <li><strong className="text-blue-950">Penetapan Finalis dan Komitmen Kepesertaan</strong> — Finalis menyatakan komitmen melalui pembayaran Biaya Pembinaan Program (Commitment Fee). Finalis berhak memperoleh pembinaan, materi, sertifikat, atribut, pendampingan, dan hak mengikuti hingga pengukuhan.</li>
            </ol>
          </div>
        </section>

        {/* Sistem Penilaian */}
        <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-white py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Bab 5.4
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
              Sistem Penilaian
            </h2>
            <p className="mt-6 text-slate-600">
              Penilaian meliputi komponen utama: pemahaman visi-misi-nilai, pola pikir kepemimpinan, kepekaan sosial dan empati, kemampuan komunikasi tertulis, serta komitmen dan konsistensi nilai. Jenis asesmen: esai argumentatif dan reflektif, studi kasus berbasis isu remaja, pertanyaan pemecahan masalah dan rencana aksi.
            </p>
          </div>
          <div className="flex flex-col justify-center bg-slate-50 py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <h3 className="text-lg font-semibold text-blue-950">Bobot Penilaian</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Pemahaman nilai dan peran duta: <strong>25%</strong></li>
              <li>Pola pikir kepemimpinan dan analisis isu: <strong>25%</strong></li>
              <li>Kepekaan sosial dan empati: <strong>20%</strong></li>
              <li>Kemampuan merumuskan solusi dan rencana aksi: <strong>20%</strong></li>
              <li>Komitmen dan konsistensi jawaban: <strong>10%</strong></li>
            </ul>
          </div>
        </section>

        {/* Grand Final & Penentuan Pemenang */}
        <section className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-slate-50 py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Bab 5.5 & 5.6
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
              Grand Final & Penentuan Pemenang
            </h2>
          </div>
          <div className="flex flex-col justify-center bg-white py-12 pl-6 pr-6 md:py-0 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
            <p className="text-slate-700">
              <strong className="text-blue-950">Grand Final</strong> merupakan tahap akhir pemilihan. Peserta finalis mengikuti pembinaan lanjutan, penilaian sikap, presentasi gagasan, serta keterlibatan aktif dalam seluruh agenda. Grand Final juga menjadi sarana penguatan karakter, mental, dan kesiapan peserta sebelum dikukuhkan sebagai duta.
            </p>
            <p className="mt-6 text-slate-700">
              <strong className="text-blue-950">Penentuan pemenang</strong> dilakukan berdasarkan akumulasi nilai dari seluruh tahapan seleksi dan penilaian Grand Final. Penilaian oleh dewan juri yang ditunjuk secara profesional dan independen. Pemenang terdiri atas Duta Generasi Remaja Indonesia Utama dan kategori pendukung lainnya sesuai ketentuan panitia. Keputusan dewan juri bersifat objektif, profesional, dan final.
            </p>
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
