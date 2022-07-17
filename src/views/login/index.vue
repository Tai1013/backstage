<template lang="pug">
.bg
  mrc-form(
    :define="define"
    :form="form"
  )
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { DefineForm } from '@/components/modules/defines'
import { useI18n } from 'vue-i18n'
import { required, range, type } from '@/validate'

const { t } = useI18n()

const define: DefineForm = [
  {
    label: t('帳號'),
    prop: 'account',
    rules: [
      required,
      range(6, 20),
    ]
  },
  {
    label: t('密碼'),
    type: 'password',
    prop: 'password',
    rules: [
      required,
      range(6, 20),
    ]
  },
  {
    label: t('驗證碼'),
    prop: 'captcha',
    rules: [
      type('number'),
      required,
    ]
  }
]

const form = reactive({
  account: undefined,
  password: undefined,
  captcha: undefined,
})
</script>

<style lang="scss" scoped>
</style>

