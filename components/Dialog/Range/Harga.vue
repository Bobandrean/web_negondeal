<template>
    <BaseDialog ref="price" class-name="px-5 py-8">
        <v-container>
            <form @submit.prevent="handleSubmit(formValues.min_price, formValues.max_price)">

                <v-row>
                    <v-col>
                        <p>Harga</p>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                <v-col>
                    <p>Harga rata-rata mobil NegoNDeal adalah Rp 174,953,349</p>
                </v-col>
<<<<<<< HEAD
                </v-row>

                <v-row>

                    <v-col>
                        <v-range-slider v-model="range" :max="100000000" :min="10000" :step="1"
                            @update:modelValue="handleChangeRange" hide-details class="align-center slider-color">
                        </v-range-slider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6" align="center">
                        <v-text-field :v-model="formValues.min_price" :model-value="range[0]" hide-details single-line
                            type="number" variant="outlined" density="compact" style="width: 150px"
                            @change="$set(range, 0, $event)">
                        </v-text-field>
                    </v-col>
                    <v-col md="6" align="center">
                        <v-text-field :v-model="formValues.max_price" :model-value="range[1]" hide-details single-line
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

=======
            </v-row>
            <v-row>
                <v-col>
                    <v-range-slider v-model="range" :max="10" :min="-10" :step="1" hide-details
                        class="align-center slider-color">
                    </v-range-slider>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="6" align="center">
                    <v-text-field :model-value="range[0]" hide-details single-line type="number" variant="outlined"
                        density="compact" style="width: 70px" @change="$set(range, 0, $event)">
                    </v-text-field>
                </v-col>
                <v-col md="6" align="center">
                    <v-text-field :model-value="range[1]" hide-details single-line type="number" variant="outlined"
                        style="width: 70px" density="compact" @change="$set(range, 1, $event)">
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
                    <BaseButton>Terapkan</BaseButton>
                </v-col>
            </v-row>
>>>>>>> d43397357a2282ae2ad0ca2a4ec3f5b20446ba36
        </v-container>
    </BaseDialog>
</template>

<script>
import { useUnitStore } from '@/stores/unit'
import { defineEmits } from 'vue'

export default {
    data() {
        return {
<<<<<<< HEAD
            range: [10000, 100000000],
        }
    },
    emits: {

    },
    setup(props, context) {
        const router = useRouter()
        const unitStore = useUnitStore()

        const formValues = reactive({
            min_price: 10000,
            max_price: 100000,
        })

        const handleChangeRange = (val) => {
            formValues.min_price = val[0],
                formValues.max_price = val[1]
        }

        const harga = ref()

        const handleSubmit = (val1, val2) => {
            const price = [val1, val2]

            context.emit('dataPrice', price)
        };

        return {
            handleSubmit,
            formValues,
            handleChangeRange,
            harga
        }
    }
=======
            range: [-5, 5],
        }
    },
>>>>>>> d43397357a2282ae2ad0ca2a4ec3f5b20446ba36
}
</script>

<style>

</style>