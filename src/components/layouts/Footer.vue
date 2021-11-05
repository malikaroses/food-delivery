<template>
   <footer class="footer">
 <div class="category-row">
 <div class="title__row">
   <a href="#city">Cities</a>
   <a href="food">Dishes and Cousines</a>
   <a href="company">Company</a>
   <a href="">Constructor</a>
 </div>
                       <nav class="nav__title">
              <ul id="city">
                 <li class="nav__category">Washington</li>
                 <li class="nav__category">Los-angeles</li>
                 <li class="nav__category">New-York</li>
             </ul>
               <ul>
                 <li class="nav__category">Washington</li>
                 <li class="nav__category">Los-angeles</li>
                 <li class="nav__category">New-York</li>
             </ul>
               
               <ul id="food">
                 <li class="nav__category">Washington</li>
                 <li class="nav__category">Los-angeles</li>
                 <li class="nav__category">New-York</li>
             </ul>
               <ul>
                 <li class="nav__category">Washington</li>
                 <li class="nav__category">Los-angeles</li>
                 <li class="nav__category">New-York</li>
             </ul>
               <ul id="company">
                 <li class="nav__category">Washington</li>
                 <li class="nav__category">Los-angeles</li>
                 <li class="nav__category">New-York</li>
             </ul>
             
              <ul>
                 <li class="nav__category">Washington</li>
                 <li class="nav__category">Los-angeles</li>
                 <li class="nav__category">New-York</li>
             </ul>
             <ul>
               <li></li>
             </ul>
            
             </nav>
                 </div>


   
     <div class="all-category">
       <a href=""></a>
     </div>

         </footer> 
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//     setup() {

        
//     },
// })
</script>



<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&family=Open+Sans:wght@700&display=swap');

footer{
width: vw(1270);
height: vw(285);
margin-top: vw(35)
}
.nav__category{
   font-family:  'Open Sans';
font-style: normal;
font-weight: bold;
font-size:vw(12);
line-height: vh(20);
margin-right: vh(20);
margin-top: vh(30);
color: #7D8FB3;
}
.nav__title{
  display: flex;
}
.title-row{
  display: flex;
  margin-right: vw(-25);
}


</style>


 
