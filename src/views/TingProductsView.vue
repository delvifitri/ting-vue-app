<script setup>
import { ref, computed } from 'vue'
import { products } from '../data/products'

// ================= STATE & FILTER =================
const activeCategory = ref('all')
const searchQuery = ref('')
const isRefreshing = ref(false)

// State Modal Detail
const isModalOpen = ref(false)
const selectedProduct = ref(null)

// State Toast & Copy Feedback
const toastMessage = ref('')
const showToast = ref(false)
const copiedId = ref('')
let toastTimer = null

// Kategori Filter List
const categories = [
  { id: 'all', label: 'Semua Produk' },
  { id: 'pos', label: 'POS & Operasional' },
  { id: 'integration', label: 'Integrasi & API' },
  { id: 'ai', label: 'AI Assistant' },
  { id: 'finance', label: 'Billing & Keuangan' },
  { id: 'docs', label: 'Dokumentasi' }
]

// Computed: Filtered Products
const filteredProducts = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  return products.filter(item => {
    const matchCategory = activeCategory.value === 'all' || item.category === activeCategory.value
    const matchSearch = !query || 
      item.name.toLowerCase().includes(query) ||
      item.shortDesc.toLowerCase().includes(query) ||
      item.url.toLowerCase().includes(query) ||
      item.tags.some(t => t.toLowerCase().includes(query))
    return matchCategory && matchSearch
  })
})

// ================= METHODS =================
function copyUrl(url, id = '') {
  navigator.clipboard.writeText(url).then(() => {
    copiedId.value = id
    triggerToast(`Tautan ${url} berhasil disalin ke clipboard!`)
    setTimeout(() => {
      if (copiedId.value === id) copiedId.value = ''
    }, 1800)
  }).catch(() => {
    prompt('Salin URL berikut:', url)
  })
}

function triggerToast(msg) {
  toastMessage.value = msg
  showToast.value = true
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    showToast.value = false
  }, 2500)
}

function openDetail(item) {
  selectedProduct.value = item
  isModalOpen.value = true
}

function closeDetail() {
  isModalOpen.value = false
}

function resetFilters() {
  searchQuery.value = ''
  activeCategory.value = 'all'
}

function refreshList() {
  isRefreshing.value = true
  setTimeout(() => {
    isRefreshing.value = false
    triggerToast('Daftar produk TING telah diperbarui.')
  }, 600)
}
</script>

<template>
  <div class="ting-products-page flex flex-col gap-5">

    <!-- 1. HEADER BANNER (Horus Support Portal Theme) -->
    <div class="card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-7 shadow-xs transition-colors">
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        
        <!-- Icon & Judul -->
        <div class="flex items-start md:items-center gap-4">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 via-sky-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-sky-200 shrink-0">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
          </div>
          <div>
            <div class="flex flex-wrap items-center gap-2.5">
              <h1 class="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight m-0">
                TING Product Directory
              </h1>
              <span class="text-xs bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 font-bold px-2.5 py-0.5 rounded-full border border-sky-200 dark:border-sky-800">
                Resmi TING & Horus
              </span>
            </div>
            <p class="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
              Jelajahi seluruh ekosistem produk, platform kasir POS, API terintegrasi, dan kecerdasan buatan TING. Buka tautan langsung untuk mengakses layanan web resmi di bawah ini.
            </p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-2.5 self-start lg:self-auto shrink-0">
          <button 
            type="button"
            @click="refreshList"
            :disabled="isRefreshing"
            class="px-3.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <svg 
              class="w-3.5 h-3.5 text-slate-500" 
              :class="{ 'animate-spin': isRefreshing }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            <span>Refresh</span>
          </button>
          
          <a 
            href="https://ting.id" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-1.5"
          >
            <span>Web Utama ting.id</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>

      </div>
    </div>

    <!-- 2. FILTER TABS & SEARCH TOOLBAR -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3 md:p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
      
      <!-- Category Tabs -->
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
        <button 
          v-for="cat in categories" 
          :key="cat.id"
          type="button"
          @click="activeCategory = cat.id"
          :class="[
            activeCategory === cat.id 
              ? 'bg-slate-900 text-white shadow-2xs dark:bg-orange-600' 
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          ]"
          class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer"
        >
          {{ cat.label }}
          <span v-if="cat.id === 'all'" class="text-[10px] ml-1 opacity-80">({{ products.length }})</span>
        </button>
      </div>

      <!-- Live Search -->
      <div class="relative w-full md:w-72 shrink-0">
        <svg class="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Cari nama produk / URL..." 
          class="w-full pl-8 pr-8 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white dark:focus:bg-slate-900 transition-all text-slate-800 dark:text-slate-100"
        >
        <button 
          v-if="searchQuery" 
          type="button"
          @click="searchQuery = ''" 
          class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer text-xs"
        >
          ✕
        </button>
      </div>

    </div>

    <!-- 3. PRODUCT CARDS GRID (HORIZONTAL 3-COLUMN) -->
    <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      
      <div 
        v-for="item in filteredProducts" 
        :key="item.id"
        class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-500 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
      >
        <!-- Card Body -->
        <div class="space-y-3.5">
          <!-- Header Card: Icon & Badge -->
          <div class="flex items-start justify-between">
            <div 
              :class="item.gradientClass"
              class="w-12 h-12 rounded-xl bg-gradient-to-tr text-white flex items-center justify-center text-xl shadow-xs"
            >
              <span>{{ item.iconEmoji }}</span>
            </div>
            
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Active Web
              </span>
              <span 
                :class="item.categoryBadgeClass"
                class="text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase"
              >
                {{ item.categoryLabel }}
              </span>
            </div>
          </div>

          <!-- Title & Desc -->
          <div>
            <h3 class="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 transition-colors">
              {{ item.name }}
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-2">
              {{ item.shortDesc }}
            </p>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 pt-1">
            <span 
              v-for="(tag, tidx) in item.tags" 
              :key="tidx"
              class="text-[10px] bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-md font-medium"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Card Footer: Direct URL Bar & Buttons -->
        <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
          <!-- URL Monospace Box -->
          <div class="flex items-center justify-between bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs font-mono text-slate-700 dark:text-slate-300 group-hover:border-sky-200 transition-colors">
            <div class="flex items-center gap-1.5 overflow-hidden">
              <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
              </svg>
              <span class="truncate text-sky-700 dark:text-sky-400 font-semibold">{{ item.url }}</span>
            </div>
            
            <button 
              type="button"
              @click="copyUrl(item.url, item.id)"
              class="p-1 text-slate-400 hover:text-sky-600 hover:bg-white dark:hover:bg-slate-700 rounded transition-colors shrink-0 ml-1 cursor-pointer" 
              title="Salin URL"
            >
              <span v-if="copiedId === item.id" class="text-emerald-500 font-bold text-xs">✓</span>
              <svg v-else class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
            </button>
          </div>

          <!-- CTAs -->
          <div class="grid grid-cols-2 gap-2">
            <button 
              type="button"
              @click="openDetail(item)"
              class="py-2 px-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold transition-all text-center cursor-pointer"
            >
              Detail Fitur
            </button>
            <a 
              :href="item.url" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="py-2 px-3 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1 text-center"
            >
              <span>Buka Web</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>

    <!-- Empty State -->
    <div v-else class="card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center shadow-xs">
      <div class="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto mb-3 text-2xl">
        🔍
      </div>
      <h3 class="text-base font-bold text-slate-800 dark:text-slate-100">Tidak ada produk yang cocok</h3>
      <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
        Coba gunakan kata kunci pencarian lain atau pilih kategori "Semua Produk".
      </p>
      <button 
        type="button"
        @click="resetFilters" 
        class="mt-4 px-4 py-2 bg-slate-900 dark:bg-orange-600 text-white text-xs font-bold rounded-xl hover:opacity-90 transition-all cursor-pointer"
      >
        Reset Filter & Pencarian
      </button>
    </div>

    <!-- 4. DETAIL MODAL -->
    <Teleport to="body">
      <div 
        v-if="isModalOpen && selectedProduct" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs select-none"
        @click.self="closeDetail"
      >
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative space-y-4">
          <!-- Close Button -->
          <button 
            type="button"
            @click="closeDetail" 
            class="absolute top-5 right-5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            ✕
          </button>

          <!-- Header -->
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center text-2xl font-bold">
              {{ selectedProduct.iconEmoji }}
            </div>
            <div>
              <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                {{ selectedProduct.categoryLabel }}
              </span>
              <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">
                {{ selectedProduct.name }}
              </h3>
            </div>
          </div>

          <!-- Description -->
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {{ selectedProduct.longDesc }}
          </p>

          <!-- Key Features -->
          <div class="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 rounded-xl p-3.5 space-y-2">
            <span class="text-[11px] font-bold text-slate-700 dark:text-slate-200 block uppercase tracking-wider">
              Fitur & Kemampuan Utama:
            </span>
            <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <li v-for="(feat, fidx) in selectedProduct.features" :key="fidx" class="flex items-center gap-2">
                <span class="text-emerald-500 font-bold text-xs shrink-0">✓</span>
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>

          <!-- URL Box -->
          <div class="space-y-1">
            <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Direct Web URL:</span>
            <div class="flex items-center justify-between bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-slate-800 dark:text-slate-200">
              <span class="truncate font-semibold text-sky-700 dark:text-sky-400">{{ selectedProduct.url }}</span>
              <button 
                type="button"
                @click="copyUrl(selectedProduct.url, 'modal')" 
                class="p-1 text-slate-500 hover:text-sky-600 cursor-pointer" 
                title="Salin URL"
              >
                <span v-if="copiedId === 'modal'" class="text-emerald-500 font-bold text-xs">✓</span>
                <svg v-else class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Action -->
          <div class="flex items-center justify-end gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button 
              type="button"
              @click="closeDetail" 
              class="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl transition-all cursor-pointer"
            >
              Tutup
            </button>
            <a 
              :href="selectedProduct.url" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="px-5 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-1.5"
            >
              <span>Kunjungi Website</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- 5. TOAST NOTIFICATION -->
    <Teleport to="body">
      <div 
        v-if="showToast" 
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300"
      >
        <div class="bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2.5 text-xs font-semibold border border-slate-700">
          <span class="text-emerald-400 font-bold">✓</span>
          <span>{{ toastMessage }}</span>
        </div>
      </div>
    </Teleport>

  </div>
</template>
