<template>
  <div class="product-item-wrapper">
    <article class="product-item">
      <RouterLink :to="`./product/${id}`"></RouterLink>
      <div class="product-item-image">
        <img :src="imgUri" alt="제품명" />
      </div>
      <div class="product-item-content">
        <h1>
          제품명 제품명 제품명 제품명 제품명 제품명 제품명 제품명 제품명 제품명
          제품명 제품명 제품명 제품명 제품명 제품명
        </h1>
        <div class="product-item-content__state">리뷰 9,999</div>
        <span class="product-item-content__price"
          ><strong>99,999원</strong></span
        >
        <div class="product-item-content__badge">
          <span>특가</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
const { id } = useAttrs();
const imgUri = `https://picsum.photos/200?random=${Math.random()}`;
</script>

<style scoped lang="scss">
.product-item-wrapper {
  margin: 0.5rem;
}
.product-item {
  position: relative;
  border: 1px solid gray;
  border-radius: 0.5rem;
  padding: 0.5rem;

  > a {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  &-image {
    object-fit: cover;

    > img {
      width: 100%;
    }
  }

  &-content {
    h1 {
      margin: 0;
      font-size: 1rem;
    }

    &__badge > span {
      color: white;
      background-color: orangered;
    }
  }
}
</style>
