<template>
  <div v-loading="controlStore.appLoading">
    <Header />
    <div class="app-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useControlStore } from './store'

const controlStore = useControlStore()

controlStore.$subscribe((mutation, state) => {
  if(state.appLoading) {

  }
}, {detached: true})

</script>

<style lang="less" scoped>
.app-wrapper {
  width: 100%;
  padding-top: 74px;
}
</style>
