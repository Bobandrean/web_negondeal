<template>
    <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props">
                Dropdown
            </v-btn>
        </template>

        <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
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
    }
}
</script>