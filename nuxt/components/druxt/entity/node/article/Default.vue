<template>
  <div class="flex">
    <div class="flex-auto mr-10">
      <h1 class="mb-5 text-5xl">{{ entity.attributes.title }}</h1>
      <slot />
    </div>

    <div>
      <div class="bordered card">
        <div class="card-body">
          <div class="avatar placeholder">
            <div class="bg-neutral-focus text-neutral-content rounded-full h-16 w-16">
              <span class="text-xl"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin],
}
</script>
