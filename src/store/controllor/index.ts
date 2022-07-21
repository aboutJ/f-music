import { defineStore } from 'pinia'

export const useControlStore = defineStore("controllor", {
  state: () => {
    return {
      appLoading: false
    }
  }
})