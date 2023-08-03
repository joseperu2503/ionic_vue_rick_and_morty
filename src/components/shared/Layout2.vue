<template>
  <ion-page>
    <ion-content>
      <div class="fixed top-0 bottom-0 left-0 right-0  fondo  z-0">
        <AppHeader />

        <ion-router-outlet class="overflow-y-auto " id="body"></ion-router-outlet>
      </div>
    </ion-content>
  </ion-page>
</template>
<script lang="ts" setup>
import AppHeader from '@/components/shared/AppHeader.vue';
import { IonPage, IonContent, IonRouterOutlet } from '@ionic/vue';
</script>

<style scoped>
.fondo {
  background: url("@/assets/fondo2.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
