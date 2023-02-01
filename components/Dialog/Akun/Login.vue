<template>
  <!-- Modal -->
  <DialogUserRegister ref="daftar"></DialogUserRegister>
  <!-- End Modal -->
  <BaseDialog ref="login" class-name="px-5 py-8" :max-width="500">
    <v-container>
      <v-row>
        <v-col md="12" align="center">
          <p>Masuk (Log In)</p>
        </v-col>
      </v-row>
      <v-form v-model="valid" @submit.prevent="handleSubmit">
        <v-row class="mt-2">
          <v-text-field v-model="formValues.email" label="email" placeholder="Masukkan Alamat Email Anda" variant="outlined" counter
          :rules="[rules.required, rules.email]"></v-text-field>
        </v-row>
        <v-row >
          <v-col md="8">
            <v-text-field :type="show1 ? 'text' : 'password'" v-model="formValues.password" label="password" placeholder="Password" variant="outlined" :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required]" @click:append-inner="show1 = !show1"></v-text-field>
          </v-col>
          <v-col md="4">
            <BaseButton class="mt-3" ><span style="font-size:12px; color:#ffffff">Lupa Password</span></BaseButton>
          </v-col>
        </v-row>
        <v-row>
          <p>Belum Punya akun?</p>
          <p style="cursor: pointer" @click="openDaftar">Daftar</p>
        </v-row>
        <v-row>
          <v-col md="12" align="center">
           <v-btn
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          @click="handleSubmit"
        >
          Sign In
        </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="12" align="center">
            <p>Atau Masuk dengan</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="12" align="center">
            <BaseButton><span style="color:#ffffff">Google Account</span></BaseButton>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </BaseDialog>
</template>
<script>
export default {
  data () {
    return {
      show1 : false,
      title: 'Preliminary report',
      email: '',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },
}
</script>

  <script setup>
  import { useAuthStore } from "@/stores/auth";
  const authStore = useAuthStore();
 const daftar = ref("");
 const login = ref("");
  const openDaftar = () => {
    daftar.value.$refs.daftar.open();
    login.value.close();
    console.log("test")
  };
  const formValues = reactive({
    email: "",
    password: "",
  });
  const handleSubmit = async () => {
    await authStore.login(formValues);
    console.log("test");
    login.value.close();
  };
  </script>
