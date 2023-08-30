<template>
  <ion-card>
    <div class="py-3 px-3 flex flex-col justify-between transition-all" @click="goLocation()">
      <div class="text-rick-white text-base">
        {{ location.name }}
      </div>
      <div class="flex mt-4 gap-2 items-center justify-start">
        <div class="border-rick-3 border px-2 py-1 rounded-lg text-rick-3 text-xs font-medium">
          {{ location.dimension }}
        </div>
        <div class="border-rick-green-1 border px-2 py-1 rounded-lg text-rick-white text-xs font-medium">
          {{ location.type }}
        </div>
      </div>
    </div>
  </ion-card>
</template>
<script lang="ts" setup>
import { Location } from "@/interfaces/location.interface";
import { toRefs } from "vue";
import { useIonRouter } from '@ionic/vue';
import { useTabStore } from "@/stores/tab";
import { storeToRefs } from 'pinia';
import { IonCard } from '@ionic/vue';

const tabStore = useTabStore();
const { selectedTab } = storeToRefs(tabStore);
const router = useIonRouter();

const props = defineProps<{ location: Location }>();
const { location } = toRefs(props);

const goLocation = () => {
  router.push(`/${selectedTab.value}/location/${location.value.id}`);
};
</script>
<style scoped>
ion-card {
  margin: 0;
}
</style>
