<template>
    <div class="modal-overlay">
      <div class="modal">
        <v-container>
            <v-row align="center">
                <v-col md="11">
                <h6>Pilih Opsi Anda Untuk Melanjutkan</h6>
                </v-col>
                <v-col md="1" align="center">
                    <span>X</span>
                </v-col>
            </v-row>
            <v-row>
                <v-card
    width="400"
    height="150"
    class="mx-auto"
    variant="outlined"
  >
            <v-row no-gutters>
                 <v-col md="12">
                    <p class="text-1">Pesan Mobil Ini Sekarang</p>
                 </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col md="12">
                    <p class="text-2">Biaya Pemesanan Dapat Dikembalikan 100%. Pesan Ke:<br></p>
                    <p class="text-2">Menjamin Test Drive Anda<br></p>
                    <p class="text-2">Amankan mobil ini hanya untuk Anda<br></p>
                    <p class="text-2">Test drive dengan nyaman dari rumah Anda</p>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col md="12">
                    <p class="text-3">Biaya Pemesanan : Rp2.500.000</p>
                </v-col>
            </v-row>
          </v-card>
          </v-row>
          <v-row>
          <v-card
    width="400"
    height="150"
    class="mx-auto row-1"
    variant="outlined"
  >
            <v-row no-gutters>
                 <v-col md="12">
                    <p class="text-1">Jadwalkan Test Drive</p>
                 </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col md="12">
                    <p class="text-2">DI CARSOME Experience Center<br></p>
                    <p class="text-2">Sudah memenuhi vaksinasi yang lengkap<br></p>
                    <p class="text-2">Mobil ini tetap tersedia untuk di pesan oleh pelanggan lain</p>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col md="12">
                    <p class="text-4">Kami akan merekomendasikan mobil lain kepada Anda jika mobil ini telah dipesan</p>
                </v-col>
            </v-row>
          </v-card>
            </v-row>
        <v-row>
          <v-card
    width="400"
    height="100"
    class="mx-auto row-1"
    variant="outlined"
  >
            <v-row no-gutters>
                 <v-col md="12">
                    <p class="text-1">Meminta Panggilan</p>
                 </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col md="12">
                    <p class="text-2">Perlu informasi lebih lanjut ?<br></p>
                    <p class="text-2">Pilih opsi ini dan kami akan segera menghubungi anda</p>
                </v-col>
            </v-row>
          </v-card>
            </v-row>
        </v-container>
      </div>
      <div class="close" @click="$emit('close-modal')">
      </div>
    </div>
  </template>
  
  <script>
    export default {
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
    text-align: center;
    background-color: white;
    height: 550px;
    width: 500px;
    margin-top: 10%;
    padding: 10px 0;
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
    font-size: 18px;
    text-align: center;
    font-weight: bold;
  }
  
  h5 {
    font-weight: 300;
    font-size: 20px;
    margin: 20px 0;
  }
  
  .text-2{
    font-size: 12px;
    text-align: left;
    margin-left: 5%;
  }
  .text-1 {
    font-size: 14px;
    margin: 10px 0;
    text-align: left;
    margin-left: 5%;
  }
  .text-3{
    font-size: 10px;
    text-align: right;
    margin-right: 5%;
    margin: 10px
  }
  .text-4{
    font-size: 12px;
    text-align: left;
    margin-left: 15%;
    margin: 10px
  }
  .row-1{
    margin-top: 3%;
  }
  
  button {
    margin-top: 10px;
    background-color: #ac003e;
    width: 300px;
    height: 40px;
    color: white;
    font-size: 14px;
  }
  .scrollable{
    overflow-y: auto;
    max-height: 150px;
  }
  </style>