// Styling
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'primeicons/primeicons.css'
import '@vuepic/vue-datepicker/dist/main.css'

// Plugins
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueDatePicker from '@vuepic/vue-datepicker';
import App from './App.vue'

// Consts
const pinia = createPinia()
const app = createApp(App)

// App
app.use(pinia)
app.component('VueDatePicker', VueDatePicker);
app.mount('#app')
