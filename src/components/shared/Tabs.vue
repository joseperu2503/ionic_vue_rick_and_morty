<template>
  <ion-page :fullscreen="true">
    <ion-tabs>
      <ion-router-outlet mode="ios"></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="border-t-[1px] border-gray-600">
        <ion-tab-button tab="characters" href="/characters">
          <Icon icon="ph:users-fill" class="w-auto h-6" v-if="route.path == '/characters'" />
          <Icon icon="ph:users-bold" class="w-auto h-6" v-else />
          <ion-label>Characters</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="locations" href="/locations">
          <Icon icon="mingcute:world-2-fill" class="w-auto h-6" v-if="route.path == '/locations'" />
          <Icon icon="mingcute:world-2-line" class="w-auto h-6" v-else />
          <ion-label>Locations</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="episodes" href="/episodes">
          <Icon icon="solar:tv-bold" class="w-auto h-6" v-if="route.path == '/episodes'" />
          <Icon icon="solar:tv-linear" class="w-auto h-6" v-else />
          <ion-label>Episodes</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel } from '@ionic/vue';
import { useRoute } from 'vue-router'

const route = useRoute()

</script>
<style scoped>
ion-tab-button {
  --color-focused: white;
  --color: rgb(199, 199, 199);
  --color-selected: white;
  --color-active: white;
  --background: black;
}

ion-tab-bar {
  background-color: transparent;
  contain: none !important;
}
</style>
