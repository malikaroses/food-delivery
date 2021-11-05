import Vue from 'vue'
import Router from 'vue-router'

import vCatalog from '../components/catalog/v-catalog'
import vCart from '../components/cart/v-cart'
import MainFood from '../components/layouts/MainFood'
import vProductPage from '../components/catalog/v-product-page'
import Map from '@/components/layouts/Map'

Vue.use(Router);

let router = new Router({
    routes: [{
            path: '/',
            name: 'MainFood',
            component: MainFood
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: vCatalog
        },
        {
            path: '/product',
            name: 'product',
            component: vProductPage
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true
        },
        {
            path: '/profile',
            name: 'Map',
            component: Map
        },

    ]
})

export default router;