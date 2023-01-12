<template>


    <!-- Modal -->
    <DialogFilterLocation ref="lokasim"></DialogFilterLocation>
    <DialogRangeHarga ref="harga"></DialogRangeHarga>
    <DialogCariTahun ref="tahun" @dataYear="handleDataYear"></DialogCariTahun>
    <DialogMobilJenis ref="jenis"></DialogMobilJenis>
    <!-- End Modal -->

    <BaseCard>
        <v-row>
            <v-col lg="12">

                <BaseInput @keyup.enter="SearchHandle(search.name)" v-model="search.name"
                    placeholder="Cari Mobil Anda (Merek/Jenis)" type="text">
                </BaseInput>
            </v-col>
        </v-row>
        {{ result }}
        <v-row v-if="query != null">

        </v-row>
        <v-row>
            <v-col>
                <BaseDropDown @menuClick="handleModal1" label="Merek & Jenis" :items="modal1">Merek & Jenis
                </BaseDropDown>
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
                <BaseButton to="/">Tampilkan Semua</BaseButton>
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
import { useRoute, useRouter } from 'vue-router';


definePageMeta({
    layout: "default",
});
const counterStore = useCounterStore()
const unitStore = useUnitStore()
const route = useRoute()
const router = useRouter()

const jenis = ref("");
const harga = ref("");
const tahun = ref("");
const lokasim = ref("");
const result = ref("");

const search = reactive({
    name: '',
    min_price: '',
    max_price: '',
    min_year: '',
    max_year: '',
    merk: '',
    type: ''
})

const handleDataYear = (val) => {
    search.min_year = val[0] ?? 0
    search.max_year = val[1] ?? 0

    fetchDataSearch()
}

const searchResult = () => {
    result = route.query
}

const SearchHandle = (val) => {

    search.name = val

    fetchDataSearch()
};

const fetchDataSearch = async () => {
    const query = {}

    if (search.name !== "") {
        query.name = search.name
    }

    if (search.min_year !== "") {
        query.min_year = search.min_year
    }

    if (search.max_year !== "") {
        query.max_year = search.max_year
    }

    await router.push({
        path: '/',
        query: query
    })

    unitStore.getUnitService(route.query)
}

const clearSearch = () => {
    unitStore.getUnitService(clear);
};

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

const fetchData = () => {
    const query = {}
}

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
