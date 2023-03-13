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

type Storage = Partial<{ page: number; scrollY: number }>;

const { storage } = useSessionStorage<Storage>("product-state", {
  page: 1,
  scrollY: 0,
});
const { scroll } = useScrollPosition();
const { products, increment } = useProductList(storage);

const onMoreHandler = () => increment();

watch(
  products,
  () => {
    const top = storage.value?.scrollY;
    if (top) window.scrollTo({ top });
  },
  { flush: "post" }
);

// 상세 페이지로 이동 요청에 의해 페이지 떠날 때 스크롤 위치 저장
onBeforeRouteLeave(({ name }) => {
  if (name === "product-id") {
    storage.value = { ...storage.value, scrollY: scroll.y };
  } else {
    storage.value = null;
  }
});
</script>

<style scoped lang="scss">
.vurtual-list {
  display: flex;
  flex-wrap: wrap;

  > div {
    flex-basis: 50%;
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
