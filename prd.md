# Product Requirements Document (PRD)
**Nama Proyek:** Personal Portfolio Website (PHP/Laravel Developer)  
**Versi:** 1.0  
**Status:** Draft  
**Tanggal:** 24 Mei 2024  

---

## 1. Pendahuluan
### 1.1 Latar Belakang
Sebagai Web Developer PHP & Laravel, website portofolio bukan hanya sekadar CV online, melainkan bukti kemampuan teknis, estetika, dan performa. Website ini akan menjadi alat utama untuk menarik klien freelance atau rekruter perusahaan.

### 1.2 Tujuan Produk
1.  **Personal Branding:** Menampilkan identitas sebagai Laravel Developer yang modern.
2.  **Showcase Keahlian:** Membuktikan kemampuan coding melalui proyek nyata dan kualitas website itu sendiri.
3.  **Konversi:** Mengubah pengunjung menjadi klien atau pemberi kerja (melalui kontak/hire).

### 1.3 Target Audiens
*   **HRD / Recruiter:** Mencari kandidat teknis yang kompeten.
*   **Klien Bisnis:** Mencari developer untuk membangun aplikasi web.
*   **Tech Lead / CTO:** Menilai kualitas kode dan arsitektur sistem.

---

## 2. Desain & UI/UX
### 2.1 Gaya Desain (Design Style)
*   **Tema:** Modern Minimalist.
*   **Warna Utama:** **Blue Palette**.
    *   *Primary:* Electric Blue (`#2563EB`) atau Royal Blue.
    *   *Secondary:* Deep Navy (`#0F172A`) untuk background section gelap.
    *   *Accent:* Cyan/Light Blue (`#38BDF8`) untuk hover/animation.
    *   *Neutral:* Putih, Abu-abu muda, dan Abu-abu gelap untuk teks.
*   **Tipografi:**
    *   *Heading:* Sans-serif modern (misal: *Inter, Plus Jakarta Sans, atau Space Grotesk*).
    *   *Body:* Readable sans-serif (misal: *Inter atau Roboto*).
    *   *Code Snippet:* Monospace (misal: *Fira Code atau JetBrains Mono*).
*   **Layout:** Grid-based, banyak *whitespace* (ruang kosong) untuk kesan minimalis.

### 2.2 Animasi & Interaksi (Full Animation)
*   **Page Transition:** Smooth fade-in/slide-up saat pindah halaman.
*   **Scroll Animation:** Elemen muncul (reveal) saat di-scroll (menggunakan library seperti GSAP atau AOS).
*   **Micro-interactions:**
    *   Tombol berubah warna/ukuran saat di-hover.
    *   Kartu proyek memiliki efek *tilt* 3D atau *glow* biru saat kursor mendekat.
    *   Typing effect pada teks headline di Hero Section.
*   **Loading Screen:** Animasi logo inisial atau loader berbentuk kode PHP/Laravel sederhana sebelum website masuk.
*   **Catatan:** Animasi harus *performant* (60fps) dan tidak mengganggu keterbacaan konten.

### 2.3 Responsivitas
*   **Mobile First:** Desain harus sempurna di layar HP (320px+).
*   **Tablet & Desktop:** Layout menyesuaikan (Grid berubah dari 1 kolom ke 2/3 kolom).
*   **Dark Mode:** (Opsional) Toggle switch untuk mode gelap/terang, dengan default sesuai preferensi sistem.

---

## 3. Fitur Fungsional (Functional Requirements)
### 3.1 Halaman Utama (Home / Hero)
*   **Headline:** Teks dinamis (misal: "Building Scalable Apps with [Laravel]").
*   **Sub-headline:** Deskripsi singkat nilai jual.
*   **CTA Button:** "Lihat Proyek" (Primary), "Download CV" (Secondary).
*   **Visual:** Ilustrasi 3D minimalis atau abstrak kode berwarna biru.

### 3.2 Halaman Tentang (About)
*   **Bio:** Cerita singkat profesional.
*   **Skill Bar / Tags:** Visualisasi keahlian (PHP, Laravel, MySQL,html,css,javascript, dll) dengan animasi progress bar atau cloud tags.
*   **Experience Timeline:** Garis waktu vertikal dengan animasi scroll.

### 3.3 Halaman Portofolio (Projects)
*   **Filter:** Kategori (Web App, API, E-commerce, Open Source).
*   **Project Card:**
    *   Thumbnail (Video/GIF lebih disukai untuk animasi).
    *   Judul & Deskripsi Singkat.
    *   Tech Stack Icons.
    *   Link: Live Demo & GitHub Repo.
*   **Detail Proyek (Modal/Page):** Penjelasan studi kasus (Challenge, Solution, Result).

### 3.4 Halaman Blog / Artikel (Opsional tapi Disarankan)
*   List artikel teknis dengan pagination.
*   Fitur pencarian artikel.
*   Syntax highlighting untuk blok kode di dalam artikel.

### 3.5 Halaman Kontak (Contact)
*   **Formulir:** Nama, Email, Subjek, Pesan (dengan validasi real-time).
*   **Info Langsung:** Email klik-untuk-salin, Link LinkedIn, GitHub.
*   **Peta:** (Opsional) Lokasi umum (kota/negara).
*   **Notifikasi:** Success message animasi setelah pesan terkirim.

---

## 4. Spesifikasi Teknis (Tech Stack)
Mengingat ini adalah portofolio Laravel Developer, stack teknologi harus mencerminkan keahlian tersebut.

*   **Backend:** Nextjs
*   **Frontend:**
    *   *Opsi A (Rekomendasi):* **Nextjs** + **Tailwind CSS** + **Alpine.js** + **GSAP** (Untuk animasi kompleks).
*   **Styling:** Tailwind CSS (Utility-first untuk kecepatan & konsistensi).
*   **Animation Library:** GSAP (GreenSock).

---

## 5. Persyaratan Non-Fungsional
### 5.1 Performa
*   **Lighthouse Score:** Minimal 90 untuk Performance, Accessibility, Best Practices, dan SEO.
*   **Load Time:** < 2 detik pada koneksi 4G.
*   **Image Optimization:** Format WebP/AVIF, lazy loading.

### 5.2 Keamanan
*   **SSL:** HTTPS Wajib.
*   **Protection:** CSRF Protection, SQL Injection Prevention (Eloquent ORM), XSS Sanitization.
*   **Rate Limiting:** Pada form kontak untuk mencegah spam.
*   **Headers:** Security headers (HSTS, X-Frame-Options, dll).

### 5.3 SEO (Search Engine Optimization)
*   Sitemap.xml & Robots.txt otomatis.
*   Open Graph Tags (untuk preview link yang bagus di WhatsApp/LinkedIn).
*   Schema Markup (Person/Organization).

---

## 6. Konten & Aset yang Dibutuhkan
1.  **Foto Profil:** Resolusi tinggi, background bersih.
2.  **Logo Personal:** Inisial atau ikon minimalis (SVG).
3.  **Screenshot Proyek:** Mockup device (laptop/HP) yang menampilkan hasil kerja.
4.  **Teks Copywriting:** Bio, Deskripsi Proyek, Artikel Blog.
5.  **File CV:** Format PDF terbaru.

---

## 7. Kriteria Keberhasilan (Success Metrics)
1.  Website berhasil di-deploy dengan domain `.com` atau `.dev`.
2.  Skor Google Lighthouse > 90.
3.  Tidak ada bug kritis pada form kontak.
4.  Animasi berjalan halus di perangkat mobile.
5.  Kode sumber (jika dibuka sebagian) mengikuti standar PSR-12.

---

## 8. Catatan Khusus untuk Developer
*   **Jangan Over-Engineering:** Karena ini portofolio, jangan buat arsitektur terlalu rumit kecuali untuk demonstrasi. Fokus pada kecepatan dan keindahan.
*   **Kode sebagai Bukti:** Pertimbangkan untuk membuat halaman `/source` atau link GitHub yang menonjol di footer, karena rekruter teknis akan mengecek kualitas kode website portofolio itu sendiri (View Source).
*   **Warna Biru:** Pastikan kontras warna biru dengan teks putih/hitam memenuhi standar aksesibilitas (WCAG).

---
