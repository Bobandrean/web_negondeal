<template>
    <!-- Modal -->
    <DialogUserRegister ref="daftar"></DialogUserRegister>
    <DialogAkunLogin ref="login"></DialogAkunLogin>
    <!-- End Modal -->
    <v-card>
        <v-layout>
            <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

            <v-app-bar color="orange" prominent>
                <!-- <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
                <v-btn variant="text" icon="mdi-magnify" to="/">Logo</v-btn>

                <BaseButton color="black" to="/"> Beli Mobil</BaseButton>

                <BaseButton to="/detail"> NND Certified</BaseButton>

                <BaseButton> Jual Mobil </BaseButton>

                <BaseButton to="/hubungikami"> Blog </BaseButton>
                <v-spacer></v-spacer>
                <BaseButton> Lainnya </BaseButton>
                <v-spacer></v-spacer>
                <BaseDropDown @menuClick="handleAkun" class="justify-end" label="Akun" :items="akun"></BaseDropDown>

            </v-app-bar>

            <v-navigation-drawer v-model="drawer" location="bottom" temporary>
                <v-list :items="items"></v-list>
            </v-navigation-drawer>

            <v-main>
                <BaseCarousel></BaseCarousel>

                <v-container>
                    <slot />
                </v-container>
                <v-footer color="primary lighten-1" padless>
                    <v-row justify="center" no-gutters>
                        <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
                            {{ link }}
                        </v-btn>
                        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
                            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                        </v-col>
                    </v-row>
                </v-footer>

            </v-main>

        </v-layout>

    </v-card>

</template>

<script setup>
import { defineProps } from 'vue'

const daftar = ref("");
const login = ref("");

const openDaftar = () => {
    daftar.value.$refs.daftar.open()
};

const openLogin = () => {
    login.value.$refs.login.open()
};

const akun = [
    { text: 'Login', value: 'pick_login' },
    { text: 'Daftar', value: 'pick_daftar' },
];

const handleAkun = (e) => {
    if (e.id == 0) {
        openLogin()
    } else if (e.id == 1) {
        openDaftar()
    }
}

defineProps({
    items: {
        type: Object,
        default: () => { },
    },
})

</script>
