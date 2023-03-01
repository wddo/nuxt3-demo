<template>
  <div>vision</div>
  <div>{{ first.title }}</div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("mountains", () =>
  $fetch("https://api.nuxtjs.dev/mountains")
);

const list = ref<any>(data.value);

const first = list.value.filter((v: object, i: number) => i === 0)[0];

useHead({
  title: first.title,
});
</script>

<style lang="scss" scoped></style>
