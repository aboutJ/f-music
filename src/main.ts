import { createApp } from 'vue'
import "normalize.css"
import App from './App.vue'
import router from './router/index'
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'
import './assets/style/gobal.less'
import './assets/style/fontclass.css'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
