<template>
  <div @click="goEpisode"
    class="backdrop-blur-sm bg-black/60 hover:bg-black/30 shadow-sm shadow-rick-green-1 rounded-lg py-4 px-4 flex flex-col justify-between transition-all cursor-pointer">
    <div class="text-white flex justify-end mb-4">
      {{ episode.episode }}
    </div>
    <div class="text-white text-base sm:text-lg md:text-xl line-clamp-1">
      {{ episode.name }}
    </div>

  </div>
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

<style scoped></style>
