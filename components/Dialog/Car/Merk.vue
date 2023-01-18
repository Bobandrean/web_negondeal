<template>
    <BaseDialog ref="merk" class-name="px-5 py-8" :max-width="450">
        <v-container>
            <form @submit.prevent="handleSubmit(SelectedValue)">
                <v-row>
                    <v-col md="12" align="center">
                        <p>All Brand & Model</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="12" align="center">
                    </v-col>
                    <v-col md="12" align="center">
                        <v-select v-model="SelectedValue.merk_id" @update:model-value="handleMerk()" :items="getMerk"
                            label="Merk" item-title="brand" item-value="brand"></v-select>
                    </v-col>
                    <v-col md="12" align="center">
                        <v-select v-model="SelectedValue.tipe_mobil" :items="getBrand" label="Brand" item-title="types"
                            item-value="types"></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="12" align="center">

                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="12" align="center">
                        <BaseButton type="submit">Menampilkan Mobil Impian</BaseButton>
                    </v-col>
                </v-row>
            </form>
        </v-container>
    </BaseDialog>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { useMerkStore } from '@/stores/merk'
import { useRoute, useRouter } from 'vue-router';
import { defineEmits } from 'vue'
const counterStore = useCounterStore()
const MerkStore = useMerkStore()
const route = useRoute()
const router = useRouter()
const emit = defineEmits(['dataMerk'])
const getMerk = computed(() => MerkStore.getMerk())
const getBrand = computed(() => MerkStore.getBrand())

onMounted(() => {
    MerkStore.fetchMerk('')
})
const SelectedValue = reactive({
    merk_id: '',
    tipe_mobil: ''
})

const handleMerk = async () => {
    console.log("sukses merubah")
    const payload = {
        assettype: "MOBIL",
        brand: SelectedValue.merk_id
    }
    console.log(payload)
    await MerkStore.fetchBrand(payload)
}

const handleSubmit = () => {
    emit('dataMerk', SelectedValue)
    console.log(SelectedValue)
};

</script>

<style>
.scrollable {
    overflow-y: auto;
    max-height: 300px;
}
</style>