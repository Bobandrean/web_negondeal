<template>
    <v-card>
        <v-layout>
            <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

            <v-app-bar color="orange" prominent>
                <!-- <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
                <v-btn variant="text" icon="mdi-magnify">Logo</v-btn>

                <BaseButton color="black"> Beli Mobil</BaseButton>

                <BaseButton to="/detail"> NND Certified</BaseButton>

                <BaseButton> Jual Mobil </BaseButton>

                <BaseButton> Blog </BaseButton>

                <BaseDropDown></BaseDropDown>

                <v-spacer></v-spacer>


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
  