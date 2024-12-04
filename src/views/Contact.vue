<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitted = ref(false)

const submitForm = () => {
  // Here you would typically send the form data to a server
  submitted.value = true
  form.value = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
}
</script>

<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="relative bg-white shadow-xl">
        <div class="grid grid-cols-1 lg:grid-cols-3">
          <!-- Contact information -->
          <div class="relative overflow-hidden bg-indigo-700 py-10 px-6 sm:px-10 xl:p-12">
            <div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
              <svg class="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1" />
                <defs>
                  <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
              <svg class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
                <defs>
                  <pattern id="pattern1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="784" fill="url(#pattern1)" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-white">Contact information</h3>
            <p class="mt-6 text-base text-indigo-50 max-w-3xl">
              Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
            </p>
            <dl class="mt-8 space-y-6">
              <dt><span class="sr-only">Phone number</span></dt>
              <dd class="flex text-base text-indigo-50">
                <svg class="flex-shrink-0 w-6 h-6 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="ml-3">+1 (555) 123-4567</span>
              </dd>
              <dt><span class="sr-only">Email</span></dt>
              <dd class="flex text-base text-indigo-50">
                <svg class="flex-shrink-0 w-6 h-6 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="ml-3">support@jeepparts.com</span>
              </dd>
            </dl>
          </div>

          <!-- Contact form -->
          <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
            <h3 class="text-lg font-medium text-gray-900">Send us a message</h3>
            <form @submit.prevent="submitForm" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div class="sm:col-span-2">
                <label for="name" class="block text-sm font-medium text-gray-900">Name</label>
                <div class="mt-1">
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  >
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
                <div class="mt-1">
                  <input
                    id="email"
                    type="email"
                    v-model="form.email"
                    required
                    class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  >
                </div>
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-900">Phone</label>
                <div class="mt-1">
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  >
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-medium text-gray-900">Message</label>
                <div class="mt-1">
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="4"
                    required
                    class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  ></textarea>
                </div>
              </div>
              <div class="sm:col-span-2">
                <button
                  type="submit"
                  class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div v-if="submitted" class="mt-6 bg-green-50 border border-green-200 rounded-md p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-green-800">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>