<script setup>
import { ref } from 'vue'

// ================= STATE TABS =================
const currentTab = ref('active') // 'active' | 'catalog' | 'history'

// ================= DROPDOWN PROFIL =================
const isProfileDropdownOpen = ref(false)
function toggleProfileDropdown() {
  isProfileDropdownOpen.value = !isProfileDropdownOpen.value
}

// ================= TOGGLE SIDEBAR MOBILE =================
const isSidebarOpen = ref(true)
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

// ================= ADVANCED MODE TOGGLE =================
const isAdvancedMode = ref(false)

// ================= KATALOG FILTER =================
const catalogCategory = ref('all') // 'all' | 'pos' | 'ai' | 'enterprise'

// ================= DATA KATALOG =================
const catalogPlans = [
  {
    id: 'ting-advance',
    name: 'TING Advance',
    badge: 'POPULER',
    category: 'pos',
    categoryLabel: 'KASIR & POS',
    subTitle: 'Retail & Multi-Cabang',
    icon: '🏪',
    gradientClass: 'from-sky-600 to-cyan-500',
    capacity: 'Unlimited Produk & Multi-Kasir',
    purpose: 'Kelola kasir dan stok cabang tanpa selisih, laporan keuangan otomatis, dan cetak struk profesional.',
    price: 99000,
    priceFormatted: 'Rp 99.000',
    period: '/ bulan'
  },
  {
    id: 'ai-ting-assistant',
    name: 'AI TING Assistant',
    badge: 'SMART AI',
    category: 'ai',
    categoryLabel: 'AI & OTOMASI',
    subTitle: 'Smart Insights & WhatsApp Bot',
    icon: '🤖',
    gradientClass: 'from-purple-600 to-indigo-600',
    capacity: '3,000 AI Token / Bulan',
    purpose: 'Analisis produk laris otomatis, peringatan restock harian, dan bot pemesanan via WhatsApp.',
    price: 149000,
    priceFormatted: 'Rp 149.000',
    period: '/ bulan'
  },
  {
    id: 'enterprise-support',
    name: 'Enterprise Support',
    badge: 'KORPORASI',
    category: 'enterprise',
    categoryLabel: 'ENTERPRISE',
    subTitle: 'Custom SLA & API ERP',
    icon: '🏢',
    gradientClass: 'from-slate-800 to-slate-950',
    capacity: 'Unlimited Server & Cabang',
    purpose: 'Kustomisasi API integrasi, kunjungan teknis on-site, serta Dedicated Account Manager 24/7.',
    price: 499000,
    priceFormatted: 'Rp 499.000',
    period: '/ bulan'
  }
]

// ================= DATA RIWAYAT PEMBELIAN (PERSIS GAMBAR DUMMY) =================
const transactions = [
  {
    id: 'SUB-20251109-01',
    orderId: 'SUB-TSA-20251109-0001',
    name: 'Testing System Analyst',
    period: '9 November 2025 - 9 November 2026',
    amount: 'Rp 1',
    method: 'QRIS',
    date: '9 Nov 2025, 15.06 WIB',
    isPaid: true,
    isActivePlan: false
  },
  {
    id: 'SUB-20251109-02',
    orderId: 'SUB-TSA-20251109-0002',
    name: 'Testing System Analyst',
    period: '9 November 2025 - 9 November 2027',
    amount: 'Rp 1',
    method: 'QRIS',
    date: '9 Nov 2025, 13.55 WIB',
    isPaid: true,
    isActivePlan: true // Muncul badge ACTIVE PLAN hijau
  },
  {
    id: 'SUB-20251017-01',
    orderId: 'SUB-TSA-20251017-0001',
    name: 'Testing System Analyst',
    period: '17 Oktober 2025 - 17 Oktober 2026',
    amount: 'Rp 1',
    method: 'QRIS',
    date: '17 Okt 2025, 16.49 WIB',
    isPaid: true,
    isActivePlan: false
  },
  {
    id: 'SUB-20251017-02',
    orderId: 'SUB-TSA-20251017-0002',
    name: 'Testing System Analyst',
    period: '17 Oktober 2025 - 17 Oktober 2026',
    amount: 'Rp 1',
    method: 'QRIS',
    date: '17 Okt 2025, 16.44 WIB',
    isPaid: true,
    isActivePlan: false
  }
]

// ================= MODAL DETAIL & ORDER PLAN =================
const isPlanModalOpen = ref(false)
const selectedPlan = ref(null)

function openPlanModal(plan) {
  selectedPlan.value = plan
  isPlanModalOpen.value = true
}

function closePlanModal() {
  isPlanModalOpen.value = false
}

// ================= MODAL RECEIPT / KWITANSI =================
const isReceiptModalOpen = ref(false)
const selectedReceipt = ref(null)

function openReceiptModal(tx) {
  selectedReceipt.value = tx
  isReceiptModalOpen.value = true
}

function closeReceiptModal() {
  isReceiptModalOpen.value = false
}

function printReceipt() {
  window.print()
}
</script>

<template>
  <!-- WRAPPER UTAMA: TAMPILAN PERSIS TING MANAGEMENT (tingsubscription.netlify.app) -->
  <div class="ting-management-container min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 antialiased font-sans">
    
    <!-- ================= TOP NAVBAR TING MANAGEMENT ================= -->
    <header class="h-16 bg-white border-b border-slate-200 px-4 md:px-6 flex items-center justify-between sticky top-0 z-40 select-none">
      <div class="flex items-center gap-4">
        <button 
          type="button"
          @click="toggleSidebar" 
          class="p-2 text-slate-600 hover:text-sky-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer" 
          title="Toggle Sidebar"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        <!-- TING Brand Logo -->
        <router-link to="/ting-products" class="flex items-center gap-2 cursor-pointer">
          <div class="w-7 h-7 bg-sky-500 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-sm shadow-sky-200">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span class="text-xl font-extrabold tracking-tight text-sky-600">TING</span>
        </router-link>
      </div>

      <!-- Right Controls -->
      <div class="flex items-center gap-3">
        <!-- Store Switcher: Toko Pak Bagus -->
        <div class="hidden sm:flex items-center gap-2 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 cursor-pointer shadow-2xs">
          <span>Toko Pak Bagus</span>
          <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>

        <!-- Unit Bisnis Switcher -->
        <div class="hidden sm:flex items-center gap-2 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 cursor-pointer shadow-2xs">
          <svg class="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
          </svg>
          <span>Unit Bisnis</span>
          <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>

        <!-- Coin Balance Badge -->
        <div class="flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full text-xs font-bold">
          <span>🪙</span>
          <span>102,446</span>
        </div>

        <!-- Profile Avatar with Dropdown -->
        <div class="relative">
          <button 
            type="button"
            @click="toggleProfileDropdown" 
            class="w-8 h-8 rounded-full bg-purple-700 text-white font-bold text-sm flex items-center justify-center hover:ring-2 hover:ring-purple-300 transition-all cursor-pointer"
          >
            D
          </button>

          <!-- Dropdown Menu Box -->
          <div 
            v-if="isProfileDropdownOpen"
            class="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 transition-all duration-150"
          >
            <div class="px-4 py-2 border-b border-slate-100">
              <p class="text-xs font-bold text-slate-800">Toko Pak Bagus</p>
              <p class="text-[11px] text-slate-500 truncate">delvi@intelove.com</p>
            </div>

            <div class="py-1 text-xs text-slate-700 font-medium">
              <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors">
                <span class="text-amber-500">☀️</span>
                <span>Tema Terang</span>
              </a>

              <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 text-slate-400 cursor-not-allowed">
                <span>🏢</span>
                <span>Informasi Bisnis</span>
              </a>

              <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors">
                <span>💳</span>
                <span>Riwayat Top Up</span>
              </a>

              <!-- MENU ITEM: SUBSCRIPTION (ACTIVE IN DROPDOWN) -->
              <div class="px-2 py-0.5">
                <div class="flex items-center justify-between px-3 py-2 bg-sky-50 text-sky-700 rounded-lg font-bold border border-sky-200">
                  <div class="flex items-center gap-2.5">
                    <span>✨</span>
                    <span>Subscription</span>
                  </div>
                  <span class="text-[10px] bg-sky-600 text-white font-extrabold px-1.5 py-0.5 rounded tracking-wider">NEW</span>
                </div>
              </div>

              <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 text-emerald-600 transition-colors">
                <span>🤖</span>
                <span>Pengaturan AI TING</span>
              </a>

              <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 text-purple-600 transition-colors">
                <span>🔄</span>
                <span>Mulai Ulang Tour</span>
              </a>

              <div class="border-t border-slate-100 my-1"></div>

              <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-rose-50 text-rose-600 transition-colors">
                <span>🚪</span>
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- ================= BODY (SIDEBAR + CONTENT) ================= -->
    <div class="flex-1 flex overflow-hidden">

      <!-- ================= LEFT SIDEBAR TING ================= -->
      <aside 
        v-show="isSidebarOpen"
        class="w-60 bg-white border-r border-slate-200 flex flex-col justify-between p-4 shrink-0 transition-all select-none"
      >
        <div class="space-y-4">
          <!-- Advanced Mode Toggle -->
          <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs font-bold text-slate-800">Advanced Mode</span>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="isAdvancedMode" class="sr-only peer">
                <div class="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-sky-500"></div>
              </label>
            </div>
            <p class="text-[11px] text-slate-500">Upgrade fitur pro</p>
          </div>

          <!-- Navigation Links -->
          <nav class="space-y-1 text-xs font-semibold">
            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">📊</span>
              <span>Ringkasan</span>
            </a>
            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">🖥️</span>
              <span>Kasir</span>
            </a>
            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">📦</span>
              <span>Daftar Produk</span>
            </a>
            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">📥</span>
              <span>Produk Masuk</span>
            </a>
            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">📝</span>
              <span>Catat Biaya</span>
            </a>
            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">👥</span>
              <span>Atur Pengguna</span>
            </a>

            <!-- Active Menu: Subscription TING -->
            <div class="flex items-center gap-3 px-3 py-2 bg-sky-50 text-sky-600 font-bold rounded-lg transition-colors">
              <span>✨</span>
              <span>Subscription</span>
            </div>

            <!-- Tautan ke Portal Support -->
            <router-link to="/ting-products" class="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 hover:text-sky-600 rounded-lg transition-colors pt-2 border-t border-slate-100">
              <span class="text-orange-500">🏢</span>
              <span>Ke Horus Support</span>
            </router-link>
          </nav>
        </div>

        <!-- Bottom Button -->
        <div>
          <button 
            type="button"
            class="w-full py-2.5 px-4 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm shadow-sky-200 cursor-pointer"
          >
            Gabung Affiliate
          </button>
        </div>
      </aside>

      <!-- ================= MAIN CONTENT AREA (`/subscription`) ================= -->
      <main class="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-8 space-y-6">

        <!-- Header & Breadcrumb -->
        <div>
          <div class="flex items-center gap-2 text-xs text-slate-500 mb-1">
            <span>Dashboard</span>
            <span>/</span>
            <span class="text-slate-800 font-medium">Subscription</span>
          </div>
          <h1 class="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Subscription Management</h1>
          <p class="text-xs text-slate-500 mt-0.5">Kelola langganan aktif, tambah modul layanan baru, dan pantau histori transaksi.</p>
        </div>

        <!-- ================= MAIN TABS NAVIGATION ================= -->
        <div class="border-b border-slate-200 flex items-center gap-2 overflow-x-auto pb-0">
          
          <!-- Tab 1: Paket Aktif -->
          <button 
            type="button"
            @click="currentTab = 'active'"
            :class="[
              currentTab === 'active' 
                ? 'border-b-2 border-sky-500 text-sky-600 font-bold' 
                : 'border-b-2 border-transparent text-slate-500 hover:text-slate-800 font-medium'
            ]"
            class="px-4 py-3 text-xs flex items-center gap-2 transition-all shrink-0 cursor-pointer"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Paket Aktif</span>
            <span class="text-[10px] bg-sky-100 text-sky-700 px-1.5 py-0.5 rounded-full font-extrabold">2 Aktif</span>
          </button>

          <!-- Tab 2: Katalog Subscription -->
          <button 
            type="button"
            @click="currentTab = 'catalog'"
            :class="[
              currentTab === 'catalog' 
                ? 'border-b-2 border-sky-500 text-sky-600 font-bold' 
                : 'border-b-2 border-transparent text-slate-500 hover:text-slate-800 font-medium'
            ]"
            class="px-4 py-3 text-xs flex items-center gap-2 transition-all shrink-0 cursor-pointer"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
            <span>Katalog Subscription</span>
            <span class="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full font-bold">Katalog</span>
          </button>

          <!-- Tab 3: Riwayat Pembelian Subscription -->
          <button 
            type="button"
            @click="currentTab = 'history'"
            :class="[
              currentTab === 'history' 
                ? 'border-b-2 border-sky-500 text-sky-600 font-bold' 
                : 'border-b-2 border-transparent text-slate-500 hover:text-slate-800 font-medium'
            ]"
            class="px-4 py-3 text-xs flex items-center gap-2 transition-all shrink-0 cursor-pointer"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
            </svg>
            <span>Riwayat Pembelian Subscription</span>
          </button>
        </div>

        <!-- ================= TAB CONTENT 1: PAKET AKTIF (BISA >1 SUBS, TANPA GANTI PAKET) ================= -->
        <section v-if="currentTab === 'active'" class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-sm font-bold text-slate-900">Subscription yang Sedang Aktif di Bisnis Ini</h2>
              <p class="text-xs text-slate-500">Toko Anda dapat memiliki lebih dari 1 modul langganan yang berjalan secara bersamaan.</p>
            </div>
            <button 
              type="button"
              @click="currentTab = 'catalog'"
              class="text-xs font-bold text-sky-600 hover:text-sky-800 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>+ Tambah Subscription Lainnya</span>
            </button>
          </div>

          <!-- LIST MULTIPLE ACTIVE SUBSCRIPTIONS -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            <!-- SUBSCRIPTION AKTIF 1: TING Advance -->
            <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between">
              <div>
                <!-- Banner Header -->
                <div class="h-28 bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 px-5 py-4 flex items-center justify-between text-white relative">
                  <div class="z-10">
                    <span class="text-[10px] bg-white/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider backdrop-blur-xs">
                      ACTIVE PLAN
                    </span>
                    <h3 class="text-xl font-black mt-1">TING Advance</h3>
                    <p class="text-xs text-sky-100">Kategori: Retail & Multi-Cabang</p>
                  </div>
                  <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl backdrop-blur-xs z-10">
                    🏪
                  </div>
                </div>

                <!-- Body Info -->
                <div class="p-5 space-y-4 text-xs">
                  <div class="space-y-2 pb-3 border-b border-slate-100">
                    <div class="flex items-center justify-between">
                      <span class="text-slate-400 font-bold text-[11px] uppercase tracking-wider">Periode Masa Berlaku:</span>
                      <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Aktif
                      </span>
                    </div>
                    <div class="flex items-center justify-between font-bold text-slate-800 text-sm">
                      <span>14 Nov 2026 s/d 14 Des 2026</span>
                      <span class="text-xs text-sky-600 font-extrabold">30 Hari Tersisa</span>
                    </div>
                  </div>

                  <div class="text-slate-500 text-xs leading-relaxed">
                    Modul kasir multi-cabang, unlimited produk, dan laporan keuangan komprehensif aktif untuk toko Anda.
                  </div>
                </div>
              </div>

              <!-- Tombol Aksi (Hanya Perpanjang) -->
              <div class="p-5 pt-0">
                <button 
                  type="button"
                  @click="openPlanModal(catalogPlans[0])"
                  class="w-full py-2.5 px-4 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm shadow-sky-200 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Perpanjang Subscription</span>
                </button>
              </div>
            </div>

            <!-- SUBSCRIPTION AKTIF 2: AI TING Assistant Pro -->
            <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between">
              <div>
                <div class="h-28 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 px-5 py-4 flex items-center justify-between text-white relative">
                  <div class="z-10">
                    <span class="text-[10px] bg-white/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider backdrop-blur-xs">
                      ACTIVE PLAN
                    </span>
                    <h3 class="text-xl font-black mt-1">AI TING Assistant</h3>
                    <p class="text-xs text-purple-100">Kategori: AI & Otomasi Tools</p>
                  </div>
                  <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl backdrop-blur-xs z-10">
                    🤖
                  </div>
                </div>

                <div class="p-5 space-y-4 text-xs">
                  <div class="space-y-2 pb-3 border-b border-slate-100">
                    <div class="flex items-center justify-between">
                      <span class="text-slate-400 font-bold text-[11px] uppercase tracking-wider">Periode Masa Berlaku:</span>
                      <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Aktif
                      </span>
                    </div>
                    <div class="flex items-center justify-between font-bold text-slate-800 text-sm">
                      <span>14 Nov 2026 s/d 14 Mei 2027</span>
                      <span class="text-xs text-purple-600 font-extrabold">180 Hari Tersisa</span>
                    </div>
                  </div>

                  <div class="text-slate-500 text-xs leading-relaxed">
                    Fitur bot WhatsApp customer service dan asisten AI pintar siap digunakan dengan kuota 3,000 token/bulan.
                  </div>
                </div>
              </div>

              <!-- Tombol Aksi (Hanya Perpanjang) -->
              <div class="p-5 pt-0">
                <button 
                  type="button"
                  @click="openPlanModal(catalogPlans[1])"
                  class="w-full py-2.5 px-4 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm shadow-sky-200 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Perpanjang Subscription</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        <!-- ================= TAB CONTENT 2: KATALOG SUBSCRIPTION (HORIZONTAL) ================= -->
        <section v-else-if="currentTab === 'catalog'" class="space-y-6">
          <!-- Filter Kategori Modul -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-2 overflow-x-auto pb-1">
              <button 
                type="button"
                @click="catalogCategory = 'all'"
                :class="catalogCategory === 'all' ? 'bg-sky-500 text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'"
                class="px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all"
              >
                Semua Modul
              </button>
              <button 
                type="button"
                @click="catalogCategory = 'pos'"
                :class="catalogCategory === 'pos' ? 'bg-sky-500 text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'"
                class="px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all"
              >
                Kasir & POS
              </button>
              <button 
                type="button"
                @click="catalogCategory = 'ai'"
                :class="catalogCategory === 'ai' ? 'bg-sky-500 text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'"
                class="px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all"
              >
                AI & Otomasi
              </button>
              <button 
                type="button"
                @click="catalogCategory = 'enterprise'"
                :class="catalogCategory === 'enterprise' ? 'bg-sky-500 text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'"
                class="px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all"
              >
                Custom Enterprise
              </button>
            </div>

            <span class="text-xs text-slate-500 shrink-0">Menampilkan 3 paket pilihan</span>
          </div>

          <!-- KATALOG MENYAMPING (HORIZONTAL GRID 3 KOLOM) -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            
            <div 
              v-for="plan in catalogPlans" 
              :key="plan.id"
              v-show="catalogCategory === 'all' || catalogCategory === plan.category"
              :class="[
                plan.badge === 'POPULER' ? 'border-2 border-sky-400 shadow-md' : 'border border-slate-200 shadow-xs hover:shadow-md'
              ]"
              class="bg-white rounded-2xl overflow-hidden flex flex-col justify-between relative transition-all"
            >
              <div 
                v-if="plan.badge === 'POPULER'"
                class="absolute top-3 right-3 z-20 bg-sky-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs"
              >
                POPULER
              </div>

              <div>
                <div 
                  :class="plan.gradientClass"
                  class="h-36 bg-gradient-to-r relative p-4 flex flex-col justify-between text-white overflow-hidden"
                >
                  <span class="text-[10px] bg-white/20 px-2 py-0.5 rounded backdrop-blur-xs font-mono font-medium z-10 self-start">
                    KATEGORI: {{ plan.categoryLabel }}
                  </span>
                  <div class="z-10 flex items-center justify-between">
                    <div>
                      <h3 class="text-lg font-black leading-tight">{{ plan.name }}</h3>
                      <p class="text-xs text-sky-100 font-medium">{{ plan.subTitle }}</p>
                    </div>
                    <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl backdrop-blur-xs">
                      {{ plan.icon }}
                    </div>
                  </div>
                </div>

                <div class="p-5 space-y-3 text-xs">
                  <div>
                    <span class="text-slate-400 font-bold block text-[11px]">Kategori : {{ plan.subTitle }}</span>
                    <span class="text-slate-700 font-semibold block mt-0.5">Kapasitas : {{ plan.capacity }}</span>
                    <p class="text-slate-500 mt-1 line-clamp-2">Tujuan : {{ plan.purpose }}</p>
                  </div>

                  <button 
                    type="button"
                    @click="openPlanModal(plan)" 
                    class="text-sky-600 hover:text-sky-800 font-bold inline-flex items-center gap-1 hover:underline text-xs cursor-pointer"
                  >
                    <span>View more detail</span>
                    <span>→</span>
                  </button>

                  <div class="pt-2 border-t border-slate-100">
                    <span class="text-[11px] text-slate-400 block font-medium">Start from</span>
                    <div class="flex items-baseline gap-1">
                      <span class="text-2xl font-black text-slate-900">{{ plan.priceFormatted }}</span>
                      <span class="text-slate-400 text-xs">{{ plan.period }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-5 pt-0">
                <button 
                  type="button"
                  @click="openPlanModal(plan)" 
                  class="w-full py-2.5 px-4 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm shadow-sky-200 cursor-pointer"
                >
                  Choose Plan
                </button>
              </div>
            </div>

          </div>
        </section>

        <!-- ================= TAB CONTENT 3: RIWAYAT PEMBELIAN SUBSCRIPTION (PERSIS SEPERTI GAMBAR DUMMY) ================= -->
        <section v-else-if="currentTab === 'history'" class="space-y-4">
          <!-- Header Section -->
          <div class="pb-2">
            <h2 class="text-lg font-bold text-slate-900 tracking-tight">Subscription Purchase History</h2>
            <p class="text-xs text-slate-500">View your subscription purchase transactions (Tinjau riwayat transaksi pembelian subscription bisnis Anda)</p>
          </div>

          <!-- LIST TRANSAKSI (CARD PUTIH DENGAN BADGE PAID & ACTIVE PLAN) -->
          <div class="space-y-3.5">
            
            <div 
              v-for="item in transactions" 
              :key="item.id"
              class="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-300 transition-all"
            >
              <!-- Left Info -->
              <div class="space-y-3 flex-1">
                <h3 class="text-base font-bold text-slate-900">{{ item.name }}</h3>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-xs">
                  <div>
                    <span class="text-slate-400 text-[11px] block font-medium">Subscription Period:</span>
                    <span class="text-slate-800 font-semibold block mt-0.5">{{ item.period }}</span>
                  </div>
                  <div>
                    <span class="text-slate-400 text-[11px] block font-medium">Amount:</span>
                    <span class="text-slate-900 font-bold block mt-0.5">{{ item.amount }}</span>
                  </div>
                  <div>
                    <span class="text-slate-400 text-[11px] block font-medium">Purchase Method:</span>
                    <span class="text-slate-800 font-medium block mt-0.5">{{ item.method }}</span>
                  </div>
                  <div>
                    <span class="text-slate-400 text-[11px] block font-medium">Purchase Date:</span>
                    <span class="text-slate-600 block mt-0.5">{{ item.date }}</span>
                  </div>
                </div>
              </div>

              <!-- Right Actions (Badges & Download Button) -->
              <div class="flex md:flex-col items-end justify-between md:justify-center gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                <div class="flex items-center gap-1.5">
                  <span class="px-2.5 py-0.5 rounded text-[11px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-300">
                    PAID
                  </span>
                  <span 
                    v-if="item.isActivePlan"
                    class="px-2.5 py-0.5 rounded text-[11px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-300"
                  >
                    ACTIVE PLAN
                  </span>
                </div>
                
                <button 
                  type="button"
                  @click="openReceiptModal(item)"
                  class="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  <span>Download Receipt</span>
                </button>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>

    <!-- ================= MODAL DETAIL / CHOOSE PLAN ================= -->
    <Teleport to="body">
      <div 
        v-if="isPlanModalOpen && selectedPlan" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs select-none"
        @click.self="closePlanModal"
      >
        <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative space-y-4 text-slate-800">
          <button 
            type="button"
            @click="closePlanModal" 
            class="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-lg cursor-pointer"
          >
            ✕
          </button>

          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center text-2xl font-bold border border-sky-100">
              {{ selectedPlan.icon }}
            </div>
            <div>
              <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                {{ selectedPlan.categoryLabel }}
              </span>
              <h3 class="text-lg font-bold text-slate-900 mt-1">{{ selectedPlan.name }}</h3>
            </div>
          </div>

          <div class="bg-slate-50 border border-slate-100 rounded-xl p-3.5 space-y-2 text-xs">
            <div><strong>Kapasitas:</strong> {{ selectedPlan.capacity }}</div>
            <div><strong>Tujuan:</strong> {{ selectedPlan.purpose }}</div>
            <div class="text-sky-600 font-extrabold text-sm pt-1 border-t border-slate-200">
              Harga: {{ selectedPlan.priceFormatted }} {{ selectedPlan.period }}
            </div>
          </div>

          <div class="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
            <button 
              type="button"
              @click="closePlanModal" 
              class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl cursor-pointer"
            >
              Tutup
            </button>
            <button 
              type="button"
              @click="closePlanModal" 
              class="px-5 py-2 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer"
            >
              Lanjutkan Pembayaran
            </button>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- ================= MODAL RECEIPT / KWITANSI ELEKTRONIK (SESUAI DUMMY GAMBAR) ================= -->
    <Teleport to="body">
      <div 
        v-if="isReceiptModalOpen && selectedReceipt" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs select-none"
        @click.self="closeReceiptModal"
      >
        <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative space-y-4 text-slate-800 max-h-[90vh] overflow-y-auto">
          <button 
            type="button"
            @click="closeReceiptModal" 
            class="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-sm p-1 rounded-lg cursor-pointer"
          >
            ✕
          </button>

          <!-- Header Kwitansi -->
          <div class="flex items-start justify-between border-b pb-4">
            <div>
              <h2 class="text-xl font-bold text-orange-600">Subscription Receipt</h2>
              <div class="text-xs text-slate-500 mt-1 space-y-0.5">
                <div>Project: <strong>Testing SA (TSA)</strong></div>
                <div>Subscription ID: <strong>{{ selectedReceipt.id }}</strong></div>
                <div>Order ID: <strong>{{ selectedReceipt.orderId }}</strong></div>
                <div>Date: <strong>{{ selectedReceipt.date }}</strong></div>
                <div>Payment Method: <strong>{{ selectedReceipt.method }}</strong></div>
              </div>
            </div>
            <div class="text-right text-xs">
              <span class="text-slate-400">Bill to:</span>
              <div class="font-bold text-orange-600">Testing SA</div>
              <div class="text-slate-500">Jogja</div>
            </div>
          </div>

          <!-- Table Items -->
          <table class="w-full text-xs">
            <thead>
              <tr class="bg-orange-500 text-white">
                <th class="p-2 text-left rounded-l-lg">Description</th>
                <th class="p-2 text-center">Duration</th>
                <th class="p-2 text-right rounded-r-lg">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="p-2.5 font-medium">{{ selectedReceipt.name }} Subscription</td>
                <td class="p-2.5 text-center">12 months</td>
                <td class="p-2.5 text-right font-bold">{{ selectedReceipt.amount }}</td>
              </tr>
              <tr class="font-bold text-slate-900">
                <td colspan="2" class="p-2.5 text-right">Total Paid:</td>
                <td class="p-2.5 text-right text-orange-600">{{ selectedReceipt.amount }}</td>
              </tr>
            </tbody>
          </table>

          <!-- Subscription Details Box Hijau -->
          <div class="bg-emerald-50 border border-emerald-300 rounded-xl p-3 text-xs text-emerald-950 space-y-1">
            <div class="font-bold text-emerald-800">■ Subscription Details</div>
            <div>Plan: {{ selectedReceipt.name }}</div>
            <div>Duration: 12 months</div>
            <div>Period: {{ selectedReceipt.period }}</div>
            <div class="font-bold text-emerald-700">Your subscription is now active!</div>
          </div>

          <!-- Footer Actions -->
          <div class="flex items-center justify-between pt-2">
            <span class="text-[11px] text-slate-400">This receipt was generated electronically.</span>
            <div class="flex gap-2">
              <button 
                type="button"
                @click="closeReceiptModal" 
                class="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg cursor-pointer"
              >
                Tutup
              </button>
              <button 
                type="button"
                @click="printReceipt" 
                class="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-2xs cursor-pointer flex items-center gap-1"
              >
                🖨️ Cetak / Simpan PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.ting-management-container {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>
