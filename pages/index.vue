<template>


    <!-- Modal -->
    <DialogFilterLocation ref="test"></DialogFilterLocation>
    <!-- End Modal -->

    <BaseCard>
        {{ unit }}
        <v-row>
            <v-col lg="12">
                <BaseInput @keyup="getData" v-model="search" placeholder="Cari Mobil Anda (Merek/Jenis)" type="text">
                </BaseInput>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <BaseButton @click="openModal">Open</BaseButton>
            </v-col>
            <v-col>
                <BaseButton>Harga</BaseButton>
            </v-col>
            <v-col>
                <BaseButton>Tahun</BaseButton>
            </v-col>
            <v-col>
                <BaseDropDown :items="lokasi">Lokasi</BaseDropDown>
            </v-col>
            <v-col> ModalFilter </v-col>
            <v-col>
                <BaseButton>Reset filter</BaseButton>
            </v-col>
        </v-row>
    </BaseCard>
    <v-row>
        <v-col>
            <p>Menampilkan 471 Mobil</p>
            <BaseDropDown color="secondary"></BaseDropDown>
        </v-col>
    </v-row>
    <v-divider class="ma-6"> </v-divider>
    <v-row>
        <h2>Highlight</h2>
    </v-row>
    <v-row>
        <v-col md="4">
            <BaseCarCard></BaseCarCard>
        </v-col>
        <v-col md="4">
            <BaseCarCard></BaseCarCard>
        </v-col>
        <v-col md="4">
            <BaseCarCard></BaseCarCard>
        </v-col>
    </v-row>
    <v-divider class="ma-6"> </v-divider>
    <v-row>
        <v-col md="4">
            <BaseCarCard></BaseCarCard>
        </v-col>
        <v-col md="4">
            <BaseCarCard></BaseCarCard>
        </v-col>
        <v-col md="4">
            <BaseCarCard></BaseCarCard>
        </v-col>
    </v-row>
    <v-row>
        <BaseCard width="1000">
            <v-row>
                <v-col md="12">
                    <h2>Belum menemukan yang Anda cari?</h2>
                </v-col>
                <v-col md="12">
                    Ketik mobil yang Anda cari di kotak berikut, Kami akan menghubungi
                    Anda apabila stock telah tersedia
                </v-col>
            </v-row>
            <v-row>
                <v-col md="6">
                    <BaseInput placeholder=""></BaseInput>
                </v-col>
                <v-col md="6">
                    <BaseInput></BaseInput>
                </v-col>
                <v-col md="12">
                    <BaseButton>Kirim</BaseButton>
                </v-col>
            </v-row>
        </BaseCard>
    </v-row>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { useUnitStore } from '@/stores/unit'

definePageMeta({
    layout: "default",
});

const test = ref("");

const openModal = () => {
    test.value.$refs.test.open()
};

const lokasi = [
    { text: 'Semua Lokasi', value: 'all_location' },
    { text: 'Pilih Lokasi', value: 'pick_location' },
];

const counterStore = useCounterStore()
const unitStore = useUnitStore()

// const getUnit = computed(() => unitStore.getUnit())

// onMounted(() => {
//     unitStore.getUnitService()
// })

const { pending, data: unit } = useLazyAsyncData('count', () => $fetch('http://127.0.0.1:8000/api/v1/get_unit'))

</script>
