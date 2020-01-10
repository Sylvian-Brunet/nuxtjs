<template>
  <div class="products">
    <div v-for="(product, i) in products" :key="i" class="products__product">
      <div class="product__infos">
        <div class="product__picture">
          <img :src="product.pictures[0]">
        </div>
        <div class="product__name"> {{ product.name }} </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
      mounted() {
          this.fetchProducts();
      },
      computed: mapState ({
          products : state => state.products,
      }),
      methods: {
          ...mapActions(['fetchProducts']),
      }
  }
</script>

<style>

</style>
