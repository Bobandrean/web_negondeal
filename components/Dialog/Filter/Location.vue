<template>
    <BaseDialog ref="lokasim" class-name="px-5 py-8" :max-width="800">
        <v-container>
            <form @submit.prevent="handleSubmit(SelectedValue)">
                <v-row>
                    <v-col md="12" align="center">
                        <p>Silahkan Pilih Lokasi</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="12" align="center">
                    </v-col>
                    <v-col md="12" align="center">
                        <v-select v-model="SelectedValue.provinsi" @update:model-value="handleCity()"
                            :items="getProvince" label="Provinsi" item-title="name" item-value="id"></v-select>
                    </v-col>
                    <v-col md="12" align="center">
                        <v-select v-model="SelectedValue.kota" @update:model-value="handleDistrict()" :items="getCity" label="Kota" item-title="name"
                            item-value="id"></v-select>
                    </v-col>
                    <v-col md="12" align="center">
                        <v-select v-model="SelectedValue.kecamatan" :items="getDistrict" label="Kecamatan" item-title="name"
                            item-value="id"></v-select>
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

<script>
</script>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { useLokasiStore } from '@/stores/lokasi'
import { useRoute, useRouter } from 'vue-router';
import { defineEmits } from 'vue'
const counterStore = useCounterStore()
const lokasiStore = useLokasiStore()
const route = useRoute()
const lokasim = ref("");
const router = useRouter()
const emit = defineEmits(['dataLokasi'])
const getProvince = computed(() => lokasiStore.getProvince())
const getCity = computed(() => lokasiStore.getCity())
const getDistrict = computed(() => lokasiStore.getDistrict())
onMounted(() => {
    lokasiStore.fetchLokasi('')
})
const SelectedValue = reactive({
    provinsi: '',
    kota: '',
    kecamatan: ''
})
const handleCity = async () => {
    console.log("sukses merubah")
    const payload = {
        province_id: SelectedValue.provinsi
    }
    console.log(payload)
    await lokasiStore.fetchCity(payload)
}

const handleDistrict = async () => {
    console.log("sukses merubah kota")
    const payload = {
        city_id: SelectedValue.kota
    }
    console.log(payload)
    await lokasiStore.fetchDistrict(payload)
}

const handleSubmit = () => {
    emit('dataLokasi', SelectedValue)
    console.log(SelectedValue)
    lokasim.value.close();
};
</script>

<style>
.scrollable {
    overflow-y: auto;
    max-height: 150px;
}
.row-1 {
    margin-top: 3%;
}
</style>
