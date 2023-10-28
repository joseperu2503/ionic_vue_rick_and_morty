<template>
  <ion-page mode="ios">
    <ion-header :translucent="true" class="ion-no-border">
      <ion-toolbar class="safe-area-top">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>{{ character.name }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="toggleFavoriteCharacter()">
            <Icon icon="tdesign:loading" class="w-7 h-7 text-rick-white animate-spin"
              v-if="settingFavorite || loadingFavoriteCharacters" />
            <template v-else>
              <Icon icon="material-symbols:favorite" class="w-7 h-7 text-rick-white" v-if="isFavorite" />
              <Icon icon="material-symbols:favorite-outline" class="w-7 h-7 text-rick-white" v-if="!isFavorite" />
            </template>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true"
      :style="{ '--background': `linear-gradient(-10deg,  var(--ion-background-color) 0%, ${backgroundColor} )` }">
      <div class="ion-padding">
        <div class="flex flex-col md:flex-row gap-2 md:gap-12 lg:24 justify-center">
          <div
            class="flex items-center justify-center w-full max-w-xs md:w-72 mx-auto aspect-square rounded-md overflow-hidden"
            :class="{ 'animate-pulse': !imageLoaded && !imageError }">
            <img src="@/assets/avatar_default.jpeg" class="w-full" v-if="imageError || (!imageLoaded && !imageError)" />
            <img :src="character.image" class="w-full" @load="onImageLoad" @error="onImageError" v-show="imageLoaded" />
          </div>
          <div class="mx-auto md:mx-0 w-full max-w-2xl">
            <div class="flex flex-col gap-3 items-center md:items-start justify-between h-full">
              <div class="mb-4 lg:mb-0">
                <transition name="fade" mode="out-in">
                  <div v-if="loadingCharacter">
                    <div class="h-[24px] my-[4px] animate-pulse bg-rick-white/70 rounded"
                      :style="{ width: Math.floor(Math.random() * (250 - 100 + 1)) + 100 + 'px' }" />
                  </div>
                  <h1 v-else class="text-rick-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                    {{ character.name }}
                  </h1>
                </transition>
              </div>

              <ion-card class="w-full">
                <transition name="fade" mode="out-in">
                  <div class="py-4 px-3 flex flex-col gap-2 justify-between" v-if="loadingCharacter">
                    <div class="flex gap-4 justify-between items-center">
                      <div class="w-[47px] h-[14px] my-[3px] animate-pulse bg-rick-3/70 rounded" />
                      <div class="w-[45px] h-[14px] my-[3px] animate-pulse bg-rick-white/70 rounded" />
                    </div>
                    <div class="flex gap-4 justify-between items-center">
                      <div class="w-[43px] h-[14px] my-[3px] animate-pulse bg-rick-3/70 rounded" />
                      <div class="h-[14px] my-[3px] animate-pulse bg-rick-white/70 rounded"
                        :style="{ width: Math.floor(Math.random() * (80 - 40 + 1)) + 40 + 'px' }" />
                    </div>
                    <div class="flex gap-4 justify-between items-center">
                      <div class="w-[40px] h-[14px] my-[3px] animate-pulse bg-rick-3/70 rounded" />
                      <div class="h-[14px] my-[3px] animate-pulse bg-rick-white/70 rounded"
                        :style="{ width: Math.floor(Math.random() * (80 - 40 + 1)) + 40 + 'px' }" />
                    </div>
                    <div class="flex gap-4 justify-between items-center">
                      <div class="w-[38px] h-[14px] my-[3px] animate-pulse bg-rick-3/70 rounded" />
                      <div class="h-[14px] my-[3px] animate-pulse bg-rick-white/70 rounded"
                        :style="{ width: Math.floor(Math.random() * (80 - 40 + 1)) + 40 + 'px' }" />
                    </div>
                    <div class="flex gap-4 justify-between items-center">
                      <div class="w-[53px] h-[14px] my-[3px] animate-pulse bg-rick-3/70 rounded" />
                      <div class="h-[14px] my-[3px] animate-pulse bg-rick-white/70 rounded"
                        :style="{ width: Math.floor(Math.random() * (130 - 40 + 1)) + 40 + 'px' }" />
                    </div>
                  </div>
                  <div class="py-4 px-3 flex flex-col gap-2 justify-between" v-else>
                    <div class="flex gap-4 justify-between items-center">
                      <span class="text-rick-3 text-sm sm:text-base">Gender</span>
                      <span class="text-white text-sm sm:text-base text-right"> {{ character.gender }}</span>
                    </div>
                    <div class="flex gap-4 justify-between items-center">
                      <span class="text-rick-3 text-sm sm:text-base">Specie</span>
                      <span class="text-white text-sm sm:text-base text-right"> {{ character.species }}</span>
                    </div>
                    <div class="flex gap-4 justify-between items-center">
                      <span class="text-rick-3 text-sm sm:text-base">Status</span>
                      <span class="text-white text-sm sm:text-base text-right"> {{ character.status }}</span>
                    </div>
                    <div class="flex gap-4 justify-between items-center">
                      <span class="text-rick-3 text-sm sm:text-base">Origin</span>
                      <span class="text-white text-sm sm:text-base text-right"> {{ character.origin?.name }}</span>
                    </div>
                    <div class="flex gap-4 justify-between items-center">
                      <span class="text-rick-3 text-sm sm:text-base" @click="goLocation()">Location</span>
                      <div class="text-white text-sm sm:text-base text-right" @click="goLocation()">
                        {{ character.location?.name }}</div>
                    </div>
                  </div>
                </transition>
              </ion-card>
            </div>
          </div>

        </div>
        <div class="mt-10 md:mt-20">
          <div class="flex justify-center items-center gap-4">
            <div class="bg-gray-500 h-[0.1px] flex-1"></div>
            <div class="text-rick-white flex items-center gap-3 justify-center">
              <Icon icon="solar:tv-line-duotone" class="h-6 md:h-8 w-auto" />
              <div class="text-base">Episodes</div>
            </div>
            <div class="bg-gray-500 h-[0.1px] flex-1"></div>
          </div>
          <div class="mt-6 md:mt-16">
            <transition name="fade" mode="out-in">
              <EpisodesSkeleton v-if="loadingEpisodes" />
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8" v-else>
                <EpisodeItem v-for="item in episodes" :key="item.id" :episode="item" />
              </div>
            </transition>

          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from "vue-router";
import { useIonRouter, IonCard } from '@ionic/vue';
import { useCharacter } from "@/composables/useCharacter";
import EpisodeItem from "@/components/episode/EpisodeItem.vue";
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonBackButton, IonButtons, IonButton } from '@ionic/vue';
import { useTabStore } from "@/stores/tab";
import { storeToRefs } from 'pinia';
import EpisodesSkeleton from "@/components/episode/EpisodesSkeleton.vue";
import { useFavorites } from '@/composables/useFavorites';

const tabStore = useTabStore();
const { selectedTab } = storeToRefs(tabStore);
const route = useRoute();
const router = useIonRouter();

const characterId: string = route.params.characterId as string;

const { character, getCharacter, loadingCharacter, loadingEpisodes, episodes, backgroundColor } = useCharacter();

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

const { isFavorite, settingFavorite, loadingFavoriteCharacters, toggleFavoriteCharacter } = useFavorites(parseInt(characterId));

</script>
<style scoped>
ion-card{
  --background: rgba(31, 31, 31, 0.434);
}
</style>
