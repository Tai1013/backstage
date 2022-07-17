export const currentLocale = localStorage.getItem('locale') ?? 'zh-tw'

const localePath = './locales/'

export const localeList = Object.keys(import.meta.globEager('./locales/*.json')).map(locale => locale.slice(localePath.length, -5))

export const getElementLocale = async (value) => {
    return (await import(`../../node_modules/element-plus/es/locale/lang/${value}.mjs`)).default
}

export const updateLocale = (value) => {
    if (localeList.includes(value)) localStorage.setItem('locale', value)
    else throw(`error not locale: '${value}'`)
}