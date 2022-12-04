/*
路由器對象模塊
*/

import VueRouter from 'vue-router'

// import Site from '../pages/Site/Site.vue'
// import Login from '../pages/Login/Login.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
// import Search from '../pages/Search/Search.vue'

const Site = () => import('../pages/Site/Site.vue')
const Login = () => import('../pages/Login/Login.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Search = () => import('../pages/Search/Search.vue')


import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'


export default new VueRouter({
    routes:[
        {
            path:'/site',
            component:Site, //返回路由組件的函數,只有執行此函數時,才會加載此路由組件,這個函數在請求對應的路由路徑時才會執行
            meta:{
                showFooter:true
            },
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            },
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            },
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            },
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/',
            redirect:'/site'
        },
        {
            path:'/shop',
            component:Shop,
            children:[
                {
                    path:'/shop/goods',
                    component:ShopGoods
                },
                {
                    path:'/shop/ratings',
                    component:ShopRatings
                },
                {
                    path:'/shop/info',
                    component:ShopInfo
                },
                {
                    path:'/',
                    redirect:'/shop/goods'
                },
            ]
        },
    ]
})