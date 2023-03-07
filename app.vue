<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { context } from "~~/app/store";

onMounted(() => {
  context.initial = true;
});
</script>
