import { createApp } from 'vue'
import App from './App.vue'
import Bus from "./utils/bus"
import './index.css'

const app = createApp(App)

app.mount('#app')
