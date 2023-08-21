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
          <ion-title size="large">{{ episode.name }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="ion-padding">
        <div class="flex mb-20 gap-4 items-center justify-start">
          <div class="bg-rick-3 px-2 py-1 rounded-md text-sky-900 text-xs sm:text-base md:text-base font-bold">
            {{ episode.episode }}
          </div>
          <div class="bg-rick-green-2 px-2 py-1 rounded-md text-rick-white text-xs sm:text-base md:text-base font-bold">
            {{ episode.air_date }}
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <CharacterItem v-for="item in characters" :key="item.id" :character="item" />
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

const route = useRoute();

const episodeId = route.params.episodeId as string;

const { episode, getEpisode, characters } = useEpisode();
getEpisode(episodeId);

</script>
