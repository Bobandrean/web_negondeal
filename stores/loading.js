import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", () => {
  const loading = ref(false);

  const isLoading = computed(() => loading.value);

  function setLoading(val) {
    loading.value = val;
  }

  return {
    isLoading,
    setLoading,
  };
});
