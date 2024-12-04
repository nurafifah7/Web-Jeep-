<script setup lang="ts">
const galleryItems = [
  {
    id: 1,
    image: "https://placehold.co/600x400?text=Shipping+1",
    title: "Parts Delivery",
    description: "Fast and secure shipping nationwide"
  },
  {
    id: 2,
    image: "https://placehold.co/600x400?text=Store+1",
    title: "Store Front",
    description: "Our modern facility"
  },
  {
    id: 3,
    image: "https://placehold.co/600x400?text=Workshop",
    title: "Workshop",
    description: "Professional installation services"
  },
  {
    id: 4,
    image: "https://placehold.co/600x400?text=Parts",
    title: "Parts Inventory",
    description: "Extensive selection of quality parts"
  },
  {
    id: 5,
    image: "https://placehold.co/600x400?text=Shipping+2",
    title: "Packaging",
    description: "Careful packaging for safe delivery"
  },
  {
    id: 6,
    image: "https://placehold.co/600x400?text=Store+2",
    title: "Showroom",
    description: "Browse our latest products"
  }
]
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12">Gallery</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="item in galleryItems" :key="item.id" class="group relative overflow-hidden rounded-lg">
          <img 
            :src="item.image" 
            :alt="item.title"
            class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
          >
          <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div class="text-center text-white p-4">
              <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>