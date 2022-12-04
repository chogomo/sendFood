import Vue from 'vue'
import moment from 'moment'

//自定義過濾器
Vue.filter('date-format',function(value,formatStr='YYYY-MM-DD HH:mm:ss'){
    return moment(value).format(formatStr)
})