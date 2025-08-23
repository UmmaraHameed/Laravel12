<template>
    <AppLayout>
        <!-- Hero Section -->

<section class="relative min-h-[90vh] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden -mt-8">
  <!-- Background image -->
  <img
    src="/images/main.jpg"
    alt="Team meeting"
    class="absolute inset-0 h-full w-full object-cover"
  />
  <!-- Global dark overlay -->
  <div class="absolute inset-0 bg-black/60"></div>
  <!-- Soft fade + blur on left side -->
  <div class="absolute inset-y-0 left-0 w-2/3 
              bg-gradient-to-r from-grey/70 via-grey/40 to-transparent
              backdrop-blur-[1px]"></div>

  <!-- Content wrapper (left-aligned text) -->
  <div class="relative z-10 h-[90vh] flex items-center px-6 sm:px-12 lg:px-20">
    <div class="max-w-2xl text-left">
      <h1 class="text-4xl sm:text-5xl font-bold text-white">
        We Create <span class="text-grey-600">Value</span> Through Innovative and Reliable
        <span class="text-white">Tech Solutions</span>
      </h1>
      <p class="mt-6 text-white text-lg">
        Building scalable apps, seamless platforms, and AI-driven products that empower businesses to grow faster and smarter.
      </p>
      
    </div>
  </div>
</section>




 
       <!-- About Section -->
<section class="py-24 bg-gradient-to-b from-gray-50 to-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Centered animated heading -->
    <div class="text-center mb-16">
      <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-700 animate-fade-up">
        About Us
      </h2>
    </div>

    <div class="grid items-center gap-12 md:gap-16 md:grid-cols-2">
      <!-- Left: Image collage -->
      <div class="relative h-[360px] sm:h-[420px]">
        <div class="absolute top-0 left-0 w-3/4 sm:w-[68%] h-[48%] rounded-[28px] overflow-hidden ring-8 ring-white shadow-xl shadow-gray-200 "data-aos="fade-right">
          <img src="/images/about1.png" alt="Team photo 1" class="h-full w-full object-cover" />
        </div>
        <div class="absolute bottom-0 right-0 w-4/5 sm:w-[62%] h-[65%] rounded-[28px] overflow-hidden ring-8 ring-white shadow-xl shadow-gray-200 translate-y-2"data-aos="fade-right">
          <img src="/images/about2.jpg" alt="Team photo 2" class="h-full w-full object-cover" />
        </div>
        <div class="absolute left-6 sm:left-10 bottom-16 sm:bottom-20 bg-black  text-white rounded-3xl px-6 sm:px-8 py-5 sm:py-6 shadow-2xl" data-aos="fade-right">
          <div class="text-4xl sm:text-5xl font-extrabold leading-none">150+</div>
          <div class="mt-1 text-sm sm:text-base opacity-90">completed projects</div>
        </div>
      </div>

      <!-- Right: Content -->
      <div>
        <h3 class="text-3xl font-bold tracking-tight text-slate-900 leading-[1.2] mb-6">
          High-Quality IT Services Provider Company
        </h3>
        <p class="text-lg leading-8 text-slate-600 mb-4">
          We build reliable, scalable software and cloud solutions for startups and enterprises.
        </p>
        <p class="text-lg leading-8 text-slate-600">
          Core stack: Laravel, Vue/React, Node.js, CI/CD, and cloud on AWS/GCP.
        </p>
      </div>
    </div>
  </div>
</section>





<section class="relative bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
  <!-- Top banner / heading -->
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center">
    <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800">
      A Journey of Many Years — Completing Hundreds of Relevant Projects
    </h2>
    <p class="mt-2 text-gray-600">
      Trusted by clients worldwide for quality delivery and long-term impact.
    </p>
  </div>

  <!-- White stats card -->
  <div class="relative">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="-mt-6 rounded-3xl bg-white shadow-xl ring-1 ring-black/5 px-6 py-10 sm:p-12">
        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 items-center">
          <!-- 1 -->
          <div class="flex items-center gap-5">
            <div class="h-16 w-16 rounded-full border-2 border-dashed border-gray-500 grid place-items-center bg-gray-100 animate-pulse">
              <!-- briefcase icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-600 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7h18M3 7l2 12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l2-12M8 7V6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1"/>
              </svg>
            </div>
            <div>
              <div class="text-3xl font-semibold text-gray-800">200+</div>
              <div class="mt-1 text-gray-600">Successful Projects</div>
            </div>
          </div>

          <!-- 2 -->
          <div class="flex items-center gap-5">
            <div class="h-16 w-16 rounded-full border-2 border-dashed border-gray-500 grid place-items-center bg-gray-100 animate-pulse">
              <!-- client icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-600 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 14a4 4 0 1 0-8 0M4 20a8 8 0 0 1 16 0M12 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
              </svg>
            </div>
            <div>
              <div class="text-3xl font-semibold text-gray-800">150+</div>
              <div class="mt-1 text-gray-600">Happy Clients</div>
            </div>
          </div>

          <!-- 3 -->
          <div class="flex items-center gap-5">
            <div class="h-16 w-16 rounded-full border-2 border-dashed border-gray-500 grid place-items-center bg-gray-100 animate-pulse">
              <!-- badge icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-600 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 17l-5 3-5-3V7l5-3 5 3v10zM12 8v7"/>
              </svg>
            </div>
            <div>
              <div class="text-3xl font-semibold text-gray-800">20,000+</div>
              <div class="mt-1 text-gray-600">Tasks Completed</div>
            </div>
          </div>

          <!-- 4 -->
          <div class="flex items-center gap-5">
            <div class="h-16 w-16 rounded-full border-2 border-dashed border-gray-500 grid place-items-center bg-gray-100 animate-pulse">
              <!-- headset icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-600 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12a8 8 0 1 1 16 0v5a2 2 0 0 1-2 2h-1v-6h3M4 17v-5m0 0h3v6H6a2 2 0 0 1-2-2z"/>
              </svg>
            </div>
            <div>
              <div class="text-3xl font-semibold text-gray-800">780+</div>
              <div class="mt-1 text-gray-600">Team</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




      <!--why choose Section -->
<section class="bg-[#F7F9FB] py-14">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <!-- Heading (smaller) -->
    <div class="text-center mb-10" data-aos="fade-up">
      <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800">Why Choose Us</h2>
      <p class="mt-2 text-base sm:text-lg text-gray-600">
        We offer comprehensive solutions to meet modern business needs.
      </p>
    </div>

    <!-- Grid (tighter gaps) -->
    <div class="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">

      <!-- Card 1 -->
      <a href="#security"
         class="group block rounded-2xl bg-white p-6 ring-1 ring-gray-200
                shadow-sm hover:shadow-xl hover:-translate-y-1
                transition-all duration-300"
         data-aos="fade-up" data-aos-delay="0">
        <div class="flex gap-4">
          <div class="shrink-0 h-10 w-10 grid place-items-center rounded-xl
                      bg-blue-600/10 text-blue-700
                      group-hover:animate-pulse transition">
            <!-- shield/check -->
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-width="1.8" d="M12 3l7 3v6c0 5-3.5 9-7 9s-7-4-7-9V6l7-3z"/>
              <path stroke-width="1.8" d="M9.5 12.5l1.5 1.5 3.5-3.5"/>
            </svg>
          </div>
          <div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900">
              Information security
            </h3>
            <p class="mt-1.5 text-sm sm:text-base text-gray-600">
              Experience unmatched security with our comprehensive information
              security services and solutions.
            </p>
            <span class="mt-4 inline-block underline underline-offset-4 font-medium text-gray-900 group-hover:text-blue-700 text-sm">
              Learn More
            </span>
          </div>
        </div>
      </a>

      <!-- Card 2 -->
      <a href="#cloud"
         class="group block rounded-2xl bg-white p-6 ring-1 ring-gray-200
                shadow-sm hover:shadow-xl hover:-translate-y-1
                transition-all duration-300"
         data-aos="fade-up" data-aos-delay="80">
        <div class="flex gap-4">
          <div class="shrink-0 h-10 w-10 grid place-items-center rounded-xl
                      bg-blue-600/10 text-blue-700 group-hover:animate-pulse">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-width="1.8" d="M7 18h9a4 4 0 000-8 6 6 0 10-11 4 3 3 0 002 4z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900">Cloud services</h3>
            <p class="mt-1.5 text-sm sm:text-base text-gray-600">
              Robust cloud services for scalable and secure business solutions.
            </p>
            <span class="mt-4 inline-block underline underline-offset-4 font-medium text-gray-900 group-hover:text-blue-700 text-sm">
              Learn More
            </span>
          </div>
        </div>
      </a>

      <!-- Card 3 -->
      <a href="#talent"
         class="group block rounded-2xl bg-white p-6 ring-1 ring-gray-200
                shadow-sm hover:shadow-xl hover:-translate-y-1
                transition-all duration-300"
         data-aos="fade-up" data-aos-delay="160">
        <div class="flex gap-4">
          <div class="shrink-0 h-10 w-10 grid place-items-center rounded-xl
                      bg-blue-600/10 text-blue-700 group-hover:animate-pulse">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-width="1.8" d="M7 13l3 3a3 3 0 004 0l3-3M3 8l4 4m10-4l4 4M7 8h3a4 4 0 014 4"/>
            </svg>
          </div>
          <div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900">Talent partnerships</h3>
            <p class="mt-1.5 text-sm sm:text-base text-gray-600">
              Engage top industry talent to evolve and refine your technology strategy.
            </p>
            <span class="mt-4 inline-block underline underline-offset-4 font-medium text-gray-900 group-hover:text-blue-700 text-sm">
              Learn More
            </span>
          </div>
        </div>
      </a>

      <!-- Card 4 -->
      <a href="#emerging"
         class="group block rounded-2xl bg-white p-6 ring-1 ring-gray-200
                shadow-sm hover:shadow-xl hover:-translate-y-1
                transition-all duration-300"
         data-aos="fade-up" data-aos-delay="240">
        <div class="flex gap-4">
          <div class="shrink-0 h-10 w-10 grid place-items-center rounded-xl
                      bg-blue-600/10 text-blue-700 group-hover:animate-pulse">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-width="1.8" d="M8 3h4v4a2 2 0 11-4 0V3zM3 8h4v4a2 2 0 110 4H3V8zm9 9v4h4v-4a2 2 0 10-4 0zm5-5h4V8h-4a2 2 0 100 4z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900">Emerging technologies</h3>
            <p class="mt-1.5 text-sm sm:text-base text-gray-600">
              AI/ML, Digital Twins, Blockchain, and Web 3.0 to drive business innovation.
            </p>
            <span class="mt-4 inline-block underline underline-offset-4 font-medium text-gray-900 group-hover:text-blue-700 text-sm">
              Learn More
            </span>
          </div>
        </div>
      </a>

      <!-- Card 5 -->
      <a href="#data-eng"
         class="group block rounded-2xl bg-white p-6 ring-1 ring-gray-200
                shadow-sm hover:shadow-xl hover:-translate-y-1
                transition-all duration-300"
         data-aos="fade-up" data-aos-delay="320">
        <div class="flex gap-4">
          <div class="shrink-0 h-10 w-10 grid place-items-center rounded-xl
                      bg-blue-600/10 text-blue-700 group-hover:animate-pulse">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <ellipse cx="12" cy="5" rx="7" ry="3" stroke-width="1.8"/>
              <path stroke-width="1.8" d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>
            </svg>
          </div>
          <div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900">Data engineering</h3>
            <p class="mt-1.5 text-sm sm:text-base text-gray-600">
              Pipelines and governance for streamlined data management and analytics.
            </p>
            <span class="mt-4 inline-block underline underline-offset-4 font-medium text-gray-900 group-hover:text-blue-700 text-sm">
              Learn More
            </span>
          </div>
        </div>
      </a>

      <!-- Card 6 -->
      <a href="#ai-ml"
         class="group block rounded-2xl bg-white p-6 ring-1 ring-gray-200
                shadow-sm hover:shadow-xl hover:-translate-y-1
                transition-all duration-300"
         data-aos="fade-up" data-aos-delay="400">
        <div class="flex gap-4">
          <div class="shrink-0 h-10 w-10 grid place-items-center rounded-xl
                      bg-blue-600/10 text-blue-700 group-hover:animate-pulse">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="6" y="9" width="12" height="8" rx="2" stroke-width="1.8"/>
              <circle cx="9" cy="13" r="1.2"/><circle cx="15" cy="13" r="1.2"/>
              <path stroke-width="1.8" d="M12 5v2m-5 10h10"/>
            </svg>
          </div>
          <div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900">AI, ML & data analytics</h3>
            <p class="mt-1.5 text-sm sm:text-base text-gray-600">
              Actionable insights with modern ML pipelines and decision-ready dashboards.
            </p>
            <span class="mt-4 inline-block underline underline-offset-4 font-medium text-gray-900 group-hover:text-blue-700 text-sm">
              Learn More
            </span>
          </div>
        </div>
      </a>

    </div>
  </div>
</section>


<!--Howwork -->

<section class="py-20 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Title -->
    <h2 class="text-center text-4xl sm:text-5xl font-extrabold text-zinc-900">
      How Can We Work With You
    </h2>
    <div class="mx-auto mt-4 h-2 w-full max-w-5xl rounded bg-gradient-to-r from-zinc-900 via-stone-700 to-zinc-500"></div>

    <!-- Content wrapper -->
    <div class="mt-10 rounded-3xl bg-zinc-50 p-8 sm:p-12 ring-1 ring-zinc-200">
      <div class="grid gap-10 lg:grid-cols-3">
        <!-- Step 1 -->
        <div class="flex flex-col">
          <div class="flex items-center gap-4">
            <span class="relative grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-zinc-900 to-stone-700 text-white shadow">
              <!-- icon: clipboard-check -->
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-width="1.8" d="M9 5h6M9 3h6a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a2 2 0 0 1 2-2z"/>
                <path stroke-width="1.8" d="m9 14 2 2 4-4"/>
              </svg>
            </span>
            <h3 class="text-2xl font-bold text-zinc-900">Scop &amp; Definition</h3>
          </div>
          <p class="mt-4 text-zinc-700">
            We clarify goals, timeline, and tech stack. You get a lean plan with milestones.
          </p>
        </div>

        <!-- Connector -->
        <div class="hidden lg:flex items-center">
          <div class="w-full border-t-4 border-dotted border-zinc-300/80"></div>
        </div>

        <!-- Step 2 -->
        <div class="flex flex-col">
          <div class="flex items-center gap-4">
            <span class="relative grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-zinc-900 to-stone-700 text-white shadow">
              <!-- icon: users -->
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-width="1.8" d="M16 11c1.657 0 3-1.79 3-4s-1.343-4-3-4-3 1.79-3 4 1.343 4 3 4zM8 11c1.657 0 3-1.79 3-4S9.657 3 8 3 5 4.79 5 7s1.343 4 3 4z"/>
                <path stroke-width="1.8" d="M2 21v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1M14 15h3a5 5 0 0 1 5 5v1"/>
              </svg>
            </span>
            <h3 class="text-2xl font-bold text-zinc-900">IT Staff Augmentation</h3>
          </div>
          <p class="mt-4 text-zinc-700">
            We embed vetted engineers/designers into your team to fill skill gaps fast.
          </p>
        </div>

        <!-- Connector -->
        <div class="hidden lg:flex items-center">
          <div class="w-full border-t-4 border-dotted border-zinc-300/80"></div>
        </div>

        <!-- Step 3 -->
        <div class="flex flex-col ">
          <div class="flex items-center gap-4">
            <span class="relative grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-zinc-900 to-stone-700 text-white shadow">
              <!-- icon: trend up -->
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-width="1.8" d="m3 17 6-6 4 4 6-6M15 5h6v6"/>
              </svg>
            </span>
            <h3 class="text-2xl font-bold text-zinc-900">Deliver &amp; Scale</h3>
          </div>
          <p class="mt-4 text-zinc-700">
            Weekly demos, measurable KPIs, and flexible ramp-up/down as your needs change.
          </p>
        </div>
      </div>

      <!-- Detail row -->
      <div class="mt-10 grid gap-8 md:grid-cols-3">
        <div class="rounded-2xl bg-white p-6 ring-1 ring-zinc-100 shadow-sm">
          <div class="flex items-center gap-3 text-zinc-700 mb-2">
            <span class="grid h-9 w-9 place-items-center rounded-full bg-zinc-900 text-white">
              <!-- icon: briefcase -->
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-width="1.8" d="M3 7h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>
                <path stroke-width="1.8" d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
              </svg>
            </span>
            <span class="text-sm font-medium">Engagement Model</span>
          </div>
          <div class="text-zinc-900 font-semibold">Staff Augmentation</div>
        </div>

        <div class="rounded-2xl bg-white p-6 ring-1 ring-zinc-100 shadow-sm">
          <div class="flex items-center gap-3 text-zinc-700 mb-2">
            <span class="grid h-9 w-9 place-items-center rounded-full bg-zinc-900 text-white">
              <!-- icon: chat -->
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-width="1.8" d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.5-4.5A4 4 0 0 1 4 13V7a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4v8z"/>
              </svg>
            </span>
            <span class="text-sm font-medium">Communication</span>
          </div>
          <div class="text-zinc-900 font-semibold">Daily standups • Weekly demo</div>
        </div>

        <div class="rounded-2xl bg-white p-6 ring-1 ring-zinc-100 shadow-sm">
          <div class="flex items-center gap-3 text-zinc-700 mb-2">
            <span class="grid h-9 w-9 place-items-center rounded-full bg-zinc-900 text-white">
              <!-- icon: key -->
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="7" cy="17" r="3" stroke-width="1.8"/>
                <path stroke-width="1.8" d="M21 7a6 6 0 0 0-9.33 5"/>
                <path stroke-width="1.8" d="M13 12l-3 3 2 2 2-2 2 2 2-2"/>
              </svg>
            </span>
            <span class="text-sm font-medium">Ownership</span>
          </div>
          <div class="text-zinc-900 font-semibold">You keep IP &amp; repos</div>
        </div>
      </div>
    </div>
  </div>
</section>



<!--Contact us -->


<section class="relative bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
  <!-- Call to Action -->
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
    <h4 class="text-sm uppercase tracking-wide text-gray-600 mb-4">Call to Action</h4>
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
      Let’s Get Started With Your Project
    </h2>
    <p class="text-lg text-gray-600 mb-8">
      We will help you achieve your goals and grow your business.
    </p>
    <div class="flex justify-center items-center gap-8 flex-wrap">
      <a href="#contact"
         class="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-full shadow-md transition">
         Start Now
      </a>
      <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 5h2l2 9h11l1.5-6H7"/>
        </svg>
        <span class="text-lg font-medium text-gray-800">Call Now: +12345678901</span>
      </div>
    </div>
  </div>

  <!-- Contact Form -->
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
    <div class="rounded-3xl bg-white shadow-xl ring-1 ring-black/5 p-10 grid gap-10 lg:grid-cols-2">
      <!-- Left info -->
      <div class="space-y-6">
        <h3 class="text-2xl font-bold text-gray-800">Send Us A Message</h3>
        <p class="text-gray-600">
          Get in touch with us to see how our company can help grow your business online.
        </p>
        <div class="flex items-center gap-4">
          <div class="h-12 w-12 rounded-full border-2 border-dashed border-gray-500 grid place-items-center bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H8m8 0l-4 4m4-4l-4-4"/>
            </svg>
          </div>
          <div>
            <p class="text-lg font-semibold text-gray-800">Email</p>
            <p class="text-gray-600">yourname@email.com</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div class="h-12 w-12 rounded-full border-2 border-dashed border-gray-500 grid place-items-center bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5h2l2 9h11l1.5-6H7"/>
            </svg>
          </div>
          <div>
            <p class="text-lg font-semibold text-gray-800">Phone</p>
            <p class="text-gray-600">+12345678901</p>
          </div>
        </div>
      </div>

      <!-- Right form -->
      <form action="#" method="POST" class="space-y-6">
        <div class="grid grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" class="rounded-lg border-gray-300 p-3 focus:border-gray-500 focus:ring-gray-500">
          <input type="text" placeholder="Last Name" class="rounded-lg border-gray-300 p-3 focus:border-gray-500 focus:ring-gray-500">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <input type="email" placeholder="Email Address" class="rounded-lg border-gray-300 p-3 focus:border-gray-500 focus:ring-gray-500">
          <input type="text" placeholder="Phone Number" class="rounded-lg border-gray-300 p-3 focus:border-gray-500 focus:ring-gray-500">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <input type="date" class="rounded-lg border-gray-300 p-3 focus:border-gray-500 focus:ring-gray-500">
          <input type="text" placeholder="Service" class="rounded-lg border-gray-300 p-3 focus:border-gray-500 focus:ring-gray-500">
        </div>
        <textarea placeholder="Message" rows="4" class="w-full rounded-lg border-gray-300 p-3 focus:border-gray-500 focus:ring-gray-500"></textarea>
        <button type="submit" class="w-full py-3 px-6 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition">Send Message</button>
      </form>
    </div>
  </div>
</section>





      
    </AppLayout>
</template>

<script setup>
import AppLayout from '../Layouts/AppLayout.vue';
</script>
