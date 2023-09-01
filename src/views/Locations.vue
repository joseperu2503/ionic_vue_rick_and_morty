<template>
  <ion-page mode="ios">
    <ion-header :translucent="true" class="ion-no-border">
      <ion-toolbar>
        <ion-title>Locations</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar v-model="search"></ion-searchbar>
        <ion-progress-bar type="indeterminate" v-if="loading && page == 1"></ion-progress-bar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <transition name="fade" mode="out-in">
        <LocationsSkeleton v-if="loading && page == 1" />
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-8" v-else>
          <LocationItem v-for="item in locations" :key="item.id" :location="item" />
        </div>
      </transition>
      <ion-infinite-scroll @ionInfinite="loadMoreLocations" :disabled="page > numPages || (loading && page == 1)">
        <ion-infinite-scroll-content></ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>
import LocationItem from "@/components/location/LocationItem.vue";
import LocationsSkeleton from "@/components/location/LocationsSkeleton.vue";
import { useLocations } from "@/composables/useLocations";
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonProgressBar, IonSearchbar, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/vue';

const { locations, search, loadMoreLocations, page, numPages, loading } = useLocations();
</script>
<style scoped>
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-to,
.fade-leave {
  opacity: 0;
}
</style>
