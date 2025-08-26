<script setup>
import { computed } from 'vue'

const props = defineProps({
  logos: { type: Array, required: true }, // [{src, name}]
  speed: { type: Number, default: 30 },   // seconds for one loop
  itemWidth: { type: String, default: 'min-w-[220px]' }, // width per logo slot
  itemHeight: { type: String, default: 'h-16 md:h-20' }, // height per logo slot
})

// duplicate once for seamless scroll
const loop = computed(() => [...props.logos, ...props.logos])
</script>

<template>
  <section class="relative bg-black text-white border-y border-white/10">
    <div class="max-w-[100vw] overflow-hidden py-10">
      <div class="group" :style="{ '--dur': `${speed}s` }">
        <div
          class="flex items-center whitespace-nowrap gap-20 animate-logo-marquee
                 group-hover:[animation-play-state:paused]"
        >
          <div
            v-for="(logo, i) in loop"
            :key="`${i}-${logo.src}`"
            class="flex items-center justify-center opacity-90 hover:opacity-100 transition"
            :class="[itemWidth, itemHeight]"
            aria-label="customer logo"
          >
            <img
              :src="logo.src"
              :alt="logo.name || 'logo'"
              class="max-h-full max-w-[200px] object-contain"
              loading="lazy"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
