<script setup lang="ts">
</script>

<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/orders">Orders</router-link>
      <router-link to="/sales">Sales</router-link>
      <router-link to="/stocks">Stocks</router-link>
      <router-link to="/incomes">Incomes</router-link>
    </nav>

    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f3f4f6;
  border-bottom: 1px solid #ddd;
}
.nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
.nav a.router-link-exact-active {
  color: #42b883;
}
.main {
  padding: 1rem;
}
</style>
