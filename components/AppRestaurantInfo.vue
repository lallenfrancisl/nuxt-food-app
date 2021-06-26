<template>
  <section class="restaurantinfo">
    <div v-for="store in foodData" :key="store.id">
      <h2>{{ store.name }}</h2>
      <p>Delivery Time {{ store.deliveryTime }}</p>
      <p>Rating {{ store.rating }}</p>
      <p v-if="store.freeDelivery" class="label">
        <span>Free Delivery</span>
      </p>

      <div class="row">
        <div
          v-for="menuItem in store.menu"
          :key="menuItem.id"
          class="items"
          :style="`background: url(${menuItem.img}) no-repeat center center`"
        >
          <div class="iteminfo">
            <div>
              <h4>{{ menuItem.item }}</h4>
              <p>{{ formatPrice(menuItem.price) }}</p>
            </div>
            <nuxt-link :to="`/items/${menuItem.id}`">
              <button class="ghost">View Item ></button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    foodData: {
      required: true,
    },
  },
  methods: {
    formatPrice(price) {
      return '$ ' + price.toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped></style>
