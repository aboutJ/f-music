import { defineStore } from "pinia"

export const useMusicStore = defineStore("music", {
  state: () => {
    return {
      categoryList: [] as any[],
      canShowCgList: false,
      categorys: [] as any[]
    }
  }
})