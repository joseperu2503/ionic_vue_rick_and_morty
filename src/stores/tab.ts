import { ref } from "vue";
import { defineStore } from "pinia";

export const useTabStore = defineStore("tab", () => {
  const selectedTab = ref('characters')

  return { selectedTab };
});
