<template>
  <div>아이디 {{ id }}</div>
</template>

<script setup lang="ts">
const route = useRoute();

const id = ref(route.params.id); // $route.params.id
</script>

<style scoped></style>
