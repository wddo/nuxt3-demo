<template>
  <li>
    {{ value }}
  </li>
</template>

<script setup lang="ts">
defineProps({
  value: {
    type: String,
    default: "me",
  },
});
</script>

<style scoped></style>
