<template>
      <DialogUserRegister ref="daftar"></DialogUserRegister>
    <DialogAkunLogin ref="login"></DialogAkunLogin>
    <v-card>
        <v-layout>
            <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

            <v-app-bar color="#e77200">
        <v-btn icon="mdi-magnify" @click="goToIndex" class="mr-3">Logo</v-btn>
        <BaseButton> <span style="color:#ffffff">Beli Mobil</span></BaseButton>

        <BaseButton to="/detail"> <span style="color:#ffffff">NND Showroom</span></BaseButton>

        <BaseButton> <span style="color:#ffffff">Jual Mobil</span> </BaseButton>

        <BaseButton> <span style="color:#ffffff">Blog</span> </BaseButton>
        <BaseDropDown @menuClick="handleLainnya" class="justify-end" label="Lainnya" :items="lainnya"></BaseDropDown>
        <v-spacer></v-spacer>
        <BaseDropBar @menuClick="handleAkun" label="Akun" :list="akun"></BaseDropBar>

      </v-app-bar>

            <v-navigation-drawer v-model="drawer" location="bottom" temporary>
                <v-list :items="items"></v-list>
            </v-navigation-drawer>

            <v-main>
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
import { useRoute, useRouter } from "vue-router";
import { defineProps } from "vue";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();
const daftar = ref("");
const login = ref("");
const getUser = computed(() => {
      return authStore.getUser;
    });
const openDaftar = () => {
  daftar.value.$refs.daftar.open();
};
const openLogin = () => {
  login.value.$refs.login.open();
};
const goToIndex = async () => {
  await router.push("/");
  window.location.reload();
};
const akun = [
  { text: "Login", value: "pick_login" },
  { text: "Daftar", value: "pick_daftar" },
];
const lainnya = [
  { text: "tentang NND", value: "" },
  { text: "FAQ", value: "" },
  { text: "Cara Membeli", value: "" },
  { text: "Hubungi Kami", value: "" },
];
const handleAkun = (e) => {
  if (e.id == 0) {
    openLogin();
  } else if (e.id == 1) {
    openDaftar();
  }
};
defineProps({
  items: {
    type: Object,
    default: () => {},
  },
});
</script>
<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
        links: [
            'Home',
            'About Us',
            'Team',
            'Services',
            'Blog',
            'Contact Us',
        ],
        items: [
            {
                title: 'Foo',
                value: 'foo',
            },
            {
                title: 'Bar',
                value: 'bar',
            },
            {
                title: 'Fizz',
                value: 'fizz',
            },
            {
                title: 'Buzz',
                value: 'buzz',
            },
        ],
        valueSelect:
            [
                {
                    title: 'Tentang NND',
                    value: '/about'
                },
                {
                    title: 'FAQ',
                    value: '/faq'
                }
            ]
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>
  