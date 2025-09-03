import './assets/main.css'

import { createApp } from 'vue'
import { router } from './routes'
import { createPinia } from 'pinia'
import App from './App.vue' 

createApp(App)

.use(createPinia())
.use(router)
.mount('#app')
