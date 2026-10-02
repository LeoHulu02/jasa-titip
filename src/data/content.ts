export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  isAction?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  badge: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

const WA_NUMBER = import.meta.env.PUBLIC_WA_NUMBER || '6281299887766';

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const siteConfig = {
  name: 'PT Mitra Belanja Jakarta',
  shortName: 'Mitra Belanja',
  tagline: 'Jasa Belanja & Jastip Terpercaya Pasar Tanah Abang',
  description: 'Bantu carikan, belikan, dan kirimkan barang tekstil & fashion dari Pasar Tanah Abang langsung ke kota Anda di seluruh Indonesia. Transparan, amanah, tanpa harus ke Jakarta.',
  url: 'https://mitrabelanja.co.id',
  operatingHours: 'Senin – Sabtu: 08.00 – 16.00 WIB (Minggu Libur)',
  baseLocation: 'Kawasan Pasar Tanah Abang, Jakarta Pusat',
  defaultWaMessage: 'Halo Mitra Belanja, saya ingin konsultasi jasa belanja dari Tanah Abang.',
  heroWaMessage: 'Halo Mitra Belanja, saya ingin belanja dari Tanah Abang. Bisa bantu carikan barang?',
  howItWorksWaMessage: 'Halo Mitra Belanja, saya ingin tahu cara pesan dan tarif belanja dari Tanah Abang.',
  closingWaMessage: 'Halo Mitra Belanja, saya siap belanja dari Tanah Abang. Mohon info nomor rekening & alurnya.',
};

export const desktopNavLinks: NavItem[] = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Kategori', href: '#kategori' },
  { label: 'FAQ', href: '#faq' },
];

export const mobileBottomNavLinks: NavItem[] = [
  { label: 'Home', href: '#hero', icon: 'Home' },
  { label: 'Layanan', href: '#layanan', icon: 'ShoppingBag' },
  { label: 'Cara Kerja', href: '#cara-kerja', icon: 'ClipboardList' },
  { label: 'FAQ', href: '#faq', icon: 'HelpCircle' },
  { 
    label: 'WhatsApp', 
    href: getWhatsAppUrl(siteConfig.defaultWaMessage), 
    icon: 'MessageCircle', 
    isAction: true 
  },
];

export const services: ServiceItem[] = [
  {
    id: 'search',
    title: 'Pencarian Barang Sesuai Request Spesifik',
    description: 'Kirimkan contoh foto, deskripsi bahan, atau merk yang Anda cari. Tim kami bergerak langsung menyusuri kios-kios grosir Tanah Abang hingga menemukan opsi terbaik.',
    tag: 'Sourcing Lapangan',
  },
  {
    id: 'price-check',
    title: 'Pengecekan Harga & Ketersediaan Nyata',
    description: 'Kami cek langsung ketersediaan seri warna/ukuran dan harga grosir partai di toko. Anda mendapat foto barang dan konfirmasi harga real-time sebelum transaksi.',
    tag: 'Harga Toko Langsung',
  },
  {
    id: 'quality-control',
    title: 'Pemeriksaan Kondisi & Kuantitas Fisik',
    description: 'Kami pastikan kesesuaian jumlah seri, motif, ukuran, serta cek fisik sederhana agar barang yang dikirim bebas cacat jahitan atau noda kotor.',
    tag: 'Quality Check',
  },
  {
    id: 'packaging-shipping',
    title: 'Pengemasan Rapi & Pengiriman Ekspedisi/Kargo',
    description: 'Barang dibungkus karung atau kardus tebal berlapis plastik tahan air. Kami antar langsung ke kantor kargo langganan Anda (Indah Kargo, Dakota, J&T Cargo, dll.).',
    tag: 'Kirim Se-Indonesia',
  },
  {
    id: 'escort',
    title: 'Pendampingan Belanja Langsung (Personal Guide)',
    description: 'Khusus bagi Anda yang datang langsung ke Jakarta namun butuh pemandu lapangan yang menguasai lorong, blok, dan perbandingan harga di Tanah Abang.',
    tag: 'Layanan Pendamping',
  },
];

export const steps: StepItem[] = [
  {
    number: '01',
    badge: 'Langkah Pertama',
    title: 'Kirim Foto & Rincian Kebutuhan via WhatsApp',
    description: 'Cukup kirim foto referensi, jenis bahan, jumlah (seri/kodi), dan estimasi budget Anda. Admin kami akan langsung merespons dan mencatat rincian pesanan.',
  },
  {
    number: '02',
    badge: 'Cek Lapangan',
    title: 'Tim Kami Menyisir Kios & Memberi Konfirmasi Foto',
    description: 'Kami turun ke blok pasar yang relevan, memfotokan stok aktual, motif terkini, dan menginformasikan harga modal toko secara terbuka beserta biaya jasa.',
  },
  {
    number: '03',
    badge: 'Pembayaran Aman',
    title: 'Konfirmasi Pesanan & Transfer Pembayaran',
    description: 'Setelah Anda menyetujui barang dan rincian total biaya, Anda melakukan transfer ke rekening resmi kami agar pembelian bisa segera dieksekusi hari itu juga.',
  },
  {
    number: '04',
    badge: 'Kirim ke Kota Anda',
    title: 'Pembelian, Pengecekan, Packing & Pengiriman Kargo',
    description: 'Barang dibeli, dicek kelengkapannya, dipacking kuat, dan diserahkan ke kargo pilihan Anda. Bukti nota toko dan nomor resi kargo kami kirimkan langsung ke WhatsApp Anda.',
  },
];

export const categories: string[] = [
  'Gamis & Busana Muslim',
  'Hijab, Khimar & Pashmina',
  'Batik Pria & Wanita (Solo, Jogja, Pekalongan)',
  'Kemeja & Pakaian Kerja',
  'Pakaian Anak & Perlengkapan Bayi',
  'Kaos Polos, Distro & Sablon Partai',
  'Seragam Sekolah & Dinas/Komunitas',
  'Sprei, Bedcover & Handuk Hotel/Rumahan',
  'Bahan Kain Rol & Kiloan',
  'Celana Jeans & Celana Chino Grosir',
  'Mukena Bordir & Katun Rayon',
  'Aksesoris Busana & Gesper/Ikat Pinggang',
];

export const faqs: FAQItem[] = [
  {
    question: 'Berapa tarif jasa belanja di PT Mitra Belanja Jakarta?',
    answer: 'Tarif jasa kami sangat kompetitif dan dihitung transparan di awal, umumnya berupa komisi persentase kecil dari nilai belanja atau biaya flat per koli/kardus tergantung kompleksitas pencarian. Tidak ada biaya tersembunyi; nota asli dari toko Tanah Abang selalu kami sertakan.',
  },
  {
    question: 'Apakah ada minimal belanja untuk menggunakan jasa ini?',
    answer: 'Kami melayani belanja partai grosir (serian/kodi) untuk kebutuhan toko baju, reseller, dan instansi, maupun pembelian eceran dalam jumlah tertentu. Konsultasikan daftar belanjaan Anda kepada admin kami via WhatsApp.',
  },
  {
    question: 'Bagaimana keamanan transaksi pembayaran?',
    answer: 'PT Mitra Belanja Jakarta beroperasi secara profesional dengan alamat operasional jelas di Tanah Abang. Seluruh pembayaran belanja dilakukan ke rekening resmi yang terverifikasi setelah kesepakatan harga dan foto stok valid dikonfirmasi.',
  },
  {
    question: 'Kargo apa saja yang bisa digunakan untuk pengiriman?',
    answer: 'Kami bekerja sama dan dapat mengantar ke berbagai pilihan kargo darat, laut, maupun udara sesuai permintaan Anda — seperti Indah Logistik Kargo, Dakota Cargo, Baraka, J&T Cargo, Karyati, Sentral Cargo, ekspedisi kapal pulau, atau jasa kirim reguler.',
  },
  {
    question: 'Bagaimana jika barang pesanan ternyata habis di pasar?',
    answer: 'Jika stok atau motif persis sedang kosong, tim kami akan memfotokan alternatif model terbaik langsung dari toko saat itu juga. Apabila Anda tidak berkenan dengan alternatif tersebut, dana untuk item tersebut kami kembalikan utuh 100% tanpa potongan.',
  },
  {
    question: 'Bisa bantu belikan dari toko langganan saya sendiri di Tanah Abang?',
    answer: 'Sangat bisa! Jika Anda sudah memiliki toko atau langganan tertentu di Blok A, Blok B, Blok F, Jembatan Metro, atau Pusat Grosir Tanah Abang, cukup berikan nama kios dan nomor kontaknya. Kami yang akan ambil barang, bayar, dan urus packing serta pengirimannya.',
  },
];
