<template>
  <main class="container">
    <AppHeader />
    <AppRestaurantInfo :food-data="foodData" />
  </main>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppRestaurantInfo from '@/components/AppRestaurantInfo.vue';
import { mapState } from 'vuex';

export default {
  components: {
    AppHeader,
    AppRestaurantInfo,
  },
  computed: {
    ...mapState(['foodData']),
  },
};
</script>

<style></style>
