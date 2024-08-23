import Vue from 'vue'
import App from './App.vue'

// //本地测试，按需导入
// import '../components/css/index.scss'
// import {Card,Dialog,Captcha,Table} from '../components/lib/index'
// Vue.use(Card)
// Vue.use(Dialog)
// Vue.use(Captcha)
// Vue.use(Table)

// // 本地测试，全部导入
// import '../components/css/index.scss'
// import API from '../components/lib/index'
// Vue.use(API)


// npm下载，全部导入
import 'cwd-ui/dist/css/index.css'
import CwdUI from "cwd-ui";
Vue.use(CwdUI);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
