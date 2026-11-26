
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'
import {
    BookOpen,
    GraduationCap,
    User,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    Sparkles,
    CheckCircle2
} from 'lucide-vue-next'

const router = useRouter()

const form = ref({
    username: '',
    password: ''
})

const error = ref('')
const loading = ref(false)
const showPassword = ref(false)

const login = async () => {
    error.value = ''
    loading.value = true

    try {
        const response = await api.post('login/', form.value)

        localStorage.setItem('access_token', response.data.access)
        localStorage.setItem('refresh_token', response.data.refresh)

        router.push('/dashboard')
    } catch (err) {
        error.value = 'Invalid username or password.'
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <main class="min-h-screen bg-slate-950 flex items-center justify-center p-3 sm:p-5 lg:p-8">

        <div class="w-full max-w-7xl min-h-[750px] grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-2xl">

            <!-- LEFT SECTION: LOGIN FORM -->
            <section class="flex items-center justify-center px-5 py-10 sm:px-10 lg:px-12 xl:px-16">

                <div class="w-full max-w-md animate-[fadeIn_0.8s_ease-out]">

                    <!-- Logo -->
                    <router-link to="/" class="inline-flex items-center gap-3 mb-10 group">
                        <div class="w-12 h-12 flex items-center justify-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-200 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                            <BookOpen :size="25" />
                        </div>

                        <span class="text-2xl font-extrabold tracking-tight text-slate-900">
                            Edu<span class="text-violet-600">Learn</span>
                        </span>
                    </router-link>

                    <!-- Heading -->
                    <div class="mb-8">
                        <div class="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-bold tracking-wider text-violet-600 mb-4">
                            <Sparkles :size="14" />
                            WELCOME BACK
                        </div>

                        <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                            Sign In<span class="text-violet-600">.</span>
                        </h1>

                        <p class="mt-3 text-sm sm:text-base leading-relaxed text-slate-500">
                            Welcome back! Sign in to continue your learning journey and explore new opportunities.
                        </p>
                    </div>

                    <!-- Error -->
                    <Transition
                        enter-active-class="transition duration-300 ease-out"
                        enter-from-class="opacity-0 -translate-y-2"
                        enter-to-class="opacity-100 translate-y-0"
                        leave-active-class="transition duration-200"
                        leave-to-class="opacity-0"
                    >
                        <div v-if="error"
                            class="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                            {{ error }}
                        </div>
                    </Transition>

                    <!-- Login Form -->
                    <form @submit.prevent="login" class="space-y-5">

                        <!-- Username -->
                        <div class="space-y-2">
                            <label class="text-sm font-semibold text-slate-700">
                                Username
                            </label>

                            <div class="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition duration-300 focus-within:border-violet-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-100">
                                <User :size="18" class="shrink-0 text-slate-400" />

                                <input
                                    v-model.trim="form.username"
                                    type="text"
                                    placeholder="Enter your username"
                                    autocomplete="username"
                                    required
                                    class="w-full min-w-0 bg-transparent py-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        <!-- Password -->
                        <div class="space-y-2">
                            <label class="text-sm font-semibold text-slate-700">
                                Password
                            </label>

                            <div class="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition duration-300 focus-within:border-violet-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-100">
                                <Lock :size="18" class="shrink-0 text-slate-400" />

                                <input
                                    v-model="form.password"
                                    :type="showPassword ? 'text' : 'password'"
                                    placeholder="Enter your password"
                                    autocomplete="current-password"
                                    required
                                    class="w-full min-w-0 bg-transparent py-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                                />

                                <button
                                    type="button"
                                    @click="showPassword = !showPassword"
                                    class="shrink-0 text-slate-400 transition hover:text-violet-600"
                                    :aria-label="showPassword ? 'Hide password' : 'Show password'"
                                >
                                    <EyeOff v-if="showPassword" :size="18" />
                                    <Eye v-else :size="18" />
                                </button>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <button
                            type="submit"
                            :disabled="loading"
                            class="group flex w-full items-center justify-center gap-3 rounded-xl bg-violet-600 py-3.5 font-bold text-white shadow-lg shadow-violet-200 transition duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                        >
                            <span>{{ loading ? 'Signing In...' : 'Sign In' }}</span>

                            <ArrowRight
                                v-if="!loading"
                                :size="19"
                                class="transition duration-300 group-hover:translate-x-1"
                            />

                            <span
                                v-else
                                class="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"
                            ></span>
                        </button>

                    </form>

                    <!-- Register Link -->
                    <p class="mt-8 text-center text-sm text-slate-500">
                        Don't have an account?
                        <router-link
                            to="/register"
                            class="font-bold text-violet-600 transition hover:text-violet-800"
                        >
                            Create Account
                        </router-link>
                    </p>

                    <!-- Footer -->
                    <p class="mt-10 text-center text-xs text-slate-400">
                        © 2026 EduLearn. All rights reserved.
                    </p>

                </div>
            </section>

            <!-- RIGHT SECTION: ILLUSTRATION -->
            <section class="relative hidden min-h-full overflow-hidden bg-[#17122f] p-8 text-white lg:flex lg:flex-col lg:justify-between xl:p-12">

                <!-- Background Effects -->
                <div class="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl"></div>
                <div class="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

                <div class="absolute inset-0 opacity-[0.07]"
                    style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 24px 24px;">
                </div>

                <!-- Poster Header -->
                <div class="relative z-10 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                            <GraduationCap :size="25" />
                        </div>

                        <span class="text-xl font-extrabold tracking-wide">
                            EduLearn
                        </span>
                    </div>

                    <span class="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold tracking-widest text-violet-200">
                        LEARN WITHOUT LIMITS
                    </span>
                </div>

                <!-- Main Content -->
                <div class="relative z-10 my-10">

                    <div class="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-500/20 px-4 py-2 text-xs font-semibold text-violet-200">
                        <Sparkles :size="15" />
                        YOUR JOURNEY CONTINUES
                    </div>

                    <h2 class="max-w-lg text-4xl font-black leading-tight tracking-tight xl:text-5xl">
                        Welcome
                        <span class="block text-violet-400">Back.</span>
                        Your Future
                        <span class="block text-violet-400">Starts Here.</span>
                    </h2>

                    <p class="mt-6 max-w-md text-sm leading-7 text-slate-300 xl:text-base">
                        Continue exploring new knowledge, improving your skills, and achieving your goals with EduLearn.
                    </p>

                    <!-- Learning Illustration -->
                    <div class="relative mx-auto mt-10 flex h-64 max-w-md items-center justify-center">

                        <div class="absolute h-64 w-64 rounded-full border border-violet-400/20"></div>
                        <div class="absolute h-48 w-48 rounded-full border border-violet-400/20"></div>

                        <div class="absolute h-36 w-36 rounded-full bg-violet-500/30 blur-3xl"></div>

                        <!-- Floating Book -->
                        <div class="relative flex h-36 w-48 -rotate-6 flex-col items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500 to-indigo-700 shadow-2xl shadow-violet-950/50 transition duration-500 hover:rotate-0 hover:scale-110">
                            <BookOpen :size="58" class="mb-3 text-white" />
                            <span class="text-sm font-extrabold tracking-widest">
                                E-LEARNING
                            </span>
                            <span class="mt-1 text-[10px] text-violet-100">
                                Learn • Practice • Grow
                            </span>
                        </div>

                        <!-- Floating Card 1 -->
                        <div class="absolute left-0 top-5 flex -rotate-6 items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-3 shadow-xl backdrop-blur-xl animate-[float_4s_ease-in-out_infinite]">
                            <div class="rounded-lg bg-amber-400/20 p-2 text-amber-300">
                                <GraduationCap :size="22" />
                            </div>

                            <div>
                                <p class="text-xs font-bold">Keep Learning</p>
                                <p class="text-[10px] text-slate-300">Grow your skills</p>
                            </div>
                        </div>

                        <!-- Floating Card 2 -->
                        <div class="absolute bottom-5 right-0 flex rotate-6 items-center gap-2 rounded-xl border border-white/10 bg-white/10 p-3 shadow-xl backdrop-blur-xl animate-[float_5s_ease-in-out_infinite]">
                            <CheckCircle2 :size="22" class="text-emerald-400" />
                            <span class="text-xs font-bold">Achieve Your Goals</span>
                        </div>

                    </div>

                    <!-- Features -->
                    <div class="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">

                        <div>
                            <p class="text-xl font-black text-white">01</p>
                            <p class="mt-1 text-xs text-slate-400">Explore Courses</p>
                        </div>

                        <div>
                            <p class="text-xl font-black text-white">02</p>
                            <p class="mt-1 text-xs text-slate-400">Learn Anywhere</p>
                        </div>

                        <div>
                            <p class="text-xl font-black text-white">03</p>
                            <p class="mt-1 text-xs text-slate-400">Build Your Future</p>
                        </div>

                    </div>

                </div>

                <!-- Footer -->
                <div class="relative z-10 flex items-center justify-between border-t border-white/10 pt-5">
                    <p class="text-xs text-slate-400">
                        Education is the key to your future.
                    </p>

                    <div class="flex items-center gap-2 text-xs font-semibold text-violet-300">
                        <Sparkles :size="14" />
                        Welcome Back
                    </div>
                </div>

            </section>

        </div>
    </main>
</template>
