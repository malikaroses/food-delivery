<template>
  <header>
          <div class="header__row">
              <div class="menu__item">
                  <a class="toggle-button" href="">
                      <span class="bar"></span>
                      <span class="bar"></span>
                      <span class="bar"></span>
                  </a>
              </div>
             <h3 class="logo">Constructor</h3>
         <nav class="nav">
            <ul class="nav__list">
              <li class="nav__item">
                <router-link class="nav__link" to="/">Restaurants</router-link>
              </li>
              <li class="nav__item">
               <router-link class="nav__link" to="/catalog">Cuisines</router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" to="/cart">Orders</router-link>
              </li>
              <li class="nav__item">
                <router-link class="nav__link" to="/profile">Profile</router-link>
              </li>
            </ul>
         </nav>  
         <div class="search">
            <svg width="2" height="90" viewBox="0 0 2 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="2" height="90" fill="#F2F3F5"/>
            </svg>

            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5006 11.0006H11.7106L11.4306 10.7306C12.6306 9.33063 13.2506 7.42063 12.9106 5.39063C12.4406 2.61063 10.1206 0.390626 7.32063 0.0506256C3.09063 -0.469374 -0.469374 3.09063 0.0506256 7.32063C0.390626 10.1206 2.61063 12.4406 5.39063 12.9106C7.42063 13.2506 9.33063 12.6306 10.7306 11.4306L11.0006 11.7106V12.5006L15.2506 16.7506C15.6606 17.1606 16.3306 17.1606 16.7406 16.7506C17.1506 16.3406 17.1506 15.6706 16.7406 15.2606L12.5006 11.0006ZM6.50063 11.0006C4.01063 11.0006 2.00063 8.99063 2.00063 6.50063C2.00063 4.01063 4.01063 2.00063 6.50063 2.00063C8.99063 2.00063 11.0006 4.01063 11.0006 6.50063C11.0006 8.99063 8.99063 11.0006 6.50063 11.0006Z" fill="#C3CAD9"/>
            </svg>
            <form action="">
                <input v-model="search" type="search" placeholder="Search..." />
            </form>
         </div>
         <div class="place">
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 0C3.13 0 0 3.13 0 7C0 11.17 4.42 16.92 6.24 19.11C6.64 19.59 7.37 19.59 7.77 19.11C9.58 16.92 14 11.17 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#C3CAD9"/>
                </svg>
             <select>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
             </select>
                <svg width="2" height="90" viewBox="0 0 2 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="2" height="90" fill="#F2F3F5"/>
                </svg>
         </div>
         <div class="user">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 9.75C6.31 9.75 5.75 10.31 5.75 11C5.75 11.69 6.31 12.25 7 12.25C7.69 12.25 8.25 11.69 8.25 11C8.25 10.31 7.69 9.75 7 9.75ZM13 9.75C12.31 9.75 11.75 10.31 11.75 11C11.75 11.69 12.31 12.25 13 12.25C13.69 12.25 14.25 11.69 14.25 11C14.25 10.31 13.69 9.75 13 9.75ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 9.71 2.02 9.42 2.05 9.14C4.41 8.09 6.28 6.16 7.26 3.77C9.07 6.33 12.05 8 15.42 8C16.2 8 16.95 7.91 17.67 7.74C17.88 8.45 18 9.21 18 10C18 14.41 14.41 18 10 18Z" fill="#C3CAD9"/>
                </svg>
             <p class="user__name">Your name</p>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1593 10.98C17.1993 10.66 17.2293 10.34 17.2293 10C17.2293 9.66 17.1993 9.34 17.1593 9.02L19.2693 7.37C19.4593 7.22 19.5093 6.95 19.3893 6.73L17.3893 3.27C17.2693 3.05 16.9993 2.97 16.7793 3.05L14.2893 4.05C13.7693 3.65 13.2093 3.32 12.5993 3.07L12.2193 0.42C12.1893 0.18 11.9793 0 11.7293 0H7.72933C7.47933 0 7.26933 0.18 7.23933 0.42L6.85933 3.07C6.24933 3.32 5.68933 3.66 5.16933 4.05L2.67933 3.05C2.44933 2.96 2.18933 3.05 2.06933 3.27L0.0693316 6.73C-0.0606684 6.95 -0.000668392 7.22 0.189332 7.37L2.29933 9.02C2.25933 9.34 2.22933 9.67 2.22933 10C2.22933 10.33 2.25933 10.66 2.29933 10.98L0.189332 12.63C-0.000668392 12.78 -0.0506684 13.05 0.0693316 13.27L2.06933 16.73C2.18933 16.95 2.45933 17.03 2.67933 16.95L5.16933 15.95C5.68933 16.35 6.24933 16.68 6.85933 16.93L7.23933 19.58C7.26933 19.82 7.47933 20 7.72933 20H11.7293C11.9793 20 12.1893 19.82 12.2193 19.58L12.5993 16.93C13.2093 16.68 13.7693 16.34 14.2893 15.95L16.7793 16.95C17.0093 17.04 17.2693 16.95 17.3893 16.73L19.3893 13.27C19.5093 13.05 19.4593 12.78 19.2693 12.63L17.1593 10.98ZM9.72933 13.5C7.79933 13.5 6.22933 11.93 6.22933 10C6.22933 8.07 7.79933 6.5 9.72933 6.5C11.6593 6.5 13.2293 8.07 13.2293 10C13.2293 11.93 11.6593 13.5 9.72933 13.5Z" fill="#C3CAD9"/>
                </svg>
                

         </div>
          </div> 
  </header>
</template>

<script>
export default {
 name: 'navbar',
 data(){
     return {
         search: ''
     }
 }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&family=Open+Sans:wght@700&display=swap');
.header {
    margin-top: vw(-90);
	&__row {
        width: 100%;
        background-color: $bg-white;
		display: flex;
		align-items: center;
        border-bottom: 2px solid $text-GrayBlue96;
	}
}
.nav {
    &__list{
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    &__item{
        margin-right: vw(41);
    }
    &__link{
        @include font(vw(13), 700,vh(25));
        color: $text-GrayBlue50;

    }
}
.logo{
    @include font(vw(18), 700, vh(30));
    color: $text-GrayBlue50;
    margin: 0 vw(150) 0 vw(60);
}
.search {
    cursor: pointer;
	display: flex;
	align-items: center;
	margin: 0 vw(40);
    border-right: 2px solid $text-GrayBlue96;
	svg {
        margin-left: vw(21);
		width: vw(18);
	}
	input {
		@include font(vw(13), 700, vh(25));
		margin: 0 vw(10) 0 vw(21);
		color: $text-GrayBlue70;
		border: none;
        
	}
} 
.place{
    display: flex;
    align-items: center;
    svg{
        width: vw(14);
    }
    select{
        margin-left: vw(20);
        margin-right: vw(90);
        min-width: vw(100);
        border: none;
        @include font(vw(13), 700,vh(25));
        color: $text-GrayBlue50;
    }
}
.user{
    display: flex;
    align-items: center;
    margin-left: vw(25);
    &__name{
        margin: 0 vw(100) 0 vw(20);
        @include font(vw(13), 700, vh(25));
        color: $text-GrayBlue50;
    }
    
}
.toggle-button{
    position: relative;
    top: 0;
    left: vw(30);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: vw(30);
    height: vw(21);
    .bar{
        height: vw(3);
        width: 100%;
        background-color: $bg-GrayBlue85;
        border-radius: vw(10);
    }
}

@media screen and(max-width: 1024px) {
    .header {
    margin: 0 auto;
    max-width: vmin(200);
	&__row {
        width: 100%;
        background-color: $bg-white;
		display: flex;
		align-items: center;
        border-bottom: 2px solid $text-GrayBlue96;
        padding: vmin(10) 0;
	}
}
.nav {
    &__list{
        display: none;
    }
}
.logo{
    @include font(vmin(18), 700, vmin(30));
    margin: 0 vmin(30) 0 vmin(60);
}
.search {
	display: none;
} 
.place{
    display: none;
}
.user{
    display: none;
    
}
.toggle-button{
    position: relative;
    top: 0;
    left: vmin(30);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: vmin(15);
    height: vmin(15);
    .bar{
        height: vmin(3);
        width: 100%;
        background-color: $bg-GrayBlue85;
        border-radius: vmin(5);
        z-index: 5;
        cursor: pointer;
    }
}
}

</style>