import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Pinia from './plugin/pinia'
import I18n from './i18n/install'
import ElementPlus from './plugin/element-plus'
import installModulesComponents from './components/modules/install' 

const app = createApp(App)


app.use(Router)
app.use(VueAxios, axios)
app.use(Pinia)
app.use(I18n)
app.use(ElementPlus)
app.use(installModulesComponents)

app.mount('#app')