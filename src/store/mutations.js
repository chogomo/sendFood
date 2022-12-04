/*
直接更新state的多個方法的對象
*/
import Vue from 'vue'
import{
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    RECEIVE_GOODS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOP
}from './mutation-types'
export default {
    [RECEIVE_ADDRESS] (state,{address}) {
        state.address = address
    },
    [RECEIVE_CATEGORYS] (state,{categorys}) {
        state.categorys = categorys
    },
    [RECEIVE_SHOPS] (state,{shops}) {
        state.shops = shops
    },
    [RECEIVE_USER_INFO] (state,{userInfo}) {
        state.userInfo = userInfo
    },
    [RESET_USER_INFO] (state) {
        state.userInfo = {}
    },
    [RECEIVE_INFO] (state,{info}) {
        state.info = info
    },
    [RECEIVE_RATINGS] (state,{ratings}) {
        state.ratings = ratings
    },
    [RECEIVE_GOODS] (state,{goods}) {
        state.goods = goods
    },
    [INCREMENT_FOOD_COUNT] (state,{food}) {
        if(!food.count){ //第一次增加
           // food.count=1 //新增屬性(沒有數據綁定)
           /*
           對象
           屬姓名
           屬性值
           */
           Vue.set(food,'count',1)//讓新增的屬性也有數據綁定
            //將food添加到cartFoods中
            state.cartFoods.push(food)
        }else{
            food.count++

        }
    },
    [DECREMENT_FOOD_COUNT] (state,{food}) {
        if (food.count) {//只有有值才去減
            food.count--
            if(food.count===0){
                //將food從cartFoods中移除
                state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            }

        }
        
    },
    [CLEAR_CART](state){
        //清除food中的count
        state.cartFoods.forEach( food => food.count = 0)
        //移除購物車中所有購物項
        state.cartFoods = []
    },
    [RECEIVE_SEARCH_SHOP] (state,{searchShops}) {
        state.searchShops = searchShops
    },
}