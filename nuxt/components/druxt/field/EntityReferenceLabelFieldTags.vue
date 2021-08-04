<template>
  <div>
    <DruxtEntity
      v-for="tag of model.data"
      :key="tag.id"
      :type="tag.type"
      :uuid="tag.id"
    >
      <template #default="{ entity }">
        <!-- @todo - Add link to taxonomy page/view -->
        <div class="badge badge-ghost">{{ entity.attributes.name }}</div>
      </template>
    </DruxtEntity>
  </div>
</template>

<script>
import { DruxtFieldMixin } from 'druxt-entity'

export default {
  mixins: [DruxtFieldMixin]
}
</script>
