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

export const PHONE_NUMBER = '081320009935';
export const PHONE_DISPLAY = '0813-2000-9935';
export const WA_NUMBER = '6281320009935';

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const siteConfig = {
  name: 'PT Mitra Belanja Jakarta',
  shortName: 'Mitra Belanja',
  phoneNumber: PHONE_NUMBER,
  phoneDisplay: PHONE_DISPLAY,
  waNumber: WA_NUMBER,
  tagline: 'Jasa Belanja & Jastip Pasar Grosir Jakarta',
  description: 'Jasa belanja dan jasa titip terpercaya di pasar grosir Jakarta. Kami bantu carikan barang, cek harga modal toko, belikan, dan kirimkan langsung ke kota Anda di seluruh Indonesia.',
  url: 'https://www.belanjakarta.com',
  operatingHours: 'Senin – Sabtu: 08.00 – 17.00 WIB (Minggu Libur)',
  baseLocation: 'DKI Jakarta (Menjangkau Seluruh Pasar Grosir Jakarta)',
  defaultWaMessage: 'Halo Mitra Belanja, saya mau tanya-tanya seputar jasa belanja di pasar grosir Jakarta.',
  heroWaMessage: 'Halo Mitra Belanja, saya butuh bantuan belanja barang grosir dari Jakarta. Bisa bantu info ketentuannya?',
  howItWorksWaMessage: 'Halo Mitra Belanja, saya ingin tahu alur pemesanan dan estimasi tarif jasa belanja di Jakarta.',
  closingWaMessage: 'Halo Mitra Belanja, saya ada rencana belanja kebutuhan dagang di pasar grosir Jakarta. Bagaimana langkah awalnya ya?',
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
  { label: 'Alur', href: '#cara-kerja', icon: 'ClipboardList' },
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
    id: 'sourcing',
    title: 'Pencarian Barang di Pasar Grosir Jakarta',
    description: 'Kirimkan foto, spesifikasi, atau merk barang yang Anda butuhkan. Tim kami siap menelusuri kios-kios grosir terbaik di Jakarta untuk menemukan produk yang paling sesuai.',
    tag: 'Sourcing Grosir',
  },
  {
    id: 'price-check',
    title: 'Pengecekan Harga Modal & Stok Nyata Toko',
    description: 'Kami cek langsung ketersediaan stok seri, warna, ukuran, dan harga modal grosir di pedagang. Anda mendapatkan foto aktual barang dan konfirmasi harga sebelum transaksi.',
    tag: 'Harga Modal Asli',
  },
  {
    id: 'consolidation',
    title: 'Konsolidasi Barang dari Beberapa Toko/Pasar',
    description: 'Belanja aneka barang dari berbagai toko atau pusat grosir berbeda di Jakarta? Kami kumpulkan semua pesanan Anda menjadi satu paket kargo hemat agar ongkos kirim tidak membengkak.',
    tag: 'Hemat Ongkir',
  },
  {
    id: 'quality-control',
    title: 'Pemeriksaan Fisik & Ketepatan Kuantitas',
    description: 'Kami periksa kesesuaian motif, ukuran, jumlah seri, dan memastikan kondisi fisik barang tidak cacat sebelum proses pembayaran dan pengemasan dilakukan.',
    tag: 'Quality Control',
  },
  {
    id: 'packaging-shipping',
    title: 'Pengemasan Aman & Pengiriman Kargo Se-Indonesia',
    description: 'Barang dibungkus karung atau kardus tebal berlapis plastik tahan air. Kami antar langsung ke kantor kargo langganan Anda (darat, laut, maupun udara) dengan bukti resi jelas.',
    tag: 'Kirim Se-Indonesia',
  },
  {
    id: 'personal-guide',
    title: 'Pendampingan Belanja Langsung (Personal Guide)',
    description: 'Bagi Anda yang datang langsung ke Jakarta untuk kulakan grosir, tim kami siap mendampingi menyusuri lorong pasar, membantu negosiasi harga, dan mengurus logistik angkut barang.',
    tag: 'Pemandu Lapangan',
  },
];

export const steps: StepItem[] = [
  {
    number: '01',
    badge: 'Konsultasi',
    title: 'Kirim Daftar Kebutuhan via WhatsApp',
    description: 'Kirim foto referensi, jenis produk, jumlah yang dibutuhkan, dan target harga Anda. Tim kami akan langsung menyimak dan mendiskusikan opsi terbaik.',
  },
  {
    number: '02',
    badge: 'Cek Lapangan',
    title: 'Tim Kami Meninjau Kios Grosir & Fotokan Stok Nyata',
    description: 'Kami datangi sentra grosir terkait di Jakarta, mengambil foto stok nyata, dan menginformasikan harga modal toko secara terbuka beserta biaya jasa.',
  },
  {
    number: '03',
    badge: 'Pembayaran Aman',
    title: 'Konfirmasi Pesanan & Transfer Pembayaran',
    description: 'Setelah Anda setuju dengan barang dan rincian total biayanya, Anda melakukan transfer pembayaran ke rekening resmi kami agar belanjaan langsung diproses.',
  },
  {
    number: '04',
    badge: 'Kirim ke Kota Anda',
    title: 'Pembelanjaan, Packing Kuat & Pengiriman Kargo',
    description: 'Barang dibeli, dicek ulang kelengkapannya, dipacking kuat, dan diserahkan ke kargo pilihan Anda. Bukti nota asli dan nomor resi pengiriman dikirimkan langsung ke WhatsApp Anda.',
  },
];

export const categories: string[] = [
  'Gamis & Busana Muslim Grosir',
  'Hijab, Khimar & Pashmina',
  'Fashion Trendi, Tas & Sepatu Butik',
  'Mainan Anak & Edukatif Grosir',
  'Souvenir Pernikahan & Perlengkapan Acara',
  'Kemasan Toples, Botol & Plastik Grosir',
  'Batik Pria & Wanita (Serian/Kodi)',
  'Pakaian Anak & Perlengkapan Bayi',
  'Kaos Polos, Distro & Seragam Konveksi',
  'Celana Jeans & Pakaian Harian Grosir',
  'Bahan Kain Rol & Tekstil Kiloan',
  'Sprei, Bedcover & Perlengkapan Kamar',
  'Alat Tulis Kantor & Kebutuhan Sekolah',
  'Elektronik, Alat Listrik & Perkakas Teknik',
  'Aksesoris Fashion, Dompet & Gesper',
  'Kosmetik & Produk Perawatan Grosir',
];

export const faqs: FAQItem[] = [
  {
    question: 'Pasar grosir apa saja di Jakarta yang bisa dibantu belanjakan?',
    answer: 'Kami melayani pembelanjaan di berbagai pasar dan sentra grosir di seluruh wilayah Jakarta. Anda cukup konsultasikan barang atau toko yang ingin Anda beli via WhatsApp, dan tim lapangan kami siap mendatangi lokasi untuk mengecek stok serta membelanjakannya.',
  },
  {
    question: 'Apakah bisa belanja dari beberapa toko sekaligus dalam satu pengiriman?',
    answer: 'Sangat bisa! Ini salah satu keunggulan layanan kami. Anda bisa memesan berbagai macam barang dari beberapa toko atau pasar grosir berbeda di Jakarta. Kami akan kumpulkan dan packing menjadi satu paket kargo terpadu agar biaya kirim jauh lebih hemat.',
  },
  {
    question: 'Berapa tarif jasa belanja di PT Mitra Belanja Jakarta?',
    answer: 'Tarif jasa kami sangat kompetitif dan dihitung transparan di awal, umumnya berupa komisi persentase kecil dari nilai belanja atau biaya flat per koli/kardus tergantung kompleksitas pencarian. Tidak ada biaya tersembunyi; nota asli dari toko selalu kami sertakan.',
  },
  {
    question: 'Apakah ada minimal belanja untuk menggunakan jasa ini?',
    answer: 'Kami melayani pembelian partai grosir (serian, kodi, karton) untuk toko, reseller, dan instansi, maupun pembelian eceran tertentu. Silakan konsultasikan daftar belanjaan Anda kepada admin kami via WhatsApp.',
  },
  {
    question: 'Bagaimana keamanan transaksi pembayaran?',
    answer: 'PT Mitra Belanja Jakarta beroperasi secara profesional dengan legalitas resmi di Jakarta. Seluruh pembayaran belanja dilakukan ke rekening resmi yang terverifikasi setelah kesepakatan harga dan foto stok valid dikonfirmasi.',
  },
  {
    question: 'Kargo apa saja yang bisa digunakan untuk pengiriman?',
    answer: 'Kami bekerja sama dan dapat mengantar ke berbagai pilihan kargo darat, laut, maupun udara sesuai permintaan Anda — seperti Indah Logistik Kargo, Dakota Cargo, Baraka, J&T Cargo, Sentral Cargo, ekspedisi kapal pulau, atau jasa kirim reguler.',
  },
  {
    question: 'Bagaimana jika barang pesanan ternyata habis di pasar?',
    answer: 'Jika stok atau motif persis sedang kosong, tim kami akan memfotokan alternatif model terbaik langsung dari kios saat itu juga. Apabila Anda tidak berkenan dengan alternatif tersebut, dana untuk item tersebut kami kembalikan utuh 100% tanpa potongan.',
  },
  {
    question: 'Bisa bantu belikan dari toko langganan saya sendiri di pasar Jakarta?',
    answer: 'Sangat bisa! Jika Anda sudah memiliki toko atau langganan tertentu di sentra grosir Jakarta, cukup berikan nama kios dan nomor kontaknya. Kami yang akan ambil barang, bayar, dan urus packing serta pengirimannya.',
  },
];
