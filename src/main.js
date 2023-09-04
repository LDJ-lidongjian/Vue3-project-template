import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import Tailwind
import './styles/tailwind.css'

// Import icon-park styles
import '@icon-park/vue-next/styles/index.css';

import App from './App.vue'
import router from './router'

// API test
// import { getCategoryAPI } from '@/apis/testAPI'
// getCategoryAPI().then(res => {
//     console.log(res);
// }) 

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
