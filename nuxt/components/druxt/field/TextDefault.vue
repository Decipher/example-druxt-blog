<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-if="!$attrs.inlineEdit" v-html="model.processed" />
  <AppWysiwyg v-else v-model="model.processed" />
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin],

  props: {
    fields: {
      type: Array,
      default: () => [],
    }
  }
}
</script>
