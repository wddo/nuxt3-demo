<template>
  <div>
    <h3>about</h3>
    <div class="container">
      <button @click="clickHandler">increment</button>

      <div>
        ref : {{ count }} <br />
        reactive : {{ store.count }}
      </div>

      <ul v-for="item in itmes">
        <AboutItem :value="item.value" />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutItem from "@/components/about/AboutItem.vue";

const count = ref(0);
const store = reactive({
  count: 0,
});
const itmes = reactive([{ value: "foo" }, { value: "bar" }]);

onMounted(() => {
  console.log("mounted");
});

onUpdated(() => {
  console.log("updated");
});

const clickHandler = () => {
  count.value += 1;
  store.count += 1;
};
</script>

<style scoped lang="scss">
.container {
  button {
    position: absolute;
    right: 1rem;
  }
}
</style>
