<template>
        <!-- Modal -->
        
        <!-- End Modal -->
      <BaseDialog ref="daftar" class-name="px-5 py-8" :max-width="500">
        <v-container>
            <v-row>
                <v-col md="12" align=center>
                    <p>Daftar Akun (Sign Up)</p>
                </v-col>
            </v-row>
            <v-form v-model="valid" @submit.prevent="handleSubmit">
            <v-row>
                    <v-text-field
                         placeholder="Masukkan Alamat Email Anda"
                     ></v-text-field>
            </v-row>
            <v-row>
                <v-text-field
            placeholder="Buat Password"
          ></v-text-field>
            </v-row>
            <v-row>
                <p>Minimal 8 karakter, kombinasi huruf dan angka</p>
            </v-row>
            <v-row>
                <p>Sudah Punya akun? </p><p class ="ml-2" style="cursor:pointer" @click="openLogin">Log In!</p> 
            </v-row>
            <v-row>
                <v-col md="12" align="center">
                    <BaseButton type="submit" color="primary" block>Buat Akun</BaseButton>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="12" align="center">
                    <p>Atau mendaftar dengan Google</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="12" align="center">
                    <BaseButton>Google Account</BaseButton>
                </v-col>
            </v-row>
        </v-form>
        </v-container>
    </BaseDialog>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore();
const login = ref("");
const daftar = ref("");

const openLogin = () => {
    login.value.$refs.login.open()
};

const formValues = reactive({
  email: "",
  password: "",
});

const handleSubmit = () => {
  authStore.createUser(formValues).then(() => {
    daftar.value.close();
  });
};

</script>

<style>

</style>