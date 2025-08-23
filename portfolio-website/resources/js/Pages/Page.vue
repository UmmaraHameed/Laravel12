<template>
    <AppLayout>
        <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl font-bold text-center mb-8">Our Company</h1>
            
            <!-- Company Overview -->
            <div class="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 class="text-2xl font-semibold mb-6">About Climesoft</h2>
                <p class="text-lg text-gray-600 mb-6">
                    Climesoft is a leading technology company specializing in innovative software solutions 
                    that help businesses thrive in the digital age. We combine cutting-edge technology 
                    with creative problem-solving to deliver exceptional results for our clients.
                </p>
                <p class="text-lg text-gray-600">
                    Founded with a vision to make technology accessible and beneficial for all, 
                    we've grown into a trusted partner for companies worldwide, delivering 
                    scalable solutions that drive growth and efficiency.
                </p>
            </div>

            <!-- Mission & Vision -->
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="bg-white rounded-lg shadow-md p-8">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Our Mission</h3>
                    <p class="text-gray-600">
                        To empower businesses with innovative technology solutions that drive growth, 
                        efficiency, and competitive advantage in an ever-evolving digital landscape.
                    </p>
                </div>
                
                <div class="bg-white rounded-lg shadow-md p-8">
                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Our Vision</h3>
                    <p class="text-gray-600">
                        To be the most trusted technology partner for businesses worldwide, 
                        known for delivering innovative solutions that transform industries and create lasting value.
                    </p>
                </div>
            </div>

            <!-- Values -->
            <div class="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 class="text-2xl font-semibold mb-6">Our Values</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 class="font-semibold mb-2">Excellence</h3>
                        <p class="text-sm text-gray-600">We strive for excellence in everything we do</p>
                    </div>
                    
                    <div class="text-center">
                        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <h3 class="font-semibold mb-2">Collaboration</h3>
                        <p class="text-sm text-gray-600">We believe in the power of teamwork</p>
                    </div>
                    
                    <div class="text-center">
                        <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h3 class="font-semibold mb-2">Innovation</h3>
                        <p class="text-sm text-gray-600">We embrace new ideas and technologies</p>
                    </div>
                    
                    <div class="text-center">
                        <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </div>
                        <h3 class="font-semibold mb-2">Integrity</h3>
                        <p class="text-sm text-gray-600">We operate with honesty and transparency</p>
                    </div>
                    
                    <div class="text-center">
                        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 class="font-semibold mb-2">Reliability</h3>
                        <p class="text-sm text-gray-600">We deliver on our promises</p>
                    </div>
                    
                    <div class="text-center">
                        <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                            </svg>
                        </div>
                        <h3 class="font-semibold mb-2">Learning</h3>
                        <p class="text-sm text-gray-600">We continuously learn and grow</p>
                    </div>
                </div>
            </div>

            <!-- Team Section -->
            <div class="bg-white rounded-lg shadow-md p-8">
                <h2 class="text-2xl font-semibold mb-6">Our Team</h2>
                <p class="text-lg text-gray-600 mb-8">
                    Our team consists of passionate professionals with diverse backgrounds in technology, 
                    design, and business. We work together to deliver exceptional solutions for our clients.
                </p>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="text-center">
                        <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                        <h3 class="font-semibold">John Doe</h3>
                        <p class="text-sm text-gray-600">CEO & Founder</p>
                    </div>
                    <div class="text-center">
                        <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                        <h3 class="font-semibold">Jane Smith</h3>
                        <p class="text-sm text-gray-600">CTO</p>
                    </div>
                    <div class="text-center">
                        <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                        <h3 class="font-semibold">Mike Johnson</h3>
                        <p class="text-sm text-gray-600">Lead Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from '../Layouts/AppLayout.vue';
</script>
