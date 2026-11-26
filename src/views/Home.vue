<script setup>
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  GraduationCap,
  MonitorPlay,
  Palette,
  Play,
  Sparkles,
  Star,
  Users,
} from 'lucide-vue-next'
import PublicFooter from '../components/PublicFooter.vue'
import PublicHeader from '../components/PublicHeader.vue'

const courses = [
  {
    category: 'DESIGN',
    title: 'Design that makes a difference',
    lessons: '18 lessons',
    icon: Palette,
    color: 'bg-rose-100 text-rose-600',
    accent: 'from-rose-400 to-orange-300',
  },
  {
    category: 'DEVELOPMENT',
    title: 'Build your first web app',
    lessons: '24 lessons',
    icon: Code2,
    color: 'bg-violet-100 text-violet-600',
    accent: 'from-violet-500 to-indigo-400',
  },
  {
    category: 'BUSINESS',
    title: 'Turn ideas into impact',
    lessons: '16 lessons',
    icon: Users,
    color: 'bg-amber-100 text-amber-600',
    accent: 'from-amber-400 to-yellow-300',
  },
]
</script>

<template>
  <div class="min-h-screen overflow-hidden bg-[#fbfaff] text-slate-900">
    <PublicHeader />

    <main>
      <section id="home" class="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-12 lg:pb-24 lg:pt-20">
        <div class="pointer-events-none absolute -left-48 top-10 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl"></div>
        <div class="relative z-10 animate-[fadeIn_0.8s_ease-out_both]">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white/80 px-3.5 py-2 text-xs font-bold tracking-wide text-violet-700 shadow-sm shadow-violet-100/70">
            <Sparkles :size="15" class="text-amber-500" />
            A little learning goes a long way
          </div>

          <h1 class="max-w-2xl text-4xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.65rem]">
            Your next big idea starts with
            <span class="relative inline-block text-violet-600">
              learning.
              <span class="absolute -bottom-1 left-0 -z-10 h-3 w-full rounded-full bg-amber-200/80"></span>
            </span>
          </h1>
          <p class="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Build real-world skills, discover what you love, and take your future one lesson at a time. Your next chapter is closer than you think.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <router-link to="/register" class="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-xl">
              Start learning for free
              <ArrowRight :size="18" class="transition duration-300 group-hover:translate-x-1" />
            </router-link>
            <router-link to="/course" class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:text-violet-700">
              <Play :size="16" class="fill-violet-600 text-violet-600" />
              Explore courses
            </router-link>
          </div>

          <div class="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div class="flex items-center -space-x-2">
              <span class="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#fbfaff] bg-rose-200 text-xs font-bold text-rose-700">AM</span>
              <span class="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#fbfaff] bg-sky-200 text-xs font-bold text-sky-700">JL</span>
              <span class="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#fbfaff] bg-amber-200 text-xs font-bold text-amber-700">SK</span>
              <span class="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#fbfaff] bg-violet-200 text-xs font-bold text-violet-700">+</span>
            </div>
            <div>
              <div class="flex items-center gap-1 text-amber-500" aria-label="Rated 4.9 out of 5">
                <Star v-for="star in 5" :key="star" :size="13" class="fill-current" />
                <span class="ml-1 text-xs font-extrabold text-slate-800">4.9/5</span>
              </div>
              <p class="mt-0.5 text-xs text-slate-500">Loved by 12,000+ curious minds</p>
            </div>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-[540px] animate-[fadeIn_1s_ease-out_0.1s_both] lg:ml-auto">
          <div class="absolute -right-6 top-8 h-64 w-64 rounded-full bg-fuchsia-200/60 blur-3xl sm:-right-10"></div>
          <div class="absolute -bottom-5 left-0 h-56 w-56 rounded-full bg-amber-200/50 blur-3xl"></div>

          <div class="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-900 p-5 shadow-2xl shadow-violet-300/50 sm:p-7">
            <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 22px 22px;"></div>
            <div class="relative z-10 flex items-center justify-between">
              <div>
                <p class="text-xs font-bold uppercase tracking-[0.18em] text-violet-200">Your learning space</p>
                <h2 class="mt-1 text-xl font-extrabold text-white sm:text-2xl">Make today count.</h2>
              </div>
              <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-amber-300 backdrop-blur">
                <GraduationCap :size="24" />
              </span>
            </div>

            <div class="relative z-10 mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm sm:p-5">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-300 text-amber-950">
                    <MonitorPlay :size="22" />
                  </span>
                  <div>
                    <p class="text-sm font-bold text-white">Web design essentials</p>
                    <p class="mt-1 text-xs text-violet-200">Lesson 04 · 12 min</p>
                  </div>
                </div>
                <button type="button" class="flex h-9 w-9 items-center justify-center rounded-full bg-white text-violet-700 transition duration-200 hover:scale-110" aria-label="Preview Web design essentials">
                  <Play :size="15" class="ml-0.5 fill-current" />
                </button>
              </div>
              <div class="mt-5 flex items-center justify-between text-xs font-semibold text-violet-100">
                <span>Your progress</span>
                <span>68%</span>
              </div>
              <div class="mt-2 h-2 overflow-hidden rounded-full bg-white/20">
                <div class="h-full w-[68%] rounded-full bg-amber-300"></div>
              </div>
            </div>

            <div class="relative z-10 mt-4 grid grid-cols-2 gap-3">
              <div class="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <div class="flex items-center gap-2 text-emerald-300"><CheckCircle2 :size="17" /><span class="text-xs font-bold">Small steps</span></div>
                <p class="mt-2 text-sm font-bold text-white">Big progress</p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <div class="flex items-center gap-2 text-amber-300"><Sparkles :size="17" /><span class="text-xs font-bold">Made for you</span></div>
                <p class="mt-2 text-sm font-bold text-white">Learn your way</p>
              </div>
            </div>

            <div class="pointer-events-none absolute -right-3 top-1/2 z-20 hidden animate-[float_5s_ease-in-out_infinite] items-center gap-2 rounded-xl border border-white/60 bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-xl sm:flex">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"><CheckCircle2 :size="18" /></span>
              You did it!
            </div>
            <div class="pointer-events-none absolute -left-3 bottom-14 z-20 hidden animate-[float_6s_ease-in-out_0.5s_infinite] items-center gap-2 rounded-xl border border-white/60 bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-xl sm:flex">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600"><Star :size="17" class="fill-current" /></span>
              Keep it up!
            </div>
          </div>
          <div class="relative z-10 mt-5 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
            <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
            A better you, one lesson at a time
          </div>
        </div>
      </section>

      <section id="why-edulearn" class="border-y border-violet-100/80 bg-white/75">
        <div class="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-8 sm:px-8 md:grid-cols-4 lg:px-12">
          <div class="text-center md:border-r md:border-slate-100">
            <p class="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">12k<span class="text-violet-600">+</span></p>
            <p class="mt-1 text-xs font-medium text-slate-500 sm:text-sm">Happy learners</p>
          </div>
          <div class="text-center md:border-r md:border-slate-100">
            <p class="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">80<span class="text-violet-600">+</span></p>
            <p class="mt-1 text-xs font-medium text-slate-500 sm:text-sm">Expert-led courses</p>
          </div>
          <div class="text-center md:border-r md:border-slate-100">
            <p class="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">4.9<span class="text-violet-600">/5</span></p>
            <p class="mt-1 text-xs font-medium text-slate-500 sm:text-sm">Average course rating</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">Anytime</p>
            <p class="mt-1 text-xs font-medium text-slate-500 sm:text-sm">Learn at your pace</p>
          </div>
        </div>
      </section>

      <section id="courses" class="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div class="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-violet-600">
              <span class="h-px w-6 bg-violet-400"></span>
              Find your thing
            </div>
            <h2 class="max-w-xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Curiosity looks good on you.</h2>
            <p class="mt-3 max-w-lg text-sm leading-6 text-slate-500 sm:text-base">Pick a path, explore at your own pace, and turn “I wonder” into “I can.”</p>
          </div>
          <router-link to="/course" class="group inline-flex items-center gap-2 self-start text-sm font-bold text-violet-700 transition hover:text-violet-900 sm:self-auto">
            Browse all courses
            <ArrowRight :size="17" class="transition duration-300 group-hover:translate-x-1" />
          </router-link>
        </div>

        <div id="categories" class="mt-9 grid gap-5 md:grid-cols-3">
          <article v-for="(course, index) in courses" :key="course.title" class="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-violet-100 hover:shadow-xl hover:shadow-violet-100/60" :style="{ animationDelay: `${index * 120}ms` }">
            <div class="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br" :class="course.accent">
              <div class="absolute -right-8 -top-10 h-36 w-36 rounded-full border-[20px] border-white/20 transition duration-500 group-hover:scale-110"></div>
              <div class="absolute -bottom-12 -left-8 h-36 w-36 rounded-full border-[20px] border-white/20"></div>
              <span class="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-white/90 text-violet-700 shadow-xl transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                <component :is="course.icon" :size="34" />
              </span>
              <span class="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold tracking-widest text-slate-700">{{ course.category }}</span>
            </div>
            <div class="p-5">
              <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400"><BookOpen :size="14" /> {{ course.lessons }}</span>
              <h3 class="mt-2 text-lg font-extrabold leading-snug text-slate-900">{{ course.title }}</h3>
              <router-link to="/register" class="group/link mt-4 inline-flex items-center gap-2 text-sm font-bold text-violet-700 hover:text-violet-900">
                Start this course
                <ArrowRight :size="15" class="transition duration-300 group-hover/link:translate-x-1" />
              </router-link>
            </div>
          </article>
        </div>
      </section>

      <section id="how-it-works" class="border-y border-violet-100/80 bg-white/75 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div class="mx-auto max-w-7xl">
          <div class="mx-auto max-w-2xl text-center">
            <div class="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-violet-600">
              <span class="h-px w-6 bg-violet-400"></span>
              Simple by design
              <span class="h-px w-6 bg-violet-400"></span>
            </div>
            <h2 class="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Your learning journey, made easy.</h2>
            <p class="mt-3 text-sm leading-6 text-slate-500 sm:text-base">A few small steps can lead to something great.</p>
          </div>

          <div class="mt-10 grid gap-5 md:grid-cols-3">
            <article class="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-100/60">
              <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700"><BookOpen :size="23" /></span>
              <p class="mt-5 text-xs font-extrabold uppercase tracking-widest text-violet-600">Step 01</p>
              <h3 class="mt-2 text-lg font-extrabold text-slate-900">Choose a course</h3>
              <p class="mt-2 text-sm leading-6 text-slate-500">Find a topic that interests you and pick a course that fits your goals.</p>
            </article>
            <article class="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-100/60">
              <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700"><Play :size="22" /></span>
              <p class="mt-5 text-xs font-extrabold uppercase tracking-widest text-violet-600">Step 02</p>
              <h3 class="mt-2 text-lg font-extrabold text-slate-900">Learn at your pace</h3>
              <p class="mt-2 text-sm leading-6 text-slate-500">Work through clear lessons whenever and wherever it suits you.</p>
            </article>
            <article class="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-100/60">
              <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"><CheckCircle2 :size="23" /></span>
              <p class="mt-5 text-xs font-extrabold uppercase tracking-widest text-violet-600">Step 03</p>
              <h3 class="mt-2 text-lg font-extrabold text-slate-900">Track your progress</h3>
              <p class="mt-2 text-sm leading-6 text-slate-500">Celebrate completed lessons and keep building skills one step at a time.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="stories" class="mx-5 mb-16 overflow-hidden rounded-[2rem] bg-[#211747] px-6 py-12 text-center sm:mx-8 sm:mb-20 sm:px-12 sm:py-16 lg:mx-auto lg:max-w-7xl lg:px-20">
        <div class="pointer-events-none relative">
          <div class="absolute -left-20 -top-32 h-64 w-64 rounded-full bg-violet-500/30 blur-3xl"></div>
          <div class="absolute -right-20 -top-32 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
          <div class="relative">
            <div class="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-bold text-violet-200">
              <GraduationCap :size="16" />
              Your next chapter starts here
            </div>
            <h2 class="mx-auto mt-5 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">The best time to learn something new is now.</h2>
            <p class="mx-auto mt-4 max-w-xl text-sm leading-6 text-violet-200/80 sm:text-base">Sign up, find a course that sparks your curiosity, and start making progress today.</p>
            <router-link to="/register" class="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-300 px-6 py-3.5 text-sm font-extrabold text-violet-950 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-amber-200">
              Create your free account
              <ArrowRight :size="17" class="transition duration-300 group-hover:translate-x-1" />
            </router-link>
            <p class="mt-4 text-xs text-violet-200/70">Already have an account? <router-link to="/login" class="font-bold text-white underline decoration-violet-300 underline-offset-4 transition hover:text-amber-200">Sign in</router-link></p>
          </div>
        </div>
      </section>
    </main>

    <PublicFooter />
  </div>
</template>
