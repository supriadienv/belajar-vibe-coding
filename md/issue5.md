# User Registration API Implementation

## Deskripsi Tugas
Tugas ini adalah untuk mengimplementasikan fitur registrasi user baru (Sign Up) untuk aplikasi menggunakan framework Elysia.js. Fitur ini membutuhkan pembuatan struktur tabel database baru dan satu endpoint API.

## 1. Database Schema
Buat tabel `users` di dalam database dengan struktur berikut:
- `id`: integer, auto increment, primary key
- `name`: varchar(255), not null
- `email`: varchar(255), not null, unique
- `password`: varchar(255), not null (Harus menyimpan hasil hash dari bcrypt, BUKAN plain text)
- `createAt`: datetime, default current_timestamp

*Catatan:* Silakan gunakan ORM atau Query Builder yang sudah dikonfigurasi di project ini untuk membuat schema/migration tabelnya.

## 2. Struktur Folder & File
Pastikan kode diletakkan pada arsitektur folder yang sudah ditentukan di dalam `src/`:
- `src/routes/`: Tempat untuk mendefinisikan routing Elysia. Buat file dengan nama `users-routes.ts` di sini.
- `src/services/`: Tempat untuk menyimpan logic bisnis (business logic). Buat file dengan nama `users-services.ts` di sini.

## 3. Spesifikasi API
Buat endpoint API untuk registrasi user baru dengan spesifikasi berikut:

- **Endpoint:** `POST /api/users`
- **Request Body (JSON):**
  ```json
  {
      "name": "Supriadi", 
      "email": "supriadi.env@gmail.com", 
      "password": "rahasia"
  }
  ```

- **Response Body Sukses:**
  ```json
  {
      "data" : "OK"
  }
  ```

- **Response Body Gagal (Jika email sudah terdaftar):**
  ```json
  {
      "error": "Email Sudah terdaftar"
  }
  ```

## 4. Tahapan Implementasi (Langkah demi Langkah)
Sebagai programmer/AI yang mengimplementasikan fitur ini, ikuti urutan langkah-langkah berikut:

**Langkah 1: Setup Database**
- Buat file migration/schema untuk tabel `users` sesuai dengan spesifikasi di bagian "Database Schema".
- Jalankan perintah migration ke database agar tabel `users` benar-benar terbuat di database.

**Langkah 2: Pembuatan Business Logic (Service)**
- Buat file `src/services/users-services.ts`.
- Di dalam file ini, buat sebuah fungsi (misalnya `registerUser`) yang menerima input parameter `name`, `email`, dan `password`.
- Alur fungsi `registerUser`:
  1. Lakukan query ke tabel `users` untuk mengecek apakah `email` yang diinput sudah ada.
  2. Jika sudah ada, lempar sebuah error (throw error) atau kembalikan response gagal.
  3. Jika belum ada, lakukan proses hashing pada `password` menggunakan library `bcrypt`.
  4. Simpan data user baru (berisi `name`, `email`, dan `password` yang sudah di-hash) ke tabel `users`.
  5. Kembalikan tanda sukses ke pemanggil fungsi.

**Langkah 3: Pembuatan Routing (API Endpoint)**
- Buat file `src/routes/users-routes.ts`.
- Buat instance route Elysia untuk endpoint `POST /api/users`.
- Tangkap request body dari user. Akan sangat bagus jika menambahkan validasi tipe data pada request body menggunakan skema validasi bawaan Elysia (TypeBox).
- Di dalam handler route tersebut, panggil fungsi `registerUser` dari service yang dibuat di Langkah 2.
- Gunakan blok `try...catch` untuk menangani prosesnya:
  - Di dalam `try`, jika pemanggilan service sukses, kembalikan JSON `{"data": "OK"}`.
  - Di dalam `catch`, periksa jenis errornya. Jika error tersebut menyatakan bahwa email sudah ada, kembalikan JSON `{"error": "Email Sudah terdaftar"}`. Atur juga HTTP status codenya dengan tepat (misalnya 400 Bad Request).

**Langkah 4: Registrasi Route Utama**
- Buka file utama aplikasi (misalnya `src/index.ts` atau file setup utama Elysia).
- Import routing dari `users-routes.ts` dan daftarkan route tersebut ke instance utama aplikasi Elysia agar endpoint-nya bisa diakses.

**Langkah 5: Testing**
- Jalankan aplikasi secara lokal.
- Lakukan testing menggunakan cURL, Postman, atau REST client lainnya ke endpoint `POST /api/users`.
- Pastikan testing mencakup:
  1. Skenario sukses mendaftarkan user baru.
  2. Skenario gagal ketika mendaftarkan user menggunakan email yang sama.
  3. Pengecekan isi tabel `users` di database untuk memastikan bahwa kolom `password` tersimpan dalam bentuk hash (bukan "rahasia").
