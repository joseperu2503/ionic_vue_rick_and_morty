<template>
  <ion-card @click="goLocation" class="ion-activatable ripple-parent">
    <div class="py-3 px-3 flex flex-col justify-between transition-all">
      <div class="text-base font-semibold">
        {{ location.name }}
      </div>
      <div class="flex mt-4 gap-2 items-center justify-start">
        <div
          class="border-rick-3 border px-2 py-1 rounded-lg text-xs font-medium"
        >
          {{ location.dimension }}
        </div>
        <div
          class="border-rick-green-1 border px-2 py-1 rounded-lg text-xs font-medium"
        >
          {{ location.type }}
        </div>
      </div>
    </div>
    <ion-ripple-effect type="unbounded"></ion-ripple-effect>
  </ion-card>
</template>
<script lang="ts" setup>
import { Location } from "@/interfaces/location.interface";
import { toRefs } from "vue";
import { useIonRouter, IonRippleEffect } from "@ionic/vue";
import { IonCard } from "@ionic/vue";

const router = useIonRouter();

const props = defineProps<{ location: Location }>();
const { location } = toRefs(props);

const goLocation = () => {
  router.push(`/locations/${location.value.id}`);
};
</script>
