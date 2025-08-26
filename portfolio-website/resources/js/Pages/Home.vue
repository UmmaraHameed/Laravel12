<template>
  <AppLayout>
    <!-- HERO -->
    <section class="relative overflow-hidden bg-black text-white">
      <!-- Remove this next line if you don't want a divider under the header -->
      <div class="h-px bg-white/10"></div>

      <!-- right glow sits behind everything and doesn't block clicks -->
      <div
        class="pointer-events-none absolute -right-32 top-0 h-[120%] w-[72%]
               -z-10 blur-3xl bg-gradient-to-br from-fuchsia-600/30 via-purple-600/35 to-transparent">
      </div>

      <div class="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-center px-6 lg:px-8 py-16 lg:py-24">
        <!-- LEFT: copy -->
        <div>
          <h1
            class="font-semibold tracking-tight leading-[1.05] text-[clamp(2.2rem,5vw,4.5rem)]"
            data-aos="fade-up"
          >
            <span class="block">Run better reviews.</span>
            <span class="block">Learn from each one.</span>
            <span class="block">Automate the next.</span>
          </h1>

          <p class="mt-6 text-xl text-white/80 max-w-2xl">
            Climesoft helps software teams capture expert feedback, surface lessons learned,
            and accelerate delivery with automation—so every sprint leads to smarter decisions
            and faster progress.
          </p>

          <p class="mt-5 text-white/70 max-w-2xl">
            Our portfolio spans SaaS dashboards, e-commerce, fintech, and AI/automation projects—
            shipped for startups and global enterprises.
          </p>

          <!-- CTAs -->
          <div class="mt-8 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="150">
            <Link
              href="/contact"
              class="inline-flex items-center rounded-full px-7 py-3 font-semibold
                     bg-amber-400 text-black hover:bg-amber-300 transition shadow-[0_10px_30px_rgba(255,193,7,.25)]"
            >
              Contact Us
            </Link>

            <Link
              href="/portfolio"
              class="inline-flex items-center rounded-full px-7 py-3 font-semibold
                     ring-2 ring-white/30 hover:bg-white hover:text-black transition"
            >
              See how it works
            </Link>
          </div>

          <!-- badges -->
          <div class="mt-8 flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="250">
            <span class="rounded-full bg-white/5 px-3 py-1 text-sm text-white/80 ring-1 ring-white/10">150+ projects</span>
            <span class="rounded-full bg-white/5 px-3 py-1 text-sm text-white/80 ring-1 ring-white/10">12+ years</span>
            <span class="rounded-full bg-white/5 px-3 py-1 text-sm text-white/80 ring-1 ring-white/10">Global remote</span>
          </div>
        </div>

        <!-- RIGHT: Art / Mock (precise aligned AI panel) -->
        <div class="relative">
          <div
            class="relative mx-auto w-full max-w-[720px] rounded-2xl bg-black p-4 shadow-2xl"> <!-- ring removed -->
            <!-- Base hero art -->
            <img
              src="/logos/hero.jpg"
              alt="Engineering review illustration"
              class="w-full rounded-xl object-cover select-none"  <!-- ring removed -->
              draggable="false"
            />

            <!-- Soft glass lens behind comments -->
            <div
              class="pointer-events-none absolute bottom-10 left-1/2 z-0 h-[360px] w-[360px]
                     -translate-x-1/2 rounded-full
                     bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.10),transparent_60%)]
                     backdrop-blur-[2px]"> <!-- ring removed -->
            </div>

            <!-- ReviewAI PANEL — v2 with solid neon border -->
            <div
              class="pointer-events-none absolute z-10 select-none
                     w-[58%] sm:w-[60%] md:w-[56%] max-w-[560px] min-w-[300px]
                     top-[-14px] right-[-14px] md:top-[-18px] md:right-[-18px] xl:top-[-22px] xl:right-[-22px]">
              <!-- OUTER GLOW (soft) -->
              <div class="absolute -inset-4 rounded-[30px] bg-fuchsia-500/20 blur-2xl"></div>

              <!-- BORDER: gradient stroke created with p-[3px] wrapper -->
              <div
                class="relative rounded-[26px] p-[3px]
                       bg-gradient-to-br from-fuchsia-400 via-violet-400 to-purple-500
                       shadow-[0_18px_60px_rgba(0,0,0,.45)]">
                <!-- INNER CARD -->
                <div
                  class="rounded-[22px] bg-[rgba(16,16,24,.72)] backdrop-blur-md
                         overflow-hidden"> <!-- ring + inset shadow removed -->
                  <!-- Header -->
                  <div class="flex items-center gap-3 px-5 pt-5">
                    <div class="grid h-8 w-8 place-items-center rounded-lg bg-fuchsia-500/30 ring-1 ring-white/15">
                      <!-- small icon -->
                      <svg viewBox="0 0 24 24" class="h-5 w-5 text-fuchsia-200" fill="currentColor">
                        <path d="M12 2 20 7v10l-8 5-8-5V7l8-5z"/>
                      </svg>
                    </div>
                    <p class="text-xl font-semibold text-white/90">ReviewAI</p>
                  </div>

                  <!-- Body -->
                  <div class="px-5 pb-5">
                    <div class="mt-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                      <div class="flex items-center justify-between">
                        <span class="text-[11px] font-semibold tracking-widest text-white/70">
                          LESSONS LEARNED
                        </span>
                        <span
                          class="rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-white/85 ring-1 ring-white/15">
                          NEW
                        </span>
                      </div>

                      <!-- white content card -->
                      <div class="mt-3 rounded-lg bg-white/95 p-4 text-slate-900 shadow-sm">
                        <p class="text-[15px] font-medium leading-6">
                          Improve chip and coolant shielding around tool taper
                        </p>
                        <p class="mt-2 text-[13px] leading-6 text-slate-700">
                          In earlier builds, debris ingress at the tool holder taper led to increased runout
                          and maintenance downtime. Adding shielding mitigates this issue.
                        </p>

                        <!-- key takeaways -->
                        <div class="mt-3 rounded-lg bg-white/90 p-3 ring-1 ring-slate-200">
                          <p class="text-[12px] font-semibold text-slate-800">KEY TAKEAWAYS</p>
                          <ul class="mt-1 list-disc space-y-1 pl-5 text-[12px] text-slate-700">
                            <li>Add fixed or retractable chip guard near taper</li>
                            <li>Ensure coolant flow does not backwash onto holder seat</li>
                            <li>Use positive air blast to keep taper clean during tool changes</li>
                          </ul>
                        </div>
                      </div>

                      <!-- subtle rows like the reference -->
                      <div class="mt-3 space-y-3">
                        <div class="flex h-12 items-center rounded-xl bg-white/6 px-4 text-sm text-white/85 ring-1 ring-white/10">
                          Reinforce spindle mount to reduce vibration
                        </div>
                        <div class="flex h-12 items-center rounded-xl bg-white/6 px-4 text-sm text-white/85 ring-1 ring-white/10">
                          Reduce overconstraint at Z-axis linear rail
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /INNER CARD -->
              </div>
            </div>
            <!-- /ReviewAI PANEL -->

            <!-- Your two bottom comment cards (images you already have) -->
            <img
              src="/logos/hero11.jpg"
              alt="Systems Engineer comment"
              class="absolute left-4 bottom-40 z-10 w-[460px] max-w-[88%] select-none pointer-events-none
                     drop-shadow-[0_12px_35px_rgba(0,0,0,.55)]"
              draggable="false"
            />
            <img
              src="/logos/hero12.jpg"
              alt="ReviewAI comment"
              class="absolute right-4 bottom-6 z-10 w-[440px] max-w-[86%] select-none pointer-events-none
                     drop-shadow-[0_12px_35px_rgba(0,0,0,.55)]"
              draggable="false"
            />
          </div>

          <!-- floor glow -->
          <div
            class="pointer-events-none absolute -bottom-12 left-1/2 h-56 w-72 -translate-x-1/2
                   rounded-full bg-fuchsia-500/20 blur-3xl">
          </div>
        </div>
      </div>
    </section>

    <!-- Clients marquee -->
  <!-- <ClientStrip :logos="clientStrip" /> -->


    <!-- Compounding chart -->
    <CompoundingDelivery />
  </AppLayout>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import AppLayout from '../Layouts/AppLayout.vue'
// import clientstrip from '@/components/clientstrip.vue'
import CompoundingDelivery from '@/components/CompoundingDelivery.vue'

// If your SVGs are in /images/logos instead, change LOGO_BASE to '/images/logos'
// const LOGO_BASE = '/logos' // change to '/images/logos' if needed

// const clientStrip = [
//   { src: `${LOGO_BASE}/kraken.svg`,        alt: 'Kraken' },
//   { src: `${LOGO_BASE}/mainspring.svg`,    alt: 'Mainspring' },
//   { src: `${LOGO_BASE}/agi.svg`,           alt: 'AGI' },
//   { src: `${LOGO_BASE}/lockheed.svg`,      alt: 'Lockheed Martin' },
//   { src: `${LOGO_BASE}/tti.svg`,           alt: 'TTI' },
// ]
</script>
