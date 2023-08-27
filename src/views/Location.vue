<template>
  <ion-page mode="ios">
    <ion-header :translucent="true" class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>{{ location.name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large" class="title">{{ location.name }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="ion-padding">
        <div class="flex mb-10 gap-2 items-center justify-start">
          <div class="border-rick-3 border px-2 py-1 rounded-lg text-rick-3 text-xs font-medium">
            {{ location.dimension }}
          </div>
          <div class="border-rick-green-1 border px-2 py-1 rounded-lg text-rick-white text-xs font-medium">
            {{ location.type }}
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
import { useLocation } from "@/composables/useLocation";
import { useRoute } from "vue-router";
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonBackButton, IonButtons } from '@ionic/vue';

const route = useRoute();

const locationId = route.params.locationId as string;

const { location, getLocation, characters } = useLocation();
getLocation(locationId);

</script>
<style scoped>
.ion-padding{
  padding-top: 0px;
}
.title{
  font-size: 28px;
}
</style>
