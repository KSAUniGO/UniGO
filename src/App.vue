<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import UniFooter from './components/UniFooter.vue'
import UniNavbar from './components/UniNavbar.vue'
import { computed, ref } from 'vue'
import { useAuthStore } from './stores/auth'
import UniSideNav from './components/app/UniSideNav.vue'
import { useTheme } from './stores/theme'

const router = useRouter()
const theme = useTheme()
const auth = useAuthStore()

const isInsideApp = ref(false)
const onlyOutsideApp = computed(() => !isInsideApp.value)

router.beforeEach((from) => {
  const attemptInsideApp = from.path.startsWith('/app/@me')
  if (attemptInsideApp && !auth.user) return { path: '/login' }
  isInsideApp.value = attemptInsideApp
})
</script>

<template>
  <header class="antialiased" v-if="onlyOutsideApp">
    <UniNavbar />
  </header>

  <br />

  <main class="bg-container dark:bg-gray-900 pt-4 lg:pt-20" :class="{ invert: theme.isInverted }">
    <UniSideNav v-if="isInsideApp">
      <RouterView />
    </UniSideNav>

    <RouterView v-if="onlyOutsideApp" />

    <UniFooter v-if="onlyOutsideApp" />
  </main>
</template>
