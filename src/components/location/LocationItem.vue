<template>
  <div
    class="backdrop-blur-sm bg-black/60 hover:bg-black/30 shadow-sm shadow-rick-2 rounded-lg py-3 px-3 flex flex-col justify-between transition-all cursor-pointer"
    @click="goLocation()">
    <div class="text-rick-white text-base">
      {{ location.name }}
    </div>
    <div class="flex mt-4 gap-2 items-center justify-start">
      <div class="bg-rick-3 px-2 py-1 rounded-md text-sky-900 text-xs font-semibold">
        {{ location.dimension }}
      </div>
      <div class="bg-rick-green-2 px-2 py-1 rounded-md text-rick-white text-xs font-semibold">
        {{ location.type }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Location } from "@/interfaces/location.interface";
import { toRefs } from "vue";
import { useIonRouter } from '@ionic/vue';
import { useTabStore } from "@/stores/tab";
import { storeToRefs } from 'pinia';

const tabStore = useTabStore();
const { selectedTab } = storeToRefs(tabStore);
const router = useIonRouter();

const props = defineProps<{ location: Location }>();
const { location } = toRefs(props);

const goLocation = () => {
  router.push(`/${selectedTab.value}/location/${location.value.id}`);
};
</script>
