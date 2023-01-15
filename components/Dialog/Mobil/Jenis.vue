<template>
    <BaseDialog ref="jenis" class-name="px-5 py-8" :max-width="800">
        <v-container>
            <form @submit.prevent="handleSubmit(SelectedValue.bodi)">
            <v-row>
                <v-col align="center">
                    <p>Silahkan Pilih Filter</p>
                </v-col>
            </v-row>
            <v-row>
                <v-card class="mx-auto" display="flex" width="700" height="400"
                    style="border-style: thin; border-color:black; border-width: 1px">
                    <v-container>
                        <v-row v-model="selected">
                            <v-col md="4">
                                <v-row>
                                    <v-col v-for="item in test" :value="item" :key="item" md="12" align="center"
                                        style="cursor: pointer" @click="handleSelectItem(item)">
                                        <p>{{ item }}</p>
                                    </v-col>

                                </v-row>
                            </v-col>
                            <v-divider vertical></v-divider>
                            <v-col md="8" class="scrollable">
                                <v-row v-if="SelectedValue.nama == 'Tipe Bodi'">
                                    <v-col v-for="list in bodi"  :value="list" :key="list" style="cursor: pointer" @click="handleSelectTipe(list)" md="4" align="center">
                                        <v-row >
                                            <v-col>
                                                <v-avatar size="80" rounded="0">
                                                    <v-img
                                                        src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                </v-avatar>
                                            </v-col>
                                            <v-col>
                                                <p>{{ list }}</p>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row v-if="SelectedValue.nama == 'Plat Nomor'">
                                    <v-col v-for="list in plat_nomor"  :value="list" :key="list" style="cursor: pointer" @click="handleSelectTipe(list)" md="4" align="center">
                                        <v-row >
                                            <v-col>
                                                <v-avatar size="80" rounded="0">
                                                    <v-img
                                                        src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                </v-avatar>
                                            </v-col>
                                            <v-col>
                                                <p>{{ list }}</p>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row v-if="SelectedValue.nama == 'Bahan Bakar'">
                                    <v-col v-for="list in bahanbakar"  :value="list" :key="list" style="cursor: pointer" @click="handleSelectTipe(list)" md="4" align="center">
                                        <v-row >
                                            <v-col>
                                                <v-avatar size="80" rounded="0">
                                                    <v-img
                                                        src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                </v-avatar>
                                            </v-col>
                                            <v-col>
                                                <p>{{ list }}</p>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row v-if="SelectedValue.nama == 'Transmisi'">
                                    <v-col v-for="list in transmisi"  :value="list" :key="list" style="cursor: pointer" @click="handleSelectTipe(list)" md="4" align="center">
                                        <v-row >
                                            <v-col>
                                                <v-avatar size="80" rounded="0">
                                                    <v-img
                                                        src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                </v-avatar>
                                            </v-col>
                                            <v-col>
                                                <p>{{ list }}</p>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row v-if="SelectedValue.nama == 'Warna'">
                                    <v-col v-for="list in warna"  :value="list" :key="list" style="cursor: pointer" @click="handleSelectTipe(list)" md="4" align="center">
                                        <v-row >
                                            <v-col>
                                                <v-avatar size="80" rounded="0">
                                                    <v-img
                                                        src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                </v-avatar>
                                            </v-col>
                                            <v-col>
                                                <p>{{ list }}</p>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row v-if="SelectedValue.nama == 'Jumlah Kursi'">
                                    <v-col v-for="list in tempat_duduk"  :value="list" :key="list" style="cursor: pointer" @click="handleSelectTipe(list)" md="4" align="center">
                                        <v-row >
                                            <v-col md="12">
                                                <v-avatar size="80" rounded="0">
                                                    <v-img
                                                        src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                                </v-avatar>
                                            </v-col>
                                            <v-col>
                                                <p>{{ list }}</p>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
                <v-row style="margin-top:25px">
                    <v-col md="12" align="center">
                        <BaseButton type="submit">Menampilan Mobil Impian</BaseButton>
                    </v-col>
                </v-row>
            </v-row>
        </form>
        </v-container>
    </BaseDialog>
</template>

<script>
import { useUnitStore } from '@/stores/unit'
import { defineEmits } from 'vue'
export default {
    data: function () {
        return {
            test: ['Jenis Penjual', 'Promo', 'Jarak Tempuh', 'Bahan Bakar', 'Tipe Bodi', 'Warna', 'Jumlah Kursi', 'Plat Nomor'],
            bodi : ['Elektrik', 'Hatchback', 'Hybrid', 'MPV', 'Sedan', 'SUV', 'Wagon', 'Truck'],
            plat_nomor : ['Ganjil', 'Genap'],
            transmisi : ['AT', 'MT'],
            bahanbakar : ['Bensin', 'Diesel', 'Elektrik', 'Hybrid'],
            warna : ['Hitam', 'Putih', 'Silver', 'Abu Abu', 'Biru', 'Coklat', 'Merah', 'Hijau', 'Oranye', 'Lainnya'],
            tempat_duduk: ['2', '5', '7']
        }
    },
    setup(context) {
        const router = useRouter()
        const unitStore = useUnitStore()

        const SelectedValue = reactive({
            nama: '',
            bodi: ''

        })

        const handleSelectItem = (item) => {
            SelectedValue.nama = item

            console.log(SelectedValue)
        }

        const handleSelectTipe = (list) => {
            SelectedValue.bodi = list
            this.active = !this.active
            console.log(SelectedValue.bodi)
        }

        const handleSubmit = (val) => {
            const tipe_body = [val]

            context.emit('databody', tipe_body)
        };


        return {
            SelectedValue,
            handleSelectItem,
            handleSelectTipe,
            handleSubmit,
            active: false
        }
    }
}

</script>
<style>
.scrollable {
    overflow-y: auto;
    max-height: 400px;
}

.active {
    background-color: bisque;
}
</style>