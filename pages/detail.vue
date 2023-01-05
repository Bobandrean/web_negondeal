<template>
    <v-container>
        <v-row>
            <v-col class="md-7">
                <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      eager
    >
    <v-img :src="item.src" height="100%" eager/>
</v-carousel-item>
  </v-carousel>
            </v-col>
            <v-col class="md-5">
                <v-card
    class="mx-auto card1"
    max-width="500"
    height="400"
  >
    <v-card-text>
      <div>Nama Mobil Yang Di Dapat</div>
      <p class="text--primary rounded-0">
        NND Showroom
      </p>
      <v-row>
        <v-col md="3">
            <p>2018</p>
        </v-col>
        <v-col md="4">
            <p>20.000 km</p>
        </v-col>
        <v-col md="3">
            <p>Sunroof</p>
        </v-col>
      </v-row>
      <v-card class="mx-auto"
    max-width="474"
    style="border-style: thin; border-color:black; border-width: 2px"> 
      <v-container>
        <v-row>
            <v-col md="9">
                <p>Rp. XXXXXX ,</p>
            </v-col>
            <v-col md="3">
                <p>25% off</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <p>DP : Rp.xxxxxxxx Tenor : x Bulan</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="8">
                <p>Harga Cicilan : Rp.xxxxxxxxx / Bulan.</p>
            </v-col>
            <v-col md="4">
                <button>Simulasi Cicilan</button>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="8">
                <p>Promo Desember 25% by BCA</p>
            </v-col>
            <v-col md="4">
                <button>Lihat detail promo ></button>
            </v-col>
        </v-row>
      </v-container>
      </v-card>
    </v-card-text>
    <v-row>
        <v-col md="4">
            <p class="loui">Favorit</p>
        </v-col>
        <v-col md="4">
            <p class="loui">Bagikan</p>
        </v-col>
        <v-col md="4">
            <p class="loui">Bandingkan</p>
        </v-col>
    </v-row>
  </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="6">
                <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 15"
        :key="n"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-card
          color="grey-lighten-1"
          :class="['ma-4', selectedClass]"
          height="200"
          width="100"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                size="48"
                icon="mdi-close-circle-outline"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="6">
            <v-card
    class="mx-auto"
    width="600"
    height="300"
    style="border-style: thin; border-color:black; border-width: 1px"
  >
            <v-row>
                <v-col md="2">
                    <p class="loui-1">Transmisi Manual</p>
                </v-col>
                <v-col md="2">
                    <p class="loui-1">Bahan Bakar Bensin</p>
                </v-col>
                <v-col md="2">
                    <p class="loui-1">Jarak Tempuh 20.000km</p>
                </v-col>
                <v-col md="2">
                    <p class="loui-1">Warna Putih</p>
                </v-col>
                <v-col md="2">
                    <p class="loui-1">STNK pribadi</p>
                </v-col>
                <v-col md="2">
                    <p class="loui-1">Pajak <br>22-10-26</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="6">
                    <v-row>
                    <v-col md="6">
                        <p class="loui-2">Kunci Cadangan</p>
                    </v-col>
                    <v-col md="6">
                        <p class="loui-3">Ada</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <p class="loui-2">BPKB</p>
                    </v-col>
                    <v-col md="6">
                        <p class="loui-3">Ada</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <p class="loui-2">Faktur</p>
                    </v-col>
                    <v-col md="6">
                        <p class="loui-3">Ada</p>
                    </v-col>
                </v-row>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col md="6">
                    <v-row>
                    <v-col md="6">
                        <p class="loui-2">NIK</p>
                    </v-col>
                    <v-col md="6">
                        <p class="loui-3">Ada</p>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="6">
                        <p class="loui-2">Kunci Cadangan</p>
                    </v-col>
                    <v-col md="6">
                        <p class="loui-3">Ada</p>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="6">
                        <p class="loui-2">Kunci Cadangan</p>
                    </v-col>
                    <v-col md="6">
                        <p class="loui-3">Ada</p>
                    </v-col>
                    </v-row>
                </v-col>
            </v-row>
</v-card>
</v-col>
<v-col md="6">
    <v-card
    class="mx-auto"
    max-width="500"
    height="400"
    style="border-style: thin; border-color:black; border-width: 1px"
  >
    <v-card-text>
      <div>Informasi Penjual</div>
      <p class="text--primary rounded-0">
        NND Showroom
      </p>
      <p>Penjual Terverifikasi</p>
      <v-row>
        <v-col md="4" align="center">
            <BaseButton to="/testdrive">Test Drive</BaseButton>
        </v-col>
        <v-col md="4" align="center">
            <button>Hubungi</button>
        </v-col>
        <v-col md="4" align="center">
            <button>Deal</button>
        </v-col>
      </v-row>
      <v-row>
        <button>Tampilkan ### mobil lainnya dari penjual ini</button>
      </v-row>
      <v-row><p>Alamat</p></v-row>
      <v-row><p>Lorem Ipsum, Lorem Ipsum</p></v-row>
      <v-row><p>No Telepon : </p></v-row>
      <v-row><p>081xxxxx </p> <button>tampilkan</button></v-row>
      <v-row><NuxtLink to="/detail">Bagaimana Cara membeli di NND Showroom</NuxtLink></v-row>
      <v-row><p>Testimoni Konsumen Atas Penjual Ini :</p></v-row>
      <v-row>
        <v-card
    class="mx-auto"
    max-width="344"
    outlined
    style="background-color : grey"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          OVERLINE
        </div>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>
  </v-card>
      </v-row>
      <v-row>
        <v-col md="6">
            <NuxtLink to="/detail">Lihat Testimoni Lainnya</NuxtLink>
        </v-col>
        <v-col md="6">
            <NuxtLink to="/detail">Lihat Profil Penjual</NuxtLink>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</v-col>
        </v-row>
        <v-row>
            <v-col md="6">
                <v-card
    class="mx-auto"
    width="600"
    height="300"
    style="border-style: thin; border-color:black; border-width: 2px"
  >
            <v-row>
                <v-col>
                <p>Laporan Inspeksi (170 Titik)</p>
                </v-col>
            </v-row>
            <v-row>
                <v-card
    class="mx-auto"
    width="600"
    height="180"
    style="border-style: thin; border-color:black; border-width: 2px"
  >             <v-row justify="center">
                <v-col md="4">
                    <p>Kualitas Inspeksi Nego N Deal</p>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col md="8">
                    <v-expansion-panels max-width="100">
      <v-expansion-panel
        v-for="i in 3"
        :key="i"
        title="Item"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></v-expansion-panel>
    </v-expansion-panels>
                </v-col>
                 </v-row>
                </v-card>
            </v-row>
            <v-row>
                <v-col md="6">
                    <BaseButton to="/inspeksi">Lihat Selengkapnya</BaseButton>
                </v-col>
                <v-col md="6">
                    <BaseButton @click="showModalDetail = true">Download Laporan Inspeksi</BaseButton>
                </v-col>
            </v-row>
</v-card>
            </v-col>
            <v-col md="6">
                <v-card
    max-width="400"
    class="mx-auto"
    variant="outlined"
  >
             <v-row>
            <v-col>
            <p>Kenapa Beli di NND ShowRoom ?</p>
            </v-col>
            </v-row>
            <v-row>
                <v-col md="12">
                <v-card
          >
            <div class="d-flex flex-no-wrap justify-space-between">
                <v-avatar
                class="ma-3"
                size="125"
                rounded="0"
              >
                <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
              </v-avatar>
              <div>
                <v-card-title class="text-h5">
                  Halcyon Days
                </v-card-title>

                <v-card-subtitle>Ellie Goulding</v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-col>
        </v-row>
          </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="6">
                <v-card
    class="mx-auto"
    width="800"
    height="550"
    style="border-style: thin; border-color:black; border-width: 2px"
  >
            <v-row>
                <v-col>
                <p>Simulasi Kredit</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="4">
                    <v-row justify="center">
                        <v-col md="12" align="right">
                            <p>Leasing Partner</p>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col md="12" align="right">
                            <p>Dropdown</p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col md="8">
                    <v-row justify="center">
                        <v-col md="4" align="left">
                            <p>Tenor Pinjaman</p>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col md="4">
                            <p>Dropdown</p>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col md="4">
                            <p>Uang Muka</p>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col md="4">
                            <v-text-field></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col md="5">
                            <p>Estimasi Total Uang Muka</p>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col md="4">
                            <p>Rp xxxxx</p>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col md="5">
                            <p>Estimasi Cicilan Per Bulan</p>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col md="4">
                            <p>Rp xxxxx / bulan</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="11" align="center"><BaseButton>Ajukan Cicilan Sekarang</BaseButton></v-col>
            </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row><p>Mobil Lain Dari Penjual Ini</p></v-row>
        <v-row>
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
    <v-row><p>Mobil Lain Yang Mungkin Anda Suka</p></v-row>
        <v-row>
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
    <Modaldetail v-show="showModalDetail"/>
    </v-container>
</template>

<script>
import Modaldetail from '@/components/Dialog/Modaldetail.vue'
import { ref } from 'vue'
definePageMeta({
    layout: 'default'
})
export default {
    data () {
      return {
        showModalDetail : false,
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
    components: {
        Modaldetail
    },
  }
</script>

<style scoped> 

.text--primary{
    border-radius: 20px;
    background-color: gray;
    width:150px;
    text-align: center;
}
.loui{
    text-align: center;
    margin-bottom: 15%;
    margin-top : 5%
}
.loui-1{
    font-size: 13px;
    text-align: center;
    margin-bottom: 15%;
    margin-top : 55%
}
.loui-2{
    font-size: 15px;
    text-align: left;
    margin-left: 15%;
}
.loui-3{
    font-size: 13px;
    text-align: right;
}
.card1{
    border-radius: 30px;
  background: white;
  box-shadow: 15px 15px 30px #bebebe,
             -15px -15px 30px #ffffff;
}
</style>