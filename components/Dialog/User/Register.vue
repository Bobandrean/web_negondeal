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
                    <v-text-field v-model="formValues.email" placeholder="Masukkan Alamat Email Anda"
                        required></v-text-field>
                </v-row>
                <v-row>
                    <v-text-field v-model="formValues.password" placeholder="Buat Password" required type="password"></v-text-field>
                </v-row>
                <v-row>
                    <v-text-field  v-model="formValues.c_password" placeholder="Konfirmasi Password"
                        required type="password"></v-text-field>
                </v-row>
                <v-row>
                    <p>Minimal 8 karakter, kombinasi huruf dan angka</p>
                </v-row>
                <v-row>
                    <p>Sudah Punya akun? </p>
                    <p class="ml-2" style="cursor:pointer" @click="openLogin">Log In!</p>
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
    c_password: ""
});

const handleSubmit = () => {
    authStore.createUser(formValues).then(() => {
        daftar.value.close();
    });
    console.log(handleSubmit)
};

</script>

<style>
.input-box{
    box-sizing: border-box;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum","tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0,0,0,.85);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all .3s;
}
</style>