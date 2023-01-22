<template>
    <BaseDialog ref="merk" class-name="px-5 py-8" :max-width="450">
<<<<<<< HEAD
      <v-container>
          <v-row>
              <v-col align="center">
                  <p>All Brand And Model</p>
              </v-col>
          </v-row>
          <v-row>
              <v-card
              class="mx-auto"
              display="flex"
              width="700"
              height="350"
              style="border-style: thin; border-color:black; border-width: 1px">
                  <v-container>
                      <v-row>
                              <v-col md="12">
                                <v-expansion-panels max-width="100" class="mt-4 scrollable">
                                    <v-expansion-panel
                                        v-for="i in 7"
                                        :key="i"
                                        title="Item"
                                        text="Lorem ipsum dolor sit amet,."
                                    >
                                    </v-expansion-panel>
                                </v-expansion-panels>
                              </v-col>
                      </v-row>
                  </v-container>
              </v-card>
          <v-row style="margin-top:25px">
              <v-col md="12" align="center">
                  <BaseButton>Menampilan Mobil Impian</BaseButton>
              </v-col>
          </v-row>
          </v-row>
      </v-container>
  </BaseDialog>
</template>

<script>
export default {
}
</script>

<style>
  .scrollable{
overflow-y: auto;
max-height: 300px;
=======
        <v-container>
            <form @submit.prevent="handleSubmit(SelectedValue)">
                <v-row>
                    <v-col md="12" align="center">
                        <p>All Brand & Model</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="12" align="center">
                    </v-col>
                    <v-col md="12" align="center">
                        <v-select v-model="SelectedValue.merk" @update:model-value="handleMerk()" :items="getMerk" label="Merk" item-title="brand" item-value="brand"></v-select>
                    </v-col>
                    <v-col md="12" align="center">
                        <v-select v-model="SelectedValue.type"  :items="getBrand" label="Brand" item-title="types"
                            item-value="types"></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="12" align="center">

                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="12" align="center">
                        <BaseButton type="submit">Menampilkan Mobil Impian</BaseButton>
                    </v-col>
                </v-row>
            </form>
        </v-container>
    </BaseDialog>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { useMerkStore } from '@/stores/merk'
import { useRoute, useRouter } from 'vue-router';
import { defineEmits } from 'vue'
const counterStore = useCounterStore()
const MerkStore = useMerkStore()
const route = useRoute()
const router = useRouter()
const emit = defineEmits(['dataMerk'])
const getMerk = computed(() => MerkStore.getMerk())
const getBrand = computed(() => MerkStore.getBrand())

onMounted(() => {
    MerkStore.fetchMerk('')
})
const SelectedValue = reactive({
    merk: '',
    type: ''
})

const handleMerk = async () => {
    console.log("sukses merubah")
    const payload = {
        assettype: "MOBIL",
        brand: SelectedValue.merk
    }
    console.log(payload)
    await MerkStore.fetchBrand(payload)
}

const handleSubmit = () => {
    emit('dataMerk', SelectedValue)
    console.log(SelectedValue)
};

</script>

<style>
.scrollable {
    overflow-y: auto;
    max-height: 300px;
>>>>>>> d43397357a2282ae2ad0ca2a4ec3f5b20446ba36
}
</style>