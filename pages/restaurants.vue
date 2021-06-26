<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
      <AppSelect @change="selectedRestaurant = $event" />
    </div>

    <AppRestaurantInfo :food-data="filteredRestaurants" />
  </main>
</template>

<script>
import AppRestaurantInfo from '@/components/AppRestaurantInfo.vue';
import AppSelect from '@/components/AppSelect.vue';
import { mapState } from 'vuex';

export default {
  components: {
    AppRestaurantInfo,
    AppSelect,
  },
  data() {
    return {
      selectedRestaurant: '',
    };
  },
  computed: {
    ...mapState(['foodData']),
    filteredRestaurants() {
      return this.selectedRestaurant !== 'all'
        ? this.foodData.filter((el) => {
            const name = el.name.toLowerCase();
            return name.includes(this.selectedRestaurant);
          })
        : this.foodData;
    },
  },
};
</script>

<style lang="scss" scoped></style>
