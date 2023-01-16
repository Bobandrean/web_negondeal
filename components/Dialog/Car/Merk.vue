<template>
    <BaseDialog ref="merk" class-name="px-5 py-8" :max-width="450">
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
              style="border-style: ya; border-color:black; border-width: 1px">
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

<script setup>

</script>

<style>
  .scrollable{
overflow-y: auto;
max-height: 300px;
}
</style>