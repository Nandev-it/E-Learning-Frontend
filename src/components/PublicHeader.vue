<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowRight, Menu, X } from 'lucide-vue-next'

const menuOpen = ref(false)
const isScrolled = ref(false)

const updateScrollState = () => {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollState)
})

const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/course' },
  { label: 'Categories', to: '/categories' },
  { label: 'How it works', to: '/how-it-works' },
]
</script>

<template>
  <div class="h-[89px]">
    <header
      class="fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-in-out"
      :class="isScrolled
        ? 'border-violet-200 bg-white/75 shadow-md shadow-violet-950/5 backdrop-blur-lg'
        : 'border-violet-100/70 bg-[#fbfaff]/95'"
    >
      <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <router-link to="/" class="group inline-flex items-center" aria-label="Eduplex home">
          <img src="/logo.png" alt="Eduplex" class="h-14 w-14 object-contain transition duration-300 group-hover:scale-105" />
        </router-link>

        <nav class="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <router-link
            v-for="link in navigationLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm font-semibold text-slate-600 transition duration-200 hover:text-violet-700"
            exact-active-class="text-violet-700"
          >
            {{ link.label }}
          </router-link>
        </nav>

        <div class="hidden items-center gap-3 md:flex">
          <router-link to="/login" class="rounded-xl px-4 py-2.5 text-sm font-bold text-slate-700 transition duration-200 hover:bg-violet-50 hover:text-violet-700">
            Sign in
          </router-link>
          <router-link to="/register" class="group inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition duration-300 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-xl">
            Get started
            <ArrowRight :size="16" class="transition duration-300 group-hover:translate-x-1" />
          </router-link>
        </div>

        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-violet-200 hover:text-violet-700 md:hidden"
          :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <X v-if="menuOpen" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <nav v-if="menuOpen" class="absolute left-0 right-0 top-full z-30 border-y border-violet-100 bg-white px-5 py-5 shadow-xl shadow-violet-950/5 md:hidden" aria-label="Mobile navigation">
          <div class="mx-auto flex max-w-7xl flex-col gap-1">
            <router-link
              v-for="link in navigationLinks"
              :key="link.to"
              :to="link.to"
              class="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-violet-50 hover:text-violet-700"
              exact-active-class="bg-violet-50 text-violet-700"
              @click="menuOpen = false"
            >
              {{ link.label }}
            </router-link>
            <div class="mt-2 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
              <router-link to="/login" class="rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-bold text-slate-700" @click="menuOpen = false">Sign in</router-link>
              <router-link to="/register" class="rounded-xl bg-violet-600 px-4 py-3 text-center text-sm font-bold text-white" @click="menuOpen = false">Get started</router-link>
            </div>
          </div>
        </nav>
      </Transition>
    </header>
  </div>
</template>
