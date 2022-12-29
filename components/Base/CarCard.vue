<template>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <template v-slot:loader="{ isActive }">
            <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
        </template>

        <v-img cover height="250"
            src="https://negondeal.oss-ap-southeast-5.aliyuncs.com/2022/09/2022090000000030/IMG_9785.JPG"></v-img>

        <v-card-item>
            <v-card-title>Mobil</v-card-title>

            <v-card-subtitle>
                <span class="mr-1">NND Cerfified</span>

                <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
            </v-card-subtitle>
        </v-card-item>



        <v-divider class="mx-4 mb-1"></v-divider>

        <div class="px-4">
            <v-chip-group v-model="selection">
                <v-row>
                    <v-col sm="4">
                        <v-chip>2018</v-chip>
                    </v-col>
                    <v-col sm="4">
                        <v-chip>Matic</v-chip>
                    </v-col>
                    <v-col sm="4">
                        <v-chip>Bensin</v-chip>
                    </v-col>
                    <v-col sm="4">
                        <v-chip>Jakarta</v-chip>
                    </v-col>
                </v-row>
            </v-chip-group>
        </div>
        <v-card-text>
            <v-row>
                <v-col sm="6">
                    Rp.150.000.000
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

<script>
export default {
    data: () => ({
        loading: false,
        selection: 1,
    }),

    methods: {
        reserve() {
            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },
    },
}
</script>