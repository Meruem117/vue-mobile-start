import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Icon, Field, Tabbar, TabbarItem, Cell, CellGroup } from 'vant'
import 'vant/lib/index.css'
import '@/static/css/index.css'

const app = createApp(App)
app.use(router)
    .use(Button)
    .use(Icon)
    .use(Field)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Cell)
    .use(CellGroup)
app.mount('#app')
