<template lang="pug">
el-config-provider(:locale="elLocale")
  router-view
</template>

<script setup lang="ts">
  import { watch, ref } from 'vue'
  import { useI18n } from 'vue-i18n';
  import { getElementLocale, updateLocale } from './i18n' 
  
  const { locale } = useI18n();
  const elLocale = ref({})
  
  watch(locale, async () => {
    elLocale.value = await getElementLocale(locale.value)
    updateLocale(locale.value)
  },{ immediate: true })

  const changeLocale = (value) => {
    locale.value = value
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
