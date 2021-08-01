<template>
  <div class="drawer drawer-end min-h-screen">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content" :class="$attrs['content-class']">
      <slot />
    </div>

    <div class="drawer-side h-100">
      <label for="my-drawer" class="drawer-overlay"></label>
      <div class="p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <slot name="drawer" />
      </div>
    </div>
  </div>
</template>
