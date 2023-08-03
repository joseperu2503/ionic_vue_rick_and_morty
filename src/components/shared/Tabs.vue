<template>
  <ion-page :fullscreen="true">
    <ion-tabs>
      <ion-router-outlet :animated="false"></ion-router-outlet>
      <!-- <ion-tab-bar slot="bottom">
        <div class=" w-full bg-black  flex border-t-[1px] border-gray-600">
          <router-link to="/episodes"
            class="w-1/3 ion-activatable overflow-hidden relative flex justify-center flex-col items-center gap-1 pt-1"
            :class="[route.path == '/episodes' ? 'text-white' : 'text-gray-300']">
            <Icon icon="solar:tv-bold" class="w-auto h-6" v-if="route.path == '/episodes'" />
            <Icon icon="solar:tv-linear" class="w-auto h-6" v-else />
            <span class="text-[11px]" :class="[route.path == '/episodes' ? 'font-normal' : 'font-light']">Episodes</span>
            <ion-ripple-effect></ion-ripple-effect>
          </router-link>
          <router-link to="/characters" class="w-1/3 flex justify-center ion-activatable"
            :class="[route.path == '/characters' ? 'text-white' : 'text-gray-300']">
            <img src="@/assets/pocket-mortys.png" alt="img" class="w-14 h-14 absolute -translate-y-6 z-10">

            <div class="relative w-full h-full flex justify-center  overflow-hidden">
              <span class="text-[11px] z-10 absolute bottom-0"
                :class="[route.path == '/characters' ? 'font-normal' : 'font-light']">Characters</span>
              <ion-ripple-effect></ion-ripple-effect>
            </div>
          </router-link>
          <router-link to="/locations"
            class="w-1/3 ion-activatable overflow-hidden relative flex justify-center flex-col items-center gap-1 pt-1"
            :class="[route.path == '/locations' ? 'text-white' : 'text-gray-300']">
            <Icon icon="mingcute:world-2-fill" class="w-auto h-6" v-if="route.path == '/locations'" />
            <Icon icon="mingcute:world-2-line" class="w-auto h-6" v-else />
            <span class="text-[11px]"
              :class="[route.path == '/locations' ? 'font-normal' : 'font-light']">Locations</span>
            <ion-ripple-effect></ion-ripple-effect>
          </router-link>
        </div>
      </ion-tab-bar> -->
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
import { createFadeAnimation } from '@/animations/nav-animation'
import { ref } from 'vue';

const route = useRoute()
const animation = ref(createFadeAnimation); // Asignar la animación creada

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
