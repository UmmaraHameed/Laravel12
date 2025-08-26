<template>
  <section class="relative bg-black text-white">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24" data-aos="fade-up">
      <header class="max-w-4xl">
        <h2 class="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
          Great engineering decisions compound over time.
        </h2>
        <p class="mt-4 text-white/70 text-lg">
          Teams that invest in code reviews, CI/CD, and clear scope ship faster and build stronger products.
          Those that don’t, accumulate risk and delay. Here’s how it compounds for a software house.
        </p>
      </header>

      <div class="relative mt-14 md:mt-16 h-[420px] md:h-[460px]">
        <!-- baseline -->
        <div class="absolute left-0 right-0 top-1/2 -translate-y-1/2">
          <div class="h-px border-t border-dotted border-white/20"></div>
        </div>

        <!-- Company A -->
        <div class="absolute left-4 md:left-6 top-[32%] -translate-y-1/2 inline-flex items-center gap-2
                    rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 text-sm">
          <span class="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
          Company A
        </div>

        <!-- Company B -->
        <div class="absolute left-4 md:left-6 top-[62%] -translate-y-1/2 inline-flex items-center gap-2
                    rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
          <span class="inline-block h-2.5 w-2.5 rounded-full bg-white/40"></span>
          Company B
        </div>

        <!-- Curves -->
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1000 480" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stop-color="#34d399"/>
              <stop offset="100%" stop-color="#22c55e"/>
            </linearGradient>
          </defs>
          <path d="M 0 260 C 220 260, 340 250, 480 240 C 640 228, 800 200, 1000 70"
                fill="none" stroke="url(#g)" stroke-width="4" stroke-linecap="round"/>
          <path d="M 0 260 C 260 260, 420 280, 600 320 C 760 355, 880 400, 1000 470"
                fill="none" stroke="#1f2937" stroke-width="3.5" stroke-linecap="round"/>
        </svg>

        <!-- Top milestones -->
        <div v-for="(m, i) in topMilestones" :key="`top-${i}`" class="absolute" :style="{ left: m.left }">
          <div class="absolute bottom-[48%] h-[120px] w-px bg-emerald-400/70"></div>
          <div class="absolute bottom-[48%] -translate-y-1/2 -ml-[7px] h-3.5 w-3.5 rounded-full bg-emerald-400"></div>
          <div class="absolute -top-10 -translate-x-1/2 whitespace-nowrap text-sm md:text-base font-medium">
            {{ m.title }}
          </div>
        </div>

        <!-- Bottom milestones -->
        <div v-for="(m, i) in bottomMilestones" :key="`bottom-${i}`" class="absolute" :style="{ left: m.left }">
          <div class="absolute top-[52%] h-[120px] w-px bg-white/20"></div>
          <div class="absolute top-[52%] -translate-y-1/2 -ml-[7px] h-3.5 w-3.5 rounded-full bg-white/40"></div>
          <div class="absolute top-[calc(52%+124px)] -translate-x-1/2 whitespace-nowrap text-sm md:text-base text-white/70">
            {{ m.title }}
          </div>
        </div>

        <!-- Callout -->
        <div class="absolute right-8 top-1/2 -translate-y-1/2 text-right">
          <p class="text-white font-semibold">Compounding delivery</p>
          <div class="mx-auto mt-3 h-16 w-px bg-white/20 relative">
            <span class="absolute -top-1 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-emerald-400"></span>
            <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-white/30"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const topMilestones = [
  { left: '18%', title: 'Faster Code Reviews' },
  { left: '32%', title: 'More CI/CD Releases' },
  { left: '46%', title: 'Better Product Decisions' },
  { left: '60%', title: 'Robust Architecture' },
  { left: '72%', title: 'Reliable Releases' },
  { left: '84%', title: 'Happier Clients' },
  { left: '92%', title: 'Stronger Brand' },
]

const bottomMilestones = [
  { left: '18%', title: 'Slow Sprints' },
  { left: '32%', title: 'Fewer Releases' },
  { left: '46%', title: 'Bugs in Production' },
  { left: '60%', title: 'Delayed Launches' },
  { left: '72%', title: 'Costly Rework' },
  { left: '84%', title: 'Lower NPS' },
  { left: '92%', title: 'Client Churn' },
]
</script>
