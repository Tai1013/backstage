import { defineAsyncComponent } from 'vue'

export default app => {
  Object.entries(import.meta.glob('./*.vue')).forEach(([key, file]) => {
    const fileName = 'mrc-' + key.slice(2, -4)
    app.component(fileName, defineAsyncComponent(file))
  })
}