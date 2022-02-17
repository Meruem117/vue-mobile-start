import { createApp } from 'vue'
import App from './App.vue'
import { Button } from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
app.use(Button)
app.mount('#app')
