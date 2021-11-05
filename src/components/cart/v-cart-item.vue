<template>
  <div class='v-cart-item'>
      <div class="v-cart-item__info">
        <ul>
                 <li class="nav__data">Order</li>
                 <li class="nav__order">N-12042</li>
                 <li class="nav__item">18 Sep 2021</li>
             </ul>
             <ul >
                 <li class="nav__data">Restaurant</li>
                 <li class="nav__order">Park & Pizzas</li>
                 <li class="nav__item">Contacts</li>
             </ul>
             <ul >
                 <li class="nav__data">Dishes</li>
                 <li class="nav__order">{{cart_item_data.name}}</li>
                 <li class="nav__item">View Order</li>
             </ul>
             <ul >
                 <li class="nav__data">Restaurant Address</li>
                 <li class="nav__order">244 Madison Ave 5h</li>
                 <li class="nav__item">New York, NY 10016</li>
             </ul>
              <ul >
                 <li class="nav__data">Price</li>
                 <li class="nav__order">{{cart_item_data.price | toFix | formattedPrice}}</li>
                 <li class="nav__item">discount</li>
             </ul>
             <ul >
                 <li class="nav__data">Order Status</li>
                 <li class="nav__order">Delivery Order</li>
                 <li class="nav__item">View  Location</li>
              </ul>
              <ul>
             
            </ul>
             

      
      
      
    </div>
    <!-- <div class="v-cart-item__quantity">
      <p></p>
      <span class="quantity__tools">
        <span class="quantity__btn" @click="decrementItem">-</span>
        {{cart_item_data.quantity}}
        <span class="quantity__btn" @click="incrementItem">+</span>
      </span>
    </div>
    < -->
  </div>
</template>

<script>
import toFix from '../../filters/toFix'
import formattedPrice from "../../filters/price-format";


  export default {
    name: "v-cart-item",
    props: {
      cart_item_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    filters: {
      toFix,
      formattedPrice
    },
    computed: {},
    methods: {
      decrementItem() {
        this.$emit('decrement')
      },
      incrementItem() {
        this.$emit('increment')
      },
      deleteFromCart() {
        this.$emit('deleteFromCart')
      }
    }
  }
</script>

<style lang="scss">
  .v-cart-item {
    display: block;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    background-color: $bg-white;
    height: vw(160);
    margin-top: vw(30) ;
    margin-right: vw(300);
    margin-left: vw(80);
    &__info{
      display: flex;
      list-style: none;
      background-color: $bg-white;
      width: vw(80);
      height: vw(160);
      ul{
        text-align: left;
        display: block;
        li{
          text-align: left;
          display: inline-flex;
          list-style: none;
          @include font(vw(12), 700,vh(20));
          color: $text-GrayBlue70;
        }
      }
      .nav__order{
        @include font(vw(12), 700,vh(20));
        color: $text-GrayBlue50;
        background-color: $bg-white;
      }
      .nav__data{
        margin-right: vw(70);
        background-color: $bg-white;
      }
      .nav__item{
        width: vw(80);
        flex-wrap: nowrap;
        background-color: $bg-white;
      }
      .nav__duoble{

        background-color: $bg-white; 
      }
    }
    &__image {
      max-width: 50px;
    }

    .quantity__btn {
      cursor: pointer;
    }

    .quantity__tools {
      user-select: none;
    }
  }
  
</style>
