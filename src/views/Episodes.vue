<template>
  <ion-page mode="ios">
    <ion-header :translucent="true" class="ion-no-border">
      <Appbar title="Episodes" />
      <ion-toolbar>
        <ion-searchbar v-model="search" @keydown.enter="hideKeyboard" @ionClear="hideKeyboard" />
        <ion-progress-bar type="indeterminate" v-if="loading && page == 1"></ion-progress-bar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <transition name="fade" mode="out-in">
        <EpisodesSkeleton v-if="loading && page == 1" />
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8" v-else>
          <EpisodeItem v-for="item in episodes" :key="item.id" :episode="item" />
        </div>
      </transition>
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
import EpisodesSkeleton from "@/components/episode/EpisodesSkeleton.vue";
import { useKeyboard } from "@/composables/useKeyboard";
import Appbar from "@/components/shared/Appbar.vue";

const { episodes, search, loadMoreEpisodes, page, numPages, loading } = useEpisodes();

const hideKeyboard = () => {
  useKeyboard().hideKeyboard()
}

</script>
