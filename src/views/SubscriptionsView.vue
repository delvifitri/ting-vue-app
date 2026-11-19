<script setup>
import { ref } from 'vue'
import { activeSubscriptions, catalogPlans, purchaseHistory } from '../data/subscriptions'

// ================= TABS =================
const activeTab = ref('active') // 'active' | 'catalog' | 'history'

// ================= MODAL RECEIPT =================
const isReceiptOpen = ref(false)
const selectedReceipt = ref(null)

function openReceipt(item) {
  selectedReceipt.value = item
  isReceiptOpen.value = true
}

function closeReceipt() {
  isReceiptOpen.value = false
}

function printReceipt() {
  window.print()
}
</script>

<template>
  <div class="ting-subscription-page flex flex-col gap-5">
    
    <!-- 1. Header Card -->
    <div class="card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-7 shadow-xs">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight m-0">
            Subscription Management
          </h1>
          <p class="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1">
            Kelola seluruh lisensi langganan bisnis Anda, tambah langganan baru, dan unduh riwayat kwitansi pembayaran.
          </p>
        </div>

        <!-- Tombol Tambah Langganan Baru -->
        <button 
          type="button"
          @click="activeTab = 'catalog'"
          class="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
        >
          <span>+ Tambah Subscription Baru</span>
        </button>
      </div>
    </div>

    <!-- 2. Navigasi Tab -->
    <div class="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
      <button 
        type="button"
        @click="activeTab = 'active'"
        :class="[
          activeTab === 'active'
            ? 'bg-slate-900 text-white dark:bg-orange-600 shadow-2xs font-bold'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium'
        ]"
        class="px-4 py-2 rounded-xl text-xs transition-all cursor-pointer flex items-center gap-1.5"
      >
        <span>Paket Aktif</span>
        <span class="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-700 dark:bg-orange-800 text-white">
          {{ activeSubscriptions.length }}
        </span>
      </button>

      <button 
        type="button"
        @click="activeTab = 'catalog'"
        :class="[
          activeTab === 'catalog'
            ? 'bg-slate-900 text-white dark:bg-orange-600 shadow-2xs font-bold'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium'
        ]"
        class="px-4 py-2 rounded-xl text-xs transition-all cursor-pointer"
      >
        Katalog Subscription
      </button>

      <button 
        type="button"
        @click="activeTab = 'history'"
        :class="[
          activeTab === 'history'
            ? 'bg-slate-900 text-white dark:bg-orange-600 shadow-2xs font-bold'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium'
        ]"
        class="px-4 py-2 rounded-xl text-xs transition-all cursor-pointer"
      >
        Riwayat Pembelian Subscription
      </button>
    </div>

    <!-- ================= TAB 1: PAKET AKTIF (BISA LEBIH DARI 1 SUBSCRIPTION) ================= -->
    <div v-if="activeTab === 'active'" class="space-y-4">
      <div class="flex items-center justify-between">
        <span class="text-xs text-slate-500">
          Bisnis Anda saat ini memiliki <strong>{{ activeSubscriptions.length }} paket langganan aktif</strong>.
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div 
          v-for="sub in activeSubscriptions" 
          :key="sub.id"
          class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4 flex flex-col justify-between"
        >
          <div class="space-y-2">
            <div class="flex items-start justify-between">
              <div>
                <span class="text-[10px] font-extrabold text-orange-600 uppercase tracking-wider block">
                  {{ sub.tier }}
                </span>
                <h3 class="text-base font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                  {{ sub.name }}
                </h3>
              </div>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                ● ACTIVE
              </span>
            </div>

            <div class="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl text-xs space-y-1.5">
              <div class="flex justify-between text-slate-600 dark:text-slate-300">
                <span class="text-slate-400">Periode Aktif:</span>
                <span class="font-semibold">{{ sub.period }}</span>
              </div>
              <div class="flex justify-between text-slate-600 dark:text-slate-300">
                <span class="text-slate-400">Metode Bayar:</span>
                <span class="font-semibold">{{ sub.method }}</span>
              </div>
            </div>

            <ul class="space-y-1 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <li v-for="(feat, fidx) in sub.features" :key="fidx" class="flex items-center gap-1.5">
                <span class="text-emerald-500 font-bold">✓</span>
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>

          <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
            <span class="text-slate-400">Status Pembayaran: <strong class="text-emerald-600">LUNAS</strong></span>
            <button 
              type="button"
              @click="activeTab = 'catalog'"
              class="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-lg font-semibold cursor-pointer"
            >
              + Beli Tambahan
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ================= TAB 2: KATALOG SUBSCRIPTION ================= -->
    <div v-else-if="activeTab === 'catalog'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div 
          v-for="plan in catalogPlans" 
          :key="plan.id"
          :class="[
            plan.popular ? 'border-orange-500 shadow-md ring-1 ring-orange-500' : 'border-slate-200 dark:border-slate-800 shadow-xs'
          ]"
          class="bg-white dark:bg-slate-900 border rounded-2xl p-5 flex flex-col justify-between space-y-4 relative"
        >
          <span 
            v-if="plan.popular" 
            class="absolute -top-3 right-5 text-[10px] bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold px-2.5 py-0.5 rounded-full uppercase shadow-xs"
          >
            Paling Populer
          </span>

          <div class="space-y-3">
            <div class="w-12 h-12 rounded-xl bg-orange-50 dark:bg-slate-800 text-2xl flex items-center justify-center">
              {{ plan.icon }}
            </div>
            <div>
              <h3 class="text-base font-bold text-slate-900 dark:text-slate-100">{{ plan.name }}</h3>
              <p class="text-xs text-slate-500 mt-0.5">{{ plan.desc }}</p>
            </div>
            <div class="flex items-baseline gap-1 pt-1">
              <span class="text-2xl font-black text-slate-900 dark:text-slate-100">{{ plan.priceFormatted }}</span>
              <span class="text-xs text-slate-400">{{ plan.period }}</span>
            </div>

            <ul class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800">
              <li v-for="(feat, fidx) in plan.features" :key="fidx" class="flex items-center gap-2">
                <span class="text-emerald-500 font-bold">✓</span>
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>

          <button 
            type="button"
            class="w-full py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            Pilih Paket Ini
          </button>
        </div>
      </div>
    </div>

    <!-- ================= TAB 3: RIWAYAT PEMBELIAN SUBSCRIPTION (SESUAI GAMBAR DUMMY) ================= -->
    <div v-else-if="activeTab === 'history'" class="space-y-3">
      <div>
        <h2 class="text-lg font-bold text-slate-900 dark:text-slate-100">Subscription Purchase History</h2>
        <p class="text-xs text-slate-500">View your subscription purchase transactions</p>
      </div>

      <div class="space-y-3 pt-2">
        <!-- Card Transaksi (Persis Tampilan client.horus.co.id) -->
        <div 
          v-for="item in purchaseHistory" 
          :key="item.id"
          class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-3"
        >
          <!-- Baris Atas: Judul & Status Badge -->
          <div class="flex items-center justify-between">
            <h3 class="text-sm md:text-base font-bold text-slate-900 dark:text-slate-100">
              {{ item.name }}
            </h3>
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                PAID
              </span>
              <span 
                v-if="item.isActivePlan" 
                class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-300"
              >
                ACTIVE PLAN
              </span>
            </div>
          </div>

          <!-- Baris Tengah: 3 Kolom Info & Tombol Download -->
          <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-3 text-xs">
            <!-- Kolom 1: Periode & Metode -->
            <div class="space-y-1">
              <div class="text-slate-400 text-[11px]">Subscription Period:</div>
              <div class="font-semibold text-slate-800 dark:text-slate-200">{{ item.period }}</div>
              <div class="text-slate-400 text-[11px] pt-1">Purchase Method:</div>
              <div class="font-semibold text-slate-800 dark:text-slate-200">{{ item.method }}</div>
            </div>

            <!-- Kolom 2: Amount & Tanggal Beli -->
            <div class="space-y-1">
              <div class="text-slate-400 text-[11px]">Amount:</div>
              <div class="font-bold text-orange-600 text-sm">{{ item.amount }}</div>
              <div class="text-slate-400 text-[11px] pt-1">Purchase Date:</div>
              <div class="font-semibold text-slate-800 dark:text-slate-200">{{ item.date }}</div>
            </div>

            <!-- Kolom 3: Tombol Download Receipt Hijau -->
            <div class="flex md:justify-end">
              <button 
                type="button"
                @click="openReceipt(item)"
                class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                <span>Download Receipt</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ================= MODAL KWITANSI / RECEIPT PREVIEW ================= -->
    <Teleport to="body">
      <div 
        v-if="isReceiptOpen && selectedReceipt" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs select-none"
        @click.self="closeReceipt"
      >
        <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative space-y-5 text-slate-800">
          <button 
            type="button"
            @click="closeReceipt" 
            class="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-sm p-1 rounded-lg cursor-pointer"
          >
            ✕
          </button>

          <!-- Receipt Header -->
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

          <!-- Box Subscription Details Hijau -->
          <div class="bg-emerald-50 border border-emerald-300 rounded-xl p-3 text-xs text-emerald-950 space-y-1">
            <div class="font-bold text-emerald-800">■ Subscription Details</div>
            <div>Plan: {{ selectedReceipt.name }}</div>
            <div>Duration: 12 months</div>
            <div>Period: {{ selectedReceipt.period }}</div>
            <div class="font-bold text-emerald-700">Your subscription is now active!</div>
          </div>

          <!-- Footer Modal Actions -->
          <div class="flex items-center justify-between pt-2">
            <span class="text-[11px] text-slate-400">Receipt generated electronically by Horus</span>
            <div class="flex gap-2">
              <button 
                type="button"
                @click="closeReceipt" 
                class="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg cursor-pointer"
              >
                Tutup
              </button>
              <button 
                type="button"
                @click="printReceipt" 
                class="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-2xs cursor-pointer flex items-center gap-1"
              >
                🖨️ Cetak / PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

  </div>
</template>
