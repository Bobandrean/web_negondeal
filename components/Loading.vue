<template>
  <div class="vld-parent">
    <Loading :active="isLoading" is-full-page></Loading>
  </div>
</template>

<script setup >
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

import { useLoadingStore } from "@/stores/loading";

const loadingStore = useLoadingStore();

const isLoading = computed(() => loadingStore.isLoading);
</script>

