<script setup>
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Play,
  Sparkles,
} from 'lucide-vue-next'
import PublicFooter from '../components/PublicFooter.vue'
import PublicHeader from '../components/PublicHeader.vue'

const steps = [
  {
    number: '01',
    title: 'Choose a course',
    description: 'Browse topics and choose a course that fits your interests and goals.',
    icon: BookOpen,
    tint: 'bg-violet-100 text-violet-700',
  },
  {
    number: '02',
    title: 'Learn at your pace',
    description: 'Follow clear lessons and make learning fit into your day.',
    icon: Play,
    tint: 'bg-amber-100 text-amber-700',
  },
  {
    number: '03',
    title: 'Track your progress',
    description: 'Keep your momentum, celebrate completed lessons, and build confidence.',
    icon: CheckCircle2,
    tint: 'bg-emerald-100 text-emerald-700',
  },
]
</script>

<template>
  <div class="min-h-screen bg-[#fbfaff] text-slate-900">
    <PublicHeader />

    <main>
      <section class="relative overflow-hidden bg-[#211747]">
        <div class="pointer-events-none absolute -right-28 -top-40 h-96 w-96 rounded-full bg-violet-500/30 blur-3xl"></div>
        <div class="pointer-events-none absolute -bottom-48 left-1/4 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl"></div>
        <div class="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-24">
          <div class="animate-[fadeIn_0.8s_ease-out_both]">
            <div class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-bold text-violet-200">
              <Sparkles :size="15" class="text-amber-300" />
              Simple steps, real progress
            </div>
            <h1 class="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your next skill is closer than you think.
            </h1>
            <p class="mt-5 max-w-xl text-base leading-7 text-violet-100/75 sm:text-lg">
              EduLearn helps you turn curiosity into a learning routine that fits your life.
            </p>
            <router-link to="/course" class="group mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-300 px-5 py-3.5 text-sm font-extrabold text-violet-950 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-amber-200">
              Explore courses
              <ArrowRight :size="17" class="transition duration-300 group-hover:translate-x-1" />
            </router-link>
          </div>

          <div class="relative mx-auto flex h-64 w-full max-w-sm items-center justify-center">
            <div class="absolute h-64 w-64 rounded-full border border-white/15"></div>
            <div class="absolute h-48 w-48 rounded-full border border-white/15"></div>
            <div class="absolute h-36 w-36 rounded-full bg-violet-500/30 blur-3xl"></div>
            <div class="relative flex h-36 w-40 -rotate-6 flex-col items-center justify-center rounded-3xl border border-white/20 bg-gradient-to-br from-violet-500 to-indigo-700 text-white shadow-2xl transition duration-500 hover:rotate-0 hover:scale-105">
              <GraduationCap :size="48" />
              <span class="mt-2 text-xs font-extrabold tracking-[0.16em]">YOUR NEXT STEP</span>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div class="mx-auto max-w-2xl text-center">
          <p class="text-xs font-extrabold uppercase tracking-[0.16em] text-violet-600">How it works</p>
          <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">A little progress adds up.</h2>
          <p class="mt-4 text-sm leading-6 text-slate-500 sm:text-base">Start with one course and make learning your own.</p>
        </div>

        <div class="relative mt-12 grid gap-5 md:grid-cols-3">
          <div class="pointer-events-none absolute left-[17%] right-[17%] top-12 hidden border-t-2 border-dashed border-violet-200 md:block"></div>
          <article v-for="step in steps" :key="step.number" class="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-100/60">
            <div class="flex items-center justify-between">
              <span class="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl" :class="step.tint">
                <component :is="step.icon" :size="25" />
              </span>
              <span class="text-sm font-black tracking-widest text-slate-300">{{ step.number }}</span>
            </div>
            <h3 class="mt-6 text-xl font-extrabold text-slate-900">{{ step.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-500">{{ step.description }}</p>
          </article>
        </div>
      </section>

      <section class="border-y border-violet-100 bg-white">
        <div class="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3 lg:px-12">
          <div>
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700"><BookOpen :size="20" /></div>
            <h3 class="mt-4 font-extrabold text-slate-900">Learn in small steps</h3>
            <p class="mt-2 text-sm leading-6 text-slate-500">Break a new topic into lessons that are easier to fit into your routine.</p>
          </div>
          <div>
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700"><Sparkles :size="20" /></div>
            <h3 class="mt-4 font-extrabold text-slate-900">Follow your interests</h3>
            <p class="mt-2 text-sm leading-6 text-slate-500">Explore different subjects and choose what feels right for you.</p>
          </div>
          <div>
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"><CheckCircle2 :size="20" /></div>
            <h3 class="mt-4 font-extrabold text-slate-900">Celebrate your progress</h3>
            <p class="mt-2 text-sm leading-6 text-slate-500">Keep track of what you finish and recognize every step forward.</p>
          </div>
        </div>
      </section>
    </main>

    <PublicFooter />
  </div>
</template>
