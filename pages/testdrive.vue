<template>
    <v-container>
        <v-row>
            <v-col cols="4">
                <v-row style="display: flex; align-items: center; justify-content: center"  align="center">
                    <p>Pemesanan Test Drive</p>
                </v-row>
            </v-col>
        </v-row>
        <v-row align="stretch" style="margin-top:50px">
            <v-col cols="4">
                <v-row style="display: flex; align-items: center; justify-content: center"  align="center">
                    <p >Detail Mobil</p>
                </v-row>
                <v-row style="display: flex; align-items: center; justify-content: center"  align="center">
                    <v-avatar
                size="80"
                rounded="0"
              >
                <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
              </v-avatar>
                </v-row>
                <v-row style="display: flex; align-items: center; justify-content: center"  align="center">
                    <p>Suzuki XL7 Beta 1,5 MT Bensin 2020</p>
                </v-row>
                <v-row style="display: flex; align-items: center; justify-content: center"  align="center">
                    <p>4.000 KM | 2020 | Manual</p>
                </v-row>
                <v-row style="margin-top:45px; display: flex; align-items: center; justify-content: center"  align="center">
                    <p>Lokasi</p>
                </v-row>
                <v-row style="margin-top:45px; display: flex; align-items: center; justify-content: center"  align="center">
                    <p>Tanggal & Waktu</p>
                </v-row>
                <v-row style="margin-top:45px; display: flex; align-items: center; justify-content: center"  align="center">
                    <p>Data Diri</p>
                </v-row>
            </v-col>
            <v-col cols="6">
                <v-row>
                    <v-card
    width="900"
    class="mx-auto"
    variant="outlined"
    height="300"
  >
            <v-row>
                <v-col>
                    <p>Lokasi Test Drive</p>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col>
                    <p>Pilih Tempat untuk Melakukan test Drive</p>
                </v-col>
            </v-row>
            <v-divider style="margin-top:20px"></v-divider>
            <v-row style="margin-top:15px">
                <v-col md="6" align="center">
                    <BaseButton>Moladin Car Centre</BaseButton>
                </v-col>
                <v-col md="6" align="center">
                    <BaseButton>Lokasi Pilihanmu</BaseButton>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p>Lokasi Moladin Car Centre</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p>Lokasi Moladin Car Centre</p>
                </v-col>
            </v-row>
            <v-row align="right">
                <v-col align="right">
                    <BaseButton>Lanjut</BaseButton>
                </v-col>
            </v-row>
          </v-card>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import { ref } from 'vue'
definePageMeta({
    layout: 'custom'
})
export default {

}
</script>

<style>
.loui4{
    margin-left: 5%;
    font-size: 14px;
    text-align: left;
}
.loui3{
    margin-right: 5%;
}
.loui2{
    font-size: 14px;
    text-align: right;
    color: green;
}
</style>