<template>
  <nav>
    <ul>
      <li>
        <nuxt-link exact to="/"><Logo /></nuxt-link>
      </li>
      <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
    </ul>
    <nuxt-link to="/cart">Cart</nuxt-link>
  </nav>
</template>

<script>
import Logo from '@/components/Logo.vue';
export default {
  components: {
    Logo,
  },
};
</script>

<style scoped></style>
