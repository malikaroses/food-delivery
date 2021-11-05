<template>
    <div class="container">
        <Popup
            v-if="IsPopupVisible"
            @click="hand"
            @closePopup="closeInfoPopup"
            :foodId="products"
        />
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
        <div class="row">
            <div class="col-3">
                <div
                    class="menu-item"
                    v-for="product in products"
                    :key="product.id"
                >
                    <img
                        class="menu-item__img"
                        :src="product.image"
                        alt="food"
                    />
                    <div class="weight">
                        <img
                            class="weight-icon"
                            src="./../assets/img/weight.svg"
                        />
                        <img src="./../assets/img/spicy.svg" />
                    </div>

                    <div class="buttons">
                        <button @click="ShowPopup" class="price">
                            {{ product.price }}
                        </button>
                        <button @click="ShowPopup" class="buy">
                            <img src="./../assets/img/buy.svg" />
                        </button>
                    </div>

                    <h6 class="menu-item__title">{{ product.title }}</h6>
                    <div class="menu-item__bottom">
                        <p>{{ product.details }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Popup from "./Popup.vue";
import getFetch from "@/composables/getFetch";
import Cart from "../components/Cart.vue";
import useCounter from "@/composables/useCounter";
import { ref } from "@vue/reactivity";
export default {
    components: { Popup },
    setup() {
        const { count, next, plusOne, minusOne } = useCounter();
        const IsPopupVisible = ref(false);

        const oneProduct = ref("");
        const ShowPopup = () => {
            IsPopupVisible.value = true;
        };

        const { fetchPosts, posts: products } = getFetch();
        fetchPosts();
        const handleClick = (e) => {
            console.log(e.target);
        };

        return {
            handleClick,
            products,
            oneProduct,
            ShowPopup,
            IsPopupVisible,
            count,
            plusOne,
            minusOne,
        };
    },
    // data() {
    //   return {
    //     cart: [],
    //     products: [],
    //     IsPopupVisible: false,
    //   };
    // },
    // components: {
    //   Popup,
    //   Cart,
    // },
    // methods: {
    //   ,
    //   closeInfoPopup() {
    //     this.IsPopupVisible = false;
    //   },
    //   addToCart(products) {
    //     ADD_TO_CART(this.products);
    //   },
    // },
};
</script>

<style lang="scss" scoped>
.container {
    max-width: vw(1110);
}
.menu {
    .links {
        position: relative;
        margin: 0 vw(100);
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
.row {
    display: flex;
    margin: vw(60) 0;
    .col-3 {
        display: inline-flex;
        flex-wrap: wrap;
    }
    .menu-item {
        position: relative;
        background: $bg-white;
        box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.05);
        border-radius: vw(5);
        margin: vw(20) vw(15) vw(20) 0;
        width: vw(255);
        height: vw(350);
        &__img {
            width: vw(255);
            height: vw(180);
        }
        &__title {
            @include font(vw(14), 700, vh(30));
            color: $text-GrayBlue50;
            text-align: center;
            padding: 0 vw(30);
        }
        &__bottom {
            @include font(vw(12), 700, vh(20));
            color: $text-GreyBlue80;
            text-align: center;
            padding: 0 vw(30);
        }
        .weight {
            position: absolute;
            display: inline-flex;
            width: vw(70);
            top: vw(25);
            left: vw(20);
            .weight-icon {
                margin-right: vw(100);
            }
        }
        .buttons {
            position: absolute;
            display: inline-flex;
            top: vw(135);
            left: vw(20);
            .price {
                display: inline-flex;
                position: absolute;
                top: vw(25);
                left: vw(40);
                border: none;
                @include font(vw(12), 800, vh(20));
                text-align: center;
                background: $bg-white;
                color: $text-GrayBlue60;
                box-shadow: 0px 10px 30px rgba(54, 61, 77, 0.05);
                border-radius: 30px;
                padding: vw(15) vw(21);
                width: vw(70);
                height: vw(50);
            }
            .buy {
                position: absolute;
                top: vw(15);
                left: vw(110);
                border: none;
                background: none;
            }
        }
    }
}


@media screen and (max-width: 1024px) {
.container {
    padding: 0;
    box-sizing: border-box;
    width: 100%;
}
.menu {
    .links {
        position: relative;
        margin: 0 vmin(100);
        .link {
            margin-right: vmin(30);
            flex-wrap: nowrap;
            @include font(vmin(13), 700, vmin(25)); 
        }
    }
}
.row {
    display: block;
    margin: vmin(60) 0;
    .col-3 {
        display: block;
        flex-wrap: wrap;
    }
    .menu-item {
        position: relative;
        background: $bg-white;
        box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.05);
        border-radius: vmin(5);
        margin: vmin(20) vmin(15) vmin(20) 0;
        width: vmin(255);
        height: vmin(350);
        &__img {
            width: vmin(255);
            height: vmin(180);
        }
        &__title {
            @include font(vmin(14), 700, vmin(30));
            color: $text-GrayBlue50;
            text-align: center;
            padding: 0 vmin(30);
        }
        &__bottom {
            @include font(vmin(12), 700, vmin(20));
            color: $text-GreyBlue80;
            text-align: center;
            padding: 0 vmin(30);
        }
        .weight {
            position: absolutre;
            display: inline-flex;
            width: vmin(70);
            top: vmin(25);
            left: vmin(20);
            .weight-icon {
                margin-right: vmin(100);
            }
        }
        .buttons {
            position: absolute;
            display: inline-flex;
            top: vmin(135);
            left: vmin(20);
            .price {
                display: inline-flex;
                position: absolute;
                top: vmin(25);
                left: vw(40);
                border: none;
                @include font(vw(12), 800, vh(20));
                text-align: center;
                background: $bg-white;
                color: $text-GrayBlue60;
                box-shadow: 0px 10px 30px rgba(54, 61, 77, 0.05);
                border-radius: 30px;
                padding: vw(15) vw(21);
                width: vw(70);
                height: vw(50);
            }
            .buy {
                position: absolute;
                top: vw(15);
                left: vw(110);
                border: none;
                background: none;
            }
        }
    }
}
}
</style>
