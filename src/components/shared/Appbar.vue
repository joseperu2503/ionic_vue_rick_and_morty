<template>
  <ion-toolbar class="safe-area-top">
    <ion-title>{{ title }}</ion-title>
    <ion-buttons slot="primary">
      <ion-button @click="openAuthModal">
        <ion-icon slot="icon-only" :icon="personCircle" color="light"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</template>

<script setup lang="ts">
import { IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/vue';
import { personCircle } from 'ionicons/icons';
import { useAuthModal } from '@/composables/useAuthModal';

defineProps<{ title: string }>();

const { openAuthModal } = useAuthModal()

</script>

