<template>


    <!-- Modal -->
    <DialogFilterLocation ref="test"></DialogFilterLocation>
    <!-- End Modal -->

    <BaseCard>
        <v-row>
            <v-col lg="12">
                <BaseInput @keyup="getData" v-model="search" placeholder="Cari Mobil Anda (Merek/Jenis)" type="text">
                </BaseInput>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <BaseButton @click="openLogin">Open</BaseButton>
            </v-col>
            <v-col>
                <BaseButton @click="openHarga">Harga</BaseButton>
            </v-col>
            <v-col>
                <BaseButton @click="openTahun">Tahun</BaseButton>
            </v-col>
            <v-col>
                <BaseDropDown :items="lokasi">Lokasi</BaseDropDown>
            </v-col>
            <v-col> ModalFilter </v-col>
            <v-col>
                <BaseButton>Reset filter</BaseButton>
            </v-col>
        </v-row>
    </BaseCard>
    <v-row>
        <v-col>
            <p>Menampilkan 471 Mobil</p>
            <BaseDropDown color="secondary"></BaseDropDown>
        </v-col>
    </v-row>
    <v-divider class="ma-6"> </v-divider>
    <v-row>
        <h2>Highlight</h2>
    </v-row>
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
    <v-divider class="ma-6"> </v-divider>
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
    <v-row>
        <BaseCard width="1000">
            <v-row>
                <v-col md="12">
                    <h2>Belum menemukan yang Anda cari?</h2>
                </v-col>
                <v-col md="12">
                    Ketik mobil yang Anda cari di kotak berikut, Kami akan menghubungi
                    Anda apabila stock telah tersedia
                </v-col>
            </v-row>
            <v-row>
                <v-col md="6">
                    <BaseInput placeholder=""></BaseInput>
                </v-col>
                <v-col md="6">
                    <BaseInput></BaseInput>
                </v-col>
                <v-col md="12">
                    <BaseButton>Kirim</BaseButton>
                </v-col>
            </v-row>
        </BaseCard>
    </v-row>
</template>

<script setup>
definePageMeta({
    layout: "default",
});

const test = ref("");

const openModal = () => {
    test.value.$refs.test.open()
};

const openHarga = () => {
    test.value.$refs.harga.open()
};

const openTahun = () => {
    test.value.$refs.tahun.open()
};

const openLokasi = () => {
    test.value.$refs.lokasi.open()
};

const openDaftar = () => {
    test.value.$refs.daftar.open()
};

const openLogin = () => {
    test.value.$refs.login.open()
};

const lokasi = [
    { text: 'Semua Lokasi', value: 'all_location' },
    { text: 'Pilih Lokasi', value: 'pick_location' },
];

</script>
