import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/index.js'
import App from '@/App.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import VueLazyload from 'vue-lazyload'
import errorImg from '@/assets/error_img.jpg'
import '@/main.css'

import Pagination from '@/components/UI/Pagination.vue'
import Loader from '@/components/UI/Loader.vue'

const app = createApp(App)
app.use(autoAnimatePlugin)

app.component('Pagination', Pagination)
app.component('Loader', Loader)

app.use(createPinia())
app.use(VueLazyload, { error: errorImg })
app.use(router)
app.mount('#app')
