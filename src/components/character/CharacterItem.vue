<template>
  <div>
    <ion-card class="ion-activatable ripple-parent">
      <div
        class="relative w-full aspect-square rounded-2xl overflow-hidden"
        :class="{ 'animate-pulse': !imageLoaded && !imageError }"
      >
        <div
          class="absolute right-1 top-1 p-1 bg-black/40 rounded-full z-10 opacity-80"
          @click="toggleFavoriteCharacter()"
        >
          <Icon
            icon="tdesign:loading"
            class="w-7 h-7 text-rick-white animate-spin"
            v-if="settingFavorite || loadingFavoriteCharacters"
          />
          <template v-else>
            <Icon
              icon="material-symbols:favorite"
              class="w-7 h-7 text-rick-white"
              v-if="isFavorite"
            />
            <Icon
              icon="material-symbols:favorite-outline"
              class="w-7 h-7 text-rick-white"
              v-if="!isFavorite"
            />
          </template>
        </div>
        <img
          :src="character.image"
          class="w-full h-full absolute"
          @load="onImageLoad"
          @error="onImageError"
          @click="goCharacter"
        />
        <img
          src="@/assets/avatar_default.jpeg"
          class="w-full absolute"
          v-if="!imageLoaded"
          @click="goCharacter"
        />
      </div>
      <ion-ripple-effect></ion-ripple-effect>
    </ion-card>
    <div class="mt-2" @click="goCharacter">
      <ion-text class="text-sm leading-none truncate font-semibold">
        {{ character.name }}
      </ion-text>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { toRefs, ref } from "vue";
import { useIonRouter, IonCard, IonRippleEffect, IonText } from "@ionic/vue";
import { Character } from "@/interfaces/character.interface.ts";
import { useFavorites } from "@/composables/useFavorites";

const router = useIonRouter();

const props = defineProps<{ character: Character }>();
const { character } = toRefs(props);
const imageLoaded = ref(false);
const imageError = ref(false);

const goCharacter = () => {
  router.push(`/characters/${character.value.id}`);
};

const onImageLoad = () => {
  console.log("onImageLoad");
  imageLoaded.value = true;
  imageError.value = false;
};

const onImageError = () => {
  console.log("onImageError");

  imageError.value = true;
};

const {
  toggleFavoriteCharacter,
  isFavorite,
  settingFavorite,
  loadingFavoriteCharacters,
} = useFavorites(character.value.id);
</script>
