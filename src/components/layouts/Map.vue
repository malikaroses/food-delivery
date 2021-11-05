<template>
  <div class="container">
    <div class="hero">
      <h2>PROFILE</h2>
      <h1>Your<strong>Profile</strong></h1>
      <div class="page">
        <p>
          <router-link class="nav__link" to="/orders">Orders</router-link>
          <router-link class="nav__link" to="/profile">Profile</router-link>
        </p>
      </div>
      <div>
        <a href="mailto:kiomitakao@gmail.com ">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L10.53 8.67C10.21 8.87 9.79 8.87 9.47 8.67L2.4 4.25C2.15 4.09 2 3.82 2 3.53C2 2.86 2.73 2.46 3.3 2.81L10 7L16.7 2.81C17.27 2.46 18 2.86 18 3.53C18 3.82 17.85 4.09 17.6 4.25Z"
              fill="#C3CAD9"
            /></svg
        ></a>
        <span>Subscribe To Our Newsletter</span>
      </div>
    </div>
    <div class="profile">
      <div class="forms">
        <div class="forms-item">
          <div class="faq">
            <div class="faq-item">
              <input class="faq-input" type="checkbox" id="faq_1" />
              <label class="faq-title" for="faq_1"
                >Your data
                <!-- <img src="./../assets/imgs/ok.svg" alt="">-->
              </label>
              <div class="faq-text">
                <div class="forms-data">
                  <div class="forms-data__label">
                    <form>
                      <label>First Name</label>
                      <input type="name" v-model="name" placeholder="John" />
                    </form>
                    <form>
                      <label>Last Name</label>
                      <input
                        type="last name"
                        v-model="surname"
                        placeholder="Bredson"
                      />
                    </form>
                  </div>
                  <div class="forms-data__label">
                    <form>
                      <label>Phone</label>
                      <input
                        type="phone"
                        v-model="phone"
                        placeholder="838-822-2467"
                      />
                    </form>
                    <form>
                      <label>Email</label>
                      <input
                        type="email"
                        v-model="email"
                        placeholder="malika@gmail.com"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="faq">
            <div class="faq-item">
              <input class="faq-input" type="checkbox" id="faq_2" />
              <label class="faq-title" for="faq_2">Delivery Address </label>
              <div class="faq-text">
                <div class="forms-address">
                  <div class="forms-address__item">
                    <form>
                      <label>Country / Region</label>
                      <select class="input" v-model="region">
                        <option value="United States">United States</option>
                        <option value="Italy">Italy</option>
                        <option value="Germany">Germany</option>
                        <option value="Korea">Korea</option>
                      </select>
                    </form>
                    <form>
                      <label>State</label>
                      <select class="input" v-model="state">
                        <option value="Alabama">Alabama</option>
                        <option value="Pittsburg">Pittsburg</option>
                        <option value="Washington">Washington</option>
                        <option value="Missouri">Missouri</option>
                      </select>
                    </form>
                  </div>
                  <div class="forms-address__item">
                    <form>
                      <label>City</label>
                      <select class="input" v-model="city">
                        <option value="Adamsville">Adamsville</option>
                        <option value="Bishkek">Bishkek</option>
                        <option value="Seoul">Seoul</option>
                        <option value="Rome">Rome</option>
                      </select>
                    </form>
                    <form>
                      <label>Zip Code</label>
                      <input type="code" v-model="code" placeholder="72217" />
                    </form>
                  </div>
                </div>
                <div>
                  <form>
                    <label>Address</label>
                    <input
                      class="address"
                      type="address"
                      v-model="address"
                      placeholder="121 Blue Hill Rd, Hopewell Junction, NY 12533"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="faq-item">
            <input class="faq-input" type="checkbox" id="faq_3" />
            <label class="faq-title" for="faq_3"
              >Discounts and Promotions
            </label>
            <div class="faq-text">
              <div class="notifications">
                <div class="notifications-item">
                  <div class="notifications-item__text">
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider"></span>
                    </label>
                    Email Notifications
                  </div>
                  <div class="notifications-item__text">
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider"></span> </label
                    >Push Notifications
                  </div>
                </div>
                <div class="notifications-item">
                  <div class="notifications-item__text">
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider"></span> </label
                    >SMS Notifications
                  </div>
                  <div class="notifications-item__text">
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider"></span> </label
                    >Facebook Notifications
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map" id="map"></div>
    </div>
  </div>
</template>

<script>
import { computed, ref, onMounted, onUnmounted, watch } from "vue";
import { Loader, LoaderOptions } from "google-maps";
export default {
  data() {
    return {
      name: "",
      surname: "",
      phone: "",
      email: "",
      role: "",
      code: "",
      region: "United States",
      state: "Pittsburg",
      city: "Adamsville",
      address: "",
      showDetails: false,
      checked: this.defaultChecked,
      checkbox: false,
      
    };
  },
  methods: {
    // Сразу вытащим переменные которые нам понадобятся
    async initMap() {
      const options = {}
      const loader = new Loader(
        "AIzaSyDRPc5MinOKdDez47gnI9YPjOwVfPeyib0",
        options
      );

      const google = await loader.load();
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
     // const image =
    "https://gurnee.il.us/images/default-source/default-album/permits.png?sfvrsn=764d4db1_0";
  const beachMarker = new google.maps.Marker({
    position: { lat: 3.89, lng: 51.274 },
    map,
    icon: 'image',
  });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>



<style lang="scss">
.map {
  width: vw(540);
  height: vw(800);
  border-radius: vw(10);
}
.container {
    .nav__link{
    padding-right: vw(40);
}
 .nav__link:last-child{
     padding: 0;
 }
  .hero {
    height: vw(195);
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    a{
        margin: 0;
    }

    h1 {
      display: inline-block;
      margin: 0;
      @include font(vw(30), normal, normal);
      line-height: vw(50);
      color: $text-GrayBlue50;
    }
    h2 {
      margin: 0;
      display: inline-block;
      position: absolute;
      @include font(vw(90), 800, vw(160));

      color: #002881;
      mix-blend-mode: normal;
      opacity: 0.03;
    }
    div {
      align-items: center;
      svg {
        margin: 0 vw(30) 0 0;
      }
      span {
        @include font(vw(14), bold, vw(30));
        color: $text-GrayBlue70;
      }
    }
  }
}

label {
  @include font(vw(12), bold, vw(20));
  color: $text-GrayBlue60;
  margin-left: vw(20);
}

input,
.input {
  background: $bg-white;
  border: 2px solid $bg-GrayBlue95;
  box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
  border-radius: vw(30);
  height: vw(50);
  padding-left: vw(20);
  color: $text-GrayBlue70;
  width: vw(180);
  height: vw(45);
}

input[type="name"]::placeholder,
input[type="last name"]::placeholder,
input[type="phone"]::placeholder,
input[type="email"]::placeholder,
input[type="address"]::placeholder,
input[type="code"]::placeholder {
  color: $text-GrayBlue70;
  @include font(vw(12), bold, vw(20));
}

.forms {
  align-items: left;
  background-color: $bg-white;
  width: vw(540);
  box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
  border-radius: vw(10);
  &-item {
    max-width: 80%;
    margin: 0 auto;
  }
  &-data {
    margin: 0 auto;
    display: flex;
    &__item {
      width: 50%;
    }
  }
  &-address {
    margin: 0 auto;
    display: flex;
    margin-bottom: vw(30);
    &__item {
      width: 50%;
    }
  }
}

.profile {
  display: flex;
  justify-content: space-between;
}

.address {
  width: vw(420);
}

.notifications {
  display: flex;
  list-style-type: none;
  text-align: left;
  align-items: left;
  &-item {
    width: 50%;
  }
}

.notifications-item__text {
  @include font(vw(12), 700, vh(20));
  color: $text-GrayBlue70;
  font-size: vw(12);
}

.checkout {
  justify-content: center;
  display: flex;
  margin-bottom: vw(40);
  width: vw(150);
  height: vw(40);
  border: none;
  background: $text-puple;
  box-shadow: 0px 10px 30px rgba(136, 51, 255, 0.1);
  border-radius: vw(30);
  @include font(vw(12), 700, vh(20));
  color: $text-white;
}

li {
  display: flex;
  @include font(vw(12), 700, vh(20));
  color: $text-GrayBlue70;
  margin-right: vw(56);
  align-items: center;
}

li:last-child {
  margin-right: 0;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
.faq-title {
  display: block;
  margin: vw(50) 0 vw(20);
  position: relative;
  font-size: vw(14);
  color: $text-GrayBlue60;
  cursor: pointer;
 
}

.faq-title:after {
  content: "";
  display: none;
  text-align: left;
  border-style: solid;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.faq-input {
  width: 0;
  height: 0;
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
}
.faq-input:checked ~ .faq-text {
  display: block;
}
.faq-text {
  display: none;
}

.switch input {
  display: none;
}

.switch {
  display: inline-block;
  width: 50px;
  height: 20px;
  margin: 8px;
  transform: translateY(50%);
  position: relative;
}

.slider {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 30px;
  box-shadow: 0 0 0 2px #777, 0 0 4px #777;
  cursor: pointer;
  border: 4px solid transparent;
  overflow: hidden;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: #777;
  border-radius: 30px;
  transform: translateX(-30px);
  transition: 0.4s;
}

input:checked + .slider:before {
  transform: translateX(30px);
  background-color: #8833ff;
}

input:checked + .slider {
  box-shadow: 0 0 0 2px, 0 0 8px;
}

.switch200 .slider:before {
  width: 200%;
  transform: translateX(-82px);
}

@media screen and (max-width: 1024px) {
  .container {
    margin-left: vmin(50) !important;
    
    .hero {
      height: vmin(80);
      width: vmin(270);
      
      a {
        margin: 0;
      }
      h1 {
        @include font(vmin(15), normal, normal);
        line-height: vmin(25);
      }
      h2 {
        @include font(vmin(45), 800, vmin(80));
        margin-left: vmin(40);
      }
      p{
          font-size: vmin(20);
      }
      div {
        svg {
            margin-top: vmin(7);
            margin-right: 0;
          width: vmin(20);
          height: vmin(12)
        }
        .nav__link{
            font-size: vmin(7)
        }
        
        span {
          @include font(vmin(7), bold, vmin(15));
         display: none;
        }
      }
    }
  }

  .forms {
    box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
    border-radius: vmin(10);
    width: vmin(270);
    margin-bottom: vmin(15);
    &-address {
      margin-bottom: vmin(30);
    }
  
  }
    .map {
      justify-content: center;
      align-items: center;
      height: vmin(200) !important;
      width: vmin(270) !important;
      border-radius: vmin(10);
    }
  .profile {
    flex-direction: column;
  }
  label {
    @include font(vmin(6), bold, vmin(10));
    margin-left: vmin(20);
  }
  input,
  .input {
    box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
    border-color: bg-GrayBlue97;
    border-radius: vmin(15);
    height: vmin(25);
    padding-left: vmin(10);
    width: vmin(90);
    height: vmin(25);
  }

  input[type="name"]::placeholder,
  input[type="last name"]::placeholder,
  input[type="phone"]::placeholder,
  input[type="email"]::placeholder,
  input[type="address"]::placeholder,
  input[type="code"]::placeholder {
    @include font(vmin(6), bold, vmin(10));
  }
  .address {
    width: vmin(200);
  }
  .notifications {
    margin-bottom: vmin(20);
  }

  .notifications-item__text {
    @include font(vmin(6), 700, vmin(10));
    font-size: vmin(6);
  }

  li {
    @include font(vmin(6), 700, vmin(10));
    margin-right: vmin(28);
  }
  .faq-title {
    margin: vmin(25) 0 vmin(10);
    font-size: vmin(7);
  }

  .switch {
    display: inline-block;
    width: vmin(25);
    height: vmin(10);
    margin: vmin(4);
    transform: translateY(50%);
    position: relative;
  }

  .slider {
    border-radius: vmin(30);
    box-shadow: 0 0 0 2px #777, 0 0 4px #777;
    border: 4px solid transparent;
  }

  .slider:before {
    border-radius: vmin(30);
    transform: translateX(vmin(-30));
  }

  input:checked + .slider:before {
    transform: translateX(vmin(30));
  }

  input:checked + .slider {
    box-shadow: 0 0 0 2px, 0 0 8px;
  }

  .switch200 .slider:before {
    transform: translateX(vmin(-40));
  }












  @media screen and (max-width: 375px) {
      .container {
    margin-left: vmin(50) !important;
    
    .hero {
      height: vmin(80);
      a {
        margin: 0;
      }
      h1 {
        @include font(vmin(15), normal, normal);
        line-height: vmin(25);
      }
      h2 {
        @include font(vmin(45), 800, vmin(80));
        margin-left: vmin(40);
      }
      div {
        svg {
          margin: 0 vmin(15) 0 0;
        }
        span {
          @include font(vmin(7), bold, vmin(15));
        
        }
      }
    }
  }

      
    .forms {
     width: vmin(270) !important;
      box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
      border-radius: vmin(10);
      &-address {
        margin-bottom: vmin(30);
      }
    }
  }
  label {
    @include font(vmin(6), bold, vmin(10));
    margin-left: vmin(20);
  }

  input,
  .input {
    box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
    border-color: bg-GrayBlue97;
    border-radius: vmin(15);
    height: vmin(25);
    padding-left: vmin(10);
    width: vmin(90);
    height: vmin(25);
  }
  .input {
    @include font(vmin(6), bold, vmin(10));
  }
  input[type="name"]::placeholder,
  input[type="last name"]::placeholder,
  input[type="phone"]::placeholder,
  input[type="email"]::placeholder,
  input[type="address"]::placeholder,
  input[type="code"]::placeholder {
    @include font(vmin(6), bold, vmin(10));
  }
  .address {
    width: vmin(200);
  }

  .notifications-item__text {
    @include font(vmin(6), 700, vmin(10));
    font-size: vmin(6);
  }

  li {
    @include font(vmin(6), 700, vmin(10));
    margin-right: vmin(28);
  }
  .faq-title {
    margin: vmin(25) 0 vmin(10);
    font-size: vmin(7);
  }

  .switch {
    display: inline-block;
    width: vmin(20);
    height: vmin(8);
    margin: vmin(4);
    transform: translateY(50%);
    position: relative;
  }

  .slider {
    border-radius: vmin(30);
    box-shadow: 0 0 0 2px #777, 0 0 4px #777;
    border: 4px solid transparent;
  }

  .slider:before {
    border-radius: vmin(12);
    transform: translateX(vmin(-12));
  }

  input:checked + .slider:before {
    transform: translateX(vmin(12));
  }

  input:checked + .slider {
    box-shadow: 0 0 0 2px, 0 0 8px;
  }

  .switch200 .slider:before {
    transform: translateX(vmin(-40));
  }
  .dashboard {
    display: none;
  }
  option {
    size: vw(10);
  }
}
</style>


