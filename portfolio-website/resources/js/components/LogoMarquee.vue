<script setup>
import { computed } from 'vue'

const props = defineProps({
  logos: { type: Array, required: true },
  speed: { type: Number, default: 30 },
  itemWidth: { type: String, default: 'min-w-[220px]' },
  itemHeight: { type: String, default: 'h-16 md:h-20' },
  strip: { type: Boolean, default: true },
  stripText: { type: String, default: 'NEW' },
  stripSpeed: { type: Number, default: 20 },
  stripRepeat: { type: Number, default: 14 },
  stripHeight: { type: String, default: 'h-8 md:h-10' },
  stripPad: { type: String, default: 'px-6' },
  stripBg: { type: String, default: 'bg-gray-900' },
  stripTextClass: { type: String, default: 'text-white' }
})

const loop = computed(() => [...props.logos, ...props.logos])
const stripArray = computed(() => Array.from({ length: props.stripRepeat }, () => props.stripText))

const animClassFor = (base, n) => {
  const m = {10:`animate-${base}-10`,15:`animate-${base}-15`,20:`animate-${base}-20`,30:`animate-${base}-30`}
  return m[n] || m[20]
}
const stripAnimClass = computed(() => animClassFor('ticker', props.stripSpeed))
const logoAnimClass = computed(() => animClassFor('logo-marquee', props.speed))
</script>

<template>
  <section class="relative bg-black text-white border-y border-white/10">
    <div v-if="strip" class="w-full overflow-hidden" :class="[stripHeight, stripBg]">
      <div class="relative group">
        <div class="absolute inset-0 flex items-center">
          <div class="flex whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]" :class="stripAnimClass">
            <div class="flex">
              <span v-for="(t,i) in stripArray" :key="`a-${i}`" :class="[stripPad, stripTextClass]">{{ t }}</span>
            </div>
            <div class="flex" aria-hidden="true">
              <span v-for="(t,i) in stripArray" :key="`b-${i}`" :class="[stripPad, stripTextClass]">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-[100vw] overflow-hidden py-10">
      <div class="group">
        <div class="flex items-center whitespace-nowrap gap-20 will-change-transform group-hover:[animation-play-state:paused]" :class="logoAnimClass">
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
