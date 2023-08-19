<template>
  <ion-page mode="ios">
    <ion-header :translucent="true" class="ion-no-border" >
      <ion-toolbar>
        <ion-title>Characters</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar :animated="true" v-model="search"></ion-searchbar>
        <!-- <ion-progress-bar type="indeterminate"></ion-progress-bar> -->
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <EpisodeItem v-for="item in episodes" :key="item.id" :episode="item" />
      </div>
      <ion-infinite-scroll @ionInfinite="loadMoreEpisodes" :disabled="page > numPages">
        <ion-infinite-scroll-content></ion-infinite-scroll-content>
      </ion-infinite-scroll>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useEpisodes } from "@/composables/useEpisodes";
import EpisodeItem from "@/components/episode/EpisodeItem.vue";
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonProgressBar, IonSearchbar, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/vue';

const { episodes, search, loadMoreEpisodes, page, numPages } = useEpisodes();
</script>

<style scoped></style>
