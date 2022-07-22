<template>
  <Selecter :data="categoryList"/>
</template>

<script lang="ts" setup>
import Selecter from '../../components/Selecter/index.vue'
import { getMusicCategory } from '../../api/music'
import { onMounted, ref, Ref } from 'vue';
import { MusicCategory } from '../../interface/info'

let categoryList: Ref<MusicCategory[] | null> = ref(null)

onMounted(async () => {
  const data = await getMusicCategory()
  if (data?.status == 200) {
    const res = data?.data
    categoryList.value = res.data
  }
})
</script>

<style lang="less">
</style>