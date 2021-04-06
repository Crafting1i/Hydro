import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import plugin from './plugins/plugin'

createApp(App).use(router).use(plugin).mount('#app')