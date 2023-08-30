<template>
  <div @click="goCharacter()"
    class="relative w-full aspect-square rounded-2xl overflow-hidden"
    :class="{ 'animate-pulse': !imageLoaded && !imageError }">

    <img src="@/assets/avatar_default.jpeg" class="w-full absolute" />
    <ion-img :src="character.image" class="w-full h-full absolute " @ionImgWillLoad="onImageLoad" @ionError="onImageError"
      v-if="!imageError" />
    <div class="absolute bg-gradient-to-t from-black bottom-0 h-1/5 w-full ">
    </div>
    <div class="absolute bottom-0 h-2/5 w-full px-4 flex items-end pb-2 sm:pb-4">
      <h2 class="text-sm text-rick-white leading-none truncate">
        {{ character.name }}
      </h2>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { toRefs, ref } from "vue";
import { useIonRouter } from '@ionic/vue';
import { Character } from "@/interfaces/character.interface.ts";
import { IonImg } from '@ionic/vue';
import { useTabStore } from "@/stores/tab";
import { storeToRefs } from 'pinia';

const tabStore = useTabStore();
const { selectedTab } = storeToRefs(tabStore);
const router = useIonRouter();

const props = defineProps<{ character: Character }>();
const { character } = toRefs(props);
const imageLoaded = ref(false);
const imageError = ref(false);

const goCharacter = () => {
  router.push(`/${selectedTab.value}/character/${character.value.id}`);
};

const onImageLoad = () => {
  imageLoaded.value = true;
  imageError.value = false;
};

const onImageError = () => {
  imageError.value = true;
};
</script>
