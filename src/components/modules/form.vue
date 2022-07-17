<template lang="pug">
el-form(
  ref="formRef"
  label-position="top"
  :model="form"
)
  el-form-item(
    v-for="item in define" :key="item.label"
    :label="item.label"
    :prop="item.prop"
    :rules="item.rules"
  )
    el-input(
      v-model="form[item.prop]"
      :type="item.type"
      :placeholder="$t('請輸入')"
      :show-password="item.type === 'password'"
    )
  el-form-item
    el-button(type="primary" @click="submitForm(formRef)") Submit
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance } from 'element-plus'

const props = defineProps({
  define: {
    type: Object,
    required: true
  },
  form: {
    type: Object,
    required: true
  },
  rules: {
    type: Object,
  }
})

const formRef = ref<FormInstance>()

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

</script>

<style lang="scss" scoped></style>

