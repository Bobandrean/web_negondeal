<template>
    <BaseDialog ref="lokasim" class-name="px-5 py-8" :max-width="800">
        <v-container>
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
                    {{ itemsp }} 
                </v-col>
                <v-col md="12" align="center">
                    <v-select v-model="SelectedValue.province" @change="handleSelectItem()" :items="getProvince" label="Provinsi" item-title="name" item-value="id"></v-select>
                </v-col>
            </v-row>
            <v-row >
                <v-col md="12" align="center">

                </v-col>
            </v-row>
            <v-row>
                <v-col md="12" align="center">
                    <BaseButton>Menampilkan Mobil Impian</BaseButton>
                </v-col>
            </v-row>
        </v-container>
    </BaseDialog>

</template>
<script>
import { defineProps } from 'vue'
import { useLokasiStore } from '@/stores/lokasi'
import { defineEmits } from 'vue'
  export default {
    data () {
      return {
        provinsi: [
                    {nama: 'Banten', id: '1'},
                    {nama: 'Jakarta', id: '2'}
                ]
      }
    },
    setup(props, context) {
        const router = useRouter()

        const SelectedValue = reactive({
            province: '',

        })

        const handleSelectItem = () => {
            SelectedValue.province = province

        }

        const handleSubmit = () => {

            context.emit('dataJenis', SelectedValue)

            console.log(context)

        };

        return {
            SelectedValue,
            handleSelectItem,
            handleSubmit,
        }
    }
  }
  defineProps({
    itemsp: {
        type: Object,
        default: () => { },
    },
})
</script>

<script setup>


        
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

