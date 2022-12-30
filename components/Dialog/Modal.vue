<template>
    <div class="modal-overlay">
      <div class="modal">
        <v-container>
            <v-row no-gutters>
                <v-col>
                    <h6>Harga</h6>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col>
                    <h5>Harga rata-rata mobil CARRO adalah Rp 174,953,349</h5>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col>
                    <v-range-slider
            v-model="range"
            class="align-center"
            :color="red"
            :max="max"
            :min="min"
            hide-details
          >
                </v-range-slider>
                </v-col>
            </v-row>
            <v-row no-gutters class="mt-2">
                <v-col class="md-5">
                    <v-text-field
                :value="range[0]"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 150px"
                @change="$set(range, 0, $event)"
              ></v-text-field>
                </v-col>
                <v-col class="md-2">
                    <h4>-</h4>
                </v-col>
                <v-col class="md-5">
                    <v-text-field
                :value="range[1]"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 150px"
                @change="$set(range, 1, $event)"
              ></v-text-field>
                </v-col>
            </v-row>
            <v-divider class="mt-10"></v-divider>
            <v-row>
                <v-col class="md-6">
                    <h4>Hapus</h4>
                </v-col>
                <v-col class="md-6">
                    <button>Terapkan</button>
                </v-col>
            </v-row>
        </v-container>
      </div>
      <div class="close" @click="$emit('close-modal')">
      </div>
    </div>
  </template>
  
  <script>
    export default {
        data(){
            return{
                min : 100,
                max : 1000000,
                range: [100, 100000],
            }
        },
  }
  </script>
  
  <style scoped>
  
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
  }
  
  .modal {
    text-align: left;
    background-color: white;
    height: 400px;
    width: 500px;
    margin-top: 15%;
    padding: 20px 0;
    border-radius: 20px;
  }
  .close {
    margin: 10% 0 0 16px;
    cursor: pointer;
  }
  
  .close-img {
    width: 25px;
  }
  
  label{
    float :left;
    margin-left: 35%;
    font-weight: 300;
    font-size: 20px;
  }
  span {
     display: block;
     overflow: hidden;
     padding: 0px 4px 0px 6px;
  }
            
   input {
    width: 50%;
    margin-right: 40%;
    font-weight: 300;
    font-size: 20px;
  }
  .check {
    width: 150px;
  }
  
  h6 {
    font-size: 25px;
    margin: 20px 0;
    font-weight: bold;
  }
  
  h5 {
    font-weight: 200;
    font-size: 16px;
    margin-bottom: 5%;
  }
  
  h4{
    text-align: center;
    font-weight: 300;
    font-size: 20px;
    margin: 20px 0;
  }
  
  p {
    font-size: 16px;
    margin: 20px 0;
  }
  
  button {
    align-content: center;
    margin-top: 10px;
    background-color: #ac003e;
    width: 150px;
    height: 40px;
    color: white;
    font-size: 14px;
  }
  .scrollable{
    overflow-y: auto;
    max-height: 150px;
  }
  </style>