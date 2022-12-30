<template>
  <div class="modal-overlay">
    <div class="modal">
      <h6>Silahkan Pilih Lokasi</h6>
      <h5>Anda dapat memilih lebih dari satu lokasi</h5>
      <label for ="test">Cari Kota</label>
      <span>
        <input name="test" id="test" 
               type="text" placeholder="Contoh : Bandung, Karawang"/>
    </span>
    <h4>Atau Cari Berdasarkan Provinsi</h4>
    <v-card
    class="mx-auto"
    max-width="700"
    outlined
    max-height="150"
  >
  <v-container>
    <div class="scrollable">
    <v-row no-gutters>
      <v-col
        v-for="n in 12"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </div>
  </v-container>
  </v-card>
  <button>Menampilkan Mobil Impian</button>
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
  height: 500px;
  width: 1500px;
  margin-top: 15%;
  padding: 60px 0;
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
  font-weight: 300;
  font-size: 20px;
  margin: 20px 0;
}

h4{
  font-weight: 300;
  font-size: 20px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
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