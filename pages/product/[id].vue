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

const { storage } = useSessionStorage("product-state");

onBeforeRouteLeave(({ name }) => {
  if (name !== "products") {
    storage.value = null;
  }
});
</script>

<style scoped></style>
