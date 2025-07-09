import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//导入组件
import ElementPlus from 'element-plus'
//导入样式
import 'element-plus/dist/index.css'
//导入图标库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//汉化：中文语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn'

//创建vue3实例
const app = createApp(App)
//注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(createPinia())
app.use(router)
//注册element plus 组件和中文包
app.use(ElementPlus,{
    locale: zhCn, //汉化
})
//挂载
app.mount('#app')
