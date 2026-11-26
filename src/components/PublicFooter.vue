<script setup>
import { ArrowRight, BookOpen, GraduationCap } from 'lucide-vue-next'
</script>

<template>
  <footer class="relative overflow-hidden bg-[#17122f] text-white">
    <div class="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"></div>
    <div class="pointer-events-none absolute -bottom-48 left-1/4 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
    <div class="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <div class="grid gap-10 border-b border-white/10 py-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_auto] lg:gap-12 lg:py-14">
        <div class="max-w-sm">
          <router-link to="/" class="group inline-flex items-center gap-2.5" aria-label="EduLearn home">
            <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 text-white shadow-lg shadow-violet-950/30 transition duration-300 group-hover:-rotate-6 group-hover:scale-105">
              <BookOpen :size="21" />
            </span>
            <span class="text-xl font-extrabold tracking-tight">Edu<span class="text-violet-300">Learn</span></span>
          </router-link>
          <p class="mt-4 text-sm leading-6 text-violet-100/70">
            Make room for curiosity. Learn useful skills, one small step at a time.
          </p>
          <div class="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-violet-100/80">
            <GraduationCap :size="15" class="text-amber-300" />
            Learning made for you
          </div>
        </div>

        <nav aria-label="Footer learning links">
          <h2 class="text-sm font-extrabold text-white">Explore</h2>
          <ul class="mt-4 space-y-3">
            <li><router-link to="/course" class="text-sm text-violet-100/70 transition duration-200 hover:text-white">Courses</router-link></li>
            <li><router-link to="/categories" class="text-sm text-violet-100/70 transition duration-200 hover:text-white">Categories</router-link></li>
            <li><router-link to="/how-it-works" class="text-sm text-violet-100/70 transition duration-200 hover:text-white">How it works</router-link></li>
          </ul>
        </nav>

        <nav aria-label="Footer account links">
          <h2 class="text-sm font-extrabold text-white">Your account</h2>
          <ul class="mt-4 space-y-3">
            <li><router-link to="/login" class="text-sm text-violet-100/70 transition duration-200 hover:text-white">Sign in</router-link></li>
            <li><router-link to="/register" class="text-sm text-violet-100/70 transition duration-200 hover:text-white">Create an account</router-link></li>
          </ul>
        </nav>

        <router-link to="/#home" class="group inline-flex h-fit items-center gap-2 text-sm font-bold text-white transition duration-200 hover:text-violet-200">
          Back to top
          <ArrowRight :size="16" class="-rotate-45 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </router-link>
      </div>

      <div class="flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
        <p class="text-xs text-violet-100/50">© {{ new Date().getFullYear() }} EduLearn. Learn something wonderful.</p>
        <p class="text-xs text-violet-100/50">Built for curious minds, everywhere.</p>
      </div>
    </div>
  </footer>
</template>
