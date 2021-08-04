<template>
  <div class="card bordered hover:shadow mb-5" @dblclick="toggleInlineEdit">
    <!-- <figure>
      <img src="https://picsum.photos/id/1005/60/40" class="w-full" />
    </figure> -->
    <div class="card-body">
      <!-- Title -->
      <div class="card-title">
        <NuxtLink v-if="!inline.edit" :to="url" v-text="entity.attributes.title" />
        <AppFormInput v-else v-model="entity.attributes.title" />
      </div>

      <!-- Tags -->
      <div v-if="tags" class="mb-5">
        <slot name="field_tags" :inline-edit="inline.edit" />
      </div>

      <!-- Body -->
      <slot name="body" :inline-edit="inline.edit" />

      <div class="card-actions">
        <NuxtLink v-if="!inline.edit" class="btn btn-primary" :to="url">Read more</NuxtLink>
        <button v-if="inline.edit" class="btn btn-secondary" @click="saveInlineEdit">Save</button>
        <button v-if="inline.edit" class="btn btn-neutral" @click="toggleInlineEdit">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'
import { MixinEditInline } from '~/mixins/edit-inline'

export default {
  mixins: [DruxtEntityMixin, MixinEditInline],

  computed: {
    tags: ({ model }) =>
      model.relationships.field_tags.data.length
        ? model.relationships.field_tags.data
        : false,

    url: ({ model }) => `node/${model.attributes.drupal_internal__nid}`,
  },
}
</script>
