<template>
  <div class="st-wrapper" v-if="musicStore.canShowCgList">
    <div class="wrapper-main tag-wrapper">
      <div class="tag" v-for="item in musicStore.categorys">
        {{item.name}}
        <i class="iconfont icon-chacha" @click="clearSomeTag(item)"></i>
      </div>
      <div class="clear" @click="clearList">清空筛选</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMusicStore } from '../../store'
import { MusicCategory } from '../../interface/info'

const musicStore = useMusicStore()

const clearList = () => {
  musicStore.categoryList = []
  musicStore.categorys = []
}

const clearSomeTag = (item: MusicCategory) => {
  const resultIndex = musicStore.categoryList.findIndex((ele: MusicCategory) => ele.id == item.id)
  musicStore.categoryList.splice(resultIndex, 1)
  musicStore.categorys.splice(resultIndex, 1)
}
</script>

<style lang="less" scoped>
.st-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 24px 0;

  .tag-wrapper {
    display: flex;
  }
  
  .tag {
    display: inline-block;
    padding: 0 10px;
    height: 28px;
    margin-right: 10px;
    background-color: #333;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    box-sizing: border-box;
    line-height: 28px;

    >i {
      font-size: 8px;
      cursor: pointer;
    }
  }

  .tag:last-child {
    margin-right: 0;
  }

  .clear {
    width: 96px;
    height: 28px;
    color: #777;
    border-radius: 4px;
    background-color: #ededed;
    font-size: 14px;
    line-height: 28px;
    text-align: center;
    margin-left: 14px;
    cursor: pointer;
  }
}
</style>