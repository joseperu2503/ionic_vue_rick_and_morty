<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    <div v-for="item in 8" class=" w-full aspect-square rounded-2xl overflow-hidden animate-pulse">
      <img src="@/assets/avatar_default.jpeg" class="w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
