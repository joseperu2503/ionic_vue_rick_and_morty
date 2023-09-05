import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { User } from "@/interfaces/user.interface";

export const useAuthStore = defineStore("auth", () => {
  const authModal = ref<HTMLIonModalElement | null>(null);
  const user = ref<null | User>(null)
  const nameInitial = computed(() => {
    return user.value ? user.value.name.charAt(0) : null
  })

  return { authModal, user, nameInitial };
});
