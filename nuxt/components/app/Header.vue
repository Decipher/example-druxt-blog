<template>
  <div
    class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"
  >
    <div class="flex-1 px-2 mx-2">
      <NuxtLink class="text-lg font-bold" to="/">DruxtBlog</NuxtLink>
    </div>
    <div class="flex-none">
      <slot />
    </div>
  </div>
</template>
