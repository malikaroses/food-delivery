<template>
   <footer class="footer">
           <nav class="nav__category">
               <h3>Cities</h3>
               <div>
                   <ul class="cities__title">
                       <li> Washington</li>
                        <li >New York</li>
                        <li>Chicago</li>
                    </ul>
                    <ul class="item">
                        <li class="cities__link"> Los Angeles</li>
                        <li class="cities__link2">San Francisco</li>
                        <li class="cities__link3">New Nelda</li>
                    </ul>
               </div>
                <span>
                    Show All Cities
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.912588 12.265C1.23925 12.5917 1.76592 12.5917 2.09259 12.265L7.63259 6.725C7.89259 6.465 7.89259 6.045 7.63259 5.785L2.09259 0.245C1.76592 -0.0816666 1.23925 -0.0816666 0.912588 0.245C0.585921 0.571667 0.585921 1.09833 0.912588 1.425L5.73925 6.25833L0.905921 11.0917C0.585921 11.4117 0.585921 11.945 0.912588 12.265Z" fill="#C3CAD9"/>
                    </svg>
                </span>
           </nav>
           <nav class="nav__category">
               <h3>Dishes and Cuisine</h3>
               <div>
                   <ul class="cities__title">
                       <li> Burgers</li>
                        <li >Sushi</li>
                        <li>Pizza</li>
                    </ul>
                    <ul class="itemm">
                        <li class="cities__link">Italian</li>
                        <li class="cities__link2">Steaks</li>
                        <li class="cities__link3">Vegen</li>
                    </ul>
               </div>
                <span>
                    Show All Categories
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.912588 12.265C1.23925 12.5917 1.76592 12.5917 2.09259 12.265L7.63259 6.725C7.89259 6.465 7.89259 6.045 7.63259 5.785L2.09259 0.245C1.76592 -0.0816666 1.23925 -0.0816666 0.912588 0.245C0.585921 0.571667 0.585921 1.09833 0.912588 1.425L5.73925 6.25833L0.905921 11.0917C0.585921 11.4117 0.585921 11.945 0.912588 12.265Z" fill="#C3CAD9"/>
                    </svg>
                </span>
           </nav>
           <nav class="nav__category">
               <h3>Company</h3>
               <div>
                   <ul class="cities__title">
                       <li> Contacts</li>
                        <li >Terms of use</li>
                        <li>F.A.Q.</li>
                    </ul>
                    <ul class="item">
                        <li class="cities__link">Become a Partner</li>
                        <li class="cities__link2">Become a Courier</li>
                        <li class="cities__link3">Feedback</li>
                    </ul>
               </div>
                <span>
                    Show All
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.912588 12.265C1.23925 12.5917 1.76592 12.5917 2.09259 12.265L7.63259 6.725C7.89259 6.465 7.89259 6.045 7.63259 5.785L2.09259 0.245C1.76592 -0.0816666 1.23925 -0.0816666 0.912588 0.245C0.585921 0.571667 0.585921 1.09833 0.912588 1.425L5.73925 6.25833L0.905921 11.0917C0.585921 11.4117 0.585921 11.945 0.912588 12.265Z" fill="#C3CAD9"/>
                    </svg>
                </span>
           </nav>
            <nav class="nav__category">
               <h3>Constructor</h3>
               <p>12 Water St. Vacouver, BC V6B 132 United States</p>
               <svg class="chat" @click="modalShow()" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                    <rect x="30" y="20" width="60" height="60" rx="30" fill="#FF6633"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M68 44H67V52C67 52.55 66.55 53 66 53H54V54C54 55.1 54.9 56 56 56H66L70 60V46C70 44.9 69.1 44 68 44ZM65 49V42C65 40.9 64.1 40 63 40H52C50.9 40 50 40.9 50 42V55L54 51H63C64.1 51 65 50.1 65 49Z" fill="white"/>
                    <defs>
                    <filter id="filter0_d" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="10"/>
                    <feGaussianBlur stdDeviation="15"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.4 0 0 0 0 0.2 0 0 0 0.2 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    </defs>
                </svg>

               <div v-if="modal" class="modal" >
                    <h3>Online Consultant 
                        <svg @click="modalShow()" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8925 0.302486C12.7057 0.115233 12.452 0.01 12.1875 0.01C11.923 0.01 11.6693 0.115233 11.4825 0.302486L6.5925 5.18249L1.7025 0.292486C1.51567 0.105233 1.26202 0 0.9975 0C0.732982 0 0.479331 0.105233 0.2925 0.292486C-0.0975 0.682486 -0.0975 1.31249 0.2925 1.70249L5.1825 6.59249L0.2925 11.4825C-0.0975 11.8725 -0.0975 12.5025 0.2925 12.8925C0.6825 13.2825 1.3125 13.2825 1.7025 12.8925L6.5925 8.00249L11.4825 12.8925C11.8725 13.2825 12.5025 13.2825 12.8925 12.8925C13.2825 12.5025 13.2825 11.8725 12.8925 11.4825L8.0025 6.59249L12.8925 1.70249C13.2725 1.32249 13.2725 0.682486 12.8925 0.302486Z" fill="#C3CAD9"/>
                        </svg>
                    </h3>
                    <form >
                        <div>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="#C3CAD9"/>
                                </svg>
                            <input type="text" placeholder="Name" v-model="user.name">
                        </div>
                        <div>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2037 12.25L13.6637 11.96C13.0537 11.89 12.4537 12.1 12.0237 12.53L10.1837 14.37C7.35367 12.93 5.03367 10.62 3.59367 7.78L5.44367 5.93C5.87367 5.5 6.08367 4.9 6.01367 4.29L5.72367 1.77C5.60367 0.76 4.75367 0 3.73367 0H2.00367C0.873674 0 -0.0663265 0.94 0.00367348 2.07C0.533673 10.61 7.36367 17.43 15.8937 17.96C17.0237 18.03 17.9637 17.09 17.9637 15.96V14.23C17.9737 13.22 17.2137 12.37 16.2037 12.25Z" fill="#C3CAD9"/>
                            </svg>
                            <input type="tel" placeholder="Phone" v-model="user.phone">
                        </div>
                        <div>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 4H17V12C17 12.55 16.55 13 16 13H4V14C4 15.1 4.9 16 6 16H16L20 20V6C20 4.9 19.1 4 18 4ZM15 9V2C15 0.9 14.1 0 13 0H2C0.9 0 0 0.9 0 2V15L4 11H13C14.1 11 15 10.1 15 9Z" fill="#C3CAD9"/>
                            </svg>
                            <input type="text" placeholder="Message" v-model="user.message">
                        </div>
                        <button @click="startMessaging()">Start Messaging</button>
                    </form>
                </div>
           </nav>

            <div class="picture">
            <img class="picture__bottom" src="@/assets/images/food.svg" alt="">
            <p class="title">The Fastest Way to Eat Tasty!</p>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#FF6633"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1975 17.3975V20.3415C19.1975 20.6215 19.3495 20.8855 19.5895 21.0295L22.0855 22.5095C22.3735 22.6775 22.7415 22.5815 22.9095 22.3015C23.0775 22.0135 22.9895 21.6455 22.7015 21.4775L20.4055 20.1095V17.3895C20.3975 17.0695 20.1255 16.7975 19.7975 16.7975C19.4695 16.7975 19.1975 17.0695 19.1975 17.3975ZM27.1975 17.9975V13.7655C27.1975 13.4055 26.7655 13.2295 26.5175 13.4855L25.0935 14.9095C23.6455 13.4615 21.5815 12.6295 19.3255 12.8295C15.9735 13.1335 13.2135 15.8295 12.8455 19.1815C12.3655 23.5175 15.7495 27.1975 19.9975 27.1975C23.6695 27.1975 26.7015 24.4455 27.1415 20.8935C27.1975 20.4135 26.8215 19.9975 26.3415 19.9975C25.9415 19.9975 25.6055 20.2935 25.5575 20.6855C25.2135 23.4775 22.8055 25.6375 19.9175 25.5975C16.9495 25.5575 14.4455 23.0535 14.3975 20.0775C14.3495 16.9575 16.8855 14.3975 19.9975 14.3975C21.5415 14.3975 22.9415 15.0295 23.9575 16.0375L22.2855 17.7095C22.0295 17.9655 22.2055 18.3975 22.5655 18.3975H26.7975C27.0215 18.3975 27.1975 18.2215 27.1975 17.9975Z" fill="white"/>
                </svg>

        </div>

       </footer>
</template>

<script>
    export default {
    data(){
        return{
            user: {
                name:'',
                phone: '',
                message: ''
            },
            modal: false,
        } 
    },
    methods: {
            modalShow(){
                this.modal = !this.modal
            },
            startMessaging(){
                console.log(this.user.name, this.user.message, this.user.phone)
                this.user.name='', this.user.message='', this.user.phone=''
                
            }
    }
}
</script>



<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&family=Open+Sans:wght@700&display=swap');


.footer{
    width: 100%;
   margin-top: vw(1200) ;
    padding-left: vw(80);
    display: flex;
    justify-content: space-between;
    background-color: $bg-gray;
        
    .nav__category{
            position: relative;
            h3{
                text-align: left;
                @include font(vw(14), bold, vw(30));
                color: $text-GrayBlue50;
                margin: vw(60) 0 vw(35) 0;
            }
            div{
                display: flex;
                margin-bottom: vw(10);
                ul{
                    margin: 0;
                    padding: 0;
                    li{
                        @include font(vw(12), bold, vw(20));
                        color: $text-GrayBlue70;
                        margin-bottom: vw(20);
                list-style: none;
                        text-align: left;
                        margin-right: vw(60);
                    }
                }
            }
            span{
                cursor: pointer;
                    @include font(vw(12), bold, vw(20));
                    color: $text-GrayBlue70;
                    display: flex;
                    align-items: center;
                    svg{
                        margin-left: vw(22);
                    }
            }
            p{
                 margin: 0;
                padding: 0;
                text-align: left;
                width: vw(150);
                @include font(vw(12), bold, vw(20));
                color: $text-GrayBlue70;
            }
            .chat{
              position: absolute;
                bottom: vw(50);
                right: 0;
                margin: 0;
                width: vw(100);
                height: vw(100);  
            }
            .modal {
                position: absolute;
                left: vw(-200);
                top: vw(-200);
                width: vw(285);
                height: vw(390);
                background: #FFFFFF;
                box-shadow: 0px 60px 120px rgba(54, 61, 77, 0.05);
                border-radius: vw(15);
                padding: vw(30);
                display: block;
                h3{
                    @include font(vw(14), bold, vw(30));
                    color: $text-GrayBlue50;
                    display: flex;
                    justify-content: space-between;
                    margin: 0;
                    margin-bottom: vw(55);
                }
                h3::after{
                    content: '';
                    position: absolute;
                    left: 0;
                    top:vw(80);
                    width: 100%;
                    height: vw(2);
                background-color: $bg-GrayBlue97;
                }
                form{
                    div{
                        border: 2px solid $bg-GrayBlue97;
                        height: vw(50);
                        width: vw(225);
                        border-radius: 30px;
                        display: flex;
                        text-align: center;
                        align-items: center;
                        margin-bottom: vw(15);
                        input{
                            width: vw(100);
                            border: none;
                            margin: 0;
                            padding-left: vw(10);
                        }
                        svg{
                            margin-left: vw(20);
                            margin-right: vw(15)
                        }
                    }
                    button{
                        cursor: pointer;
                        @include font(vw(12), 800, vw(20));
                        height: vw(50);
                        width: vw(225);
                        border: none;
                        border-radius: 30px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #fff;
                        background-color: $bg-orange;
                    }
                    
                }
            }
        }
}
.footer::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: $bg-GrayBlue95;
    height: vw(2);
    width: 100%;
}

.picture{
    &__bottom{
        width: vw(250);
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
        width: vw(40);
        height: vw(40);
    }
}

@media screen and (max-width: 1024px) {

.footer{
    padding: 0;
    margin-top: vmin(50);
    padding-left: vmin(20);
    justify-content: space-between;
        .nav__category{
            margin-right: vmin(10);
            h3{
                @include font(vmin(7), bold, vmin(8));
                margin: vmin(15) 0 vmin(10) 0;
            }
            div{
                margin-bottom: vmin(7);
                ul{
                    margin: 0;
                    padding: 0;
                    li{
                        @include font(vmin(5), bold, vmin(5));
                        margin-bottom: vmin(5);
                    
                    }
                }
                .item{
                    display: none;
                }
            }
            span{
                cursor: pointer;
                   @include font(vmin(5), bold, vmin(5));
                    svg{
                        margin-left: vmin(8);
                        height: vmin(5);
                        width: vmin(5);
                    }
            }
            p{
                width: vmin(70);
                text-align: left;
                @include font(vmin(5), bold, vmin(8));
                color: $text-GrayBlue70;
            }
            .chat{
                bottom: vmin(10);
                width: vmin(30);
                height: vmin(30);  
            }
            .modal {
                position: absolute;
                left: vmin(-50);
                top: vmin(-100);
                width: vmin(100);
                height: vmin(150);
                border-radius: vmin(10);
                padding: vmin(7);
                padding-top: vmin(10);
                h3{
                    @include font(vmin(7), bold, vmin(8));
                    margin-bottom: vmin(20);
                }
                h3::after{
                    top:vmin(30);
                }
                form{
                    div{
                        border: 2px solid $bg-GrayBlue97;
                        height: vmin(20);
                        width: vmin(87);
                        border-radius: vmin(15);
                        margin-bottom: vmin(7);
                        input{
                            @include font(vmin(5), bold, vmin(5));
                            width: vmin(50);
                            height: vmin(20);
                            padding-left: vmin(5);
                        }
                        svg{
                            margin-left: vmin(8);
                            margin-right: vmin(5);
                            width: vmin(7);
                            height: vmin(7);
                        }
                    }
                    button{
                        @include font(vmin(5), bold, vmin(5));
                        height: vmin(20);
                        width: vmin(87);
                        border-radius: vmin(15);
                    }
                    
                }
            }
        }
}

.picture{
    margin-top: vmin(10);
    margin-right: vmin(5);
    &__bottom{
        margin: 0;
        width: vmin(70);
    }
    position: relative;
    right: 0;
    .title{
        position: absolute;
        bottom: 0;
        @include font(vmin(7), bold, vmin(10));
        color: $text-white;
        margin: vmin(5);
        margin-bottom: vmin(10);
    }
    svg{
        position: absolute;
        top: 0;
        right: 0;
        margin: vmin(5);
        width: vmin(15);
        height: vmin(15);
    }
}

}


</style>
