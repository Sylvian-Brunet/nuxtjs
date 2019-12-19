<template>
  <div class="container">
      <img src="/pictures/others/logo.png" class="logo">
      <div class="produit" v-for="produit in products" :key="produit['_id']" :id="produit['_id']">
        <div class="Pimg">
          <img :src="produit['picture']" style="border-radius: 5px;">
        </div>
        <div class="Pinfo">
          <div>Article : {{ produit['name'] }}</div>
          <div>Marque : {{ produit['brand'] }}</div>
          <div>Quantité : {{ produit['quantity'] }}</div>
          <div>Note : {{ produit['grade'] }} / 5</div>
          <div class="liste">
            Ingrédients : <input class="show" type="button" @click="show(produit['_id'])" value=">">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
      data: () => {
          return {
              products: [
                  {
                    "picture": "/pictures/products/icetea.jpg",
                    "ingredients": ["eau", "sucre", "acidifiant (acide citrique)", "extrait de thé noir", "jus de peche a base de concentré", "arôme", "antioxydant (acide ascorbique)"],
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton compagny",
                    "bar_code": 186161658448,
                    "grade": "1",
                    "quantity": "50 cl"
                  },
                  {
                      "picture": "/pictures/products/cocaCola.jpg",
                      "ingredients": ["eau gazéifiée", "sucre", "colorant (caramel E150d)", "acidifiant (acide phosphorique)", "arômes naturels (extraits végétaux)"],
                      "_id": "1",
                      "name": "Coca-Cola Original",
                      "brand": "Coca-cola compagny",
                      "bar_code": 7126421987452,
                      "grade": "1",
                      "quantity": "50 cl"
                  },
                  {
                      "picture": "/pictures/products/leffe.jpg",
                      "ingredients": ["eau", "malt d'orge", "mais", "orge", "sucre", "houblon"],
                      "_id": "2",
                      "name": "Leffe Blonde",
                      "brand": "Leffe compagny",
                      "bar_code": 785787855785825,
                      "grade": "2",
                      "quantity": "33 cl"
                  },
                  {
                      "picture": "/pictures/products/orangina.jpg",
                      "ingredients": ["eau gazéifiée", "jus d'orange et autres agrumes", "sucre", "pulpe d'orange", "extrait de zeste d'orange", "arômes naturels"],
                      "_id": "3",
                      "name": "Orangina",
                      "brand": "Orangina compagny",
                      "bar_code": 721824978785857,
                      "grade": "1",
                      "quantity": "50 cl"
                  },
                  {
                      "picture": "/pictures/products/fanta.jpg",
                      "ingredients": ["eau gazéifiée", "jus d'orange", "jus de citron", "sucre", "arômes naturels"],
                      "_id": "4",
                      "name": "Fanta Orange",
                      "brand": "Fanta compagny",
                      "bar_code": 7216712791297,
                      "grade": "2",
                      "quantity": "50 cl"
                  },
                  {
                      "picture": "/pictures/products/sprite.jpg",
                      "ingredients": ["eau gazéifiée", "sucre", "acidifiants (acide citrique, citrate de sodium)", "arômes naturels de citron-citron vert", "édulcorant (glycosides de stéviol)"],
                      "_id": "5",
                      "name": "Sprite Nature",
                      "brand": "Sprite compagny",
                      "bar_code": 121346751545622,
                      "grade": "2",
                      "quantity": "50 cl"
                  }
                  ,{
                      "picture": "/pictures/products/panache.jpg",
                      "ingredients": ["bière", "limonade"],
                      "_id": "6",
                      "name": "Panache",
                      "brand": "Panach'",
                      "bar_code": 1427271174156418,
                      "grade": "3",
                      "quantity": "25 cl"
                  }
              ],
          }
      },
      methods: {
          show(id) {
              let div = document.getElementById(id).getElementsByClassName('liste');
              let HTML = '<ul>';
              for(let i = 0; i < this.products[id]['ingredients'].length; i++) {
                  HTML += `<li>` + this.products[id]['ingredients'][i] + `</li>`
              }
              HTML += '</ul>';
              div[0].innerHTML += HTML;
          },
      }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 20px;
  }

  img {
    width: 100%;
  }

  body {
    background-color: lightblue;
  }

  .show {
    padding: 0 2px;
    border-color: transparent;
    background-color: lightblue;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    padding: 5px;
  }

  .logo {
    width: 100%;
  }

  .produit {
    display: flex;
    flex-direction: row;
    background-color: lightblue;
    width: 100%;
  }

  .Pimg, .Pinfo {
    margin: 5px;
  }

  .Pimg, .Pimg img {
    width: 110px;
    height: 110px;
  }

  .Pinfo {
    background-color: white;
    width: 100%;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    .container {
      width: 768px;
    }
  }

</style>
