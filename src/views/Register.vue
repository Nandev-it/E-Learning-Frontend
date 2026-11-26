
<script setup>
import { ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

import {
    BookOpen,
    GraduationCap,
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    Sparkles,
    CheckCircle2,
    X
} from 'lucide-vue-next'

const router = useRouter()

// Registration Form
const form = ref({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    confirm_password: ''
})

// Form States
const error = ref('')
const loading = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)

// Success Modal States
const showSuccessModal = ref(false)
const countdown = ref(3)

let countdownInterval = null
let redirectTimeout = null

// Redirect to Login
const goToLogin = () => {
    clearInterval(countdownInterval)
    clearTimeout(redirectTimeout)

    showSuccessModal.value = false

    router.push('/login')
}

// Start Success Countdown
const startSuccessCountdown = () => {
    showSuccessModal.value = true
    countdown.value = 3

    // Countdown every second
    countdownInterval = setInterval(() => {
        if (countdown.value > 1) {
            countdown.value--
        } else {
            clearInterval(countdownInterval)
        }
    }, 1000)

    // Automatically redirect after 3 seconds
    redirectTimeout = setTimeout(() => {
        goToLogin()
    }, 3000)
}

// Register Function
const register = async () => {
    error.value = ''

    // Validate Password
    if (form.value.password !== form.value.confirm_password) {
        error.value = 'Passwords do not match.'
        return
    }

    if (form.value.password.length < 8) {
        error.value = 'Password must contain at least 8 characters.'
        return
    }

    loading.value = true

    try {
        // Send registration request
        await api.post('register/', form.value)

        // Show Success Modal
        startSuccessCountdown()

    } catch (err) {
        const data = err.response?.data

        if (data) {
            error.value = Object.values(data).flat().join(' ')
        } else if (err.request) {
            error.value = 'Cannot reach the server. Please try again.'
        } else {
            error.value = 'Unable to register. Please try again.'
        }

    } finally {
        loading.value = false
    }
}

// Clean up timers
onUnmounted(() => {
    clearInterval(countdownInterval)
    clearTimeout(redirectTimeout)
})
</script>

<template>
    <main class="min-h-screen bg-slate-950 flex items-center justify-center p-3 sm:p-5 lg:p-8">

        <div class="w-full max-w-7xl min-h-[750px] grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-2xl">

            <!-- ================================= -->
            <!-- LEFT SECTION: REGISTER FORM -->
            <!-- ================================= -->

            <section class="flex items-center justify-center px-5 py-10 sm:px-10 lg:px-12 xl:px-16">

                <div class="w-full max-w-md animate-[fadeIn_0.8s_ease-out]">

                    <!-- Logo -->
                    <router-link to="/" class="inline-flex items-center gap-3 mb-8 group">

                        <div class="w-12 h-12 flex items-center justify-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-200 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                            <BookOpen :size="25" />
                        </div>

                        <span class="text-2xl font-extrabold tracking-tight text-slate-900">
                            Edu<span class="text-violet-600">Learn</span>
                        </span>

                    </router-link>

                    <!-- Heading -->
                    <div class="mb-7">

                        <div class="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-bold tracking-wider text-violet-600 mb-4">
                            <Sparkles :size="14" />
                            START YOUR JOURNEY
                        </div>

                        <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                            Create Account<span class="text-violet-600">.</span>
                        </h1>

                        <p class="mt-3 text-sm sm:text-base leading-relaxed text-slate-500">
                            Join our learning community and start building your future with new skills.
                        </p>

                    </div>

                    <!-- Error Message -->
                    <Transition
                        enter-active-class="transition duration-300 ease-out"
                        enter-from-class="opacity-0 -translate-y-2"
                        enter-to-class="opacity-100 translate-y-0"
                        leave-active-class="transition duration-200"
                        leave-to-class="opacity-0"
                    >
                        <div
                            v-if="error"
                            class="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
                        >
                            {{ error }}
                        </div>
                    </Transition>

                    <!-- Registration Form -->
                    <form @submit.prevent="register" class="space-y-4">

                        <!-- First Name / Last Name -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <!-- First Name -->
                            <div class="space-y-2">

                                <label class="text-sm font-semibold text-slate-700">
                                    First Name
                                </label>

                                <div class="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition duration-300 focus-within:border-violet-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-100">

                                    <User :size="18" class="shrink-0 text-slate-400" />

                                    <input
                                        v-model.trim="form.first_name"
                                        type="text"
                                        placeholder="First name"
                                        autocomplete="given-name"
                                        required
                                        class="w-full min-w-0 bg-transparent py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                                    />

                                </div>

                            </div>

                            <!-- Last Name -->
                            <div class="space-y-2">

                                <label class="text-sm font-semibold text-slate-700">
                                    Last Name
                                </label>

                                <div class="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition duration-300 focus-within:border-violet-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-100">

                                    <User :size="18" class="shrink-0 text-slate-400" />

                                    <input
                                        v-model.trim="form.last_name"
                                        type="text"
                                        placeholder="Last name"
                                        autocomplete="family-name"
                                        required
                                        class="w-full min-w-0 bg-transparent py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                                    />

                                </div>

                            </div>

                        </div>

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
                                    placeholder="Choose a username"
                                    autocomplete="username"
                                    required
                                    class="w-full min-w-0 bg-transparent py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                                />

                            </div>

                        </div>

                        <!-- Email -->
                        <div class="space-y-2">

                            <label class="text-sm font-semibold text-slate-700">
                                Email Address
                            </label>

                            <div class="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition duration-300 focus-within:border-violet-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-100">

                                <Mail :size="18" class="shrink-0 text-slate-400" />

                                <input
                                    v-model.trim="form.email"
                                    type="email"
                                    placeholder="example@email.com"
                                    autocomplete="email"
                                    required
                                    class="w-full min-w-0 bg-transparent py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
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
                                    placeholder="Minimum 8 characters"
                                    autocomplete="new-password"
                                    minlength="8"
                                    required
                                    class="w-full min-w-0 bg-transparent py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                                />

                                <button
                                    type="button"
                                    @click="showPassword = !showPassword"
                                    class="shrink-0 text-slate-400 transition hover:text-violet-600"
                                >
                                    <EyeOff v-if="showPassword" :size="18" />
                                    <Eye v-else :size="18" />
                                </button>

                            </div>

                        </div>

                        <!-- Confirm Password -->
                        <div class="space-y-2">

                            <label class="text-sm font-semibold text-slate-700">
                                Confirm Password
                            </label>

                            <div class="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition duration-300 focus-within:border-violet-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-100">

                                <Lock :size="18" class="shrink-0 text-slate-400" />

                                <input
                                    v-model="form.confirm_password"
                                    :type="showConfirmPassword ? 'text' : 'password'"
                                    placeholder="Enter password again"
                                    autocomplete="new-password"
                                    minlength="8"
                                    required
                                    class="w-full min-w-0 bg-transparent py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                                />

                                <button
                                    type="button"
                                    @click="showConfirmPassword = !showConfirmPassword"
                                    class="shrink-0 text-slate-400 transition hover:text-violet-600"
                                >
                                    <EyeOff v-if="showConfirmPassword" :size="18" />
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

                            <span>
                                {{ loading ? 'Creating Account...' : 'Create Account' }}
                            </span>

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

                    <!-- Login Link -->
                    <p class="mt-6 text-center text-sm text-slate-500">

                        Already have an account?

                        <router-link
                            to="/login"
                            class="font-bold text-violet-600 transition hover:text-violet-800"
                        >
                            Sign in
                        </router-link>

                    </p>

                    <!-- Copyright -->
                    <p class="mt-8 text-center text-xs text-slate-400">
                        © 2026 EduLearn. All rights reserved.
                    </p>

                </div>

            </section>

            <!-- ================================= -->
            <!-- RIGHT SECTION: POSTER -->
            <!-- ================================= -->

            <section class="relative hidden min-h-full overflow-hidden bg-[#17122f] p-8 text-white lg:flex lg:flex-col lg:justify-between xl:p-12">

                <!-- Background Effects -->
                <div class="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl"></div>

                <div class="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

                <div
                    class="absolute inset-0 opacity-[0.07]"
                    style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 24px 24px;"
                ></div>

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

                <!-- Poster Main -->
                <div class="relative z-10 my-10">

                    <div class="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-500/20 px-4 py-2 text-xs font-semibold text-violet-200">
                        <Sparkles :size="15" />
                        YOUR FUTURE STARTS HERE
                    </div>

                    <h2 class="max-w-lg text-4xl font-black leading-tight tracking-tight xl:text-5xl">

                        Unlock Your

                        <span class="block text-violet-400">
                            Potential.
                        </span>

                        Learn Something

                        <span class="block text-violet-400">
                            New Every Day.
                        </span>

                    </h2>

                    <p class="mt-6 max-w-md text-sm leading-7 text-slate-300 xl:text-base">
                        Discover new skills, explore exciting courses, and connect with a community that inspires you to grow.
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

                            <span class="text-xs font-bold">
                                Achieve Your Goals
                            </span>

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

                <!-- Poster Footer -->
                <div class="relative z-10 flex items-center justify-between border-t border-white/10 pt-5">

                    <p class="text-xs text-slate-400">
                        Education is the key to your future.
                    </p>

                    <div class="flex items-center gap-2 text-xs font-semibold text-violet-300">
                        <Sparkles :size="14" />
                        Start Today
                    </div>

                </div>

            </section>

        </div>

        <!-- ================================= -->
        <!-- ANIMATED SUCCESS MODAL -->
        <!-- ================================= -->

        <Transition
            enter-active-class="transition-opacity duration-500 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-300 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >

            <div
                v-if="showSuccessModal"
                class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md"
            >

                <Transition
                    appear
                    enter-active-class="transition-all duration-500 ease-out"
                    enter-from-class="opacity-0 scale-75 translate-y-8"
                    enter-to-class="opacity-100 scale-100 translate-y-0"
                    leave-active-class="transition-all duration-300 ease-in"
                    leave-from-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-90"
                >

                    <div
                        v-if="showSuccessModal"
                        class="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/60 bg-white/95 p-8 text-center shadow-2xl shadow-emerald-950/20 backdrop-blur-2xl"
                    >

                        <!-- Decorative Background -->
                        <div class="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl"></div>

                        <div class="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-green-400/10 blur-3xl"></div>

                        <!-- Close Button -->
                        <button
                            type="button"
                            @click="goToLogin"
                            aria-label="Close success message"
                            class="absolute right-5 top-5 z-10 rounded-full p-2 text-slate-400 transition duration-300 hover:rotate-90 hover:bg-slate-100 hover:text-slate-700"
                        >
                            <X :size="20" />
                        </button>

                        <!-- Success Icon -->
                        <div class="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">

                            <div class="absolute inset-0 animate-ping rounded-full bg-emerald-400/20"></div>

                            <div class="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-xl shadow-emerald-200">
                                <CheckCircle2 :size="45" stroke-width="2.5" />
                            </div>

                        </div>

                        <!-- Success Heading -->
                        <div class="relative z-10 mb-7">

                            <div class="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold tracking-wider text-emerald-600">
                                <Sparkles :size="14" />
                                REGISTRATION COMPLETE
                            </div>

                            <h2 class="text-3xl font-extrabold tracking-tight text-slate-900">
                                Account Created!
                            </h2>

                            <p class="mt-3 text-sm leading-6 text-slate-500">
                                Congratulations! Your EduLearn account has been created successfully.
                                You are ready to start your learning journey.
                            </p>

                        </div>

                        <!-- Countdown and Progress -->
                        <div class="relative z-10 mb-6 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">

                            <p class="text-sm font-semibold text-emerald-800">
                                Redirecting to login in

                                <span class="inline-block min-w-[12px] font-extrabold tabular-nums">
                                    {{ countdown }}
                                </span>

                                seconds...
                            </p>

                            <!-- Progress Bar -->
                            <div class="mt-3 h-2 overflow-hidden rounded-full bg-emerald-200">

                                <div
                                    class="h-full rounded-full bg-gradient-to-r from-emerald-400 to-green-600"
                                    style="animation: successProgress 3s linear forwards;"
                                ></div>

                            </div>

                        </div>

                        <!-- Continue Button -->
                        <button
                            type="button"
                            @click="goToLogin"
                            class="group relative z-10 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 py-3.5 font-bold text-white shadow-lg shadow-emerald-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98]"
                        >

                            Continue to Login

                            <ArrowRight
                                :size="19"
                                class="transition duration-300 group-hover:translate-x-1"
                            />

                        </button>

                        <!-- Modal Footer -->
                        <p class="relative z-10 mt-5 text-xs text-slate-400">
                            Thank you for joining EduLearn!
                        </p>

                    </div>

                </Transition>

            </div>

        </Transition>

    </main>
</template>

<style scoped>
/* Success Modal Progress Animation */
@keyframes successProgress {
    from {
        width: 100%;
    }

    to {
        width: 0%;
    }
}
</style>
