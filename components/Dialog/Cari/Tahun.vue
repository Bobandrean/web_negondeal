<template>
    <BaseDialog ref="tahun" class-name="px-5 py-8">
        <v-container>
            <v-row>
                <v-col>
                    <p>Tahun</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-range-slider
    v-model="range"
    :max="10"
    :min="-10"
    :step="1"
    hide-details
    class="align-center slider-color"
  >
                    </v-range-slider>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="6" align="center">
                    <v-text-field
                        :model-value="range[0]"
                        hide-details
                        single-line
                        type="number"
                        variant="outlined"
                        density="compact"
                        style="width: 70px"
                        @change="$set(range, 0, $event)"
                    >
                    </v-text-field>
                </v-col>
                <v-col md="6" align="center">
                    <v-text-field
                        :model-value="range[1]"
                        hide-details
                        single-line
                        type="number"
                        variant="outlined"
                        style="width: 70px"
                        density="compact"
                        @change="$set(range, 1, $event)"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
            <v-divider style="margin-top:20px; margin-bottom:20px">
            </v-divider>
            <v-row>
                <v-col md="6" align="center">
                    <BaseButton>Hapus</BaseButton>
                </v-col>
                <v-col md="6" align="center">
                    <BaseButton>Terapkan</BaseButton>
                </v-col>
            </v-row>
        </v-container>
    </BaseDialog>
</template>

<script>
  export default {
    data () {
      return {
        range: [-5, 5],
      }
    },
  }
</script>

<style>

</style>