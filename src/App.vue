<script setup lang="ts">
import { RouterView } from 'vue-router'
import UniFooter from './components/UniFooter.vue'
import UniNavbar from './components/UniNavbar.vue'
</script>

<template>
  <header class="antialiased">
    <UniNavbar />
  </header>

  <br />

  <main class="pt-4 lg:pt-8">
    <RouterView />

    <UniFooter />
  </main>
</template>
./components/UniFooter.vue
