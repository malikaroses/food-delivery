<template>
    <div class="container">
        <div class="hero">
              <h2>ORDERS</h2>
      <h1>Your <strong>Orders</strong></h1>

     <div class="page">
          <p> 
              <router-link class="nav__link" to="/orders">Orders</router-link>
              <router-link class="nav__link" to="/profile">Profile</router-link>
              </p>
     </div>
        <div>
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L10.53 8.67C10.21 8.87 9.79 8.87 9.47 8.67L2.4 4.25C2.15 4.09 2 3.82 2 3.53C2 2.86 2.73 2.46 3.3 2.81L10 7L16.7 2.81C17.27 2.46 18 2.86 18 3.53C18 3.82 17.85 4.09 17.6 4.25Z" fill="#C3CAD9"/>
            </svg>
      <span>Subscribe To Our Newsletter</span>
      </div>
         


        </div>
            <div class="tab__orders">
           <p>
            <router-link class="nav__link" to="/orders">All Orders</router-link>
            <router-link class="nav__link" to="/in-work-orders">In Work Orders</router-link>
            <router-link class="nav__link" to="/archieved-orders">Archived Orders</router-link>
            </p>
            </div>
               <div class="tabs__item  active" id="tab_1">
                     <div class="tabs__item1"  id="tab_2" >
                       <nav class="nav__all">
             <ul>
                 <li class="nav__data">Order</li>
                 <li class="nav__order">N-12042</li>
                 <li class="nav__item">21 Sep 2028</li>
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
                 <li class="nav__data">Delivery address</li>
                 <li class="nav__order">249 Madison Ave 5h</li>
                 <li class="nav__item">New York, NY 10054</li>
             </ul>
             <ul >
                 <li class="nav__data">Order Status</li>
                 <li class="nav__order">Delivery Order</li>
                 <li class="nav__item">View  Location</li>
 </ul>
 <ul>
             <li class="nav__duoble">Standby Time</li>
             <li class="nav__hour">1 h 25 min</li>
            </ul>
             </nav>
                 </div>
          
                <div class="tabs__item2" id="tab_3">
                         <div class="tabs__archived">
           <p class="archived__tittle">Archived Orders</p>

            <nav class="nav__archived">
             <ul>
                 <li class="nav__data">Order</li>
                 <li class="nav__order">N-12042</li>
                 <li class="nav__item">21 Sep 2028</li>
             </ul>
             <ul >
                 <li class="nav__data">Restaurant</li>
                 <li class="nav__order">Park & Pizzas</li>
                 <li class="nav__item">Contacts</li>
             </ul>
             <ul >
                 <li class="nav__data">Dishes</li>
                 <li class="nav__order">Burger, Pepsi 2L…</li>
                 <li class="nav__item">View Order</li>
             </ul>
             <ul >
                 <li class="nav__data">Restaurant Address</li>
                 <li class="nav__order">244 Madison Ave 5h</li>
                 <li class="nav__item">New York, NY 10016</li>
             </ul>
              <ul >
                 <li class="nav__data">Delivery address</li>
                 <li class="nav__order">249 Madison Ave 5h</li>
                 <li class="nav__item">New York, NY 10054</li>
             </ul>
             <ul >
                 <li class="nav__data">Order Status</li>
                 <li class="nav__order">Delivery Order</li>
                 <li class="nav__item">View  Location</li>
             </ul>
            <ul>
                <li class="bird">  <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.23016 13.55L2.6035 8.92331C2.35439 8.67364 2.01619 8.53333 1.6635 8.53333C1.31081 8.53333 0.972605 8.67364 0.723496 8.92331C0.203496 9.44331 0.203496 10.2833 0.723496 10.8033L6.29683 16.3766C6.81683 16.8966 7.65683 16.8966 8.17683 16.3766L22.2835 2.26998C22.8035 1.74998 22.8035 0.909981 22.2835 0.389981C22.0344 0.140311 21.6962 0 21.3435 0C20.9908 0 20.6526 0.140311 20.4035 0.389981L7.23016 13.55Z" fill="#C3CAD9"/>
                    </svg>

                </li>
             </ul>
             </nav>
       </div>
          

           <div class="tabs__archived2">
            <nav class="nav__archived">
             <ul>
                 <li class="nav__data">Order</li>
                 <li class="nav__order">N-12042</li>
                 <li class="nav__item">21 Sep 2028</li>
             </ul>
             <ul >
                 <li class="nav__data">Restaurant</li>
                 <li class="nav__order">Park & Pizzas</li>
                 <li class="nav__item">Contacts</li>
             </ul>
             <ul >
                 <li class="nav__data">Dishes</li>
                 <li class="nav__order">Burger, Pepsi 2L…</li>
                 <li class="nav__item">View Order</li>
             </ul>
             <ul >
                 <li class="nav__data">Restaurant Address</li>
                 <li class="nav__order">244 Madison Ave 5h</li>
                 <li class="nav__item">New York, NY 10016</li>
             </ul>
              <ul >
                 <li class="nav__data">Delivery address</li>
                 <li class="nav__order">249 Madison Ave 5h</li>
                 <li class="nav__item">New York, NY 10054</li>
             </ul>
             <ul >
                 <li class="nav__data">Order Status</li>
                 <li class="nav__order">Delivery Order</li>
                 <li class="nav__item">View  Location</li>
             </ul>
            <ul>
                <li class="bird">  <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.23016 13.55L2.6035 8.92331C2.35439 8.67364 2.01619 8.53333 1.6635 8.53333C1.31081 8.53333 0.972605 8.67364 0.723496 8.92331C0.203496 9.44331 0.203496 10.2833 0.723496 10.8033L6.29683 16.3766C6.81683 16.8966 7.65683 16.8966 8.17683 16.3766L22.2835 2.26998C22.8035 1.74998 22.8035 0.909981 22.2835 0.389981C22.0344 0.140311 21.6962 0 21.3435 0C20.9908 0 20.6526 0.140311 20.4035 0.389981L7.23016 13.55Z" fill="#C3CAD9"/>
                    </svg>

                </li>
             </ul>
             </nav>
       </div>


        <div class="tabs__archived2">
             <nav class="nav__archived">
             <ul>
                 <li class="nav__data">Order</li>
                 <li class="nav__order">N-12042</li>
                 <li class="nav__item">21 Sep 2028</li>
             </ul>
             <ul >
                 <li class="nav__data">Restaurant</li>
                 <li class="nav__order">Park & Pizzas</li>
                 <li class="nav__item">Contacts</li>
             </ul>
             <ul >
                 <li class="nav__data">Dishes</li>
                 <li class="nav__order">Burger, Pepsi 2L…</li>
                 <li class="nav__item">View Order</li>
             </ul>
             <ul >
                 <li class="nav__data">Restaurant Address</li>
                 <li class="nav__order">244 Madison Ave 5h</li>
                 <li class="nav__item">New York, NY 10016</li>
             </ul>
              <ul >
                 <li class="nav__data">Delivery address</li>
                 <li class="nav__order">249 Madison Ave 5h</li>
                 <li class="nav__item">New York, NY 10054</li>
             </ul>
             <ul >
                 <li class="nav__data">Order Status</li>
                 <li class="nav__order">Delivery Order</li>
                 <li class="nav__item">View  Location</li>
             </ul>
            <ul>
                <li class="bird">  <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.23016 13.55L2.6035 8.92331C2.35439 8.67364 2.01619 8.53333 1.6635 8.53333C1.31081 8.53333 0.972605 8.67364 0.723496 8.92331C0.203496 9.44331 0.203496 10.2833 0.723496 10.8033L6.29683 16.3766C6.81683 16.8966 7.65683 16.8966 8.17683 16.3766L22.2835 2.26998C22.8035 1.74998 22.8035 0.909981 22.2835 0.389981C22.0344 0.140311 21.6962 0 21.3435 0C20.9908 0 20.6526 0.140311 20.4035 0.389981L7.23016 13.55Z" fill="#C3CAD9"/>
                    </svg>

                </li>
             </ul>
             </nav>
       </div>

                </div>
     
               </div>

<div class="more__btn">
<button class="more__btn__load"> Load More
</button>
       </div>
    </div>
</template>
<script>
export default {
    name:'tabs',
     data(){ 

     }
     }
</script>



<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&family=Open+Sans:wght@700&display=swap');


.container{

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
            a{
                margin-right: 40px;
               
            }
          
               
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
.tab__orders{
     position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    
    p{position: absolute;
        }
        a{ 
     margin-right: 45px;
    }
}
.tabs__item1{
    display: flex;

}
.nav__all{
    display: flex;
    position: absolute;
    background: white;
    margin-top: vw(100);
   width: 1030px;
   height: 160px;

   .nav__data{
       list-style-type: none;
        @include font(vw(12), 700,vh(20));
         color: $text-GrayBlue70;
         margin-top: 40px;
      

   }
   .nav__order{
           list-style-type: none;
           margin-top: 18px;
           @include font(vw(12), 700,vh(20));
           color: $text-GrayBlue50;
   }
   .nav__item{
          list-style-type: none;
          margin-top: 5px;
          @include font(vw(12), 700,vh(20));
         color: $text-GrayBlue70;
   }
   .nav__duoble{
        list-style-type: none;
        margin-top: 43px;
        @include font(vw(12), 700,vh(20));
         color: $text-GrayBlue70;
   }
   .nav__hour{
           list-style-type: none;
           margin-top: 25px;
           @include font(vw(16), 700,vh(30));
           color: $text-GrayBlue50;

   }
}
.tabs__archived{
    margin-top: 280px;
    margin-right: 30px;

.archived__tittle{
      @include font(vw(12), 700,vh(20));
         color: $text-GrayBlue70;
         display: flex;
         margin-left: 30px;

}


.nav__archived{
    height: 160px;
    background: white;
    display: flex;
    width: 1030px;
    margin-top: 50px;
 
    
    .bird{
       display: flex;
       margin-top: 72px;
   }
    .nav__data{
       list-style-type: none;
        @include font(vw(12), 700,vh(20));
         color: $text-GrayBlue70;
         margin-top: 40px;
      

   }
   .nav__order{
           list-style-type: none;
           margin-top: 18px;
           @include font(vw(12), 700,vh(20));
           color: $text-GrayBlue50;
   }
   .nav__item{
          list-style-type: none;
          margin-top: 5px;
          @include font(vw(12), 700,vh(20));
         color: $text-GrayBlue70;
   }
}
   
}
.tabs__archived2{
 margin-top: 30px;

.archived__tittle{
      @include font(vw(12), 700,vh(20));
         color: $text-GrayBlue70;
         display: flex;
         margin-left: 30px;

}


.nav__archived{
    height: 160px;
    background: white;
    display: flex;
    width: 1030px;
    margin-top: 50px;
 
    
    .bird{
       display: flex;
       margin-top: 72px;
   }
    .nav__data{
       list-style-type: none;
        @include font(vw(12), 700,vh(20));
         color: $text-GrayBlue70;
         margin-top: 40px;
      

   }
   .nav__order{
           list-style-type: none;
           margin-top: 18px;
           @include font(vw(12), 700,vh(20));
           color: $text-GrayBlue50;
   }
   .nav__item{
          list-style-type: none;
          margin-top: 5px;
          @include font(vw(12), 700,vh(20));
         color: $text-GrayBlue70;
   }
}
   
}
.more__btn__load{
     margin-left: 450px;
     margin-top: 40px;
    width: 160px;
    height: 50px;
    text-align: center;
    background: #EDEFF2;
    border-radius: 30px;
    border: none;
      @include font(vw(12), 700,vh(20));
         color: $text-GrayBlue70;
    
}



    

body{

    margin: 0;
}
     
</style>


