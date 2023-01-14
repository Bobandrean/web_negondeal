<template>
    <BaseDialog ref="lokasim" class-name="px-5 py-8" :max-width="800">
        <v-container>
            <v-row>
                <v-col md="12" align="center">
                    <p>Silahkan Pilih Lokasi</p>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col md="12" align="center">
                    <p>Anda Dapat Memilih lebih dari 1 lokasi</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="4" align="center">
                    <p style="margin-top:20px"> Cari Lokasi</p>
                </v-col>
                <v-col md="8">
                    <v-text-field
            placeholder="Contoh : Bandung Karawang"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="6" align="center">
                    <p>Atau Cari Berdasarkan Provinsi</p>
                </v-col>
            </v-row>
            <v-row >
                <v-col md="12" align="center">
                    <v-card
                class="mx-auto"
                display="flex"
                width="700"
                height="150"
                style="border-style: thin; border-color:black; border-width: 1px">
                    <v-container>
                        <v-row class="scrollable">
                            <v-col
                                 v-for="n in 20"
                                :key="n"
                                cols="12"
                                sm="4"
                            >
                                <v-card
                                 class="pa-2"
                                outlined
                                tile
                                >
                                     One of three columns
                                </v-card>
                             </v-col>
                        </v-row>
                    </v-container>
                </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="12" align="center">
                    <BaseButton>Menampilkan Mobil Impian</BaseButton>
                </v-col>
            </v-row>
        </v-container>
    </BaseDialog>

</template>

<script>
  export default {
    data () {
      return {
        range: [-5, 5],
      }
    },
  }
</script>

<style>
    .scrollable{
  overflow-y: auto;
  max-height: 150px;
}
.row-1{
    margin-top: 3%;
  }
</style>

