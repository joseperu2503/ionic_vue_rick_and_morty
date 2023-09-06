import { authApi } from "@/api/authApi";
import { useCharacterStore } from "@/stores/character";
import { storeToRefs } from "pinia";
import { computed, ref } from 'vue';
import { useAuthModal } from "@/composables/useAuthModal";
import { useAuth } from "@/composables/useAuth";

export function useFavorites(characterId?: number) {
  const characterStore = useCharacterStore();
  const { favoriteCharacters, loadingFavoriteCharacters } = storeToRefs(characterStore);
  const { verifyAuth } = useAuth()
  const { openAuthModal } = useAuthModal()
  const settingFavorite = ref<boolean>(false)

  const getFavoriteCharacters = async (firstLoad: boolean = false) => {
    const isAuth = verifyAuth()
    if (isAuth) {
      loadingFavoriteCharacters.value = firstLoad
      let response = await authApi.get<{ character_id: number }[]>('/get-favorite-characters')
      favoriteCharacters.value = response.data.map((c) => c.character_id)
      loadingFavoriteCharacters.value = false
    }
  }

  const addFavoriteCharacter = async () => {
    const isAuth = verifyAuth()
    if (isAuth && !settingFavorite.value) {
      settingFavorite.value = true
      await authApi.post(`/add-favorite-character`, {
        characterId
      })
      await getFavoriteCharacters()
      settingFavorite.value = false
    } else {
      openAuthModal()
    }
  }

  const removeFavoriteCharacter = async () => {
    const isAuth = verifyAuth()
    if (isAuth && !settingFavorite.value) {
      settingFavorite.value = true
      await authApi.post(`/remove-favorite-character`, {
        characterId
      })
      await getFavoriteCharacters()
      settingFavorite.value = false

    } else {
      openAuthModal()
    }
  }

  const isFavorite = computed(() => {
    if (!characterId) {
      return false;
    }
    return favoriteCharacters.value.includes(characterId)
  })

  return {
    getFavoriteCharacters,
    addFavoriteCharacter,
    removeFavoriteCharacter,
    favoriteCharacters,
    isFavorite,
    settingFavorite,
    loadingFavoriteCharacters
  }
}
