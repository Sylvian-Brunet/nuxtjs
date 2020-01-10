<template>
  <div class="products">
    <div class="qrcode">
      <qrcode-stream @decode="onDecode"></qrcode-stream>
      <!--<qrcode-drop-zone></qrcode-drop-zone>
      <qrcode-capture></qrcode-capture>-->
    </div>

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
  import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

  export default {
      components: {
          QrcodeStream,
          QrcodeDropZone,
          QrcodeCapture
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
      background-color: green;
      width: 300px;
      padding: 10px;
      margin-top: 5px;
      border-radius: 5px;
    }
    .product__infos {

    }
    .product__picture {
      text-align: center;
    }
    .product__picture img {
      width: 100px;
      height: 100px;
    }
    .product__name {
      text-align: center;
    }
</style>
