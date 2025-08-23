<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- NAVBAR -->
    <nav class="bg-white shadow-sm border-b sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- 3-column layout so the nav can be centered -->
        <div class="grid grid-cols-3 items-center h-16">
          <!-- Left: Logo -->
          <div class="flex items-center">
            <Link href="/" class="flex items-center select-none">
              <span class="text-3xl tracking-tight">
                <span class="font-light text-gray-500">clime</span>
                <span class="font-semibold text-gray-500">soft</span>
              </span>
            </Link>
          </div>

          <!-- Center: Desktop menu (centered) -->
          <div class="hidden md:flex items-center justify-center gap-8">
            <!-- Home first -->
            <Link href="/" class="text-[#333] hover:text-black text-md transition-colors">
              Home
            </Link>

            <!-- About + Services dropdowns -->
            <div
              v-for="m in menus"
              :key="m.label"
              class="relative"
              @mouseenter="open = m.label"
              @mouseleave="open = ''"
            >
              <button
                type="button"
                class="inline-flex items-center gap-1 text-gray-900 hover:text-black"
                :aria-expanded="open === m.label"
                @click="toggle(m.label)"
              >
                {{ m.label }}
                <svg class="h-4 w-4 transition" :class="{'rotate-180': open===m.label}" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd"/>
                </svg>
              </button>

              <!-- Dropdown -->
              <div
                v-show="open === m.label"
                class="absolute left-0 mt-3 w-56 rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-2"
              >
                <Link
                  v-for="item in m.items"
                  :key="item.label"
                  :href="item.href"
                  class="block px-4 py-2 text-md text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  {{ item.label }}
                </Link>
              </div>
            </div>

            <!-- Contact button placed next to Services -->
            <Link
              href="/contact"
              class="inline-flex items-center rounded-lg bg-[#333] hover:bg-[#222] px-5 py-2.5 text-white font-medium transition"
            >
              Contact Us
            </Link>
          </div>

          <!-- Right: only hamburger on mobile -->
          <div class="flex items-center justify-end">
            <button
              class="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100"
              @click="mobileOpen = !mobileOpen"
              aria-label="Open main menu"
            >
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Thin dark-blue strip under navbar -->
      <div class="h-[3px] bg-[#0a2a5e]"></div>

      <!-- Mobile menu -->
      <div v-show="mobileOpen" class="md:hidden border-t">
        <div class="px-4 py-4 space-y-2">
          <Link href="/" class="block py-2 text-[#333] hover:text-black">Home</Link>

          <details v-for="m in menus" :key="m.label" class="group">
            <summary class="flex items-center justify-between cursor-pointer py-2 text-gray-900">
              <span>{{ m.label }}</span>
              <svg class="h-4 w-4 transition group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd"/>
              </svg>
            </summary>
            <div class="pl-3 py-1 space-y-1">
              <Link
                v-for="item in m.items"
                :key="item.label"
                :href="item.href"
                class="block py-1.5 text-gray-700 hover:text-gray-900"
              >
                {{ item.label }}
              </Link>
            </div>
          </details>

          <!-- Mobile Contact button -->
          <Link
            href="/contact"
            class="inline-flex w-full justify-center rounded-lg bg-[#333] hover:bg-[#222] px-4 py-2.5 text-white font-medium transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>

    <!-- PAGE CONTENT -->
    <main class="max-w-7xl mx-auto flex-1 w-full py-8 px-4 sm:px-6 lg:px-8">
      <slot />
    </main>

    <!-- FOOTER -->
  <footer class="relative overflow-hidden bg-gradient-to-b from-zinc-900 to-neutral-900 text-white">
  <!-- soft background glow -->
  <div class="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[48rem] rounded-full bg-white/10 blur-3xl"></div>

  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- CTA bar (no clipping, no negative margin) -->
    <div class="relative mt-8 mb-10">
      <div class="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,.35)]">
        <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 class="text-2xl font-bold tracking-tight">Let’s build something great together</h3>
            <p class="mt-1 text-white/80">Tell us about your project—fast replies, honest timelines.</p>
          </div>
          <a href="#contact"
             class="inline-flex items-center gap-2 rounded-full bg-zinc-800 px-5 py-3 font-semibold text-white shadow-md
                    hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-300 focus:ring-offset-neutral-900">
            Start a conversation
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Main footer grid -->
    <div class="grid gap-12 lg:grid-cols-12">
      <!-- Brand -->
      <div class="lg:col-span-4">
        <div class="flex items-center gap-3">
          <div class="grid h-11 w-11 place-items-center rounded-xl bg-white text-zinc-900 font-extrabold text-xl shadow">C</div>
          <span class="text-xl font-semibold">Climesoft</span>
        </div>
        <p class="mt-4 text-white/80">
          Product-minded software house delivering reliable web, mobile, and cloud solutions—on time,
          maintainable, and built to scale.
        </p>

        <!-- trust badges -->
        <div class="mt-5 flex flex-wrap gap-2">
          <span class="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15">150+ clients</span>
          <span class="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15">12+ years</span>
          <span class="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15">Global remote</span>
        </div>

        <!-- Socials -->
        <div class="mt-6 flex items-center gap-3">
          <a aria-label="LinkedIn" href="#" class="grid h-9 w-9 place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.3h.07c.67-1.2 2.3-2.47 4.73-2.47 5.06 0 5.99 3.33 5.99 7.66V24h-5v-7.5c0-1.79-.03-4.09-2.49-4.09-2.49 0-2.88 1.94-2.88 3.96V24H8z"/></svg>
          </a>
          <a aria-label="X" href="#" class="grid h-9 w-9 place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.53 7.46L22.5 22h-6.59l-5.17-6.72L4.7 22H2l6.97-7.97L1.5 2h6.7l4.66 6.2L18.24 2Zm-2.3 18h1.37L7.12 4H5.7l10.244 16Z"/></svg>
          </a>
          <a aria-label="GitHub" href="#" class="grid h-9 w-9 place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.63-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.15 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.3-1.23 3.3-1.23.67 1.64.25 2.85.12 3.15.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.11.81 2.25v3.33c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z"/></svg>
          </a>
        </div>
      </div>

      <!-- Links -->
      <nav class="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-10" aria-label="Footer">
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-white/70">Services</h4>
          <ul class="mt-4 space-y-2">
            <li>
              <a class="group inline-flex items-center gap-2 text-white/90 hover:text-white" href="#">
                Web & Mobile Apps
                <svg class="h-4 w-4 translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
            </li>
            <li>
              <a class="group inline-flex items-center gap-2 text-white/90 hover:text-white" href="#">E-commerce / Shopify
                <svg class="h-4 w-4 translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
            </li>
            <li>
              <a class="group inline-flex items-center gap-2 text-white/90 hover:text-white" href="#">AI & ML
                <svg class="h-4 w-4 translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
            </li>
            <li>
              <a class="group inline-flex items-center gap-2 text-white/90 hover:text-white" href="#">Cloud & DevOps
                <svg class="h-4 w-4 translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-white/70">Company</h4>
          <ul class="mt-4 space-y-2">
            <li><a class="group inline-flex items-center gap-2 text-white/90 hover:text-white" href="#">About
              <svg class="h-4 w-4 translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a></li>
            <li><a class="group inline-flex items-center gap-2 text-white/90 hover:text-white" href="#">Case Studies
              <svg class="h-4 w-4 translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a></li>
            <li><a class="group inline-flex items-center gap-2 text-white/90 hover:text-white" href="#">Careers
              <svg class="h-4 w-4 translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a></li>
            <li><a class="group inline-flex items-center gap-2 text-white/90 hover:text-white" href="#contact">Contact
              <svg class="h-4 w-4 translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-white/70">Resources</h4>
          <ul class="mt-4 space-y-2">
            <li><a class="group inline-flex items-center gap-2 text-white/90 hover:text-white" href="#">Blog
              <svg class="h-4 w-4 translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a></li>
            <li><a class="group inline-flex items-center gap-2 text-white/90 hover:text-white" href="#">Open Source
              <svg class="h-4 w-4 translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a></li>
            <li><a class="group inline-flex items-center gap-2 text-white/90 hover:text-white" href="#">Security
              <svg class="h-4 w-4 translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a></li>
            <li><a class="group inline-flex items-center gap-2 text-white/90 hover:text-white" href="#">SLA
              <svg class="h-4 w-4 translate-x-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a></li>
          </ul>
        </div>
      </nav>

      <!-- Newsletter / Contact -->
      <div class="lg:col-span-3">
        <h4 class="text-sm font-semibold uppercase tracking-wider text-white/70">Newsletter</h4>
        <form class="mt-4 flex gap-3" action="#" method="POST">
          <label for="nl-email" class="sr-only">Email</label>
          <input id="nl-email" name="email" type="email" required placeholder="Your email address"
                 class="w-full rounded-xl bg-white/10 placeholder-white/60 text-white px-4 py-3
                        ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-zinc-300" />
          <button type="submit"
                  class="shrink-0 rounded-xl bg-zinc-800 px-4 py-3 font-semibold text-white
                         hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-300">
            Subscribe
          </button>
        </form>

        <div class="mt-6 space-y-3 text-white/90">
          <div class="flex items-center gap-3">
            <span class="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="1.8" d="M4 4h16v16H4zM4 7l8 6 8-6"/></svg>
            </span>
            hello@climesoft.com
          </div>
          <div class="flex items-center gap-3">
            <span class="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="1.8" d="M22 16.92V21a1 1 0 0 1-1.09 1A19 19 0 0 1 3 5.09 1 1 0 0 1 4 4h4.09A1 1 0 0 1 9 4.91a12.66 12.66 0 0 0 .7 2.73 1 1 0 0 1-.23 1.11l-1.3 1.3a16 16 0 0 0 6.86 6.86l1.3-1.3a1 1 0 0 1 1.11-.23 12.66 12.66 0 0 0 2.73.7A1 1 0 0 1 20 17.91V22"/></svg>
            </span>
            +92 300 000 0000
          </div>
          <div class="flex items-center gap-3">
            <span class="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-width="1.8" d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3" stroke-width="1.8"/>
              </svg>
            </span>
            Karachi, Pakistan
          </div>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="mt-12 border-t border-white/10 pt-6 pb-10 text-sm">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p class="text-white/70">© <span id="cs-year"></span> Climesoft. All rights reserved.</p>
        <div class="flex flex-wrap items-center gap-4 text-white/70">
          <a href="#" class="hover:text-white">Privacy</a><span class="opacity-40">•</span>
          <a href="#" class="hover:text-white">Terms</a><span class="opacity-40">•</span>
          <a href="#" class="hover:text-white">Security</a><span class="opacity-40">•</span>
          <a href="#" class="hover:text-white">Sitemap</a>
        </div>
      </div>
    </div>
  </div>
</footer>





  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Link } from '@inertiajs/vue3'

const mobileOpen = ref(false)
const open = ref('')
const toggle = (label) => (open.value = open.value === label ? '' : label)

// Home is separate; keep your groups here
const menus = [
  {
    label: 'About',
    items: [
      { label: 'Company', href: '/about' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    label: 'Services',
    items: [
      { label: 'Web Development', href: '/services/web' },
      { label: 'Mobile Apps', href: '/services/mobile' },
      { label: 'UI/UX Design', href: '/services/design' },
    ],
  },
]
</script>
