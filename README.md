# Duta Generasi Remaja Indonesia

Website company profile untuk Duta Generasi Remaja Indonesia dengan Next.js (App Router), TypeScript, dan Tailwind CSS.

## Ringkasan Konten
- Motto: Remaja Berkarya, Generasi Berdampak
- Slogan: Suara Kita, Gerak Kita, & Berdampak Nyata
- Penyelenggara: CV. Pesona Prestasi Official

## Struktur Utama
- src/app: routing dan layout utama
- src/components: komponen UI (maks 30 baris per komponen)
- src/lib: data, util, dan koneksi database
- src/types: tipe data (snake_case untuk data JSON/DB)

## Konfigurasi Database
Koneksi siap untuk Vercel Postgres dan Supabase di:
- src/lib/db.ts

Variabel lingkungan yang disiapkan:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY

Catatan: Setiap proses fetching wajib menggunakan try-catch dengan log error yang jelas.

## Debug & Launch
Gunakan VS Code Run and Debug untuk menjalankan konfigurasi Next.js secara lokal sesuai kebutuhan tim.
