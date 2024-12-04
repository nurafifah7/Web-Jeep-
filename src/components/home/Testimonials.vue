<script setup lang="ts">
import { ref, onMounted } from 'vue'

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Jeep Enthusiast",
    content: "Bengkel terbaik untuk modifikasi Jeep! Kualitas produk dan layanan mereka luar biasa.",
    image: "https://placehold.co/100x100?text=BS"
  },
  {
    id: 2,
    name: "Dewi Pratiwi",
    role: "Off-road Adventurer",
    content: "Keahlian mereka dalam modifikasi Jeep tidak tertandingi. Sangat merekomendasikan layanan mereka!",
    image: "https://placehold.co/100x100?text=DP"
  },
  {
    id: 3,
    name: "Agus Wijaya",
    role: "Professional Driver",
    content: "Pilihan parts yang lengkap dan pelayanan pelanggan yang sangat baik. Pasti akan kembali lagi!",
    image: "https://placehold.co/100x100?text=AW"
  },
  {
    id: 4,
    name: "Siti Rahayu",
    role: "Jeep Collector",
    content: "Sangat puas dengan hasil modifikasi Jeep saya. Tim yang sangat profesional dan berpengalaman.",
    image: "https://placehold.co/100x100?text=SR"
  },
  {
    id: 5,
    name: "Rudi Hermawan",
    role: "Adventure Guide",
    content: "Parts berkualitas tinggi dan instalasi yang rapi. Recommended untuk semua pemilik Jeep!",
    image: "https://placehold.co/100x100?text=RH"
  }
]

const scrollContainer = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)

const startDragging = (e: MouseEvent) => {
  isDragging.value = true
  if (!scrollContainer.value) return
  startX.value = e.pageX - scrollContainer.value.offsetLeft
  scrollLeft.value = scrollContainer.value.scrollLeft
}

const stopDragging = () => {
  isDragging.value = false
}

const move = (e: MouseEvent) => {
  if (!isDragging.value || !scrollContainer.value) return
  e.preventDefault()
  const x = e.pageX - scrollContainer.value.offsetLeft
  const walk = (x - startX.value) * 2
  scrollContainer.value.scrollLeft = scrollLeft.value - walk
}

onMounted(() => {
  const container = scrollContainer.value
  if (!container) return

  container.addEventListener('mousedown', startDragging)
  container.addEventListener('mouseleave', stopDragging)
  container.addEventListener('mouseup', stopDragging)
  container.addEventListener('mousemove', move)
})
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-8">Testimoni Pelanggan</h2>
      
      <!-- Scroll Controls -->
      <div class="flex justify-end space-x-2 mb-6 md:hidden">
        <button 
          @click="scrollContainer?.scrollBy({ left: -300, behavior: 'smooth' })"
          class="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          @click="scrollContainer?.scrollBy({ left: 300, behavior: 'smooth' })"
          class="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Testimonials Container -->
      <div 
        ref="scrollContainer"
        class="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory hide-scrollbar"
      >
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.id" 
          class="flex-none w-[85vw] sm:w-[45vw] md:w-[30vw] snap-start"
        >
          <div class="card p-6 h-full">
            <div class="flex items-center mb-4">
              <img 
                :src="testimonial.image" 
                :alt="testimonial.name" 
                class="w-12 h-12 rounded-full object-cover"
              >
              <div class="ml-4">
                <h3 class="font-semibold text-gray-900">{{ testimonial.name }}</h3>
                <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
              </div>
            </div>
            <p class="text-gray-600">{{ testimonial.content }}</p>
            <div class="mt-4 flex items-center">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>