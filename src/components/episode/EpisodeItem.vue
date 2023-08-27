<template>
  <ion-card>
    <div @click="goEpisode"
      class="text-sm py-3 px-2 flex gap-x-6 justify-between transition-all cursor-pointer">
      <div class="text-rick-green-3">
        {{ episode.episode }}
      </div>
      <div class="text-rick-white text-end truncate">
        {{ episode.name }}
      </div>
    </div>
  </ion-card>
</template>

<script setup lang="ts">
import { Episode } from "@/interfaces/episode.interface";
import { toRefs } from "vue";
import { useIonRouter } from '@ionic/vue';
import { useTabStore } from "@/stores/tab";
import { storeToRefs } from 'pinia';

const tabStore = useTabStore();
const { selectedTab } = storeToRefs(tabStore);
const router = useIonRouter();

const props = defineProps<{ episode: Episode }>();
const { episode } = toRefs(props);

const goEpisode = () => {
  router.push(`/${selectedTab.value}/episode/${episode.value.id}`);
};
</script>
<style scoped>
ion-card{
  margin: 0;
}
</style>
