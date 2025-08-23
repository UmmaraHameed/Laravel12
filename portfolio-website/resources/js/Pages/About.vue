<template>
    <AppLayout>
        <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl font-bold text-center mb-8">About Me</h1>
            
            <div class="bg-white rounded-lg shadow-md p-8 mb-8">
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 class="text-2xl font-semibold mb-4">My Story</h2>
                        <p class="text-gray-600 mb-4">
                            I'm a passionate full-stack developer with over 5 years of experience in building modern web applications. 
                            I specialize in Laravel, Vue.js, and React, and I love creating elegant solutions to complex problems.
                        </p>
                        <p class="text-gray-600 mb-4">
                            My journey in web development started when I built my first website in 2019. Since then, 
                            I've worked on various projects ranging from small business websites to large-scale enterprise applications.
                        </p>
                        <p class="text-gray-600">
                            I believe in writing clean, maintainable code and staying up-to-date with the latest technologies 
                            and best practices in the industry.
                        </p>
                    </div>
                    <div>
                        <h2 class="text-2xl font-semibold mb-4">Experience</h2>
                        <div class="space-y-4">
                            <div class="border-l-4 border-blue-500 pl-4">
                                <h3 class="font-semibold">Senior Full-Stack Developer</h3>
                                <p class="text-gray-600">Tech Company • 2022 - Present</p>
                                <p class="text-sm text-gray-500">Leading development of enterprise web applications</p>
                            </div>
                            <div class="border-l-4 border-green-500 pl-4">
                                <h3 class="font-semibold">Full-Stack Developer</h3>
                                <p class="text-gray-600">Startup • 2020 - 2022</p>
                                <p class="text-sm text-gray-500">Built scalable web applications using modern technologies</p>
                            </div>
                            <div class="border-l-4 border-purple-500 pl-4">
                                <h3 class="font-semibold">Junior Developer</h3>
                                <p class="text-gray-600">Agency • 2019 - 2020</p>
                                <p class="text-sm text-gray-500">Developed client websites and e-commerce solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-md p-8">
                <h2 class="text-2xl font-semibold mb-6">Skills & Technologies</h2>
                <div class="grid md:grid-cols-3 gap-6">
                    <div>
                        <h3 class="text-lg font-semibold mb-3">Backend</h3>
                        <ul class="space-y-2 text-gray-600">
                            <li>Laravel (PHP)</li>
                            <li>Node.js</li>
                            <li>Python</li>
                            <li>MySQL/PostgreSQL</li>
                            <li>Redis</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mb-3">Frontend</h3>
                        <ul class="space-y-2 text-gray-600">
                            <li>Vue.js</li>
                            <li>React</li>
                            <li>JavaScript/TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mb-3">Tools & Others</h3>
                        <ul class="space-y-2 text-gray-600">
                            <li>Git</li>
                            <li>Docker</li>
                            <li>AWS</li>
                            <li>CI/CD</li>
                            <li>Agile/Scrum</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from '../Layouts/AppLayout.vue';
</script>
