<template>
  <header>
    <div class="main-header">
      <h1>Header</h1>
      <nav class="main-van">
        <router-link to="/">Home</router-link> | <router-link to="/toys">Our Toys</router-link> |
        <router-link to="/chart">Chart</router-link>
        |
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>
