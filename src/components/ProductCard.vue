<script setup lang="ts">
import type { Product } from '../types'
import { useCartStore } from '../stores/cart'
import { formatCurrency } from '../utils/currency'

const props = defineProps<{
  product: Product
}>()

const cart = useCartStore()

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = 'https://placehold.co/400x300?text=No+Image'
}
</script>

<template>
  <div class="card overflow-hidden group">
    <div class="relative">
      <img 
        :src="product.image" 
        :alt="product.name" 
        @error="handleImageError"
        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      >
      <span class="absolute top-2 right-2 bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
        {{ product.category }}
      </span>
    </div>
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ product.name }}</h3>
      <p class="text-gray-600 text-sm mb-4">{{ product.description }}</p>
      <div class="flex justify-between items-center">
        <span class="text-2xl font-bold text-gray-900">{{ formatCurrency(product.price) }}</span>
        <button 
          @click="cart.addToCart(product)"
          class="btn-primary flex items-center space-x-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
          <span>Tambah ke Keranjang</span>
        </button>
      </div>
    </div>
  </div>
</template>