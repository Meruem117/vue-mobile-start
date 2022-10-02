import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {
    Button, Icon, Tabbar, TabbarItem, NavBar, Cell, CellGroup, Tab, Tabs,
    Divider, Form, Field, Popup, Picker, DatetimePicker, Uploader, Image, Radio, RadioGroup
} from 'vant'
import 'vant/lib/index.css'
import '@/static/css/index.css'
import '@/static/less/index.less'

const app = createApp(App)
app.use(router)
app.use(Button)
    .use(Icon)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Cell)
    .use(CellGroup)
    .use(NavBar)
    .use(Tab)
    .use(Tabs)
    .use(Divider)
    .use(Form)
    .use(Field)
    .use(Popup)
    .use(Picker)
    .use(DatetimePicker)
    .use(Uploader)
    .use(Image)
    .use(Radio)
    .use(RadioGroup)
app.mount('#app')
