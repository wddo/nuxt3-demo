<template>
  <li class="aboutItem__list">
    {{ value }}
  </li>
</template>

<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: "pink",
  },
  value: {
    type: String,
    default: "me",
  },
});
</script>

<style scoped>
.aboutItem__list {
  background-color: v-bind(color);
}
</style>
