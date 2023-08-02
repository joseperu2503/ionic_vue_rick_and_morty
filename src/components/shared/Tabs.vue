<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <!-- <ion-tab-button tab="episodes" href="/episodes">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Episodes</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="characters" href="/characters">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Characters</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="locations" href="/locations">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Locations</ion-label>
        </ion-tab-button> -->
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
<style scoped>
ion-tab-button {
  background-color: black;
  color: white;
  --ripple-color: white !important;
}

ion-tab-button:active {
  background-color: black;
  color: white;
  --ripple-color: white !important;
}

ion-tab-bar{
  background-color: black;
}
</style>
