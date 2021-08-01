<template>
  <div class="card bordered hover:shadow mb-5">
    <!-- <figure>
      <img src="https://picsum.photos/id/1005/60/40" class="w-full" />
    </figure> -->
    <div class="card-body">
      <!-- Title -->
      <NuxtLink class="card-title" :to="url" v-text="entity.attributes.title" />

      <!-- Tags -->
      <div v-if="tags" class="card-actions mb-5">
        <DruxtEntity
          v-for="tag of tags"
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

      <!-- Body -->
      <slot name="body" />

      <div class="card-actions">
        <NuxtLink class="btn btn-primary" :to="url">Read more</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin],

  computed: {
    tags: ({ model }) =>
      model.relationships.field_tags.data.length
        ? model.relationships.field_tags.data
        : false,

    url: ({ model }) => `node/${model.attributes.drupal_internal__nid}`,
  },
}
</script>
