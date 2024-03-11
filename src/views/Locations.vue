<template>
  <ion-page mode="ios">
    <ion-header :translucent="true" class="ion-no-border">
      <Appbar title="Locations" />
      <ion-toolbar>
        <ion-searchbar
          v-model="search"
          @keydown.enter="hideKeyboard"
          @ionClear="hideKeyboard"
        ></ion-searchbar>
        <ion-progress-bar
          type="indeterminate"
          v-if="loading && page == 1"
        ></ion-progress-bar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <transition name="fade" mode="out-in">
        <!-- <LocationsSkeleton v-if="loading && page == 1" /> -->
        <div
          v-if="loading && page == 1"
          class="h-full flex justify-center items-center"
        >
          <ion-spinner> </ion-spinner>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-8"
          v-else
        >
          <LocationItem
            v-for="item in locations"
            :key="item.id"
            :location="item"
          />
        </div>
      </transition>
      <ion-infinite-scroll
        @ionInfinite="loadMoreLocations"
        :disabled="page > numPages || (loading && page == 1)"
      >
        <ion-infinite-scroll-content></ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>
import LocationItem from "@/components/location/LocationItem.vue";
import LocationsSkeleton from "@/components/location/LocationsSkeleton.vue";
import { useLocations } from "@/composables/useLocations";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonProgressBar,
  IonSearchbar,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/vue";
import { useKeyboard } from "@/composables/useKeyboard";
import Appbar from "@/components/shared/Appbar.vue";

const { locations, search, loadMoreLocations, page, numPages, loading } =
  useLocations();

const hideKeyboard = () => {
  useKeyboard().hideKeyboard();
};
</script>
