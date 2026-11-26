<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Camera,
  Clock,
  Code2,
  Palette,
  Search,
  Sparkles,
  Users,
} from 'lucide-vue-next'
import PublicFooter from '../components/PublicFooter.vue'
import PublicHeader from '../components/PublicHeader.vue'

const route = useRoute()
const searchQuery = ref('')

const categories = ['All', 'Design', 'Development', 'Business', 'Marketing', 'Photography', 'Personal Growth']

const courses = [
  {
    title: 'Design that makes a difference',
    category: 'Design',
    description: 'Learn the fundamentals of visual design and create work with purpose.',
    lessons: '18 lessons',
    duration: '4h 20m',
    level: 'Beginner',
    icon: Palette,
    accent: 'from-rose-400 to-orange-300',
  },
  {
    title: 'Build your first web app',
    category: 'Development',
    description: 'Turn your ideas into a responsive website with practical projects.',
    lessons: '24 lessons',
    duration: '6h 10m',
    level: 'Beginner',
    icon: Code2,
    accent: 'from-violet-500 to-indigo-400',
  },
  {
    title: 'Turn ideas into impact',
    category: 'Business',
    description: 'Explore the essentials of planning, launching, and growing an idea.',
    lessons: '16 lessons',
    duration: '3h 45m',
    level: 'All levels',
    icon: Briefcase,
    accent: 'from-amber-400 to-yellow-300',
  },
  {
    title: 'Tell your story with photos',
    category: 'Photography',
    description: 'Build confidence with composition, light, and everyday photography.',
    lessons: '12 lessons',
    duration: '2h 50m',
    level: 'Beginner',
    icon: Camera,
    accent: 'from-cyan-400 to-sky-300',
  },
  {
    title: 'Marketing for makers',
    category: 'Marketing',
    description: 'Find your audience and share your work with a clear message.',
    lessons: '14 lessons',
    duration: '3h 15m',
    level: 'All levels',
    icon: Users,
    accent: 'from-fuchsia-400 to-pink-300',
  },
  {
    title: 'Build habits that stick',
    category: 'Personal Growth',
    description: 'Create a practical routine for focused learning and steady progress.',
    lessons: '10 lessons',
    duration: '2h 05m',
    level: 'All levels',
    icon: Sparkles,
    accent: 'from-emerald-400 to-teal-300',
  },
]

const selectedCategory = computed(() => {
  const requestedCategory = route.query.category
  return typeof requestedCategory === 'string' && categories.includes(requestedCategory)
    ? requestedCategory
    : 'All'
})

const visibleCourses = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return courses.filter(course => {
    const matchesCategory = selectedCategory.value === 'All' || course.category === selectedCategory.value
    const matchesSearch = !query || `${course.title} ${course.category} ${course.description}`.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })
})
</script>

<template>
  <div class="min-h-screen bg-[#fbfaff] text-slate-900">
    <PublicHeader />

    <main>
      <section class="relative overflow-hidden border-b border-violet-100 bg-white">
        <div class="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-200/60 blur-3xl"></div>
        <div class="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-amber-100/70 blur-3xl"></div>
        <div class="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div class="max-w-3xl animate-[fadeIn_0.8s_ease-out_both]">
            <div class="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3.5 py-2 text-xs font-extrabold tracking-wide text-violet-700">
              <Sparkles :size="15" class="text-amber-500" />
              A good place to start
            </div>
            <h1 class="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Find a course that
              <span class="text-violet-600">moves you forward.</span>
            </h1>
            <p class="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Explore practical courses, follow your curiosity, and learn at a pace that works for you.
            </p>

            <label class="mt-8 flex max-w-xl items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-1 shadow-lg shadow-violet-100/60 transition focus-within:border-violet-400 focus-within:ring-4 focus-within:ring-violet-100">
              <Search :size="19" class="shrink-0 text-slate-400" />
              <input
                v-model="searchQuery"
                type="search"
                placeholder="Search courses or topics..."
                class="w-full bg-transparent py-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                aria-label="Search courses or topics"
              />
              <span class="hidden rounded-lg bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500 sm:block">SEARCH</span>
            </label>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p class="text-xs font-extrabold uppercase tracking-[0.16em] text-violet-600">Explore the library</p>
            <h2 class="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              {{ selectedCategory === 'All' ? 'Courses for curious minds' : `${selectedCategory} courses` }}
            </h2>
          </div>
          <p class="text-sm font-medium text-slate-500">{{ visibleCourses.length }} courses to explore</p>
        </div>

        <div class="mt-6 flex gap-2 overflow-x-auto pb-2" aria-label="Filter courses by category">
          <router-link
            v-for="category in categories"
            :key="category"
            :to="{ name: 'Course', query: category === 'All' ? {} : { category } }"
            class="shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold transition duration-200"
            :class="selectedCategory === category ? 'border-violet-600 bg-violet-600 text-white shadow-md shadow-violet-200' : 'border-slate-200 bg-white text-slate-600 hover:border-violet-200 hover:text-violet-700'"
          >
            {{ category }}
          </router-link>
        </div>

        <div v-if="visibleCourses.length" class="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(course, index) in visibleCourses"
            :key="course.title"
            class="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-violet-100 hover:shadow-xl hover:shadow-violet-100/60 animate-[fadeIn_0.6s_ease-out_both]"
            :style="{ animationDelay: `${index * 80}ms` }"
          >
            <div class="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br" :class="course.accent">
              <div class="absolute -right-8 -top-10 h-36 w-36 rounded-full border-[20px] border-white/20 transition duration-500 group-hover:scale-110"></div>
              <div class="absolute -bottom-12 -left-8 h-36 w-36 rounded-full border-[20px] border-white/20"></div>
              <span class="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-white/90 text-violet-700 shadow-xl transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                <component :is="course.icon" :size="34" />
              </span>
              <span class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-700">{{ course.category }}</span>
            </div>

            <div class="p-5">
              <div class="flex items-center justify-between gap-2 text-xs font-semibold text-slate-400">
                <span class="inline-flex items-center gap-1.5"><BookOpen :size="14" /> {{ course.lessons }}</span>
                <span class="inline-flex items-center gap-1.5"><Clock :size="14" /> {{ course.duration }}</span>
              </div>
              <h3 class="mt-3 text-lg font-extrabold leading-snug text-slate-900">{{ course.title }}</h3>
              <p class="mt-2 min-h-12 text-sm leading-6 text-slate-500">{{ course.description }}</p>
              <div class="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <span class="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">{{ course.level }}</span>
                <router-link to="/register" class="group/link inline-flex items-center gap-2 text-sm font-bold text-violet-700 transition hover:text-violet-900">
                  Start learning
                  <ArrowRight :size="15" class="transition duration-300 group-hover/link:translate-x-1" />
                </router-link>
              </div>
            </div>
          </article>
        </div>

        <div v-else class="mt-8 rounded-2xl border border-dashed border-violet-200 bg-white px-6 py-14 text-center">
          <Search :size="26" class="mx-auto text-violet-400" />
          <h3 class="mt-4 text-lg font-extrabold text-slate-900">No courses found</h3>
          <p class="mt-2 text-sm text-slate-500">Try another search or choose a different category.</p>
          <router-link to="/course" class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-violet-700 hover:text-violet-900">
            View all courses <ArrowRight :size="15" />
          </router-link>
        </div>
      </section>
    </main>

    <PublicFooter />
  </div>
</template>
