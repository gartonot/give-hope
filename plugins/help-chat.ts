import { reactive } from 'vue'
import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin(() => {
  const helpChat = reactive({
    status: false,
    change: () => (helpChat.status = !helpChat.status)
  })

  return {
    provide: {
      helpChat
    }
  }
})
