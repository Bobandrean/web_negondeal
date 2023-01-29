<template>
    <v-container>
        <v-row>
            <v-col md="4" align="center">
                Halo, Nama Akun
            </v-col>
        </v-row>
      <v-row class="mt-10">
          <v-col md="4" align="center">
              Email
          </v-col>
          <v-col md="6" align="center">
              <BaseInput></BaseInput>
          </v-col>
          <v-col md="4" align="center">
              Nama
          </v-col>
          <v-col md="6" align="center">
              <BaseInput></BaseInput>
          </v-col>
          <v-col md="4" align="center">
              No HP
          </v-col>
          <v-col md="6" align="center">
              <BaseInput></BaseInput>
          </v-col>
          <v-col md="12" align="center">
              <BaseButton>Save</BaseButton>
          </v-col>
      </v-row>
      <v-row class="mb-5">
            <v-col md="4" align="center">
                Ubah Password
            </v-col>
        </v-row>
      <v-row class="mt-10">
          <v-col md="4" align="center">
              Password Lama
          </v-col>
          <v-col md="8" align="center">
              <BaseInput></BaseInput>
          </v-col>
          <v-col md="4" align="center">
              Password Baru
          </v-col>
          <v-col md="8" align="center">
              <BaseInput></BaseInput>
          </v-col>
          <v-col md="12" align="center">
              <BaseButton>Save</BaseButton>
          </v-col>
      </v-row>
      <v-row class="mt-10">
        <v-col md="4" align="center">
            Mobil Favorit Anda
        </v-col>
        <v-col md="8">

        </v-col>
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
  </v-container>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import { ref } from 'vue'
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
const getProfile = computed(() => {
      return authStore.fetchProfile;
    });
onMounted(() => {
    authStore.fetchProfile('')
})
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