<template>
  <div class="user-wrapper">
    <el-avatar :size="38" :src="circleUrl" />
    <div class="selector">
      <div class="arrow">
        <i class="iconfont icon-arrow-down"></i>
      </div>
      <div class="content">
        <div class="place"></div>
        <div class="content-wrapper">
          <div class="item">我的收藏</div>
          <div class="item" @click="logout">退出</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue"
import { useUserStore, useControlStore } from '../../store';

const circleUrl: Ref<string> = ref(
  "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
)

const userStore = useUserStore()
const controlStore = useControlStore()

// 退出登录
const logout = () => {
  localStorage.setItem("f-music-token", "")
  userStore.token = ""
  controlStore.appLoading = true
  setTimeout(() => {
    controlStore.appLoading = false
  }, 1000)
}
</script>

<style lang="less" scoped>
.user-wrapper {
  display: flex;
  align-items: center;
  margin-left: 20px;

  .selector {
    position: relative;
    margin-left: 16px;

    .arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      background-color: #777;
      cursor: pointer;
      box-sizing: border-box;

      > i {
        color: #fff;
      }
    }

    .content {
      display: none;
      position: absolute;
      top: 30px;
      left: -45px;
      width: 120px;
      height: 85px;
      color: #777;

      .content-wrapper {
        width: 100%;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
        background-color: #fff;
        border-radius: 2px;
      }

      .place {
        width: 100%;
        height: 20px;
        background-color: transparent;
      }

      .item {
        width: 100%;
        height: 35px;
        text-align: center;
        line-height: 35px;
        cursor: pointer;
      }

      .item:hover {
        font-weight: 500;
      }
    }

    .arrow:hover + .content{
      display: block;
    }

    .content:hover {
      display: block;
    }
  }
}
</style>
