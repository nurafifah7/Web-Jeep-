<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <NavBar />
    <router-view></router-view>
  </div>
</template>