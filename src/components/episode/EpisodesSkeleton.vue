<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
    <ion-card v-for="(item) in 10">
      <div class="py-3 px-2 flex gap-x-6 justify-between">
        <div class="w-[50px] h-[14px] my-[3px] animate-pulse bg-rick-green-3/70 rounded" />
        <div class="h-[14px] my-[3px] animate-pulse bg-rick-white/50 rounded"
          :style="{ width: Math.floor(Math.random() * (220 - 27 + 1)) + 27 + 'px' }" />
      </div>
    </ion-card>
  </div>
</template>
<script setup lang="ts">
import { IonCard } from '@ionic/vue';

</script>
<style scoped>
ion-card {
  margin: 0;
}
</style>

