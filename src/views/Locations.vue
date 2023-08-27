<template>
  <ion-page mode="ios">
    <ion-header :translucent="true" class="ion-no-border" >
      <ion-toolbar>
        <ion-title>Locations</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar :animated="true" v-model="search"></ion-searchbar>
        <!-- <ion-progress-bar type="indeterminate"></ion-progress-bar> -->
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-8">
        <LocationItem v-for="item in locations" :key="item.id" :location="item" />
      </div>
      <ion-infinite-scroll @ionInfinite="loadMoreLocations" :disabled="page > numPages">
        <ion-infinite-scroll-content></ion-infinite-scroll-content>
      </ion-infinite-scroll>

    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>
import LocationItem from "@/components/location/LocationItem.vue";
import { useLocations } from "@/composables/useLocations";
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonProgressBar, IonSearchbar, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/vue';

const { locations, search, loadMoreLocations, page, numPages } = useLocations();
</script>
