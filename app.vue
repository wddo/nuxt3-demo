<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { store } from "~~/app/store";

onMounted(() => {
  store.setInitial(true);
});
</script>
