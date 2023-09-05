<template>
  <ion-page mode="ios">
    <ion-header :translucent="true" class="ion-no-border">
      <ion-toolbar class="safe-area-top">
        <ion-title>Characters</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar v-model="search" @keydown.enter="hideKeyboard" @ionClear="hideKeyboard"></ion-searchbar>
        <ion-progress-bar type="indeterminate" v-if="loading && page == 1"></ion-progress-bar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <transition name="fade" mode="out-in">
        <CharactersSkeleton v-if="loading && page == 1" />
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" v-else>
          <CharacterItem v-for="item in characters" :key="item.id" :character="item" />
        </div>
      </transition>
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
import { useKeyboard } from "@/composables/useKeyboard";
import CharactersSkeleton from "@/components/character/CharactersSkeleton.vue";

const { characters, search, loadMoreCharacters, page, numPages, loading } = useCharacters();
const hideKeyboard = () => {
  useKeyboard().hideKeyboard()
}
</script>
