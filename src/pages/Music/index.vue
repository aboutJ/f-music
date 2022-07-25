<template>
  <Selecter :data="categoryList"/>
  <div class="stg-wrapper">
    <SelectTag />
  </div>
  <div class="music-list">
    <MusicTag />
    <MusicTag />
  </div>
</template>

<script lang="ts" setup>
import Selecter from '../../components/Selecter/index.vue'
import SelectTag from '../../components/SelectTag/index.vue'
import MusicTag from '../../components/MusicTag/index.vue'
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

<style lang="less" scoped>
.stg-wrapper {
  display: flex;
  align-items: center;
  height: 80px;
}
.music-list {
  width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>