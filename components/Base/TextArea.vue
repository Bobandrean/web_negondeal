<template>
    <v-container fluid>
        <label v-if="label" for="">{{ label }}</label>
        <v-textarea name="input-7-1" filled label="" auto-grow solo :type="type" v-bind="$attrs"
            :error-messages="errors" :value="value" :item-text="itemText" :item-value="itemValue"
            :return-object="returnObject">
        </v-textarea>
    </v-container>
</template>
<script>
export default {
    name: 'BaseTextArea',
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
        }, value: {
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
}
</script>