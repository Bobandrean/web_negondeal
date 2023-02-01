<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn style="border-radius: 12px;" color="#4155ae" v-bind="props">
               <span class="text-button" >{{ label }}</span>
            </v-btn>
        </template>
        <v-list @click:select="handleSelect" >
            <v-list-item v-for="(item, index) in items" :key="index" :value="index" >
                <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>

import { defineEmits } from 'vue';

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

        const handleSelect = (e) => {
            context.emit('menuClick', e)
        }


        return {
            handleSelect
        }
    }
}
</script>

<style>
.text-button {
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 12px;
    color: rgb(255, 255, 255);
    display: flex;
    height: 22px;
    -webkit-box-pack: center;
    justify-content: center;
    padding-inline: 10px;
    text-shadow: none;
    box-shadow: none;
}
</style>