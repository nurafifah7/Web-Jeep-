<script setup lang="ts">
import Testimonials from '../components/home/Testimonials.vue'
import StoreLocation from '../components/home/StoreLocation.vue'
import Gallery from '../components/home/Gallery.vue'
</script>

<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-br from-gray-900 to-gray-800">
      <div class="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Selamat Datang di Jeep Auto Sport
        </h1>
        <p class="mt-6 text-xl text-gray-300 max-w-3xl">
          Destinasi utama untuk suku cadang Jeep berkualitas tinggi dan layanan kustomisasi profesional. 
          Kami ahli dalam mengubah Jeep Anda menjadi kendaraan off-road yang tangguh.
        </p>
        <div class="mt-10">
          <router-link
            to="/shop"
            class="btn-primary inline-flex items-center space-x-2"
          >
            <span>Jelajahi Produk Kami</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Mengapa Memilih Kami?
          </h2>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="pt-6">
            <div class="card px-6 pb-8">
              <div class="-mt-6">
                <div class="inline-flex items-center justify-center p-3 bg-gray-700 rounded-xl shadow-lg">
                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Suku Cadang Premium</h3>
                <p class="mt-5 text-base text-gray-500">
                  Kami hanya menyediakan suku cadang OEM dan aftermarket berkualitas tinggi untuk Jeep Anda.
                </p>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <div class="card px-6 pb-8">
              <div class="-mt-6">
                <div class="inline-flex items-center justify-center p-3 bg-gray-700 rounded-xl shadow-lg">
                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Instalasi Ahli</h3>
                <p class="mt-5 text-base text-gray-500">
                  Layanan pemasangan profesional oleh teknisi bersertifikat.
                </p>
              </div>
            </div>
          </div>

          <div class="pt-6">
            <div class="card px-6 pb-8">
              <div class="-mt-6">
                <div class="inline-flex items-center justify-center p-3 bg-gray-700 rounded-xl shadow-lg">
                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Solusi Kustom</h3>
                <p class="mt-5 text-base text-gray-500">
                  Modifikasi yang disesuaikan dengan kebutuhan dan gaya Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Gallery Section -->
    <Gallery />

    <!-- Testimonials Section -->
    <Testimonials />

    <!-- Store Location Section -->
    <StoreLocation />
  </div>
</template>