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
  operatingHours: 'Senin - Sabtu: 08.00 - 17.00 WIB (Minggu Libur)',
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
    title: 'Pasar Grosir Cipulir',
    location: 'Cipulir, Jakarta Selatan',
    tag: 'Pusat Pakaian Murah',
    description: 'Pusat pakaian murah, busana harian, celana, daster, dan serian konveksi langsung dari produsen grosir.',
    width: 1000,
    height: 667,
    aspectRatio: '3/2',
  },
  {
    id: 'pasar-senen-jaya',
    src: '/pasar-senen.jpeg',
    title: 'Pasar Senen Jaya',
    location: 'Senen, Jakarta Pusat',
    tag: 'Grosir Tas, Jam & Kacamata',
    description: 'Pusat grosir tas murah lokal dan import, jam tangan, dan kacamata murah.',
    width: 1254,
    height: 1254,
    aspectRatio: '1/1',
  },
  {
    id: 'pasar-jatinegara',
    src: '/pasar-jatinegara.jpeg',
    title: 'Pasar Grosir Jatinegara',
    location: 'Jatinegara, Jakarta Timur',
    tag: 'Grosir Sepatu & Pakaian Anak',
    description: 'Pusat grosir sepatu fashion dan pakaian stelan anak murah.',
    width: 1254,
    height: 1254,
    aspectRatio: '1/1',
  },
  {
    id: 'gedung-grosir-termurah',
    src: '/image-6.jpeg',
    title: 'Pasar Grosir Asemka',
    location: 'Asemka, Jakarta Barat',
    tag: 'Pusat Aksesoris & Kosmetik Murah',
    description: 'Pusat aksesoris, kosmetik murah, mainan, souvenir, dan pernak-pernik grosir dengan harga modal tangan pertama.',
    width: 479,
    height: 640,
    aspectRatio: '3/4',
  },
  {
    id: 'pasar-bogor-sepatu-sandal',
    src: '/image-7.jpeg',
    title: 'Pasar Grosir Kebon Kembang Bogor',
    location: 'Pasar Kebon Kembang, Kota Bogor',
    tag: 'Sentra Sepatu & Sandal Bogor',
    description: 'Pusat belanja aneka sepatu pria/wanita, sandal, selop, dan alas kaki grosir langsung dari produsen lokal dan distributor tangan pertama di Bogor.',
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
    title: 'Hunting Stok & Supplier Termurah',
    description: 'Kirim foto atau merk barang. Kami carikan toko grosir fisik dengan harga modal terbaik di Jakarta.',
    tag: 'Sourcing Grosir',
  },
  {
    id: 'price-check',
    title: 'Live Video Call & Cek Fisik Langsung',
    description: 'Pantau dan lihat langsung kondisi barang secara nyata, via WhatsApp video call oleh team agency kami',
    tag: 'Cek Fisik & Video Call',
  },
  {
    id: 'consolidation',
    title: 'Gabung Banyak Toko Jadi 1 Kargo Hemat',
    description: 'Belanja dari aneka pasar grosir disatukan ke satu paket kiriman agar ongkos kargo jauh lebih hemat.',
    tag: 'Hemat Ongkir',
  },
  {
    id: 'quality-control',
    title: 'QC Cacat, Nomor Seri & Jumlah Kodi',
    description: 'Kami memastikan kembali kondisi produk dalam keadaan baik dan layak, serta memastikan jumlah sesuai dengan nota yang dibelanja.',
    tag: 'Quality Control',
  },
  {
    id: 'packaging-shipping',
    title: 'Packing Segel Kuat & Antar ke Kargo',
    description: 'Barang dibungkus karung atau kardus tebal anti air, diantar ke kargo darat, laut, atau udara pilihan Anda.',
    tag: 'Kirim Se-Indonesia',
  },
  {
    id: 'personal-guide',
    title: 'Teman Belanja Langsung di Jakarta',
    description: 'Datang langsung ke Jakarta? Tim kami siap mendampingi menyusuri lorong pasar dan membantu logistik barang.',
    tag: 'Pemandu Lapangan',
  },
];

export const steps: StepItem[] = [
  {
    number: '01',
    badge: 'Hubungi Admin',
    title: 'Hubungi Admin PT MITRA BELANJA JAKARTA',
    description: 'Hubungi tim admin resmi kami melalui kontak WhatsApp yang tersedia untuk memulai konsultasi perbelanjaan grosir Anda.',
  },
  {
    number: '02',
    badge: 'Detail Belanja',
    title: 'Beritahu Admin Detail Kebutuhan Barang Perbelanjaan Anda',
    description: 'Berikan rincian produk seperti foto referensi, jenis bahan, jumlah kodi/seri, atau nama toko langganan yang Anda tuju.',
  },
  {
    number: '03',
    badge: 'Agency Pendamping',
    title: 'Admin Menghubungkan Anda dengan Agency Pendamping',
    description: 'Admin akan menghubungkan Anda dengan agency kami yang akan memandu dan mengawal seluruh proses perbelanjaan Anda.',
  },
  {
    number: '04',
    badge: 'Rekening Resmi PT',
    title: 'Kirim Total Dana Belanja ke Rekening Resmi Perusahaan',
    description: 'Kirim total dana yang akan dibelanjakan hanya melalui rekening resmi PT MITRA BELANJA JAKARTA demi keamanan penuh.',
  },
  {
    number: '05',
    badge: 'Live Video Call',
    title: 'Video Call Selama Belanja di Toko atau Gudang Supplier',
    description: 'Agency kami akan melakukan video call dengan Anda selama proses belanja barang di toko atau gudang supplier, sehingga Anda bisa melihat langsung detail barang yang akan dibelanjakan.',
  },
  {
    number: '06',
    badge: 'Packing & Resi',
    title: 'Pengurusan Belanja, Packing, Sampai Serah Terima Resi Ekspedisi',
    description: 'Agency kami akan mengurus perbelanjaan, packing, sampai serah terima resi di ekspedisi pengiriman tujuan kota Anda.',
  },
  {
    number: '07',
    badge: 'Pantau Pengiriman',
    title: 'Pengawasan Pengiriman Sampai Kota Tujuan',
    description: 'Kami akan mengawasi proses pengiriman barang Anda sampai kota tujuan, terhubung dengan pihak ekspedisi/cargo agar bisa selalu update informasi jadwal berangkat dan tiba barang.',
  },
  {
    number: '08',
    badge: 'Garansi Tanggung Jawab',
    title: 'Tanggung Jawab Penuh Saat Proses Belanja & Packing',
    description: 'Kami bertanggung jawab penuh atas kerugian apabila selama proses perbelanjaan dan packing terjadi kehilangan atau kerusakan barang.',
  },
];

export const shippingDisclaimer = 'Kami tidak bertanggung jawab atas kerusakan atau kehilangan barang selama proses pengiriman karena itu adalah tanggung jawab pihak ekspedisi/cargo.';

export const howItWorksPillars = [
  { title: 'Aman Terpercaya', desc: 'Rekening resmi PT' },
  { title: 'Harga Terbaik', desc: 'Nota asli tanpa markup' },
  { title: 'Proses Cepat & Mudah', desc: 'Koordinasi via WhatsApp' },
  { title: 'Pelayanan Profesional', desc: 'Agency siaga di pasar' },
];

export interface CategoryItem {
  id: string;
  name: string;
  items: string;
  sentra: string;
}

export const productCategories: CategoryItem[] = [
  {
    id: 'fashion-tekstil',
    name: 'Fashion & Tekstil',
    items: 'Gamis, busana muslim, hijab, pakaian anak, jeans, kain rol & tekstil kiloan.',
    sentra: 'Tanah Abang & Cipulir',
  },
  {
    id: 'sepatu-aksesoris',
    name: 'Sepatu & Sandal',
    items: 'Sepatu pria/wanita, sandal grosir serian, tas fashion, dompet, dan aksesoris.',
    sentra: 'Pasar Kebon Kembang & Mangga Dua',
  },
  {
    id: 'mainan-souvenir',
    name: 'Mainan & Aksesoris',
    items: 'Mainan anak edukatif, boneka, souvenir pernikahan, dan perlengkapan pesta.',
    sentra: 'Pasar Asemka & Perniagaan',
  },
  {
    id: 'kemasan-kebutuhan-toko',
    name: 'Kemasan & Dus Toko',
    items: 'Toples kue, botol plastik/kaca, kardus box, bubble wrap, dan lakban grosir.',
    sentra: 'Pasar Pagi & Jatinegara',
  },
  {
    id: 'elektronik-perkakas',
    name: 'Teknik & Elektronik',
    items: 'Alat teknik, kelistrikan, perkakas pertukangan, sparepart, dan lampu LED grosir.',
    sentra: 'Glodok & LTC Hayam Wuruk',
  },
  {
    id: 'produk-grosir-lainnya',
    name: 'Komoditas Grosir Lainnya',
    items: 'Kosmetik, alat tulis kantor, perabot, hingga barang pesanan khusus toko Anda.',
    sentra: 'Sentra Niaga Se-DKI Jakarta',
  },
];

export const categories: string[] = productCategories.map((c) => c.name);

export const faqs: FAQItem[] = [
  {
    question: 'Pasar grosir apa saja di Jakarta yang bisa dibantu belanjakan?',
    answer: 'Seluruh sentra grosir utama Jakarta: Tanah Abang, Cipulir, Mangga Dua, Asemka, Senen, Glodok, Jatinegara, hingga sentra sepatu Kebon Kembang. Tim lapangan kami siap mendatangi toko pilihan Anda.',
  },
  {
    question: 'Apakah saya bisa minta video call untuk melihat barang secara langsung di toko?',
    answer: 'Bisa. Tim lapangan kami siap WhatsApp Video Call langsung dari toko grosir agar Anda bisa memastikan mutu bahan, warna asli, kondisi produk, dan stok seri secara real-time sebelum transaksi.',
  },
  {
    question: 'Apakah bisa belanja dari beberapa toko sekaligus dalam satu pengiriman?',
    answer: 'Sangat bisa. Ini layanan unggulan kami. Anda bisa memesan dari aneka toko atau sentra pasar berbeda di Jakarta. Kami kumpulkan dan packing menjadi satu paket kargo hemat agar ongkir tidak terpisah.',
  },
  {
    question: 'Berapa tarif jasa belanja di PT Mitra Belanja Jakarta?',
    answer: 'Tarif jasa belanja adalah 10% bersih dari total perbelanjaan, plus biaya packing ball barang dan kirim ke ekspedisi atau cargo ditanggung oleh customer. Tanpa markup harga toko, dan nota fisik asli dari toko selalu disertakan.',
  },
  {
    question: 'Apakah ada minimal belanja untuk menggunakan jasa ini?',
    answer: 'Kami mengutamakan pembelian partai grosir (serian, kodi, karton, dus) untuk toko, reseller, dan instansi, maupun pembelian eceran tertentu. Silakan kirimkan list kebutuhan Anda ke WhatsApp kami.',
  },
  {
    question: 'Bagaimana keamanan transaksi pembayaran belanja?',
    answer: 'PT Mitra Belanja Jakarta beroperasi secara profesional dengan legalitas resmi. Seluruh pembayaran belanja dilakukan ke rekening resmi perusahaan setelah Anda menyetujui foto stok dan rincian nota belanja.',
  },
  {
    question: 'Kargo apa saja yang bisa digunakan untuk pengiriman?',
    answer: 'Kami dapat mengantar ke kargo darat, laut, maupun udara pilihan Anda, seperti Indah Logistik Kargo, Dakota Cargo, Baraka, J&T Cargo, Sentral Cargo, ekspedisi kapal pulau, atau jasa kirim reguler.',
  },
  {
    question: 'Bagaimana jika barang pesanan ternyata habis di pasar?',
    answer: 'Jika stok kosong, tim kami memfotokan alternatif model terbaik langsung dari toko saat itu juga. Jika Anda tidak berkenan dengan alternatif tersebut, dana untuk item tersebut kami kembalikan utuh 100%.',
  },
  {
    question: 'Bisa bantu belikan dari toko langganan saya sendiri di pasar Jakarta?',
    answer: 'Sangat bisa. Cukup berikan nama toko dan nomor kontaknya. Tim kami yang akan datang mengambil barang, mengecek fisik, membayar, dan mengurus kargonya.',
  },
];
