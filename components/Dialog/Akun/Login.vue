<template>
    <!-- Modal -->
        <DialogUserRegister ref="daftar"></DialogUserRegister>
    <!-- End Modal -->
      <BaseDialog ref="login" class-name="px-5 py-8" :max-width="500">
        <v-container>
            <v-row>
                <v-col md="12" align=center>
                    <p>Masuk (Log In)</p>
                </v-col>
            </v-row>
        <v-form v-model="valid" @submit.prevent="handleSubmit">
            <v-row>
                    <v-text-field
                        v-model="formValues.email"
                        label="email"
                        placeholder="Masukkan Alamat Email Anda"
                        required
                    ></v-text-field>
            </v-row>
            <v-row no-gutters>
                <v-col md="9">
                <v-text-field
                    v-model="formValues.password"
                    label="password"
                    placeholder="Password"
                    required
          ></v-text-field>
                </v-col>
                <v-col md="3">
                    <Button>Lupa Password</Button>
                </v-col>
            </v-row>
            <v-row>
                <p>Belum Punya akun?</p><p class ="ml-2" style="cursor:pointer" @click="openDaftar">Daftar</p> 
            </v-row>
            <v-row>
                <v-col md="12" align="center">
                    <BaseButton>Masuk</BaseButton>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="12" align="center">
                    <p>Atau Masuk dengan</p>
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

const daftar = ref("");
const login = ref("");
const authStore = useAuthStore();

const openDaftar = () => {
    daftar.value.$refs.daftar.open()
    login.value.close()
};

const formValues = reactive({
  email: "",
  password: "",
});

const handleSubmit = async () => {
  authStore.login(formValues).then(async () => {
    await router.push("/");
  });
};
</script>

<script>

</script>

<style>

</style>