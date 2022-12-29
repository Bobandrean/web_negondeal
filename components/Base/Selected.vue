<template>
    <v-select :items="items" label="Lain-nya"></v-select>
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