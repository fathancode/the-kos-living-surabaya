# The Kos Living Surabaya — Sistem Hunian & Co-Living Terpadu

Aplikasi web terpadu, interaktif, responsif untuk layar handphone (mobile) dan laptop (desktop), tanpa bug, dengan sinkronisasi data antar-peran (Penghuni & Admin) secara instan.

## 🏢 Gambaran Umum
Aplikasi ini menyatukan 3 modul utama:
1. **Portal Masuk (Login & Ecosystem Showcase)**: Autentikasi tabbed (Penghuni vs Admin), form login cepat, showcase keunggulan (QRIS 24/7, Respon Teknisi, Akses PIN Digital), dan WhatsApp OTP modal.
2. **Dashboard Penghuni (Tenant Portal)**: Pantau kamar (Kamar 09 - Kalirungkut UBAYA), tagihan berjalan Oktober 2026, QRIS instant pay dengan countdown dinamis, transfer manual modal, kuitansi digital sah (print/PDF), fasilitas kamar, PIN kunci digital & Wi-Fi copy, tiket pemeliharaan interaktif, dan pengumuman pengelola.
3. **Console Admin (Management Portal)**: Ringkasan KPI operasional (15 kamar, pendapatan, tingkat penagihan dengan circular gauge, tingkat okupansi), denah matriks real-time 15 kamar (Lantai 1 Non-AC & Lantai 2 Premium AC yang dapat diklik untuk kelola status), tabel verifikasi pembayaran transfer manual, tiket darurat & pemeliharaan dengan tombol ubah status, serta unduh rekap.

---

## 📱 Responsivitas Layar HP & Laptop

| Fitur | Layar Handphone (Mobile) | Layar Laptop / Desktop |
|---|---|---|
| **Sidebar Admin** | Slide-over drawer interaktif dengan backdrop blur & tombol hamburger | Sidebar tetap 64px (`w-64`) di sebelah kiri layar |
| **Navigasi Penghuni** | Bottom navigation bar ergonomis yang mudah dijangkau jempol | Header navigasi horizontal lengkap dengan status pengelola |
| **Matriks 15 Kamar** | Grid responsif 2-4 kolom sentuh yang nyaman di HP | Denah 8 kolom (Lt 1) dan 7 kolom (Lt 2) terstruktur rapi |
| **Modal & Pop-up** | Full width / bottom-sheet touch friendly dengan tombol tutup yang jelas | Modal dialog elegan di tengah layar dengan backdrop blur |
| **Tabel Transaksi** | Horizontal scrollable wrapper tanpa clipping/overflow body | Tabel komprehensif dengan status pill dan tombol verifikasi |

---

## ⚡ Fitur Interaktif & Sinkronisasi Real-Time

1. **Floating Role Switcher (Pojok Kanan Bawah)**:
   - Tombol cepat untuk beralih instan antara **Portal Masuk**, **Penghuni (Dimas Arya - KM 09)**, dan **Admin (Pak Budi - Head Manager)**.
   - Tombol **Reset Data** untuk mengembalikan state ke kondisi awal.
   - Tombol minimize/expand agar tidak mengganggu pandangan di layar ponsel.
2. **Simulasi Bayar QRIS Instan**:
   - Di sisi penghuni, klik tombol hijau **"Simulasikan Bayar QRIS Sukses (Instan)"** pada kartu tagihan.
   - Tagihan langsung berstatus **Lunas Terverifikasi**, kuitansi digital resmi langsung terbit, dan riwayat terupdate.
   - Jika beralih ke Console Admin, tingkat penagihan langsung naik dan pendapatan kas bertambah otomatis!
3. **Form Lapor Gangguan Kamar**:
   - Klik **"Lapor Gangguan Kamar"** -> isi kendala -> kirim.
   - Tiket baru (misal `#TKT-107`) langsung muncul di daftar tiket penghuni dan seketika masuk ke antrean tindak lanjut admin.
4. **Verifikasi Transfer Bank (Admin)**:
   - Klik tombol **"Verifikasi"** pada tagihan pending di tabel admin -> status langsung berubah menjadi Lunas dan penghuni menerima status lunas.
5. **Manajemen Matriks Kamar**:
   - Klik kartu kamar apa pun di denah admin -> modal rincian terbuka -> ubah status (Terisi, Tersedia, Maintenance) -> KPI okupansi dan komposisi kamar langsung terhitung ulang.
6. **Kuitansi Digital Sah (e-Receipt)**:
   - Klik tombol lihat kuitansi di mana pun -> muncul modal kuitansi format resmi Indonesia lengkap dengan watermark LUNAS, rincian biaya, terbilang rupiah, dan tombol **Cetak / Unduh PDF**.

---

## 🚀 Cara Menjalankan

Cukup buka file `index.html` langsung di browser apa pun:
- Double click `index.html` (dapat dijalankan via protokol `file:///` tanpa server).
- Atau jalankan dengan web server lokal sederhana (opsional):
  ```bash
  npx serve .
  # atau
  python -m http.server 8000
  ```
- Buka `http://localhost:8000` atau `index.html`.
