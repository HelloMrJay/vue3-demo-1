import { createApp } from 'vue'
import router from './router'
import store from './store/index'
import App from './App.vue'

const app = createApp(App).use(router).use(store)
router.isReady().then(() => app.mount('#app'))
