<template>
    <v-container>
        <v-row>
            <v-col class="md-7">
                <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
            </v-col>
            <v-col class="md-5v">
                <v-card
    class="mx-auto"
    max-width="500"
    height="400"
    style="border-style: thin; border-color:black; border-width: 3px"
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
            <v-col md="7">
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
<v-col md="5">
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
            <button>Test Drive</button>
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
      <v-row><button>Bagaimana Cara membeli di NND Showroom</button></v-row>
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
            <button>Lihat Testimoni Lainnya</button>
        </v-col>
        <v-col md="6">
            <button>Lihat Profil Penjual</button>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</v-col>
        </v-row>
        <v-row>
            <v-col md="7">
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
    height="250"
    style="border-style: thin; border-color:black; border-width: 2px"
  >             <v-row justify="center">
                <v-col md="4">
                    <p>Kualitas Inspeksi Nego N Deal</p>
                </v-col>
                <v-col md="8">
                    <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
      >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
                </v-col>
                 </v-row>
                </v-card>
            </v-row>

</v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
definePageMeta({
    layout: 'custom'
})
export default {
    data () {
      return {
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
  }
</script>

<style>
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
</style>