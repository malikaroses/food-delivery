<template>
  <div class='v-cart'>
    <Orders />
    <div class="hero">
              <h2>ORDERS</h2>
      <h1>Your <strong>Orders</strong></h1>

     <div class="page">
          <p> 
              <!-- <router-link class="nav__link" to="/orders">Orders</router-link>
              <router-link class="nav__link" to="/profile">Profile</router-link> -->
              </p>
     </div>
        <div class="email">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L10.53 8.67C10.21 8.87 9.79 8.87 9.47 8.67L2.4 4.25C2.15 4.09 2 3.82 2 3.53C2 2.86 2.73 2.46 3.3 2.81L10 7L16.7 2.81C17.27 2.46 18 2.86 18 3.53C18 3.82 17.85 4.09 17.6 4.25Z" fill="#C3CAD9"/>
            </svg>
      <span>Subscribe To Our Newsletter</span>
      </div>
       </div>
    <v-cart-item
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
    />
    <div class="v-cart__total">
      <p class="total__name">Total:</p>
      <p>{{cartTotalCost | toFix | formattedPrice}}</p>
    </div>
  </div>
</template>

<script>
  import vCartItem from './v-cart-item'
  import toFix from "../../filters/toFix";
  import formattedPrice from "../../filters/price-format";
  import {mapActions} from 'vuex'
  import Orders from '../layouts/Orders.vue'
  export default {
    name: "v-cart",
    components: {
      vCartItem,
      Orders
    },
    props: {
      cart_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {}
    },
    filters: {
      formattedPrice,
      toFix
    },
    computed: {
      cartTotalCost() {
        let result = []

        if (this.cart_data.length) {
          for (let item of this.cart_data) {
            result.push(item.price * item.quantity)
          }

          result = result.reduce(function (sum, el) {
            return sum + el;
          })
          return result;
        } else {
          return 0
        }
      }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM'
      ]),
      increment(index) {
        this.INCREMENT_CART_ITEM(index)
      },
      decrement(index) {
        this.DECREMENT_CART_ITEM(index)
      },
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index)
      }
    }
  }
</script>

<style lang="scss">
.hero{
        
        height: vw(195);
        display: flex;
        align-items: center;
        position: relative;
        
        
h1{
                display: inline-block;
                margin: vw(100) vw(80);
                @include font(vw(30), normal, normal);
                font-family: "SF Pro Display", Arial;
                line-height: 50px;
                color: $text-GrayBlue50;
            }
            h2{
                margin: 0 vw(100);
                display: inline-block;
                position: absolute;
                @include font(vw(90), 800, vw(160));
                font-family: "SF Pro Display", Arial;
                color: #002881;
                mix-blend-mode: normal;
                opacity: 0.03;
            }
            .email{
              margin-left: vw(600);
            }
            a{
                margin-left: vw(100);
            }
                svg{
                    margin: 0 vw(30) 0 0;
                }
                span{
                    @include font(vw(14), bold, vw(30));
                    font-family: SF Pro Display, Arial;
                    color: $text-GrayBlue70;
                }
  .v-cart {
    margin-bottom: 100px;
    &__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: $padding*2 $padding*3;
      display: flex;
      justify-content: center;
      
      color: #ffffff;
      font-size: 20px;
    }
    .v-cart-item{
      width: vw(200);
    }
    .total__name {
      margin-right: $margin*2;
    }
  }
}
</style>
