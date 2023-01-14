<template>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <template v-slot:loader="{ isActive }">
            <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
        </template>

        <v-img @click="handleDetail(items?.id)" cover height="250" :src="items?.unit_photo?.[0]?.path"></v-img>

        <v-card-item>
            <v-card-title>{{ items?.nama }}</v-card-title>

            <v-card-subtitle>
                <span class="mr-1">NND Cerfified</span>

                <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
            </v-card-subtitle>
        </v-card-item>



        <v-divider class="mx-4 mb-1"></v-divider>

        <div class="px-4">
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
        </div>
        <v-divider></v-divider>
        <v-card-text>
            <v-row>
                <v-col sm="6">
                    Rp. {{ items?.harga.toLocaleString() }}
                </v-col>
                <v-col sm="6">
                    200.000/Bulan
                </v-col>
                <v-col sm="12">
                    Rp.135.000.000(Cash)
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

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