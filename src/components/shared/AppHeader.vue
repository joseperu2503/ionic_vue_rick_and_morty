<template>
  <div class="fixed top-0 right-0 left-0 z-10">
    <div class="h-28 pb-12 w-full bg-gradient-to-b from-black fixed z-20 top-0 px-8 flex items-center justify-between">
      <div>
        <img src="@/assets/logo.png" class="h-10 cursor-pointer" @click="goHome" />
      </div>
      <!-- <i class="fas fa-bars text-white text-2xl sm:hidden" @click="toggleSidebar"></i>
      <nav class="hidden text-white text-xl sm:flex gap-8">
        <router-link active-class="active" to="/" class="neon">Home</router-link>
        <router-link active-class="active" to="/characters" class="neon">Characters</router-link>
        <router-link active-class="active" to="/locations" class="neon">Locations</router-link>
        <router-link active-class="active" to="/episodes" class="neon">Episodes</router-link>
      </nav> -->
    </div>
    <div class="bg-black w-full h-16 fixed top-0 z-10" :style="`opacity: ${opacity};`"></div>
    <!-- <div class="fixed top-0 right-0 left-0 bottom-0 bg-black/70 z-10 backdrop-blur-sm transition-all"
      :class="[showSideBar ? 'translate-x-0' : 'translate-x-full']">
      <div class="flex h-full flex-col items-center justify-center text-white text-xl sm:flex gap-4">
        <router-link active-class="active" to="/" class="neon">Home</router-link>
        <router-link active-class="active" to="/characters" class="neon">Characters</router-link>
        <router-link active-class="active" to="/locations" class="neon">Locations</router-link>
        <router-link active-class="active" to="/episodes" class="neon" @click="toggleSidebar">Episodes</router-link>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { useSidebarStore } from "@/stores/sidebar";
import { storeToRefs } from "pinia";
import { useAppbarStore } from "@/stores/appbar";
import { useScroll } from "@/composables/useScroll";

const router = useRouter();

const sidebarStore = useSidebarStore();
const { showSideBar } = storeToRefs(sidebarStore);

const appbarStore = useAppbarStore();
const { opacity } = storeToRefs(appbarStore);

onMounted(() => {
  scroll();
  document.getElementById("body")?.addEventListener("scroll", scroll);
})

onBeforeUnmount(() => {
  document.getElementById("body")?.removeEventListener("scroll", scroll);
})

const { scroll } = useScroll()

const goHome = () => {
  router.push("/");
};

const toggleSidebar = () => {
  showSideBar.value = !showSideBar.value;
};

</script>

<style scoped></style>
