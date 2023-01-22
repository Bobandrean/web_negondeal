<template>
<<<<<<< HEAD
    <!--Modal-->
    <DialogDetailPesan ref="pesandetail"></DialogDetailPesan>
    <!--EndModal-->
    <v-container>
        <v-row>
            <v-col md="8">
                <v-row no-gutters>
                    <v-col>
                    <v-carousel hide-delimiters>
                        <v-carousel-item
                        v-for="photo in getDetailUnit.photo_selling"
                        :key="photo.id"
                        eager
                        >
                            <v-img :src="photo.path" height="100%" eager/>
                        </v-carousel-item>
                    </v-carousel>
                    <v-slide-group
                    v-model="model"
                    class="pa-4 align-center" no-gutters
                    selected-class="bg-success"
                    show-arrows
                    >
                        <v-slide-group-item
                        v-for="photo in getDetailUnit.photo_selling"
                        :key="photo.id" v-slot="{ toggle }"
                         >
                         <v-img :src="photo.path"  @click="toggle" height="100px" width="100px" eager/>
                        </v-slide-group-item>
                    </v-slide-group>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                     <v-card
    class="mx-auto card1"
    width="800"
    height="300"
  >
            <v-row>
                <v-col md="2" align="center" @mouseover="showByIndex = i" @mouseout="showByIndex = null">
                    <p class="loui-1">Transmisi<br> {{getDetailUnit.transmisi}}</p>
                    <div v-show="showByIndex === i" >
                        <p>Transmisi Hover</p>
                    </div>
                </v-col>

                <v-col md="2">
                    <p class="loui-1">Bahan Bakar<br> {{getDetailUnit.bahan_bakar}}</p>
                </v-col>
                <v-col md="2">
                    <p class="loui-1">Jarak Tempuh<br> {{getDetailUnit.odometer}}KM</p>
                </v-col>
                <v-col md="2">
                    <p class="loui-1">Warna<br> {{getDetailUnit.warna}}</p>
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
                </v-row>
                <v-row>
                    <v-col>
                        <v-card
    class="mx-auto card1"
    width="800"
    height="400"
  >
            <v-row>
                <v-col>
                <p class="mt-5 ml-4">Laporan Inspeksi (170 Titik)</p>
                </v-col>
            </v-row>
            <v-row>
                <v-card
    class="mx-auto ma-5"
    width="600"
    height="200"
    style="border-style: thin; border-color:black; border-width: 2px"
  >             <v-row justify="center">
                <v-col md="4" align=center>
                    <p style="margin-top:50px; font-size:20px">Kualitas Inspeksi Nego N Deal</p>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col md="8">
                    <v-expansion-panels max-width="100" class="mt-4 scrollable">
      <v-expansion-panel
        v-for="i in 3"
        :key="i"
        title="Item"
        text="Lorem ipsum dolor sit amet,."
      ></v-expansion-panel>
    </v-expansion-panels>
                </v-col>
                 </v-row>
                </v-card>
            </v-row>
            <v-row style="margin-top:30px">
                <v-col md="6" align="center">
                    <BaseButton to="/inspeksi">Lihat Selengkapnya</BaseButton>
                </v-col>
                <v-col md="6" align="center">
                    <BaseButton @click="openDetail">Download Laporan Inspeksi</BaseButton>
                </v-col>
            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card
    class="mx-auto card1"
    width="800"
    height="600"
  >
            <v-row>
                <v-col>
                <p class="mt-3 ml-3">Simulasi Kredit</p>
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
                            <BaseDropDown></BaseDropDown>
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
                            <BaseDropDown></BaseDropDown>
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
            </v-col>
            <v-col md="4">
                <v-row>
                    <v-col>
                        <v-card
    class="mx-auto card1"
    width="500"
    height="400"
  >
    <v-card-text>
      <div>{{getDetailUnit.nama}}</div>
      <p class="text--primary rounded-0">
        NND Showroom
      </p>
      <v-row class="mt-2 mb-1">
        <v-col md="3" align="center">
            <v-chip>{{getDetailUnit.tahun}}</v-chip>
        </v-col>
        <v-col md="4" align="center">
            <v-chip>{{getDetailUnit.odometer}}KM</v-chip>
        </v-col>
        <v-col md="3" align="center">
            <v-chip>Sunroof</v-chip>
        </v-col>
      </v-row>
      <v-card class="mx-auto"
    max-width="474"
    style="border-style: thin; border-color:black; border-width: 2px"> 
      <v-container>
        <v-row>
            <v-col md="9">
                <p>Rp.{{getDetailUnit.harga}},</p>
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
=======
  <!--Modal-->
  <DialogDetailPesan ref="pesandetail"></DialogDetailPesan>
  <!--EndModal-->
  <v-container>
    <v-row>
      <v-col md="8">
        <v-row no-gutters>
          <v-col>
            <v-carousel v-model="detailActive" hide-delimiters>
              <v-carousel-item v-for="photo in getDetailUnit.photo_selling" :key="photo.id" eager>
                <v-img :src="photo.path" height="100%" eager />
              </v-carousel-item>
            </v-carousel>
            <v-slide-group class="pa-4" show-arrows center-active selected-class="bg-success">
              <v-slide-group-item v-for="(photo, index) in getDetailUnit.photo_selling" :key="photo.id">
                <v-img @click="selectedPhoto(index)" :src="photo.path" height="100px" width="100px" />
              </v-slide-group-item>
            </v-slide-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="mx-auto card1" height="300">
              <v-row>
                <v-col md="2" align="center">
                  <p class="loui-1">
                    Transmisi<br />
                    {{ getDetailUnit.transmisi }}
                  </p>
                </v-col>
                <v-col md="2">
                  <p class="loui-1">
                    Bahan Bakar<br />
                    {{ getDetailUnit.bahan_bakar }}
                  </p>
                </v-col>
                <v-col md="2">
                  <p class="loui-1">
                    Jarak Tempuh<br />
                    {{ getDetailUnit.odometer }}KM
                  </p>
                </v-col>
                <v-col md="2">
                  <p class="loui-1">
                    Warna<br />
                    {{ getDetailUnit.warna }}
                  </p>
                </v-col>
                <v-col md="2">
                  <p class="loui-1">STNK pribadi</p>
                </v-col>
                <v-col md="2">
                  <p class="loui-1">Pajak <br />22-10-26</p>
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
        </v-row>
        <v-row>
          <v-col>
            <v-card class="mx-auto card1" height="400">
              <v-row>
                <v-col>
                  <p class="mt-5 ml-4">Laporan Inspeksi (170 Titik)</p>
                </v-col>
              </v-row>
              <v-row>
                <v-card class="mx-auto ma-5" height="200" style="
                      border-style: thin;
                      border-color: black;
                      border-width: 2px;
                    ">
                  <v-row justify="center">
                    <v-col md="4" align="center">
                      <p style="margin-top: 50px; font-size: 20px">
                        Kualitas Inspeksi Nego N Deal
                      </p>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col md="8">
                      <v-expansion-panels max-width="100" class="mt-4 scrollable">
                        <v-expansion-panel v-for="i in 3" :key="i" title="Item"
                          text="Lorem ipsum dolor sit amet,."></v-expansion-panel>
                      </v-expansion-panels>
                    </v-col>
                  </v-row>
                </v-card>
              </v-row>
              <v-row style="margin-top: 30px">
                <v-col md="6" align="center">
                  <BaseButton @click="goToInspeksi(getDetailUnit?.id)">Lihat Selengkapnya</BaseButton>
                </v-col>
                <v-col md="6" align="center">
                  <BaseButton @click="openDetail">Download Laporan Inspeksi</BaseButton>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="mx-auto card1" height="600">
              <v-row>
                <v-col>
                  <p class="mt-3 ml-3">Simulasi Kredit</p>
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
                      <BaseDropDown></BaseDropDown>
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
                      <BaseDropDown></BaseDropDown>
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
                <v-col md="11" align="center">
                  <BaseButton>Ajukan Cicilan Sekarang</BaseButton>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="4">
        <v-row>
          <v-col>
            <v-card class="mx-auto card1 pa-3" height="450">
              <v-card-text>
                <div>{{ getDetailUnit.nama }}</div>
                <p class="text--primary rounded-0">NND Showroom</p>
                <v-row class="mt-2 mb-1">
                  <v-col md="3" align="center">
                    <v-chip>{{ getDetailUnit.tahun }}</v-chip>
                  </v-col>
                  <v-col md="4" align="center">
                    <v-chip>{{ getDetailUnit.odometer }}KM</v-chip>
                  </v-col>
                  <v-col md="3" align="center">
                    <v-chip>Sunroof</v-chip>
                  </v-col>
                </v-row>
                <v-card class="mx-auto" style="
                      border-style: thin;
                      border-color: black;
                      border-width: 2px;
                    ">
                  <v-container>
                    <v-row>
                      <v-col md="9">
                        <p>Rp.{{ getDetailUnit.harga }},</p>
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
          <v-col>
            <v-card class="mx-auto card1" max-width="500" height="500">
              <v-card-text>
                <div>Informasi Penjual</div>
                <p class="text--primary rounded-0">NND Showroom</p>
                <p>Penjual Terverifikasi</p>
                <v-row>
                  <v-col md="4" align="center">
                    <BaseButton @click="openDetail">Test Drive</BaseButton>
                  </v-col>
                  <v-col md="4" align="center">
                    <BaseButton>Hubungi</BaseButton>
                  </v-col>
                  <v-col md="4" align="center">
                    <BaseButton>Deal</BaseButton>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col align="center">
                    <BaseButton>Tampilkan ## Lainnya Dari Penjual Ini</BaseButton>
                  </v-col>
                </v-row>
                <v-row>
                  <p>Alamat</p>
                </v-row>
                <v-row>
                  <p>{{ getDetailUnit.alamat }}</p>
                </v-row>
                <v-row>
                  <p>No Telepon :</p>
                </v-row>
                <v-row>
                  <v-col md="3">
                    <p v-if="show">081xxxxx</p>
                    <p v-if="show1">{{ getDetailUnit.no_hp }}</p>
                  </v-col>
                  <v-col md="3">
                    <button @click="c1()">tampilkan</button>
                  </v-col>
                </v-row>
                <v-row>
                  <NuxtLink to="/detail">Bagaimana Cara membeli di NND Showroom</NuxtLink>
                </v-row>
                <v-row>
                  <p>Testimoni Konsumen Atas Penjual Ini :</p>
                </v-row>
                <v-row>
                  <v-card class="mx-auto" max-width="344" outlined style="background-color: grey">
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="text-overline mb-4">OVERLINE</div>
                        <v-list-item-subtitle>Greyhound divisely hello coldly
                          fonwderfully</v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
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
          <v-col>
            <v-card class="mx-auto card1">
              <v-row>
                <v-col>
                  <p class="mt-4 ml-4">Kenapa Beli di NND ShowRoom ?</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col md="12">
                  <v-card>
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <v-avatar class="ma-3" size="125" rounded="0">
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
      </v-col>
    </v-row>
>>>>>>> d43397357a2282ae2ad0ca2a4ec3f5b20446ba36
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
                    <v-col>
                        <v-card
    class="mx-auto card1"
    max-width="500"
    height="500"
  >
    <v-card-text>
      <div>Informasi Penjual</div>
      <p class="text--primary rounded-0">
        NND Showroom
      </p>
      <p>Penjual Terverifikasi</p>
      <v-row>
        <v-col md="4" align="center">
            <BaseButton @click="openDetail">Test Drive</BaseButton>
        </v-col>
        <v-col md="4" align="center">
            <BaseButton>Hubungi</BaseButton>
        </v-col>
        <v-col md="4" align="center">
            <BaseButton>Deal</BaseButton>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
            <BaseButton>Tampilkan ## Lainnya Dari Penjual Ini</BaseButton>
        </v-col>
      </v-row>
      <v-row><p>Alamat</p></v-row>
      <v-row><p>{{getDetailUnit.alamat}}</p></v-row>
      <v-row><p>No Telepon : </p></v-row>
      <v-row>
        <v-col md="3">
            <p v-if="show">081xxxxx </p> 
            <p v-if="show1">{{getDetailUnit.no_hp}}</p>
        </v-col>
        <v-col md="3">
            <button @click="c1()">tampilkan</button>
        </v-col>
    </v-row>
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
                    <v-col>
                        <v-card
    max-width="500"
    class="mx-auto card1"
  >
             <v-row>
            <v-col>
            <p class="mt-4 ml-4">Kenapa Beli di NND ShowRoom ?</p>
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
<<<<<<< HEAD
    </v-container>
  </template>
  
  <script>
  definePageMeta({
      layout: 'default'
  });
  
  export default {
      data () {
        return {
          show : true,
          show1 : false,
          showByIndex : null,
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
      methods:{
          c1 (event){
              this.show = !this.show
              this.show1 = !this.show1
          }
      }
    }
  </script>
  
  <script setup>
  import { ref } from 'vue'
  import { useCounterStore } from '@/stores/counter'
  import { useUnitStore } from '@/stores/unit'
  import { useRoute } from "vue-router";
  
  const route = useRoute();
  const pesandetail = ref("");
  
  const counterStore = useCounterStore()
  const unitStore = useUnitStore()
  
  const getDetailUnit = computed(() => unitStore.getDetailUnit);
  
  const openDetail = () => {
    pesandetail.value.$refs.pesandetail.open()
};
  onMounted(() => {
      unitStore.fetchDetailUnit(route.params.id)
      console.log(route.params.id)
  })
  
  
  definePageMeta({
    layout: 'default'
  })
  
  const item = [
    {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
    {src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
    {src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
    {src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'},
  ];
  
  </script>
  
  <style scoped>
  .text--primary {
     border-radius: 20px;
     background-color: gray;
     width: 150px;
     text-align: center;
   }
  
   .loui {
     text-align: center;
     margin-bottom: 15%;
     margin-top: 5%
   }
  
   .loui-1 {
     font-size: 13px;
     text-align: center;
     margin-bottom: 15%;
     margin-top: 55%
   }
  
   .loui-2 {
     font-size: 15px;
     text-align: left;
     margin-left: 15%;
   }
  
   .loui-3 {
     font-size: 13px;
     text-align: right;
     margin-right: 20%;
   }
   .card1{
    border-radius: 30px;
  background: white;
  box-shadow: 15px 15px 30px #bebebe,
             -15px -15px 30px #ffffff;
}
.scrollable{
  overflow-y: auto;
}
  </style>
=======
  </v-container>
</template>
  
<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";
import { useUnitStore } from "@/stores/unit";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
definePageMeta({
  layout: "default",
});
const router = useRouter();
const route = useRoute();
const pesandetail = ref("");
const detailActive = ref(0);
const counterStore = useCounterStore();
const unitStore = useUnitStore();
const getDetailUnit = computed(() => unitStore.getDetailUnit);
const openDetail = () => {
  pesandetail.value.$refs.pesandetail.open();
};
onMounted(() => {
  unitStore.fetchDetailUnit(route.params.id);
  console.log(route.params.id);
});
const selectedPhoto = (index) => {
  detailActive.value = index;
};
const goToInspeksi = async (id) => {
    await router.push("/inspeksi/${id}")
    window.location.reload()
};
const item = [
  { src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" },
  { src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg" },
  { src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg" },
  { src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg" },
];
</script>
    
<style scoped>
.text--primary {
  border-radius: 20px;
  background-color: gray;
  width: 150px;
  text-align: center;
}

.loui {
  text-align: center;
  margin-bottom: 15%;
  margin-top: 5%;
}

.loui-1 {
  font-size: 13px;
  text-align: center;
  margin-bottom: 15%;
  margin-top: 55%;
}

.loui-2 {
  font-size: 15px;
  text-align: left;
  margin-left: 15%;
}

.loui-3 {
  font-size: 13px;
  text-align: right;
  margin-right: 20%;
}

.card1 {
  border-radius: 30px;
  background: white;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
}

.scrollable {
  overflow-y: auto;
}
</style>
>>>>>>> d43397357a2282ae2ad0ca2a4ec3f5b20446ba36
