<template>
    <v-container>
        <v-row no-gutters>
            <v-col md="12" align="center">
                <p>Verified By xxxx Car Center</p>
            </v-col>
            <v-col md="12" align="center">
                <p>Mekanik Berkualitas</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="12" align="center">
                <v-card
    class="mx-auto rounded-lg"
    width="600"
    height="370"
    style="border-style: thin; border-width: 1px"
  >
            <v-row no-gutters>
                <v-col md="6">
                    <p class="loui4" style="margin-top:5%">Laporan Inspeksi 05 July 2022</p>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col md="6">
                    <p class="loui4">NAMA MOBIL</p>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-avatar
                class="ma-3"
                size="125"
                rounded="0"
              >
                <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
              </v-avatar>
            </v-row>
            <v-row>
                <v-col md="6">
                    <v-row>
                    <v-col md="6">
                        <p class="loui4">Nomor Rangka</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <p class="loui4">Nomor Mesin</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <p class="loui4">Chasis</p>
                    </v-col>
                </v-row>
                </v-col>
                <v-col md="6">
                    <v-row>
                    <v-col md="11">
                        <p class="loui2">Sesuai Dokumen</p>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="11">
                        <p class="loui2">Sesuai Dokumen</p>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="11">
                        <p class="loui2">Normal</p>
                    </v-col>
                    </v-row>
                </v-col>
            </v-row>
</v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="12" align="center">
                <v-card
    class="mx-auto rounded-lg"
    width="600"
    height="290"
    style="border-style: thin; border-width: 1px"
  >
            <v-row no-gutters>
                <v-col md="6">
                    <p class="loui4" style="margin-top:5%">Tes Jalan</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="6">
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Akselerasi Mesin</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Engine Starting</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Racksteer</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Sistem Pengereman</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Bunyi Perpindahan Transmisi</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col md="6">
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Engine Idling</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Suara Mesin</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">ABS Sensor</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Suara Kaki Kaki</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Sistem Kopling</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                </v-col>
            </v-row>
</v-card>
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