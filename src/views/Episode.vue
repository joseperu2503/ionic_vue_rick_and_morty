<template>
  <ion-page mode="ios">
    <ion-header :translucent="true" class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>{{ episode.name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large" class="title">
            <div v-if="loadingEpisode" class="w-40 h-7 mb-[12px] animate-pulse bg-white/50 rounded-lg" />
            <template v-else>
              {{ episode.name }}
            </template>
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="ion-padding">
        <div class="flex mb-10 gap-2 items-center justify-start">
          <template v-if="loadingEpisode">
            <div class="w-[60px] h-[26px] animate-pulse bg-rick-3/70 rounded-lg" />
            <div class="w-[105px] h-[26px] animate-pulse bg-rick-green-1/70 rounded-lg" />
          </template>
          <template v-else>
            <div class="border-rick-3 border px-2 py-1 rounded-lg text-rick-3 text-xs font-medium">
              {{ episode.episode }}
            </div>
            <div class="border-rick-green-1 border px-2 py-1 rounded-lg text-rick-white text-xs font-medium">
              {{ episode.air_date }}
            </div>
          </template>

        </div>
        <CharactersSkeleton v-if="loadingCharacters" />
        <div class="flex-1 overflow-hidden" v-else>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <CharacterItem v-for="item in characters" :key="item.id" :character="item" />
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>
import CharacterItem from "@/components/character/CharacterItem.vue";
import { useEpisode } from "@/composables/useEpisode";
import { useRoute } from "vue-router";
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonBackButton, IonButtons } from '@ionic/vue';
import CharactersSkeleton from "@/components/character/CharactersSkeleton.vue";

const route = useRoute();

const episodeId = route.params.episodeId as string;

const { episode, getEpisode, characters, loadingEpisode, loadingCharacters } = useEpisode();
getEpisode(episodeId);

</script>
<style scoped>
.ion-padding {
  padding-top: 0px;
}

.title {
  font-size: 28px;
}
</style>
