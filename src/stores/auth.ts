import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

interface User {
  id: string
  name: string
  university?: string
}

export const useAuthStore = defineStore('auth', () => {
  const _user = ref<User>()
  const user = computed(() => _user.value)

  async function login() {
    // TODO integrate firebase auth with login process
    _user.value = {
      id: 'shahm-user-id',
      name: 'Shahm',
      university: 'ksa/ksu'
    }
  }

  async function register() {
    // TODO integrate firebase auth with login process
    _user.value = {
      id: 'shahm-user-id',
      name: 'Shahm',
      university: 'ksa/ksu'
    }
  }

  return { user, login, register }
})
