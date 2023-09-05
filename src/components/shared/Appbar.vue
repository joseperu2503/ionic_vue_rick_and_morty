<template>
  <ion-toolbar class="safe-area-top">
    <ion-title>{{ title }}</ion-title>
    <ion-buttons slot="primary">
      <ion-button @click="openAuthModal" v-if="!user">
        <ion-icon slot="icon-only" :icon="personCircle" color="light"></ion-icon>
      </ion-button>
      <ion-button @click="openAuthModal" fill="solid" shape="round" class="aspect-square profile" v-else>
        {{ nameInitial }}
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</template>

<script setup lang="ts">
import { IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/vue';
import { personCircle } from 'ionicons/icons';
import { useAuthModal } from '@/composables/useAuthModal';
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia';

const authStore = useAuthStore()
const { nameInitial, user } = storeToRefs(authStore);
defineProps<{ title: string }>();

const { openAuthModal } = useAuthModal()

</script>
<style scoped>
ion-button.profile {
  --background: #5CAD4A;
  --background-activated: #208D45;
}

ion-toolbar {
  --padding-end: 12px;
  --padding-start: 12px;

}
</style>
