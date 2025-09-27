<template>
  <section class="relative bg-black text-white overflow-hidden">
    <!-- Text block (stays inside container like your screenshot) -->
    <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-10">
      <h1 class="font-semibold tracking-tight px-10
               text-[22px] sm:text-[24px] md:text-[36px] lg:text-[44px]
               leading-tight">
            At a software house, the biggest decisions<br>
            are made in daily reviews—not launch day
      </h1>
      <p class="mt-8 px-10 text-sm sm:text-lg md:text-xl text-white/60 max-w-4xl">
          Ineffective reviews hard-code bad decisions:
          missed quality bars,<br> slower releases, lower GM%, and
          fading customer trust. Strong<br> review culture 
          + automation compounds into stronger products.
      </p>
    </div>

    <!-- Aligned hero image -->
    <div class="relative ml-20 mb-20  w-250 h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden">
      <img
        src="/logos/section3.jpg"
        alt="Decision-making compounding graphic"
        class="absolute inset-0 w-full h-full max-w-none
               object-cover
               object-[40%_58%] md:object-[40%_54%] lg:object-[40%_50%]
               select-none pointer-events-none"
        loading="lazy"
        aria-hidden="true"
      />
    </div>
  </section>
</template>
