export const activeSubscriptions = [
  {
    id: 'sub-001',
    name: 'Testing System Analyst Plan',
    tier: 'Professional Cloud',
    price: 'Rp 149.000',
    period: '9 November 2025 - 9 November 2026',
    purchaseDate: '9 Nov 2025, 13.55 WIB',
    method: 'QRIS',
    status: 'PAID',
    isActive: true,
    features: ['Multi-Cabang (Hingga 5 Outlet)', 'Laporan Keuangan Realtime', 'Integrasi QRIS Dinamis']
  },
  {
    id: 'sub-002',
    name: 'TING Connect API Add-on',
    tier: 'Enterprise Integration',
    price: 'Rp 99.000',
    period: '17 Oktober 2025 - 17 Oktober 2026',
    purchaseDate: '17 Okt 2025, 16.49 WIB',
    method: 'QRIS',
    status: 'PAID',
    isActive: true,
    features: ['Unlimited Webhook Events', 'Tokopedia & Shopee Sync', 'High SLA Support']
  }
]

export const catalogPlans = [
  {
    id: 'plan-starter',
    name: 'Starter Kasir POS',
    price: 49000,
    priceFormatted: 'Rp 49.000',
    period: '/bulan',
    icon: '🛒',
    desc: 'Cocok untuk toko ritel, cafe kecil, atau usaha mandiri 1 outlet.',
    popular: false,
    features: [
      '1 Kasir Aktif & Unlimited Transaksi',
      'Cetak Struk Thermal & Bluetooth',
      'Scan Barcode Cepat',
      'Support QRIS Dinamis'
    ]
  },
  {
    id: 'plan-pro',
    name: 'Business Pro',
    price: 149000,
    priceFormatted: 'Rp 149.000',
    period: '/bulan',
    icon: '🏢',
    desc: 'Untuk bisnis berkembang dengan kebutuhan stok opname & multi-cabang.',
    popular: true,
    features: [
      'Hingga 5 Cabang Toko',
      'Manajemen Stok & Transfer Gudang',
      'Laporan Laba/Rugi Realtime',
      'Manajemen Hak Akses Karyawan'
    ]
  },
  {
    id: 'plan-ent',
    name: 'Enterprise Scale',
    price: 399000,
    priceFormatted: 'Rp 399.000',
    period: '/bulan',
    icon: '⚡',
    desc: 'Solusi lengkap korporasi dengan open API, webhook & prioritas SLA.',
    popular: false,
    features: [
      'Unlimited Outlet & Multi-Gudang',
      'Akses Penuh TING Connect Open API',
      'AI Assistant TiChat 24/7',
      'Dedicated Account Manager 24/7'
    ]
  }
]

export const purchaseHistory = [
  {
    id: 'SUB-000036',
    orderId: 'SUB-TSA-20251109-0001',
    name: 'Testing System Analyst',
    period: '9 November 2025 - 9 November 2027',
    amount: 'Rp 1',
    date: '9 Nov 2025, 13.55 WIB',
    method: 'QRIS',
    isPaid: true,
    isActivePlan: true
  },
  {
    id: 'SUB-000035',
    orderId: 'SUB-TSA-20251109-0002',
    name: 'Testing System Analyst',
    period: '9 November 2025 - 9 November 2026',
    amount: 'Rp 1',
    date: '9 Nov 2025, 15.06 WIB',
    method: 'QRIS',
    isPaid: true,
    isActivePlan: false
  },
  {
    id: 'SUB-000034',
    orderId: 'SUB-TSA-20251017-0001',
    name: 'Testing System Analyst',
    period: '17 Oktober 2025 - 17 Oktober 2026',
    amount: 'Rp 1',
    date: '17 Okt 2025, 16.49 WIB',
    method: 'QRIS',
    isPaid: true,
    isActivePlan: false
  },
  {
    id: 'SUB-000033',
    orderId: 'SUB-TSA-20251017-0002',
    name: 'Testing System Analyst',
    period: '17 Oktober 2025 - 17 Oktober 2026',
    amount: 'Rp 1',
    date: '17 Okt 2025, 16.44 WIB',
    method: 'QRIS',
    isPaid: true,
    isActivePlan: false
  }
]
