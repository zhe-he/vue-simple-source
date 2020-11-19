import { createApp } from 'vue'
import App from './App.vue'
import Bus from "./utils/bus"
import './index.css'

const app = createApp(App)

// vue2: Vue.prototype.$bus = new Vue();
// vue2: Vue.prototype.$bus = new Bus();
app.config.globalProperties.$bus = new Bus();

app.mount('#app')
