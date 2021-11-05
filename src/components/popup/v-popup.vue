<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class='v-popup'>
      <div class="v-popup__header">
        <span>{{popupTitle}}</span>
        <span>
        <i
            class="material-icons"
            @click="closePopup"
        >
          close
        </i>
      </span>
      </div>
      <div class="v-popup__content">
        <slot></slot>
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
                            

                            <div class="second__section">
                              <h6 class="name">Add Ingredients to Burger</h6>
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
                                        <span>0.67 $</span>
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
                                    
                                   
                                    <button class="submit_btn "  @click="rightBtnAction">
                                        Add to cart
                                    </button>
                                    <span class="total__sum"> {{ sum }} </span>
                                </div>
                                <!-- second section end - то шо снизу див -->
                            </div>
                        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-popup",
    props: {
      popupTitle: {
        type: String,
        default: 'Popup name'
      },
      rightBtnTitle: {
        type: String,
        default: 'Ok'
      }
    },
    data() {
      return {}
    },
    methods: {
      rightBtnAction() {
        this.$emit('rightBtnAction')
      },
      closePopup() {
        this.$emit('closePopup')
      }
    },
    mounted() {
      let vm = this;
      document.addEventListener('click', function (item) {
        if (item.target === vm.$refs['popup_wrapper']) {
          vm.closePopup()
        }
      })
    },
  }
</script>

<style lang="scss">
  .popup_wrapper {
    position: relative;
    display: block;
    justify-content: center;
    align-items: center;
    right: 0;
    left: 0;
    top: 0;
    bottom: vw(90);
    z-index: 10;
  }
  .v-popup {
    padding: vw(60);
    position: absolute;
    top: vw(-500);
    left: vw(100);
    width: vw(920);
    height: vw(920);
    background: #ffffff;
    box-shadow: 0 0 17px 0 #e7e7e7;
    z-index: 10;
    &__header, &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @include font(vw(20), 600, vh(30));
      color: #4D5E80;
    }
    &__content {
      margin-left: vw(-630);
      margin-top: vw(60);
      display: block;
      justify-content: left;
      align-items: left;
      position: relative;
      top: vw(20);
      left: 0;
    }
    .submit_btn {
      background: #8833FF;
      box-shadow: 0px 2px 5px rgba(136, 51, 255, 0.03);
      border-radius: 30px;
      width: vw(150);
      height: vw(40);
      border: none;
      @include font(vw(12),800,vh(20));
      text-align: center;
      color: #FFFFFF;

    }
  
    .first__section{
      margin-top: vw(-400) ;
      margin-left: vw(900);
      z-index: 10;
      label{
        padding-right: vw(40);
        @include font(vw(15), 700,vh(20));
        color: $text-GrayBlue60;
      }
      input{
        width: vw(20);
      }
      
    }
    .second__section{
      margin-top: vw(-10) ;
      margin-left: vw(700);
      position: relative;
      flex-direction: column;
      top: 0;
      left: vw(-110);
      z-index: 10;
      .name{
        @include font(vw(13),700,vh(25));
        color: $text-GrayBlue60;
        margin-left: vw(160);
        margin-top: vw(80);
      }
      .trl{
        
        input{
          width: vw(20);
        }
      }
      label{
        @include font(vw(12),700,vh(20));
        color: $text-GrayBlue60;
        position: absolute;
        padding-left: vw(30);
      }
      span{
        @include font(vw(12),800,vh(20));
        color: $text-GrayBlue60;
        position: absolute;
        right: 0;
        padding-left: vw(30);
      }
    }
  }
</style>
