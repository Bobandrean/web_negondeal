<template>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374" style="cursor:pointer">
        <template v-slot:loader="{ isActive }">
            <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
        </template>

        <v-img @click="handleDetail(items?.id)" cover height="200" :src="items?.unit_photo?.[0]?.path"></v-img>

        <v-card-item>
                <v-col md="12" >
                <p class="car-title">{{ items?.nama }}</p>
                </v-col>
        </v-card-item>
        <v-icon class="icon-card">mdi-heart-outline</v-icon>
        <div class="px-4">
            <v-card
                class="mx-auto card1"
                width:200
                height="75px"
            >
            <v-row no-gutters>
                <v-col md="5" class="ml-5 mt-3" @mouseover="showByIndex = i" @mouseout="showByIndex = null" style="cursor:pointer">
            <span class="mr-1" style="font-size:14px">NND Cerfified</span>
            <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                 </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col md="12" class="ml-3">
                    <p class="pb-2"><span class="car-detail">{{ items?.tahun }} | {{ items?.odometer }} KM | {{ items?.transmisi }} | {{items?.Provinsi}}</span></p>
                </v-col>
            </v-row>
            </v-card>
            <div class="boxtext" v-show="showByIndex === i">
                <v-card
                    class="mx-auto"
                    max-width="350px"
                    height="55px"
                    >
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </v-card>
            </div>
        </div>
        <v-card-text>
            <v-row>
                <v-col sm="12">
                    <span class="currency-text">Rp.</span> <span class="car-text">{{ items?.harga.toLocaleString() }} (Cash) </span>
                </v-col>
                <v-col md="6">
                    Rp.135.000.000
                </v-col>
                <v-col md="6" align="center">
                    200.000/Bulan
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            showByIndex: null
        }
    },
}
</script>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from "vue-router";

const router = useRouter();

const handleDetail = async (id) => {
    await router.push(`/detail/${id}`);
    window.location.reload()
};

defineProps({
    items: {
        type: Object,
        default: () => { },
    },
})
</script>

<style>
   .card1{
    -webkit-box-align: center;
    align-items: center;
    border: 0.5px solid rgb(212, 212, 212);
    border-radius: 12px;
    background-color: rgba(247, 247, 247, 0.5);
}

.boxtext{
    position: absolute;
  left: 145px;
  top: 320px;
  z-index: 1;
}

.icon-card{
    position:absolute;
    z-index: 1;
    top: 200px;
    right: 0;
}

.cardtext{
    font-size:12px;
}

.currency-text{
    color: #e77200;
    font-family: Poppins;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700 !important;
}

.car-text{
    color: #e77200;
    font-size: 24px;
    font-family: Poppins;
    font-weight: 700 !important;
}

.car-title{
    font-family: Poppins;
    line-height: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    color: rgb(59, 59, 59);
    font-size: 17px;
    font-weight: 600 !important;
}

.car-detail{
    font-family: Poppins;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.5;
    color: rgb(54, 54, 54);
}
</style>