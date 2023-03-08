<template>
  <div class="product-item-wrapper">
    <article class="product-item">
      <RouterLink :to="`./product/${id}`"></RouterLink>
      <div class="product-item-image">
        <img
          :src="imgUri"
          loading="lazy"
          onerror="this.style.display='none';"
          alt="제품명"
        />
        <ContentLoader class="fallback" viewBox="0 0 400 400" :speed="0.7" />
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
import { ContentLoader } from "vue-content-loader";

const { id } = useAttrs();
const imgUri = `https://picsum.photos/600?random=${Math.random()}`;
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
    z-index: 1;
  }

  .fallback {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &-image {
    position: relative;
    padding-bottom: 100%;

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
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
