<template>
  <ion-page >
    <ion-header :translucent="true" class="ion-no-border">
      <ion-toolbar class="safe-area-top">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>{{ location.name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large" class="title">
            <div v-if="loadingLocation" class="w-40 h-7 mb-[12px] animate-pulse bg-white/50 rounded-lg" />
            <template v-else>
              {{ location.name }}
            </template>
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="ion-padding">
        <div class="flex mb-10 gap-2 items-center justify-start">
          <template v-if="loadingLocation">
            <div class="w-[100px] h-[26px] animate-pulse bg-rick-3/70 rounded-lg" />
            <div class="w-[90px] h-[26px] animate-pulse bg-rick-green-1/70 rounded-lg" />
          </template>
          <template v-else>
            <div class="border-rick-3 border px-2 py-1 rounded-lg text-rick-3 text-xs font-medium">
              {{ location.dimension }}
            </div>
            <div class="border-rick-green-1 border px-2 py-1 rounded-lg text-rick-white text-xs font-medium">
              {{ location.type }}
            </div>
          </template>
        </div>
        <CharactersSkeleton v-if="loadingCharacters" />
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" v-else>
          <CharacterItem v-for="item in characters" :key="item.id" :character="item" />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>
import CharacterItem from "@/components/character/CharacterItem.vue";
import { useLocation } from "@/composables/useLocation";
import { useRoute } from "vue-router";
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonBackButton, IonButtons } from '@ionic/vue';
import CharactersSkeleton from "@/components/character/CharactersSkeleton.vue";

const route = useRoute();

const locationId = route.params.locationId as string;

const { location, getLocation, characters, loadingCharacters, loadingLocation } = useLocation();
getLocation(locationId);

</script>
<style scoped>
.ion-padding {
  padding-top: 0px;
}

.title {
  font-size: 28px;
}
</style>
