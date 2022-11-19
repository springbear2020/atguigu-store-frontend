import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// 注册商品分类导航为全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
// 引入 Mock 模拟数据，让其执行一次
import mockServe from '@/mock/mockServe'
// 引入 swiper 轮播图样式
import 'swiper/css/swiper.css'
// 统一引入 api 接口
import * as api from '@/api'
// element-ui 组件按需引入
import {MessageBox} from 'element-ui'

Vue.config.productionTip = false

Vue.component('TypeNav', TypeNav)
Vue.component('Carousel', Carousel)
Vue.component('Pagination', Pagination)


new Vue({
    render: h => h(App),
    router,
    store,
    beforeCreate() {
        // 装配全局事件总线
        Vue.prototype.$bus = this
        // 全局 api 对象
        Vue.prototype.$api = api
        // element-ui 组件按需引入
        Vue.prototype.$msgbox = MessageBox;
        Vue.prototype.$alert = MessageBox.alert;
    }
}).$mount('#app')
