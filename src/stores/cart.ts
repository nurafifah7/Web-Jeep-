import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { CartItem, Product } from '../types'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<CartItem[]>([])
  const discountCode = ref('')
  const discountAmount = ref(0)

  const addToCart = (product: Product) => {
    const existingItem = cartItems.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      cartItems.value.push({ ...product, quantity: 1 })
    }
  }

  const removeFromCart = (productId: number) => {
    cartItems.value = cartItems.value.filter(item => item.id !== productId)
  }

  const updateQuantity = (productId: number, quantity: number) => {
    const item = cartItems.value.find(item => item.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId)
      } else {
        item.quantity = quantity
      }
    }
  }

  const applyDiscount = (code: string) => {
    const discounts: Record<string, number> = {
      'JEEP10': 0.1,
      'JEEP20': 0.2,
      'JEEP30': 0.3
    }

    if (code in discounts) {
      discountCode.value = code
      discountAmount.value = subtotal.value * discounts[code]
    }
  }

  const subtotal = computed(() => {
    return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  const total = computed(() => {
    return Math.max(0, subtotal.value - discountAmount.value)
  })

  return {
    cartItems,
    discountCode,
    discountAmount,
    addToCart,
    removeFromCart,
    updateQuantity,
    applyDiscount,
    subtotal,
    total
  }
})