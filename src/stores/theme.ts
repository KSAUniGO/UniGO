import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useTheme = defineStore('theme', () => {
  const isInverted = ref(false)

  if (localStorage.getItem('invert-me')) {
    isInverted.value = true
  } else {
    isInverted.value = false
  }

  function toggleInvert(): boolean {
    if (isInverted.value) {
      localStorage.removeItem('invert-me')
      isInverted.value = false
      return false
    } else {
      localStorage.setItem('invert-me', 'yes shukran')
      isInverted.value = true
      return true
    }
  }

  const isDark = computed<boolean>(() => {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      return true
    } else {
      document.documentElement.classList.remove('dark')
    }
    return false
  })

  function toggle(): boolean {
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
        return true
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
        return false
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
      } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
        return true
      }
    }

    return false
  }

  return { isDark, isInverted, toggle, toggleInvert }
})
