import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppbarStore = defineStore("appbar", () => {
  const opacity = ref<number>(0);

  return { opacity };
});
