import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);


import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'reactApp',   //子应用的名字
    entry: '//localhost:3020',  // 子应用的路径
    container: '#react',  // 装载子应用的容器
    activeRule: '/react',  // 路由匹配
  },
  {
    name: 'vueApp',
    entry: '//localhost:3010',
    container: '#vue',
    activeRule: '/vue',
  }
]);
// 启动 qiankun
start();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// 乾坤主应用会根据配置项，主动发起fecth请求，加载子应用，所以配置子应用的时候，需要解决跨域
