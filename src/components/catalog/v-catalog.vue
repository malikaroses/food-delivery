<template>
  <div class='v-catalog'>

    

    
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
    </router-link>
    <Hero />
    <div class="filters">
      <div class="menu">
            <div class="links">
                <a class="link" href="">Popular Dishes</a>
                <span></span>
                <a class="link" href="">Salads</a>
                <a class="link" href="">Snaks</a>
                <a class="link" href="">Burgers</a>
                <a class="link" href="">Steaks</a>
                <a class="link" href="">Hot Dishes</a>
                <a class="link" href="">Dessert</a>
                <a class="link" href="">Kid Food</a>
                <a class="link" href="">Vegan</a>
            </div>
        </div>
    </div>
    <div class="v-catalog__list">
      <v-catalog-item
          v-for="product in filteredProducts"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
          @productClick="productClick"
      />
    </div>
    
  </div>
  
</template>

<script>
  import vCatalogItem from './v-catalog-item'
  import {mapActions, mapGetters} from 'vuex'
  
  
  import Hero from '../layouts/Hero.vue'
import VCart from '../cart/v-cart.vue'

  export default {
    name: "v-catalog",
    components: {
      Hero,
      vCatalogItem,
      
     
        
     
    },
    props: {},
    data() {
      return {
        categories: [
          
          
        ],
        selected: 'Все',
        sortedProducts: [],
        minPrice: 0,
        maxPrice: 10000,
        messages: []
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART',
        'IS_MOBILE',
        'IS_DESKTOP',
        'SEARCH_VALUE'
      ]),
      filteredProducts() {
        if (this.sortedProducts.length) {
          return this.sortedProducts
        } else {
          return this.PRODUCTS
        }
      },
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      productClick(article) {
        this.$router.push( {name: 'product', query: { 'product': article }})
      },
      setRangeSlider() {
        if (this.minPrice > this.maxPrice) {
          let tmp = this.maxPrice;
          this.maxPrice = this.minPrice;
          this.minPrice = tmp;
        }
        this.sortByCategories()
      },
      sortByCategories(category) {
        let vm = this;
        this.sortedProducts = [...this.PRODUCTS]
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return item.price >= vm.minPrice && item.price <= vm.maxPrice
        })
        if (category) {
          this.sortedProducts = this.sortedProducts.filter(function (e) {
            vm.selected === category.name;
            return e.category === category.name
          })
        }
      },
      addToCart(data) {
        this.ADD_TO_CART(data)
          .then(() => {
            let timeStamp = Date.now().toLocaleString();
            this.messages.unshift(
              {name: 'Товар добавлен в корзину', icon: 'check_circle', id: timeStamp}
            )
          })
      },
      sortProductsBySearchValue(value) {
        this.sortedProducts = [...this.PRODUCTS]
        if (value) {
          this.sortedProducts = this.sortedProducts.filter(function (item) {
            return item.name.toLowerCase().includes(value.toLowerCase())
          })
        } else {
          this.sortedProducts = this.PRODUCTS;
        }
      }
    },
    watch: {
      SEARCH_VALUE() {
        this.sortProductsBySearchValue(this.SEARCH_VALUE);
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            this.sortByCategories()
            this.sortProductsBySearchValue(this.SEARCH_VALUE)
          }
        })
    }
  }
</script>

<style lang="scss">
  .v-catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      width: vw(1200);
      margin-left: vw(70);
      align-items: center;
      
    }

    &__link_to_cart {
      width: vw(200);
      
      position: absolute;
      top: vw(120);
      z-index: 10;
      right: vw(150);
      padding: $padding*2;
      border: solid 1px $bg-gray;
      @include font(vw(17), 700, vh(20));
      color: $text-GrayBlue50;
    }
  }
.menu {
    .links {
        position: relative;
        margin-left: vw(-200);
        span::before {
            content: "";
            position: absolute;
            bottom: -20px;
            left: vw(30);
            height: vw(4);
            width: vw(30);
            background-color: $text-puple;
            transform: scale(0);
        }
        span:hover::before {
            transform: scale(1);
        }
        .link {
            margin-right: vw(30);
            flex-wrap: nowrap;
            @include font(vw(13), 700, vh(25));
            color: $text-GrayBlue70;
        }
        .link:hover {
            color: $text-puple;
        }
    }
}
@media screen and (max-width: 1024px){
  .links{
    display: none;
  }
}  

  
</style>
