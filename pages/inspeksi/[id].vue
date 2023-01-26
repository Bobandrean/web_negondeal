<template>
    <v-container>
        <v-row no-gutters>
            <v-col md="12" align="center">
                <p>Verified By Nego N Deal Car Center</p>
            </v-col>
            <v-col md="12" align="center">
                <p>Mekanik Berkualitas</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="12" align="center">
                <v-card
    class="mx-auto rounded-lg"
    width="600"
    height="370"
    style="border-style: thin; border-width: 1px"
  >
            <v-row no-gutters>
                <v-col md="6">
                    <p class="loui4" style="margin-top:5%">Laporan Inspeksi {{ date }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col md="6">
                    <p class="loui4">{{ getDetailUnit.nama }}</p>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-avatar
                class="ma-3"
                size="125"
                rounded="0"
              >
                <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
              </v-avatar>
            </v-row>
            <v-row>
                <v-col md="6">
                    <v-row>
                    <v-col md="6">
                        <p class="loui4">Nomor Rangka</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <p class="loui4">Nomor Mesin</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <p class="loui4">Chasis</p>
                    </v-col>
                </v-row>
                </v-col>
                <v-col md="6">
                    <v-row>
                    <v-col md="11">
                        <p class="loui2">Sesuai Dokumen</p>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="11">
                        <p class="loui2">Sesuai Dokumen</p>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="11">
                        <p class="loui2">Normal</p>
                    </v-col>
                    </v-row>
                </v-col>
            </v-row>
</v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="12" align="center">
                <v-card
    class="mx-auto rounded-lg"
    width="600"
    height="290"
    style="border-style: thin; border-width: 1px"
  >
            <v-row no-gutters>
                <v-col md="6">
                    <p class="loui4" style="margin-top:5%">Tes Jalan</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="6">
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Akselerasi Mesin</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Engine Starting</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Racksteer</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Sistem Pengereman</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Bunyi Perpindahan Transmisi</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col md="6">
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Engine Idling</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Suara Mesin</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">ABS Sensor</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Suara Kaki Kaki</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Sistem Kopling</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                </v-col>
            </v-row>
</v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="12" align="center">
                <v-card
    class="mx-auto rounded-lg"
    width="600"
    style="border-style: thin; border-width: 1px"
  >
            <v-row no-gutters>
                <v-col md="6">
                    <p class="loui4" style="margin-top:5%; font-weight: bold;">Eksterior</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="6">
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Bumper Depan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Fender Depan Kanan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Fender Belakang Kanan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Pintu Kanan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Pintu Belakang</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Grill Depan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Chasis</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">No. Rangka</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Tabrak Major</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Kaca Belakang</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Kaca Kanan Belakang</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Kaca Kiri Belakang</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Spion Kiri</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Wiper Belakang</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Spion Elektrik Kiri</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Lampu Depan Kanan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Lampu Belakang Kanan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Lampu Sein</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Lampu Kabut</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Ban Depan Kanan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Ban Belakang Kanan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Velg Depan Kanan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Velg Belakang Kanan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Ban Serep</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col md="6">
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Bumper Belakang</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Fender Depan Kiri</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Fender Belakang Kiri</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Pintu Kiri</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Keadaan Banjir</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Kap Mesin</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Atap Mobil</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">No. Mesin</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Kaca Depan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Kaca Kanan Depan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Kaca Kiri Depan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Spion Kanan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Wiper Kanan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Spion Elektrik Kanan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Lampu Otomatis/Dim</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Lampu Depan Kiri</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Lampu Belakang Kiri</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Lampu Hazard</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Lampu Mundur</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Ban Depan Kiri</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Ban Belakang Kiri</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Velg Depan Kiri</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Velg Belakang Kiri</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Toolkit</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>

                    </v-row>
                </v-col>
            </v-row>
</v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="12" align="center">
                <v-card
    class="mx-auto rounded-lg"
    width="600"
    style="border-style: thin; border-width: 1px"
  >
            <v-row no-gutters>
                <v-col md="6">
                    <p class="loui4" style="margin-top:5%; font-weight: bold;">Interior</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="6">
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Antena</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Pemutar Audio</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Speaker</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Power Window Depan Kanan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Power Window Belakang Kanan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Remote Kunci</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Sentral Lock</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Dashboard</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Knob Transmisi</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Jok Depan Kanan</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Jok Baris 2</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Laci Dashboard</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Lighter</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Cruise Control</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Klakson</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Lampu Indikator</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Paddle Shift</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Power Steering</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Spion Tengah</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Tuas Sein</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Sistem Pendingin</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Sabuk Pengaman</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Convertible Top</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col md="6">
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Kamera Mundur</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Alarm</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Child Lock</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Power Window Depan Kiri</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="9">
                        <p class="loui4">Power Window Belakang Kiri</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Remote Power Back Door</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Tombol Start Engine</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Steer</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Door Trim</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Jok Depan Kiri</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Jok Baris 3</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Plafond</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Elektrik Seat</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Sensor Parkir</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Kunci Steer</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Navigasi</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Pedal</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Speedometer</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Tuas Wiper</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Konsol Tengah</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Tombol AC</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Sensor Sabuk Pengaman</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    <v-col md="9">
                        <p class="loui4">Sunroof/Moonroof</p>
                    </v-col>
                    <v-col md="3">
                        <i class="fa-regular fa-circle-check"></i>
                    </v-col>
                    </v-row>
                </v-col>
            </v-row>
</v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import '@fortawesome/fontawesome-free/css/all.css'
import { ref } from 'vue'
import { useCounterStore } from "@/stores/counter";
import { useUnitStore } from "@/stores/unit";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
definePageMeta({
    layout: 'custom'
})
const router = useRouter();
const route = useRoute();
const unitStore = useUnitStore();
const getDetailUnit = computed(() => unitStore.getDetailUnit);
onMounted(() => {
  unitStore.fetchDetailUnit(route.params.id);
  console.log(route.params.id);
});


    const date = new Date();

</script>

<style>
.loui4{
    margin-left: 10%;
    font-size: 14px;
    text-align: left;
    font-weight: 200;
}
.loui3{
    margin-right: 5%;
}
.loui2{
    font-size: 14px;
    text-align: right;
    color: green;
}

.fa-regular{
    color : green
}
</style>