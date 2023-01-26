<template>
       <BaseDialog ref="pesandetail" class-name="px-5 py-8" :max-width="500">
        <v-container>
            <v-row>
                <v-col md="12" align=center>
                <h6>Pilih Opsi Anda Untuk Melanjutkan</h6>
                </v-col>
            </v-row>
            <v-row>
          </v-row>
          <v-row>
        <div class="ml-7" style="cursor:pointer" @click="goToTestDrive">
          <v-card
    width="400"
    height="180"
    class="mx-auto mt-2"
    variant="outlined"
  >
            <v-row  class="ml-2 mt-1">
                 <v-col md="12">
                    <p class="text-1">Jadwalkan Test Drive</p>
                 </v-col>
            </v-row>
            <v-row class="ml-2">
                <v-col md="12">
                    <p class="text-2">DI Showroom NND Cisauk / Tekno<br></p>
                    <p class="text-2">Sudah memenuhi vaksinasi yang lengkap<br></p>
                    <p class="text-2">Mobil ini tetap tersedia untuk di pesan oleh pelanggan lain</p>
                </v-col>
            </v-row>
          </v-card>
        </div>
            </v-row>
        <v-row>
          <v-card
    width="400"
    height="150"
    class="mx-auto mt-2"
    variant="outlined"
  >
            <v-row  class="ml-2 mt-1">
                 <v-col md="12">
                    <p class="text-1">Hubungi Sales Kami</p>
                 </v-col>
            </v-row>
            <v-row class=" ml-2 mt-2">
                <v-col md="12">
                    <p class="text-2">Perlu informasi lebih lanjut ?<br></p>
                    <p class="text-2">Pilih opsi ini dan Anda dapat mengirimkan via WA kepada tim sales kami</p>
                </v-col>
            </v-row>
          </v-card>
            </v-row>
        </v-container>
    </BaseDialog> 
</template>

<script setup>
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const goToTestDrive = async () => {
  await router.push("/testdrive")
  window.location.reload()
};
</script>

<style>
.nuxt-link-exact-active{
    background : black;
    color : black;
}
</style>