<template>
  <header>
    <h2>Header</h2>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/about">about</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/esg" noPrefetch>esg</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/products">products</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
header {
  background-color: pink;
}
</style>
