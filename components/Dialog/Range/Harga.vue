<template>
    <BaseDialog ref="price" class-name="px-5 py-8">
        <v-container>
            <form @submit.prevent="handleSubmit(formValues)">

                <v-row>
                    <v-col>
                        <p>Harga</p>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                <v-col>
                    <p>Harga rata-rata mobil NegoNDeal adalah Rp 174,953,349</p>
                </v-col>
                </v-row>
                <v-row>
                    <v-col md="6" align="center">
                        <v-text-field v-model="formValues.min_price" hide-details single-line @update:model-value="setTwoNumberDecimal"
                            type="number"  variant="outlined" density="compact" style="width: 150px">
                        </v-text-field>
                    </v-col>
                    <v-col md="6" align="center">
                        <v-text-field v-model="formValues.max_price" hide-details single-line
                            type="number" variant="outlined" style="width: 150px" density="compact">
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-divider style="margin-top:20px; margin-bottom:20px">
                </v-divider>
                <v-row>
                    <v-col md="6" align="center">
                        <BaseButton>Hapus</BaseButton>
                    </v-col>
                    <v-col md="6" align="center">
                        <BaseButton type="submit">Terapkan</BaseButton>
                    </v-col>
                </v-row>
            </form>

        </v-container>
    </BaseDialog>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { useRoute, useRouter } from 'vue-router';
import { defineEmits } from 'vue'
const counterStore = useCounterStore()
const route = useRoute()
const price = ref("");
const router = useRouter()
const emit = defineEmits(['dataPrice'])

const setTwoNumberDecimal = (event) => {
    this.value = parseFloat(this.value).toFixed(4);
}

const formValues = reactive({
            min_price : "",
            max_price : "",
 })

const handleSubmit = () => {
    emit('dataPrice', formValues)
    price.value.close()
};
</script>

<style>

</style>