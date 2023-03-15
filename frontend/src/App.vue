<template>
  <section class="main">
    <!-- <AppHeader /> -->

    <RouterView />
    <!-- <AppFooter /> -->
    <UserMessage />
  </section>
</template>

<script>
import AppHeader from './cmps/AppHeader.vue';
import AppFooter from './cmps/AppFooter.vue';
import UserMessage from './cmps/UserMessage.vue';
export default {
  created() {
    this.$store.dispatch({ type: 'loadToys' });
  },
  components: {
    // AppHeader,
    AppFooter,
    UserMessage,
  },
};
</script>
