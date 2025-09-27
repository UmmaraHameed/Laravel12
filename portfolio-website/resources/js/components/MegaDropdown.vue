<template>
  <div class="relative" @mouseenter="open = true" @mouseleave="open = false">
    <button
      type="button"
      class="inline-flex items-center gap-1 text-white hover:text-white/90 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-md px-2 py-1"
      :aria-expanded="open"
      aria-haspopup="menu"
      aria-controls="menu-panel"
      @click="toggleDropdown"
      @keydown.enter="toggleDropdown"
      @keydown.space.prevent="toggleDropdown"
    >
      <span class="font-medium">{{ label }}</span>
      <svg class="h-4 w-4 transition-transform duration-200" :class="{ 'rotate-180': open }" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd"/>
      </svg>
    </button>

    <div
      v-show="open"
      id="menu-panel"
      role="menu"
      class="absolute z-50 left-0 right-0 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 mt-2 w-full sm:w-[760px] max-h-[70vh] overflow-y-auto rounded-xl bg-neutral-900/95 text-white backdrop-blur border border-white/10 ring-1 ring-white/10 shadow-2xl p-3 sm:p-4"
      @keydown.esc.stop.prevent="closeDropdown"
      @click.stop
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
        <component
          v-for="(item, index) in items"
          :key="item.label"
          :is="item.external ? 'a' : Link"
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
          role="menuitem"
          :tabindex="0"
          class="group flex items-start gap-4 rounded-lg px-3 py-3 hover:bg-white/5 focus:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 w-full cursor-pointer"
          @click="handleItemClick(item)"
          @keydown.enter="handleItemClick(item)"
          @keydown.space.prevent="handleItemClick(item)"
          @keydown.arrow-down.prevent="focusNextItem(index)"
          @keydown.arrow-up.prevent="focusPrevItem(index)"
        >
          <span class="mt-0.5 grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white/90 group-hover:bg-white/15">
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

          <span class="block">
            <span class="block font-semibold text-white leading-5">{{ item.label }}</span>
            <span class="block text-sm text-white/70">{{ item.desc }}</span>
          </span>
        </component>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
import { Link } from '@inertiajs/vue3'

defineProps({
  label: { type: String, required: true },
  items: { type: Array, required: true }
})

const open = ref(false)

const toggleDropdown = () => {
  open.value = !open.value
  if (open.value) {
    nextTick(() => {
      const firstItem = document.querySelector('#menu-panel [role="menuitem"]')
      if (firstItem) {
        firstItem.focus()
      }
    })
  }
}

const closeDropdown = () => {
  open.value = false
}

const handleItemClick = (item) => {
  if (item.external) {
    // For external links, let the browser handle the navigation
    window.open(item.href, '_blank', 'noopener,noreferrer')
  } else {
    // For internal links, close dropdown and let Inertia handle navigation
    closeDropdown()
  }
}

const focusNextItem = (currentIndex) => {
  const items = document.querySelectorAll('#menu-panel [role="menuitem"]')
  const nextIndex = (currentIndex + 1) % items.length
  items[nextIndex]?.focus()
}

const focusPrevItem = (currentIndex) => {
  const items = document.querySelectorAll('#menu-panel [role="menuitem"]')
  const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1
  items[prevIndex]?.focus()
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (open.value && !event.target.closest('.relative')) {
    closeDropdown()
  }
}

// Handle escape key globally
const handleEscape = (event) => {
  if (event.key === 'Escape' && open.value) {
    closeDropdown()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscape)
})
</script>
