import { createApp } from 'vue'
import { createPinia } from 'pinia'
import SvgComponentVue from './components/svg/SvgComponent.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('SvgComponent', SvgComponentVue)

app.mount('#app')
