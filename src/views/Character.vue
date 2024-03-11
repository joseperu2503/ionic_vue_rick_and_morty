<template>
  <ion-page>
    <ion-header :translucent="true" class="ion-no-border">
      <ion-toolbar class="safe-area-top">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>{{ character.name }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="toggleFavoriteCharacter()">
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
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div
        class="flex flex-col md:flex-row gap-2 md:gap-12 lg:24 justify-center"
      >
        <div
          class="flex items-center justify-center w-full max-w-xs md:w-72 mx-auto aspect-square rounded-md overflow-hidden"
          :class="{ 'animate-pulse': !imageLoaded && !imageError }"
        >
          <img
            src="@/assets/avatar_default.jpeg"
            class="w-full"
            v-if="imageError || (!imageLoaded && !imageError)"
          />
          <img
            :src="character.image"
            class="w-full"
            @load="onImageLoad"
            @error="onImageError"
            v-show="imageLoaded"
          />
        </div>
        <div class="mx-auto md:mx-0 w-full max-w-2xl">
          <div
            class="flex flex-col gap-3 items-center md:items-start justify-between h-full"
          >
            <div class="mb-4">
              <ion-text class="text-2xl font-semibold">
                {{ character.name }}
              </ion-text>
            </div>
          </div>
        </div>
      </div>
      <ion-card>
        <ion-list>
          <ion-item>
            <ion-label> Gender </ion-label>
            <ion-label slot="end"> {{ character.gender }} </ion-label>
          </ion-item>
          <ion-item>
            <ion-label> Specie </ion-label>
            <ion-label slot="end"> {{ character.species }} </ion-label>
          </ion-item>
          <ion-item>
            <ion-label> Status </ion-label>
            <ion-label slot="end"> {{ character.status }} </ion-label>
          </ion-item>
          <ion-item>
            <ion-label> Origin </ion-label>
            <ion-label slot="end"> {{ character.origin.name }} </ion-label>
          </ion-item>
          <ion-item>
            <ion-label> Location </ion-label>
            <ion-label slot="end"> {{ character.location.name }} </ion-label>
          </ion-item>
        </ion-list>
      </ion-card>

      <ion-text>
        <h1 class="text-2xl font-semibold">Episodes</h1>
      </ion-text>

      <div class="flex flex-col gap-4">
        <EpisodeItem v-for="item in episodes" :key="item.id" :episode="item" />
      </div>

      <!-- <div class="mt-10 md:mt-20">
          <div class="flex justify-center items-center gap-4">
            <div class="bg-gray-500 h-[0.1px] flex-1"></div>
            <div class="flex items-center gap-3 justify-center">
              <Icon icon="solar:tv-line-duotone" class="h-6 md:h-8 w-auto" />
              <ion-text class="text-base">Episodes</ion-text>
            </div>
            <div class="bg-gray-500 h-[0.1px] flex-1"></div>
          </div>
          <div class="mt-6 md:mt-16">
            <transition name="fade" mode="out-in">
              <EpisodesSkeleton v-if="loadingEpisodes" />
              <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8"
                v-else
              >
                <EpisodeItem
                  v-for="item in episodes"
                  :key="item.id"
                  :episode="item"
                />
              </div>
            </transition>
          </div>
        </div> -->
    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import {
  useIonRouter,
  IonCard,
  IonModal,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
} from "@ionic/vue";
import { useCharacter } from "@/composables/useCharacter";
import EpisodeItem from "@/components/episode/EpisodeItem.vue";
import { airplane, bluetooth, call, wifi } from "ionicons/icons";

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonBackButton,
  IonButtons,
  IonButton,
  IonText,
} from "@ionic/vue";
import { useTabStore } from "@/stores/tab";
import { storeToRefs } from "pinia";
import EpisodesSkeleton from "@/components/episode/EpisodesSkeleton.vue";
import { useFavorites } from "@/composables/useFavorites";

const tabStore = useTabStore();
const { selectedTab } = storeToRefs(tabStore);
const route = useRoute();
const router = useIonRouter();

const characterId: string = route.params.characterId as string;

const {
  character,
  getCharacter,
  loadingCharacter,
  loadingEpisodes,
  episodes,
  backgroundColor,
} = useCharacter();

getCharacter(characterId);

const getLocationId = () => {
  let array = character.value.location.url.split("/");
  return array[array.length - 1];
};

const goLocation = () => {
  let locationId = getLocationId();
  router.push(`/locations/${locationId}`);
};

const imageLoaded = ref(false);
const imageError = ref(false);

const onImageLoad = () => {
  imageLoaded.value = true;
  imageError.value = false;
};

const onImageError = () => {
  imageError.value = true;
};

const {
  isFavorite,
  settingFavorite,
  loadingFavoriteCharacters,
  toggleFavoriteCharacter,
} = useFavorites(parseInt(characterId));
</script>
<style scoped>
/* ion-card {
  --background: rgba(31, 31, 31, 0.434);
} */
</style>
