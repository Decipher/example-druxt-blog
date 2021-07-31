<template>
  <div class="card bordered hover:shadow mb-5" @dblclick="toggleInlineEdit">
    <!-- <figure>
      <img src="https://picsum.photos/id/1005/60/40" class="w-full" />
    </figure> -->
    <div class="card-body">
      <NuxtLink v-if="!inline.edit" class="card-title" :to="url">{{
        entity.attributes.title
      }}</NuxtLink>
      <AppFormInput v-else v-model="entity.attributes.title" />

      <div v-if="tags" class="card-actions mb-5">
        <DruxtEntity
          v-for="tag of tags"
          :key="tag.id"
          :type="tag.type"
          :uuid="tag.id"
        >
          <template #default="{ entity }">
            <div class="badge badge-ghost">{{ entity.attributes.name }}</div>
          </template>
        </DruxtEntity>
      </div>

      <slot name="body" :inline-edit="inline.edit" />

      <div class="card-actions">
        <NuxtLink class="btn btn-primary" :to="url">Read more</NuxtLink>
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
