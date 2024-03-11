<template>
  <ion-page :fullscreen="true">
    <ion-tabs @ionTabsWillChange="ionTabsWillChange">
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="border-t-[1px] border-gray-600">
        <ion-tab-button tab="characters" href="/characters">
          <Icon
            icon="ph:users-fill"
            class="w-auto h-6"
            v-if="selectedTab == 'characters'"
          />
          <Icon icon="ph:users-bold" class="w-auto h-6" v-else />
          <ion-label>Characters</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="locations" href="/locations">
          <Icon
            icon="mingcute:world-2-fill"
            class="w-auto h-6"
            v-if="selectedTab == 'locations'"
          />
          <Icon icon="mingcute:world-2-line" class="w-auto h-6" v-else />
          <ion-label>Locations</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="episodes" href="/episodes">
          <Icon
            icon="solar:tv-bold"
            class="w-auto h-6"
            v-if="selectedTab == 'episodes'"
          />
          <Icon icon="solar:tv-linear" class="w-auto h-6" v-else />
          <ion-label>Episodes</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="profile" href="/episodes">
          <Icon
            icon="fluent:person-12-filled"
            class="w-auto h-6"
            v-if="selectedTab == 'profile'"
          />
          <Icon icon="fluent:person-12-regular" class="w-auto h-6" v-else />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
} from "@ionic/vue";
import { useTabStore } from "@/stores/tab";
import { storeToRefs } from "pinia";
const tabStore = useTabStore();
const { selectedTab } = storeToRefs(tabStore);

const ionTabsWillChange = (e: { tab: string }) => {
  selectedTab.value = e.tab;
};
</script>
<style scoped>
ion-tab-button {
  /* --color-focused: var(--rick-white);
  --color: rgb(158, 158, 158);
  --color-selected: var(--rick-white);
  --color-active: var(--rick-white); */
  /* --background: black; */
}

ion-tab-bar {
  background-color: transparent;
  contain: none !important;
}
</style>
