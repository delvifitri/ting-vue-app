export const products = [
  {
    id: 'ting-pos',
    name: 'TING POS (Kasir Pintar)',
    category: 'pos',
    categoryLabel: 'POS',
    categoryBadgeClass: 'bg-sky-50 text-sky-700 border-sky-200',
    iconEmoji: '🖥️',
    gradientClass: 'from-sky-500 to-cyan-400',
    url: 'https://pos.ting.id',
    shortDesc: 'Aplikasi kasir web & cloud untuk transaksi penjualan cepat, scan barcode, cetak nota thermal, kalkulasi kembalian, dan QRIS dinamis.',
    longDesc: 'Aplikasi kasir modern berbasis cloud untuk kemudahan transaksi kasir toko retail, F&B, dan jasa. Dilengkapi sistem pencatatan inventori instan, sinkronisasi pesanan dapur, integrasi EDC & QRIS, serta laporan shift kasir harian.',
    tags: ['⚡ Kasir Kilat', '📶 Multi-Outlet', '💳 QRIS Dinamis'],
    features: [
      'Cetak Struk Thermal & Bluetooth',
      'Multi-payment (QRIS, Debit, Tunai, Split Bill)',
      'Manajemen Meja, Pesanan & Waitress',
      'Mode Offline-Ready saat internet terganggu'
    ]
  },
  {
    id: 'ting-management',
    name: 'TING Management (ERP)',
    category: 'pos',
    categoryLabel: 'ERP',
    categoryBadgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
    iconEmoji: '🏢',
    gradientClass: 'from-blue-600 to-indigo-500',
    url: 'https://management.ting.id',
    shortDesc: 'Pusat kontrol operasional bisnis: monitoring multi-cabang, rekapitulasi laba rugi, kontrol stok gudang, dan hak akses karyawan.',
    longDesc: 'Aplikasi backoffice enterprise untuk pengelolaan operasional bisnis skala menengah hingga korporasi. Memungkinkan monitoring seluruh cabang secara real-time dari satu dashboard tunggal.',
    tags: ['📊 Laporan Finansial', '📦 Stok Opname', '👥 Role Karyawan'],
    features: [
      'Rekapitulasi Laba Kotor & Bersih Otomatis',
      'Transfer Stok Antar Gudang & Cabang',
      'Audit Log Aktivitas Karyawan',
      'Ekspor Laporan ke Excel & PDF Instan'
    ]
  },
  {
    id: 'ting-connect',
    name: 'TING Connect (Open API)',
    category: 'integration',
    categoryLabel: 'API',
    categoryBadgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    iconEmoji: '🔌',
    gradientClass: 'from-indigo-600 to-purple-500',
    url: 'https://connect.ting.id',
    shortDesc: 'Platform integrasi data open API & Webhook untuk menghubungkan katalog produk, sinkronisasi stok, dan order marketplace otomatis.',
    longDesc: 'Layanan gateway integrasi komprehensif bagi developer dan bisnis modern. Menghubungkan ekosistem aplikasi internal bisnis dengan kanal e-commerce dan payment provider secara mulus.',
    tags: ['🔗 RESTful API', '🛍️ Marketplace Sync', '🔔 Realtime Webhook'],
    features: [
      'Autentikasi Aman via API Token',
      'Sinkronisasi Stok Otomatis Tokopedia & Shopee',
      'Webhook Notifikasi Status Transaksi',
      'High-availability 99.9% Cloud Uptime'
    ]
  },
  {
    id: 'ai-ting',
    name: 'AI TING (TiChat)',
    category: 'ai',
    categoryLabel: 'AI BOT',
    categoryBadgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
    iconEmoji: '🤖',
    gradientClass: 'from-purple-600 to-pink-500',
    url: 'https://chat.ting.id',
    shortDesc: 'Asisten kecerdasan buatan (AI LLM) untuk melayani tanya jawab pelanggan, rekomendasi produk, dan respon komplain 24/7.',
    longDesc: 'Bot layanan pelanggan bertenaga AI yang mampu memahami konteks bahasa manusia secara natural. Dilatih dengan data produk toko Anda untuk menjawab pertanyaan pelanggan secara akurat tanpa campur tangan staf admin.',
    tags: ['🤖 Generative AI', '💬 24/7 Auto-Reply', '🧠 Smart Knowledge'],
    features: [
      'Paham Bahasa Indonesia Santai & Formal',
      'Cek Status Order & Pengiriman Otomatis',
      'Integrasi WhatsApp Business & Web Chat Widget',
      'Eskalasi ke Agen CS Manusia saat Urgent'
    ]
  },
  {
    id: 'ting-billing',
    name: 'TING Billing (Invoicing)',
    category: 'finance',
    categoryLabel: 'BILLING',
    categoryBadgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconEmoji: '🧾',
    gradientClass: 'from-emerald-600 to-teal-400',
    url: 'https://billing.ting.id',
    shortDesc: 'Sistem penagihan otomatis, manajemen langganan berulang (recurring billing), dan rekonsiliasi payment gateway terintegrasi.',
    longDesc: 'Platform penagihan digital menyeluruh yang dirancang untuk model bisnis SaaS, langganan membership, dan transaksi korporat skala besar.',
    tags: ['🧾 Faktur & Invoice', '🔄 Auto Recurring', '💰 Rekonsiliasi'],
    features: [
      'Kirim Invoice via WhatsApp & Email',
      'Reminder Tagihan Otomatis sebelum Jatuh Tempo',
      'Download Kwitansi Pembayaran Resmi',
      'Integrasi Multi-Payment Gateway (QRIS & VA)'
    ]
  },
  {
    id: 'ting-docs',
    name: 'TING Docs (Panduan & Bantuan)',
    category: 'docs',
    categoryLabel: 'DOCS',
    categoryBadgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
    iconEmoji: '📚',
    gradientClass: 'from-amber-500 to-orange-400',
    url: 'https://doc.ting.id',
    shortDesc: 'Pusat dokumentasi teknis, petunjuk integrasi API, panduan konfigurasi hardware kasir, dan basis pengetahuan resmi produk TING.',
    longDesc: 'Pusat panduan terlengkap untuk pengguna baru maupun tim pengembang (developer). Dilengkapi dengan cuplikan kode pemrograman, SDK, dan artikel tanya-jawab seputar masalah umum operasional kasir.',
    tags: ['📚 Panduan Setup', '⚙️ API Reference', '💡 Video Tutorial'],
    features: [
      'Postman Collection & Code SDK',
      'Panduan Setup Printer Bluetooth & LAN',
      'Troubleshooting Jaringan & Hardware',
      'Changelog Update Versi Baru'
    ]
  },
  {
    id: 'ting-portal',
    name: 'TING Portal Utama (ting.id)',
    category: 'pos',
    categoryLabel: 'PORTAL',
    categoryBadgeClass: 'bg-slate-100 text-slate-700 border-slate-200',
    iconEmoji: '🌐',
    gradientClass: 'from-sky-600 to-cyan-500',
    url: 'https://ting.id',
    shortDesc: 'Website resmi perkenalan seluruh solusi bisnis, penawaran paket harga lisensi, demo produk, dan pendaftaran akun baru.',
    longDesc: 'Portal resmi TING Indonesia yang menyajikan solusi teknologi ritel dan manajemen bisnis end-to-end terdepan. Dapatkan informasi perbandingan paket, konsultasi solusi enterprise, dan update ekosistem terbaru.',
    tags: ['🌐 Official Web', '💼 Profil Solusi', '🏷️ Paket Lisensi'],
    features: [
      'Demo Produk Interaktif',
      'Kalkulator Estimasi Biaya Langganan',
      'Kemitraan & Reseller Program',
      'Download Aplikasi Android & Desktop'
    ]
  }
]
