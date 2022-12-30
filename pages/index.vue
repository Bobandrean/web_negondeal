<template>
    <BaseCard>
        <v-row>
            <v-col lg="12">

                <BaseInput @keyup="getData" v-model="search" placeholder="Cari Mobil Anda (Merek/Jenis)" type="text">
                </BaseInput>

            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <BaseButton @click="showModal = true">Modal</BaseButton>   
            </v-col>
            <v-col>
                <BaseButton @click="showHarga = true">Harga</BaseButton>

            </v-col>
            <v-col>
                <BaseButton>Tahun</BaseButton>
            </v-col>
            <v-col>
                <BaseDropDown>Lokasi</BaseDropDown>
            </v-col>
            <v-col>
                ModalFilter
            </v-col>
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
    <v-divider class="ma-6">

    </v-divider>
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
    <v-divider class="ma-6">

    </v-divider>
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
    <BaseCard>
        <v-row>

            <v-col md="12">
                <h2>Belum menemukan yang Anda cari?</h2>
            </v-col>
            <v-col md="12">
                Ketik mobil yang Anda cari di kotak berikut, Kami akan menghubungi Anda apabila stock telah tersedia
            </v-col>
        </v-row>
        <v-row>
            <v-col md="6">
                <BaseInput></BaseInput>
            </v-col>
            <v-col md="6">
                <BaseInput></BaseInput>
            </v-col>
            <v-col md="12">
                eButton>
            </v-col>
        </v-row>
    </BaseCard>
    <Modaltest v-show ="showModal"/>
    <Modal v-show ="showHarga"/>
</template>

<script>
import Modaltest from '@/components/Dialog/Modaltest.vue'
import Modal from '@/components/Dialog/Modal.vue'
import { ref } from 'vue'
definePageMeta({
    layout: 'default'
})


export default {
    data() {
        return {
            showModal: false,
            showHarga: false,
        }
    },
    components: {
        Modaltest,
        Modal
    },
}

</script>

