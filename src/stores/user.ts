import { defineStore } from 'pinia'
import { userDetailItem } from '@/models/user'

export const useUserStore = defineStore('user', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      user: {} as userDetailItem || null
    }
  },
  getters: {
    getUserInfo(state) {
      return state.user
    }
  }
})