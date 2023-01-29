<template>
    <!-- Modal -->
    <DialogFilterLocation ref="lokasim" @dataLokasi="handleDataLokasi"></DialogFilterLocation>
    <DialogRangeHarga ref="price" @dataPrice ="handleDataPrice"></DialogRangeHarga>
    <DialogCariTahun ref="tahun" @dataYear="handleDataYear"></DialogCariTahun>
    <DialogMobilJenis ref="jenis" @dataJenis="handleDataJenis"></DialogMobilJenis>
    <DialogCarMerk ref="merk" @dataMerk="handleDataMerk"></DialogCarMerk>
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
                <BaseButton @click="clearSearch">Reset filter</BaseButton>
            </v-col>
        </v-row>
    </BaseCard>
    
    <v-row class="d-flex flex-row mb-6">
        <v-col  md="2" class=" mt-3" v-if="!!search.name">
            <v-card
            class="cardFilter"
            max-width="125px"
            >
            <v-row>
                <v-col md="8" align="center" class="mt-1">
                   <p style="font-size:12px; margin-left: 11px;">{{ search.name }}</p> 
                </v-col>
                <v-col md="4" align="center" @click="clearFilter">
                    <v-icon style="margin-right:10px">mdi-close</v-icon>
                </v-col>
            </v-row>
            </v-card>
        </v-col>
        <v-col class="mt-3" md="2" v-if="!!search.merk">
            <v-card
            class="cardFilter"
            max-width="200px"
            >
            <v-row>
                <v-col md="8" align="center" class="mt-1">
                   <p style="font-size:13px; margin-left: 11px;">{{ search.merk }}, {{ search.type }}</p> 
                </v-col>
                <v-col md="4" align="center" @click="clearMerk">
                    <v-icon style="margin-right:10px">mdi-close</v-icon>
                </v-col>
            </v-row>
            </v-card>
        </v-col>
        <v-col class="mt-3" md="2" v-if="!!search.min_price">
            <v-card
            class="cardFilter"
            max-width="200px"
            >
            <v-row>
                <v-col md="8" align="center" class="mt-1">
                   <p style="font-size:10px; margin-left: 11px;">{{ search.min_price }} - {{ search.max_price }}</p> 
                </v-col>
                <v-col md="4" align="center" @click="clearPrice">
                    <v-icon style="margin-right:10px">mdi-close</v-icon>
                </v-col>
            </v-row>
            </v-card>
        </v-col>
        <v-col class="mt-3" md="2" v-if="!!search.min_year">
            <v-card
            class="cardFilter"
            max-width="200px"
            >
            <v-row>
                <v-col md="8" align="center" class="mt-1">
                   <p style="font-size:14px; margin-left: 11px;">{{ search.min_year }} - {{ search.max_year }}</p> 
                </v-col>
                <v-col md="4" align="center" @click="clearYear">
                    <v-icon style="margin-right:10px">mdi-close</v-icon>
                </v-col>
            </v-row>
            </v-card>
        </v-col>
        <v-col class="mt-3" md="2" v-if="!!search.provinsi">
            <v-card
            class="cardFilter"
            max-width="200px"
            >
            <v-row>
                <v-col md="8" align="center" class="mt-1">
                   <p style="font-size:14px; margin-left: 11px;">{{ search.provinsi }} , {{ search.kota }}, {{ search.kecamatan }}</p> 
                </v-col>
                <v-col md="4" align="center" @click="clearMerk">
                    <v-icon style="margin-right:10px">mdi-close</v-icon>
                </v-col>
            </v-row>
            </v-card>
        </v-col>
    </v-row>
    <v-divider class="ma-6"> </v-divider>
    <v-row>
        <v-col md="2" no-gutters align="center">
            <p>Menampilkan {{ getUnit.length }} Mobil</p>
        </v-col>
        <v-col md="2" no-gutters>
            <BaseDropDown  @menuClick="HandleSort" color="secondary" label="Sort By" :items="sort"> Sort By</BaseDropDown>
        </v-col>
    </v-row>
    <v-row style="background-color:gray">
        <v-col md="12">
            <p class="ml-14 mt-10" style="font-weight:bold; font-size:30px">Highlight</p>
        </v-col>
        <v-col md="12">
            <v-slide-group class="pa-4" show-arrows center-active selected-class="bg-success">
              <v-slide-group-item  >
                <v-col v-for="car in getUnit" :key="car.id">
                <BaseCarCard :items="car"></BaseCarCard>
                </v-col>
              </v-slide-group-item>
            </v-slide-group>
        </v-col>
    </v-row>
    <div class="list-mobil">
        <v-row>
        <v-col md="4" v-for="car, y  in getUnit.slice((page - 1) * perPage, page * perPage)" :key="y">
            <BaseCarCard :items="car"></BaseCarCard>
        </v-col>
        <v-col md="12" align="center" v-if="x == 0" style="background-color:aqua" >Test </v-col>
    </v-row>
    </div>
   <v-row>
    <v-col>
        <p >Menampilkan Halaman  {{ page }} Dari {{ Math.ceil(getUnit.length/perPage) }}</p> 
    </v-col>
   </v-row> 
   <v-pagination
      v-model="page"
      :length="Math.ceil(getUnit.length/perPage)"
      circle
    ></v-pagination>
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
                    <BaseInput placeholder="pisahkan dengan koma (.) untuk kata kunci lebih dari satu"></BaseInput>
                </v-col>
                <v-col md="6">
                    <BaseInput placeholder="No Hp Anda"></BaseInput>
                </v-col>
                <v-col md="12" align="center">
                    <BaseButton>Beritahu Saya</BaseButton>
                </v-col>
            </v-row>
        </BaseCard>
    </v-row>
</template>



<script setup>
import { useCounterStore } from '@/stores/counter'
import { useUnitStore } from '@/stores/unit'
import { useRoute, useRouter } from 'vue-router';
import { useLokasiStore } from '@/stores/lokasi'
import { useMerkStore } from '@/stores/merk'
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
const page = ref("1");
const perPage = ref("6");
const perRow = ref("2");

const lokasiStore = useLokasiStore()

const getProvince = computed(() => lokasiStore.getProvince())
onMounted(() => {
    lokasiStore.fetchLokasi('')
})

const search = reactive({
    name: '',
    min_price: '',
    max_price: '',
    min_year: '',
    max_year: '',
    plat_nomor: '',
    bahan_bakar: '',
    transmisi: '',
    tipe_body: '',
    warna: '',
    provinsi: '',
    kota: '',
    kecamatan: '',
    highest: '',
    lowest: '',
    merk: '',
    type: '',
    loading: 'false'
})

const paginatedData = () => {
    startIndex =  page - 1 * perPage,
    endIndex = page * perPage;
}

const handleHargaTinggi = () => {
     search.highest = "HargaTinggi"
     fetchDataSearch()
}

const handleHargaRendah = () => {
    search.lowest = "HargaRendah"
    fetchDataSearch()
}

const handleDataMerk = (val) => {
    search.merk = val.merk ? val.merk : ""
    search.type = val.type ? val.type : ""
    console.log(val, "merk dan type masuk")

    fetchDataSearch()
}

const handleDataLokasi = (val) => {
    search.provinsi = val.provinsi ? val.provinsi : ""
    search.kota = val.kota ? val.kota : ""
    search.kecamatan = val.kecamatan ? val.kecamatan : ""
    console.log(val, "emit masuk")
    fetchDataSearch()
}
const handleDataJenis = (val) => {
    search.plat_nomor = val.platnomor ? val.platnomor : ""// setelah ? itu pilihan yes or no
    search.bahan_bakar = val.bahan_bakar ? val.bahan_bakar : ""
    search.warna = val.warna ? val.warna : ""
    search.tipe_body = val.bodi ? val.bodi : ""
    search.transmisi = val.transmisi ? val.transmisi : ""
    fetchDataSearch()
}
const handleDataYear = (val) => {
    search.min_year = val[0] ?? 0
    search.max_year = val[1] ?? 0
    console.log(val, "emit masuk")
    fetchDataSearch()
}
const handleDataPrice = (val) => {
    search.min_price = val.min_price ? val.min_price : ""
    search.max_price = val.max_price ? val.max_price : ""
    fetchDataSearch()
}
const searchResult = () => {
    result = route.query
}
const SearchHandle = (val) => {
    console.log("wehehe")
    search.name = val
    fetchDataSearch()
};

const currentDate = () => {
    const date = new Date()
    console.log(date)

    const currentDateWithFormat = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            console.log(currentDateWithFormat);
}

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
    if (search.tipe_body !== "") {
        query.tipe_body = search.tipe_body
    }
    if (search.bahan_bakar !== "") {
        query.bahan_bakar = search.bahan_bakar
    }
    if (search.transmisi != "") {
        query.transmisi = search.transmisi
    }
    if (search.plat_nomor != "") {
        query.plat_nomor = search.plat_nomor
    }
    if (search.warna != "") {
        query.warna = search.warna
    }
    if (search.provinsi != "") {
        query.provinsi = search.provinsi
    }
    if (search.kota != "") {
        query.kota = search.kota
    }
    if (search.kecamatan != "") {
        query.kecamatan = search.kecamatan
    }
    if (search.lowest != "") {
        query.lowest = search.lowest
    }
    if (search.highest != "") {
        query.highest = search.highest
    }
    if (search.merk != "") {
        query.merk = search.merk
    }
    if (search.type != "") {
        query.type = search.type
    }
    await router.push({
        path: '/',
        query: query
    })
    unitStore.getUnitService(route.query)
}
const clearSearch = async () => {
    await router.push("/")
    window.location.reload()
};

const clearFilter = async() => {
    search.name = ""
    fetchDataSearch()
    console.log(search.name, "berhasil Menghapus")
};

const clearPrice = async() => {
    search.min_price = ""
    search.max_price = ""
    fetchDataSearch()
    console.log(search.min_price, "berhasil Menghapus")
};

const clearYear = async() => {
    search.min_year = ""
    search.max_year = ""
    fetchDataSearch()
    console.log(search.min_year, "berhasil Menghapus")
};

const clearLokasi = async() => {
    search.provinsi = ""
    search.kota = ""
    search.kecamatan = ""
    fetchDataSearch()
};

const clearSort = async() => {
    search.lowest = ""
    fetchDataSearch()
    console.log(search.lowest, "berhasil Menghapus")
};

const clearSort1 = async() => {
    search.highest = ""
    fetchDataSearch()
    console.log(search.highest, "berhasil Menghapus")
};

const clearMerk = async() => {
    search.merk = ""
    search.type = ""
    fetchDataSearch()
    console.log(search.merk, "berhasil Menghapus")
};

const openModal = () => {
    jenis.value.$refs.jenis.open();
};
const openHarga = () => {
    price.value.$refs.price.open();
    console.log("test")
};
const openTahun = () => {
    tahun.value.$refs.tahun.open();
};
const openLokasi = () => {
    lokasim.value.$refs.lokasim.open();
};
const openDetail = () => {
    test.value.$refs.pesandetail.open();
};
const openMerk = () => {
    merk.value.$refs.merk.open();
};
const lokasi = [
    { text: "Semua Lokasi", value: "all_location" },
    { text: "Pilih Lokasi", value: "pick_location" },
];
const modal1 = [
    { text: "Merek", value: "pick_merek" },
    { text: "Jenis", value: "pick_jenis" },
];
const sort = [
    { text: "Harga Terendah - Tinggi", value: "pick_desc" },
    { text: "Harga Tinggi - Terendah", value: "pick_asc" },
    { text: "Jarak Tempuh Terendah", value: "pick_jarak_asc" },
    { text: "Tahun Terkini - Terlampau", value: "pick_tahun_asc" },
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
        clearLokasi()
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
const sortingHarga = () => {
    sortUnit.sort()
}
const HandleSort = (e) => {
    if (e.id == 0) {
        handleHargaTinggi()
        console.log("test")
        clearSort()
    } else if (e.id == 1) {
        handleHargaRendah()
        clearSort1()
    } else if (e.id == 2){
        currentDate()
    } else if (e.id == 3){
        console.log(search.loading)
        search.loading = "true"
        console.log(search.loading)
    }

}
</script>

<style>
.cardFilter{
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(229, 241, 255);
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    padding: 6px 8px;
    height: 32px;
}
</style>
