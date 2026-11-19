<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isSidebarOpen = ref(true)
const isHelpModalOpen = ref(false)

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 antialiased selection:bg-orange-100 selection:text-orange-900">
    
    <!-- ================= TOP NAVBAR ================= -->
    <header class="h-16 bg-white border-b border-slate-200 px-4 md:px-6 flex items-center justify-between sticky top-0 z-40 select-none">
      <div class="flex items-center gap-4">
        <!-- Sidebar Toggle -->
        <button 
          type="button"
          @click="toggleSidebar" 
          class="p-2 text-slate-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors cursor-pointer" 
          title="Toggle Sidebar"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        <!-- Horus Logo & Brand -->
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-sm shadow-orange-200">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 17.93V17a1 1 0 0 0-2 0v2.93A8 8 0 0 1 4.07 13H7a1 1 0 0 0 0-2H4.07A8 8 0 0 1 11 4.07V7a1 1 0 0 0 2 0V4.07A8 8 0 0 1 19.93 11H17a1 1 0 0 0 0 2h2.93A8 8 0 0 1 13 19.93zM12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/>
            </svg>
          </div>
          <div class="flex items-baseline gap-1.5">
            <span class="text-lg font-black tracking-wider text-slate-900">HORUS</span>
            <span class="text-xs font-bold text-orange-600 uppercase tracking-widest">Support</span>
          </div>
        </div>

        <!-- Project Switcher (Matches client.horus.co.id) -->
        <div class="hidden lg:flex items-center ml-4 pl-4 border-l border-slate-200">
          <div class="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 cursor-pointer transition-colors">
            <span class="text-orange-600">💼</span>
            <span>Testing SA (TSA)</span>
            <svg class="w-3 h-3 text-slate-400 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Right Controls -->
      <div class="flex items-center gap-3">
        <!-- Quick Nav to Subscriptions -->
        <router-link 
          to="/subscriptions" 
          class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors border"
          :class="route.name === 'subscriptions' ? 'bg-orange-50 text-orange-700 border-orange-200' : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50 border-transparent hover:border-orange-200'"
        >
          <span>💳</span>
          <span>Subscriptions</span>
        </router-link>

        <!-- Quick Nav to TING Product -->
        <router-link 
          to="/ting-products" 
          class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors border"
          :class="route.name === 'tingProducts' ? 'bg-orange-50 text-orange-700 border-orange-200' : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50 border-transparent hover:border-orange-200'"
        >
          <span class="w-4 h-4 rounded bg-sky-500 text-white flex items-center justify-center text-[9px] font-bold">T</span>
          <span>TING Product</span>
        </router-link>

        <!-- User Profile Avatar -->
        <div class="flex items-center gap-2.5 pl-2 border-l border-slate-200">
          <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
            SA
          </div>
          <div class="hidden sm:block text-left">
            <span class="text-xs font-bold text-slate-800 block leading-tight">System Analyst</span>
            <span class="text-[10px] text-slate-500">Member</span>
          </div>
        </div>
      </div>
    </header>

    <!-- ================= LAYOUT (SIDEBAR + MAIN CONTENT) ================= -->
    <div class="flex-1 flex overflow-hidden">

      <!-- ================= LEFT SIDEBAR (HORUS SUPPORT) ================= -->
      <aside 
        v-show="isSidebarOpen"
        class="w-64 bg-white border-r border-slate-200 flex flex-col justify-between p-3.5 shrink-0 select-none overflow-y-auto custom-scrollbar transition-all"
      >
        <div class="space-y-4">
          
          <div class="px-3 pt-1">
            <span class="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase">Menu Utama</span>
          </div>

          <nav class="space-y-0.5 text-xs font-medium">
            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">🏠</span>
              <span>Dashboard</span>
            </a>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">📥</span>
              <span>Inbox</span>
            </a>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">📈</span>
              <span>Development Progress</span>
            </a>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">💼</span>
              <span>Businesses</span>
            </a>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">📋</span>
              <span>Cases</span>
            </a>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">📄</span>
              <span>Docs</span>
            </a>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">🌐</span>
              <span>Domains</span>
            </a>

            <!-- Subscriptions Router Link -->
            <router-link 
              to="/subscriptions" 
              class="flex items-center justify-between px-3 py-2 rounded-lg transition-all"
              :class="route.name === 'subscriptions' ? 'bg-orange-50 text-orange-700 font-bold border border-orange-200' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'"
            >
              <div class="flex items-center gap-3">
                <span>💳</span>
                <span>Subscriptions</span>
              </div>
              <span class="text-[10px] text-slate-400 font-semibold">SA</span>
            </router-link>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">🖥️</span>
              <span>Services</span>
            </a>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">✨</span>
              <span>Top Up</span>
            </a>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">🎟️</span>
              <span>VIP Pass</span>
            </a>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">👥</span>
              <span>Business Members</span>
            </a>

            <!-- Ecosystem Divider -->
            <div class="pt-3 pb-1 px-3">
              <span class="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase">Ecosystem & Partner</span>
            </div>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">🌐</span>
              <span>Horus Ecosystem</span>
            </a>

            <!-- [ACTIVE / NEW] TING Product Router Link -->
            <router-link 
              to="/ting-products" 
              class="flex items-center justify-between px-3 py-2 rounded-lg transition-all"
              :class="route.name === 'tingProducts' ? 'bg-orange-50 text-orange-700 font-bold border border-orange-200 shadow-2xs' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'"
            >
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 rounded bg-sky-500 text-white flex items-center justify-center text-[10px] font-black shadow-2xs">
                  T
                </div>
                <span class="font-semibold text-slate-900">TING Product</span>
              </div>
              <span class="text-[9px] bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold px-1.5 py-0.5 rounded tracking-wide uppercase">
                Web
              </span>
            </router-link>

            <a href="#" class="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
              <span class="text-slate-400">📊</span>
              <span>Server Monitoring</span>
            </a>
          </nav>
        </div>

        <!-- Bottom Help Box in Sidebar -->
        <div class="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs">
          <div class="flex items-center gap-2 text-slate-800 font-bold">
            <span class="text-orange-600">❓</span>
            <span>Horus Support 24/7</span>
          </div>
          <p class="text-[11px] text-slate-500 leading-normal">
            Perlu bantuan integrasi atau setup produk TING pada project Anda?
          </p>
          <button 
            type="button"
            @click="isHelpModalOpen = true" 
            class="w-full mt-1 py-1.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>💬</span>
            <span>Konsultasi Teknis</span>
          </button>
        </div>
      </aside>

      <!-- ================= MAIN CONTENT VIEW (ROUTER-VIEW) ================= -->
      <main class="flex-1 overflow-y-auto custom-scrollbar p-3 md:p-6 lg:p-8 space-y-6">
        
        <!-- Breadcrumbs -->
        <nav class="flex items-center gap-2 text-xs text-slate-500">
          <span class="hover:text-slate-800 transition-colors">Support</span>
          <span class="text-slate-400">›</span>
          <span class="hover:text-slate-800 transition-colors">Ecosystem</span>
          <span class="text-slate-400">›</span>
          <span class="font-semibold text-slate-900">
            {{ route.meta.title || 'TING Product' }}
          </span>
        </nav>

        <!-- Router View: Injects TingProductsView or SubscriptionsView -->
        <router-view></router-view>
      </main>
    </div>

    <!-- ================= FLOATING CHAT / HELP BUTTON ================= -->
    <div class="fixed bottom-6 right-6 z-50">
      <button 
        type="button"
        @click="isHelpModalOpen = true" 
        class="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white flex items-center justify-center shadow-lg shadow-orange-300 hover:shadow-orange-400 transition-all hover:scale-105 active:scale-95 cursor-pointer" 
        title="Bantuan Horus"
      >
        <span class="text-lg font-bold">?</span>
      </button>
    </div>

    <!-- ================= HELP MODAL ================= -->
    <Teleport to="body">
      <div 
        v-if="isHelpModalOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs select-none"
        @click.self="isHelpModalOpen = false"
      >
        <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative space-y-4">
          <button 
            type="button"
            @click="isHelpModalOpen = false" 
            class="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            ✕
          </button>

          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white flex items-center justify-center text-xl shadow-xs">
              🎧
            </div>
            <div>
              <h3 class="text-base font-bold text-slate-900">Bantuan Horus Support</h3>
              <p class="text-xs text-slate-500">Layanan konsultasi teknis ekosistem TING</p>
            </div>
          </div>

          <div class="space-y-2 text-xs text-slate-600 leading-relaxed">
            <p>
              Jika Anda memerlukan bantuan aktivasi API key, instalasi printer POS, atau integrasi webhook TING pada sistem Horus Anda:
            </p>
            <div class="p-3 bg-orange-50 border border-orange-200 rounded-xl space-y-1.5 text-orange-950 font-medium">
              <div>Email: <strong>support@horus.co.id</strong></div>
              <div>Hotline / WA: <strong>+62 812-XXXX-XXXX</strong></div>
              <div>Jam Operasional: <strong>08:30 - 17:30 WIB</strong></div>
            </div>
          </div>

          <div class="flex justify-end pt-2">
            <button 
              type="button"
              @click="isHelpModalOpen = false" 
              class="w-full py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold rounded-xl hover:shadow-xs transition-all cursor-pointer"
            >
              Mengerti
            </button>
          </div>
        </div>
      </div>
    </Teleport>

  </div>
</template>
