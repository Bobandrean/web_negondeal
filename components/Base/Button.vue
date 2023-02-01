<template>
    <v-btn color="#4155ae" v-bind="$attrs">
        <slot></slot>
    </v-btn>
</template>

<script>
export default {
    name: 'BaseButton',
    inheritAttrs: false,
    props: {
        color: {
            type: String,
            default: '#4155ae',
        },
    },
}
</script>
  