import { createApp } from 'vue'
import App from './App.vue'


import axios from "axios";

axios.defaults.withCredentials = false;
axios.defaults.baseURL = "http://localhost:3001/";

createApp(App).mount('#app')
