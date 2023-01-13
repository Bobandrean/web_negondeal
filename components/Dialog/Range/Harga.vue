<template>
    <BaseDialog ref="harga" class-name="px-5 py-8" :max-width="500">
        <v-container>
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
            <form @submit.prevent="handleSubmit">
                <v-row>
                    <v-col>
                        <v-range-slider v-model="range" :max="200000000" @update:modelValue="handleChangeRange" :min="0"
                            :step="1" hide-details class="align-center slider-color">
                        </v-range-slider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6" align="center">
                        <v-text-field v-model="formValues.min_harga" :model-value="range[0]" hide-details single-line
                            type="number" variant="outlined" density="compact" style="width: 150px"
                            @change="$set(range, 0, $event)">
                        </v-text-field>
                    </v-col>
                    <v-col md="6" align="center">
                        <v-text-field v-model="formValues.max_harga" :model-value="range[1]" hide-details single-line
                            type="number" variant="outlined" style="width: 150px" density="compact"
                            @change="$set(range, 1, $event)">
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

<script>
import { useUnitStore } from '@/stores/unit'

export default {
    data() {
        return {
            range: [1000000, 200000000],
        }
    },
    setup() {
        const unitStore = useUnitStore()


        const formValues = reactive({
            max_price: 1000000,
            min_price: 200000000,

        })

        const handleChangeRange = (val) => {
            formValues.max_harga = val[0],
                formValues.min_harga = val[1]
        }

        const harga = ref()

        const handleSubmit = () => {
            unitStore.getUnitService(formValues).then(() => {
                harga.value.close()
                unitStore.getUnitService('')
            })
        }

        return {
            handleSubmit,
            formValues,
            handleChangeRange,
            harga
        }
    }
}


</script>

<style>
.v-slider-thumb__surface {
    color: red !important;
}
</style>