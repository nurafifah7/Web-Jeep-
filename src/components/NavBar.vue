<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="flex items-center space-x-2">
              <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 12h-2V8h-2v4h-2V4H9v8H7V8H5v4H3v5c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4v-5z"/>
              </svg>
              <h1 class="text-xl font-bold text-gray-900">Jeep<span class="text-primary">Auto Sport</span></h1>
            </router-link>
          </div>
          <div class="hidden sm:ml-8 sm:flex sm:space-x-8">
            <router-link 
              to="/" 
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors"
              active-class="border-primary text-primary"
            >
              Home
            </router-link>
            <router-link 
              to="/shop" 
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors"
              active-class="border-primary text-primary"
            >
              Shop
            </router-link>
            <router-link 
              to="/services" 
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors"
              active-class="border-primary text-primary"
            >
              Services
            </router-link>
            <router-link 
              to="/contact" 
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-primary hover:text-primary transition-colors"
              active-class="border-primary text-primary"
            >
              Contact
            </router-link>
          </div>
        </div>
        
        <div class="sm:hidden flex items-center">
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100"
          >
            <span class="sr-only">Open main menu</span>
            <svg 
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                v-if="!isMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isMenuOpen" class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <router-link 
          to="/" 
          class="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-50"
          active-class="bg-primary/10 border-l-4 border-primary text-primary"
          @click="isMenuOpen = false"
        >
          Home
        </router-link>
        <router-link 
          to="/shop" 
          class="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-50"
          active-class="bg-primary/10 border-l-4 border-primary text-primary"
          @click="isMenuOpen = false"
        >
          Shop
        </router-link>
        <router-link 
          to="/services" 
          class="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-50"
          active-class="bg-primary/10 border-l-4 border-primary text-primary"
          @click="isMenuOpen = false"
        >
          Services
        </router-link>
        <router-link 
          to="/contact" 
          class="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-50"
          active-class="bg-primary/10 border-l-4 border-primary text-primary"
          @click="isMenuOpen = false"
        >
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>