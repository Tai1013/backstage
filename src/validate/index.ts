import { $t } from '@/i18n/install'

export const type = (type: string) => {
  if (type === 'number') return { type: 'number', message: $t('僅限數字') }
}

export const required = { required: true, message: $t('不能為空') }

export const range = (min: number, max: number) => ({
  min: min,
  max: max,
  message: $t('僅限{min}到{max}碼', { min: min, max: max })
})