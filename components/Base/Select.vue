<template>
  <label v-show="value" for="select">{{ label }}</label>
  <v-select dense solo :items="items" :label="label" @input="handleInput" :error-messages="errors" :value="value"
    :error-count="errors.length" :item-text="itemText" :item-value="itemValue" :return-object="returnObject"></v-select>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: "",
    },
    dense: {
      type: Boolean,
      default: false,
    },
    solo: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Number, String, Object],
      default: "",
    },
    itemText: {
      type: String,
      default: "text",
    },
    itemValue: {
      type: String,
      default: "value",
    },
    returnObject: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const handleInput = (val) => {
      context.emit("input", val);
    };

    return {
      handleInput,
    };
  },
};
</script>
