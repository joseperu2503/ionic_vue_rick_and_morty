<template>
  <ion-card @click="goEpisode" class="ion-activatable ripple-parent">
    <div class="text-sm py-3 px-2 flex gap-x-6 justify-between">
      <div class="text-rick-green-3">
        {{ episode.episode }}
      </div>
      <div class="text-rick-white text-end truncate">
        {{ episode.name }}
      </div>
    </div>
    <ion-ripple-effect type="unbounded"></ion-ripple-effect>
  </ion-card>
</template>

<script setup lang="ts">
import { Episode } from "@/interfaces/episode.interface";
import { toRefs } from "vue";
import { useIonRouter, IonRippleEffect } from '@ionic/vue';
import { IonCard } from '@ionic/vue';

const router = useIonRouter();

const props = defineProps<{ episode: Episode }>();
const { episode } = toRefs(props);

const goEpisode = () => {
  router.push(`/episodes/${episode.value.id}`);
};
</script>
