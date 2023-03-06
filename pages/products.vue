<template>
  <div>
    <div class="vurtual-list">
      <div v-for="prod in products.data">
        <ProductItem :id="prod.id" />
      </div>
    </div>
    <div class="vurtual-list-more">
      <button class="vurtual-list-more__button" @click="onMoreHandler">
        more
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductList } from "~~/composables/product/useProduct";

const { products, getProducts, increment } = useProductList();

if (!products.data.length) onMounted(getProducts);

const { scroll } = useScrollPosition();
const { storage } = useSessionStorage<{ scrollY: number }>(
  "product-list-state",
  { scrollY: 0 }
);

onBeforeRouteLeave(({ name }) => {
  if (name === "product-id") {
    console.log(scroll.y);
    storage.value!.scrollY = scroll.y;
  }
});

const onMoreHandler = () => {
  console.log("more");

  increment();
};
</script>

<style scoped lang="scss">
.vurtual-list {
  display: flex;
  flex-wrap: wrap;

  > div {
    max-width: 50%;
    min-width: 340px;
  }
}

.vurtual-list-more {
  background-color: lightgray;
  padding: 1rem;

  > button {
    display: block;
    position: relative;
    width: 100%;
    height: 2rem;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>
