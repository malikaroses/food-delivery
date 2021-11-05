<template>
<div class="container-">
    <div class="hero">
          <h2>FOOD DELIVERY</h2>
      <h1>Fast <strong>Food Delivery</strong> in Los Angeles</h1>
      <div>
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L10.53 8.67C10.21 8.87 9.79 8.87 9.47 8.67L2.4 4.25C2.15 4.09 2 3.82 2 3.53C2 2.86 2.73 2.46 3.3 2.81L10 7L16.7 2.81C17.27 2.46 18 2.86 18 3.53C18 3.82 17.85 4.09 17.6 4.25Z" fill="#C3CAD9"/>
            </svg>

            <span>Subscribe To Our Newsletter</span>
      </div>
  </div>
  
  <ul class="about">
      <li>
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12H19C19.55 12 20 12.45 20 13C20 13.55 19.55 14 19 14H1C0.45 14 0 13.55 0 13C0 12.45 0.45 12 1 12ZM11.84 2.79C11.94 2.55 12 2.28 12 2C12 0.9 11.1 0 10 0C8.9 0 8 0.9 8 2C8 2.28 8.06 2.55 8.16 2.79C4.25 3.6 1.27 6.93 1 11H19C18.73 6.93 15.75 3.6 11.84 2.79Z" fill="#C3CAD9"/>
        </svg>
        <select v-model="search">
            <option v-for="filter in allFilters" :key="filter" >{{filter}}</option>
        </select>
      </li>
      <li>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.9C9.39 8.9 8.9 9.39 8.9 10C8.9 10.61 9.39 11.1 10 11.1C10.61 11.1 11.1 10.61 11.1 10C11.1 9.39 10.61 8.9 10 8.9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM12.19 12.19L4 16L7.81 7.81L16 4L12.19 12.19Z" fill="#C3CAD9"/>
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.9C9.39 8.9 8.9 9.39 8.9 10C8.9 10.61 9.39 11.1 10 11.1C10.61 11.1 11.1 10.61 11.1 10C11.1 9.39 10.61 8.9 10 8.9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM12.19 12.19L4 16L7.81 7.81L16 4L12.19 12.19Z" fill="white"/>
            </mask>
            <g mask="url(#mask0)">
            </g>
            </svg>
            <select>
                <option>San Francisco</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
             </select>
      </li>
      <li>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM13.55 13.8L9.47 11.29C9.17 11.11 8.99 10.79 8.99 10.44V5.75C9 5.34 9.34 5 9.75 5C10.16 5 10.5 5.34 10.5 5.75V10.2L14.34 12.51C14.7 12.73 14.82 13.2 14.6 13.56C14.38 13.91 13.91 14.02 13.55 13.8Z" fill="#C3CAD9"/>
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM13.55 13.8L9.47 11.29C9.17 11.11 8.99 10.79 8.99 10.44V5.75C9 5.34 9.34 5 9.75 5C10.16 5 10.5 5.34 10.5 5.75V10.2L14.34 12.51C14.7 12.73 14.82 13.2 14.6 13.56C14.38 13.91 13.91 14.02 13.55 13.8Z" fill="white"/>
            </mask>
            <g mask="url(#mask0)">
            </g>
            </svg>
            <input type="time" value="13:00">
      </li>
      <button @click="filterFood(search)">
            Search
      </button>
  </ul>
  <div id="save">
      <ul class="categories">
          <li @click="filterFood('Burgers')">
              <img src="@/assets/icons/burgers.svg">
              Burger
          </li>
          <li @click="filterFood('Sushi')">
              <img src="@/assets/icons/sushi.svg">
              Sushi
            </li>
          <li @click="filterFood('Italian')">
              <img src="@/assets/icons/italian.svg">
              Italian
            </li>
          <li @click="filterFood('Pizza')">
              <img src="@/assets/icons/pizza.svg">
              Pizza
            </li>
          <li @click="filterFood('Steaks')">
              <img src="@/assets/icons/steaks.svg">
              Steaks
              </li>
          <li @click="filterFood('Vegetables')">
              <img src="@/assets/icons/vegan.svg">
              Vegetables
            </li>
          <li @click="filterFood('Kids Food')">
              <img src="@/assets/icons/kids.svg">
              Kids Food
            </li>
          <li @click="filtersNone()" id="display-none">
              <svg  width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill="#C3CAD9"/>
                </svg>
                All Categories
          </li>
          <li id="Sandwiches" style="display:none" @click="filterFood('Sandwiches')">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 7.41745C19 3.55146 14.9706 0.41745 10 0.41745C5.02944 0.41745 1 3.55146 1 7.41745" fill="#FFCB33"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 12.4174V13.4174C19 14.522 18.1046 15.4174 17 15.4174H3C1.89543 15.4174 1 14.522 1 13.4174V12.4174" fill="#FFCB33"/>
                <rect y="8.41745" width="20" height="3" rx="1.5" fill="#CC7429"/>
                </svg>
              Sandwiches
          </li>
          <li id="Meet" style="display:none" @click="filterFood('Meet')">
              <svg width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.065 6.83974C26.8228 8.91654 26.7683 10.2878 23.8392 10.9551C20.9101 11.6225 20.0572 10.2878 17.981 10.9551C15.9049 11.6225 11.3812 15.8862 8.26686 16.2201C5.15253 16.5539 1.81575 14.2182 0.703299 11.8081C-0.409155 9.39791 0.0362029 5.54205 3.55837 3.31743C7.08054 1.09281 10.6399 -0.538575 15.9419 0.165887C21.2439 0.87035 23.7284 1.53774 24.8035 2.68712C25.4862 3.41698 27.3072 4.76295 27.065 6.83974Z" fill="#FF6633"/>
                </svg>

              Meet
            </li>
      </ul>
      
      <div class="dishes">
          <div v-for="dish in fastfood" :key="dish.id" class="dishes-item">
              <img :src='dish.image' alt="">
              <span class="dishes-item__time">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM10.84 11.04L7.576 9.032C7.336 8.888 7.192 8.632 7.192 8.352V4.6C7.2 4.272 7.472 4 7.8 4C8.128 4 8.4 4.272 8.4 4.6V8.16L11.472 10.008C11.76 10.184 11.856 10.56 11.68 10.848C11.504 11.128 11.128 11.216 10.84 11.04Z" fill="white"/>
                    </svg>
                    {{dish.time}} Min
                </span>
                <!-- <span class="dishes-item__favourite">
                    yrk
                </span> -->
              <div class="dishes-item__about">
                  <h3>{{dish.name}}</h3>
                  <p>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.70464 9.79829L8.4713 11.4716C8.97797 11.7783 9.59797 11.325 9.46464 10.7516L8.73131 7.60496L11.178 5.48496C11.6246 5.09829 11.3846 4.36496 10.798 4.31829L7.57797 4.04496L6.31797 1.07163C6.09131 0.531626 5.31797 0.531626 5.0913 1.07163L3.83131 4.03829L0.611305 4.31163C0.0246383 4.35829 -0.215362 5.09163 0.231305 5.47829L2.67797 7.59829L1.94464 10.745C1.8113 11.3183 2.4313 11.7716 2.93797 11.465L5.70464 9.79829Z" fill="#C3CAD9"/>
                    </svg>
                    {{dish.grade}}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 11C3.6 11 3.00666 11.6 3.00666 12.3334C3.00666 13.0667 3.6 13.6667 4.33333 13.6667C5.06666 13.6667 5.66666 13.0667 5.66666 12.3334C5.66666 11.6 5.06666 11 4.33333 11ZM0.333328 1.00004C0.333328 1.36671 0.633328 1.66671 0.999995 1.66671H1.66666L4.06666 6.72671L3.16666 8.35337C2.67999 9.24671 3.31999 10.3334 4.33333 10.3334H11.6667C12.0333 10.3334 12.3333 10.0334 12.3333 9.66671C12.3333 9.30004 12.0333 9.00004 11.6667 9.00004H4.33333L5.06666 7.66671H10.0333C10.5333 7.66671 10.9733 7.39337 11.2 6.98004L13.5867 2.65337C13.8333 2.21337 13.5133 1.66671 13.0067 1.66671H3.13999L2.69333 0.713374C2.58666 0.480041 2.34666 0.333374 2.09333 0.333374H0.999995C0.633328 0.333374 0.333328 0.633374 0.333328 1.00004ZM11 11C10.2667 11 9.67333 11.6 9.67333 12.3334C9.67333 13.0667 10.2667 13.6667 11 13.6667C11.7333 13.6667 12.3333 13.0667 12.3333 12.3334C12.3333 11.6 11.7333 11 11 11Z" fill="#C3CAD9"/>
                    </svg>
                    Order From {{dish.price}}$
                    </p>
                    <div class="dishes-item__footer">
                        <ul class="dishes-item__filters">
                            <li>{{dish.filters[0]}}</li>
                            <li>{{dish.filters[1]}}</li>
                            <li :id="dish.id+100" style="display:none">{{dish.filters[2]}}</li>
                            <li :id="dish.id+200" style="display:none">{{dish.filters[3]}}</li>
                            <li :id="dish.id+300" style="display:none">{{dish.filters[4]}}</li>
                            
                        </ul>
                        <svg @click="displayNone(dish.id)" :id="dish.id+500" width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.99999 0.666687C1.26666 0.666687 0.666656 1.26669 0.666656 2.00002C0.666656 2.73335 1.26666 3.33335 1.99999 3.33335C2.73332 3.33335 3.33332 2.73335 3.33332 2.00002C3.33332 1.26669 2.73332 0.666687 1.99999 0.666687ZM9.99999 0.666687C9.26666 0.666687 8.66666 1.26669 8.66666 2.00002C8.66666 2.73335 9.26666 3.33335 9.99999 3.33335C10.7333 3.33335 11.3333 2.73335 11.3333 2.00002C11.3333 1.26669 10.7333 0.666687 9.99999 0.666687ZM5.99999 0.666687C5.26666 0.666687 4.66666 1.26669 4.66666 2.00002C4.66666 2.73335 5.26666 3.33335 5.99999 3.33335C6.73332 3.33335 7.33332 2.73335 7.33332 2.00002C7.33332 1.26669 6.73332 0.666687 5.99999 0.666687Z" fill="#C3CAD9"/>
                        </svg>
                    </div>
                    
              </div>
          </div>
      </div>
      
  </div>
  <span @click="allDishes()" id="More" class="more">{{this.button}}</span>
</div>
  

  
</template>


<script>

export default {
    data(){
        return{
            search: 'Burgers',
            allFastFood: [],
            fastfood: [],
            button: "Load More",
            allDish: false,
            allFilters: ["Sweet","Pizza",  "Italian","Sushi", 
            "Fish","Burgers", "French fries", "Sandwiches", 
            "Vegetables", "Kids Food", "Steaks", "Meet",  "Spicy"],
            
        } 
    },
    methods: {

            filterFood(res){
                console.log(res);
                this.fastfood = []
                this.fastfood = this.allFastFood.filter(dish =>dish.filters.includes(res))
                document.getElementById("More").style.display = "none"
            },
            
            allDishes(){
                if(!this.allDish){
                    this.fastfood =[]
                    this.fastfood = [...this.allFastFood]
                    this.button = "Remove"
                    this.allDish =true
                }
                else{
                    this.fastfood =[]
                    this.fastfood = [...this.allFastFood]
                    this.fastfood.splice(8);
                    this.button ="Load More"
                    this.allDish =false
                }
                
            },
            displayNone(id){
                console.log(id)
                 document.getElementById(id+100).style.display = "block"
                 document.getElementById(id+200).style.display = "block"
                 document.getElementById(id+300).style.display = "block"
                 document.getElementById(id+500).style.display = "none"
            },
            filtersNone(){
                document.getElementById("Sandwiches").style.display = "flex"
                document.getElementById("Meet").style.display = "flex"
                document.getElementById("display-none").style.display = "none"
            }
    },
    mounted() {
        fetch('http://localhost:3000/fastfood')
        .then(res => res.json())
        .then(data => 
        {
            this.allFastFood = data
            this.fastfood = [...this.allFastFood]
            this.fastfood.splice(8);
        })
        .catch(err => console.log(err.message))
    }, 
}
</script>

<style lang="scss">
.container-{
    width: vw(1298);//1270
    padding: 0 vw(80) 0 vw(80);
    box-sizing: border-box;
    .hero{
        
        height: vw(195);
        display: flex;
        align-items: center;
        position: relative;
        justify-content: space-between;
        
            h1{
                display: inline-block;
                margin: 0;
                @include font(vw(30), normal, normal);
                font-family: "SF Pro Display", Arial;
                line-height: 50px;
                color: $text-GrayBlue50;
            }
            h2{
                margin: 0;
                display: inline-block;
                position: absolute;
                @include font(vw(90), 800, vw(160));
                font-family: "SF Pro Display", Arial;
                color: #002881;
                mix-blend-mode: normal;
                opacity: 0.03;
            }
            div{
                align-items: center;
                svg{
                    margin: 0 vw(30) 0 0;
                }
                span{
                    @include font(vw(14), bold, vw(30));
                    font-family: SF Pro Display, Arial;
                    color: $text-GrayBlue70;
                }
            }
    }
    .about{
        display: flex;
        list-style-type: none;
        padding: 0;
        justify-content: space-between;
        width: 100%;
        position: relative;
        li{
            @include font(vw(12), bold, vw(20));

            color: $bg-GrayBlue85;
            padding: vw(5);
            width: vw(250);
            display: flex;
            align-items: center;
            text-align: center;
            background: #FFFFFF;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: vw(30);
            svg{
                margin: 0 vw(20) 0 vw(20);
            }
            a{
                text-decoration: none;
                
            }
            select{
                @include font(vw(12), bold, vw(20));
                color: $bg-GrayBlue85;
                border: none;
                padding: vw(15);
                padding-left: 0;
                box-sizing: border-box;
            }
            input{
                @include font(vw(12), bold, vw(20));
                margin: 0;
                padding-left: 0;
                color: $bg-GrayBlue85;
                border: none;
            }
            input::-webkit-calendar-picker-indicator {
                background: none;
            }
        }
        button{
            cursor: pointer;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: vw(30);
            border: none;
            @include font(vw(12), bold, vw(20));
            color: $bg-GrayBlue85;
            color: #fff;
            height: vw(60);
            justify-content: center;
            background-color: $bg-orange;
            width: vw(160);
            margin-right: vw(15);
        }
    }
    .about::after{
        content: '';
        position: absolute;
        right: vw(-63);
        top: vw(100);
        width: 150%;
        height: vw(2);
       background-color: $bg-GrayBlue97;

    }
    #save{
        margin-bottom: vw(40);
    }
    .categories{
        display: flex;
        list-style-type: none;
        padding: 0;
        margin-top: vw(80);
        justify-content: space-between;
        width: 100%;
        @include font(vw(13), bold, vw(25));
        font-family: SF Pro Display;
        color: $text-GrayBlue50;
        flex-wrap: nowrap;
        li{
            
            margin: 0;
            padding: vw(15);
            display: flex;
            align-items: center;
            img, svg{
                margin-right: vw(15);
            }
        }
        li:last-child{
            margin-right: vw(10);
        }
        li:hover{
            
            background: #FFFFFF;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 5px;
        }
    }
    .dishes{
        display: flex;
        flex-wrap: wrap;
        //justify-content: space-between;
        &-item{
            padding: 0;
            margin: vw(15);
            height: vw(350);
            width: vw(250);
            background: $text-white;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.05);
            border-radius: vw(5);
            position: relative;
            img{
                width: 100%;
            }
            &__time{
                position: absolute;
                top: vw(20);
                left: vw(20);
                @include font(vw(12), bold, vw(20));
                color: $text-white;
                background: rgba(13, 17, 26, 0.5);
                height: vw(40);
                width: vw(105);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: vw(30);
                svg{
                    margin-right: vw(10);
                }
            }
            &__about{
                text-align: left;
                h3{
                    @include font(vw(14), bold, vw(30));
                    color: $text-GrayBlue50;
                    display: inline-block;
                    margin: vw(15) 0 0 vw(20);
                }
                p{
                     @include font(vw(12), bold, vw(20));
                    color: $text-GrayBlue70;
                    display: flex;
                    align-items: center;
                    margin-top: vw(15);
                    margin-bottom: vw(20);
                    svg{
                        margin-right: vw(15);
                        margin-left: vw(22);
                        width: vw(12);
                        height: vw(12);
                    }
                }
                
            }
            &__footer{
                display: flex;
                justify-content: space-between;
                position: relative;
                align-items: center;
                padding-left: vw(20);
                flex-wrap: wrap;

                ul{
                    display: flex;
                    padding: 0;
                    flex-wrap: wrap;
                    list-style-type: none;
                    @include font(vw(12), bold, vw(20));
                    color: $text-GrayBlue70;
                    align-items: center;
                    li{
                        margin-right: vw(10);
                    }
                    
                }
                ul::before{
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: vw(2);
                    background-color: $bg-GrayBlue97;
                }
                svg{
                    cursor: pointer;
                    margin-right: vw(30);
                }
            }
        }
        
    }
    .more{
        @include font(vw(12), 800,vw(20));
        color: $text-GrayBlue60;
        padding: vw(15);
        margin: 0 vw(500);
        align-items: center;
        justify-content: center;
        background-color: #EDEFF2;
        border-radius: 30px;
    }
}

@media screen and (max-width: 1024px) {
    .container-{
    padding: 0 vmin(10) 0 vmin(10);
    box-sizing: border-box;
    width: 100%;
    .hero{
        
        height: vmin(50);
        display: flex;
        align-items: center;
        position: relative;
        justify-content: space-between;
        
            h1{
                display: inline-block;
                margin: 0;
                @include font(vmin(13), normal, normal);
                color: $text-GrayBlue50;
            }
            h2{
                margin: 0;
                display: inline-block;
                position: absolute;
                @include font(vmin(35), 800, vmin(50));
            }
            div{
                align-items: center;
                svg{
                    height: vmin(20);
                    margin: 0 vmin(15) 0 0;
                }
                span{
                    display: none;
                }
            }
    }

    .about{
        display: flex;
        list-style-type: none;
        padding: 0;
        position: relative;
        li{
            @include font(vmin(5), bold, vmin(10));
            padding: vmin(3);
            min-width: vmin(80);
            height: vmin(20);
            margin: 0;
            display: flex;
            align-items: center;
            text-align: center;
            background: #FFFFFF;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: vmin(15);
            svg{
                width: vmin(7);
                height: vmin(7);
                margin: 0 vmin(5) 0 vmin(5);
            }
            a{
                text-decoration: none;
                
            }
            select{
                @include font(vmin(6), bold, vmin(10));
                color: $bg-GrayBlue85;
                background-color: rgba(0,0,0,0);
                border: none;
                width: vmin(50);
                padding: vmin(7);
                padding-left: 0;
                box-sizing: border-box;
            }
            input{
                @include font(vmin(6), bold, vmin(10));
                width: vmin(70);
                height: vmin(20);
                margin: 0;
                padding-left: 0;
                color: $bg-GrayBlue85;
                border: none;
            }
        }
        button{
            cursor: pointer;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: vmin(10);
            border: none;
            @include font(vmin(6), bold, vmin(10));
            color: $bg-GrayBlue85;
            color: #fff;
             width: vmin(80);
            height: vmin(20);
            justify-content: center;
            background-color: $bg-orange;
            
            margin-right: vmin(5);
        }
    }
    .about::after{
        content: '';
        position: absolute;
        left: vmin(-10);
        top: vmin(30);
        width: vmin(375);
        height: vw(2);
       background-color: $bg-GrayBlue97;

    }
    #save{
        margin-bottom: vmin(30);
    }
    .categories{
        margin-top: vmin(20);
        justify-content: flex-start;
        width: 100%;
        @include font(vmin(10), bold, vmin(10));
        flex-wrap: wrap;
        li{
            
            margin-right: vmin(5);
            padding: vmin(5);
            display: flex;
            align-items: center;
            img, svg{
                margin-right: vmin(5);
                width: vmin(7);
                height: vmin(7);
            }
        }
        li:hover{
            
            background: #FFFFFF;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 5px;
        }
    }
    .dishes{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        //justify-content: space-between;
        &-item{
            margin: vmin(5);
            height: vmin(150);
            width: vmin(105);
            border-radius: vmin(2);
            img{
                width: 100%;
                height: vmin(80);
            }
            &__time{
                position: absolute;
                top: vmin(6);
                left: vmin(6);
                @include font(vmin(4), bold, vmin(10));
                height: vmin(13);
                width: vmin(35);
                border-radius: vmin(15);
                svg{
                    margin-right: vmin(4);
                    width: vmin(7);
                    height: vmin(7);
                }
            }
            &__about{
                text-align: left;
                h3{
                    @include font(vmin(7), bold, vmin(12));
                    margin: vmin(7) 0 0 vmin(5);
                }
                p{
                    @include font(vmin(5), bold, vmin(10));
                    margin-top: vmin(5);
                    margin-bottom: vmin(5);
                    svg{
                        margin-right: vmin(3);
                        margin-left: vmin(5);
                        width: vmin(7);
                        height: vmin(7);
                    }
                }
                
            }
            &__footer{
                padding-left:vmin(10);
                margin: 0;
                ul{
                    li{
                        @include font(vmin(5), bold, vmin(10));
                        margin-right: vw(10);
                    }
                    
                }
                svg{
                    cursor: pointer;
                    margin-right: vmin(10);
                }
            }
        }
        
    }
    .more{
        @include font(vw(12), 800,vw(20));
        color: $text-GrayBlue60;
        padding: vw(15);
        margin: 0 vw(500);
        align-items: center;
        justify-content: center;
        background-color: #EDEFF2;
        border-radius: 30px;
    }
}
}


</style>