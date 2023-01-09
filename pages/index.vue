<template>


    <!-- Modal -->
    <DialogFilterLocation ref="lokasim"></DialogFilterLocation>
    <DialogRangeHarga ref="harga"></DialogRangeHarga>
    <DialogCariTahun ref="tahun"></DialogCariTahun>
    <DialogMobilJenis ref="jenis"></DialogMobilJenis>
    <!-- End Modal -->

    <BaseCard>
        <v-row>
            <v-col lg="12">
                <BaseInput @keyup="getData" v-model="search" placeholder="Cari Mobil Anda (Merek/Jenis)" type="text">
                </BaseInput>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <BaseDropDown @menuClick="handleModal1" label="Merek & Jenis" :items="modal1">Merek & Jenis</BaseDropDown>
            </v-col>
            <v-col>
                <BaseButton @click="openHarga">Harga</BaseButton>
            </v-col>
            <v-col>
                <BaseButton @click="openTahun">Tahun</BaseButton>
            </v-col>
            <v-col>
                <BaseDropDown @menuClick="handleMenu" label="Lokasi" :items="lokasi">Lokasi</BaseDropDown>
            </v-col>
            <v-col> 
                <BaseButton>Filter Lainnya</BaseButton>
             </v-col>
            <v-col>
                <BaseButton>Reset filter</BaseButton>
            </v-col>
        </v-row>
    </BaseCard>
    <v-divider class="ma-6"> </v-divider>
    <v-row>
        <v-col md="2" no-gutters align="center">
            <p>Menampilkan 471 Mobil</p>
        </v-col>
        <v-col md="2" no-gutters>
            <BaseDropDown color="secondary" label="Sort By" :items="sort"> Sort By</BaseDropDown>
        </v-col>
    </v-row>
    <v-row>
        <v-col md="4" v-for="car in getUnit" :key="car.id">
            <BaseCarCard :items="car"></BaseCarCard>
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
        <BaseCard>
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

const jenis = ref("");
const harga = ref("");
const tahun = ref("");
const lokasim = ref("");

const openModal = () => {
    jenis.value.$refs.jenis.open()
};

const openHarga = () => {
    harga.value.$refs.harga.open()
};

const openTahun = () => {
    tahun.value.$refs.tahun.open()
};

const openLokasi = () => {
    lokasim.value.$refs.lokasim.open()
};

const openDetail = () => {
    test.value.$refs.pesandetail.open()
};

const lokasi = [
    { text: 'Semua Lokasi', value: 'all_location' },
    { text: 'Pilih Lokasi', value: 'pick_location' },
];

const modal1 = [
    { text: 'Merek', value: 'pick_merek' },
    { text: 'Jenis', value: 'pick_jenis' },
];

const sort = [
    { text: 'Harga Terendah - Tinggi', value: 'pick_desc' },
    { text: 'Harga Tinggi - Terendah', value: 'pick_asc' },
    { text: 'Jarak Tempuh Terendah', value: 'pick_jarak_asc' },
    { text: 'Tahun Terkini - Terlampau', value: 'pick_tahun_asc' },
];

const counterStore = useCounterStore()
const unitStore = useUnitStore()

const getUnit = computed(() => unitStore.getUnit())

onMounted(() => {
    unitStore.getUnitService('')
})


const handleMenu = (e) => {
    if (e.id == 0) {
        console.log("buka modal semua lokasi")
    } else if (e.id == 1) {
        openLokasi()
    }
}

const handleModal1 = (e) => {
    if (e.id == 0) {
        console.log("buka modal semua lokasi")
    } else if (e.id == 1) {
        openModal()
    }
}

</script>
