import { Plugin } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const install: Plugin = app => {
    app.use(ElementPlus)
}

export default install