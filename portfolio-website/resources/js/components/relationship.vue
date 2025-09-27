<template>
  <section class="relative overflow-hidden bg-black text-white py-20">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, #3B82F6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%);"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Software House Ecosystem
        </h2>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto">
          Discover how our interconnected teams collaborate to deliver exceptional software solutions
        </p>
        
        <!-- App Usage Examples -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div class="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white">E-commerce Platform</h3>
            </div>
            <p class="text-sm text-slate-300">Full-stack development with real-time analytics</p>
          </div>
          
          <div class="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white">AI-Powered Analytics</h3>
            </div>
            <p class="text-sm text-slate-300">Machine learning integration with predictive insights</p>
          </div>
          
          <div class="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white">Mobile Banking App</h3>
            </div>
            <p class="text-sm text-slate-300">Secure financial platform with biometric authentication</p>
          </div>
        </div>
      </div>

      <!-- Central Hub -->
      <div class="flex justify-center mb-16">
        <div class="relative">
          <!-- Central Node -->
          <div class="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
            <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          
          <!-- Pulsing Rings -->
          <div class="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping"></div>
          <div class="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping" style="animation-delay: 0.5s"></div>
          <div class="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping" style="animation-delay: 1s"></div>
        </div>
      </div>

      <!-- Team Nodes Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Development Team -->
        <div class="team-node group">
          <div class="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 hover:scale-105 transition-all duration-500">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">Development</h3>
                <p class="text-blue-300 text-sm">Core Engineering</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">12 Active Projects</span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">8 Team Members</span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">95% Success Rate</span>
              </div>
            </div>
            
            <!-- Collaboration Examples -->
            <div class="mt-4 pt-4 border-t border-blue-400/20">
              <h4 class="text-sm font-semibold text-blue-300 mb-2">Recent Collaborations:</h4>
              <div class="space-y-2 text-xs text-slate-400">
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span>Working with Design on UI/UX</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>Integrating with QA testing</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  <span>Deploying via DevOps pipeline</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Design Team -->
        <div class="team-node group">
          <div class="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8 hover:scale-105 transition-all duration-500">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">Design</h3>
                <p class="text-purple-300 text-sm">Creative Vision</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">6 Active Projects</span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">5 Team Members</span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">98% Client Satisfaction</span>
              </div>
            </div>
            
            <!-- Collaboration Examples -->
            <div class="mt-4 pt-4 border-t border-purple-400/20">
              <h4 class="text-sm font-semibold text-purple-300 mb-2">Recent Collaborations:</h4>
              <div class="space-y-2 text-xs text-slate-400">
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span>Creating wireframes for Dev team</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                  <span>User research with Product team</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                  <span>Client feedback with Success team</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- QA Team -->
        <div class="team-node group">
          <div class="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8 hover:scale-105 transition-all duration-500">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">Quality Assurance</h3>
                <p class="text-green-300 text-sm">Testing Excellence</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">15 Test Cases</span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">4 Team Members</span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">99.9% Bug-Free Delivery</span>
              </div>
            </div>
          </div>
        </div>

        <!-- DevOps Team -->
        <div class="team-node group">
          <div class="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8 hover:scale-105 transition-all duration-500">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 bg-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">DevOps</h3>
                <p class="text-cyan-300 text-sm">Infrastructure</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">24/7 Monitoring</span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">3 Team Members</span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Management -->
        <div class="team-node group">
          <div class="bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-400/30 rounded-2xl p-8 hover:scale-105 transition-all duration-500">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">Product Management</h3>
                <p class="text-amber-300 text-sm">Strategic Planning</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">8 Product Roadmaps</span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">2 Team Members</span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">100% Goal Achievement</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Client Success -->
        <div class="team-node group">
          <div class="bg-gradient-to-br from-rose-500/20 to-rose-600/20 backdrop-blur-sm border border-rose-400/30 rounded-2xl p-8 hover:scale-105 transition-all duration-500">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 bg-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99L14 10.5 12.01 8.99A2.5 2.5 0 0 0 10 8H8.46c-.8 0-1.54.37-2.01.99L5 10.5 3.01 8.99A2.5 2.5 0 0 0 1 8v10h2v6h2v-6h2v6h2v-6h2v6h2v-6h2v6h2z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">Client Success</h3>
                <p class="text-rose-300 text-sm">Customer Relations</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">50+ Happy Clients</span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">4 Team Members</span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span class="text-slate-300">98% Retention Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Real-time Project Collaboration -->
      <div class="relative max-w-6xl mx-auto mb-16">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-white mb-4">Live Project Collaboration</h3>
          <p class="text-slate-400">See how teams work together on real projects</p>
        </div>
        
        <!-- Project Timeline -->
        <div class="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Project 1: E-commerce Platform -->
            <div class="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-400/20 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-white">E-commerce Platform</h4>
              </div>
              <div class="space-y-3">
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span class="text-slate-300">Development: Building checkout flow</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span class="text-slate-300">Design: Creating payment UI</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="text-slate-300">QA: Testing payment security</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span class="text-slate-300">DevOps: Setting up SSL certificates</span>
                </div>
              </div>
            </div>
            
            <!-- Project 2: Mobile Banking App -->
            <div class="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-400/20 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM17 19H7V5H17V19Z"/>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-white">Mobile Banking App</h4>
              </div>
              <div class="space-y-3">
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span class="text-slate-300">Development: Biometric authentication</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span class="text-slate-300">Design: User onboarding flow</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="text-slate-300">QA: Security penetration testing</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  <span class="text-slate-300">Product: Compliance requirements</span>
                </div>
              </div>
            </div>
            
            <!-- Project 3: AI Analytics Dashboard -->
            <div class="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-400/20 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-white">AI Analytics Dashboard</h4>
              </div>
              <div class="space-y-3">
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span class="text-slate-300">Development: ML model integration</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span class="text-slate-300">Design: Data visualization charts</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="text-slate-300">QA: Performance testing</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
                  <span class="text-slate-300">Client Success: User training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Connection Flow Animation -->
      <div class="relative max-w-4xl mx-auto">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-white mb-4">Real-time Collaboration Flow</h3>
          <p class="text-slate-400">See how information flows between teams</p>
        </div>
        
        <!-- Animated Connection Lines -->
        <div class="relative h-64 overflow-hidden">
          <svg class="absolute inset-0 w-full h-full" viewBox="0 0 800 300">
            <!-- Central hub connections -->
            <path 
              d="M400,50 Q200,150 100,250" 
              stroke="url(#gradient1)" 
              stroke-width="3" 
              fill="none" 
              class="animate-flow"
              style="stroke-dasharray: 200; stroke-dashoffset: 200; animation: flowLine 3s ease-in-out infinite;"
            />
            <path 
              d="M400,50 Q600,150 700,250" 
              stroke="url(#gradient2)" 
              stroke-width="3" 
              fill="none" 
              class="animate-flow"
              style="stroke-dasharray: 200; stroke-dashoffset: 200; animation: flowLine 3s ease-in-out infinite 0.5s;"
            />
            <path 
              d="M400,50 Q400,200 400,300" 
              stroke="url(#gradient3)" 
              stroke-width="3" 
              fill="none" 
              class="animate-flow"
              style="stroke-dasharray: 150; stroke-dashoffset: 150; animation: flowLine 2.5s ease-in-out infinite 1s;"
            />
            
            <!-- Gradient definitions -->
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:0" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#10B981;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#F59E0B;stop-opacity:0" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#EF4444;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <!-- Real-time Collaboration Metrics -->
      <div class="mt-16 bg-gradient-to-r from-slate-800/30 to-slate-700/30 backdrop-blur-sm border border-slate-600/20 rounded-2xl p-8">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-white mb-4">Live Collaboration Metrics</h3>
          <p class="text-slate-400">Real-time data showing team productivity and collaboration</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-400 mb-2 animate-pulse">25+</div>
            <div class="text-slate-300 mb-2">Team Members</div>
            <div class="text-xs text-blue-300">Active across 6 departments</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-purple-400 mb-2 animate-pulse">50+</div>
            <div class="text-slate-300 mb-2">Successful Projects</div>
            <div class="text-xs text-purple-300">Delivered on time & budget</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-green-400 mb-2 animate-pulse">98%</div>
            <div class="text-slate-300 mb-2">Client Satisfaction</div>
            <div class="text-xs text-green-300">Based on 100+ client reviews</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-cyan-400 mb-2 animate-pulse">24/7</div>
            <div class="text-slate-300 mb-2">Support Available</div>
            <div class="text-xs text-cyan-300">Round-the-clock assistance</div>
          </div>
        </div>
        
        <!-- Team Communication Flow -->
        <div class="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-xl p-6">
          <h4 class="text-lg font-semibold text-white mb-4 text-center">Team Communication Channels</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="flex items-center gap-3 p-3 bg-blue-500/10 border border-blue-400/20 rounded-lg">
              <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">Daily Standups</div>
                <div class="text-xs text-blue-300">9:00 AM - 9:15 AM</div>
              </div>
            </div>
            
            <div class="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-400/20 rounded-lg">
              <div class="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">Sprint Planning</div>
                <div class="text-xs text-purple-300">Every 2 weeks</div>
              </div>
            </div>
            
            <div class="flex items-center gap-3 p-3 bg-green-500/10 border border-green-400/20 rounded-lg">
              <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">Client Reviews</div>
                <div class="text-xs text-green-300">Weekly feedback sessions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

// Add intersection observer for scroll animations
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in')
      }
    })
  }, { threshold: 0.1 })

  // Observe all team nodes
  const teamNodes = document.querySelectorAll('.team-node')
  teamNodes.forEach((node) => {
    observer.observe(node)
  })

  return () => {
    teamNodes.forEach((node) => {
      observer.unobserve(node)
    })
  }
})
</script>

<style scoped>
/* Custom animations */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.3);
  }
}

@keyframes flowLine {
  0% {
    stroke-dashoffset: 200;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

.animate-flow {
  animation: flowLine 3s ease-in-out infinite;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

/* Team node hover effects */
.team-node:hover {
  animation: float 2s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Enhanced glow effects */
.team-node:hover .bg-gradient-to-br {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3));
  border-color: rgba(59, 130, 246, 0.5);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .team-node {
    margin-bottom: 1rem;
  }
}

/* Smooth transitions */
.team-node {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Data flow particles */
.animate-flow::before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background: currentColor;
  border-radius: 50%;
  animation: particle 2s linear infinite;
}

@keyframes particle {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100px);
    opacity: 0;
  }
}
</style>
