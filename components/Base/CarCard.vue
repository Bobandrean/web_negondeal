<template>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <template v-slot:loader="{ isActive }">
            <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
        </template>

        <v-img @click="handleDetail(items?.id)" cover height="250" :src="items?.unit_photo?.[0]?.path"></v-img>

        <v-card-item>
            
                <v-col md="12" >
                <p style="font-size:17px">{{ items?.nama }}</p>
                </v-col>
                
            
        </v-card-item>

        <div class="px-4">
<<<<<<< HEAD
            <v-chip-group column v-model="selection">
                <v-chip>{{ items?.tahun }}</v-chip>
                <v-chip>{{ items?.transmisi }}</v-chip>
                <v-chip>{{ items?.bahan_bakar }}</v-chip>
                <v-chip>{{ items?.odometer }} KM</v-chip>
                <v-chip>Jakarta</v-chip>
            </v-chip-group>
            <!-- <v-chip-group v-model="selection">
                <v-row>
                    <v-col sm="3" align="center">
                        <v-chip>{{ items?.tahun }}</v-chip>
                    </v-col>
                    <v-col sm="3" align="center">
                        <v-chip>{{ items?.transmisi }}</v-chip>
                    </v-col>
                    <v-col sm="4" align="center">
                        <v-chip>{{ items?.bahan_bakar }}</v-chip>
                    </v-col>
                    <v-col sm="4" align="center">
                        <v-chip style="max-width:350px">{{ items?.odometer }}</v-chip>
                    </v-col>
                    <v-col sm="4" align="center">
                        <v-chip>Jakarta</v-chip>
                    </v-col>
                </v-row>
            </v-chip-group> -->
=======
            <v-card
                class="mx-auto card1"
                width:200
                height="75px"
            >
            <v-row no-gutters>
                <v-col md="5" class="ml-5 mt-3" @mouseover="showByIndex = i" @mouseout="showByIndex = null" style="cursor:pointer">
            <span class="mr-1" style="font-size:16px">NND Cerfified</span>
            <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                 </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col md="12" class="ml-5">
                    <p class="pb-2 cardtext">{{ items?.tahun }} | {{ items?.odometer }} KM | {{ items?.transmisi }} | {{items?.Provinsi}}</p>
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
>>>>>>> d43397357a2282ae2ad0ca2a4ec3f5b20446ba36
        </div>
        <v-card-text>
            <v-row>
<<<<<<< HEAD
                <v-col sm="6">
                    Rp. {{ items?.harga.toLocaleString() }}
                </v-col>
                <v-col sm="6">
                    200.000/Bulan
                </v-col>
=======
>>>>>>> d43397357a2282ae2ad0ca2a4ec3f5b20446ba36
                <v-col sm="12">
                    <p style="font-size:18px">Rp. {{ items?.harga.toLocaleString() }} (Cash)</p>
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
    border-radius: 20px;
  background: white;
}

.boxtext{
    position: absolute;
  left: 145px;
  top: 320px;
  z-index: 1;
}

.cardtext{
    font-size:12px;
}
</style>