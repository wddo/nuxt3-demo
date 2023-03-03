<template>
  <div>
    <strong>Product Detail</strong>

    <p>
      <span>{{ route.params.id }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped></style>
