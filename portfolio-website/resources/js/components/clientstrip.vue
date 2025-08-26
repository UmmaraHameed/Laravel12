<template>
  <section class="bg-black text-white">
    <!-- thin divider above -->
    <div class="h-px bg-white/10"></div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-10">
      <!-- 2 / 3 / 5 logos per row responsively -->
      <ul
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-16 lg:gap-x-24 gap-y-10 items-center justify-items-center"
      >
        <li
          v-for="logo in logos"
          :key="logo.name"
          class="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"
        >
          <!-- keep height consistent, preserve aspect ratio -->
          <img
            :src="logo.src"
            :alt="logo.name"
            class="w-auto max-h-14 sm:max-h-16 lg:max-h-20 object-contain"
            loading="lazy"
          />
        </li>
      </ul>
    </div>

    <!-- thin divider below -->
    <div class="h-px bg-white/10"></div>
  </section>
</template>

<script setup>
defineProps({
  logos: { type: Array, required: true },
});
</script>
