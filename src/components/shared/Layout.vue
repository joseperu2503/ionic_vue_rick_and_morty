<template>
  <ion-page class="h-max px-8 pt-32 md:pt-40 pb-16 md:pb-36">
    <slot></slot>
  </ion-page>
</template>
<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
</script>

<style scoped>
.ion-page {
  contain: content !important;
}
</style>
