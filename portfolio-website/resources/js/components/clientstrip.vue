<template>
  <section 
    class="bg-black text-white border-y border-white/10 overflow-hidden" 
    aria-label="Client logos"
  >
    <!-- Desktop/tablet: animated scrolling strip -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-6">
      <div class="hidden sm:block">
        <div class="relative overflow-hidden">
          <div 
            class="flex items-center gap-12 lg:gap-24 animate-scroll"
            :style="{ animationDuration: `${animationDuration}s` }"
          >
            <!-- First set of logos -->
            <div
              v-for="logo in logos"
              :key="logo.name"
              class="opacity-80 grayscale hover:opacity-100 hover:grayscale-0 hover:brightness-110 hover:scale-[1.05] transition duration-300 ease-in-out flex-shrink-0"
            >
              <img
                :src="logo.src"
                :alt="logo.name"
                :class="[
                  'h-10 md:h-12 lg:h-[56px] w-auto object-contain',
                  invertOnDark ? 'invert brightness-0' : '',
                  logo.scale ? logo.scale : ''
                ]"
                loading="lazy"
              />
            </div>
            <!-- Duplicate set for seamless loop -->
            <div
              v-for="logo in logos"
              :key="logo.name + '-duplicate'"
              class="opacity-80 grayscale hover:opacity-100 hover:grayscale-0 hover:brightness-110 hover:scale-[1.05] transition duration-300 ease-in-out flex-shrink-0"
            >
              <img
                :src="logo.src"
                :alt="logo.name"
                :class="[
                  'h-10 md:h-12 lg:h-[56px] w-auto object-contain',
                  invertOnDark ? 'invert brightness-0' : '',
                  logo.scale ? logo.scale : ''
                ]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile: animated horizontal scroll -->
      <div class="relative sm:hidden overflow-hidden">
        <div 
          class="flex items-center gap-12 animate-scroll-mobile"
          :style="{ animationDuration: `${animationDuration}s` }"
        >
          <!-- First set of logos -->
          <div
            v-for="logo in logos"
            :key="logo.name + '-m'"
            class="shrink-0 opacity-80 grayscale hover:opacity-100 hover:grayscale-0 hover:brightness-110 hover:scale-[1.05] transition duration-300 ease-in-out"
          >
            <img
              :src="logo.src"
              :alt="logo.name"
              :class="[
                'h-12 w-auto object-contain',
                invertOnDark ? 'invert brightness-0' : '',
                logo.scale ? logo.scale : ''
              ]"
              loading="lazy"
            />
          </div>
          <!-- Duplicate set for seamless loop -->
          <div
            v-for="logo in logos"
            :key="logo.name + '-m-duplicate'"
            class="shrink-0 opacity-80 grayscale hover:opacity-100 hover:grayscale-0 hover:brightness-110 hover:scale-[1.05] transition duration-300 ease-in-out"
          >
            <img
              :src="logo.src"
              :alt="logo.name"
              :class="[
                'h-12 w-auto object-contain',
                invertOnDark ? 'invert brightness-0' : '',
                logo.scale ? logo.scale : ''
              ]"
              loading="lazy"
            />
          </div>
        </div>
        <!-- Fade edges for mobile -->
        <div class="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent"></div>
        <div class="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  logos: { type: Array, required: true },
  invertOnDark: { type: Boolean, default: false },
  animationDuration: { type: Number, default: 20 }
})
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-mobile {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll linear infinite;
}

.animate-scroll-mobile {
  animation: scroll-mobile linear infinite;
}

/* Pause animation on hover */
.animate-scroll:hover,
.animate-scroll-mobile:hover {
  animation-play-state: paused;
}
</style>