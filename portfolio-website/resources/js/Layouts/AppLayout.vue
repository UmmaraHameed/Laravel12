<script setup>
import { Link } from '@inertiajs/vue3'
import MegaDropdown from '@/components/MegaDropdown.vue'

const serviceItems = [
  { label: 'Web Development', desc: 'Modern, scalable web apps', href: '/services/web', icon: 'cube' },
  { label: 'Mobile Apps', desc: 'iOS, Android, cross-platform', href: '/services/mobile', icon: 'spark' },
  { label: 'AI & Automation', desc: 'From data to outcomes', href: '/services/ai', icon: 'shield' },
  { label: 'Cloud & DevOps', desc: 'Secure and fast deployment', href: '/services/cloud', icon: 'wrench' },
]

const productItems = [
  { label: 'Web Apps', desc: 'Modern, scalable, fast', href: '/product/web', icon: 'cube' },
  { label: 'Mobile Apps', desc: 'iOS, Android, cross-platform', href: '/product/mobile', icon: 'spark' },
  { label: 'AI & Automation', desc: 'From data to outcomes', href: '/product/ai', icon: 'shield' },
]
</script>

<template>
  <!-- HEADER -->
  <header class="bg-black text-white sticky top-0 z-50">
    
    <div class="h-0.5 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400"></div>

    <div class="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
      <!-- Logo -->
      <Link href="/" class="flex items-center gap-2">
        <div class="h-9 w-9 grid place-items-center rounded-sm bg-blue-600 font-bold">C</div>
        <span class="text-2xl tracking-wide font-semibold">CLIMESOFT</span>
      </Link>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-6 text-white">
        <Link href="/" class="hover:text-white/80 transition">Home</Link>
        <MegaDropdown label="Product" :items="productItems" />
        <MegaDropdown label="Services" :items="serviceItems" />
        <MegaDropdown
          label="Company"
          :items="[
            { label: 'About Us', desc: 'Who we are', href: '/about', icon: 'doc' },
            { label: 'Careers', desc: 'Join the team', href: '/careers', icon: 'users' }
          ]"
        />
        <MegaDropdown
          label="Resources"
          :items="[
            { label: 'Blog', desc: 'Insights & updates', href: '/blog', icon: 'doc' },
            { label: 'Case Studies', desc: 'Real results', href: '/resources/case-studies', icon: 'cube' },
            { label: 'Open Source', desc: 'Our projects', href: '/resources/open-source', icon: 'spark' }
          ]"
        />
        <Link href="/contact" class="hover:text-white/80 transition">Contact Us</Link>
        <!-- <Link href="/login" class="uppercase tracking-wide underline underline-offset-8 decoration-2">Login</Link>
        <Link href="/registration" class="uppercase tracking-wide underline underline-offset-8 decoration-2">Registration</Link> -->
      </nav>

      <!-- Mobile toggle -->
      <button class="md:hidden p-2 rounded hover:bg-neutral-800" aria-label="Open menu">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </header>

  <!-- PAGE CONTENT SLOT -->
  <slot />

  <!-- FOOTER -->
  <footer class="bg-black text-white">
    <div class="h-px bg-white/10"></div>
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid gap-12 lg:grid-cols-12">
        <!-- Brand / CTA / Social -->
        <div class="lg:col-span-4">
          <div class="flex items-center gap-3">
            <div class="h-11 w-11 grid place-items-center rounded-md bg-blue-600 font-extrabold">C</div>
            <span class="text-2xl font-semibold">CLIMESOFT</span>
          </div>
          <p class="mt-4 text-white/70 text-lg leading-snug">
            Deliver better products, faster.
          </p>

          <Link
            href="/contact"
            class="mt-6 inline-flex items-center rounded-full px-6 py-3 text-base font-semibold
                   border border-amber-400 text-white hover:bg-amber-400 hover:text-black
                   transition shadow-[0_0_0_3px_rgba(251,191,36,.15)]"
          >
            Contact Us
          </Link>

          <div class="mt-8 flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" class="grid h-10 w-10 place-items-center bg-white text-black rounded-sm hover:bg-white/90 transition">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.3h.07c.67-1.2 2.3-2.47 4.73-2.47 5.06 0 5.99 3.33 5.99 7.66V24h-5v-7.5c0-1.79-.03-4.09-2.49-4.09-2.49 0-2.88 1.94-2.88 3.96V24H8z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" class="grid h-10 w-10 place-items-center bg-white text-black rounded-sm hover:bg-white/90 transition">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.4.6A3 3 0 0 0 .5 6.2 31.1 31.1 0 0 0 0 12a31.1 31.1 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c2.1.6 9.4.6 9.4.6s7.3 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.1 31.1 0 0 0 24 12a31.1 31.1 0 0 0-.5-5.8zM9.8 15.5V8.5L15.8 12z"/></svg>
            </a>
            <a href="#" aria-label="Facebook" class="grid h-10 w-10 place-items-center bg-white text-black rounded-sm hover:bg-white/90 transition">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.4v-3h2.4V9.4c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.5V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z"/></svg>
            </a>
            <a href="#" aria-label="X" class="grid h-10 w-10 place-items-center bg-white text-black rounded-sm hover:bg-white/90 transition">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.53 7.46L22.5 22h-6.59l-5.17-6.72L4.7 22H2l6.97-7.97L1.5 2h6.7l4.66 6.2L18.24 2Zm-2.3 18h1.37L7.12 4H5.7l10.244 16Z"/></svg>
            </a>
          </div>
        </div>

        <!-- Link columns -->
        <nav class="lg:col-span-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 class="text-3xl font-semibold mb-4">Why Climesoft?</h4>
            <ul class="space-y-3 text-white/80">
              <li><Link href="/autoreview" class="hover:text-white">AutoReview</Link></li>
              <li><Link href="/product/overview" class="hover:text-white">Product Overview</Link></li>
              <li><Link href="/resources/case-studies" class="hover:text-white">Case Studies</Link></li>
              <li><Link href="/security" class="hover:text-white">Security</Link></li>
              <li><Link href="/integrations" class="hover:text-white">Integrations</Link></li>
              <li><Link href="/onboarding" class="hover:text-white">Onboarding</Link></li>
            </ul>
          </div>

          <div>
            <h4 class="text-3xl font-semibold mb-4">Resources</h4>
            <ul class="space-y-3 text-white/80">
              <li><Link href="/blog" class="hover:text-white">Blog</Link></li>
              <li><Link href="/product/tour" class="hover:text-white">Product Tour Library</Link></li>
              <li><Link href="/kb" class="hover:text-white">Knowledge Base</Link></li>
              <li><Link href="/podcast" class="hover:text-white">Peer Check Podcast</Link></li>
              <li><Link href="/guides/agile-hardware" class="hover:text-white">Agile for Hardware</Link></li>
              <li><Link href="/guides/design-review" class="hover:text-white">Design Review Resources</Link></li>
              <li><Link href="/guides/va-ve" class="hover:text-white">VA/VE for Mechanical</Link></li>
              <li><Link href="/guides/cad-collaboration" class="hover:text-white">CAD Collaboration Guide</Link></li>
              <li><Link href="/guides/modernizing-tdps" class="hover:text-white">Modernizing TDPs</Link></li>
              <li><Link href="/guides/ai-tools" class="hover:text-white">AI Tools for Engineers</Link></li>
            </ul>
          </div>

          <div>
            <h4 class="text-3xl font-semibold mb-4">Company</h4>
            <ul class="space-y-3 text-white/80">
              <li><Link href="/about" class="hover:text-white">Our Story</Link></li>
              <li><Link href="/careers" class="hover:text-white">Careers</Link></li>
              <li><Link href="/contact" class="hover:text-white">Contact</Link></li>
              <li><Link href="/events/des-2025" class="hover:text-white">DES 2025</Link></li>
            </ul>
          </div>

          <div>
            <h4 class="text-3xl font-semibold mb-4">Contact</h4>
            <ul class="space-y-3 text-white/80">
              <li><Link href="/contact#sales" class="hover:text-white">Sales</Link></li>
              <li><Link href="/contact#support" class="hover:text-white">Support</Link></li>
            </ul>
          </div>
        </nav>
      </div>

      <!-- Legal row -->
      <div class="mt-12 border-t border-white/10 pt-6 text-sm text-white/70">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {{ new Date().getFullYear() }} Climesoft. All Rights Reserved</p>
          <div class="flex flex-wrap items-center gap-5">
            <Link href="/privacy" class="hover:text-white">Privacy Policy</Link>
            <span class="opacity-40">|</span>
            <Link href="/terms-conditions" class="hover:text-white">Terms and Conditions</Link>
            <span class="opacity-40">|</span>
            <Link href="/terms" class="hover:text-white">Terms of Use</Link>
            <span class="opacity-40">|</span>
            <Link href="/attribution" class="hover:text-white">CC Artwork Attribution</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
