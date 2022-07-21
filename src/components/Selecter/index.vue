<template>
  <div class="selecter-wrapper">
    <div class="main">
      <h2>筛选你的音乐</h2>
      <div class="select-list">
        <SelectItem />
      </div>
      <div class="menu">
        <div class="list">
          <img class="icon" :src="ListOn" alt="">
        </div>
        <div class="btns">

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import SelectItem from '../SelectItem/index.vue'
import ListOn from '../../assets/image/list-on.svg'

</script>

<style lang="less" scoped>
.selecter-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 190px;
  background-color: #292a2a;

  .main {
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
    position: absolute;
    right: 0;
    bottom: 25px;
    width: 263px;
    z-index: 10;

    .list {
      
      .icon {
        width: 28px;
        height: 28px;
      }
    }
  }
}
</style>
