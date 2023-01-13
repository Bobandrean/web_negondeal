<template>
      <BaseDialog ref="login" class-name="px-5 py-8" :max-width="500">
        <v-container>
            <v-row>
                <v-col md="12" align=center>
                    <p>Masuk (Log In)</p>
                </v-col>
            </v-row>
            <v-row>
                    <v-text-field
            placeholder="Masukkan Alamat Email Anda"
          ></v-text-field>
            </v-row>
            <v-row no-gutters>
                <v-col md="9">
                <v-text-field
            placeholder="Password"
          ></v-text-field>
                </v-col>
                <v-col md="3">
                    <Button>Lupa Password</Button>
                </v-col>
            </v-row>
            <v-row>
                <p>Belum Punya akun? Daftar</p>
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
        </v-container>
    </BaseDialog>
</template>

<script>
export default {

}
</script>

<style>

</style>