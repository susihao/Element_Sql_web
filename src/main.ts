import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Login from './views/Login.vue'

createApp(App).component('MyComponent', Login)
  .use(store).use(ElementPlus).use(router).mount('#app')
