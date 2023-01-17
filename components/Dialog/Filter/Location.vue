<template>
    <BaseDialog ref="lokasim" class-name="px-5 py-8" :max-width="800">
        <v-container>
            <form @submit.prevent="handleSubmit(SelectedValue)">
            <v-row>
                <v-col md="12" align="center">
                    <p>Silahkan Pilih Lokasi</p>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col md="12" align="center">
                    <p>Anda Dapat Memilih lebih dari 1 lokasi</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="4" align="center">
                    <p style="margin-top:20px"> Cari Lokasi</p>
                </v-col>
                <v-col md="8">
                    <v-text-field
            placeholder="Contoh : Bandung Karawang"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="12" align="center">
                    <p>Atau Cari Berdasarkan Provinsi</p>
                    {{ SelectedValue.Provinsi }} 
                </v-col>
                <v-col md="12" align="center">
                    <v-select v-model="SelectedValue.Provinsi" @change="handleSelectItem(val)" :items="getProvince" label="Provinsi" item-title="name" item-value="id"></v-select>
                </v-col>
            </v-row>
            <v-row >
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
const router = useRouter()
const emit  = defineEmits(['dataLokasi'])
        
const getProvince = computed(() => lokasiStore.getProvince())
        

 onMounted(() => {lokasiStore.fetchLokasi('')
})

const SelectedValue = reactive({
            Provinsi: '',

        })

        const handleSelectItem = (val) => {
            SelectedValue.Provinsi = val

        }

        const handleSubmit = () => {

            emit('dataLokasi', SelectedValue)
            console.log(SelectedValue)
        };

</script>

<style>
    .scrollable{
  overflow-y: auto;
  max-height: 150px;
}
.row-1{
    margin-top: 3%;
  }
</style>

