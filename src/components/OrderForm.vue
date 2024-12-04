<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'
import type { Order } from '../types'

const cart = useCartStore()
const emit = defineEmits<{
  (e: 'order-submitted', order: Order): void
}>()

const form = ref({
  customerName: '',
  email: '',
  phone: '',
  address: ''
})

const submitOrder = () => {
  const order: Order = {
    ...form.value,
    items: [...cart.cartItems],
    totalAmount: cart.total,
    discountCode: cart.discountCode,
    discountAmount: cart.discountAmount
  }
  emit('order-submitted', order)
}
</script>

<template>
  <form @submit.prevent="submitOrder" class="max-w-lg mx-auto">
    <h2 class="text-2xl font-bold mb-6">Order Details</h2>
    
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Name</label>
        <input 
          v-model="form.customerName"
          type="text"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Email</label>
        <input 
          v-model="form.email"
          type="email"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Phone</label>
        <input 
          v-model="form.phone"
          type="tel"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Shipping Address</label>
        <textarea 
          v-model="form.address"
          required
          rows="3"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        ></textarea>
      </div>

      <button 
        type="submit"
        class="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
      >
        Place Order
      </button>
    </div>
  </form>
</template>