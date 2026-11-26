<script setup>
import {
  ArrowRight,
  Briefcase,
  Camera,
  Code2,
  Palette,
  Sparkles,
  Users,
} from 'lucide-vue-next'
import PublicFooter from '../components/PublicFooter.vue'
import PublicHeader from '../components/PublicHeader.vue'

const categories = [
  {
    name: 'Design',
    description: 'Explore visual design, creative thinking, and the details that make ideas clear.',
    icon: Palette,
    accent: 'from-rose-400 to-orange-300',
    tint: 'bg-rose-50 text-rose-600',
  },
  {
    name: 'Development',
    description: 'Build practical coding skills and bring your ideas to life on the web.',
    icon: Code2,
    accent: 'from-violet-500 to-indigo-400',
    tint: 'bg-violet-50 text-violet-600',
  },
  {
    name: 'Business',
    description: 'Learn how to plan, launch, and grow thoughtful ideas and projects.',
    icon: Briefcase,
    accent: 'from-amber-400 to-yellow-300',
    tint: 'bg-amber-50 text-amber-600',
  },
  {
    name: 'Marketing',
    description: 'Find your audience and communicate what makes your work valuable.',
    icon: Users,
    accent: 'from-fuchsia-400 to-pink-300',
    tint: 'bg-fuchsia-50 text-fuchsia-600',
  },
  {
    name: 'Photography',
    description: 'Get comfortable with composition, light, and visual storytelling.',
    icon: Camera,
    accent: 'from-cyan-400 to-sky-300',
    tint: 'bg-cyan-50 text-cyan-700',
  },
  {
    name: 'Personal Growth',
    description: 'Build good learning habits and make steady progress toward your goals.',
    icon: Sparkles,
    accent: 'from-emerald-400 to-teal-300',
    tint: 'bg-emerald-50 text-emerald-700',
  },
]
</script>

<template>
  <div class="min-h-screen bg-[#fbfaff] text-slate-900">
    <PublicHeader />

    <main>
      <section class="relative overflow-hidden bg-[#211747]">
        <div class="pointer-events-none absolute -right-24 -top-40 h-96 w-96 rounded-full bg-violet-500/30 blur-3xl"></div>
        <div class="pointer-events-none absolute -bottom-48 left-1/4 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
        <div class="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div class="max-w-3xl animate-[fadeIn_0.8s_ease-out_both]">
            <div class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-bold text-violet-200">
              <Sparkles :size="15" class="text-amber-300" />
              Follow your curiosity
            </div>
            <h1 class="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pick a path.
              <span class="text-violet-300">See where it takes you.</span>
            </h1>
            <p class="mt-5 max-w-2xl text-base leading-7 text-violet-100/75 sm:text-lg">
              Explore learning topics, discover a new interest, or take the next step in a skill you already love.
            </p>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p class="text-xs font-extrabold uppercase tracking-[0.16em] text-violet-600">Browse by interest</p>
            <h2 class="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">What would you like to learn?</h2>
          </div>
          <router-link to="/course" class="group inline-flex items-center gap-2 self-start text-sm font-bold text-violet-700 transition hover:text-violet-900 sm:self-auto">
            See all courses
            <ArrowRight :size="16" class="transition duration-300 group-hover:translate-x-1" />
          </router-link>
        </div>

        <div class="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <router-link
            v-for="(category, index) in categories"
            :key="category.name"
            :to="{ name: 'Course', query: { category: category.name } }"
            class="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-violet-100 hover:shadow-xl hover:shadow-violet-100/60 animate-[fadeIn_0.6s_ease-out_both]"
            :style="{ animationDelay: `${index * 80}ms` }"
          >
            <div class="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition duration-500 group-hover:opacity-40" :class="category.accent"></div>
            <div class="relative flex items-start justify-between gap-4">
              <span class="flex h-14 w-14 items-center justify-center rounded-2xl transition duration-300 group-hover:rotate-6 group-hover:scale-105" :class="category.tint">
                <component :is="category.icon" :size="26" />
              </span>
              <span class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition duration-300 group-hover:border-violet-200 group-hover:bg-violet-600 group-hover:text-white">
                <ArrowRight :size="16" class="transition duration-300 group-hover:translate-x-0.5" />
              </span>
            </div>
            <h3 class="relative mt-6 text-xl font-extrabold text-slate-900">{{ category.name }}</h3>
            <p class="relative mt-2 min-h-12 text-sm leading-6 text-slate-500">{{ category.description }}</p>
            <span class="relative mt-5 inline-flex items-center gap-2 text-sm font-bold text-violet-700">
              Explore {{ category.name.toLowerCase() }}
              <ArrowRight :size="14" />
            </span>
          </router-link>
        </div>
      </section>

      <section class="mx-5 mb-16 rounded-[2rem] bg-violet-50 px-6 py-10 sm:mx-8 sm:px-10 lg:mx-auto lg:mb-20 lg:max-w-7xl">
        <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div class="flex items-start gap-4">
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm"><Sparkles :size="22" /></span>
            <div>
              <h2 class="text-xl font-extrabold text-slate-900">Still exploring?</h2>
              <p class="mt-1 max-w-xl text-sm leading-6 text-slate-600">Browse the course library and see what sparks your interest.</p>
            </div>
          </div>
          <router-link to="/course" class="group inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-700">
            Browse courses <ArrowRight :size="16" class="transition duration-300 group-hover:translate-x-1" />
          </router-link>
        </div>
      </section>
    </main>

    <PublicFooter />
  </div>
</template>
