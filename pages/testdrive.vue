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
            <v-col cols="6" v-if="show">
                <v-row>
                    <v-card
    width="900"
    class="mx-auto card1"
    height="330"
  >
            <v-row>
                <v-col style="margin-left:20px; margin-top:20px">
                    <p>Lokasi Test Drive</p>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col style="margin-left:20px">
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
                <v-col align="right" style="margin-right:50px">
                    <BaseButton @click="c1()">Lanjut</BaseButton>
                </v-col>
            </v-row>
          </v-card>
                </v-row>
            </v-col>
            <v-col cols="6" v-if="show2">
                <v-row>
                    <v-card
    width="900"
    class="mx-auto card1"
    height="600"
  >
            <v-row>
                <v-col>
                    <p>Tanggal & Waktu</p>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col>
                    <p>Pilih Jadwal test drive tersedia yang sesuai denganmu</p>
                </v-col>
            </v-row>
            <v-divider style="margin-top:20px"></v-divider>
            <v-row>
                <v-col>
                    <p>Pilih Tanggal</p>
                </v-col>
            </v-row>
            <v-row style="margin-top:15px">
                <v-col md="3" align="center">
                    <BaseButton>Sabtu, 31 Desember</BaseButton>
                </v-col>
                <v-col md="3" align="center">
                    <BaseButton>Minggu, 1 Januari</BaseButton>
                </v-col>
                <v-col md="3" align="center">
                    <BaseButton>Senin, 2 Januari</BaseButton>
                </v-col>
                <v-col md="3" align="center">
                    <BaseButton>Selasa, 3 Januari</BaseButton>
                </v-col>
                <v-col md="3" align="center">
                    <BaseButton>Rabu, 4 Januari</BaseButton>
                </v-col>
                <v-col md="3" align="center">
                    <BaseButton>Kamis, 5 Januari</BaseButton>
                </v-col>
                <v-col md="3" align="center">
                    <BaseButton>Jumat, 6 Januari</BaseButton>
                </v-col>
                <v-col md="3" align="center">
                    <BaseButton>Sabtu, 7 Januari</BaseButton>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p>Pilih Waktu</p>
                </v-col>
            </v-row>
            <v-row style="margin-top:15px">
                <v-col md="3" align="center">
                    <BaseButton>09:00-10:00</BaseButton>
                </v-col>
                <v-col md="3" align="center">
                    <BaseButton>10:00-11:00</BaseButton>
                </v-col>
                <v-col md="3" align="center">
                    <BaseButton>11:00-12:00</BaseButton>
                </v-col>
                <v-col md="3" align="center">
                    <BaseButton>12:00-13:00</BaseButton>
                </v-col>
                <v-col md="3" align="center">
                    <BaseButton>13:00-14:00</BaseButton>
                </v-col>
                <v-col md="3" align="center">
                    <BaseButton>14:00-15:00</BaseButton>
                </v-col>
                <v-col md="3" align="center">
                    <BaseButton>15:00-16:00</BaseButton>
                </v-col>
                <v-col md="3" align="center">
                    <BaseButton>16:00-17:00</BaseButton>
                </v-col>
            </v-row>
            <v-row style="margin-top:15px">
                <v-card
                    class="mx-auto"
                    width="90%"
                    style="background-color:#E5E8E8"
                    >
                    <v-card-text>
                        <v-row>
                            <p>Tanggal dan waktu yang di inginkan tidak ada?</p>
                        </v-row>
                        <v-row>
                            <p>Tanggal dan waktu yang di inginkan tidak ada?</p>
                        </v-row>
                        <v-row style="margin-top:15px">
                            <p>Tanggal dan waktu yang di inginkan tidak ada?</p>
                        </v-row>
                        <v-row>
                            <p>Tanggal dan waktu yang di inginkan tidak ada?</p>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-row>
            <v-row align="right" style="margin-top:45px">
                <v-col align="right">
                    <BaseButton @click="c2()" style="margin-right:40px">Lanjut</BaseButton>
                </v-col>
            </v-row>
          </v-card>
                </v-row>
            </v-col>
            <v-col cols="6" v-if="show3">
                <v-row>
                    <v-card
    width="900"
    class="mx-auto card1"
    height="400"
  >
            <v-row>
                <v-col>
                    <p>Data Diri</p>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col>
                    <p>Pastikan informasimu sudah benar</p>
                </v-col>
            </v-row>
            <v-divider style="margin-top:20px"></v-divider>
            <v-row style="margin-top:15px">
                <v-col>
                    <p>Nama</p>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col>
                    <input v-model="text" placeholder="Nama Anda"/>
                </v-col>
            </v-row>
            <v-row style="margin-top:15px">
                <v-col>
                    <p>Email</p>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col>
                    <input v-model="text" placeholder="Email Anda"/>
                </v-col>
            </v-row>
            <v-row style="margin-top:15px">
                <v-col>
                    <p>Nomor HP</p>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col>
                    <input v-model="text" placeholder="NNomor HP Anda"/>
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
    data: function(){
        return{
            show: true,
            show2: false,
            show3: false
        }
    },
    methods: {
        c1 (event){
            this.show = !this.show
            this.show2 = !this.show2
        },
        c2 (event){
            this.show2 = !this.show2
            this.show3 = !this.show3
        }
    }
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
.card1{
    border-radius: 30px;
  background: white;
  box-shadow: 15px 15px 30px #bebebe,
             -15px -15px 30px #ffffff;
}
</style>