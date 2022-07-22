<template>
  <div class="selecter-wrapper">
    <div class="main">
      <h2>筛选你的音乐</h2>
      <div class="select-list">
        <SelectItem :data="data"/>
      </div>
      <div class="menu">
        <div class="list">
          <img class="icon" :src="ListOnImage" alt="" />
          <img class="icon" :src="ListFillOffImage" alt="" />
        </div>
        <div class="btns">
          <span class="recom">推荐</span>
          <span class="hot">热门</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SelectItem from '../SelectItem/index.vue'
import {ListOnImage, ListOffImage, ListFillOffImage, ListFillOnImage} from '../../utils/constant'

defineProps(["data"])
</script>

<style lang="less" scoped>
.selecter-wrapper {
  
  display: flex;
  justify-content: center;
  width: 100%;
  height: 190px;
  background-color: #292a2a;

  .main {
    position: relative;
    width: 1180px;

    > h2 {
      font-size: 40px;
      color: #fff;
      margin: 0;
      padding-top: 35px;
    }

    .select-list {
      margin-top: 35px;
    }
  }

  .menu {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 25px;
    z-index: 10;

    .list {
      
      .icon {
        width: 28px;
        height: 28px;
        margin-right: 18px;
      }
    }

    .btns {
      display: flex;
      height: 38px;
      cursor: pointer;

      .btn {
        width: 70px;
        height: 100%;
        text-align: center;
        line-height: 38px;
      }

      .recom {
        .btn;
        background-color: #34a95b;
        color: #fff;
        border-radius: 4px 0 0 4px;
      }

      .hot {
        .btn;
        background-color: #fff;
        color: #333;
        border-radius: 0 4px 4px 0;
      }
    }
  }
}
</style>
