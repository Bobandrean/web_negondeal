<template>
      <BaseDialog ref="jenis" class-name="px-5 py-8" :max-width="800">
        <v-container>
            <v-row>
                <v-col align="center">
                    <p>Silahkan Pilih Filter</p>
                </v-col>
            </v-row>
            <v-row>
                <v-card
                class="mx-auto"
                display="flex"
                width="700"
                height="400"
                style="border-style: thin; border-color:black; border-width: 1px">
                    <v-container>
                        <v-row>
                            <v-col md="4">
                                <v-row v-model="selected">
                                    <v-col v-for="item in test" :value="item" :key="item"  md="12" align="center" style="cursor: pointer" @click="handleSelectItem(item)">
                                        <p>{{item}}</p>
                                    </v-col>

                                </v-row>
                            </v-col>
                            <v-divider vertical></v-divider>
                                <v-col md="8" class="scrollable">
                                    <v-row v-if="this.selected == 'Jenis Penjual'">
                                        <v-col md="4" align="center">
                                            <v-row>
                                                <v-col>
                                                    <v-avatar
                                                     size="80"
                                                    rounded="0"
                                                     >
                                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col>
                                                    <p>Tipe Bodi</p>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col md="4" align="center">
                                            <v-row>
                                                <v-col>
                                                    <v-avatar
                                                     size="80"
                                                    rounded="0"
                                                     >
                                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col>
                                                    <p>Tipe Bodi</p>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col md="4" align="center">
                                            <v-row>
                                                <v-col>
                                                    <v-avatar
                                                     size="80"
                                                    rounded="0"
                                                     >
                                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col>
                                                    <p>Tipe Bodi</p>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col md="4" align="center">
                                            <v-row>
                                                <v-col>
                                                    <v-avatar
                                                     size="80"
                                                    rounded="0"
                                                     >
                                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col>
                                                    <p>Tipe Bodi</p>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col md="4" align="center">
                                            <v-row>
                                                <v-col>
                                                    <v-avatar
                                                     size="80"
                                                    rounded="0"
                                                     >
                                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col>
                                                    <p>Tipe Bodi</p>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col md="4" align="center">
                                            <v-row>
                                                <v-col>
                                                    <v-avatar
                                                     size="80"
                                                    rounded="0"
                                                     >
                                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col>
                                                    <p>Tipe Bodi</p>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col md="4" align="center">
                                            <v-row>
                                                <v-col>
                                                    <v-avatar
                                                     size="80"
                                                    rounded="0"
                                                     >
                                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col>
                                                    <p>Tipe Bodi</p>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col md="4" align="center">
                                            <v-row>
                                                <v-col>
                                                    <v-avatar
                                                     size="80"
                                                    rounded="0"
                                                     >
                                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col>
                                                    <p>Tipe Bodi</p>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                    <v-row v-if="selected == 'Plat Nomor'">
                                        <v-col md="4" align="center">
                                            <v-row>
                                                <v-col>
                                                    <v-avatar
                                                     size="80"
                                                    rounded="0"
                                                     >
                                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col>
                                                    <p>Ganjil</p>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col md="4" align="center">
                                            <v-row>
                                                <v-col>
                                                    <v-avatar
                                                     size="80"
                                                    rounded="0"
                                                     >
                                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col>
                                                    <p>Genap</p>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                    <v-row v-if="item =='Bahan Bakar'">
                                        <v-col md="4" align="center">
                                            <v-row>
                                                <v-col>
                                                    <v-avatar
                                                     size="80"
                                                    rounded="0"
                                                     >
                                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col>
                                                    <p>Bensin</p>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col md="4" align="center">
                                            <v-row>
                                                <v-col>
                                                    <v-avatar
                                                     size="80"
                                                    rounded="0"
                                                     >
                                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col>
                                                    <p>Diesel</p>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col md="4" align="center">
                                            <v-row>
                                                <v-col>
                                                    <v-avatar
                                                     size="80"
                                                    rounded="0"
                                                     >
                                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col>
                                                    <p>Elektrik</p>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col md="4" align="center">
                                            <v-row>
                                                <v-col>
                                                    <v-avatar
                                                     size="80"
                                                    rounded="0"
                                                     >
                                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                    </v-avatar>
                                                </v-col>
                                                <v-col>
                                                    <p>Hybrid</p>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            <v-row style="margin-top:25px">
                <v-col md="12" align="center">
                    <BaseButton>Menampilan Mobil Impian</BaseButton>
                </v-col>
            </v-row>
            </v-row>
        </v-container>
    </BaseDialog>
</template>

<script>
export default {
    data: function(){
        return{
            show: false,
            platnomor: false,
            bahanbakar: false,
            test: ['Jenis Penjual', 'Promo', 'Jarak Tempuh', 'Bahan Bakar', 'Tipe Bodi', 'Warna', 'Jumlah Kursi', 'Plat Nomor']
        }
    },
        methods:{
            handleSelectItem(item){
       this.selected = item;
       console.log(this.selected)
     }
        }
}
</script>

<style>
    .scrollable{
  overflow-y: auto;
  max-height: 380px;
}
</style>