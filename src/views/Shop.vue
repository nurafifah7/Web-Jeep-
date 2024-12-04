<script setup lang="ts">
import { ref } from 'vue'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import OrderForm from '../components/OrderForm.vue'
import type { Order } from '../types'

const showOrderForm = ref(false)
const orderConfirmation = ref<Order | null>(null)

const handleOrderSubmitted = (order: Order) => {
  orderConfirmation.value = order
  showOrderForm.value = false
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <div v-if="orderConfirmation" class="mb-8 bg-green-50 border border-green-200 rounded-lg p-6">
      <h2 class="text-2xl font-bold text-green-800 mb-4">Order Confirmed!</h2>
      <p class="text-green-700">Thank you for your order, {{ orderConfirmation.customerName }}!</p>
      <p class="text-green-700">We'll send a confirmation email to {{ orderConfirmation.email }}</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProductCard 
            v-for="product in products" 
            :key="product.id" 
            :product="product"
          />
        </div>
      </div>

      <div class="space-y-6">
        <ShoppingCart />
        
        <button 
          v-if="!showOrderForm"
          @click="showOrderForm = true"
          class="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
        >
          Proceed to Checkout
        </button>

        <OrderForm 
          v-if="showOrderForm"
          @order-submitted="handleOrderSubmitted"
        />
      </div>
    </div>
  </div>
</template>