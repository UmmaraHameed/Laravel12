<template>
    <AppLayout>
        <div class="max-w-6xl mx-auto">
            <h1 class="text-4xl font-bold text-center mb-8">My Projects</h1>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project 1 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span class="text-white text-2xl font-bold">E-Commerce</span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">E-commerce Platform</h3>
                        <p class="text-gray-600 mb-4">
                            A full-featured e-commerce platform with payment integration, inventory management, 
                            and admin dashboard.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Laravel</span>
                            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Vue.js</span>
                            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">MySQL</span>
                        </div>
                        <div class="flex space-x-2">
                            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                            <a href="#" class="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                        </div>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                        <span class="text-white text-2xl font-bold">Task Manager</span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Task Management App</h3>
                        <p class="text-gray-600 mb-4">
                            A collaborative task management application with real-time updates, 
                            team collaboration, and progress tracking.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Node.js</span>
                            <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Socket.io</span>
                        </div>
                        <div class="flex space-x-2">
                            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                            <a href="#" class="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                        </div>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                        <span class="text-white text-2xl font-bold">Portfolio</span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Portfolio Website</h3>
                        <p class="text-gray-600 mb-4">
                            A modern portfolio website built with Laravel and Inertia.js, 
                            featuring responsive design and smooth animations.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Laravel</span>
                            <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Inertia</span>
                            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Tailwind</span>
                        </div>
                        <div class="flex space-x-2">
                            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                            <a href="#" class="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                        </div>
                    </div>
                </div>

                <!-- Project 4 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                        <span class="text-white text-2xl font-bold">Blog</span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Blog Platform</h3>
                        <p class="text-gray-600 mb-4">
                            A content management system for blogs with markdown support, 
                            SEO optimization, and analytics dashboard.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Laravel</span>
                            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Vue.js</span>
                            <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Markdown</span>
                        </div>
                        <div class="flex space-x-2">
                            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                            <a href="#" class="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                        </div>
                    </div>
                </div>

                <!-- Project 5 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                        <span class="text-white text-2xl font-bold">API</span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">REST API</h3>
                        <p class="text-gray-600 mb-4">
                            A comprehensive REST API with authentication, rate limiting, 
                            documentation, and testing suite.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Laravel</span>
                            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">JWT</span>
                            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Postman</span>
                        </div>
                        <div class="flex space-x-2">
                            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Documentation</a>
                            <a href="#" class="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                        </div>
                    </div>
                </div>

                <!-- Project 6 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="h-48 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                        <span class="text-white text-2xl font-bold">Dashboard</span>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Admin Dashboard</h3>
                        <p class="text-gray-600 mb-4">
                            A comprehensive admin dashboard with data visualization, 
                            user management, and real-time analytics.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Chart.js</span>
                            <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Redux</span>
                        </div>
                        <div class="flex space-x-2">
                            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                            <a href="#" class="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from '../Layouts/AppLayout.vue';
</script>
