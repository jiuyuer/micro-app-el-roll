<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav class="nav">
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/vue2/vue2-demo">vue2-demo</RouterLink>
    <RouterLink to="/vue3/vue3-demo">vue3-demo</RouterLink>
    <RouterLink to="/vue3/vue3-demo-window">vue3-demo-window</RouterLink>
  </nav>
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  a {
    font-size: 16px;
    margin: 0 20px;
    &:hover {
      color: blue;
    }
  }
}
.main {
  height: calc(100vh - 80px);
  overflow: auto;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
