<template>
  <div class='v-catalog-item'>

    <v-popup
        v-if="isInfoPopupVisible"
        rightBtnTitle="Add to cart"
        :popupTitle="product_data.name"
        @closePopup="closeInfoPopup"
        @rightBtnAction="addToCart"
    >
      <img class="popup__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">
      <div>
        <p class="details">{{product_data.article}}</p>
      </div>
    </v-popup>
    

    <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img" @click="productClick">
    <p class="title">{{product_data.name}}</p>
    <button class="price">{{product_data.price}} $</button>
    <p class="category">{{product_data.article}} </p>
    <br>
    <button @click="showPopupInfo" class="buy">
    <img src="@/assets/img/buy.svg" />
    </button>
  </div>
</template>

<script>
  import vPopup from '../popup/v-popup'
  import toFix from '../../filters/toFix'
  import formattedPrice from "../../filters/price-format";

  export default {
    name: "v-catalog-item",
    components: {
      vPopup
    },
    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        isInfoPopupVisible: false
      }
    },
    filters: {
      toFix,
      formattedPrice
    },
    computed: {},
    methods: {
      productClick() {
        this.$emit('productClick', this.product_data.article)
      },
      showPopupInfo() {
        this.isInfoPopupVisible = true;
      },
      closeInfoPopup() {
        this.isInfoPopupVisible = false;
      },
      addToCart() {
        this.$emit('addToCart', this.product_data);
      }
    },
    mounted() {
      this.$set(this.product_data, 'quantity', 1)
    }
  }
</script>

<style lang="scss">
  .v-catalog-item {
    position: relative;
    top: 0;
    display: block;
    background-color: $bg-white;
    width: vw(255);
    height: vw(350);
    box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.05);
    border-radius: 5px;
    margin: vw(30) 0 0 vw(30);
    .title{
            @include font(vw(14), 700, vh(30));
            color: $text-GrayBlue50;
            border: none;
            text-align: center;
            padding: vw(30) vw(30) 0 vw(30);
    }
    .category{
            @include font(vw(12), 700, vh(20));
            color: $text-GreyBlue80;
            text-align: center;
            padding: 0 vw(30);
    }
    .price {
                display: inline-flex;
                position: absolute;
                top: 45%;
                left: vw(60);
                border: none;
                @include font(vw(12), 800, vh(20));
                text-align: center;
                background: $bg-white;
                color: $text-GrayBlue60;
                box-shadow: 0px 10px 30px rgba(54, 61, 77, 0.05);
                border-radius: 30px;
                padding: vw(10) vw(21);
                width: vw(70);
                height: vw(40);
    }
    .buy {
                position: absolute;
                top: 41%;
                left: vw(130);
                border: none;
                background: none;
            }
    .popup__image{
      width: vw(290);
      height: vw(250);
      margin-left: vw(60);

    }
    .details{
      @include font(vw(18),700,vh(25));
      color: $text-GrayBlue60;
      display: block;
      width: vw(300);
      margin: vw(40) vw(625);
    }
    &__image {
      width: vw(255);
    }
  }
  @media screen and (max-width: 1024px){
     .container {
       width: vmin(500);
     }
    .v-catalog-item {
    position: relative;
    top: vmin(45);
    left: vmin(30);
    display: block;
    background-color: $bg-white;
    width: vmin(80);
    height: vmin(100);
    box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.05);
    border-radius: 5px;
    margin-left: vmin(10);
    .title{
            @include font(vmin(7), 700, vmin(15));
            color: $text-GrayBlue50;
            border: none;
            text-align: center;
            padding: 0;
    }
    .category{
            @include font(vmin(4), 600, vmin(7));
            color: $text-GreyBlue80;
            text-align: center;
            padding: 0 vw(30);
    }
    .price {
                display: inline-flex;
                position: absolute;
                top: 40%;
                left: vmin(15);
                border: none;
                @include font(vmin(6), 800, vmin(5));
                text-align: center;
                background: $bg-white;
                color: $text-GrayBlue60;
                box-shadow: 0px 10px 30px rgba(54, 61, 77, 0.05);
                border-radius: 30px;
                padding-top: vmin(5);
                width: vmin(25);
                height: vmin(15);
    }
    .buy {
                position: absolute;
                top: 33%;
                z-index: 1;
                left: vmin(40);
                border: none;
                background: none;
                width: vmin(10);
                img{
                   width: vmin(30);
                }
            }
    .popup__image{
      width: vmin(290);
      height: vmin(250);
      
    }
    .details{
      @include font(vw(18),700,vh(25));
      width: vmin(300);
      margin: vmin(40) vmin(625);
    }
    &__image {
      width: vmin(80);
      height: vmin(50);
    }
  }
  }
</style>
