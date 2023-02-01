<template>
    <client-only>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="#ffffff" v-bind="props">
            <v-icon>mdi-account</v-icon> {{ label }}
          </v-btn>
        </template>
        <v-list v-if="!getUser" @click:select="handleSelect">
          <v-list-item v-for="(item, index) in list" :key="index" :value="index">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list v-else>
          <v-list-item @click="goToProfile">
            <v-list-item-title>{{ getUser.email }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="handleLogout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </client-only>
  </template>
  
  <script setup>
  import { defineEmits } from "vue";
  import { useAuthStore } from "@/stores/auth";
  import { useRouter } from "vue-router";
  import { defineProps } from "vue";
const router = useRouter();
const authStore = useAuthStore();
const emit = defineEmits(['handleSelect'])

      const getUser = computed(() => {
        return authStore.getUser;
      });
      const handleSelect = (e) => {
        emit("menuClick", e);
      };
      const handleLogout = async () => {
        await authStore.logout();
        location.reload();
      };
const goToProfile = async () => {
        console.log("test")
      await router.push("/profile");
      window.location.reload();
      };

defineProps({
      list: {
        type: Array,
        default: () => [],
      },
      label: {
        type: String,
        default: "",
      },
      dense: {
        type: Boolean,
        default: false,
      },
      solo: {
        type: Boolean,
        default: false,
      },
      value: {
        type: [Number, String, Object],
        default: "",
      },
      itemText: {
        type: String,
        default: "text",
      },
      itemValue: {
        type: String,
        default: "value",
      },
      returnObject: {
        type: Boolean,
        default: false,
      },
    });

  </script>
