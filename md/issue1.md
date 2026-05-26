# Project Setup: Bun, ElysiaJS, dan Drizzle (MySQL)

## Tujuan
Membuat kerangka awal (scaffolding) project backend menggunakan ekosistem Bun. Project ini akan menggunakan ElysiaJS sebagai web framework dan Drizzle ORM untuk berinteraksi dengan database MySQL.

## Kebutuhan (Dependencies)
- Runtime: Bun
- Web Framework: ElysiaJS
- Database: MySQL
- ORM: Drizzle ORM
- Database Driver: `mysql2` (atau driver MySQL lain yang kompatibel dengan Drizzle & Bun)

## Langkah-langkah Implementasi (High Level)

1. **Inisialisasi Project Bun**
   - Lakukan inisialisasi project Bun di direktori saat ini.
   - Pastikan file konfigurasi standar seperti `package.json` telah disiapkan.

2. **Instalasi Framework ElysiaJS**
   - Install dependency utama untuk ElysiaJS menggunakan package manager Bun.
   - Buat file utama (entry point) dan siapkan satu routing/endpoint sederhana (misalnya route `GET /` yang mengembalikan respons "Hello World").

3. **Instalasi dan Konfigurasi Drizzle ORM & MySQL**
   - Install Drizzle ORM, Drizzle Kit, dan driver database MySQL yang diperlukan.
   - Buat file konfigurasi untuk melakukan koneksi ke database. Gunakan environment variables (`.env`) untuk menyimpan detail kredensial database.
   - Definisikan satu schema tabel database awal yang sangat sederhana.
   - Setup konfigurasi Drizzle Kit agar siap digunakan untuk proses generate dan push migrasi ke database.

4. **Penyesuaian Script & Verifikasi**
   - Tambahkan script untuk menjalankan aplikasi di mode development (dengan fitur *hot-reload*) pada `package.json`.
   - Pastikan aplikasi dapat berjalan tanpa error dan terhubung ke database.
