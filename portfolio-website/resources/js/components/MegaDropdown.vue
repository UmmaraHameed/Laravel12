<template>
  <div class="relative" @mouseenter="open = true" @mouseleave="open = false">
    <button
      type="button"
      class="inline-flex items-center gap-1 text-white hover:text-white/90"
      :aria-expanded="open"
      @click="open = !open"
    >
      <span class="font-medium">{{ label }}</span>
      <svg class="h-4 w-4 transition" :class="{ 'rotate-180': open }" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd"/>
      </svg>
    </button>

    <!-- Panel (dark, translucent) -->
    <div
      v-show="open"
      class="absolute left-1/2 -translate-x-1/2 mt-3 w-[760px]
             rounded-xl bg-neutral-900/95 text-white backdrop-blur
             border border-white/10 ring-1 ring-white/10 shadow-2xl p-4"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <a
          v-for="item in items"
          :key="item.label"
          :href="item.href"
          class="group flex items-start gap-4 rounded-lg px-3 py-3 hover:bg-white/5 transition"
        >
          <!-- Icon bubble -->
          <span class="mt-0.5 grid h-10 w-10 place-items-center rounded-lg
                       bg-white/10 text-white/90 group-hover:bg-white/15">
            <!-- choose icon by key -->
            <svg v-if="item.icon === 'review'" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 4v-4H5a2 2 0 0 1-2-2V5z"/>
            </svg>
            <svg v-else-if="item.icon === 'users'" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 11c1.66 0 3-1.57 3-3.5S17.66 4 16 4s-3 1.57-3 3.5S14.34 11 16 11zm-8 0c1.66 0 3-1.57 3-3.5S9.66 4 8 4 5 5.57 5 7.5 6.34 11 8 11zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.96 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            <svg v-else-if="item.icon === 'shield'" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l8 4v6c0 5-3.4 9.74-8 10-4.6-.26-8-5-8-10V6l8-4z"/>
            </svg>
            <svg v-else-if="item.icon === 'cube'" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l9 5-9 5-9-5 9-5zm0 7l9 5-9 5-9-5 9-5z"/>
            </svg>
            <svg v-else-if="item.icon === 'doc'" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM13 3.5V9h5.5"/>
            </svg>
            <svg v-else-if="item.icon === 'wrench'" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 19l-6.3-6.3a6 6 0 0 1-7.9-7.9L9 6 6 9l2.8 2.8L12 9l2.8 2.8L11 16l6 6 5-3z"/>
            </svg>
            <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z"/>
            </svg>
          </span>

          <!-- Copy -->
          <span class="block">
            <span class="block font-semibold text-white leading-5">{{ item.label }}</span>
            <span class="block text-sm text-white/70">{{ item.desc }}</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  label: { type: String, required: true },
  // items: [{ label, desc, href, icon }]
  items: { type: Array, required: true }
})

const open = ref(false)
</script>
