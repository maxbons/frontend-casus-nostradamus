// Styling
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'primeicons/primeicons.css'

// Plugins
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Consts
const pinia = createPinia()
const app = createApp(App)

// App
app.use(pinia)
app.mount('#app')
