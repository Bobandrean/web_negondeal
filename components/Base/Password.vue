<template>
    <div>
        <label for="">{{ label }}</label>
        <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'" name="input-10-1" label="Normal with hint text"
            hint="At least 8 characters" counter @click:append="show1 = !show1" v-bind="$attrs">
        </v-text-field>
    </div>
</template>

<script>
export default {
    name: 'BasePassword',
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
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: 'Password',
    rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
    },
}
</script>
