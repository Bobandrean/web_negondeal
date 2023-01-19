<template>
    <BaseDialog ref="tahun" class-name="px-5 py-8">
        <v-container>
            <form @submit.prevent="handleSubmit(formValues.min_year, formValues.max_year)">

                <v-row>
                    <v-col>
                        <p>Tahun</p>
                    </v-col>
                </v-row>

                <v-row>

                    <v-col>
                        <v-range-slider v-model="range" :max="2023" :min="1990" :step="1"
                            @update:modelValue="handleChangeRange" hide-details class="align-center slider-color">
                        </v-range-slider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6" align="center">
                        <v-text-field :v-model="formValues.min_year" :model-value="range[0]" hide-details single-line
                            type="number" variant="outlined" density="compact" disabled style="width: 150px"
                            @change="$set(range, 0, $event)">
                        </v-text-field>
                    </v-col>
                    <v-col md="6" align="center">
                        <v-text-field :v-model="formValues.max_year" :model-value="range[1]" hide-details single-line
                            type="number" variant="outlined" disabled style="width: 150px" density="compact"
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
import { defineEmits } from 'vue'

export default {
    data() {
        return {
            range: [1990, 2023],
        }
    },
    emits: {

    },
    setup(props, context) {
        const router = useRouter()
        const unitStore = useUnitStore()

        const formValues = reactive({
            min_year: 1990,
            max_year: 2023,
        })

        const handleChangeRange = (val) => {
            formValues.min_year = val[0],
            formValues.max_year = val[1]
        }

        const tahun = ref()

        const handleSubmit = (val1, val2) => {
            const year = [val1, val2]

            context.emit('dataYear', year)
        };

        return {
            handleSubmit,
            formValues,
            handleChangeRange,
            tahun
        }
    }
}
</script>

<style>

</style>