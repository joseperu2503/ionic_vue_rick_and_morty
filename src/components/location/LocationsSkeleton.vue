<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-8">
    <ion-card v-for="(item) in 6">
      <div class="py-3 px-3 flex flex-col justify-between">
        <div class="text-rick-white text-base">
          <div class="h-4 my-1 animate-pulse bg-white/50 rounded" :style="{ width: Math.floor(Math.random() * (180 - 66 + 1)) + 66 + 'px' }"/>
        </div>
        <div class="flex mt-4 gap-2 items-center justify-start">
          <div class="h-[26px] animate-pulse bg-rick-3/70 rounded-lg" :style="{ width: Math.floor(Math.random() * (160 - 66 + 1)) + 66 + 'px' }"/>
          <div class="h-[26px] animate-pulse bg-rick-green-1/70 rounded-lg" :style="{ width: Math.floor(Math.random() * (90 - 52 + 1)) + 52 + 'px' }"/>
        </div>
      </div>
    </ion-card>
  </div>
</template>
<script setup lang="ts">
import { IonCard } from '@ionic/vue';

</script>

