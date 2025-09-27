<script setup>
import { Link } from '@inertiajs/vue3'
import AppLayout from '../Layouts/AppLayout.vue'
import ClientStrip from '@/components/ClientStrip.vue'
import Designreview from '@/components/Designreview.vue'
import CompoundingDelivery from '@/components/CompoundingDelivery.vue'
import Expertisehero from '@/components/Expertisehero.vue'
import StatsTransform from '@/components/StatsTransform.vue'
import Relationship from '@/components/relationship.vue'
</script>

<template>
  <AppLayout>
    <section class="relative overflow-hidden text-white 
                    bg-gradient-to-br from-black via-[#0a0019] to-purple-900">
      <div class="h-px bg-slate-400/60"></div>

      <!-- Optional blur glow (extra effect) -->
    
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-[55%] -z-20
            bg-gradient-to-bl from-[#0b0019] via-[#180032] to-transparent">
    </div>

    <!-- Radial purple halo behind the panel -->
    <!-- <div
      class="pointer-events-none absolute -z-10 right-[-8%] top-[-6%]
            h-[140%] w-[80%]
            bg-[radial-gradient(70%_70%_at_80%_40%,rgba(168,85,247,.55)_0%,rgba(139,92,246,.38)_36%,transparent_72%)]
            blur-[80px] opacity-90">
    </div> -->


      <div class="mx-auto max-w-7xl grid items-center gap-12 px-6 lg:px-8 py-16 lg:py-24 md:grid-cols-[1.05fr_1fr]">
        <div class="max-w-3xl">
          <h1 class="font-semibold tracking-tight px-10
                text-[22px] sm:text-[24px] md:text-[36px] lg:text-[44px]
                leading-tight">
            Building Smarter Software. <br />Solving Real Problems<br />Scaling Your Vision.
          </h1>
          <p class="mt-6 px-10 text-white/80 text-sm md:text-lg">
            At ClimeSoft, we turn ideas into powerful digital products.
            From web and mobile apps to enterprise SaaS, our team delivers fast,
            reliable, and scalable
            solutions—crafted with passion and built for growth.
          </p>
          <div class="mt-8  ml-8 flex gap-3">
                      <a href="#"
              class="inline-flex items-center rounded-full bg-yellow-400 text-white px-5 py-3 text-sm font-medium hover:bg-yellow-300 transition">
              Let's build together
            </a>

            <a href="#"
              class="inline-flex items-center rounded-full border border-yellow-400 text-white px-5 py-3 text-sm font-medium hover:bg-yellow-400 hover:text-black transition">
              View Our Work
            </a>


          </div>
        </div>

        <div class="relative isolate md:pl-8">
          <div class="relative w-full lg:max-w-none">
            <div class="relative overflow-visible min-h-[clamp(80px,62vh,420px)]">

              <img
                src="/logos/main1.jpg"
                alt="Hero machine"
                class="absolute items  mr-[24px] justify-start top-16/14
                      -translate-y-1/2 z-30 h-[min(80vw,1000px)] w-[min(1000vw,1400px)] select-none pointer-events-none"
                draggable="false"
              />

              <img
                src="/logos/hero2.jpg"
                alt="Review panel"
                class="absolute right-[-20%]  z-15 w-[min(70vw,600px)] max-w-[600px] 
                      rounded-[28px] drop-shadow-[0_25px_70px_rgba(0,0,0,.45)]
                      select-none pointer-events-none"
                draggable="false"
              />

            <!-- Left card -->
    <img
      src="/logos/im15.jpg"
      alt="Systems Engineer comment"
      class="absolute left-[10%] bottom-[14%] z-30
            h-[clamp(100px,15vh,300px)] w-auto
            select-none pointer-events-none
            drop-shadow-[0_12px_35px_rgba(0,0,0,.55)]"
    />

    <!-- Right card -->
    <img
      src="/logos/hero12.jpg"
      alt="ReviewAI comment"
      class="absolute left-[75px] right-[20%] top-[25%] z-70
            h-[clamp(660px,54vh,580px)] w-auto
            select-none pointer-events-none
            drop-shadow-[0_12px_35px_rgba(0,0,0,.55)]"
    />


            </div>
          </div>
        </div>
      </div>
    </section>


  
<!-- CLIENTS STRIP -->
    <ClientStrip 
      :logos="[
        { name: 'VIA', src: 'https://cdn.prod.website-files.com/5e4d9854e6dad067f4b514b3/6819fa16e08edc7d01b1a141_76576531.svg' },
        { name: 'Polaris', src: 'https://cdn.prod.website-files.com/5e4d9854e6dad067f4b514b3/6627d65c63d2b401cc79e2e3_g2317.svg'},
        { name: 'Hyundai', src: 'https://cdn.prod.website-files.com/5e4d9854e6dad067f4b514b3/6627d66357f77274d9e5c5f8_521515.svg' },
        { name: 'Ford', src: 'https://cdn.prod.website-files.com/5e4d9854e6dad067f4b514b3/6627d65b63d2b401cc79e286_9769679.svg' },
        { name: 'Ford', src: 'https://cdn.prod.website-files.com/5e4d9854e6dad067f4b514b3/6819fa1638e52809e7abe02b_575.svg' }
      ]" 
    />

    <!-- Compounding chart -->
    <CompoundingDelivery />
    <Designreview />
    <Expertisehero />
  <StatsTransform />
  <relationship />
  </AppLayout>
</template>

