
<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

import {
  LayoutDashboard,
  Users,
  BookOpen,
  GraduationCap,
  ShoppingBag,
  ChartNoAxesCombined,
  Settings,
  Headphones,
  Search,
  Bell,
  MessageCircle,
  Moon,
  Sun,
  ChevronDown,
  ArrowUpRight,
  MoreHorizontal,
  PlayCircle,
  Wallet,
  TrendingUp,
  Star,
  Menu,
  X
} from 'lucide-vue-next'

const router = useRouter()

// Authentication
const user = ref(null)
const loading = ref(true)

// Dashboard state
const activeMenu = ref('Dashboard')
const searchQuery = ref('')
const isDark = ref(false)
const mobileMenu = ref(false)

// Logged-in user information
const fullName = computed(() => {
  if (!user.value) return 'User'

  const name = `${user.value.first_name || ''} ${user.value.last_name || ''}`.trim()

  return name || user.value.username || 'User'
})

const userRole = computed(() => user.value?.role || 'Student')

// Fetch authenticated user
onMounted(async () => {
  try {
    const response = await api.get('protected/')
    user.value = response.data
  } catch (error) {
    console.error('Authentication failed:', error)
    logout()
  } finally {
    loading.value = false
  }
})

// Logout
const logout = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  router.push('/login')
}

// Navigation
const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Students', icon: Users, arrow: true },
  { name: 'Courses', icon: BookOpen, arrow: true },
  { name: 'Instructors', icon: GraduationCap },
  { name: 'Enrollments', icon: ShoppingBag },
  { name: 'Analytics', icon: ChartNoAxesCombined }
]

const setActiveMenu = (name) => {
  activeMenu.value = name
  mobileMenu.value = false
}

// Statistics
const stats = [
  {
    title: 'Total Students',
    value: '12,840',
    change: '+12.5%',
    icon: Users,
    color: 'bg-emerald-100 text-emerald-700'
  },
  {
    title: 'Total Courses',
    value: '248',
    change: '+8.2%',
    icon: BookOpen,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Total Revenue',
    value: '$24,580',
    change: '+18.4%',
    icon: Wallet,
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    title: 'Instructors',
    value: '86',
    change: '+5.3%',
    icon: GraduationCap,
    color: 'bg-orange-100 text-orange-600'
  }
]

// Courses
const courses = ref([
  {
    title: 'Complete Web Development',
    instructor: 'John Smith',
    category: 'Development',
    students: 1250,
    lessons: 42,
    price: 49.99,
    progress: 85,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700'
  },
  {
    title: 'UI/UX Design Masterclass',
    instructor: 'Sarah Johnson',
    category: 'Design',
    students: 890,
    lessons: 36,
    price: 39.99,
    progress: 72,
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=700'
  },
  {
    title: 'Python Programming',
    instructor: 'David Wilson',
    category: 'Programming',
    students: 760,
    lessons: 50,
    price: 59.99,
    progress: 64,
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=700'
  },
  {
    title: 'Digital Marketing',
    instructor: 'Emily Brown',
    category: 'Marketing',
    students: 640,
    lessons: 28,
    price: 29.99,
    progress: 91,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700'
  }
])

const filteredCourses = computed(() => {
  return courses.value.filter(course =>
    course.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// Recent students
const students = [
  {
    name: 'Sophia Anderson',
    course: 'Web Development',
    points: '1,850',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/100?img=47'
  },
  {
    name: 'James Wilson',
    course: 'UI/UX Design',
    points: '1,620',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/100?img=12'
  },
  {
    name: 'Olivia Martin',
    course: 'Python Programming',
    points: '1,450',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/100?img=44'
  }
]

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
</script>

<template>
  <!-- Loading -->
  <div
    v-if="loading"
    class="dashboard-loading flex min-h-screen items-center justify-center"
  >
    <div class="text-center">
      <div class="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-600"></div>
      <p class="mt-4 text-sm font-medium text-gray-500">
        Loading dashboard...
      </p>
    </div>
  </div>

  <!-- Dashboard -->
  <div
    v-else-if="user"
    :class="{ dark: isDark }"
  >
    <div
      class="dashboard-frame mx-auto flex min-h-[calc(100vh-48px)] max-w-[1600px] overflow-hidden rounded-[28px] border border-white/70 shadow-2xl shadow-emerald-950/10"
    >
      <!-- SIDEBAR -->
      <aside
        class="dashboard-sidebar fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col border-r border-emerald-100/70 p-5 transition-transform duration-300 lg:static lg:translate-x-0"
        :class="mobileMenu ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
      >
        <!-- Logo -->
        <div class="mb-9 flex items-center justify-between px-2">
          <div class="flex items-center gap-2.5">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <GraduationCap :size="25" />
            </div>

            <div>
              <h1 class="text-lg font-black tracking-tight">
                EDU<span class="text-emerald-700">VERSE</span>
              </h1>
              <p class="text-[9px] font-semibold tracking-[2px] text-gray-400">
                LEARNING PLATFORM
              </p>
            </div>
          </div>

          <button
            class="text-gray-400 lg:hidden"
            @click="mobileMenu = false"
          >
            <X :size="22" />
          </button>
        </div>

        <p class="mb-3 px-3 text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
          Main Menu
        </p>

        <!-- Navigation -->
        <nav class="flex-1 space-y-1.5">
          <button
            v-for="item in navigation"
            :key="item.name"
            @click="setActiveMenu(item.name)"
            class="group flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium transition-all"
            :class="activeMenu === item.name
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
              : 'text-gray-500 hover:bg-emerald-50 hover:text-emerald-700'"
          >
            <span class="flex items-center gap-3">
              <component :is="item.icon" :size="19" />
              {{ item.name }}
            </span>

            <ChevronDown
              v-if="item.arrow"
              :size="15"
              class="opacity-60"
            />
          </button>
        </nav>

        <div class="my-5 border-t border-emerald-100/70"></div>

        <p class="mb-3 px-3 text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
          Management
        </p>

        <nav class="space-y-1.5">
          <button
            v-for="item in [
              { name: 'Support', icon: Headphones },
              { name: 'Settings', icon: Settings }
            ]"
            :key="item.name"
            @click="setActiveMenu(item.name)"
            class="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-gray-500 transition hover:bg-emerald-50 hover:text-emerald-700"
            :class="{ 'bg-emerald-600 text-white': activeMenu === item.name }"
          >
            <component :is="item.icon" :size="19" />
            {{ item.name }}
          </button>
        </nav>

        <!-- Help -->
        <div class="mt-auto rounded-2xl bg-emerald-50 p-4">
          <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
            <Headphones :size="21" />
          </div>

          <h3 class="text-sm font-bold">Need Help?</h3>

          <p class="mt-1 text-xs leading-5 text-gray-500">
            Contact our support team if you need assistance.
          </p>

          <button
            class="mt-3 w-full rounded-lg bg-emerald-600 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
          >
            Contact Support
          </button>
        </div>

        <!-- Sidebar bottom -->
        <div class="mt-5 flex items-center justify-between px-2">
          <button
            class="rounded-lg p-2 text-gray-400 hover:bg-gray-100"
            @click="isDark = !isDark"
          >
            <Moon v-if="!isDark" :size="19" />
            <Sun v-else :size="19" />
          </button>

          <span class="text-[10px] text-gray-400">
            Version 1.0.0
          </span>
        </div>
      </aside>

      <!-- Mobile overlay -->
      <div
        v-if="mobileMenu"
        @click="mobileMenu = false"
        class="fixed inset-0 z-40 bg-black/30 lg:hidden"
      ></div>

      <!-- MAIN CONTENT -->
      <main class="dashboard-content min-w-0 flex-1 p-4 sm:p-6 lg:p-7">
        <!-- HEADER -->
        <header class="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <button
              @click="mobileMenu = true"
              class="rounded-xl bg-white p-2.5 text-gray-600 shadow-sm lg:hidden"
            >
              <Menu :size="21" />
            </button>

            <div>
              <h2 class="text-2xl font-bold tracking-tight">
                {{ activeMenu }}
              </h2>

              <p class="mt-1 text-xs text-gray-400">
                Welcome back, {{ fullName }}! Here's what's happening today.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-2 sm:gap-3">
            <!-- Search -->
            <div class="hidden items-center gap-2 rounded-full bg-white px-4 py-3 shadow-sm sm:flex">
              <Search :size="17" class="text-gray-400" />

              <input
                v-model="searchQuery"
                placeholder="Search courses..."
                class="w-36 bg-transparent text-xs outline-none placeholder:text-gray-400 lg:w-48"
              />
            </div>

            <!-- Notification -->
            <button class="relative rounded-full bg-white p-3 shadow-sm transition hover:bg-gray-100">
              <Bell :size="18" />
              <span class="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>

            <!-- Messages -->
            <button class="rounded-full bg-white p-3 shadow-sm">
              <MessageCircle :size="18" />
            </button>

            <!-- User profile -->
            <div class="flex items-center gap-2 rounded-full bg-white p-1.5 pr-3 shadow-sm">
              <img
                :src="user.avatar || 'https://i.pravatar.cc/100?img=11'"
                :alt="fullName"
                class="h-9 w-9 rounded-full object-cover"
              />

              <div class="hidden sm:block">
                <p class="text-xs font-bold">
                  {{ fullName }}
                </p>

                <p class="text-[10px] capitalize text-gray-400">
                  {{ userRole }}
                </p>
              </div>

              <ChevronDown
                :size="14"
                class="hidden text-gray-400 sm:block"
              />
            </div>

            <!-- Logout -->
            <button
              @click="logout"
              class="rounded-full bg-red-50 p-3 text-red-500 transition hover:bg-red-100"
              title="Logout"
            >
              <ArrowUpRight :size="18" class="rotate-45" />
            </button>
          </div>
        </header>

        <!-- STATISTICS -->
        <section class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div
            v-for="stat in stats"
            :key="stat.title"
            class="rounded-[20px] border border-emerald-100/70 bg-white/85 p-5 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-md"
          >
            <div class="mb-5 flex items-center justify-between">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl"
                :class="stat.color"
              >
                <component :is="stat.icon" :size="22" />
              </div>

              <span class="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                <ArrowUpRight :size="12" />
                {{ stat.change }}
              </span>
            </div>

            <p class="text-sm font-medium text-gray-400">
              {{ stat.title }}
            </p>

            <h3 class="mt-1 text-3xl font-bold tracking-tight">
              {{ stat.value }}
            </h3>
          </div>
        </section>

        <!-- MAIN GRID -->
        <div class="grid grid-cols-1 gap-5 2xl:grid-cols-[minmax(0,1fr)_310px]">
          <!-- LEFT CONTENT -->
          <div class="min-w-0 space-y-5">
            <!-- POPULAR COURSES -->
            <section class="rounded-[24px] border border-emerald-100/70 bg-white/85 p-5 shadow-sm backdrop-blur-xl sm:p-6">
              <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 class="text-lg font-bold">
                    Popular Courses
                  </h3>

                  <p class="mt-1 text-xs text-gray-400">
                    Explore your most popular learning programs
                  </p>
                </div>

                <button class="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 transition hover:border-emerald-500 hover:text-emerald-700">
                  View All
                  <ArrowUpRight :size="14" />
                </button>
              </div>

              <!-- Course cards -->
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <article
                  v-for="course in filteredCourses"
                  :key="course.title"
                  class="overflow-hidden rounded-[19px] border border-emerald-100/70 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div class="relative h-44 overflow-hidden">
                    <img
                      :src="course.image"
                      :alt="course.title"
                      class="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />

                    <span class="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-emerald-700 backdrop-blur">
                      {{ course.category }}
                    </span>

                    <button class="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-gray-700 backdrop-blur hover:text-emerald-700">
                      <MoreHorizontal :size="17" />
                    </button>
                  </div>

                  <div class="p-4">
                    <div class="flex items-start justify-between gap-2">
                      <div>
                        <h4 class="text-sm font-bold">
                          {{ course.title }}
                        </h4>

                        <p class="mt-1 text-xs text-gray-400">
                          By {{ course.instructor }}
                        </p>
                      </div>

                      <span class="whitespace-nowrap text-sm font-bold text-emerald-700">
                        ${{ course.price.toFixed(2) }}
                      </span>
                    </div>

                    <div class="mt-4 flex items-center gap-4 text-[11px] text-gray-400">
                      <span class="flex items-center gap-1">
                        <Users :size="14" />
                        {{ course.students.toLocaleString() }} Students
                      </span>

                      <span class="flex items-center gap-1">
                        <PlayCircle :size="14" />
                        {{ course.lessons }} Lessons
                      </span>
                    </div>

                    <!-- Progress -->
                    <div class="mt-4">
                      <div class="mb-2 flex justify-between text-[10px]">
                        <span class="font-medium text-gray-400">
                          Course Completion
                        </span>

                        <span class="font-bold text-emerald-700">
                          {{ course.progress }}%
                        </span>
                      </div>

                      <div class="h-1.5 overflow-hidden rounded-full bg-emerald-50">
                        <div
                          class="h-full rounded-full bg-emerald-500 transition-all"
                          :style="{ width: course.progress + '%' }"
                        ></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              <div
                v-if="filteredCourses.length === 0"
                class="py-10 text-center text-sm text-gray-400"
              >
                No courses found.
              </div>
            </section>

            <!-- RECENT STUDENTS -->
            <section class="rounded-[24px] border border-emerald-100/70 bg-white/85 p-5 shadow-sm backdrop-blur-xl sm:p-6">
              <div class="mb-5 flex items-center justify-between">
                <div>
                  <h3 class="text-lg font-bold">
                    Recent Students
                  </h3>

                  <p class="mt-1 text-xs text-gray-400">
                    Your latest registered students
                  </p>
                </div>

                <button class="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 hover:text-emerald-700">
                  View All
                </button>
              </div>

              <div class="overflow-x-auto">
                <table class="w-full min-w-[520px] text-left">
                  <thead>
                    <tr class="border-b border-emerald-100/70 text-[10px] uppercase tracking-wider text-gray-400">
                      <th class="pb-4 font-semibold">Student</th>
                      <th class="pb-4 font-semibold">Enrolled Course</th>
                      <th class="pb-4 font-semibold">Points</th>
                      <th class="pb-4 font-semibold">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr
                      v-for="student in students"
                      :key="student.name"
                      class="border-b border-emerald-50 last:border-0"
                    >
                      <td class="py-4">
                        <div class="flex items-center gap-3">
                          <img
                            :src="student.avatar"
                            :alt="student.name"
                            class="h-9 w-9 rounded-full object-cover"
                          />

                          <span class="text-xs font-bold">
                            {{ student.name }}
                          </span>
                        </div>
                      </td>

                      <td class="py-4 text-xs text-gray-500">
                        {{ student.course }}
                      </td>

                      <td class="py-4 text-xs font-semibold">
                        {{ student.points }}
                      </td>

                      <td class="py-4">
                        <span class="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">
                          {{ student.status }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <!-- RIGHT SIDEBAR -->
          <div class="space-y-5">
            <!-- REVENUE OVERVIEW -->
            <section class="rounded-[24px] border border-emerald-100/70 bg-white/85 p-5 shadow-sm backdrop-blur-xl">
              <div class="mb-5 flex items-center justify-between">
                <div>
                  <h3 class="text-base font-bold">
                    Revenue Overview
                  </h3>

                  <p class="mt-1 text-[11px] text-gray-400">
                    Weekly performance
                  </p>
                </div>

                <button class="rounded-full border border-gray-200 p-2 text-gray-500">
                  <MoreHorizontal :size="17" />
                </button>
              </div>

              <div class="mb-5">
                <p class="text-xs text-gray-400">
                  Total Revenue
                </p>

                <h2 class="mt-1 text-3xl font-bold">
                  $24,580
                </h2>

                <p class="mt-2 flex items-center gap-1 text-[10px] text-emerald-600">
                  <ArrowUpRight :size="13" />
                  +18.4%

                  <span class="text-gray-400">
                    compared to last week
                  </span>
                </p>
              </div>

              <!-- Chart -->
              <div class="relative">
                <div class="absolute inset-0 flex flex-col justify-between pb-7 pt-1">
                  <div
                    v-for="n in 4"
                    :key="n"
                    class="border-t border-dashed border-emerald-100/70"
                  ></div>
                </div>

                <svg
                  viewBox="0 0 300 175"
                  class="relative z-10 w-full overflow-visible"
                >
                  <defs>
                    <linearGradient
                      id="revenueGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stop-color="#10b981"
                        stop-opacity=".22"
                      />

                      <stop
                        offset="100%"
                        stop-color="#10b981"
                        stop-opacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 8 115 C 30 95, 35 125, 55 95 S 90 55, 110 75 S 145 105, 160 60 S 195 75, 215 48 S 250 62, 290 12 L 290 155 L 8 155 Z"
                    fill="url(#revenueGradient)"
                  />

                  <path
                    d="M 8 115 C 30 95, 35 125, 55 95 S 90 55, 110 75 S 145 105, 160 60 S 195 75, 215 48 S 250 62, 290 12"
                    fill="none"
                    stroke="#10b981"
                    stroke-width="3"
                    stroke-linecap="round"
                  />

                  <path
                    d="M 8 130 C 40 110, 45 145, 75 112 S 110 90, 140 108 S 190 80, 220 100 S 260 75, 290 65"
                    fill="none"
                    stroke="#6ee7b7"
                    stroke-width="2"
                    stroke-linecap="round"
                  />

                  <circle
                    cx="290"
                    cy="12"
                    r="5"
                    fill="#10b981"
                    stroke="white"
                    stroke-width="3"
                  />
                </svg>

                <div class="flex justify-between text-[10px] text-gray-400">
                  <span v-for="day in days" :key="day">
                    {{ day }}
                  </span>
                </div>
              </div>

              <!-- Revenue categories -->
              <div class="mt-6 space-y-3">
                <div class="flex items-center justify-between text-xs">
                  <span class="flex items-center gap-2 text-gray-500">
                    <span class="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                    Course Sales
                  </span>

                  <span class="font-bold">$15,240</span>
                </div>

                <div class="flex items-center justify-between text-xs">
                  <span class="flex items-center gap-2 text-gray-500">
                    <span class="h-2.5 w-2.5 rounded-full bg-emerald-300"></span>
                    Subscriptions
                  </span>

                  <span class="font-bold">$9,340</span>
                </div>
              </div>
            </section>

            <!-- MONTHLY TARGET -->
            <section class="rounded-[24px] border border-emerald-100/70 bg-white/85 p-5 shadow-sm backdrop-blur-xl">
              <div class="mb-5 flex items-center justify-between">
                <h3 class="text-base font-bold">
                  Monthly Target
                </h3>

                <button class="rounded-full border border-gray-200 p-2 text-gray-500">
                  <MoreHorizontal :size="17" />
                </button>
              </div>

              <!-- Gauge -->
              <div class="relative mx-auto flex h-32 w-56 items-end justify-center overflow-hidden">
                <svg
                  viewBox="0 0 220 125"
                  class="absolute inset-0 h-full w-full"
                >
                  <path
                    d="M 25 110 A 85 85 0 0 1 195 110"
                    fill="none"
                    stroke="#d1fae5"
                    stroke-width="19"
                    stroke-linecap="round"
                  />

                  <path
                    d="M 25 110 A 85 85 0 0 1 185 66"
                    fill="none"
                    stroke="#10b981"
                    stroke-width="19"
                    stroke-linecap="round"
                  />
                </svg>

                <div class="relative mb-3 text-center">
                  <p class="text-3xl font-bold">
                    82%
                  </p>

                  <p class="text-[10px] font-semibold text-emerald-600">
                    +5% this month
                  </p>
                </div>
              </div>

              <!-- Target details -->
              <div class="mt-5 rounded-xl bg-emerald-50/60 p-3">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-xs font-bold">
                      Revenue Goal
                    </p>

                    <p class="mt-1 text-[10px] text-gray-400">
                      Monthly target
                    </p>
                  </div>

                  <TrendingUp :size="21" class="text-emerald-700" />
                </div>

                <div class="mt-3 flex items-center justify-between">
                  <span class="text-sm font-bold">
                    $24,580
                  </span>

                  <span class="text-[10px] text-gray-400">
                    of $30,000
                  </span>
                </div>

                <div class="mt-2 h-2 overflow-hidden rounded-full bg-emerald-100">
                  <div class="h-full w-[82%] rounded-full bg-emerald-500"></div>
                </div>
              </div>
            </section>

            <!-- TOP INSTRUCTOR -->
            <section class="rounded-[24px] border border-emerald-100/70 bg-white/85 p-5 shadow-sm backdrop-blur-xl">
              <div class="mb-4 flex items-center justify-between">
                <h3 class="text-base font-bold">
                  Top Instructor
                </h3>

                <Star :size="18" class="fill-amber-400 text-amber-400" />
              </div>

              <div class="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="Instructor"
                  class="h-12 w-12 rounded-xl object-cover"
                />

                <div class="min-w-0 flex-1">
                  <h4 class="text-sm font-bold">
                    Sarah Johnson
                  </h4>

                  <p class="mt-1 text-[10px] text-gray-400">
                    UI/UX Design Instructor
                  </p>
                </div>

                <span class="text-xs font-bold text-emerald-700">
                  4.9 ★
                </span>
              </div>

              <div class="mt-4 grid grid-cols-2 gap-2">
                <div class="rounded-xl bg-emerald-50/60 p-3">
                  <p class="text-[10px] text-gray-400">
                    Students
                  </p>

                  <p class="mt-1 text-lg font-bold">
                    2,450
                  </p>
                </div>

                <div class="rounded-xl bg-emerald-50/60 p-3">
                  <p class="text-[10px] text-gray-400">
                    Courses
                  </p>

                  <p class="mt-1 text-lg font-bold">
                    12
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <!-- FOOTER -->
        <footer class="mt-6 flex flex-wrap justify-between gap-2 px-2 text-[10px] text-gray-400">
          <p>
            © 2026 EDUVERSE Learning Management System.
          </p>

          <p>
            Learn. Grow. Succeed.
          </p>
        </footer>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* ==========================================
   EDUVERSE - SAGE GREEN / EMERALD THEME
========================================== */

.dashboard-loading {
  background:
    radial-gradient(circle at 15% 15%, rgba(191, 244, 190, 0.75), transparent 34%),
    linear-gradient(135deg, #e8f5eb 0%, #f4fbf6 52%, #dff2e5 100%);
}

/* Full page background */
.dashboard-background {
  background:
    radial-gradient(circle at 8% 8%, rgba(191, 244, 190, 0.72), transparent 32%),
    radial-gradient(circle at 92% 88%, rgba(16, 185, 129, 0.16), transparent 34%),
    linear-gradient(135deg, #e8f5eb 0%, #f4fbf6 48%, #dff2e5 100%);
}

/* Main application shell */
.dashboard-frame {
  background: rgba(248, 253, 249, 0.84);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

/* Glass sidebar */
.dashboard-sidebar {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

/* Main workspace */
.dashboard-content {
  background:
    radial-gradient(circle at 92% 4%, rgba(191, 244, 190, 0.28), transparent 28%),
    linear-gradient(145deg, rgba(244, 251, 246, 0.97), rgba(232, 246, 235, 0.94));
}

/* Dashboard panels */
.dashboard-content section {
  border-color: rgba(16, 185, 129, 0.12);
  box-shadow: 0 6px 22px rgba(6, 78, 59, 0.045);
}

/* Course cards */
.dashboard-content article {
  background: rgba(255, 255, 255, 0.88);
  border-color: rgba(16, 185, 129, 0.13);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.dashboard-content article:hover {
  transform: translateY(-4px);
  border-color: rgba(16, 185, 129, 0.38);
  box-shadow: 0 16px 34px rgba(6, 78, 59, 0.11);
}

/* Navigation hover */
.dashboard-sidebar nav button {
  transition: background-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
}

.dashboard-sidebar nav button:hover {
  transform: translateX(3px);
}

/* Table row hover */
.dashboard-content table tbody tr {
  transition: background-color 0.2s ease;
}

.dashboard-content table tbody tr:hover {
  background: rgba(220, 252, 231, 0.48);
}

/* Inputs */
.dashboard-content input {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.dashboard-content input:focus {
  outline: none;
}

/* General interactive transitions */
.dashboard-content button,
.dashboard-sidebar button {
  transition: all 0.25s ease;
}

/* Mobile sidebar */
@media (max-width: 1023px) {
  .dashboard-sidebar {
    background: rgba(255, 255, 255, 0.97);
  }
}

/* Respect reduced-motion preferences */
@media (prefers-reduced-motion: reduce) {
  .dashboard-content *,
  .dashboard-sidebar * {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
