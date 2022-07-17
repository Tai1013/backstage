import { Plugin } from 'vue'
import { createI18n } from 'vue-i18n'

const localePath = './locales/'
const messages = Object.fromEntries(
    Object.entries(import.meta.globEager('./locales/*.json')).map(([key, value]) => {
        return [key.slice(localePath.length, -5), value.default]
    })
)

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem("locale") ?? 'zh-tw',
    fallbackLocale: 'en',
    globalInjection: true,
    messages
})

const install: Plugin = app => {
    app.use(i18n)
}

export default install

export const $t = i18n.global.t