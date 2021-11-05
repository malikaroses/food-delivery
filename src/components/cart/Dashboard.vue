<template>
  <div class="dashboard">
      <div class="cart">
          <ul class="cart__list">
              

              
          </ul>
      </div>
      <div class="time">
        <p class="cart__list__header">Time & Delivery</p>
        <div class="buttons">
            <label for="">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM13.55 13.8L9.47 11.29C9.17 11.11 8.99 10.79 8.99 10.44V5.75C9 5.34 9.34 5 9.75 5C10.16 5 10.5 5.34 10.5 5.75V10.2L14.34 12.51C14.7 12.73 14.82 13.2 14.6 13.56C14.38 13.91 13.91 14.02 13.55 13.8Z" fill="#C3CAD9"/>
                </svg>
                <input type="text" placeholder="Tomorrow at 12:00"  v-model="post.title"> 
            </label>
            <label for="input">
                <svg class="place__svg" width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 0C3.13 0 0 3.13 0 7C0 11.17 4.42 16.92 6.24 19.11C6.64 19.59 7.37 19.59 7.77 19.11C9.58 16.92 14 11.17 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#C3CAD9"/>
                </svg>
            <input type="text" placeholder=" Near San Francisco, CA"  >
            </label>
            <label for="">
                <svg class="place1__svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2037 12.25L13.6637 11.96C13.0537 11.89 12.4537 12.1 12.0237 12.53L10.1837 14.37C7.35367 12.93 5.03367 10.62 3.59367 7.78L5.44367 5.93C5.87367 5.5 6.08367 4.9 6.01367 4.29L5.72367 1.77C5.60367 0.76 4.75367 0 3.73367 0H2.00367C0.873674 0 -0.0663265 0.94 0.00367348 2.07C0.533673 10.61 7.36367 17.43 15.8937 17.96C17.0237 18.03 17.9637 17.09 17.9637 15.96V14.23C17.9737 13.22 17.2137 12.37 16.2037 12.25Z" fill="#C3CAD9"/>
                </svg>
            <input type="text" placeholder="Phone">
            </label> 
        </div>
      </div>
      <div class="payment">
          <p class="cart__list__header">Total and Payment</p>
          <button>{{cartTotalCost | toFix | formattedPrice}}</button>
      </div>
      <div class="form">
          <p class="title">Number Card</p>
          <label for="">
                <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM5 7V5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7H5Z" fill="#C3CAD9"/>
                </svg>
          <input class="form__inputs" type="password" placeholder="1234 5678 9012 3456">
          </label>
          <p class="title">Name</p>
          <label for="">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="#C3CAD9"/>
                </svg>
            <input class="form__inputs" type="text" placeholder="John Doe">
          </label>
          <div class="bottom__inputs">
          <p >Validity</p>
          <label class="label" for="">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2H15V1C15 0.45 14.55 0 14 0C13.45 0 13 0.45 13 1V2H5V1C5 0.45 4.55 0 4 0C3.45 0 3 0.45 3 1V2H2C0.89 2 0.01 2.9 0.01 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM15 18H3C2.45 18 2 17.55 2 17V7H16V17C16 17.55 15.55 18 15 18ZM5 9H8C8.55 9 9 9.45 9 10V13C9 13.55 8.55 14 8 14H5C4.45 14 4 13.55 4 13V10C4 9.45 4.45 9 5 9Z" fill="#C3CAD9"/>
                </svg>
                <input class="bottom" type="text" placeholder="MM / YY">
          </label>
          <p >CVV</p>
          <label class="label" for="">
              <input class="bottom__cvv" type="text" placeholder="123">
          </label>
          </div>
      </div>
      <button class="checkout" @click="checkout" >Checkout</button>
      


<p>{{post.title}}</p>
      </div>
  
</template>

<script>
import VCartItem from './v-cart-item.vue';
import formattedPrice from "../../filters/price-format";
import VCart from './v-cart.vue';


export default {
data() {
    return {
        post: {
            title: ''
        }
    }
    
},
components:{

},
props: {
  
products: [],
product_data: {
        type: Object,
        default() {
          return {}
        }
},
cart_data: {
        type: Array,
        default() {
          return []
        }
      }

},
methods: {
    addToCart() {
        this.$emit('addToCart', this.product_data);
    },
    checkout() {
        alert('Ваш заказ принят!')
    }
},
computed: {
}
}
</script>

<style lang="scss">
.dashboard{

position: absolute;
max-width: vw(295);
top: vw(95);
right: vw(-5);
z-index: 1;
border-left: 2px solid $bg-GrayBlue95;
display: inline-block;
p{
    border: none;
}
.checkout{
    margin: vw(200) 0 0 0;
    width: vw(250);
    height: vw(50);
    border: none;
    background: $text-puple;
    box-shadow: 0px 10px 30px rgba(136, 51, 255, 0.1);
    border-radius: 30px;
    @include font(vw(12), 700, vh(20));
    color: $text-white;
    padding-top: vw(17);
    margin-left: vw(30);
}
.picture{
    &__bottom{
        width: vw(270);
        margin: 0 vw(15);
    }
    position: relative;
    right: 0;
    margin: vw(70) 0 vw(30) vw(5);
    .title{
        position: absolute;
        bottom: 0;
        @include font(vw(22), 700, vh(30));
        color: $text-white;
        margin: vw(50);
    }
    svg{
        position: absolute;
        top: 0;
        right: 0;
        margin: vw(30);
    }
}
.cart{
    margin: vw(30) 0;
}
.time{
    margin: vw(180) 0 0 0;
    .buttons{
        label{
            border: none;
            position: relative;
            top: vw(10);
            svg{
                position: absolute;
                top: vw(10);
                left: vw(25);
                z-index: 10;
            }
            .place__svg{
                position: absolute;
                top: vw(110);
                left: vw(-230);
                z-index: 10;
            }
            .place1__svg{
                position: absolute;
                top: vw(110);
                left: vw(-210);
                z-index: 10;
            }
        }
        input{
        position: relative;
        top: vw(10);
        display: inline-flex;
        background: #FFFFFF;
        box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
        border-radius: 30px;
        border: none;
        width: vw(230);
        height: vw(50);
        text-align: left;
        padding-left: vw(60);
        margin: vw(50) 0 0 0;
        @include font(vw(12), 700,vh(20));
        color: $text-GrayBlue70;
        @include font(vw(12), 700, vh(20));
        color: $text-GrayBlue70;
        
    }
    }
}
.payment{
    margin: vw(130) 0 0 vw(30);
    button{
        display: inline-flex;
        background: $bg-GrayBlue95;
        box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
        border-radius: 30px;
        border: none;
        width: vw(270);
        height: vw(50);
        padding: vw(15) vw(90);
        margin: vw(70) 0;
        margin-left: vw(-10);
        @include font(vw(12), 700, vh(20));
        color: $text-GrayBlue70;
    }
}
.form{
    
    .title{
       @include font(vw(12), 700, vh(20)); 
       color: $text-GrayBlue50;
       margin-bottom: vw(10) ;
       margin-left: vw(20);
       text-align: left;
    }
    margin: vw(20) 0 0  vw(30);
    label{
            padding: vw(7);
            position: relative;
            top: 0;
            svg{
                position: absolute;
                top: vw(7);
                right: vw(20);
            }
        }
        .form__inputs{
        display: inline-flex;
        background: #FFFFFF;
        box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
        border-radius: 30px;
        border: none;
        width: vw(240);
        height: vw(45);
        text-align: left;
        padding: vw(5) vw(15);
        margin-left:  vw(-30);
        @include font(vw(12), 700,vh(20));
        color: $text-GrayBlue70;
        }
        .bottom__inputs{
            p{
            @include font(vw(12), 700, vh(20)); 
            color: $text-GrayBlue50;
            margin-top: vw(100) ;
            text-align: left;
            }
            .title{
            @include font(vw(12), 700, vh(20)); 
            color: $text-GrayBlue50;
            margin-top: vw(150) ;
            z-index: 10;
            padding-left: vw(20);
            }
            display: inline-flex;
            margin: 0;
            .label   {
            position: relative;
            top: vw(-20);
            left: vw(-70);
            svg{
                position: absolute;
                top: vw(170);
                right: vw(20);
            }
        
        }
        
        .bottom{
            display: inline-flex;
            background: #FFFFFF;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 30px;
            border: none;
            width: vw(120);
            height: vw(50);
            text-align: left;
            padding-right: vw(20);
            margin: vw(150) 0 0 0;
            margin-left: vw(-30);
            @include font(vw(12), 700,vh(20));
            color: $text-GrayBlue70;
            &__cvv{
                display: inline-flex;
                background: #FFFFFF;
                box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
                border-radius: 30px;
                border: none;
                width: vw(70);
                height: vw(50);
                text-align: left;
                padding-right: vw(20);
                margin: vw(150)  0 0;
                margin-right: vw(-100);
                @include font(vw(12), 700,vh(20));
                color: $text-GrayBlue70;
            }
        }
        }
}
.cart__list{
    max-height: vw(353);
    &__header{
    @include font(vw(14), 700, vh(30));
    color: $text-GrayBlue50;
    list-style: none;
    margin-left: vw(-130);
    margin-bottom: vw(-30);
}
.title{
    list-style: none;
    @include font(vw(13), 700, vh(25));
    color: $text-GrayBlue50;
    .weight{
        @include font(vw(13), 700,vh(25));
        color: $text-GreyBlue80;
        margin-left: vw(13);
    }
    .price{
        @include font(vw(13), 700, vh(25));
        color: $text-GrayBlue50;
    }
    .amount{
        @include font(vw(13), 700, vh(25));
        color: $text-GrayBlue70;
        margin-left: vw(44);
    }
}
}
}

    @media screen and(max-width: 1024px) {
        .dashboard{
            display: none;
        }
    }

</style>