import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import axios from 'axios'
import VueClipboard from 'vue3-clipboard';


createApp(App).use(router, axios, VueClipboard).mount('#app')
