/*
 * @Author: 月魂
 * @Date: 2022-08-22 17:05:43
 * @LastEditTime: 2022-08-24 13:19:29
 * @LastEditors: 月魂
 * @Description: 
 * @FilePath: \vue-admin\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
  
app.use(store).use(router).mount('#app')
