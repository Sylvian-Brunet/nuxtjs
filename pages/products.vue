<template>
  <div class="products">
    <div class="qrcode">
      <qrcode-stream @decode="onDecode"></qrcode-stream>
      <!--<qrcode-drop-zone></qrcode-drop-zone>
      <qrcode-capture></qrcode-capture>-->
    </div>
    <product v-for="(product, i) in products" :key="i" class="products__product" :product="product"></product>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader';
  import Product from '~/components/Product'

  export default {
      components: {
          QrcodeStream,
          QrcodeDropZone,
          QrcodeCapture,
          Product
      },
      mounted() {
          this.fetchProducts();
      },
      computed: mapState ({
          products : state => state.products,
      }),
      methods: {
          onDecode: function(result) {
              const matchingProduct = this.products.find(product => product.bar_code === result);
              this.$router.push({
                  path: matchingProduct ? `product/${matchingProduct._id}` : '404'
              })
          },
          ...mapActions(['fetchProducts']),
      }
  }
</script>

<style>
    .products {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .qrcode {
      width: 300px;
      height: 300px;
    }
    .products__product {
      background-color: lightblue;
      width: 300px;
      padding: 10px;
      margin-top: 5px;
      border-radius: 5px;
    }
</style>
