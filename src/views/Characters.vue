<template>
  <ion-page mode="ios">
    <ion-header :translucent="true" class="ion-no-border">
      <ion-toolbar>
        <ion-title>Characters</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar v-model="search"></ion-searchbar>
        <!-- <ion-progress-bar type="indeterminate"></ion-progress-bar> -->
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <CharacterItem v-for="item in characters" :key="item.id" :character="item" />
      </div>
      <ion-infinite-scroll @ionInfinite="loadMoreCharacters" :disabled="page > numPages">
        <ion-infinite-scroll-content></ion-infinite-scroll-content>
      </ion-infinite-scroll>

    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>
import CharacterItem from "@/components/character/CharacterItem.vue";
import { useCharacters } from "@/composables/useCharacters";
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonProgressBar, IonSearchbar, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/vue';

const { characters, search, loadMoreCharacters, page, numPages } = useCharacters();
</script>

