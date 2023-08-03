<template>
  <ion-app>
    <ion-router-outlet :animated="false"/>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { useBackButton } from '@/composables/useBackButton';

useBackButton()
</script>

