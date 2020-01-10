<template>
  <div>
    <div class="product__infos">
      <div class="product__picture">
        <img :src="product.pictures[0]">
      </div>
      <div class="product__name"> {{ product.name }} </div>
      <div class="product__grade">
        <div>Note : {{ product.grade }}/10<span class="space">a</span> </div>
        <circleColor :grade="product.grade"></circleColor>
      </div>
    </div>
  </div>
</template>

<script>
    import circleColor from '~/components/CercleCouleur';

    export default {
        name: "Product",
        components: {circleColor},
        props: {
            product : {
                type: Object,
                default: "",
                required: true
            }
        },
    }
</script>

<style scoped>
  .space {
    color: lightblue;
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
  .product__grade {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
