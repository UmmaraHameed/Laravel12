<template>
    <AppLayout>
        <div class="max-w-6xl mx-auto">
            <h1 class="text-4xl font-bold text-center mb-8">Our Services</h1>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div class="bg-white rounded-lg shadow-md p-8">
                    <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Web Development</h3>
                    <p class="text-gray-600 mb-4">
                        Custom web applications built with modern technologies like Laravel, Vue.js, and React. 
                        We create scalable, secure, and user-friendly solutions.
                    </p>
                    <ul class="text-sm text-gray-500 space-y-1">
                        <li>• Custom Web Applications</li>
                        <li>• E-commerce Solutions</li>
                        <li>• API Development</li>
                        <li>• Database Design</li>
                    </ul>
                </div>

                <!-- Service 2 -->
                <div class="bg-white rounded-lg shadow-md p-8">
                    <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Mobile Development</h3>
                    <p class="text-gray-600 mb-4">
                        Native and cross-platform mobile applications for iOS and Android. 
                        We focus on performance, usability, and modern design patterns.
                    </p>
                    <ul class="text-sm text-gray-500 space-y-1">
                        <li>• iOS Development</li>
                        <li>• Android Development</li>
                        <li>• Cross-platform Apps</li>
                        <li>• App Maintenance</li>
                    </ul>
                </div>

                <!-- Service 3 -->
                <div class="bg-white rounded-lg shadow-md p-8">
                    <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">UI/UX Design</h3>
                    <p class="text-gray-600 mb-4">
                        User-centered design solutions that enhance user experience and drive engagement. 
                        From wireframes to high-fidelity prototypes.
                    </p>
                    <ul class="text-sm text-gray-500 space-y-1">
                        <li>• User Interface Design</li>
                        <li>• User Experience Design</li>
                        <li>• Wireframing & Prototyping</li>
                        <li>• Design Systems</li>
                    </ul>
                </div>

                <!-- Service 4 -->
                <div class="bg-white rounded-lg shadow-md p-8">
                    <div class="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Cloud Solutions</h3>
                    <p class="text-gray-600 mb-4">
                        Cloud infrastructure and DevOps services to ensure your applications are scalable, 
                        secure, and performant in production environments.
                    </p>
                    <ul class="text-sm text-gray-500 space-y-1">
                        <li>• AWS/Azure/GCP Setup</li>
                        <li>• CI/CD Pipelines</li>
                        <li>• Server Management</li>
                        <li>• Performance Optimization</li>
                    </ul>
                </div>

                <!-- Service 5 -->
                <div class="bg-white rounded-lg shadow-md p-8">
                    <div class="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Security & Testing</h3>
                    <p class="text-gray-600 mb-4">
                        Comprehensive security audits, penetration testing, and quality assurance 
                        to ensure your applications are secure and reliable.
                    </p>
                    <ul class="text-sm text-gray-500 space-y-1">
                        <li>• Security Audits</li>
                        <li>• Penetration Testing</li>
                        <li>• Automated Testing</li>
                        <li>• Code Reviews</li>
                    </ul>
                </div>

                <!-- Service 6 -->
                <div class="bg-white rounded-lg shadow-md p-8">
                    <div class="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Consulting</h3>
                    <p class="text-gray-600 mb-4">
                        Strategic technology consulting to help you make informed decisions about 
                        your digital transformation and technology investments.
                    </p>
                    <ul class="text-sm text-gray-500 space-y-1">
                        <li>• Technology Strategy</li>
                        <li>• Architecture Planning</li>
                        <li>• Team Training</li>
                        <li>• Project Management</li>
                    </ul>
                </div>
            </div>

            <!-- Call to Action -->
            <div class="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
                <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p class="text-xl mb-6">Let's discuss how we can help bring your ideas to life</p>
                <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Contact Us Today
                </button>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from '../Layouts/AppLayout.vue';
</script>
