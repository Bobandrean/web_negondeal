<template>
      <BaseDialog ref="daftar" class-name="px-5 py-8" :max-width="500">
        <v-container>
            <v-row>
                <v-col md="12" align=center>
                    <p>Daftar Akun (Sign Up)</p>
                </v-col>
            </v-row>
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
                <p>Sudah Punya akun? Log In ! </p>
            </v-row>
            <v-row>
                <v-col md="12" align="center">
                    <BaseButton>Buat Akun</BaseButton>
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
        </v-container>
    </BaseDialog>
</template>

<script>
export default {

}
</script>

<style>

</style>