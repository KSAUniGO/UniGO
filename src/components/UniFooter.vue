<template>
  <img class="w-full" src="@/assets/img/footer.png" />
  <footer class="p-4 bg-container md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <RouterLink
        to="/"
        class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img class="md:max-w-32" src="@/assets/img/logo.png" />
      </RouterLink>
      <p class="my-6 text-gray-500 dark:text-gray-400">
        Explore More with UniGO: Your Ultimate University Transportation Solution
      </p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
        <li>
          <RouterLink to="/about-us" class="mr-4 hover:underline md:mr-6">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/pricing" class="mr-4 hover:underline md:mr-6">Pricing</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact-us" class="mr-4 hover:underline md:mr-6">Contact</RouterLink>
        </li>
        <li>
          <RouterLink to="/terms" class="mr-4 hover:underline md:mr-6">Terms Of Service</RouterLink>
        </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2024 <a href="#" class="hover:underline">UniGo™</a>. All Rights Reserved.</span
      >
    </div>
  </footer>
</template>
