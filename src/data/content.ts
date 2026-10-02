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

export interface MarketPhoto {
  id: string;
  src: string;
  title: string;
  location: string;
  tag: string;
  description: string;
  width: number;
  height: number;
  aspectRatio: string;
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
  address: 'Jl. Kebon Kacang V No. 46, Tanah Abang, Jakarta Pusat',
  operatingHours: 'Senin – Sabtu: 08.00 – 17.00 WIB (Minggu Libur)',
  baseLocation: 'Jl. Kebon Kacang V No. 46, Tanah Abang, Jakarta Pusat',
  defaultWaMessage: 'Halo Mitra Belanja, saya mau tanya-tanya seputar jasa belanja di pasar grosir Jakarta.',
  heroWaMessage: 'Halo Mitra Belanja, saya butuh bantuan belanja barang grosir dari Jakarta. Bisa bantu info ketentuannya?',
  howItWorksWaMessage: 'Halo Mitra Belanja, saya ingin tahu alur pemesanan dan estimasi tarif jasa belanja di Jakarta.',
  closingWaMessage: 'Halo Mitra Belanja, saya ada rencana belanja kebutuhan dagang di pasar grosir Jakarta. Bagaimana langkah awalnya ya?',
};

export const marketPhotos: MarketPhoto[] = [
  {
    id: 'tanah-abang-blok-a',
    src: '/image-1.jpeg',
    title: 'Sentra Grosir Blok A Tanah Abang',
    location: 'Tanah Abang, Jakarta Pusat',
    tag: 'Sentra Busana & Tekstil',
    description: 'Pusat grosir pakaian muslim, gamis, busana pria/wanita, dan tekstil terbesar di Asia Tenggara.',
    width: 768,
    height: 1024,
    aspectRatio: '3/4',
  },
  {
    id: 'toko-gudang-baju-grosir',
    src: '/image-2.jpeg',
    title: 'Toko & Gudang Grosir Busana',
    location: 'Toko & Gudang Grosir Pakaian Jakarta',
    tag: 'Pengecekan Fisik & Stok',
    description: 'Pengecekan langsung tumpukan stok seri, mutu bahan kain, jahitan, dan negosiasi harga modal di toko atau gudang grosir.',
    width: 1000,
    height: 667,
    aspectRatio: '3/2',
  },
  {
    id: 'suasana-atrium-pasar',
    src: '/image-3.jpeg',
    title: 'Suasana Hunting & Transaksi Grosir',
    location: 'Atrium Niaga Grosir Jakarta',
    tag: 'Aktivitas Belanja Nyata',
    description: 'Tim kami menyusuri setiap lorong pasar grosir untuk menemukan supplier tangan pertama dengan harga terbaik.',
    width: 1000,
    height: 667,
    aspectRatio: '3/2',
  },
  {
    id: 'koridor-toko-bertingkat',
    src: '/image-4.jpeg',
    title: 'Pertokoan Grosir Bertingkat',
    location: 'Pusat Niaga Grosir Jakarta',
    tag: 'Ribuan Distributor Toko',
    description: 'Menjangkau distributor tekstil, pakaian jadi, seragam partai besar, hingga perlengkapan busana daerah.',
    width: 1200,
    height: 800,
    aspectRatio: '3/2',
  },
  {
    id: 'pasar-cipulir',
    src: '/image-5.jpeg',
    title: 'Sentra Grosir Pasar Cipulir',
    location: 'Cipulir, Jakarta Selatan',
    tag: 'Sentra Busana & Konveksi Murah',
    description: 'Pusat grosir celana, kaos, daster, dan pakaian harian dengan harga modal konveksi langsung dari produsen.',
    width: 800,
    height: 600,
    aspectRatio: '4/3',
  },
  {
    id: 'gedung-grosir-termurah',
    src: '/image-6.jpeg',
    title: 'Pusat Grosir Termurah Jakarta',
    location: 'Sentra Perdagangan Grosir Jakarta',
    tag: 'Bisa Grosir & Eceran Partai',
    description: 'Akses ke supplier termurah yang melayani pembelian grosir partai kodi maupun eceran partai untuk toko daerah.',
    width: 479,
    height: 640,
    aspectRatio: '3/4',
  },
  {
    id: 'pasar-bogor-sepatu-sandal',
    src: '/image-7.jpeg',
    title: 'Blok F Trade Center Pasar Kebon Kembang',
    location: 'Pasar Kebon Kembang, Kota Bogor',
    tag: 'Sentra Sepatu & Sandal Termurah',
    description: 'Pusat kulakan aneka sepatu pria/wanita, sandal, selop, dan alas kaki grosir termurah langsung dari produsen lokal dan distributor tangan pertama.',
    width: 500,
    height: 500,
    aspectRatio: '1/1',
  },
];

export const desktopNavLinks: NavItem[] = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Dokumentasi', href: '#dokumentasi' },
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
    description: 'Kirimkan foto, spesifikasi, atau merk barang yang Anda butuhkan. Tim kami siap menelusuri toko atau gudang grosir terbaik di Jakarta untuk menemukan produk yang paling sesuai.',
    tag: 'Sourcing Grosir',
  },
  {
    id: 'price-check',
    title: 'Cek Modal, Foto Stok & Live Video Call di Toko/Gudang',
    description: 'Kami cek langsung ketersediaan stok seri, warna, ukuran, dan harga modal grosir di pedagang. Anda bisa meminta tim lapangan kami untuk Video Call via WhatsApp langsung dari toko atau gudang grosir untuk melihat fisik barang secara real-time.',
    tag: 'Cek Fisik & Video Call',
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
    badge: 'Tinjau Toko/Gudang',
    title: 'Tim Tinjau Toko atau Gudang Grosir & Live Video Call',
    description: 'Kami datangi toko atau gudang grosir terkait di sentra perdagangan, fotokan stok nyata, dan bisa langsung Video Call jika Anda ingin melihat fisik barang, warna, atau motif langsung dari lokasi.',
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
  'Sepatu, Sandal & Selop Grosir (Sentra Bogor)',
  'Fashion Trendi, Tas & Aksesoris Butik',
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
    question: 'Apakah saya bisa minta video call untuk melihat barang secara langsung di toko atau gudang grosir?',
    answer: 'Sangat bisa! Tim lapangan kami siap melakukan WhatsApp Video Call langsung dari toko atau gudang grosir di sentra perdagangan. Anda bisa melihat langsung detail bahan, kecerahan warna asli, kerapian jahitan, dan tumpukan stok seri sebelum memutuskan transaksi belanja.',
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
    answer: 'Jika stok atau motif persis sedang kosong, tim kami akan memfotokan alternatif model terbaik langsung dari toko atau gudang grosir saat itu juga. Apabila Anda tidak berkenan dengan alternatif tersebut, dana untuk item tersebut kami kembalikan utuh 100% tanpa potongan.',
  },
  {
    question: 'Bisa bantu belikan dari toko langganan saya sendiri di pasar Jakarta?',
    answer: 'Sangat bisa! Jika Anda sudah memiliki toko atau langganan tertentu di sentra grosir Jakarta, cukup berikan nama toko/gudang dan nomor kontaknya. Kami yang akan ambil barang, bayar, dan urus packing serta pengirimannya.',
  },
];
