<template>
    <div class="modal-backdrop">
        <div class="modal">
            <header class="modal-header">
                <slot name="header">
                    {{ foodId.title }} 
                    <button type="button" class="btn-close" @click="closePopup">
                        <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M17.8565 1.06997C17.6074 0.8203 17.2692 0.67999 16.9165 0.67999C16.5638 0.67999 16.2256 0.8203 15.9765 1.06997L9.4565 7.57664L2.9365 1.05664C2.6874 0.806967 2.34919 0.666656 1.9965 0.666656C1.64381 0.666656 1.30561 0.806967 1.0565 1.05664C0.536504 1.57664 0.536504 2.41664 1.0565 2.93664L7.5765 9.45664L1.0565 15.9766C0.536504 16.4966 0.536504 17.3366 1.0565 17.8566C1.5765 18.3766 2.4165 18.3766 2.9365 17.8566L9.4565 11.3366L15.9765 17.8566C16.4965 18.3766 17.3365 18.3766 17.8565 17.8566C18.3765 17.3366 18.3765 16.4966 17.8565 15.9766L11.3365 9.45664L17.8565 2.93664C18.3632 2.42997 18.3632 1.57664 17.8565 1.06997Z"
                                fill="#C3CAD9"
                            />
                        </svg>
                    </button>
                </slot>
            </header>
            <div class="modal-content">
                <section class="modal-body">
                    <slot name="body">
                        <img :src="foodId.image" alt="" />

                        <p class="description">
                            230 kcal A nutritious brutal burger that has long
                            won the hearts of our guests. Ingredients: cutlet,
                            fried eggs, bacon, cheddar cheese, pickles, lettuce,
                            fries, red onions, mustard sauce.
                        </p>
                        <p class="description">{{ foodId.details }}</p>
                    </slot>
                </section>
                <footer class="modal-footer">
                    <slot name="footer">
                        <h6 class="name">Fried Cutlets</h6>
                        <form @submit.prevent="handleSubmit" action="">
                            <div class="first__section">
                                <input
                                    v-model="inputRoast"
                                    type="radio"
                                    name="Medium"
                                    id=""
                                    value="Medium"
                                />
                                <label class="roast" for="">Medium</label>

                                <input
                                    v-model="inputRoast"
                                    type="radio"
                                    name="Medium Well"
                                    id=""
                                    value="Medium Well"
                                />
                                <label class="roast" for="">Medium Well</label>

                                <input
                                    v-model="inputRoast"
                                    type="radio"
                                    name="Well Done"
                                    id=""
                                    value="Well Done"
                                />
                                <label class="roast" for=""> Well Done</label>
                            </div>
                            <h6 class="name">Add Ingredients to Burger</h6>

                            <div class="second__section">
                                <div class="additionally" action="">
                                    <div class="trl">
                                        <input
                                            v-model.number="inputValue"
                                            type="checkbox"
                                            id=""
                                            value="0.22"
                                        />
                                        <label class="adding" for=""
                                            >Spicy Sauce</label
                                        >
                                        <span>0.22 $</span>
                                    </div>

                                    <div class="trl">
                                        <input
                                            v-model.number="inputValue"
                                            type="checkbox"
                                            id=""
                                            value="1.75"
                                        />
                                        <label class="adding" for=""
                                            >Smoked Bacon</label
                                        >
                                        <span>1.75 $</span>
                                    </div>

                                    <div class="trl">
                                        <input
                                            v-model.number="inputValue"
                                            type="checkbox"
                                            id=""
                                            value="0.35"
                                        />
                                        <label class="adding" for=""
                                            >Iceberg Lettuce Leaf</label
                                        >
                                        <span>0.35 $</span>
                                    </div>

                                    <div class="trl">
                                        <input
                                            v-model.number="inputValue"
                                            type="checkbox"
                                            id=""
                                            value="1.12"
                                        />
                                        <label class="adding" for=""
                                            >Caramelized Onions</label
                                        >
                                        <span>1.12 $</span>
                                    </div>

                                    <div class="trl">
                                        <input
                                            v-model.number="inputValue"
                                            type="checkbox"
                                            id=""
                                            value="0.55"
                                        />
                                        <label class="adding" for=""
                                            >Red Bow</label
                                        >
                                        <span>0.55 $</span>
                                    </div>

                                    <div class="trl">
                                        <input
                                            v-model.number="inputValue"
                                            type="checkbox"
                                            id=""
                                            value="0.67"
                                        />
                                        <label class="adding" for=""
                                            >Onion Fries</label
                                        >
                                        <span>0.67 </span>
                                    </div>

                                    <div class="trl">
                                        <input
                                            v-model.number="inputValue"
                                            type="checkbox"
                                            id=""
                                            value="1.23"
                                        />
                                        <label class="adding" for=""
                                            >Pickled Cucumber</label
                                        >
                                        <span>1.23 $</span>
                                    </div>

                                    <div class="trl">
                                        <input
                                            v-model.number="inputValue"
                                            type="checkbox"
                                            id=""
                                            value="3.54"
                                        />
                                        <label class="adding" for=""
                                            >Jalapeno pepper</label
                                        >
                                        <span>3.54 $</span>
                                    </div>

                                    <div class="trl">
                                        <input
                                            v-model.number="inputValue"
                                            type="checkbox"
                                            id=""
                                            value="3.54"
                                        />
                                        <label class="adding" for=""
                                            >Piece of Mozzarella</label
                                        >
                                        <span>3.54 $</span>
                                    </div>
                                </div>
                                <div class="total">
                                    <h2
                                        class="total__btn-plus"
                                        @click="minusOne"
                                    >
                                        -
                                    </h2>
                                    <span class="total__count">
                                        {{ count }}
                                    </span>
                                    <h2
                                        class="total__btn-minus"
                                        @click="plusOne"
                                    >
                                        +
                                    </h2>
                                    
                                    <span class="total__sum"> {{ sum }} </span>
                                </div>
                                <!-- second section end - то шо снизу див -->
                            </div>
                        </form>
                    </slot>
                </footer>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import useDocument from "@/composables/useDocument";
import useCounter from "@/composables/useCounter";
import getDocument from "@/composables/getDocument";
import { watch } from "@vue/runtime-core";
export default {
    props: ["foodId"],
    setup(props) {
        const { count, next, plusOne, minusOne } = useCounter();
        const id = "8ap14hSr76ZNPhgN0qmH";
        const { updateDoc, error:useDocError } = useDocument("cart", id);
        const { document, error:docError } = getDocument("cart", id)
        const inputRoast = ref("");
        const inputValue = ref([]);
        const gramm = ref(250);
        const sum = ref("0");
        console.log(props.foodId.map((item) => item.title));

        setTimeout(() => {
            console.log(...document.value.products);
        }, 4000);

        watch(inputValue, () => {
            sum.value = inputValue.value.reduce((acc, rec) => (+acc + +rec).toFixed(2));
            (+sum.value).toFixed(2)
        });

        const handleSubmit = async () => {
            const addProduct = {
                name: "Classic Berger",
                gramm: gramm.value,
                count: count.value,
                sum: sum.value,
            };

            await updateDoc({
                products: [...document.value.products, addProduct],
            });
        };

        return {
            inputValue,
            count,
            plusOne,
            minusOne,
            inputRoast,
            updateDoc,
            sum,
            handleSubmit,
            document,
        };
    },
    //    methods: {
    //        closePopup() {
    //            console.log(this.foodId)
    //            this.$emit('closePopup');
    //        }
    //    },
    //    data() {
    //     return {
    //      IsPopupVisible: true,
    //      counter: 0,
    //      sum: ''
    //     }
};
</script>

<style lang="scss">
.modal-backdrop {
    position: absolute;
    top: vw(50);
    left: 0;
    z-index: 1;
    justify-content: center;
    align-items: left;
    .modal {
        background: #f5f6f7;
        z-index: 1;
        box-shadow: 0px 10px 30px rgba(54, 61, 77, 0.03);
        border-radius: 10px;
        width: vw(920);
        height: vw(1000);
        padding: vw(60);
        margin: vw(220);
    }
}

.modal-content {
    display: flex;
}
.modal-header {
    @include font(vw(20), 600, vh(30));
    color: $text-GrayBlue50;
    display: flex;
    justify-content: space-between;
    .btn-close {
        border: none;
        background: none;
        margin: 0;
    }
}
.modal-body {
    margin: vw(60) 0;
    .description {
        margin: vw(50) 0;
        width: vw(270);
        @include font(vw(13), 700, vh(25));
        color: $text-GrayBlue60;
    }
}
.modal-footer {
    margin: vw(30) vw(60);
    .buttons {
        display: flex;
        margin-top: vw(60);
        .total__price {
            @include font(vw(16), 800, vh(30));
            color: $text-GrayBlue60;
            margin: vw(5) 0 vw(40) 0;
        }
        .add {
            margin: 0 vw(60) vw(40) vw(60);
            background: $text-puple;
            box-shadow: 0px 2px 5px rgba(136, 51, 255, 0.03);
            border-radius: 30px;
            border: none;
            width: vw(150);
            height: vw(40);
            text-align: center;
            @include font(vw(12), 700, vh(20));
            color: $text-white;
        }
        .counter {
            background: $bg-white;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 30px;
            width: vw(40);
            height: vw(40);
            border: none;
            align-items: center;
            padding: 0 vw(5) vw(7) vw(5);
            &__text {
                @include font(vw(14), 800, vh(30));
                color: $text-GrayBlue60;
                margin: vw(10) vw(20) vw(0) vw(20);
            }
        }
        .counter-1 {
            background: $bg-white;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 30px;
            width: vw(40);
            height: vw(40);
            border: none;
            align-items: center;
            padding: vw(7) vw(5) 0 vw(5);
        }
    }
    .name {
        @include font(vw(13), 700, vh(25));
        color: $text-GrayBlue50;
    }
    .first__section {
        display: flex;
        width: vw(380);
        .roast {
            @include font(vw(12), 700, vh(20));
            color: $text-GrayBlue60;
            margin-right: vw(40);
            display: inline-flex;
            align-items: left;

            input {
                max-height: vw(10);
                max-width: vw(10);
                margin-left: vw(15);
            }
        }
    }

    .second__section {
        position: relative;
        left: 0;
        display: block;
        margin: 0;
        label {
            position: absolute;
            left: vw(13);
        }
        span {
            position: absolute;
            right: vw(-150);
        }
        .additionally {
            .trl {
                display: flex;
            }
            input {
                width: vw(20);
            }

            display: flex;

            @include font(vw(12), 700, vh(20));
            color: $text-GrayBlue60;
            flex-direction: column;

            .adding {
                display: inline-flex;
                margin-right: vw(70);
            }
        }
    }
    .price {
        position: absolute;
        top: 36%;
        right: 25%;
        li {
            margin-bottom: vw(35);
            list-style: none;
            @include font(vw(12), 800, vh(20));
            color: $text-GrayBlue60;
        }
    }
}

</style>
