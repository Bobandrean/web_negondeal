<template>
  <label v-if="label" for="">{{ label }}</label>
  <v-text-field solo :type="type" :label="label" v-bind="$attrs" :error-messages="errors">
  </v-text-field>
</template>
<script>
export default {
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    rules: {
      type: [String, Array],
      default: '',
    },
  },
}
</script>
