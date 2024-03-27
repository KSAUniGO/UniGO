<script setup lang="ts">
import { useTheme } from '@/stores/theme'

const theme = useTheme()
</script>

<template>
  <p class="block mb-2 text-md font-extrabold text-gray-900 dark:text-white">Change Password</p>
  <form class="max-w-sm mb-10">
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >New Password</label
      >
      <input
        type="email"
        id="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        required
      />
    </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Confirm New Password</label
      >
      <input
        type="password"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        required
      />
    </div>
    <button
      type="submit"
      class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
      Change Password
    </button>
  </form>

  <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Notifications</h3>
  <ul
    class="items-center w-full mb-4 text-sm font-medium text-gray-900 bg-container border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
  >
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
      <div class="flex items-center ps-3">
        <input
          id="vue-checkbox-list"
          type="checkbox"
          value=""
          class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          for="vue-checkbox-list"
          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Emails</label
        >
      </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
      <div class="flex items-center ps-3">
        <input
          id="react-checkbox-list"
          type="checkbox"
          value=""
          class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          for="react-checkbox-list"
          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >SMS</label
        >
      </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
      <div class="flex items-center ps-3">
        <input
          id="angular-checkbox-list"
          type="checkbox"
          value=""
          class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          for="angular-checkbox-list"
          class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >In-App Notifications</label
        >
      </div>
    </li>
  </ul>

  <p class="block mb-2 text-md font-extrabold text-gray-900 dark:text-white">Language</p>
  <form class="max-w-sm mb-4">
    <label for="languages" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Select your language</label
    >
    <select
      id="languages"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    >
      <option>English</option>
      <option>العربية</option>
    </select>
  </form>

  <p class="block mb-2 text-md font-extrabold text-gray-900 dark:text-white">Appearance</p>
  <label class="inline-flex items-center mb-5 cursor-pointer">
    <input
      type="checkbox"
      value=""
      class="sr-only peer"
      :checked="theme.isInverted"
      @click="theme.toggleInvert()"
    />
    <div
      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"
    ></div>
    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Invert Colors</span>
  </label>
</template>
