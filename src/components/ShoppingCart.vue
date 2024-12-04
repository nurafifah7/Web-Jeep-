<script setup lang="ts">
import { useCartStore } from '../stores/cart'
import { formatCurrency } from '../utils/currency'

const cart = useCartStore()

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = 'https://placehold.co/400x300?text=No+Image'
}
</script>

<template>
  <div class="card p-6">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Keranjang Belanja</h2>
    
    <div v-if="cart.cartItems.length === 0" class="text-gray-500 text-center py-8">
      <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
      </svg>
      Keranjang Anda kosong
    </div>
    
    <div v-else class="space-y-4">
      <div v-for="item in cart.cartItems" :key="item.id" class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
        <img 
          :src="item.image" 
          :alt="item.name" 
          @error="handleImageError"
          class="w-20 h-20 object-cover rounded-lg"
        >
        <div class="flex-1">
          <h3 class="font-semibold text-gray-900">{{ item.name }}</h3>
          <div class="flex items-center justify-between mt-2">
            <p class="text-gray-600">{{ formatCurrency(item.price) }} × {{ item.quantity }}</p>
            <p class="font-medium text-gray-900">{{ formatCurrency(item.price * item.quantity) }}</p>
          </div>
          <div class="flex items-center gap-2 mt-2">
            <button 
              @click="cart.updateQuantity(item.id, item.quantity - 1)"
              class="p-1 rounded-full hover:bg-gray-200 text-gray-600"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
              </svg>
            </button>
            <span class="w-8 text-center">{{ item.quantity }}</span>
            <button 
              @click="cart.updateQuantity(item.id, item.quantity + 1)"
              class="p-1 rounded-full hover:bg-gray-200 text-gray-600"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </button>
          </div>
        </div>
        <button 
          @click="cart.removeFromCart(item.id)"
          class="text-gray-400 hover:text-red-500"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
        </button>
      </div>

      <div class="mt-6">
        <div class="flex gap-2">
          <input 
            v-model="cart.discountCode"
            type="text"
            placeholder="Kode Diskon"
            class="flex-1 rounded-lg border-gray-300 focus:border-gray-500 focus:ring focus:ring-gray-200"
          >
          <button 
            @click="cart.applyDiscount(cart.discountCode)"
            class="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Terapkan
          </button>
        </div>

        <div class="mt-6 space-y-2">
          <div class="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>{{ formatCurrency(cart.subtotal) }}</span>
          </div>
          <div v-if="cart.discountAmount > 0" class="flex justify-between text-green-600">
            <span>Diskon</span>
            <span>-{{ formatCurrency(cart.discountAmount) }}</span>
          </div>
          <div class="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t">
            <span>Total</span>
            <span>{{ formatCurrency(cart.total) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>