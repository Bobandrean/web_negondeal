<template>
      <v-container>
        <v-row>
            <v-col cols="4">
                <v-row style="display: flex; align-items: center; justify-content: center"  align="center">
                    <p>Hubungi Kami</p>
                </v-row>
            </v-col>
        </v-row>
        <v-row align="stretch" style="margin-top:50px">
                <v-row style="display: flex; align-items: center; justify-content: center"  align="center">
                    <v-col md="4" align="center">
                        ALAMAT
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col md="4">
                        Kontak Kami
                    </v-col>
                </v-row>
        </v-row>
        <v-row>
            <v-col md="4">

            </v-col>
            <v-col md="4">
                 Lorem Ipsum Lorem Ipsum<br>
                 Lorem Ipsum Lorem Ipsum<br>
                 Lorem Ipsum Lorem Ipsum<br>
                 Lorem Ipsum Lorem Ipsum
            </v-col>
            <v-col md="4">
                 Lorem Ipsum Lorem Ipsum<br>
                 Lorem Ipsum Lorem Ipsum<br>
                 Lorem Ipsum Lorem Ipsum<br>
                 Lorem Ipsum Lorem Ipsum
            </v-col>
        </v-row>
        <v-row class="mt-10">
            <v-col md="12" align="center">
                Anda Ingin Kirim Email Ke Kami ?
            </v-col>
            <v-col md="6" class="text-right mt-5">
                Email
            </v-col>
            <v-col md="6" align="center">
                <BaseInput></BaseInput>
            </v-col>
            <v-col md="6" align="center">
                Nama
            </v-col>
            <v-col md="6" align="center">
                <BaseInput></BaseInput>
            </v-col>
            <v-col md="6" align="center">
                Subject
            </v-col>
            <v-col md="6" align="center">
                <BaseInput></BaseInput>
            </v-col>
            <v-col md="6" align="center">
                Pesan
            </v-col>
            <v-col md="6" align="center">
                <BaseTextArea></BaseTextArea>
            </v-col>
            <v-col md="6" align="center">
                No Handphone
            </v-col>
            <v-col md="6" align="center">
                <BaseInput></BaseInput>
            </v-col>
            <v-col md="12" align="center">
                <BaseButton>Kirim</BaseButton>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import { ref } from 'vue'
definePageMeta({
    layout: 'custom'
})
export default {
    data: function(){
        return{
            show: true,
            show2: false,
            show3: false
        }
    },
    methods: {
        c1 (event){
            this.show = !this.show
            this.show2 = !this.show2
        },
        c2 (event){
            this.show2 = !this.show2
            this.show3 = !this.show3
        }
    }
}
</script>

<style>
.loui4{
    margin-left: 5%;
    font-size: 14px;
    text-align: left;
}
.loui3{
    margin-right: 5%;
}
.loui2{
    font-size: 14px;
    text-align: right;
    color: green;
}
.card1{
    border-radius: 30px;
  background: white;
  box-shadow: 15px 15px 30px #bebebe,
             -15px -15px 30px #ffffff;
}
</style>