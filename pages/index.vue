<template>


    <!-- Modal -->
    <DialogFilterLocation ref="lokasim"></DialogFilterLocation>
    <DialogRangeHarga ref="price" @dataPrice="handleDataPrice"></DialogRangeHarga>
    <DialogCariTahun ref="tahun" @dataYear="handleDataYear"></DialogCariTahun>
    <DialogMobilJenis ref="jenis"></DialogMobilJenis>
    <DialogCarMerk ref="merk"></DialogCarMerk>
    <!-- End Modal -->

    <BaseCard>
        <v-row>
            <v-col lg="12">
                <BaseInput @keyup.enter="SearchHandle(search.name)" v-model="search.name"
                    placeholder="Cari Mobil Anda (Merek/Jenis)" type="text">
                </BaseInput>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <BaseButton @click="openMerk">Merk & Jenis</BaseButton>
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
                <BaseButton @click="openModal">Filter Lainnya</BaseButton>
            </v-col>
            <v-col>
                <BaseButton to="/">Tampilkan Semua</BaseButton>
            </v-col>
        </v-row>
    </BaseCard>
    <v-row>
        <v-col class="mt-3" md="3">
            <v-chip v-if="!!search.name">{{ search.name }}</v-chip>
        </v-col>
        <v-col class="mt-3" md="3">
            <v-chip v-if="!!search.min_year">{{ search.min_year }}</v-chip>
        </v-col>
        </v-row>
    <v-divider class="ma-6"> </v-divider>
    <v-row>
        <v-col md="2" no-gutters align="center">
            <p>Menampilkan 471 Mobil</p>
        </v-col>
        <v-col md="2" no-gutters>
            <BaseDropDown @menuClick="HandleSort" color="secondary" label="Sort By" :items="sort"> Sort By</BaseDropDown>
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
import { defineProps } from 'vue'


definePageMeta({
    layout: "default",
});
const counterStore = useCounterStore()
const unitStore = useUnitStore()
const route = useRoute()
const router = useRouter()

const jenis = ref("");
const price = ref("");
const tahun = ref("");
const lokasim = ref("");
const result = ref("");
const merk = ref("");

const search = reactive({
    name: '',
    min_price: '',
    max_price: '',
    min_year: '',
    max_year: '',
    merk: '',
    type: '',
    plat_nomor: '',
    bahan_bakar:'',
    transmisi: '',
    tipe_body: '',
    warna: ''
})

const handleDataYear = (val) => {
    search.min_year = val[0] ?? 0
    search.max_year = val[1] ?? 0

    fetchDataSearch()
}

const handleDataPrice = (val) => {
    search.min_price = val[0] ?? 0
    search.max_price = val[1] ?? 0

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

    if (search.min_price !== "") {
        query.min_price = search.min_price
    }

    if (search.max_price !== "") {
        query.max_price = search.max_price
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
    price.value.$refs.price.open()
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

const openMerk = () => {
    merk.value.$refs.merk.open()
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

const getUnit = computed(() => unitStore.getUnit());

const testing = getUnit

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
        openMerk()
    } else if (e.id == 1) {
        openModal()
    }
}

const sortHargaAsc = () => {
        return this.car.sort((a, b) => {
            return a.harga.localeCompare(b.harga);
        });
}

const HandleSort = (e) =>{
    if(e.id == 0){
        sortHargaAsc()
        console.log("test")
    }
}
</script>
